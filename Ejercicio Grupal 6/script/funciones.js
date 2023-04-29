
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    //DECLARACION DE VARIABLES PARA CAPTURAR EL VALOR DE LAS CASILLAS DEL FORMULARIO
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;

    //INICIACIÓN TRUE VALIDACION DE FORMULARIO PARA QUE ENTRE AL ÚLTIMO IF > LINEA 33 <
    var validaCorreo = true;
    var validaNombre = true;
    var validaMensaje = true;

    //VERIFICACIÓN DE CONDICIONES, DEBE EXISTIR UN CARACTER EN CASILLAS DEL FORMULARIO COMO MINIMO
    if (nombre.length == 0) {
        document.getElementById('alertaNombre').classList.remove('d-none');   //ELIMINA class 'd-none' PARA QUE APARAZCA LABEL
        validaNombre = false;
    } else {
        document.getElementById('alertaNombre').classList.add('d-none');    //AGREGAS class 'd-none' PARA QUE DESAPAREZCA LABEL
    }
    if (correo.length == 0) {
        document.getElementById('alertaCorreo').classList.remove('d-none');
        validaCorreo = false;
    } else {
        document.getElementById('alertaCorreo').classList.add('d-none');
    }
    if (mensaje.length == 0) {
        document.getElementById('alertaMensaje').classList.remove('d-none');
        validaMensaje = false;
    } else {
        document.getElementById('alertaMensaje').classList.add('d-none');
    }
    if (validaNombre && validaCorreo && validaMensaje) {                       // SE VALIDAN QUE TODAS LAS CASILLAS TIENEN CONTENIDO

        //LIMPIEZA DE FORMULARIO CASILLA x CASILLA (OTRA FORMA)
        /*         document.getElementById("nombre").value = ""
                document.getElementById("correo").value = ""
                document.getElementById("mensaje").value = "" */

        //LIMPIEZA DE FORMULARIO 
        document.getElementById("formulario").reset();

        
        document.getElementById('alertaNombre').classList.add('d-none');   //QUITA MENSAJES DEL LABEL COLOR ROJO
        document.getElementById('alertaCorreo').classList.add('d-none');
        document.getElementById('alertaMensaje').classList.add('d-none');

        document.getElementById('mensajeEnviado').classList.remove('d-none');          //APARECE LABEL VERDE 'MENSAJE HA SIDO ENVIADO'
        setTimeout(function () {
            document.getElementById('mensajeEnviado').classList.add('d-none');          //REMUEVE LABEL VERDE DESPUES DE 2 SEGUNDOS
        }, 2000);
    }
}
);


