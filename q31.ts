let userNames = ["Saim","Ali","Furqan","Admin","Moosa"]

userNames = []

if (userNames.length === 0){
    console.log("your array in empty we need to find some user")
}  else{

    userName.forEach(oneUser => {
        if(oneUser === "Admin"){
      console.log(`Hello ${oneUser}, would you like to see a status report?`)
      
        } else{
          console.log(`Hello ${oneUser}, thank you for logging in again`)
        }
      })
}