//El ciclo for se repite, mientras la condicion sea valida se repite hasta que cumple una condicion

let ingresarNombre = prompt  ("ingresar un nombre para recibir saludos");

while (ingresarNombre != "Basta" ) {
    // for (i = 0 ; true ; i++)
    alert("¡hola " + ingresarNombre + "!");
    ingresarNombre = prompt  ("otro nombre para más saludos");
    
}
alert ("demasiados saludos por hoy")