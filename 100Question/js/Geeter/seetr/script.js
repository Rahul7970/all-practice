function curriedSum(initialValue = 0) {
    let sum = initialValue;
    
    function add(value) {
      sum += value;
      return add; // Return the function itself for chaining
    }
  
    add.toString = function() {
      return sum;
    }
  
    return add;
  }
  
  const result = curriedSum(1)(2)(3);
  console.log(result); // Outputs: 6
  