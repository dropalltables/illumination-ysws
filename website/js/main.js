const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.backgroundColor = '#ff5722';
  });
  
  button.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
    this.style.backgroundColor = '#4CAF50';
  });
});

// Change title color when clicked
const title = document.querySelector('.title');
let titleClicked = false;

title.addEventListener('click', function() {
  if (!titleClicked) {
    this.style.color = '#ff5722';
    this.style.textShadow = '3px 3px 0 #00ff00';
    titleClicked = true;
  } else {
    this.style.color = '#3f51b5';
    this.style.textShadow = '3px 3px 0 yellow';
    titleClicked = false;
  }
});

// Add a simple Easter egg
let secretCode = '';
const easterEggCode = 'minion';

document.addEventListener('keydown', function(e) {
  secretCode += e.key.toLowerCase();
  secretCode = secretCode.slice(-6); // Keep only the last 6 keystrokes
  
  if (secretCode === easterEggCode) {
    document.body.style.backgroundColor = '#ffd600'; // Minion yellow!
    alert("🍌 You found a banana! 🍌");
  }
});