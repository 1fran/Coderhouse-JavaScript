//El ciclo for se repite, mientras la condicion sea valida se repite hasta que cumple una condicion

let ingresarNombre = prompt  ("ingresar un nombre para recibir saludos");

while (ingresarNombre != "Basta" ) {
    
    alert("¡hola " + ingresarNombre + "!");
    ingresarNombre = prompt  ("ingresar otro nombre para recibir más saludos");
    
}
alert ("demasiados saludos")