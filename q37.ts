// Making a function
function makeShirt(size:String = "large", printMessage:string="I love Typescript") {
    console.log(`Creating a ${size} shirt with ${printMessage} print on shirt`)
}

// Calling a function with by-defult message
makeShirt();

// Calling a function now with Medium size and defult message
makeShirt("Medium")

// Calling a function now with small size and also Different print message

makeShirt("Small", "I love javascript")