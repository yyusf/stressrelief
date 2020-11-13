// window.addEventListener("load", () => {
//   const sounds = document.querySelectorAll(".sound");
//   const musics = document.querySelectorAll(".musics");

//   musics.forEach((music, index) => {
//     music.addEventListener("click", function () {
//       sounds[index].play();
//     });
//   });
// });

const camp = document.getElementsByClassName(".camp");
const nature = document.getElementsByClassName(".nature");
const lofi = document.getElementsByClassName(".lofi");
const rain = document.getElementsByClassName(".rain");
const waves = document.getElementsByClassName(".waves");
let playPause = document.getElementsByClassName("playPause");
let audio = document.getElementsByClassName("audio");
let count = 0;

// camp = (music, index) => {
//   music.addEventListener("click", function () {});
// };

playPause = () => {
  if (count == 0) {
    count = 1;
    audio.play();
  } else {
    count = 0;
    audio.pause();
  }
};
