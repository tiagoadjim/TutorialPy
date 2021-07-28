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
 /* GRACIAS URI POR RESPONDER EN CLASE :)*/
    // if (acepta == 'si' || 'Si')

    if ((acepta == 'si') || (acepta == 'Si') || (acepta = 'SI')){
        alert("Listo! Continue para ser redirigido!");
        console.log("Listo! " + nombre + " Esta siendo Rick Roleado!" );
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

        return acepta;
    } else {
        alert("Queda cancelado el tramite por la inaceptacion de los terminos y condiciones.");
       console.log("Se cancelo el tramite y se evito el rick roleo");
    }

}