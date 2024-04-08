// name array
let guestarry1:string[]=["fatima","bisma","uzma"];

// can not make dinner

let canNotAttend1:string="hareem";
console.log(`${canNotAttend1} can not make it,for dinner`);

// invite new guest 
let newguest2:string="haleema";
guestarry1[guestarry1.indexOf(canNotAttend1)]=newguest2

// send message
//guestarry.map ((items)=> console.log('hello,${items})are you invite to dinner')

console.log("Welocome all we found a bigger dinner table");

guestarry1.unshift("noreen");
console.log(guestarry1)

let middleGuest1:string="aqsa";
let middleIndex1=guestarry1.length/2;
guestarry1.splice(middleIndex1,0,middleGuest1);

console.log(guestarry1);

guestarry1.push("fatima");

guestarry1.map((item)=> console.log(`dear ${item} are you invited to dinner!`));
