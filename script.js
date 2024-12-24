const card = document.querySelector('.card');
const closeButton = document.getElementById('close-card');

// Ask for the user's name when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const userName = prompt("What should I call you?");

  // Update the greeting message with the user's name
  if (userName) {
    const greeting = document.querySelector('.card-inside h1');
    greeting.textContent = `Happy Holidays, ${userName}!`;
  }
});

// Flip card when clicked
card.addEventListener('click', () => {
  card.classList.add('flipped');
});

// Close card
closeButton.addEventListener('click', (e) => {
  e.stopPropagation();
  card.classList.remove('flipped');
});