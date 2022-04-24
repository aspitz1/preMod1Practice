// variables describing how many kg of coffee beans each person has and how far they are from their cup of coffee in meters
let markBeans = 95;
let markCoffee = 1.88;
let johnBeans = 85;
let johnCoffee = 1.76;
// coffee score is how far away their coffee is to the second power, divided by the kg of coffee beans
markCoffeeScore = markBeans / markCoffee ** 2;
johnCoffeeScore = johnBeans / johnCoffee ** 2;
markHigherScore = markCoffeeScore > johnCoffeeScore;
// who had the higher socre?
// expected output 26.9
console.log(Math.round(markCoffeeScore * 10) / 10);
// expected output 27.4
console.log(Math.round(johnCoffeeScore * 10) / 10);
// expected output false
console.log(markHigherScore);
