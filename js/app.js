document.addEventListener("DOMContentLoaded", () => {
 const toggleBtn = document.getElementById("toggle-liquid-glass");

 toggleBtn.addEventListener("click", function() {
 this.classList.toggle("on");
 document.body.classList.toggle("liquid-glass-enabled");
 });

 // Handle search form submission
 const form = document.getElementById("search-form");
 form.addEventListener("submit", function(e) {
 e.preventDefault();
 const fileInput = this.elements[0];
 if (!fileInput.files.length) {
 alert("Please select an image first.");
 return;
 }
 const imageFile = fileInput.files[0];
 fetch(`js/fileReader.js`, { method: 'POST', body: JSON.stringify({file: imageFile}) });
 });
});
