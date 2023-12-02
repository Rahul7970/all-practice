// 1. Use object Destructing?
// object destructing allow you to extract data from objects into distict variable.
// Thiscan make your code cleaner by avoding repetively using dot notaion.
let user ={
    name:'Rahul',
    age:24
};
// without desctruting 
// let name =user.name;
// let age =user.age;

// console.log(user);

// with descturing 
let {name , age}=user;
console.log(user);


// 2. use Default parameter?

// Default parametr allow you to set default values for function parameter
// if none are provided. THis avoids repeating yourself by redefining value every time.

function greet(name = 'Max') {
    console.log('Hello'+ name);
    
}
greet();
greet('Rahul')

// 3. Use Template Literals
// Template literals make string concatination cleaner using backticks and 
// ${experession} instead of plus signs. Even a kid could see this 
// is an easier way to build string.

let uname = 'Rahul kumar';
let agee = 24;

// without template literals
// let greeting = 'Hello'+uname + 'you are' + age;
// console.log(greeting);

// with leterals
let greeting = `Hello ${uname},you are ${agee}`
console.log(greeting);

// 4. us Let & const
// Using let and const avoids unintended behaviour form var. they make
// sure variables are block-scoped and constants cant be reassignd

//var is fucntional scopped

if (true) {
  var snack ='chips';  
}
console.log(snack);

if(true){
    let fruit = 'apple';
    const color ='red';
}
console.log(fruit);
console.log(color)