document.addEventListener("keyup", (e) => { 
    if (e.target.matches(".filtro-carta")) { //declaro condicion para cada vez que se presione la tecla
        document.querySelectorAll(".card_classes").forEach((tarjeta) =>{
            tarjeta.textContent.toLocaleLowerCase().includes(e.target.value) //paso todo el contenido de cards a minuscula
            ?tarjeta.classList.remove("filter") //si da true, remueve la clase filtro
            :tarjeta.classList.add ("filter"); //
        })
    } //cuando el usuario se posicione sobre el "search" busque entre las cards
})


let animado = document.querySelectorAll(".animado");

function animacionScroll () {
    let scrollTop= document.documentElement.scrollTop;
    for (let i=0; i<animado.length; i++) {
        let altura = animado [i].offsetTop;
        if (altura -500 < scrollTop) {
            animado [i].style.opacity = 1;
        }
    }
}

window.addEventListener ("scroll", animacionScroll);

//funcion para determinar el grupo al que corresponde, segun la edad

function nivelPorEdad(){
        
    let edad = document.getElementById("edad").value;

    if((edad >= 8)&&(edad<=12)) {
        grupo.textContent = "Pertenece al grupo de INTANTILES";

    }else if((edad >= 17)&&(edad<=70)){
        grupo.textContent = "Pertenece al grupo ADULTOS";

    }else if((edad < 8)&&(edad >70)){
        grupo.textContent = "No contamos con grupos de esa edad";

    }else{
        grupo.textContent = "Puede tomar las clases de STRETCHING";

    }

}