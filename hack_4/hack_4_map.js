/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

let arr = [0, 1, 2, 3];

result = arr.map(num => num * 2 + 1);

//export result
module.exports = result;