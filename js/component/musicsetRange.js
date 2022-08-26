const overallTime = document.querySelector('.overalle-time')
const curentTime = document.querySelector('.curent-time')

const progresBarMusic = document.querySelector('.progres-bar-music')
// const progresBgMusicBar = document.querySelector('.progres-bg-music-bar')
const musicTimeRange  = document.querySelector('.music-time-range ')


export function musicsetRange(){


    musicTimeRange.addEventListener('change',(e)=>{
        e.target.max =audio.duration;
        audio.currentTime = e.target.value;
         const i = (audio.currentTime/audio.duration) * 100 +"%";
        progresBarMusic.style.width = i;
    })
    const repat  = document.querySelector('.repat ')
    repat.addEventListener('click',()=>{
   
        const i = progresBarMusic.style.width ="100%"
        i=()=>{

            console.log("object");
        }
 
   
    
    })
   
    
}