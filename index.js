function checkPrime() {
    var numberInput = document.getElementById("numberInput").value;
    var resultMessage = document.getElementById("result");
  
    if (numberInput === "") {
      resultMessage.textContent = "Por favor, ingrese un número.";
      return;
    }
  
    var number = parseInt(numberInput);
  
    if (isNaN(number)) {
      resultMessage.textContent = "Por favor, ingrese un número válido.";
      return;
    }
  
    if (isPrime(number)) {
      resultMessage.textContent = number + " es un número primo.";
    } else {
      resultMessage.textContent = number + " no es un número primo.";
    }
  }
  
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (var i = 5; i * i <= num; i = i + 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }


//--------------------------------------------------------------------------------------------------------------------------------------


