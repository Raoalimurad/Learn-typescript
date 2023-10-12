function outer() {
    var outerVar = 'I am from outer scope';
  
    function inner() {
      var innerVar = 'I am from inner scope';
      console.log(outerVar); // inner() can access outerVar
    }
  
    inner();
    // console.log(innerVar); // This will result in an error since innerVar is not defined in the outer scope.
  }
  
  outer();
  