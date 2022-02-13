//html에 있는것들과 연결시켜주는 과정
const video = document.querySelector("video");
const playBtn = document.getElementById("play"); 
const playBtnIcon = playBtn.querySelector("i"); // 그냥 i를 찾으면 계속 첫번째 i만찾으니까
const muteBtn = document.getElementById("mute");
const muteBtnIcon = muteBtn.querySelector("i"); // 그냥 i를 찾으면 계속 첫번째 i만찾으니까
const volumeRange = document.getElementById("volume");
const currenTime = document.getElementById("currenTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline");
const fullScreenBtn = document.getElementById("fullScreen");
const fullScreenIcon = fullScreenBtn.querySelector("i");
const videoContainer = document.getElementById("videoContainer");
const videoControls = document.getElementById("videoControls");

//html과 JavaScirpt의 video가 똑같은 value을 가질수있게
let controlsTimeout = null; // 마우스가 비디오 밖으로 나갔을때
let controlsMovementTimeout = null; // 마우스가 비디오안에서 움직일때, 3초동안 멈춰있으면 사라지게해줌.
let volumeValue = 0.5;
video.volume = volumeValue;

const handlePlayClick = (e) => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
    playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
}

document.body.onkeydown = function (e) {
    if (e.keyCode == 32) {
        handlePlayClick();
    }
};

const handleMuteClick = (e) => {
    if (video.muted) {
        video.muted = false;
    }
    else {
        video.muted = true;
    }
    muteBtnIcon.classList = video.muted
    ? "fas fa-volume-mute"
    : "fas fa-volume-up";
    volumeRange.value = video.muted ? 0 : volumeValue;

};

const handleVolumeChange = (event) => {
    const {
        target: { value },
    } = event;
    if (video.muted) { // 음소거 해제
        video.muted = false;
        muteBtn.innerText = "Mute";
    }
    volumeValue = value; //global value 업데이트, 음소거버튼눌렀을때를 위해서(value저장을 위해)
    video.volume = value;
};

//video 흘러가는 시간을 표현하기위해서 date() 포맷을 이용해 표현할거임. 왜? 따로 라이브러리를 import할 필요도 없고, 584초같은 길이의 동영상이 있을때 자동으로 분 초 로 쪼개주니까
// const formatTime = (seconds) => {
//     return new Date(seconds * 1000).toISOString().substr(14, 5); //ES6문법에는 return안붙여줘도 되지않나?
// };
// 아래와 같은 형식으로하면 return을 안써줘도 된다.
const formatTime = (seconds) =>
  new Date(seconds * 1000).toISOString().substr(14, 5);

//metadata란? video빼고 다른 것(움직이는거 말고)을 말한다. 그래서 이 함수가 실행되야 비디오의 총 시간을 알수있다.
const handleLoadedMetadata = () => {
    totalTime.innerText = formatTime(Math.floor(video.duration));
    timeline.max = Math.floor(video.duration);
};

const handleTimeUpdate = () => {
    currenTime.innerText = formatTime(Math.floor(video.currentTime));
    timeline.value = Math.floor(video.currentTime);
};

const handleTimelineChange = (event) => {
    const {
    target: { value },
    } = event;
    video.currentTime = value;
};

const handleFullscreen = () => {
    const fullscreen = document.fullscreenElement;
    if (fullscreen) {
        document.exitFullscreen();
        fullScreenIcon.classList = "fas fa-expand";
    } else {
        videoContainer.requestFullscreen();
        fullScreenIcon.classList = "fas fa-compress";
    }
};

const hideControls = () => videoControls.classList.remove("showing"); // 계속 쓰여서 따로 함수를 만들었다.

const handleMouseMove = () => {
    if (controlsTimeout) {
        clearTimeout(controlsTimeout);
        controlsTimeout = null;
    }
    if (controlsMovementTimeout) {
    clearTimeout(controlsMovementTimeout);
    controlsMovementTimeout = null;
    }
    videoControls.classList.add("showing");
    controlsMovementTimeout = setTimeout(hideControls, 3000);
};

const handleMouseLeave = () => {
    controlsTimeout = setTimeout(hideControls, 3000);
};

const handleEnded = () => {
    const { id } = videoContainer.dataset;
    fetch(`/api/videos/${id}/view`, {
    method: "POST",
    });
};

playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMuteClick);
volumeRange.addEventListener("input", handleVolumeChange);
video.addEventListener("canplay", handleLoadedMetadata);
video.addEventListener("timeupdate", handleTimeUpdate); //비디오 시간이 변경되는걸 감지하는 event
video.addEventListener("ended", handleEnded);
videoContainer.addEventListener("mousemove", handleMouseMove);
videoContainer.addEventListener("mouseleave", handleMouseLeave);
videoContainer.addEventListener("click", handlePlayClick);
timeline.addEventListener("input", handleTimelineChange);
fullScreenBtn.addEventListener("click", handleFullscreen);