// Dynamic Year and Last Modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Hamburger Menu Toggle
const menuButton = document.getElementById('menu');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});