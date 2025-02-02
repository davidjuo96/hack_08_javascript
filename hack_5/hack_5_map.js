/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

let arr = [0, 1, 2, 3];

result = arr.map(num => 7 - num * 2);

//export result
module.exports = result;