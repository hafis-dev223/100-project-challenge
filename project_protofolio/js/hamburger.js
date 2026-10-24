const TombolKematian = document.getElementById("Hamburger");
const BagianMenu = document.getElementById("Nav-menu");
let BagianPenentuan = false;
TombolKematian.addEventListener("click", function () {
  if (BagianPenentuan === false) {
    BagianMenu.style.display = "flex";
    BagianMenu.style.animation = " luncurMulus 0.4s ease-out forwards";
    BagianPenentuan = true;
  } else {
    BagianPenentuan = false;
    BagianMenu.style.animation = "";
    BagianMenu.style.display = "none";
  }
});
