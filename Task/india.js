var num = 79;

if(num %3==0){
        console.log('the number is even');
}
else{
        console.log('the number is odd');
}

// Write a JavaScript program to find the given value from the user is a string or a number 
// i) take a variable as userInput 
// ii) check whether your assigned value is string or number

var number=[20];

for (var i = 2; i <= 100; i += 1) {
  if (number== 5) {
    console.log(number);
    
  }
  number.push(i);
}
console.log(number);
// 1. Write a JavaScript Program to check the even numbers from 1-100
var line = [];
//you are uninterested in odd numbers, so increment the counter by 2
for(var i = 0; i <= 100; i=+ 1) {
    line.push(i);
    if((i + 2) % 5 == 0) { //every 5 lines print result
        console.log(line);
        line = []
    }
}

