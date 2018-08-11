function validateUser () {
    let username = document.getElementById("username").value; 
    let password = document.getElementById("password").value;
    if(username === "preeti" && password === "spero-b"){
        $(location).attr('href', '/git-info.html');
    } else{
        alert("Username or password are invalid, Recheck the credentials please.")
    }
}