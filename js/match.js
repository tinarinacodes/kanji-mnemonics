// Match page - Word match specific code
let selectedKanji = null;
let selectedMeaning = null;
let matchedPairs = [];

function loadWordMatch() {
  const levelKey = `level${currentLevel}`;
  const quizzes = kanjiData[levelKey];
  
  if (!quizzes || quizzes.length === 0) {
    document.getElementById('quiz-container').innerHTML = '<p>This level is not yet available.</p>';
    return;
  }
  
  const quiz = quizzes[currentQuizIndex];
  if (!quiz) return;

  document.getElementById('current-quiz').textContent = currentQuizIndex + 1;
  
  matchedPairs = [];
  selectedKanji = null;
  selectedMeaning = null;
  
  // Shuffle the pairs for randomness
  const shuffledKanji = [...quiz.pairs].sort(() => Math.random() - 0.5);
  const shuffledMeanings = [...quiz.pairs].sort(() => Math.random() - 0.5);
  
  let html = `
    <div class="word-match-container">
      <div class="word-match-instruction">${quiz.instruction}</div>
      <div class="word-match-grid">
        <div class="word-match-column">
          <h3>Kanji</h3>
          ${shuffledKanji.map((pair, i) => `
            <div class="match-btn kanji" data-kanji="${pair.kanji}" onclick="selectKanji('${pair.kanji}')">
              <div class="kanji-text">${pair.kanji}</div>
              ${showRomaji ? `<div class="reading-text">${pair.reading}</div>` : ''}
              ${showFurigana ? `<div class="reading-text">${pair.hiragana || pair.reading}</div>` : ''}
              <div class="audio-icon" onclick="playMatchAudio(event, '${pair.kanji}')">🔊</div>
            </div>
          `).join('')}
        </div>
        <div class="word-match-column">
          <h3>English</h3>
          ${shuffledMeanings.map((pair, i) => `
            <div class="match-btn meaning" data-meaning="${pair.meaning}" onclick="selectMeaning('${pair.meaning}')">
              ${pair.meaning}
            </div>
          `).join('')}
        </div>
      </div>
      <div class="word-match-progress">Matched: <span id="match-count">0</span> / ${quiz.pairs.length}</div>
      <div class="word-match-complete" id="match-complete" style="display: none;">
        <div class="feedback correct">Perfect! All matched! 🎉</div>
        <button class="continue-btn" onclick="continueFromWordMatch()">Continue →</button>
      </div>
    </div>
  `;
  
  document.getElementById('quiz-container').innerHTML = html;
}

function selectKanji(kanji) {
  // Don't allow selecting if already matched
  if (matchedPairs.some(p => p.kanji === kanji)) return;
  
  // Remove previous selection
  document.querySelectorAll('.match-btn.kanji').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  // Select this kanji
  selectedKanji = kanji;
  document.querySelector(`[data-kanji="${kanji}"]`).classList.add('selected');
  
  // Check if we have both selections
  if (selectedMeaning) {
    checkMatch();
  }
}

function selectMeaning(meaning) {
  // Don't allow selecting if already matched
  if (matchedPairs.some(p => p.meaning === meaning)) return;
  
  // Remove previous selection
  document.querySelectorAll('.match-btn.meaning').forEach(btn => {
    btn.classList.remove('selected');
  });
  
  // Select this meaning
  selectedMeaning = meaning;
  document.querySelector(`[data-meaning="${meaning}"]`).classList.add('selected');
  
  // Check if we have both selections
  if (selectedKanji) {
    checkMatch();
  }
}

