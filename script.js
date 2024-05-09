const button = document.getElementById('btn');
const video = document.getElementById('video-background');
const videoContainer = document.getElementById('video-container');
const container = document.querySelector('.container');

button.addEventListener('click', () => {
    video.removeAttribute("hidden");
    videoContainer.style.display="flex"
    container.style.display = "none";
});
