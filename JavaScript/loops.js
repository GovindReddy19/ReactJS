// var i = 1;
// for (let i =1;i<=5;i++){
//     console.log('i++');
    
// }

// function howMany(selectobject){
// let number=0;
// for (let i=0;i<selectobject.options.length;i++){
//     if(slectobject.options[i].selected){
//         numberSelected++;
//     }
// }
// return numberSelected;
// }

// let i=20;
// do{
//     i+=1;
//     console.log(i++);
// }while(i<100 );

// let n=2;
// let x=3;
// while(n<3){
//     n++;
//     x+=n;
// }

// while(theMark ==true){
//     dosomething();
// }

// for (let i=0;i<length;i++){
//     if (a[i] === theValue){
//         break;
//     }
// }

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  n += i;
  console.log(n);
}
//1,3,7,12

let i = 0;
let n = 0;
while (i < 5) {
  i++;
  if (i === 3) {
     // continue;
  }
  n += i;
  console.log(n);
}
// 1,3,6,10,15