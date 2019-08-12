//DOM Elements
let time = document.querySelector('#time'),
    todayDate = document.querySelector('#date'), 
    greeting = document.querySelector('#greeting'),
    name = document.querySelector('#name'),
    todayFocus1 = document.querySelector('.focus-today-item1'),
    todayFocus2 = document.querySelector('.focus-today-item2'),
    todayFocus3 = document.querySelector('.focus-today-item3'),
    weekFocus1 = document.querySelector('.focus-week-item1'),
    weekFocus2 = document.querySelector('.focus-week-item2'),
    weekFocus3 = document.querySelector('.focus-week-item3'),
    monthFocus1 = document.querySelector('.focus-month-item1'),
    monthFocus2 = document.querySelector('.focus-month-item1'),
    monthFocus3 = document.querySelector('.focus-month-item1'),
    daysTilWedding = document.querySelector('.wedding-day-number')


// Clock

function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds()

//AM PM
const amPM = hour >= 12 ? 'AM' : 'PM';

//12 hours
    hour = hour % 12 || 12;
    
//output time 
time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
setTimeout(showTime, 1000);
}

//add zeros to clock
function addZero(num){
 return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

//set background and greeting
function setBackground(){
    let today = new Date(),
     hour = today.getHours();

     if(hour > 23 && hour < 4){
        document.body.style.backgroundImage = "url('img/polygon1')";
     } else if(hour >= 5 && hour < 9){
        document.body.style.backgroundImage = "url('img/polygon2')";
     } else if(hour >= 9 && hour < 13){
        document.body.style.backgroundImage = "url('img/polygin3')";
     } else if(hour >= 13 && hour < 17){
        document.body.style.backgroundImage = "url('img/triangle1')";
     } else if(hour >= 17 && hour < 20){
        document.body.style.backgroundImage = "url('img/triangle2')";
     } else if(hour == 20 || hour == 21 || hour == 22 || hour == 23 ){
        document.body.style.backgroundImage = "url('img/polygon4')";
     }
}

function setGreeting(){
    let today = new Date(),
     hour = today.getHours();
    if(hour < 12){
        //morning
        greeting.textContent="Good Morning";
    } else if(hour < 18 && hour > 11){
        //afternoon
        greeting.textContent="Good Afternoon";
    } else {
        //evening
        greeting.textContent="Good Evening";
    }
}

let dayInMilliseconds = 1000 * 60 * 60 * 24;



//run functions 
showTime();
setBackground();
setGreeting();
setInterval(function() { 
    let daysLeft = 279
    daysLeft--;

 },dayInMilliseconds );
  

