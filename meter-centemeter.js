function centToMet(length) {
  let centimeter = length / 100;
  return centimeter;
}
let inputLengthCentemeter = 10;
let getMeter = centToMet(inputLengthCentemeter);
console.log("Meter ", getMeter);
