"use strict";
function storeCarInfo(manufacture, modleName, ...extraOption) {
    const carInfo = Object.assign({ manufacture,
        modleName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answer = storeCarInfo(`Honda`, `Civic`, { colour: `Black` }, { features: [`Navigation`, `Power window`] });
console.log(answer);
