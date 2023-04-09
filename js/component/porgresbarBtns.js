import musics from "../../data/music.js";
import {
    playMusic
} from "./playMusic.js";
import {
    handelDownload
} from "../utils/handelDownload.js";


const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const shuflleBtn = document.querySelector('.shuflle');
const repat = document.querySelector('.repeat ');
const audio = document.querySelector("#audio")

let indexOfCurrentMusic = 0;
let repatState = false;
let handelShuflleMusic = false;





export function porgresbarBtns(curuntMusic) {
    const repeatIconFalse = `<svg width="35" height="55" viewBox="0 0 55 55" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_517_93)">
                                                <path
                                                    d="M9.16664 21.6181C9.17471 20.3389 9.68852 19.1149 10.5959 18.2132C11.5033 17.3116 12.7305 16.8055 14.0097 16.8056H43.3889L36.85 23.7417C36.7125 23.8881 36.6053 24.0602 36.5344 24.2481C36.4635 24.436 36.4302 24.6361 36.4366 24.8368C36.443 25.0376 36.4889 25.2351 36.5716 25.4181C36.6543 25.6011 36.7723 25.766 36.9187 25.9035C37.0652 26.0409 37.2373 26.1481 37.4252 26.2191C37.6131 26.29 37.8131 26.3232 38.0139 26.3168C38.2146 26.3104 38.4121 26.2646 38.5951 26.1819C38.7782 26.0991 38.9431 25.9812 39.0805 25.8347L49.0264 15.2778L39.0805 4.72083C38.9431 4.57437 38.7782 4.45642 38.5951 4.3737C38.4121 4.29098 38.2146 4.24512 38.0139 4.23873C37.8131 4.23235 37.6131 4.26557 37.4252 4.33649C37.2373 4.40741 37.0652 4.51465 36.9187 4.65208C36.7723 4.78952 36.6543 4.95445 36.5716 5.13747C36.4889 5.32049 36.443 5.51801 36.4366 5.71875C36.4302 5.91949 36.4635 6.11952 36.5344 6.30743C36.6053 6.49533 36.7125 6.66743 36.85 6.81389L43.3889 13.75H14.0097C11.9201 13.75 9.91571 14.578 8.43531 16.0526C6.95491 17.5273 6.11917 19.5285 6.11108 21.6181V30.9375L9.16664 27.6986V21.6181Z"
                                                    fill="#4F4F4F" />
                                                <path
                                                    d="M45.8334 33.3819C45.8253 34.6611 45.3115 35.8851 44.4041 36.7868C43.4967 37.6884 42.2695 38.1945 40.9903 38.1944H11.6111L18.15 31.2583C18.2875 31.1119 18.3947 30.9398 18.4656 30.7519C18.5365 30.564 18.5698 30.3639 18.5634 30.1632C18.557 29.9624 18.5111 29.7649 18.4284 29.5819C18.3457 29.3989 18.2277 29.234 18.0813 29.0965C17.9348 28.9591 17.7627 28.8519 17.5748 28.7809C17.3869 28.71 17.1869 28.6768 16.9861 28.6832C16.7854 28.6896 16.5879 28.7354 16.4049 28.8181C16.2218 28.9009 16.0569 29.0188 15.9195 29.1653L5.97363 39.7222L15.9195 50.2792C16.0569 50.4256 16.2218 50.5436 16.4049 50.6263C16.5879 50.709 16.7854 50.7549 16.9861 50.7613C17.1869 50.7676 17.3869 50.7344 17.5748 50.6635C17.7627 50.5926 17.9348 50.4854 18.0813 50.3479C18.2277 50.2105 18.3457 50.0456 18.4284 49.8625C18.5111 49.6795 18.557 49.482 18.5634 49.2813C18.5698 49.0805 18.5365 48.8805 18.4656 48.6926C18.3947 48.5047 18.2875 48.3326 18.15 48.1861L11.6111 41.25H40.9903C43.0799 41.25 45.0843 40.422 46.5647 38.9474C48.0451 37.4727 48.8808 35.4715 48.8889 33.3819V24.0625L45.8334 27.3014V33.3819Z"
                                                    fill="#4F4F4F" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_517_93">
                                                    <rect width="55" height="55" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>`
    const repeatIconTrue = `<svg width="35" height="55" viewBox="0 0 55 55" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_517_93)">
            <path
                d="M9.16664 21.6181C9.17471 20.3389 9.68852 19.1149 10.5959 18.2132C11.5033 17.3116 12.7305 16.8055 14.0097 16.8056H43.3889L36.85 23.7417C36.7125 23.8881 36.6053 24.0602 36.5344 24.2481C36.4635 24.436 36.4302 24.6361 36.4366 24.8368C36.443 25.0376 36.4889 25.2351 36.5716 25.4181C36.6543 25.6011 36.7723 25.766 36.9187 25.9035C37.0652 26.0409 37.2373 26.1481 37.4252 26.2191C37.6131 26.29 37.8131 26.3232 38.0139 26.3168C38.2146 26.3104 38.4121 26.2646 38.5951 26.1819C38.7782 26.0991 38.9431 25.9812 39.0805 25.8347L49.0264 15.2778L39.0805 4.72083C38.9431 4.57437 38.7782 4.45642 38.5951 4.3737C38.4121 4.29098 38.2146 4.24512 38.0139 4.23873C37.8131 4.23235 37.6131 4.26557 37.4252 4.33649C37.2373 4.40741 37.0652 4.51465 36.9187 4.65208C36.7723 4.78952 36.6543 4.95445 36.5716 5.13747C36.4889 5.32049 36.443 5.51801 36.4366 5.71875C36.4302 5.91949 36.4635 6.11952 36.5344 6.30743C36.6053 6.49533 36.7125 6.66743 36.85 6.81389L43.3889 13.75H14.0097C11.9201 13.75 9.91571 14.578 8.43531 16.0526C6.95491 17.5273 6.11917 19.5285 6.11108 21.6181V30.9375L9.16664 27.6986V21.6181Z"
                fill="#FF5500" />
            <path
                d="M45.8334 33.3819C45.8253 34.6611 45.3115 35.8851 44.4041 36.7868C43.4967 37.6884 42.2695 38.1945 40.9903 38.1944H11.6111L18.15 31.2583C18.2875 31.1119 18.3947 30.9398 18.4656 30.7519C18.5365 30.564 18.5698 30.3639 18.5634 30.1632C18.557 29.9624 18.5111 29.7649 18.4284 29.5819C18.3457 29.3989 18.2277 29.234 18.0813 29.0965C17.9348 28.9591 17.7627 28.8519 17.5748 28.7809C17.3869 28.71 17.1869 28.6768 16.9861 28.6832C16.7854 28.6896 16.5879 28.7354 16.4049 28.8181C16.2218 28.9009 16.0569 29.0188 15.9195 29.1653L5.97363 39.7222L15.9195 50.2792C16.0569 50.4256 16.2218 50.5436 16.4049 50.6263C16.5879 50.709 16.7854 50.7549 16.9861 50.7613C17.1869 50.7676 17.3869 50.7344 17.5748 50.6635C17.7627 50.5926 17.9348 50.4854 18.0813 50.3479C18.2277 50.2105 18.3457 50.0456 18.4284 49.8625C18.5111 49.6795 18.557 49.482 18.5634 49.2813C18.5698 49.0805 18.5365 48.8805 18.4656 48.6926C18.3947 48.5047 18.2875 48.3326 18.15 48.1861L11.6111 41.25H40.9903C43.0799 41.25 45.0843 40.422 46.5647 38.9474C48.0451 37.4727 48.8808 35.4715 48.8889 33.3819V24.0625L45.8334 27.3014V33.3819Z"
                fill="#FF5500" />
        </g>
        <defs>
            <clipPath id="clip0_517_93">
                <rect width="55" height="55" fill="white" />
            </clipPath>
        </defs>
    </svg>`

    const shuflleIconFalse =`  <svg width="35" height="60" viewBox="0 0 35 35" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M27.3438 20.7812L30.625 24.0625L27.3438 27.3438M27.3438 7.65625L30.625 10.9375L27.3438 14.2188M4.375 24.0625H10.1985C11.0988 24.0625 11.9851 23.8402 12.7788 23.4155C13.5725 22.9907 14.2491 22.3766 14.7485 21.6275L17.5 17.5"
        stroke="#4F4F4F" stroke-width="2.1875" stroke-linecap="round"
        stroke-linejoin="round" />
    <path
        d="M4.375 10.9375H10.1985C11.0988 10.9375 11.9851 11.1598 12.7788 11.5845C13.5725 12.0093 14.2491 12.6234 14.7485 13.3725L20.2515 21.6275C20.7509 22.3766 21.4275 22.9907 22.2212 23.4155C23.0149 23.8402 23.9012 24.0625 24.8015 24.0625H28.4375M28.4375 10.9375H24.8015C23.9012 10.9375 23.0149 11.1598 22.2212 11.5845C21.4275 12.0093 20.7509 12.6234 20.2515 13.3725L19.6875 14.2188"
        stroke="#4F4F4F" stroke-width="2.1875" stroke-linecap="round"
        stroke-linejoin="round" />
</svg>`
const shuflleIconTrue =`  <svg width="35" height="60" viewBox="0 0 35 35" fill="none"
xmlns="http://www.w3.org/2000/svg">
<path
    d="M27.3438 20.7812L30.625 24.0625L27.3438 27.3438M27.3438 7.65625L30.625 10.9375L27.3438 14.2188M4.375 24.0625H10.1985C11.0988 24.0625 11.9851 23.8402 12.7788 23.4155C13.5725 22.9907 14.2491 22.3766 14.7485 21.6275L17.5 17.5"
    stroke="#FF5500" stroke-width="2.1875" stroke-linecap="round"
    stroke-linejoin="round" />
<path
    d="M4.375 10.9375H10.1985C11.0988 10.9375 11.9851 11.1598 12.7788 11.5845C13.5725 12.0093 14.2491 12.6234 14.7485 13.3725L20.2515 21.6275C20.7509 22.3766 21.4275 22.9907 22.2212 23.4155C23.0149 23.8402 23.9012 24.0625 24.8015 24.0625H28.4375M28.4375 10.9375H24.8015C23.9012 10.9375 23.0149 11.1598 22.2212 11.5845C21.4275 12.0093 20.7509 12.6234 20.2515 13.3725L19.6875 14.2188"
    stroke="#FF5500" stroke-width="2.1875" stroke-linecap="round"
    stroke-linejoin="round" />
</svg>`


    repat.addEventListener('click', () => {
        repatState = !repatState
        indexOfCurrentMusic = musics().findIndex((item => item.id === curuntMusic[0].id))

        handelShuflleMusic = false;
        shuflleBtn.innerHTML = shuflleIconFalse;

        if (repatState) repat.innerHTML = repeatIconTrue;
        else { repat.innerHTML = repeatIconFalse}
    })

    function handelNextMusic() {
        if (repatState) return playMusic([musics()[indexOfCurrentMusic]])
        else if (indexOfCurrentMusic === musics().length - 1) {
            indexOfCurrentMusic = 0
            curuntMusic = [musics()[indexOfCurrentMusic]]
            playMusic(curuntMusic)

        } else {
            indexOfCurrentMusic = musics().findIndex((item => item.id === curuntMusic[0].id))
            indexOfCurrentMusic++
            curuntMusic = [musics()[indexOfCurrentMusic]]
            playMusic(curuntMusic) }
    }



    prevBtn.addEventListener('click', () => {
        indexOfCurrentMusic = musics().findIndex((item => item.id === curuntMusic[0].id))
        if (indexOfCurrentMusic === 0) {
            indexOfCurrentMusic = musics().length - 1;
            curuntMusic = [musics()[indexOfCurrentMusic]]
            playMusic(curuntMusic)
        } else {

            indexOfCurrentMusic--
            curuntMusic = [musics()[indexOfCurrentMusic]]
            playMusic(curuntMusic)
        }

    })
    nextBtn.addEventListener('click', handelNextMusic)
    shuflleBtn.addEventListener('click', () => {
        handelShuflleMusic = !handelShuflleMusic;
        repatState = false;
        repat.innerHTML = repeatIconFalse;
        if (handelShuflleMusic) shuflleBtn.innerHTML = shuflleIconTrue;
        else { shuflleBtn.innerHTML = shuflleIconFalse}
        
        console.log(handelShuflleMusic);
    })

    function handelShuflle() {
        
        const randomMusic = Math.floor(Math.random() * musics().length)
        curuntMusic = [musics()[randomMusic]]
        playMusic(curuntMusic)
    }
    if (handelShuflleMusic){ audio.onended = handelShuflle}
   else{ audio.onended = handelNextMusic}
       

    handelDownload(curuntMusic)
}







