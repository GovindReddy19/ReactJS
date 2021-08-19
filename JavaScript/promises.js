// console.log('Govind');
// setTimeout(()=>{
// console.log('Reddy');
// },1000);
// setTimeout(()=>{
// console.log('Ammu');
// },2000);
// setTimeout(() => {
// console.log('Madhu Chandana');    
// }, 3000);

// console.log('Nani');
// console.log('Promises');

// setTimeout(() => {
//    console.log('Krishna'); 
// }, 5000);
// setTimeout(() => {
//    calculate(); 
// }, 2000);
// function calculate(){
//     let sum = 0;
//     for(let i=0;i<10000000000;i++){
//         sum=+i;
//     }
//     console.log('Math result',sum);
// }

// setTimeout(() => {
//     cal();
// }, 7000);
// function cal(){
//     let sum=0;
//     for(i=0;i<100000000000000000;i++){
//         sum=+i;
//     }
//     console.log('Match Result',sum);
// }

const p1 = Promise.resolve('like if you understood callbacks');
const p2 = Promise.reject('Rejected');
const p3 = 100;
const p4 = new Promise((resolve,reject)=>){
    setTimeout(resolve,1000,'Subscribe for more updates');
    });  
