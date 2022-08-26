import {cleanTime} from "../utils/cleartim.js";
cleanTime()
const audio = document.querySelector("#audio")
const overallTime = document.querySelector('.overalle-time')
const curentTime = document.querySelector('.curent-time')
const progresBarMusic = document.querySelector('.progres-bar-music')
export function updateTimeUI(){
    setInterval(() => {
        curentTime.innerHTML = cleanTime(audio.currentTime)
        overallTime.innerHTML = cleanTime(audio.duration);
        progresBarMusic.style.width =((audio.currentTime*100)/(audio.duration)) + "%";

    }, 1000);

}
