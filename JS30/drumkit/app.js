window.addEventListener('keydown',(e)=>{
    console.log(e);
const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
console.log(audio);
audio.currentTime = 0;
audio.play();
})