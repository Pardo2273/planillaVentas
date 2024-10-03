function crearTiendas(contenerdorId, cantidadId){
    //necesito el contenedor padre que esta en el html que sera rellenado mas adelante por sus hijos que son (div y estos divs tienen etiqueta label e input)
    let elementoDiv = document.getElementById(contenerdorId);
    let elementoCantidad= document.getElementById(cantidadId); //la cantidad que ingresa el usuario

    let cantidad = Number(elementoCantidad.value); // obtenenmos el valor numerico de la cantidad que ingresa el usuario
    
    for(let conteoTiendas = 1; conteoTiendas <= cantidad; conteoTiendas++){
        //primero armamos el texto del label que la funcion crearEtiquetasTienda necesita
        let textoEtiqueta = "Tienda: " + conteoTiendas + ": ";

        //llamamos la funcion crearEtiquetasTienda, la cual me traera los elementos de la tienda
        let elementoTienda = crearEtiquetasTienda(textoEtiqueta);
         
        //agregamos las tiendas al contenedor que tenemos en el html 
        elementoDiv.appendChild(elementoTienda);
    }
}

function crearEtiquetasTienda(textoLabel){
    //creo primero los divs que contendran las tiendas
    let elementoContenedorDiv= document.createElement("div");
    elementoContenedorDiv.setAttribute("class", "contenedorDivsTiendas");

    //creo los label que tendran las tiendas
    let elementoLabel = document.createElement('label');
    elementoLabel.setAttribute("class", "labelsTiendas");
    elementoLabel.setAttribute("for", textoLabel);
    elementoLabel.innerText = textoLabel;// le agrego el texto que tendra la etiqueta

    let elementoInput = document.createElement("input");
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("class", "inputsTiendas");
    elementoInput.setAttribute("id", textoLabel); //se enlaza con el label
    elementoInput.setAttribute("min", 0);
    elementoInput.setAttribute("value", 0);

    //agregamos las etiquetas del label e input al div
    elementoContenedorDiv.appendChild(elementoLabel);
    elementoContenedorDiv.appendChild(elementoInput);

    //retornamos el div con todas sus etiquetas que tiene adentro
    return elementoContenedorDiv;
}