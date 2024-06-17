const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
}
console.log("Hello World")
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))
module.exports = { sum, fromEuroToDollar }

const fromDollarToYen = function(valueInYen) {
    
    let valueInDollar = valueInYen * 157.6;
    
    return valueInDollar;
}
module.exports = { sum,fromEuroToDollar, fromDollarToYen }

const fromYenToPound = function(valueInPound) {
    
    let valueInYen = valueInPound * 0.0056;
    
    return valueInYen;
}
module.exports = { sum,fromEuroToDollar, fromDollarToYen, fromYenToPound }