import musics from "../../data/music.js";
import { playMusic } from "./playMusic.js";

const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const shuflleBtn = document.querySelector('.shuflle')
let indexOfCurrentMusic = 0





     export function nextAndPrev(curuntMusic){
         
         

         function handelNextMusic (){
             if(indexOfCurrentMusic === musics().length -1){
                 indexOfCurrentMusic =0
                 curuntMusic = [musics()[indexOfCurrentMusic]]
                 playMusic(curuntMusic)
     
             }
             else{
             indexOfCurrentMusic=   musics().findIndex((item => item.id === curuntMusic[0].id))            
             indexOfCurrentMusic++
             curuntMusic =[musics()[indexOfCurrentMusic]]
             playMusic(curuntMusic)}
         }
         audio.onended= handelNextMusic;
         
        prevBtn.addEventListener('click',()=>{
            indexOfCurrentMusic =   musics().findIndex((item => item.id === curuntMusic[0].id))
            if(indexOfCurrentMusic ===0){
                indexOfCurrentMusic =musics().length -1;
                curuntMusic = [musics()[indexOfCurrentMusic]]
                playMusic(curuntMusic)
            }
            else{

            indexOfCurrentMusic--
            curuntMusic =[musics()[indexOfCurrentMusic]]
            playMusic(curuntMusic)
        }

        })
        nextBtn.addEventListener('click',handelNextMusic)

        shuflleBtn.addEventListener('click' , ()=>{
            indexOfCurrentMusic =   musics().findIndex((item => item.id === curuntMusic[0].id))
            indexOfCurrentMusic = Math.random(musics())
            console.log(indexOfCurrentMusic);
        })
    
    }
   
    




    // function nextAndPrev(){

                
    //     let indexOfCurrentMusic = 0
    //     prevBtn.addEventListener('click',()=>{
    //         indexOfCurrentMusic =   musics().findIndex((item => item.id === curuntMusic[0].id))
    //         if(indexOfCurrentMusic ===0){
    //             indexOfCurrentMusic =musics().length -1;
    //             console.log(indexOfCurrentMusic);
    //             curuntMusic = [musics()[indexOfCurrentMusic]]
    //             playMusic(curuntMusic)
    //         }
    //         else{

    //         indexOfCurrentMusic--
    //         curuntMusic =[musics()[indexOfCurrentMusic]]
    //         playMusic(curuntMusic)
    //     }

    //     })
    //     nextBtn.addEventListener('click',()=>{
    //         if(indexOfCurrentMusic === musics().length -1){
    //             indexOfCurrentMusic =0
    //             curuntMusic = [musics()[indexOfCurrentMusic]]
    //             playMusic(curuntMusic)

    //         }
    //         else{
    //         indexOfCurrentMusic=   musics().findIndex((item => item.id === curuntMusic[0].id))            
    //         indexOfCurrentMusic++
    //         curuntMusic =[musics()[indexOfCurrentMusic]]
    //         playMusic(curuntMusic)}
    //     })
    // }