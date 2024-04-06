const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");

  navToggle.firstElementChild.classList.contains("fa-bars")?
  navToggle.firstElementChild.classList.replace("fa-bars","fa-xmark"):
  navToggle.firstElementChild.classList.replace("fa-xmark","fa-bars");
});


function redirectToLoginPage() {
  window.location.href = "http://localhost/a-gym-website/login.php";
}

function redirectTohomePge() {
  window.location.href = "http://localhost/a-gym-website/logout.php";
}
