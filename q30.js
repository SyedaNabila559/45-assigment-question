"use strict";
let userName = ["Saim", "Ali", "Furqan", "Admin", "Mosa"];
// using forEach loop on Arry
userName.forEach(oneUser => {
    if (oneUser === "Admin") {
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${oneUser}, thank you for logging in again`);
    }
});
