var boxgift = document.querySelector(".box-gift");
var Close = document.querySelector(".fa-xmark");
var boxContent = document.querySelector(".box-content");
var content = document.querySelector(".content");
// window.onload = function () {
//   var audio = document.getElementById("backgroundMusic");
//   audio.play();
// };
var audio = document.getElementById("backgroundMusic");
function playAudio() {
  audio
    .play()
    .then(() => {
      // Remove the event listener after the audio starts playing
      document.removeEventListener("click", playAudio);
    })
    .catch((error) => {
      console.log("Audio play failed:", error);
    });
}

// Attach the event listener to the whole document
document.addEventListener("click", playAudio);
boxgift.onclick = function () {
  boxgift.classList.toggle("active");
  // boxContent.classList.add('active')
};
content.onclick = function () {
  boxContent.classList.add("active");
};
Close.onclick = function () {
  boxContent.classList.remove("active");
};
