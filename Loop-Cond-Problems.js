//Problem A, Part 1: LunchArrays
//Loop through the array to find the longest word by how many letters each string contains.
//Which other variables will you be needing?
let lunchArray = ['Burger', 'Salad', 'Lasagna', 'Sushi', 'Meatloaf'];
let long = 0;  
let longest;

for (let i = 0; i < lunchArray.length; i++) {
  if (lunchArray[i].length > long) {
    let long = lunchArray[i].length;
    longest = lunchArray[i]
  }
}

console.log(longest);


//Problem A, Part 2: Let lunchArray = [ “Burger  Salad  Lasagna Sushi  Meatloaf” ]
//Since all the words are in one string together, how would you solve this? 
function longer(champ, contender) {
  return (contender.length > champ.length) ? contender : champ;
}

function longestWord(str) {
  var words = str.split(' ');
  return words.reduce(longer);
}

console.log(longestWord("Burger  Salad  Lasagna Sushi  Meatloaf"));



//Problem B: Write a function that returns elements on odd positions in a list 
function oddList() {
  let array = [1,2,3,4,5];
console.log(array.filter(function(el, ind){
  return ind % 2 === 0;
}));
}
oddList();





//Problem C:Factorials
function factorial() {
  let answer = 1;
  if (n == 0 || n == 1) {
    return answer;
  }
  else {
    for (let i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
}
let n = 5; //n is any factorized number 
answer = factorial(n)
console.log(`The factorial of ${n} is ${answer}`);





//Problem D: Practice these conditionals (MPG = miles per gallon)
let mpg = 120; //If you change the mgp value, you will get different conditions

if (mpg <= 10) {
  console.log('gas guzzler');
}
else if (mpg > 11 && mpg <= 16) {
  console.log('Planet still frowns upon this, and so does your wallet');
}
else if (mpg > 17 && mpg <= 20) {
  console.log('It’s palpable');
}
else if (mpg > 21 && mpg <= 29) {
  console.log('Atmosphere smiles at your decision');
}
else if (mpg > 30 && mpg <= 35) {
  console.log('Not many gas stops will be taken');
}
else if (mpg > 36 && mpg <= 119) {
  console.log('The fish of the sea smile at your conservation');
}
else {
  console.log('If you are using the Tom Ogle fuel system, props');
}



