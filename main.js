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
    daysTilWedding = document.querySelector('.wedding-day-number'),
    daysTilCyberpunk = document.querySelector('.cyberpunk-day-number')

    function setLocalStorage(){
        //today1
        if(localStorage.getItem('todayitem1') === null){
            todayFocus1.textContent = 'enter goal'
        } else{
            todayFocus1.textContent = localStorage.getItem('todayitem1');
        }
        //set todayfocus1
        function setTodayFocus1(e){
            if(e.type === 'keypress'){

            } else{
                
            }
        }
        todayFocus1.addEventListener('keypress', setTodayFocus1);
        todayFocus1.addEventListener('blur', setTodayFocus1);

        // //today2
        // if(localStorage.getItem('todayitem2') === null){
        //     todayFocus2.textContent = 'Example 2'
        // } else{
        //     todayFocus2.textContent = localStorage.getItem('todayitem2');
        // }
        // //today3
        // if(localStorage.getItem('todayitem3') === null){
        //     todayFocus3.textContent = 'Example 3'
        // } else{
        //     todayFocus3.textContent = localStorage.getItem('todayitem3');
        // }
        // //weekFocus1
        // if(localStorage.getItem('weekitem1') === null){
        //     todayFocus1.textContent = 'Example 1'
        // } else{
        //     todayFocus1.textContent = localStorage.getItem('todayitem1');
        // }
        // //weekFocus2
        // if(localStorage.getItem('weekitem2') === null){
        //     weekFocus2.textContent = 'Example 2'
        // } else{
        //     weekFocus2.textContent = localStorage.getItem('weekitem2');
        // }
        // //weekFocus3
        // if(localStorage.getItem('weekitem3') === null){
        //     weekFocus3.textContent = 'Example 3'
        // } else{
        //     weekFocus3.textContent = localStorage.getItem('weekitem3');
        // }
        // //monthFocus1
        // if(localStorage.getItem('monthitem1') === null){
        //     monthFocus1.textContent = 'Example 1'
        // } else{
        //     monthFocus1.textContent = localStorage.getItem('monthitem1');
        // }
        // //monthFocus2
        // if(localStorage.getItem('monthitem2') === null){
        //     monthFocus2.textContent = 'Example 2'
        // } else{
        //     monthFocus2.textContent = localStorage.getItem('monthitem2');
        // }
        // //monthFocus3
        // if(localStorage.getItem('monthitem3') === null){
        //     monthFocus3.textContent = 'Example 3'
        // } else{
        //     monthFocus3.textContent = localStorage.getItem('monthitem3');
        // }
    }

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

//Wedding and Cyberpunk countdown
let countDownDateWedding = new Date("May 16, 2020 11:00:00").getTime();
let countDownDateCyberpunk = new Date("April 16, 2020 11:00:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let timeUntilWedding = countDownDateWedding - now;
    let timeUntilCyberpunk = countDownDateCyberpunk - now;

    // Time calculations for days
    let daysWedding = Math.floor(timeUntilWedding / (1000 * 60 * 60 * 24));
    let daysCyberpunk = Math.floor(timeUntilCyberpunk / (1000 * 60 * 60 * 24));
    
    daysTilWedding.innerHTML = daysWedding + 1;
    daysTilCyberpunk.innerHTML = daysCyberpunk + 1;

  // If the count down is finished, write some text 
  if (timeUntilWedding < 0) {
    daysTilWedding.innerHTML = "TODAY IS THE DAY I GET TO MARRY THE LOVE OF MY LIFE";
  }

  if (timeUntilCyberpunk < 0) {
    daysTilCyberpunk.innerHTML = "CYBERPUNK 2077! LEGOOOO!";
  }
}, 1000);



//run functions 
showTime();
setGreeting();
setLocalStorage();
setInterval(function() { 
    let daysLeft = 279
    daysLeft--;

 },dayInMilliseconds );
  

