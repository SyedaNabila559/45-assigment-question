// name array

let guestArray:string[]=["Fatima","Bisma","Uzma"];

// can not make dinner 

let CanNotAttend:string="Hareem";
console.log('${CanNotAttend} can not make it for dinner');

let newguest1:string="haleema";
guestArray[guestArray.indexOf(CanNotAttend)]=newguest1;
console.log(guestArray);

guestArray.map((items)=> console.log(`hello,${newguest1} are you invite to dinner`));

