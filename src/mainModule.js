//es6
 import { PI, diag, square, add } from "./moduleA.js";
//  import * as apiModule from "./apis";

 console.log(PI); 
 console.log(diag(5,10));
 console.log(add(5,10));

/**
 * ES5
 * 
const moduleA = require('./moduleA');

console.log(moduleA.PI);
console.log(moduleA.diag(5, 10));
console.log(moduleA.add(5, 10));
*/
