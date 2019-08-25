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
        day = today.getDate(),
        month = today.getMonth() + 1,
        year = today.getFullYear(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds()
//Date
    todayDate.innerHTML = month + '/' + day + '/' + year;

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

//Wedding countdown
var countDownDate = new Date("May 16, 2020 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Display the result in the element with id="demo"
  daysTilWedding.innerHTML = days + 1;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    daysTilWedding.innerHTML = "TODAY IS THE DAYI GET TO MARRY THE LOVE OF MY LIFE";
  }
}, 1000);


//run functions 
showTime();
setGreeting();
setInterval(function() { 
    let daysLeft = 279
    daysLeft--;

 },dayInMilliseconds );
  

