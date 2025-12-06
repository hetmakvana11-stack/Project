const sounds = {
 dog: new Audio("dog-barking-406629.mp3"),
  clap: new Audio("dance-clap-241408.mp3"),
  pop: new Audio("pop-402324.mp3"),
  laugh: new Audio("funny-laughing-406018.mp3")
};

let globalVolume = 0.8;
for (let key in sounds) {
  sounds[key].volume = globalVolume;
}


document.querySelectorAll(".sound-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const soundName = btn.dataset.sound;
    const audio = sounds[soundName];

    audio.currentTime = 0; 
    audio.play();
  });
});

document.getElementById("volumeControl").addEventListener("input", e => {
  globalVolume = e.target.value;
  for (let key in sounds) {
    sounds[key].volume = globalVolume;
  }
});

const muteBtn = document.getElementById("muteBtn");
let isMuted = false;

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;

  for (let key in sounds) {
    sounds[key].muted = isMuted;
  }

  muteBtn.textContent = isMuted ? "🔊 Unmute" : "🔇 Mute";
});
