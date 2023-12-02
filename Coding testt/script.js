// Reverse an array.-----> >>> let arr = [3, 5, 6, 7];

let revArry =[3,5,6,7];
let reverse =revArry.reverse();
console.log("Reverse in array",reverse);

// How to sort data in array?

let array = [4,6,3,7,5,1];
array.sort()
console.log("shorting in array",array);


// Find the maximum number in an array.

let numbers = [5, 10, 15, 20, 25];
let max = Math.max(...numbers);
console.log("maximum number",max);

// Calculate the sum of all numbers in an array.


let arrays = [[5, 10, 15], [20, 25, 30], [35, 40, 45]];
let sum = 0;

for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
        sum += arrays[i][j];
    }
}

console.log("Calculate array",sum); 

// Check if an array is a palindrome. —> ABA


function isPalindrome(arr) {
 let start = 0;
 let end = arr.length - 1;

 while (start < end) {
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
 }

 return true;
}

let arr = ['A', 'B', 'A'];
console.log(isPalindrome("palindrom",arr)); 


// Merge two objects into one.

let obj1 ={
    a: 3,
    b: 5
};

let obj2 = {
    c: 5,
    d: 6
};
let mergeobj = Object.assign({}, obj1, obj2);
console.log("merge",mergeobj);

// Print all the properties and value of an object.

// let obj = {                                                                                                                                                                                                                
//     adddress: "india",
//     amount: 452,

// let obj = {
//     adddress: "india",
//     amount: 452,
//     for (let property in obj) {
//         console.log(`${property}: ${obj[property]}`);
//     }
// }
          

let obj = [
    {
        uname: "Ajay",
        age: 2,
    },
    {
        uname: "Zebra",
        age: 4,
    },
    {
        uname: "Cat",
        age: 54,
    },
    {
        uname: "Parrot",
        age: 24,
    },
];

obj.sort((a, b) => {
    if (a.uname < b.uname) {
        return -1;
    }
    if (a.uname > b.uname) {
        return 1;
    }
    return 0;
});

console.log(obj);




// anagram

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("triangle", "integral")); 
console.log(isAnagram("apple", "pabble")); 


8.

function truncateString(str, num) {
 if (str.length <= num) {
    return str;
 }
  
 return str.slice(0, num) + '...';
}

console.log(truncateString('ABCD', 4)); // Output: ABCD

// FEBONIC

function fibonacci(num) {
    var fib = [0, 1];
   
    for (var i = 2; i < num; i++) {
       fib[i] = fib[i - 1] + fib[i - 2];
    }
   
    return fib;
   }

console.log(fibonacci(10));


// prime number

// recursion


function printRecursion(n) {
    if (n <= 0) {
        return;
    }
    console.log(n);
    printRecursion(n - 1);
}

printRecursion(5);

// factorial


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(3)); // Output: 120



let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];


console.log(arr3);