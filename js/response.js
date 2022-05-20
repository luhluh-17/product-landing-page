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
