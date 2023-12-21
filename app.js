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
