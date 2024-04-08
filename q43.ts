let magicians1 : string[] = ["Herry Potter","Hermione Granger","Ron Weasley", "Albus Dumbledore"];

function copyArray(arr: string[]) {
   return [...arr]
}
function makeGreat(magicianArray: string[] )  {
    
    for(let i=0; i<magicianArray.length; i++){
            magicians1 [i] = 'the great'  + magicianArray[i]
    }
}

function showMagician(magician: string[]) {

    magician.forEach(element =>{

console.log(element);

    });
}
 const copyMagicianArray = copyArray(magicians1)

  makeGreat(copyMagicianArray);

  console.log("\n\nThis is my original array")
  showMagician(magicians1);


  console.log("\n\nThis is my modified copy of the array")
  showMagician(copyMagicianArray);