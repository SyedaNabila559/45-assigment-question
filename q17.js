"use strict";
// name array
let guestarry4 = ["fatima", "bisma", "uzma"];
// can not make dinner
let canNotAttend4 = "hareem";
console.log(`${canNotAttend4} can not make it,for dinner`);
// invite new guest 
let newguest = "haleema";
guestarry4[guestarry4.indexOf(canNotAttend4)] = newguest;
// send message
//guestarry.map ((items)=> console.log('hello,${items})are you invite to dinner')
guestarry4.unshift("noreen");
console.log(guestarry4);
let middleGuest = "aqsa";
let middleIndex = guestarry4.length / 2;
guestarry4.splice(middleIndex, 0, middleGuest);
console.log(guestarry4);
guestarry4.push("fatima");
console.log("we can invite only two people for dinner");
while (guestarry4.length > 7) {
    let removeguest = guestarry4.pop();
    console.log(`sorry ${removeguest} we can not invite to dinner!`);
}
guestarry4.map((item) => console.log(`\n${item} you are still invite to dinner`));
guestarry4.pop();
guestarry4.pop();
console.log(guestarry4);
