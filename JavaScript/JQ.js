$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(2000);
    });
    $("#show").click(function(){
        $("p").show();
    });
});
  
   
$(document).ready(function(){
    $("button").click(function(){
        $("img").toggle(5000);
    });
 });    
   
$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({
               left:'300px',
               opacity:'0.5',
               height:'150px',
               width:'150px' 
        });
    });
});