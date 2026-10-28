let currentTheme = localStorage.getItem("theme") || "light";
let liquidGlassEnabled = localStorage.getItem("liquidGlass") === "true";

function applyTheme(themeClass) {
 document.body.className = themeClass + "-mode";
}

function setBackground(imageUrl) {
 document.body.style.backgroundImage = `url(${imageUrl})`;
}

function playMusic(trackUrl) {
 const audio = new Audio(trackUrl);
 audio.loop = true;
 audio.play().catch(err => console.warn(err));
}

applyTheme(currentTheme);
