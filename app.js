let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87  // libra esterlina
};

// Función para convertir de dólares a yenes
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor de dólares a euros y luego de euros a yenes
    let valueInEuro = valueInDollar / oneEuroIs["USD"];
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    // Retornamos el valor en yenes
    return valueInYen;
};

// Función para convertir de euros a dólares
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retornamos el valor en dólares
    return valueInDollar;
};

// Función para convertir de yenes a libras
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor de yenes a euros y luego de euros a libras
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    let valueInPounds = valueInEuro * oneEuroIs["GBP"];
    // Retornamos el valor en libras
    return valueInPounds;
};

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

