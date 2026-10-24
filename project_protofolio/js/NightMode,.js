const lightMode = document.getElementById("light-mode");
const body = document.body;
const Hero = document.getElementById("Hero");
const Berubah = document.getElementById("Gambar-hitam");

let Penentuan = false;

lightMode.addEventListener("click", function () {
  if (Penentuan === false) {
    Penentuan = true;
    Berubah.src = "../assets/Desain tanpa judul (11).png";
    body.style.background = "#0F172A";
    lightMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#858585" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon preview-icon"><path vector-effect="non-scaling-stroke" d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
  } else {
    Penentuan = false;
    Berubah.src = "../assets/Desain tanpa judul (12).png";
    body.style.background = "#FFFFFF";
    lightMode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#858585" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun preview-icon"><circle vector-effect="non-scaling-stroke" cx="12" cy="12" r="4"/><path vector-effect="non-scaling-stroke" d="M12 2v2"/><path vector-effect="non-scaling-stroke" d="M12 20v2"/><path vector-effect="non-scaling-stroke" d="m4.93 4.93 1.41 1.41"/><path vector-effect="non-scaling-stroke" d="m17.66 17.66 1.41 1.41"/><path vector-effect="non-scaling-stroke" d="M2 12h2"/><path vector-effect="non-scaling-stroke" d="M20 12h2"/><path vector-effect="non-scaling-stroke" d="m6.34 17.66-1.41 1.41"/><path vector-effect="non-scaling-stroke" d="m19.07 4.93-1.41 1.41"/></svg>`;
  }
});
