function pow(num1, num2) {
    if (num2 === 1) {
      return num1;
    }
    return num1 * pow(num1, num2 - 1);
  }
  
  function hypotenuse(adjacent, opposite){
    const hypotenuse = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));
    return {
    adjacent, 
    opposite, 
    hypotenuse
    }
  }
  
  
  function circleArea(radius){
    const PI =3.14;
    return PI * radius * radius;
  }
  
  
  function pow2(num1, num2) {
    if (num2 === 1) {
      return num1;
    }
    return num1 * pow2(num1, num2 - 1);
  }

  export{
    pow,
    hypotenuse, 
    circleArea,
    pow2
  }
  
  