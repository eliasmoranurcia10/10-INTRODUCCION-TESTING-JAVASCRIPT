function sum(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function divide(a, b) {
  if(b === 0){
    return null;
  }
  return a / b;
}

function promedio(a, b) {
  return (a + b)/2;
}

module.exports = {
  sum,
  multiplicar,
  divide,
  promedio
};
