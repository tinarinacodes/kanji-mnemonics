// Quiz page - Mnemonic quiz specific code
let userAnswers = [];
let popupKanjiIndex = 0;
let popupKanjiList = [];
let touchStartX = 0;
let touchEndX = 0;

function loadQuiz() {
  const levelKey = `level${currentLevel}`;
  const quizzes = kanjiData[levelKey];
  
  if (!quizzes || quizzes.length === 0) {
    document.getElementById('quiz-container').innerHTML = '<p>This level is not yet available.</p>';
    return;
  }
  
  const quiz = quizzes[currentQuizIndex];
  if (!quiz) return;

  document.getElementById('current-quiz').textContent = currentQuizIndex + 1;
  
  // Initialize fresh userAnswers for new quiz
  userAnswers = new Array(quiz.variants.length).fill(null);
  renderQuiz();
}

function renderQuiz() {
  const levelKey = `level${currentLevel}`;
  const quiz = kanjiData[levelKey][currentQuizIndex];
  if (!quiz) return;
  
  // Build equation boxes HTML
  let equationHTML = '';
  quiz.variants.forEach((v, i) => {
    const hasAnswer = userAnswers[i] !== null;
    const boxClass = hasAnswer ? 'filled' : 'empty';
    
    equationHTML += `
      <div class="kanji-box ${boxClass}" onclick="clearBox(${i})">
        <span style="font-size: 48px;">${hasAnswer ? userAnswers[i] : ''}</span>
        ${!hasAnswer ? `<div class="placeholder">${v.meaning}<br>(${v.reading})</div>` : ''}
      </div>
    `;
    
    if (i < quiz.variants.length - 1) {
      equationHTML += '<span class="operator">+</span>';
    }
  });
  
  let html = `
    <div class="mnemonic">${highlightKeywords(quiz.mnemonic, quiz.keywords)}</div>
    <div class="equation">
      ${equationHTML}
      <span class="operator">=</span>
      <div class="kanji-box result">${quiz.result.kanji}</div>
    </div>
    <div class="options-container">
      ${quiz.options.map((opt, i) => `
        <div class="option-btn ${isUsed(opt.kanji) ? 'used' : ''}" onclick="selectOption('${opt.kanji}', ${i})">
          <div>${opt.kanji}</div>
          <div class="audio-icon" onclick="playAudio(event, '${opt.kanji}')">🔊</div>
          ${showRomaji ? `<div class="reading-text">${opt.reading}</div>` : ''}
          ${showFurigana ? `<div class="reading-text">${opt.hiragana || opt.reading}</div>` : ''}
        </div>
      `).join('')}
    </div>
    <div class="feedback" id="feedback"></div>
  `;

  document.getElementById('quiz-container').innerHTML = html;
}

function highlightKeywords(text, keywords) {
  let result = text;
  keywords.forEach((keyword, i) => {
    result = result.replace(keyword, `<span class="keyword keyword-${i}">${keyword}</span>`);
  });
  return result;
}

function isUsed(kanji) {
  return userAnswers.includes(kanji);
}

function selectOption(kanji, optionIndex) {
  // Don't allow selection if already used
  if (isUsed(kanji)) return;
  
  // Find first empty slot
  const emptyIndex = userAnswers.findIndex(a => a === null);
  if (emptyIndex === -1) return;

  userAnswers[emptyIndex] = kanji;
  renderQuiz();

  // Check if all filled
  if (userAnswers.every(a => a !== null)) {
    checkAnswer();
  }
}

function clearBox(index) {
  if (userAnswers[index]) {
    userAnswers[index] = null;
    renderQuiz();
  }
}

function checkAnswer() {
  const levelKey = `level${currentLevel}`;
  const quiz = kanjiData[levelKey][currentQuizIndex];
  const correct = userAnswers.every((answer, i) => answer === quiz.variants[i].kanji);
  
  const feedback = document.getElementById('feedback');
  
  if (correct) {
    feedback.textContent = '正解！ (Correct!)';
    feedback.className = 'feedback correct';
    
    // Update progress for current session
    levelProgress[levelKey].completed++;
    
    // Check if level completed (all 10 quizzes done)
    if (levelProgress[levelKey].completed === 10) {
      // Mark as ever completed
      levelProgress[levelKey].everCompleted = true;
      
      // Unlock next level
      if (currentLevel < 20) {
        const nextLevelKey = `level${currentLevel + 1}`;
        levelProgress[nextLevelKey].unlocked = true;
      }
    }
    
    saveProgress();
    updateProgressBar();
    
    // Show popup after a brief delay
    setTimeout(() => {
      showKanjiPopup(quiz);
    }, 1000);
  } else {
    feedback.textContent = '間違い (Incorrect, try again)';
    feedback.className = 'feedback incorrect';
    setTimeout(() => {
      userAnswers = new Array(quiz.variants.length).fill(null);
      renderQuiz();
    }, 1000);
  }
}

