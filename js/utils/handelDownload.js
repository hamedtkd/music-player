const downloadBtn = document.querySelector(".download-btn")

export function handelDownload(curuntMusic){
    downloadBtn.addEventListener('click' , ()=>{
        downloadBtn.href =curuntMusic[0].audio
    })
}