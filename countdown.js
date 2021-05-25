/*
Description:
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.
Input: 
    Any positive number (n)
Output: 
    - Display (n -1) every 1000 milliseconds
    - Display done when n = 0

    Output format:
        countDown(4);
        3
        2
        1
        "DONE!"
*/

function countdown(num) {
    let id = 0;
    let value = num - 1;
    let displayValue = "";
    id = setInterval(() => {
        if (value) {
            displayValue = value;
        } else {
            displayValue = '"DONE!"'
            clearInterval(id);
        }
        console.log(displayValue);
        value--;
    }, 1000);
}

countdown(4);


