
const audio = document.getElementById("myAudio");
const playMusic = document.getElementById("playMusic");
let isPlaying = true;
    playMusic.addEventListener("click", ()=> {

        if (isPlaying) {
            audio.pause();
            playMusic.innerHTML = "play";
        }

        else {
            audio.play();
            playMusic.innerHTML = "pause";
        }

        isPlaying = !isPlaying;


    })