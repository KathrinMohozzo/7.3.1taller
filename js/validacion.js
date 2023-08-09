function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");

}

function validacion(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let check = document.getElementById("terminos").checked;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;

    if (nombre===""||apellido===""||email===""||password1===""||password2===""||!check) {
        showAlertError();
    }  
    else if (password1 !== password2){
            showAlertError();
    }
    else if (password1.length < 6) {
            showAlertError();
        } 
         else {
            showAlertSuccess();
        }
    }
    
regBtn.addEventListener("click", ()=>{
    validacion();
});


