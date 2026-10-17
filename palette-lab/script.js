const senang = document.getElementById("happy");
const sad = document.getElementById("sad");
const anggry = document.getElementById("angry");
const mood = document.getElementById("mood-text");
const sleepy = document.getElementById("sleepy");
const body = document.body;
let player = new Audio();

senang.addEventListener("click", function () {
  player.pause();
  player.src = "assest/gembira.mp3";
  player.play();
  senang.style.backgroundColor = "red";
  mood.textContent = "lagi seneng apa ni?";
  body.style.backgroundColor = "red";
});

sad.addEventListener("click", function () {
  player.pause();
  player.src = "assest/sad3.mp3";
  player.play();
  sad.style.backgroundColor = "green";
  mood.textContent = "waduh ko lu sedih";
  body.style.backgroundColor = "green";
});

anggry.addEventListener("click", function () {
  player.pause();
  player.src = "assest/marah.mp3";
  player.play();
  anggry.style.backgroundColor = "black";
  mood.textContent = "santai jangan marah marah dong";
  anggry.style.color = "#ffff";
  body.style.backgroundColor = "black";
});

sleepy.addEventListener("click", function () {
  player.pause();
  player.src = "assest/ngantuk.mp3";
  player.play();
  sleepy.style.backgroundColor = "gray";
  mood.textContent = "tidur dulu sana";
  body.style.backgroundColor = "gray";
});
