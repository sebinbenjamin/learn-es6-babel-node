// export keyword not useful in es5
export function square(side) {
  return side ** 2; // es6 Exponentiation (**) operator is equivalent to Math.pow(number, power)
}

// export keyword not useful in es5
export function diag(firstSide, secondSide) {
  return Math.sqrt(square(firstSide) + square(secondSide));
}

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

const PI = Math.PI ** 2;

export { PI, add };                            //es6
// module.exports = { PI, add, square, diag }; //es5
