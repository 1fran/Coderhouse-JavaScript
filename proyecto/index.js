//Calcular pagos en cuotas sobre un monto determinado

//Una función que chequea que lo ingresado sea un número válido, mayor a 0, no string, no espacios ni enter
function checkNumbers (datoNumerico) {
    if (datoNumerico <= 0 || isNaN(datoNumerico) || datoNumerico == null || datoNumerico == "") {
        return false
    }
    else {
        return true
    }
}

//Función que solicita nombre y apellido, donde los nombres deben tener 3 letras o más

function solicitarNombre() {
    let nombre = prompt("Para comenzar ingrese su nombre");
    while (nombre.length <= 2) {
        alert("nombre no válido")
        nombre = prompt("ingrese un nombre válido");
    }
    let apellido = prompt("Ingrese su apellido");
    while (apellido.length <= 2) {
        alert("apellido no válido")
        apellido = prompt("Ingrese un apellido válido");
    }
    alert("El nombre ingresado es: " + nombre + " " + apellido);
}
// función de calcular las cuotas, se piden monto y cantidad de cuotas a dividir

function calcularCuotas() {
    let valorProducto = 0
    while (!checkNumbers (valorProducto)) {
        valorProducto = parseFloat(prompt("Ingrese el monto a dividir en cuotas"));
        if (!checkNumbers (valorProducto)) {
            alert('El monto debe ser mayor a "0"');
        }
    }
    alert("Ingresaste: " + valorProducto);


    let cantidadCuotas = 0
    while (!checkNumbers(cantidadCuotas)) {
        cantidadCuotas = prompt("Ingrese la cantidad de cuotas");
        if (!checkNumbers(cantidadCuotas)) {
        alert(`"${cantidadCuotas}" no válida, ingrese un número`)
        }
    }

    let valorCuota = valorProducto / cantidadCuotas
    alert("El monto por cuota es: " + valorCuota.toFixed(2));
}

solicitarNombre();
calcularCuotas();