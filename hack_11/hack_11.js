/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];

let numberArray_02 = numberArray.map(num => {
    if (num === 1) return "one";
    if (num === 2) return num;
    if (num === 3) return "three";
    if (num === 4) return num;
    if (num === 5) return "five";
})

let stringArray_02 = stringArray.map(str =>{
    switch (str) {
        case "foo": return "f00";
        case "bar": return "Bar";
        case "baz": return "b@z";
        case "qux": return "quX";
        case "echo": return "3ch0";
    }
})

result = ["h@ck", ...numberArray_02, "h@ck", ...stringArray_02, "h@ck"];

//export result
module.exports = result;