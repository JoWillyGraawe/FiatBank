function savingsCalculation(){
    let initialValue = document.getElementById("Initial").value;
    let interestValue = document.getElementById("Interest").value;
    let timeValue = document.getElementById("Time").value;
    let FV = initialValue*((1+(interestValue/100)) ** timeValue);
    document.getElementById("FV").value = FV.toFixed();
  }
