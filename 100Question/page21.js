// function factorial(num) {
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//        result *= i;
//     }
//     return result;
//    }
   
//    console.log(factorial(5));


// let date = new Date('29/12/2022');
// let formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
// console.log(formattedDate);



// function count(str, substr) {
//     let parts = str.split(substr);
//     return parts.length - 1;
// }

// let str = 'Hello, world! world is beautiful.';
// let substr = 'world';
// console.log(count(str, substr)); 



function compareDate(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);

    if (d1 > d2) {
        return 1;
    } else if (d1 < d2) {
        return -1;
    } else {
        return 0;
    }
}

let date1 = "2023-10-01";
let date2 = "2023-01-02";
console.log(compareDate(date1, date2));