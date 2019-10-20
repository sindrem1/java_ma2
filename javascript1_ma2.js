//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Solskjaer() {
    this.club = "Molde"
}

Solskjaer.prototype.lendout = function() {
    console.log("Ole Gunner Solskjaer had a flying start to his Manchester United career after "+ this.club + " was kind enough to lend him out.");
};
    
var footballclub = new Solskjaer();
footballclub.lendout();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
console.log(myNumbers); 
console.log(myNumbers.slice(4, 5)); 

//3. Delete the last number in the array that you created above.

for( var i = 0; i < myNumbers.length; i++){  
   if ( myNumbers[i] === 10) { 
     myNumbers.splice(i, 1);  
   }
}
console.log(myNumbers); 

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
//Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

let myBerry = 'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';

myBerry = myBerry.replace(/strawberries/gi, 'bananas');
myBerry = myBerry.replace(/strawberry/gi, 'banana');

console.log(myBerry);

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var myTeams = ["Manchester United","Real Madrid","Juventus", "Bayern Munchen"];
console.log(myTeams)
function editTeam() {
  myTeams = [];
      myTeams.push("Ferrari Enzo", "Ferrari LaFerrari", "Lamborghini Urus", "Lamborghini Huracan");
      console.log(myTeams);
  }

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var employees = [
    {name: 'Lisa', position: 'secretary'},
    {name: 'Frank', position: 'IT administrator'},
    {name: 'Ray', position: 'head of department'},
]

var downtoone = employees.filter(function(position){
    return (position.name === "Frank");
})

console.log(downtoone);

//7. Create a simple function that logs the date.

var d = new Date();

console.log(d);