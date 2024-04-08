let magician : string[] = ["Herry Potter","Hermione Granger","Ron Weasley", "Albus Dumbledore"];

function makeGreat1(magicianArray: string[] )  {
    
    for(let i=0; i<magicianArray.length; i++){
            magician[i] = 'the great'  + magicianArray[i]
    }
}

function showMagician1(magician: string[]) {

    magician.forEach(element =>{

console.log(element);

    });
}
  
  makeGreat1(magician);
  showMagician1(magician);