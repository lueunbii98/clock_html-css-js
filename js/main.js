const ssHand = document.querySelector('.ss-hand');
const mmHand = document.querySelector('.mm-hand');
const hhHand = document.querySelector('.hh-hand');

function setDate(){
    const now = new Date(); //getting the date

    //getting the hh:mm:ss
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    //transforming to degrees
    const secondsDegrees = ((seconds * 360) / 60) + 90; // transforming the second in to a procentage in base 360°, add 90 'cause of the initial css
    const minutesDegrees = ((minutes * 360) / 60) + 90;
    const hoursDegrees = ((hours * 360) / 12) + 90;
    
    if (secondsDegrees === 90){
        ssHand.classList.add('notransition');
        mmHand.classList.add('notransition');
        hhHand.classList.add('notransition');
    } 
    if (secondsDegrees === 96){
        ssHand.classList.remove('notransition');
        mmHand.classList.remove('notransition');
        hhHand.classList.remove('notransition');
    } 

    //adding the new transform
    ssHand.style.transform = `rotate(${secondsDegrees}deg)`;
    mmHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hhHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); //runs every 1 second