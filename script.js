const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Quote request ready! Later we can connect this to email or Google Forms.");
});
