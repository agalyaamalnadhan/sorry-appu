let currentPage = 0;

const pages = document.querySelectorAll(".page");

function nextPage() {
  console.log("Current:", currentPage);

  pages[currentPage].classList.remove("active");

  currentPage++;

  if (currentPage < pages.length) {
    pages[currentPage].classList.add("active");
  }
  console.log("New:", currentPage);
}
function openLetter() {
  document.getElementById("letter").style.display = "block";
}

const noBtn = document.getElementById("noBtn");
if (noBtn){
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300;

  const y = Math.random() * 300;

  noBtn.style.position = "absolute";

  noBtn.style.left = x + "px";

  noBtn.style.top = y + "px";
});
}
// ❤️ MAIN BACKGROUND SONG

const mainAudio =
new Audio('song.mp3');

mainAudio.loop = false;

// 🎵 MAIN SONG LOOP TIMING

const mainStart = 43;

const mainEnd = 92;

mainAudio.addEventListener('timeupdate', function(){

if(this.currentTime >= mainEnd){

this.currentTime = mainStart;

this.play();

}

});

mainAudio.addEventListener('loadedmetadata', function(){

this.currentTime = mainStart;

});


// ❤️ START WEBSITE MUSIC

function startMusic(){

mainAudio.play();

}
const startDate = new Date("2023-06-01");
const today = new Date();

const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

const counter = document.getElementById("daysTogether");

if (counter) {
  counter.innerHTML = `❤️ ${diff} days together ❤️`;
}
function showSecret() {
  document.getElementById("secret").style.display = "block";
}
setInterval(() => {
  const heart = document.createElement("div");

  heart.innerHTML = "❤️";

  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";

  heart.style.top = "-20px";

  heart.style.fontSize = "25px";

  heart.style.zIndex = "999";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 600);