// Override toggle functions to refresh quiz
function toggleRomaji() {
  showRomaji = !showRomaji;
  document.getElementById('romaji-toggle').classList.toggle('active', showRomaji);
  if (showRomaji) {
    showFurigana = false;
    document.getElementById('furigana-toggle').classList.remove('active');
  }
  renderQuiz();
}

function toggleFurigana() {
  showFurigana = !showFurigana;
  document.getElementById('furigana-toggle').classList.toggle('active', showFurigana);
  if (showFurigana) {
    showRomaji = false;
    document.getElementById('romaji-toggle').classList.remove('active');
  }
  renderQuiz();
}

// Popup Functions
function showKanjiPopup(quiz) {
  // Build list of all kanji (variants + result)
  popupKanjiList = [
    ...quiz.variants.map(v => ({ ...v, type: 'variant' })),
    { ...quiz.result, type: 'result' }
  ];
  
  popupKanjiIndex = 0;
  
  // Show popup
  document.getElementById('popup-overlay').classList.add('active');
  
  // Setup swipe detection
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.addEventListener('touchstart', handleTouchStart);
  popupContainer.addEventListener('touchend', handleTouchEnd);
  
  // Render first kanji
  renderPopupKanji();
}

function renderPopupKanji() {
  const kanji = popupKanjiList[popupKanjiIndex];
  
  const content = `
    <div class="popup-kanji">${kanji.kanji}</div>
    <div class="popup-reading">${kanji.hiragana || kanji.reading}</div>
    <div class="popup-meaning">${kanji.meaning}</div>
    <button class="popup-audio-btn" onclick="playPopupAudio('${kanji.kanji}')">
      🔊 Listen
    </button>
  `;
  
  document.getElementById('popup-content').innerHTML = content;
  
  // Update dots
  let dotsHTML = '';
  for (let i = 0; i < popupKanjiList.length; i++) {
    dotsHTML += `<div class="swipe-dot ${i === popupKanjiIndex ? 'active' : ''}"></div>`;
  }
  document.getElementById('popup-dots').innerHTML = dotsHTML;
  
  // Update navigation buttons
  document.getElementById('popup-prev').disabled = popupKanjiIndex === 0;
  document.getElementById('popup-next').disabled = popupKanjiIndex === popupKanjiList.length - 1;
}

function prevKanji() {
  if (popupKanjiIndex > 0) {
    popupKanjiIndex--;
    renderPopupKanji();
  }
}

function nextKanji() {
  if (popupKanjiIndex < popupKanjiList.length - 1) {
    popupKanjiIndex++;
    renderPopupKanji();
  }
}

function playPopupAudio(kanji) {
  if (audioData[kanji]) {
    const audio = new Audio(audioData[kanji]);
    audio.play().catch(err => {
      console.log('Audio playback failed (file may not exist):', err);
    });
  }
}

function closePopupAndContinue() {
  // Close popup
  document.getElementById('popup-overlay').classList.remove('active');
  
  // Clear feedback
  const feedback = document.getElementById('feedback');
  feedback.textContent = '';
  
  // Check if level is complete
  if (currentQuizIndex < 9) {
    currentQuizIndex++;
    loadQuiz();
  } else {
    feedback.textContent = `Level ${currentLevel} Complete! 🎉`;
    feedback.className = 'feedback correct';
    setTimeout(() => {
      backToLevels();
    }, 2000);
  }
}

// Touch/Swipe handlers
function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}

function handleSwipe() {
  if (touchEndX < touchStartX - 50) {
    // Swipe left - next kanji
    nextKanji();
  }
  if (touchEndX > touchStartX + 50) {
    // Swipe right - previous kanji
    prevKanji();
  }
}

// Start the quiz when page loads
window.addEventListener('DOMContentLoaded', () => {
  updateProgressBar();
  loadQuiz();
});
