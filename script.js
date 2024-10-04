function crearTiendas(contenerdorId, cantidadId){
    //necesito el contenedor padre que esta en el html que sera rellenado mas adelante por sus hijos que son (div y estos divs tienen etiqueta label e input)
    let elementoDiv = document.getElementById(contenerdorId);
    let elementoCantidad= document.getElementById(cantidadId); //la cantidad que ingresa el usuario

    let cantidad = Number(elementoCantidad.value); // obtenenmos el valor numerico de la cantidad que ingresa el usuario
    
    for(let conteoTiendas = 1; conteoTiendas <= cantidad; conteoTiendas++){
        //primero armamos el texto del label que la funcion crearEtiquetasTienda necesita
        let textoEtiqueta = "Tienda " + conteoTiendas + ": ";

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

function calcular(){
    //declaramos el arreglo
    let arreglo = [];

    //declaramos una variable para establecer las posiciones del array
    let posicionVenta= 0;

    //necesitamos el div que contiene las tiendas
    let elementoTiendasDiv = document.getElementById('contenedorTiendas');

    //accedemos a los hijos para poder sumar los valores de los hijos input para agregarlos al array
    for(let item of elementoTiendasDiv.children){
        let elementoInput = item.children[1]; //obtenemos el hijo [1] que seria el input
        arreglo[posicionVenta] = Number(elementoInput.value); //de una vez paso el valor del elemento input convertido a numerico
        posicionVenta++;//aumento la variable para conforme hayan inputs los valores de estos se almacenen en las pocisiones del arreglo
    }

    //llamamos a la funcion sumar para que haga el calculo y pasamos el arreglo para poder realizar el calculo
    let sumaDeVentas = sumarVentas(arreglo);

    //armamos el texto de salida que mostraremos al usuario
    let textoSalida = "La suma total de ventas es de: " + sumaDeVentas;
    // damos el contenido del texto que tendra la etiqueta que esta en el html
    document.getElementById('totalVentas').textContent = textoSalida;

    //falta agregar donde se recalca el input de la mayor/menor venta
}

function sumarVentas(arreglo){
    //declaro la varible en la que guardare la suma de las ventas
    let suma = 0;
    //de cada venta del arreglo que se sume
    for(let item of arreglo){
        suma += item;
    }
    //finalmente devuelvo el resultado
    return suma;
}

//necesito conocer cual es la mayor venta
function mayorVenta(arreglo){
    let mayor = arreglo[0];//declaramos variable donde guardamos la mayor venta con el primer elemento del array
    for(venta of arreglo){
        if(venta > mayor){
            mayor = venta;
        }//siempre y cuando la venta sea mayor a la variable mayor se va a almacenar en la variable
    }
    
    //como tengo que recalcar en verde la mayor venta, voy a devolver la pocision
    return arreglo.indexOf(mayor);
}

function menorVenta(arreglo){
    let menor= arreglo[0];// declaramos la variable donde estara la menor venta y guardamos su primer valor

    for(let venta of arreglo){
        if(venta < menor){
            menor = venta;
        }//siempre y cuando la venta sea menor a menor, se guardara en la variable menor
    }

    return arreglo.indexOf(menor);
}