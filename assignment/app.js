//! Math Methods
//? Q 1
// var userInp = -prompt('Enter Positive Value');
// var roundValue = Math.round(userInp);
// var floorValue = Math.floor(userInp);
// var ceilValue = Math.ceil(userInp);
// document.write("Number: "+ userInp,"<br>")
// document.write("Round off value: " + roundValue ,"<br>")
// document.write("Floor Value: "+ floorValue,"<br>")
// document.write("Ceil value: "+ ceilValue,"<br>")

//? Q 2

// var userInput = +(prompt("Enter a negative floating-point number:"));

// if (isNaN(userInput) || userInput >= 0) {
// document.write("Invalid input. Please enter a negative floating-point number.");
// } 

// else {
// document.write("<p>Number: " + userInput + "</p>");
// var roundedValue = userInput.toFixed(2);
// document.write("<p>Round off value: " + roundedValue + "</p>");
// var floorValue = Math.floor(userInput);
// var ceilValue = Math.ceil(userInput);
// document.write("<p> Floor value: " + ceilValue + "</p>");
// document.write("<p>Ceiling value: " + floorValue + "</p>");
// }


//? Q 3

// var userInp = +prompt('Enter Value');
// var absValue = Math.abs(userInp);
// document.write("The Absolute Number of " + userInp + " is " + absValue,"<br>");


//? Q 4
// function rollDice() {
//     var diceValue = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("diceValue").textContent = "Dice Value: " + diceValue;
// }

//? Q 5
// function tossCoin() {
//     var randomValue = Math.random();
//     var coinResult = randomValue < 0.5 ? "Heads" : "Tails";
//     document.getElementById("coinResult").innerHTML = "Coin Toss Result: " + coinResult;
// }
        
//? Q 6

    
// var ent = +prompt("write Generate")
    
// var randNum = Math.floor(Math.random() * 100) + 1;
    
// document.write("Random Number between 1 and 100: " + randNum);
    
//? Q 7
    
    
// var useInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");
// var regex = /(\d+(\.\d+)?)\s*(kgs?|kilograms?)/i;
// var match = regex.exec(useInput);
// if (match) {
//var weightKgs = parseFloat(match[1]);
    
//document.write("Your weight is: " + weightKgs + " kg");
// } else {
//     document.write("Invalid input. Please use a format like '50', '50kgs', '50.2kgs', or '50.2kilograms'.");
// }

//? Q 8
        
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if (!isNaN(userInput) && userInput >= 1 && userInput <= 10) {
//     if (userInput === secretNumber) {
//         alert("Congratulations! You guessed the secret number: " + secretNumber);
//     } else {
//         alert("Sorry, the secret number was " + secretNumber + ". Try again!");
//     }
// } else {
//     alert("Invalid input. Please enter a number between 1 and 10.");
// }






//! Date Methods

//? Q 1

// var curtDate = new Date();
// // var formattedDate = curtDate.toLocaleString();

// document.write("Currentt Date and Time: " + curtDate);

//? Q 2

// var currentDate = new Date();
// var currentMonth = currentDate.getMonth() + 1;
// var monthNames = [
//     "January", "February", "March", "April",
//     "May", "June", "July", "August",
//     "September", "October", "November", "December"
// ];
// var currentMonthName = monthNames[currentMonth - 1];
// alert("Current Month: " + currentMonthName);

//? Q 3

// var currentDate = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDayIndex = currentDate.getDay();
// var currentDayAbbreviation = dayNames[currentDayIndex];

// alert("Today: " + currentDayAbbreviation);

//? Q 4

// var currentDate = new Date();
// var currentDayIndex = currentDate.getDay();
// if (currentDayIndex === 6 || currentDayIndex === 0) {
//     alert("It's Fun day");
// } else {
//     alert("It's not Fun day");
// }

//? Q 5

// var currentDate = new Date();

// var currentDay = currentDate.getDate();

// if (currentDay <= 15) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }


//? Q 6

// var currentTimeMillis = Date.now();
// var minutesSinceMidnight1970 = currentTimeMillis / (1000 * 60);
// document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSinceMidnight1970);


//? Q 7

// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

//? Q 8

// var laterDate = new Date(2022, 11, 31);
// document.write("laterDate:", laterDate);

//? Q 9

// var ramadanStartDate = new Date(2023, 4, 22);
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStartDate;
// var daysSinceRamadanStart = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert(daysSinceRamadanStart + " days have passed since 1st Ramadan, 2023");

//? Q 10

// var referenceDate = Date.now();
// var beginningOf2023 = new Date('January 1, 2023');
// var timeDifference = referenceDate - beginningOf2023;
// var secondsElapsed = timeDifference / 1000;
// document.write("Seconds elapsed between the reference date and the beginning of 2023: " + secondsElapsed + " seconds");

//? Q 11

// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// currentDate.setHours(currentHour + 1);

// currentDate.setHours(currentDate.getHours() - 1);
// document.write("Current Date and Time: " + currentDate + "<br>");
// document.write("Time 1 hour subtracted): " + currentDate);


//? Q 12

// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years ago: " + currentDate.toDateString());

//? Q 13

// var age = prompt("Please enter your age:");
// age = parseInt(age);
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("Your birth year is: " + birthYear);

//? Q 14

// var customerName = prompt("Enter Customer Name:");
// var currentMonth = prompt("Enter Current Month:");
// var numberOfUnits = parseFloat(prompt("Enter Number of Units:"));
// var chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));
// var dueDate = new Date(prompt("Enter Due Date (YYYY-MM-DD):"));

// var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);

// var latePaymentSurcharge = 0;
// var currentDate = new Date();
// if (currentDate > dueDate) {
//     var daysLate = Math.floor((currentDate - dueDate) / (1000 * 60 * 60 * 24));
//     latePaymentSurcharge = (0.02 * netAmountPayable * daysLate).toFixed(2);
// }

// var grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);

// var billDetails = `
//     <h2>K-Electric Bill</h2>
//     <p><strong>Customer Name:</strong> ${customerName}</p>
//     <p><strong>Current Month:</strong> ${currentMonth}</p>
//     <p><strong>Number of Units:</strong> ${numberOfUnits}</p>
//     <p><strong>Charges per Unit:</strong> $${chargesPerUnit.toFixed(2)}</p>
//     <p><strong>Net Amount Payable (within Due Date):</strong> $${netAmountPayable}</p>
//     <p><strong>Late Payment Surcharge:</strong> $${latePaymentSurcharge}</p>
//     <p><strong>Gross Amount Payable (after Due Date):</strong> $${grossAmountPayable}</p>
// `;

// document.write(billDetails);