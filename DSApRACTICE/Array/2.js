// insert Element in array

let arr= [34,5,7,8,45,55,7,76];
let newElement = 20;
let position = 3;
console.warn(arr)
for (let i = arr.length-1; i >=0; i--) {
//    console.warn(i)
    if(i>=position){
        arr[i+1]=arr[i];
        if (i==position) {
            arr[i]= newElement;
        }
    }
}
console.warn(arr)