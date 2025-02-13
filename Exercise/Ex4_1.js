//data
var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9},
    {name: 'John', age: 40},
    {name: 'Ann', age: 19},
    {name: 'Elisabeth', age: 16}
    ]
//Exercise 1: Find the first person of the people array is teenager
const firstTeenager = people.find(p => p.age>=10 && p.age <=20);
console.log(`The first person of the people array is teenager: ${firstTeenager}`);

//Exercise 2: Find all person of the people array is teenager
const allTeenager = people.filter(p => p.age >= 10 && p.age <= 20);
console.log(`All person of the people array is teenager: ${allTeenager}`);

//Exercise 3: Check if every person of the people array is teenager
const checkEveryTeenager = people.every(p => p.age >= 10 && p.age <= 20);
console.log(`Check if every person of the people array is teenager: ${checkEveryTeenager}`);

//Exercise 4: Check if any person of the people array is teenager
const checkAnyTeenager = people.some(p => p.age >= 10 && p.age <= 20);
console.log(`Checks if any person of the people array is teenager: ${checkAnyTeenager}`);