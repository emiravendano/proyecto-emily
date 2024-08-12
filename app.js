let numeroSecreto = 0;
let numero2=0;
let intentos =0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

let numeroSuma=0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto + numero2) {
        asignarTextoElemento('p', `Acertaste la suma en ${intentos}${(intentos === 1) ? ' vez' : ' veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

        if (intentos === 1) {
            document.getElementById('diploma').style.display = 'inline-block';
        }

    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto + numero2) {
            asignarTextoElemento('p', 'La suma es menor');
        } else {
            asignarTextoElemento('p', 'La suma es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    document.getElementById('diploma').style.display = 'none';
}

//condicionesIniciales();


/*function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto+numero2){
        asignarTextoElemento('p',`Acertaste la suma en ${intentos}${(intentos===1) ? ' vez':' veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','La suma es menor');
        } else{
            asignarTextoElemento('p','La suma es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
};*/
function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    }else{

        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function generarNumero2() {
    let numeroGenerado2 = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado2);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    }else{

        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado2)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado2);
            return numeroGenerado2;
        }
    }
}

function condicionesIniciales(){
    //generar nuevo numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    numero2 = generarNumero2();
    let numeroSuma = numeroSecreto+numero2;
    
    asignarTextoElemento('h1','Juego de Sumas!');
    asignarTextoElemento('p',`Cuanto es: ${numeroSecreto}+${numero2}`);
    //inicializar el numero intentos
    intentos = 1;
    
    
}
function imprimirDiploma(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar nuevo numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
    //deshabilitar el boton de juego
    document.querySelector('#diploma').setAttribute('disabled','true');
}

//function reiniciarJuego(){
    //limpiar la caja
    //limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar nuevo numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
    //deshabilitar el boton de juego
    //document.querySelector('#reiniciar').setAttribute('disabled','true');
//}
[]
condicionesIniciales();


