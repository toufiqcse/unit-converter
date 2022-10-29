//odd
function oddNumber(inputOddNUmber) {
  if (inputOddNUmber % 2 != 0) {
    return true;
  } else {
    return false;
  }
}
const myOddNumber = oddNumber(24);
console.log("Number is Odd:", myOddNumber);

//even
function evenNumber(inputEvenNUmber) {
  if (inputEvenNUmber % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
const myEvenNumber = evenNumber(24);
console.log("Number is Even:", myEvenNumber);
