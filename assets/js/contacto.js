function validacion(){
    var Nombre = document.getElementById("nombre").value;
    if (Nombre==""){
        document.getElementById("alerta").innerHTML = "Es necesario que ingrese un nombre valido."
    }else{
        document.getElementById("alerta").innerHTML = " "

    }

    var Correo = document.getElementById('correo');
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if( validEmail.test(Correo.value) ){
        document.getElementById("alerta_correo").innerHTML= " "
	}else{
        document.getElementById("alerta_correo").innerHTML= "el correo ingresado es invalido"
	}
} 