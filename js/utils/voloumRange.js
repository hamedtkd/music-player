const volumeRangeDivisoin  = document.querySelector('.volume-range-divisoin')
const formRange   = document.querySelector('.form-range  ')
const volumeRange  = document.querySelector('#volume-range')

formRange.style.display = "none"
export function voloumRange(){
    volumeRangeDivisoin.addEventListener('mouseover' , ()=>{
        formRange.style.display = "flex"
    })
    volumeRangeDivisoin.addEventListener('mouseout' , ()=>{
        formRange.style.display = "none"
    })
    
}
// function volumeRangeInput(){
//     volumeRange.addEventListener('click',()=>{
//         console.log("object");
//     })
// }
// volumeRangeInput()