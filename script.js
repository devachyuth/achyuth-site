// script.js


const phrases = [
  "Crafting Designs.",
  "Building Bots.",
  "Creating SnapTier.",
  "Making Ideas Real."
];

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;
const typingElement = document.getElementById("typing");

function loop() {
  isEnd = false;
  typingElement.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      typingElement.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      typingElement.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const speed = isEnd ? 1400 : isDeleting ? 60 : 100;
  setTimeout(loop, speed);
}

loop();
