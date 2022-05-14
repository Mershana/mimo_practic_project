let cityRent1 = 1200;
let cityRent2 = 920;

let isMoreExpensive = cityRent1 > cityRent2;
let comparisonLabel = "Paris is more expensive: " +
 isMoreExpensive;
console.log(comparisonLabel);

let difference = cityRent1 - cityRent2;
let differenceLabel = "Rent difference: " + difference + " Euros";
console.log(differenceLabel);


document.getElementById("city1").innerHTML = "Paris Rent: " + cityRent1;
document.getElementById("city2").innerHTML = "Barcelona Rent: " + cityRent2;
document.getElementById("comparison").innerHTML = comparisonLabel;
document.getElementById("difference").innerHTML = differenceLabel;