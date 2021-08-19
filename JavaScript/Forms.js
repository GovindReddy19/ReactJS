function myFunction(){
    const inpojt = document.getElementById("id1");
    if(!inpojt.check validity()){
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "Input OK";
    }
    
}