function checkMatch() {
  const levelKey = `level${currentLevel}`;
  const quiz = kanjiData[levelKey][currentQuizIndex];
  
  // Find if this is a correct match
  const isCorrect = quiz.pairs.some(pair => 
    pair.kanji === selectedKanji && pair.meaning === selectedMeaning
  );
  
  if (isCorrect) {
    // Mark as matched
    matchedPairs.push({ kanji: selectedKanji, meaning: selectedMeaning });
    
    const kanjiBtn = document.querySelector(`[data-kanji="${selectedKanji}"]`);
    const meaningBtn = document.querySelector(`[data-meaning="${selectedMeaning}"]`);
    
    kanjiBtn.classList.remove('selected');
    kanjiBtn.classList.add('matched');
    meaningBtn.classList.remove('selected');
    meaningBtn.classList.add('matched');
    
    // Update count
    document.getElementById('match-count').textContent = matchedPairs.length;
    
    // Check if all matched
    if (matchedPairs.length === quiz.pairs.length) {
      setTimeout(() => {
        completeWordMatch();
      }, 500);
    }
  } else {
    // Incorrect match - shake and deselect
    const kanjiBtn = document.querySelector(`[data-kanji="${selectedKanji}"]`);
    const meaningBtn = document.querySelector(`[data-meaning="${selectedMeaning}"]`);
    
    kanjiBtn.style.animation = 'shake 0.5s';
    meaningBtn.style.animation = 'shake 0.5s';
    
    setTimeout(() => {
      kanjiBtn.classList.remove('selected');
      meaningBtn.classList.remove('selected');
      kanjiBtn.style.animation = '';
      meaningBtn.style.animation = '';
    }, 500);
  }
  
  // Reset selections
  selectedKanji = null;
  selectedMeaning = null;
}

function completeWordMatch() {
  const levelKey = `level${currentLevel}`;
  
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
  
  // Show completion message
  document.getElementById('match-complete').style.display = 'block';
}

function continueFromWordMatch() {
  if (currentQuizIndex < 9) {
    currentQuizIndex++;
    loadWordMatch();
  } else {
    // Level complete
    const feedback = document.createElement('div');
    feedback.className = 'feedback correct';
    feedback.textContent = `Level ${currentLevel} Complete! 🎉`;
    document.getElementById('quiz-container').innerHTML = '';
    document.getElementById('quiz-container').appendChild(feedback);
    
    setTimeout(() => {
      backToLevels();
    }, 2000);
  }
}

function playMatchAudio(event, kanji) {
  event.stopPropagation();
  
  if (audioData[kanji]) {
    const audio = new Audio(audioData[kanji]);
    audio.play().catch(err => {
      console.log('Audio playback failed (file may not exist):', err);
    });
  }
}

function refreshWordMatch() {
  const levelKey = `level${currentLevel}`;
  const quiz = kanjiData[levelKey][currentQuizIndex];
  
  // Update all kanji buttons to show/hide readings
  document.querySelectorAll('.match-btn.kanji').forEach(btn => {
    const kanji = btn.getAttribute('data-kanji');
    const pair = quiz.pairs.find(p => p.kanji === kanji);
    
    if (pair) {
      // Keep the matched/selected state
      const isMatched = btn.classList.contains('matched');
      const isSelected = btn.classList.contains('selected');
      
      let html = `
        <div class="kanji-text">${pair.kanji}</div>
        ${showRomaji ? `<div class="reading-text">${pair.reading}</div>` : ''}
        ${showFurigana ? `<div class="reading-text">${pair.hiragana || pair.reading}</div>` : ''}
        <div class="audio-icon" onclick="playMatchAudio(event, '${pair.kanji}')">🔊</div>
      `;
      
      btn.innerHTML = html;
      
      // Restore state
      if (isMatched) btn.classList.add('matched');
      if (isSelected) btn.classList.add('selected');
    }
  });
}

// Override toggle functions to refresh match display
function toggleRomaji() {
  showRomaji = !showRomaji;
  document.getElementById('romaji-toggle').classList.toggle('active', showRomaji);
  if (showRomaji) {
    showFurigana = false;
    document.getElementById('furigana-toggle').classList.remove('active');
  }
  refreshWordMatch();
}

function toggleFurigana() {
  showFurigana = !showFurigana;
  document.getElementById('furigana-toggle').classList.toggle('active', showFurigana);
  if (showFurigana) {
    showRomaji = false;
    document.getElementById('romaji-toggle').classList.remove('active');
  }
  refreshWordMatch();
}

// Start the match when page loads
window.addEventListener('DOMContentLoaded', () => {
  updateProgressBar();
  loadWordMatch();
});
