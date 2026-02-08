// Main page - Level selection

// Show level selection screen
function showLevelSelection() {
  let html = '';
  for (let i = 1; i <= 20; i++) {
    const levelKey = `level${i}`;
    const progress = levelProgress[levelKey];
    const isUnlocked = progress.unlocked;
    const isCompleted = progress.everCompleted || false;
    
    let statusClass = 'locked';
    let statusText = '🔒 Locked';
    
    if (isCompleted) {
      statusClass = 'completed';
      statusText = '⭐ Completed';
    } else if (isUnlocked) {
      statusClass = 'unlocked';
      statusText = 'Start';
    }
    
    html += `
      <div class="level-card ${statusClass}" ${isUnlocked ? `onclick="startLevel(${i})"` : ''}>
        <div class="level-number">Level ${i}</div>
        <div class="level-status">${statusText}</div>
      </div>
    `;
  }
  
  document.getElementById('levels-grid').innerHTML = html;
}

// Start a specific level
function startLevel(level) {
  const levelKey = `level${level}`;
  
  // Always start from quiz 0 when entering a level (allows replaying)
  currentQuizIndex = 0;
  levelProgress[levelKey].quizIndex = 0;
  levelProgress[levelKey].completed = 0;
  
  // Check if level has quizzes
  if (!kanjiData[levelKey] || kanjiData[levelKey].length === 0) {
    alert(`Level ${level} is not yet available. Only Levels 1 and 2 have content for now.`);
    return;
  }
  
  saveProgress();
  
  // Determine which page to go to based on quiz type
  const firstQuiz = kanjiData[levelKey][0];
  if (firstQuiz.type === 'word_match') {
    window.location.href = `match.html?level=${level}`;
  } else {
    window.location.href = `quiz.html?level=${level}`;
  }
}

function resetProgress() {
  if (confirm('Reset all progress? This will lock all levels except Level 1.')) {
    localStorage.removeItem('kanjiProgress');
    initProgress();
    showLevelSelection();
  }
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  initProgress();
  showLevelSelection();
});