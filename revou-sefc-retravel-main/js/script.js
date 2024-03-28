// FORM VALIDATION

function formSubmit() {
  let form = document.forms["form-contact"];
  let username = form["name"].value;
  let email = form["email"].value;

  if (username === "" || email === "") {
    alert("Username atau email Harus diisi");
  } else {
    alert("Berhasil");
  }
}
document.getElementById("send-button").addEventListener("click", () => formSubmit());

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Slide show

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("main__img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
