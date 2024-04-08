function storeCarInfo(manufacture: string, modleName: string, ...extraOption: {[key : string]: any } [] ) : object {
   
    const carInfo = {
            
        manufacture,
        modleName,
        ...Object.assign({}, ...extraOption)

    }

     return carInfo;
};
  
let answer = storeCarInfo(`Honda`, `Civic`,{colour:`Black`},{features:[`Navigation`, `Power window`]})

console.log(answer)