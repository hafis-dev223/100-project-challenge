const NavButton = document.getElementById("Button-nav");
const Nav_hanhone = document.getElementById("Nav-hanpone");

NavButton.addEventListener("click", function () {
  if (Nav_hanhone.classList.contains("Aktif")) {
    Nav_hanhone.classList.remove("Aktif");
  } else {
    Nav_hanhone.classList.add("Aktif");
  }
});
