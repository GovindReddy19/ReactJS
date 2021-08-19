// function check_leapyear(){
//     //define variables
//     var year;

//     //get the entered year from text box 
//     year = document.getElementById("year").value;

//     //three conditions to find out the leap year
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
//     {
//         alert(year+" is a leap year");  
//     }
//     else
//     {
//         alert(year+" is not a leap year");  
//     }
// }

// function myDay(){
//     var day;
//     switch(new Date().getDay()){
//         case 0:
//             day="sunday";
//             break;
//         case 1: day="Monday";
//             break;
//         case 2: day ="tuesday";
//             break;    
//     }
//     document.getElementById("myDay").innerHTML = "Today is "+day;
// }

// function myDay(){
//     var day;
//     day = document.getElementById("day").value;
//     switch(day){
//         case 0: 
//             day="Sunday";
//             break;
//         case 1: 
//             day="Monday";
//             break;
//         case 2: 
//             day="tuesday";
//             break;
//         case 3: 
//             day="Wednersday";
//             break;
    
//     }
// }

// var res = fetch('https://api.github.com/users');
// console.log(res);

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:'POST',
//     body : JSON.stringify({ id: 1,
//                             title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//                              body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem evenet architecto"},
//                              {
//                                 id: 2,
//                                 title: "qui est esse",
//                                 body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//                               }),
//     headers: { 'Content-type' : "application/json; charset=utf-8" }  
// })
// .then(x=>{return x.json()})
// .then(y=>{console.log(y)})
// .catch(z=>{console.log("This is error");})
// API call :

// type of call - GET POST PUT delete
// Post : method , body, headers


// var ourRequest = new XMLHttpRequest();
// debugger
// ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
// ourRequest.onload = function(){
//     console.log(ourRequest.responseText);
// };
//     ourRequest.send();

// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
// ourRequest.onload = function(){
//     console.log(ourRequest.responseText);
// };
//     ourRequest.send();

// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
// ourRequest.onload = function(){
//     console.log(ourRequest.responseText);
// };
//     ourRequest.send();

// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
// ourRequest.onload= function(){
//     console.log(ourRequest.responseText);
// }
//     ourRequest.send();
// .then(x=>{return x.json()})
// .then(y=>{console.log(y)})
// .catch(z=>{console.log("This is error");})
// 


// fetch('https://learnwebcode.github.io/json-example/animals-1.json');
// .then(x=>{return x.json()})
// .then(y=>{console.log(y);})
// .catch(z=>{console.log("This is error");})
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(x=>{return x.json()})
// .then(y=>{console.log(y)})
// .catch(z=>{console.log("This is error");})


// var btn = document.getElementById("btn");

// btn.addEventListener("click",function(){
// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
// ourRequest.onload = function(){
//     var ourData = JSON.parse(ourRequest.responseText);
//     renderHTML(ourData);
// };
//     ourRequest.send();
//     });

//  function renderHTML(data){

//  }   

// const myFunc = ()=>{
//     console.log("I am a function");
// };
// myFunc();

// let arr=[23,45,7,89,91];
// let firstNumber = arr[0];
// let finalNumber = arr[arr.length-1];
// console.log(firstNumber,finalNumber);
// const [a,b,c,d,e]= arr;
// console.log(a,b,c,d,e);

// function sumofNumber(...params){
//     let total=0;
//     for(let i=0;i<params.length;i++){
//         total+=params[i];
//     }
//         console.log(total);
// }
//   sumofNumber(57,78,98,100);  


// app.post(("/login",(req,res)=>{
//     const email = req.body.username;
//     const password = req.body.password;
//     console.log(req.body);
// }

async function = sendTheDataToServer (){
    let result = await fetch("")
}