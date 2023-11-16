//Barra de navegacion para que el usuario pueda filtrar las cards con la info de las clases

document.addEventListener("keyup", (e) => { 
    if (e.target.matches(".filtro-carta")) { //declaro condicion para cada vez que se presione la tecla
        document.querySelectorAll(".card_classes").forEach((tarjeta) =>{ //creo forEach para que recorra todas las cards
            tarjeta.textContent.toLocaleLowerCase().includes(e.target.value) //paso todo el contenido de cards a minuscula
            ?tarjeta.classList.remove("filter") //si da true, remueve la clase filtro
            :tarjeta.classList.add ("filter"); //si da false añade el filtro para ocultar 
        })
    } 
})

//añado animaciones para que al hacer scroll, vayan apareciendo los elementos del html
let animado = document.querySelectorAll(".animado");

function animacionScroll () {
    let scrollTop= document.documentElement.scrollTop;
    for (let i=0; i<animado.length; i++) {
        let altura = animado [i].offsetTop;
        if (altura -550 < scrollTop) {
            animado [i].style.opacity = 1;
        }
    }
}

window.addEventListener ("scroll", animacionScroll);


//funcion para determinar el grupo al que corresponde, segun la edad

function nivelPorEdad () {

    if (e.target.matches("edad")) { //declaro condicion para cada vez que se presione la tecla
        document.querySelectorAll(".card_classes").forEach((tarjeta) =>{ //creo forEach para que recorra todas las cards
            tarjeta.textContent.toLocaleLowerCase().includes(e.target.value) //paso todo el contenido de cards a minuscula
            ?tarjeta.classList.remove("filter") //si da true, remueve la clase filtro
            :tarjeta.classList.add ("filter"); //si da false añade el filtro para ocultar 
        })
    } 
}

//funcion para que aparezca un texto indicando a que grupo corresponde según la edad. 
function nivelPorEdad(){
        
    let edad = document.getElementById("edad").value;

    if((edad >= 8)&&(edad<=12)) {
        grupo.textContent = "Pertenece al grupo de INTANTILES";

    }else if((edad >= 18)&&(edad<=70)){
        grupo.textContent = "Pertenece al grupo ADULTOS";

    }else if((edad <=13)||(edad >=17)){
        grupo.textContent = "Puede tomar las clases de STRETCHING";

    }else{
        grupo.textContent = "No contamos con clases disponibles";

    }

}

//boton ocultar para mostrar texto en las cards
let hideBtn = document.getElementById ("hideBtn");

let hideTxt = document.getElementById ("hideTxt");

hideBtn.addEventListener("click", toggleText); //le añado el evento al boton para mostrar

function toggleText (){
    hideTxt.classList.toggle("mostrar"); //funcion para que salte a la clase "mostrar" cuando haga click

    if (hideTxt.classList.contains("mostrar")){
        hideBtn.innerHTML="Read Less";
    }//condicional para que si el hideTxt contiene la clase "mostrar", el boton diga "leer menos"
    else{
        hideBtn.innerHTML="Read More"; 
    }
}



