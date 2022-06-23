
function validateForm(){
    let x= document.forms["form-id"]["name"].value;
    let y= document.forms["form-id"]["comment"].value;
    let z= document.forms["form-id"]["gender"].value;
    if(x=="" || y=="" || z==""){
        alert("All fields are compulsory");
        return false;
    }
    else{
        return true;
    }

}
