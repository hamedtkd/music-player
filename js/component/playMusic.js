import musics from "../../data/music.js";
const curuntMusicBg = document.querySelector('.curunt-music-bg')
const musicArtist = document.querySelector(".music-artist")
const musicName = document.querySelector(".song-name")
const playPause = document.querySelector("#play-pause")
const playPausDown = document.querySelector(".playpause-icon")
const musicTimeRange  = document.querySelector('.music-time-range ')
// const audio = document.querySelector("#audio")


export function playMusic(c){

    // let curuntMusic = musics().filter((item) => item.id === parseInt(songFigure.id));

                curuntMusicBg.style.background = `linear-gradient(180deg, rgba(2, 1, 0, 0.43) 0%, rgba(2, 1, 0, 0.43) 100%), url(${c[0].cover}) `
                curuntMusicBg.style.backgroundSize = "cover"
                musicArtist.innerHTML = c[0].artist
                musicName.innerHTML = c[0].name
                audio.src = c[0].audio
                musicTimeRange.max = audio.duration;

                audio.play().then(() => {
              

                    const puase = `<svg width="97" height="97" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.4062 81.8438H30.3125C29.5086 81.8438 28.7376 81.5244 28.1691 80.9559C27.6006 80.3875 27.2812 79.6164 27.2812 78.8125V18.1875C27.2812 17.3836 27.6006 16.6126 28.1691 16.0441C28.7376 15.4756 29.5086 15.1562 30.3125 15.1563H39.4062C40.2102 15.1563 40.9812 15.4756 41.5497 16.0441C42.1181 16.6126 42.4375 17.3836 42.4375 18.1875V78.8125C42.4375 79.6164 42.1181 80.3875 41.5497 80.9559C40.9812 81.5244 40.2102 81.8438 39.4062 81.8438ZM66.6875 81.8438H57.5938C56.7898 81.8438 56.0188 81.5244 55.4503 80.9559C54.8819 80.3875 54.5625 79.6164 54.5625 78.8125V18.1875C54.5625 17.3836 54.8819 16.6126 55.4503 16.0441C56.0188 15.4756 56.7898 15.1562 57.5938 15.1563H66.6875C67.4914 15.1563 68.2625 15.4756 68.8309 16.0441C69.3994 16.6126 69.7188 17.3836 69.7188 18.1875V78.8125C69.7188 79.6164 69.3994 80.3875 68.8309 80.9559C68.2625 81.5244 67.4914 81.8438 66.6875 81.8438Z" fill="#F2F2F2"/>
                    </svg>
                    `
                    const play = `<svg id="play-pause" width="92" height="96" viewBox="0 0 92 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M86.6835 55.3876L14.0932 94.1882C7.93274 97.4776 0.0268555 93.4946 0.0268555 86.8632V9.26196C0.0268555 2.64105 7.92133 -1.35251 14.0932 1.94743L86.6835 40.748C88.0849 41.485 89.2498 42.5503 90.06 43.8358C90.8702 45.1213 91.297 46.5813 91.297 48.0678C91.297 49.5543 90.8702 51.0144 90.06 52.2999C89.2498 53.5854 88.0849 54.6506 86.6835 55.3876Z"
                            fill="#F2F2F2" /></svg>`

                    const playDown = `<svg width="45" height="45" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.4375 32.0625H11.875C11.5601 32.0625 11.258 31.9374 11.0353 31.7147C10.8126 31.492 10.6875 31.1899 10.6875 30.875V7.125C10.6875 6.81006 10.8126 6.50801 11.0353 6.28531C11.258 6.06261 11.5601 5.9375 11.875 5.9375H15.4375C15.7524 5.9375 16.0545 6.06261 16.2772 6.28531C16.4999 6.50801 16.625 6.81006 16.625 7.125V30.875C16.625 31.1899 16.4999 31.492 16.2772 31.7147C16.0545 31.9374 15.7524 32.0625 15.4375 32.0625ZM26.125 32.0625H22.5625C22.2476 32.0625 21.9455 31.9374 21.7228 31.7147C21.5001 31.492 21.375 31.1899 21.375 30.875V7.125C21.375 6.81006 21.5001 6.50801 21.7228 6.28531C21.9455 6.06261 22.2476 5.9375 22.5625 5.9375H26.125C26.4399 5.9375 26.742 6.06261 26.9647 6.28531C27.1874 6.50801 27.3125 6.81006 27.3125 7.125V30.875C27.3125 31.1899 27.1874 31.492 26.9647 31.7147C26.742 31.9374 26.4399 32.0625 26.125 32.0625Z" fill="#F2F2F2"/></svg>`
                    const pauseDown = ` <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_521_125)">
                    <path d="M40.2 20.1L11.175 5.5875C10.7834 5.40609 10.3527 5.32549 9.92202 5.35304C9.49135 5.3806 9.07442 5.51543 8.70916 5.74526C8.34391 5.9751 8.04195 6.29264 7.83075 6.66898C7.61956 7.04531 7.50585 7.4685 7.49997 7.9V36.9125C7.49631 37.3554 7.60698 37.7918 7.82128 38.1795C8.03557 38.5672 8.34626 38.893 8.72329 39.1255C9.10032 39.358 9.53096 39.4893 9.97358 39.5068C10.4162 39.5242 10.8558 39.4271 11.25 39.225L40.2 24.7125C40.6288 24.4972 40.9893 24.167 41.2413 23.7586C41.4932 23.3502 41.6266 22.8798 41.6266 22.4C41.6266 21.9202 41.4932 21.4498 41.2413 21.0414C40.9893 20.633 40.6288 20.3028 40.2 20.0875V20.1Z" fill="#F2F2F2"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_521_125">
                    <rect width="45" height="45" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    `

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
            }
