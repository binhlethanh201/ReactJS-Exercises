//data
var array = [1, 2, 3, 4];
//Find summarize of numbers in array
const sum = array.reduce((accumulator, currentValue) => accumulator+currentValue);
console.log(`Tong: ${sum}`);

//Find product of numbers in array
const product = array.reduce((accumulator, currentValue) => accumulator*currentValue);
console.log(`Tich: ${product}`);