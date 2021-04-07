"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pow = pow;
exports.hypotenuse = hypotenuse;
exports.circleArea = circleArea;
exports.pow2 = pow2;

function pow(num1, num2) {
  if (num2 === 1) {
    return num1;
  }

  return num1 * pow(num1, num2 - 1);
}

function hypotenuse(adjacent, opposite) {
  var hypotenuse = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));
  return {
    adjacent: adjacent,
    opposite: opposite,
    hypotenuse: hypotenuse
  };
}

function circleArea(radius) {
  var PI = 3.14;
  return PI * radius * radius;
}

function pow2(num1, num2) {
  if (num2 === 1) {
    return num1;
  }

  return num1 * pow2(num1, num2 - 1);
}