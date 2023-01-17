const video = document.querySelector("video");
const progressBar = document.querySelector(".progress__filled");
const playPauseButton = document.querySelector(".player__button");
const volumeInput = document.querySelector("input[name='volume']");
const playbackSpeedInput = document.querySelector("input[name='playbackSpeed']");
const rewindButton = document.querySelector(".rewind");
const forwardButton = document.querySelector(".forward");

let isPlaying = false;

function togglePlayPause() {
    if (isPlaying) {
        video.pause();
        playPauseButton.textContent = "►";
    } else {
        video.play();
        playPauseButton.textContent = "❚ ❚";
    }
    isPlaying = !isPlaying;
}

function updateProgressBar() {
    progressBar.style.flexBasis = (video.currentTime / video.duration) * 100 + "%";
}

function setVolume() {
    video.volume = volumeInput.value;
}

function setPlaybackSpeed() {
    video.playbackRate = playbackSpeedInput.value;
}

function rewind() {
    video.currentTime -= 10;
}

function forward() {
    video.currentTime += 25;
}

video.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
playPauseButton.addEventListener("click", togglePlayPause);
volumeInput.addEventListener("input", setVolume);
playbackSpeedInput.addEventListener("input", setPlaybackSpeed);
rewindButton.addEventListener("click", rewind);
forwardButton.addEventListener("click", forward);
