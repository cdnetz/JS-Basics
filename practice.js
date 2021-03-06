//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var isTyler = function(name){
  if (name === 'Tyler') {
    return true;
  }
  else {
    return false;
  }
};

isTyler(name);

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function(){
  var fName = prompt('What is your name?');
  return fName;
};



getName();
//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
var welcome = function() {
  var welName = getName();
  alert("welcome " + welName);
};

welcome(result);

//Next problem



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

  //Code Here
var adder = function(num1, num2, num3){
    var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    
    result += arguments[i];
      
    
    
  }
    
   return result;

  


};

var storage = adder(4, 5, 1);

alert("The Total Number was " + storage);

//Next Problem



//What is the difference between arguments and parameters?

  //Answer Here

/*
arguments are the thing you pass into the function 

parameters define the function 

*/

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
/*
false
0
""
null
undefined
NaN

you can write a if statement that can return true or false when set to what the user inputs


*/


//Next Problem



//Create a function called myName that returns your name

  //Code Here

  function myName() {
    return "Chris";
  };

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;

  //Code Here

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

var outerFn = function(){
  return function () {
    return "Chris";
  };
};

//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn = outerFn;

alert(innerFn());
  //Code Here

//Now invoke innerFn.

