let nombre = prompt("Ingrese su nombre");
alert("Bienvenido, " + nombre);
console.log("El usuario ingreso con el nombre: " + nombre);
let edad = parseInt(prompt("Ingrese su edad"));

alert("Su edad es: " + edad);

if (edad >= 18) {
    alert("Usted es mayor de edad. Podemos proceder!");
    console.log("El usuario es mayor. Se puede proceder.");
    preguntas();
}else{
    alert("Al ser menor, no podemos proceder.");
    console.log("El usuario es menor y esta siendo expulsado del clan dea");
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
} 

function preguntas(){

    let acepta = prompt("Acepta los terminos?");
 /* ---------------------------NOTA MENTAL--------------------------------------*/
 /* || ES   "O" CONDICIONAL / && ES "Y" CONDICIONAL */
    // if (acepta == 'si' || 'Si')

    if (acepta == 'si' || acepta == 'Si') {

        alert("Listo! Aceptaste los T&C! Continue para ser redirigido!");
        console.log("Listo! " + nombre + " Esta siendo Rick Roleado!" );
        // window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        captcha();

        return acepta;
    } else {
        alert("Inaceptado");
       console.log("Se cancelo el tramite y se evito el rick roleo");
       while (acepta !== 'Si'){
           alert("Al parecer no aceptaste los terminos y condiciones.");
        acepta = prompt("Debe aceptar los terminos para poder proceder. Responda Si para poder continuar o bien cierre el sitio. ESCRIBA Si");
    }
    captcha();
    }

}

// esta funcion tiene como objetvo solicitarle al usuario ciertas acciones para validar que no es un robot. se hace uso del ciclo FOR para crear la cuenta regresiva y contar los clicks del usuario.
function captcha(){
    for (var i = 3; i >= 0; i--){
        if (i == 0){
            continue;
        }
        alert("Haga click en continuar " + i + "  Veces para validar que usted No es un robot.");
        console.log("Click nro " + i + " Validado con exito!")
    }


}


