 // Array Traversal Methods
 let arr =  [3,5,67,8,9,0,99,12,87,97,76];
 console.log(arr[0]);
 // for (let i=0; i<arr.length;i++){
 //     document.write(`Array ${i} is ${arr[i]} <br>`);

 // }
 // let x =3;
 // document.write(arr[x])

 function GetElement(params) {
     let element =document.getElementById('element').value
     if (element<arr.length ) {

        
     alert(arr[element])  
     }else{
         alert('Please entered valid num')
     }

 }