
// function add(a, b){
//     c = a+b;
//     document.write("callback function");
// }

// function add1(callback){
//     document.write("callback function");
// }

// add(1,2);

// var a;

// function facto(x)
// {
//     var fa = 1;
//     for(var i=1;i<=x;i++){
//         fa = fa*i;
//     }
//     console.log(fa)
// }
//     a = facto(6);
//     console.log("value in a is::",a);
// ----------------------------------------
// function morning(name){
//     return `Good morning, ${name}`;
// }

// function evening(name){
//     return `Good evening, ${name}`;
// }

// function happyBirthday(name){
//     return `Happy Birthday, ${name}`;
// }

// function greet(name, func){
//     return func(name);
// }

// console.log(greet("Faheem",morning));
// console.log(greet("Jack",evening));
// console.log(greet("Nat",happyBirthday));
// ------------------------
// const arr = [1,2,3,4,5];
// let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//     arr2[i] = arr[i]+1;
// }
// console.log(arr2);

// const arr2 = [1,2,3,4,5,6].map((i)) => i+1);

// console.log(arr2);
// ----------------------------

// function add(x,y){
//     const result = x+y;
//     return result;
// }

// var button = document.getElementById ("button");
// // console.log(button);

// button onClick = function(event){
//     alert("Button was clicked");
//     console.log(event.target)
// };
//     button.addEventListener("click",function)

// var img = document.querySelector("img");
// document.addEventListener("scroll",function()){
//     console.log(window.ScrollY)
// //     if(window.scrollY<=90){}
// }

var button = document.getElementById("button");
console.log(button);

button.addEventListener('click',function(){
alert("Button was clicked");    
});