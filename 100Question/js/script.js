// 1. print Hello Rahul
 
let uname = 'hello world'
console.log(uname);


// 2. JavaScript Program to Add Two Numbers

function add() {
  num1 =10;
  num2 =2;
  add =num1+num2
  console.log(add);
  
}
add()


// function add(num1,num2) {
//     return num1+num2;

// }
// let num1 = 5;
// let num2 = 10;
// let sum = add(num1, num2);
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// prompt(`The sum of ${num1} and ${num2} is ${sum}`)
// document.write(`The sum of ${num1} and ${num2} is ${sum}`)

// 3. JavaScript Program to Find the Square Root


let num =25;
let sqrt=Math.sqrt(num);
console.log(sqrt);
// way 1


// function findSquareRoot(num) {
//     let guess = num / 2;
//     let marginOfError = 0.0001;

//     while (true) {
//         let betterGuess = (guess + num / guess) / 2;

//         if (Math.abs(guess - betterGuess) < marginOfError) {
//             return betterGuess;
//         }

//         guess = betterGuess;
//     }
// }
// console.log(findSquareRoot(25)); 
// console.log(findSquareRoot(16)); 
// console.log(findSquareRoot(9));

// way2

// function findSquareRoot(num) {
//     return Math.sqrt(num);
    
// }

// let num = 25;
// let squreRoot = findSquareRoot (num);
// console.log(`The Squre Root of ${num} is ${squreRoot}`);


// 4.avaScript Program to Calculate the Area of a Triangle

function areaOFtraingle(base,height) {
  return (base* height)/4;
  
}
console.log(areaOFtraingle(20,30));
// 1st
// function CalculateArea(base, height) {
//     return (base* height)/4;

    
// }
// console.log(CalculateArea (20,40));

// // 2nd way 
// function CalculateAreaS(side1, side2, side3) {
//     let s = (side1 +side2 +side3)/2
//     return Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
    
// }

// console.log(CalculateAreaS(3,4,5));

// 5. SWAPING two number

// let num1 =30;
// let num2 =80;


// let numb1 = 30;
// let numb2 = 40;
// let tem =numb1;
// numb1 = numb2;
// numb2 = tem;

// console.log(numb1);
// console.log(numb2);


// 6. Quadratic equation

// function solveQuadratic(a, b, c) {
//   // Check if the equation has real solutions
//   const discriminant = b * b - 4 * a * c;
//   if (discriminant < 0) {
//     return "No real solutions";
//   }

//   // Calculate the two solutions
//   const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//   const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

//   // Return the solutions as an array
//   return [x1, x2];
// }






// Check if the equation has real solutions
// if (b**2 - 4*a*c < 0) {
//     console.log("The equation has no real solutions.");
//     return;
//   }

  // Calculate the solutions
//   const x1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a);
//   const x2 = (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a);

//   // Print the solutions
//   console.log("The solutions are:", x1, "and", x2);


// // Get the coefficients from the user
// const a = parseFloat(prompt("Enter the value of a: "));
// const b = parseFloat(prompt("Enter the value of b: "));
// const c = parseFloat(prompt("Enter the value of c: "));

// // Convert kilometer to miles

// function convertKmToMiles(km) {
//   const miles = km * 0.621371;
//   return miles;
// }
// console.log(convertKmToMiles(10)); 




// javascript
// function Palindrome(str) {
//  let reversedStr = 'Mohan';
//  for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//  }
//  return str === reversedStr;
// }

// console.log(Palindrome); // Output: true
// // console.log(Palindrome('hello')); // Output: false







// javascript
// function isPalindrome(str) {
//  let reversedStr = '';
//  for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//  }
//  return str === reversedStr;
// }

// console.log(isPalindrome('racecar')); 
// console.log(isPalindrome('hello')); 


// for (let i = 65; i <= 90; i++) {
//   console.log(String.fromCharCode(i));


// }


function isPalindrome(str) {
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false








