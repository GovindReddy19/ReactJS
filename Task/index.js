        // var sellingPrice = 3490;
        // var listingPrice = 1299;
        // var discontPrice = ((sellingPrice-listingPrice)/sellingPrice)*100;
        // console.log(Math.round(discontPrice));
        
// var a =12;
// var b=20;
// var result =a>b;
// console.log(result);
// if(a>b) {
//         console.log(a)
// }
// else if (b>a){
//         console.log('i am printing'+a);
//         console.log(b);
// }
// else{
// console.log('No data');

// }        
// -------------------
// var age =70;

// if(age<=3){
//         console.log('infact'); 
// }
// else if(age>3 && age<=12){
//         console.log('child');
// }
// else if(age>12 && age<=19){
//         console.log('teen')
// }
// else if(age>19 && age<=60){
//         console.log('adult');
// }
// else{
//         console.log("old age");
// }
// ---------------
// var marks = 490;
// if (marks<=250){
//         console.log('fail')
// }
// else if(marks>250 && marks<=300) {
//         console.log('avg')
// } 
// else if(marks>300 && marks<=450){
//         console.log('Good')
// }
// else if(marks>450 && marks<=500){
//         console.log('vary Good')
// }
// else {
//         console.log('TOP 10')
// }

// var whichPerson = "User";
       
//         switch (whichPerson) {
//                 case 'Admin':
//                         console.log("admin")
//                         break;
//                 case 'Sub-Admin':
//                         console.log('Sub-admin');
//                         break;
//                 case 'Senior Executive':
//                         console.log('Test');
//                         break;  
//                 case 'User':
//                         console.log('User');
//                         break;      
//                 default:
//                        console.log('No Data') 
//                 break;
//         }

// var CollegeData ='B'
// switch(CollegeData )  {
//       case'A':
//           console.log('student1')
//       break;
//       case'B':
//           console.log('student2')
//         break;
//      case'C':
//       console.log('student3')
//      break; 
   
// } 
// // -----arrays--------
 var students =["govind","ravi","raju","goutham",'shiva','balu'];
 console.log(students['0'],students['1']);
 students[0]="Reddy";
 console.log(students);
 console.log(students [students.length-1])
 students[0]='GOVIND';

// -----------Loops for,while,do-while-------------

// var indexNumber++;
// var indexNumber = 1;
// indexNumber++;
// console.log(indexNumber);
// var decrementvalue=100;
// console.log(decrementvalue);
// for(var i=0; i<students.length;i++){
// //    debugger;     
//         console.log(students[i]);
// }
// var randomNumber=20;
// // randomNumber+= 10;
// while(randomNumber<=20){
//         console.log(randomNumber);
//         randomNumber++;
// }

// let lastNumber=33;
// do{
//     console.log(lastNumber);
// }while(false);    

// var number = 48;

// if(number%2==0){
//       console.log("the number is even");
// }
// else{
//       console.log("the number is odd");          

// }
// Write a JavaScript program to find the given number is even or odd
// var num = 79;

// if(num %3==0){
//         console.log('the number is even');
// }
// else{
//         console.log('the number is odd');
// }

// // Write a JavaScript program to find the given value from the user is a string or a number 
// // i) take a variable as userInput 
// // ii) check whether your assigned value is string or number

// var number=[20];

// for (var i = 2; i <= 100; i += 1) {
//   if (number== 5) {
//     console.log(number);
    
//   }
//   number.push(i);
// }
// console.log(number);
// // 1. Write a JavaScript Program to check the even numbers from 1-100
// var line = [];
// //you are uninterested in odd numbers, so increment the counter by 2
// for(var i = 0; i <= 100; i=+ 1) {
//     line.push(i);
//     if((i + 2) % 5 === 0) { //every 5 lines print result
//         console.log(line);
//         line = []
//     }
// }

// 2)Write a JavaScript Program to print the pattern

//  var i, j;
// //   //outer loop
//  for(i=1; i <= 5; i++)
// //    {
// //    //inner loop
//    for(j=1; j<=i; j++)
//   {
//       console.log('*');
//      }
//       console.log('<br/>');
//    }

//   var fruits = [‘apple’,’mango’,’bannana’,’pineapple’];
// {
//     console.log(fruits.length[0])
// }

var fruits = new Array("Apple", "Orange", "Mango", "Banana", "Guava");

var len = fruits.length;	//no. of elements of the array

//print elements of the array
for (var i = 0; i < len; i++) {
	console.log(fruits[i]);
}