const phrases = [
  "Bersama Menyuarakan Aspirasi, Demi Kelas yang Lebih Baik.",
  "dari pelajar, oleh pelajar, untuk pelajar."
];

const typingEl = document.getElementById("typing-text");

const TYPING_SPEED = 100; // ms per character while typing
const ERASING_SPEED = 50; // ms per character while deleting
const POST_TYPE_DELAY = 2000; // delay after phrase finished typing

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting && charIndex <= currentPhrase.length) {
    typingEl.textContent = currentPhrase.substring(0, charIndex);
    charIndex += 1;
    setTimeout(typeLoop, TYPING_SPEED);
  } else if (isDeleting && charIndex >= 0) {
    typingEl.textContent = currentPhrase.substring(0, charIndex);
    charIndex -= 1;
    setTimeout(typeLoop, ERASING_SPEED);
  } else if (!isDeleting && charIndex > currentPhrase.length) {
    // Finished typing current phrase, hold before deleting
    isDeleting = true;
    setTimeout(typeLoop, POST_TYPE_DELAY);
  } else if (isDeleting && charIndex < 0) {
    // Finished deleting, move to next phrase
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeLoop, TYPING_SPEED);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (phrases.length) {
    typeLoop();
  }
});