
  function isMoskalyk (number){
    if(number.startsWith("+7") && number.length===12) {
      return true;
    }
      return false;
    
  }
  console.log(isMoskalyk("+7123456789077"));
  console.log(isMoskalyk("+71234567890"));
