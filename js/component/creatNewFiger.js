import musics from "../../data/music.js";
import {musicsetRange} from "../component/musicsetRange.js";
import { playMusic } from "./playMusic.js";
import {updateTimeUI} from "./updateTimeUI.js";
import {porgresbarBtns} from "./porgresbarBtns.js";

const musicCards = document.querySelector(".music-cards");
export function creatFiger() {

    musics().forEach(song => {
        const figure =`  <figure id =${song.id} class="d-flex flex-column music-card col-4 col-md-6 col-sm-12">
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


              <p class="fs-9 m-0 text-black-2">
              ${song.name}
              </p>
          </div>
      </div>

  </div>
</figure>`
        musicCards.innerHTML += figure;
        function setCurrentTime(){
            [...musicCards.children].forEach((songFigure) => {
            songFigure.addEventListener('click', (e) => {

                let curuntMusic = musics().filter((item) => item.id === parseInt(songFigure.id));
                
                
                
                
                porgresbarBtns(curuntMusic);
                 playMusic(curuntMusic);
                 
                 updateTimeUI();
                 musicsetRange();
               
                
            });
        });
    }
    
    setCurrentTime();

    })
};