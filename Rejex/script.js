let string  = 'find me ';
let pattern = /me/;

// serch Pattern is in string variable

let result1 = string.search(pattern);
console.log(result1);

// replace the character with another character

let string1 = 'find me';
string1.replace(pattern, 'found you');

// spliting string into array element

let regex1 = /[\s,]+/;
let rsult2 = 'hELLO RAHUL!' .split(regex1);
console.log(rsult2);




