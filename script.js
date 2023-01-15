
//Function to play sound 

function playSound (e) {
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio);
    if (!audio) return;
    audio.currentTime = 0; //rewind to the start
    audio.play();
    //console.log(key);
    key.classList.add('playing');
 }


//Function to remove transition 

function removeTransition (e) {
    //console.log(e);
    if (e.propertyName !== 'transform') return; //skip if it's not transform
    //console.log(e.propertyName);
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
