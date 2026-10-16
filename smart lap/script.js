const lampu = document.getElementById("lampu");
const statuss = document.getElementById("status");
const tombol = document.getElementById("tombol");
const Jumlah = document.getElementById("jumlah");
const body = document.body;

let jumlah = 0;
let lampuNyala = false;

tombol.addEventListener("click", function () {
  lampuNyala = !lampuNyala;
  jumlah++;
  Jumlah.textContent = jumlah;

  if (lampuNyala === true) {
    statuss.textContent = "Lamp is On";
    body.style.background = "radial-gradient(circle, rgba(242, 188, 10, 0.2) 0%, rgba(10,10,12,1) 70%)";
    lampu.style.boxShadow = " 0 0 15px 5px rgba(220, 201, 0, 0.75)";
  } else {
    lampuNyala = false;

    statuss.textContent = "Lamp is Off";
    body.style.background = "radial-gradient(circle, rgba(30, 30, 30, 0.2) 0%, rgba(10,10,12,1) 70%)";
    lampu.style.boxShadow = " 0 0 15px 5px rgba(8, 8, 8, 0.75)";
  }
});
