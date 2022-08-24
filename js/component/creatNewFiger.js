import musics from "../../data/music.js";
import {
    cleanTime
} from "../utils/cleartim.js";

const musicCards = document.querySelector(".music-cards")
const curuntMusicBg = document.querySelector('.curunt-music-bg')
const musicArtist = document.querySelector(".music-artist")
const musicName = document.querySelector(".song-name")
const audio = document.querySelector("#audio")
const playPause = document.querySelector("#play-pause")
const playPausDown = document.querySelector(".playpause-icon")

const overallTime = document.querySelector('.overalle-time')
const curentTime = document.querySelector('.curent-time')



export function creatFiger() {

    musics().forEach(song => {
        const figure =
            `  <figure id =${song.id} class="d-flex flex-column music-card ">
  <div class="music-cover d-flex justify-content-center align-items-end "style="background-image:url(${song.cover})">
      
  </div>
  <div class="music-name d-flex flex-column">
      <div class="d-flex justify-content-center">

          <button class=" rounded-circle  play-icon">

              <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M24.9622 15.6979L4.68019 26.607C2.95894 27.5319 0.75 26.412 0.75 24.5475V2.7293C0.75 0.867773 2.95575 -0.255052 4.68019 0.672755L24.9622 11.5819C25.3538 11.7891 25.6793 12.0886 25.9056 12.45C26.132 12.8115 26.2513 13.222 26.2513 13.6399C26.2513 14.0578 26.132 14.4683 25.9056 14.8298C25.6793 15.1912 25.3538 15.4907 24.9622 15.6979Z"
                      fill="#F2F2F2" />
              </svg>
          </button>
      </div>
      <div class="d-flex flex-column gap-2 ps-3 translate-middle-y">

          <div class="d-flex gap-2 align-items-center ">
              <svg width="11" height="15" viewBox="0 0 11 15" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M5.49996 0.214294C4.77536 0.214294 4.08042 0.502144 3.56805 1.01452C3.05567 1.5269 2.76782 2.22183 2.76782 2.94644V7.80358C2.76782 8.16237 2.83849 8.51765 2.97579 8.84913C3.1131 9.18061 3.31435 9.48179 3.56805 9.7355C3.82175 9.9892 4.12294 10.1904 4.45442 10.3278C4.7859 10.4651 5.14117 10.5357 5.49996 10.5357C5.85875 10.5357 6.21403 10.4651 6.54551 10.3278C6.87699 10.1904 7.17818 9.9892 7.43188 9.7355C7.68558 9.48179 7.88683 9.18061 8.02414 8.84913C8.16144 8.51765 8.23211 8.16237 8.23211 7.80358V2.94644C8.23211 2.22183 7.94426 1.5269 7.43188 1.01452C6.91951 0.502144 6.22457 0.214294 5.49996 0.214294ZM1.55354 7.34822C1.55354 7.22745 1.50556 7.11163 1.42017 7.02624C1.33477 6.94084 1.21895 6.89287 1.09818 6.89287C0.977411 6.89287 0.861589 6.94084 0.776193 7.02624C0.690797 7.11163 0.642822 7.22745 0.642822 7.34822V7.80358C0.642787 9.01297 1.09393 10.1789 1.90801 11.0732C2.72209 11.9676 3.84055 12.5261 5.04461 12.6395V14.3304C5.04461 14.4511 5.09258 14.567 5.17798 14.6524C5.26337 14.7377 5.3792 14.7857 5.49996 14.7857C5.62073 14.7857 5.73655 14.7377 5.82195 14.6524C5.90735 14.567 5.95532 14.4511 5.95532 14.3304V12.6395C7.15938 12.5261 8.27784 11.9676 9.09192 11.0732C9.906 10.1789 10.3571 9.01297 10.3571 7.80358V7.34822C10.3571 7.22745 10.3091 7.11163 10.2237 7.02624C10.1383 6.94084 10.0225 6.89287 9.90175 6.89287C9.78098 6.89287 9.66516 6.94084 9.57976 7.02624C9.49437 7.11163 9.44639 7.22745 9.44639 7.34822V7.80358C9.44639 8.85024 9.03061 9.85403 8.29051 10.5941C7.55041 11.3342 6.54662 11.75 5.49996 11.75C4.45331 11.75 3.44952 11.3342 2.70942 10.5941C1.96932 9.85403 1.55354 8.85024 1.55354 7.80358V7.34822Z"
                      fill="#4F4F4F" />
              </svg>

              <p class="fs-6 m-0">
              ${song.artist}
              </p>
          </div>
          <div class="d-flex gap-2 align-items-center ">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M3.99994 1.91667V6.90417C3.45161 6.58917 2.77494 6.46667 2.05744 6.7175C1.27578 6.9975 0.674944 7.69167 0.534944 8.50833C0.470223 8.8758 0.494413 9.25342 0.605491 9.60963C0.71657 9.96583 0.911309 10.2903 1.17343 10.5558C1.43555 10.8214 1.75743 11.0203 2.11216 11.136C2.46689 11.2517 2.84417 11.2808 3.21244 11.2208C4.35578 11.04 5.16661 9.99 5.16661 8.82917V3.08333H6.33328C6.97494 3.08333 7.49995 2.55833 7.49995 1.91667C7.49995 1.275 6.97494 0.75 6.33328 0.75H5.16661C4.52494 0.75 3.99994 1.275 3.99994 1.91667Z"
                      fill="#4F4F4F" />
              </svg>


              <p class="fs-9 m-0">
              ${song.name}
              </p>
          </div>
      </div>

  </div>
</figure>`
        musicCards.innerHTML += figure;
        [...musicCards.children].forEach((songFigure) => {
            songFigure.addEventListener('click', (e) => {

                const curuntMusic = musics().filter((item) => item.id === parseInt(songFigure.id));


                curuntMusicBg.style.background = `linear-gradient(180deg, rgba(2, 1, 0, 0.43) 0%, rgba(2, 1, 0, 0.43) 100%), url(${curuntMusic[0].cover}) `
                curuntMusicBg.style.backgroundSize = "cover"
                musicArtist.innerHTML = curuntMusic[0].artist
                musicName.innerHTML = curuntMusic[0].name
                audio.src = curuntMusic[0].audio

                audio.play().then(() => {
                    const puase = `<svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.4062 81.8438H30.3125C29.5086 81.8438 28.7376 81.5244 28.1691 80.9559C27.6006 80.3875 27.2812 79.6164 27.2812 78.8125V18.1875C27.2812 17.3836 27.6006 16.6126 28.1691 16.0441C28.7376 15.4756 29.5086 15.1562 30.3125 15.1563H39.4062C40.2102 15.1563 40.9812 15.4756 41.5497 16.0441C42.1181 16.6126 42.4375 17.3836 42.4375 18.1875V78.8125C42.4375 79.6164 42.1181 80.3875 41.5497 80.9559C40.9812 81.5244 40.2102 81.8438 39.4062 81.8438ZM66.6875 81.8438H57.5938C56.7898 81.8438 56.0188 81.5244 55.4503 80.9559C54.8819 80.3875 54.5625 79.6164 54.5625 78.8125V18.1875C54.5625 17.3836 54.8819 16.6126 55.4503 16.0441C56.0188 15.4756 56.7898 15.1562 57.5938 15.1563H66.6875C67.4914 15.1563 68.2625 15.4756 68.8309 16.0441C69.3994 16.6126 69.7188 17.3836 69.7188 18.1875V78.8125C69.7188 79.6164 69.3994 80.3875 68.8309 80.9559C68.2625 81.5244 67.4914 81.8438 66.6875 81.8438Z" fill="#F2F2F2"/>
                    </svg>
                    `
                    const play = `<svg id="play-pause" width="92" height="96" viewBox="0 0 92 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M86.6835 55.3876L14.0932 94.1882C7.93274 97.4776 0.0268555 93.4946 0.0268555 86.8632V9.26196C0.0268555 2.64105 7.92133 -1.35251 14.0932 1.94743L86.6835 40.748C88.0849 41.485 89.2498 42.5503 90.06 43.8358C90.8702 45.1213 91.297 46.5813 91.297 48.0678C91.297 49.5543 90.8702 51.0144 90.06 52.2999C89.2498 53.5854 88.0849 54.6506 86.6835 55.3876Z"
                            fill="#F2F2F2" /></svg>`

                    const playDown = `<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4375 32.0625H11.875C11.5601 32.0625 11.258 31.9374 11.0353 31.7147C10.8126 31.492 10.6875 31.1899 10.6875 30.875V7.125C10.6875 6.81006 10.8126 6.50801 11.0353 6.28531C11.258 6.06261 11.5601 5.9375 11.875 5.9375H15.4375C15.7524 5.9375 16.0545 6.06261 16.2772 6.28531C16.4999 6.50801 16.625 6.81006 16.625 7.125V30.875C16.625 31.1899 16.4999 31.492 16.2772 31.7147C16.0545 31.9374 15.7524 32.0625 15.4375 32.0625ZM26.125 32.0625H22.5625C22.2476 32.0625 21.9455 31.9374 21.7228 31.7147C21.5001 31.492 21.375 31.1899 21.375 30.875V7.125C21.375 6.81006 21.5001 6.50801 21.7228 6.28531C21.9455 6.06261 22.2476 5.9375 22.5625 5.9375H26.125C26.4399 5.9375 26.742 6.06261 26.9647 6.28531C27.1874 6.50801 27.3125 6.81006 27.3125 7.125V30.875C27.3125 31.1899 27.1874 31.492 26.9647 31.7147C26.742 31.9374 26.4399 32.0625 26.125 32.0625Z" fill="#4F4F4F"/></svg>`
                    const pauseDown = `<svg width="38" height="39" viewBox="0 0 34 39" fill="none"
                                xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.0585965 3.75484C0.0585965 1.42731 3.16006 0.0776807 5.38466 0.9872C7.93308 2.65922 29.6043 14.8642 31.5644 16.4936C33.5245 18.123 34.0866 20.71 31.4312 22.6341C28.776 24.558 7.67168 36.9793 5.38466 38.058C3.09716 39.1365 0.153909 37.6692 0.0585965 34.9394C-0.036716 32.2097 0.0585965 6.08213 0.0585965 3.75484ZM3.26038 5.77546C3.26038 6.36974 3.24227 32.666 3.20891 33.2069C3.15411 34.094 3.92376 34.9854 4.99602 34.4567C6.06829 33.9277 28.2337 20.7069 29.1139 20.3645C29.9943 20.0218 29.936 19.1492 29.1139 18.604C28.2921 18.0589 5.72254 5.14592 5.0625 4.57881C4.40246 4.01147 3.26038 4.86308 3.26038 5.7757V5.77546Z"fill="#4F4F4F" /></svg>`

                    let stateVaraiable = true;
                    playPause.innerHTML = puase;
                    playPausDown.innerHTML = playDown;

                    curuntMusicBg.addEventListener('click', () => {
                        if (stateVaraiable) {
                            stateVaraiable = false
                            audio.pause();
                            playPause.innerHTML = play;
                            playPausDown.innerHTML = pauseDown;

                        } else {
                            stateVaraiable = true;
                            playPause.innerHTML = puase;
                            playPausDown.innerHTML = playDown;

                            audio.play();
                        };
                    })
                    playPausDown.addEventListener('click', ()=>{
                        if (stateVaraiable) {
                            stateVaraiable = false
                            audio.pause();
                            playPause.innerHTML = play;
                            playPausDown.innerHTML = pauseDown;

                        } else {
                            stateVaraiable = true;
                            playPause.innerHTML = puase;
                            playPausDown.innerHTML = playDown;

                            audio.play();
                        };

                    })

                })
                setInterval(() => {
                    curentTime.innerHTML = cleanTime(audio.currentTime)
                    overallTime.innerHTML = cleanTime(audio.duration);

                }, 1000);






            })
        })




    })
}