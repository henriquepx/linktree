const textElement = document.querySelector('.typing-text');
const text = 'Desenvolvedor Front-end Jr'; 
const typingSpeed = 100;
let charIndex = 0;

function typeText() {
  if (charIndex < text.length) {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  }
}
typeText();

const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

const iconToggle = () => {
  moonIcon.classList.toggle('display-none');
  sunIcon.classList.toggle('display-none');
};

const themeCheck = () => {
  if(userTheme === 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
    moonIcon.classList.add('display-none');
    return;
  }
  sunIcon.classList.add('display-none');
}

const themeSwitch = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    iconToggle();
    return;
  }
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  iconToggle();
}

moonIcon.addEventListener('click', () => {
  themeSwitch();
});

sunIcon.addEventListener('click', () => {
  themeSwitch();
});


themeCheck();