(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const email = searchParams.get("email");
  console.log(email);
  const domEmail = document.querySelector("#response");
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

window.addEventListener("scroll", function (e) {
  const nav = document.getElementById("header-nav");
  const isActive = document.querySelector(".active");

  if (isActive) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } else {
    if (
      document.documentElement.scrollTop ||
      document.body.scrollTop > window.innerHeight
    ) {
      nav.classList.add("nav-colored");
      nav.classList.remove("nav-transparent");
    } else {
      nav.classList.add("nav-transparent");
      nav.classList.remove("nav-colored");
    }
  }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav-link").forEach((item) =>
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
