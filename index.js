// Forma declarativa de crear funciones
// function sumar(a, b) {
//   return a + b
// }

// Forma imperativa de crear funciones
// De esta manera bloqueamos el uso de 'sumar', para evitar sobreescribir la función
const sumar = function (a, b) {
  return a + b
}

// var sumar = (a, b) => a * b

console.log(sumar(1, 2))

// Más información: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones
