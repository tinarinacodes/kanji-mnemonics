// Shared functions and state
let currentLevel = 1;
let currentQuizIndex = 0;
let showRomaji = false;
let showFurigana = false;
let levelProgress = {};

// Initialize level progress from localStorage or create new
function initProgress() {
  const saved = localStorage.getItem('kanjiProgress');
  if (saved) {
    levelProgress = JSON.parse(saved);
  } else {
    // Initialize with level 1 unlocked
    for (let i = 1; i <= 20; i++) {
      levelProgress[`level${i}`] = {
        unlocked: i === 1,
        completed: 0,
        quizIndex: 0,
        everCompleted: false
      };
    }
    saveProgress();
  }
}

// Save progress to localStorage
function saveProgress() {
  localStorage.setItem('kanjiProgress', JSON.stringify(levelProgress));
}

// Get URL parameters
function getUrlParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Set URL parameters
function setUrlParam(param, value) {
  const url = new URL(window.location);
  url.searchParams.set(param, value);
  window.history.pushState({}, '', url);
}

// Go back to level selection
function backToLevels() {
  window.location.href = 'index.html';
}

// Toggle functions
function toggleRomaji() {
  showRomaji = !showRomaji;
  document.getElementById('romaji-toggle').classList.toggle('active', showRomaji);
  if (showRomaji) {
    showFurigana = false;
    document.getElementById('furigana-toggle').classList.remove('active');
  }
}

function toggleFurigana() {
  showFurigana = !showFurigana;
  document.getElementById('furigana-toggle').classList.toggle('active', showFurigana);
  if (showFurigana) {
    showRomaji = false;
    document.getElementById('romaji-toggle').classList.remove('active');
  }
}

// Update progress bar
function updateProgressBar() {
  const levelKey = `level${currentLevel}`;
  const percentage = (levelProgress[levelKey].completed / 10) * 100;
  document.getElementById('progress-fill').style.width = percentage + '%';
}

// Play audio
function playAudio(event, kanji) {
  event.stopPropagation();
  
  if (audioData[kanji]) {
    const audio = new Audio(audioData[kanji]);
    audio.play().catch(err => {
      console.log('Audio playback failed (file may not exist):', err);
      event.target.style.transform = 'scale(1.3)';
      setTimeout(() => {
        event.target.style.transform = 'scale(1)';
      }, 200);
    });
  }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  initProgress();
  
  // Get current level from URL if present
  const level = getUrlParam('level');
  if (level) {
    currentLevel = parseInt(level);
  }
  
  // Set level title
  const levelTitle = document.getElementById('current-level-title');
  if (levelTitle) {
    levelTitle.textContent = `Level ${currentLevel}`;
  }
});