//data
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };
  

//Exercise 1: Print the name of each company using forEach
 companies.forEach((company) => console.log(`Print the name of each company using forEach: ${company.name}`));

//Exercise 2: Print the name of each company that started after 1987
 companies.forEach((company) =>{
    if(company.start > 1987) console.log(`Print the name of each company that started after 1987: ${company.name}`);
});

//Exercise 3: Print the companies with category: "Retail" by format: companyName companyStart  companyEnd
companies.filter((company) => company.category ==="Retail" ).forEach(company => {
    company.start +=1;
    console.log(`${company.name} \t ${company.start} \t\t ${company.end}`);
});

//Exercise 4: Sort the companies based on their end date in ascending order
 const sortCompany = companies.sort((x,y) => x.end - y.end);
console.log(`Sort the companies based on their end date in ascending order:`);
console.log(sortCompany);

//Exercise 5: Sort the ages array in descending order
const sort = ages.sort((x,y) => y-x);
console.log(`Sort the ages array in descending order`);
console.log(sort);

//Exercise 6: The sum if you add all the ages using reduce
 const sumAges = ages.reduce((accumulator, currentValue) => accumulator+currentValue);
console.log(`The sum if you add all the ages using reduce: ${sumAges}`);

//Exercise 7: Print the first company's name and category by using Object
const {name, category} = companies[0];
const newObject = {
     name,
     category
};
console.log(newObject);

//Exercise 8: Find summarize of the numbers 
function sum(...numbers){
    let total = 0;
    for(const e of numbers){
        total += e;
    }
    console.log(`Sum: ${total}`);
}
sum(1,2,3,4,5);

//Exercise 9: Print array 
const number1 = [1,3,5,7];
const number2 = [2,4,6];
const number3 = [...number2,"Hello", true,...number1, 3.5];
console.log(number3);

//Exercise 10:  Destructuring the property street in a variable named street from the object person
console.log(`Destructuring the property street in a variable named street from the object person: ${person.address.street}`);

//Exercise 11: print out by using Function
function incre(){
    let count =0;
    return function(){
        return count++;
    }
}
const result = incre();
console.log(result());
console.log(result());
console.log(result());
console.log(result());

//12. Print out by using parse Query
function parseQueryParams(url){
    const queryParams ={};
    new URL(url).searchParams.forEach((value, key)=>{
        queryParams[key]=value;
    });
    return queryParams;
}
console.log(parseQueryParams('http://example.com?page=1&size=10'));