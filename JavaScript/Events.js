// // alert("Event JS");

// document.addEventListener('keydown',function(e){
//     // console.log('key preseed');
//     console.log(e.key);
// })

// document.addEventListener("keypress",()=>console.log("keypress"));


var userid = document.querySelector(".userid");
userid.onfocus = handleFocus;
userid.onblur = handleBlur;

function handleFocus(){
     userid.value = "On focus state";
}

function handleBlur(){
    userid.value = 'On Blur state';
}

