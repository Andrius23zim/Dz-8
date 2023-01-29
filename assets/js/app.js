const mathOperation = prompt('Please, input type of operation');

switch (mathOperation) {
    case 'add':     
        const addNumbers = askForNumbers();
        add(addNumbers);
        break;
    case 'sub':       
        const subNumbers = askForNumbers();
        sub(subNumbers);
        break;
    case 'mult':
        const multNumbers = askForNumbers();
        mult(multNumbers);
        break;
    case 'div':
        const divNumbers = askForNumbers();
        div(divNumbers);
        break;
    default:
        console.log('sorry, you did not enter any of the options');
}

function askForNumbers() {
  let inputTwoNumbers = prompt('Please, input two numbers with delimeter (,)');

  let arrayOfNumbers = inputTwoNumbers.split(',');

  console.log(arrayOfNumbers);
  
  return arrayOfNumbers;
}


function add(arrOfNumbers) {
  const result = +arrOfNumbers[0] + +arrOfNumbers[1];
  console.log(`${arrOfNumbers[0]} + ${arrOfNumbers[1]} = ${result}`);
}

function sub(arrOfNumbers) {
  const result = arrOfNumbers[0] - arrOfNumbers[1];
  console.log(`${arrOfNumbers[0]} - ${arrOfNumbers[1]} = ${result}`);
}

function mult(arrOfNumbers) {
  const result = arrOfNumbers[0] * arrOfNumbers[1];
  console.log(`${arrOfNumbers[0]} * ${arrOfNumbers[1]} = ${result}`);
}

function div(arrOfNumbers) {
  const result = arrOfNumbers[0] / arrOfNumbers[1];
  console.log(`${arrOfNumbers[0]} / ${arrOfNumbers[1]} = ${result}`);
}
