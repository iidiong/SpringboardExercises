/* 
Description:
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter.If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75. 
*/
let intervalId = 0;
let counter = 0;

function randomGame() {
    intervalId = setInterval(selectNumber, 1000)
}

function selectNumber() {
    let numberSelected = Math.random().toFixed(2);
    counter = ++counter;
    if (numberSelected > .75) {
        clearInterval(intervalId);
    }
    console.log(`Number of Tries : ${counter}`);
}
randomGame();

