var magician = ["Herry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"];
function makeGreat1(magicianArray) {
    for (var i = 0; i < magicianArray.length; i++) {
        magician[i] = 'the great' + magicianArray[i];
    }
}
function showMagician1(magician) {
    magician.forEach(function (element) {
        console.log(element);
    });
}
makeGreat1(magician);
showMagician1(magician);
