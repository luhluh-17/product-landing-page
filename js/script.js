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
  var element = document.body;
  element.classList.toggle("dark-mode");
}

window.addEventListener("scroll", function (e) {
  var nav = document.getElementById("nav-bar");
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
});
