function updateProgress(chapterNumber, value) {
    const progressBar = document.getElementById(`progress-${chapterNumber}`);
    const progressValue = document.getElementById(`value-${chapterNumber}`);
    progressBar.style.width = `${value}%`;
    progressValue.textContent = `${value}%`;
    
    // Save progress to localStorage
    localStorage.setItem(`chapter-${chapterNumber}-progress`, value);
}

function loadProgress() {
    const inputs = document.querySelectorAll('.progress-input');
    inputs.forEach(input => {
        const chapterNumber = input.id.split('-')[1];
        const savedProgress = localStorage.getItem(`chapter-${chapterNumber}-progress`);
        if (savedProgress) {
            input.value = savedProgress;
            updateProgress(chapterNumber, savedProgress);
        }
    });
}

// Add hover effects
document.querySelectorAll('.chapter, .intro, .setup').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = '#fff7ed';
    });
    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = '#ffffff';
    });
});

// Load saved progress when the page loads
window.addEventListener('load', loadProgress);
