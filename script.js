const form = document.querySelector("form");
const success = document.querySelector(".success");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  form.style.display = "none";
  success.style.display = "block";
}
