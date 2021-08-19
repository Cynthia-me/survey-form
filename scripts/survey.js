function validateForm(){
    var x = document.forms["myForm"]["number"].value
    if(x<18){
        alert("You have to be above 18 years of age");
    }
     else if(x === " "){
        alert("Please enter a valid age");
    }
    else{
        alert("Thank you for your time");
    }

}