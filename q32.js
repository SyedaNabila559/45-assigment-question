"use strict";
let currentUser = ["Ayesha", "Zohan", "Momina", "Habiba", "Admin"];
let newuUser = ["Admin", "Fatima", "Momina", "Dua", "Hina"];
newuUser.forEach(newuUser => {
    if (currentUser.some(currentUser => currentUser.toLowerCase() === newuUser.toLowerCase())) {
        console.log(`${newuUser} will need to enter a new username`);
    }
    else {
        console.log(`${newuUser} is availible`);
    }
});
