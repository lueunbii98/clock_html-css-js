const ssHand = document.querySelector('.ss-hand');
const mmHand = document.querySelector('.mm-hand');

function setDate(){
    const now = new Date(); //getting the date
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds * 360) / 60) + 90; // transforming the second in to a procentage in base 360°, add 90 'cause of the initial css
    ssHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(seconds);
}

setInterval(setDate, 1000); //runs every 1 second