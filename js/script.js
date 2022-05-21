(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const email = searchParams.get("email");
  console.log(email);
  const domEmail = document.querySelector("[data-email]");
  console.log(domEmail);

  if (domEmail) {
    domEmail.textContent = "Updates will be sent to " + email;
  }
})();

document.getElementById("theme-btn").addEventListener("click", toggleTheme);
function toggleTheme() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}

const nav = document.getElementById("header-nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } else {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
  }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  if (nav.classList.contains("nav-transparent")) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } else if (nav.classList.contains("nav-colored")) {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
  }
});

document.querySelectorAll(".nav-link").forEach((item) =>
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
