"use strict";
function describeCity(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// calling function
describeCity("karachi");
describeCity("Lahore");
describeCity("Berlin", "Germany");
