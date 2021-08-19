// document.getElementById("demo").innerHTML="Hello World!";
// const element = document.getElementById("intro");

// document.getElementById("demo").innerHTML="The text from the intro paragraph is:"+element.innerHTML;

// const x = document.getElementById("main");
// const y = x.getElementsTagName("intro");

// document.getElementById("demo").innerHTML='The first paragraph:'+y[0].innerHTML;

// document.getElementById("p1").innerHTML = "New text!";

// const element = document.getElementById("id01");
// element.innerHTML = "New Heading";

// document.getElementById("demo").innerHTML="date is: "+ Date();

// document.write(Date());
// document.getElementById("demo").innerHTML = "Date is :" +Date();
// window.document.getElementById("header");

// function validateForm(){
//     let x = document.forms["myForm"]["fname"].value;
//     if(x==""){
//         alert("Name must be filled out");
//         return false;
//     }
// }

// function validateForm(){
//     let x = document.forms["myForm"]["fname"].value;
//     if(x==""){
//         alert("Name must be filled out");
//         return false;
//     }
// }

// function myFunction(){
//     x=document.getElementById("number").value;
//     let text;
//     if(isNaN(x) || x<1 || x>10){
//         text = "Input not Valid";
//     }else{
//         text="Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
// }

// function myFunction(){
//     let x = document.getElementById("number").value;
//     let text;
//     if(isNaN(x) || x<1 || x>10){
//         text="Input not Valid";        
//     }else{
//         text="Input OK";
//     }
//     document.getElementById("demo").innerHTML = text;
// }

// function myFunction(){
//     let x = document.getElementById("number").value;
//     let text;
//     if(isNaN(x) || x<1 || x>100){
//         text="Input not Valid";
//         }else{
//           text="Input OK";  
//         }
//       document.getElementById("demo").innerHTML=text;  
// }

// document.getElementById("myBtn").addEventListener("click",displayDate);

// function displayDate(){
//   document.getElementById("demo").innerHTML = Date();
// }

// function myFunction (){
//   const myCollecction = document.getElementsByTagName("p");
//   for(let i=0;i<myCollecction.length;i++){
//     myCollecction[i].style.color = "Green";
//   }
// }

function myFunction(){
  let = text;
  let person = prompt("Please enter your name:","Herry Potter");
  if(person ==null || person == ""){
    text ="User cancelled the prompt.";
  }else{
    text ="Hello  " + person + "! How are you Today?";
  }
  document.getElementById("demo").innerHTML = text;
}