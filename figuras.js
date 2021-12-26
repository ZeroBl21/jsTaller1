"use strict"

//Codigo del Cuadrado

const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

//Código del Triángulo

const perimetroTriangulo = (lado1,lado2,base)=> lado1 + lado2 + base;

const areaTriangulo = (base,altura)=> (base + altura) / 2;

//Código del Circulo

//Diametro
const diametroCirculo = (radio)=> radio * 2;

//PI
const PI = Math.PI;

//Circuferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

//Area
const areaCirculo = (radio) => (radio * radio) * PI;


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(`El perimetro cuadrado es: ${perimetro}`)
}

function calcularCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const aResult = document.getElementById("AreaResultado");
    const pResult = document.getElementById("PerimetroResultado");
    const value = input.value;
    const area = areaCuadrado(value);
    const perimetro = perimetroCuadrado(value);


    aResult.innerHTML = area;
    pResult.innerHTML = perimetro;
}

function calcularCirculo(){
    const input = document.getElementById("InputCuadrado");
    const aResult = document.getElementById("AreaResultado");
    const pResult = document.getElementById("PerimetroResultado");
    const value = input.value;
    const area = areaCirculo(value);
    const perimetro = perimetroCirculo(value);


    aResult.innerHTML = area.toFixed(4);
    pResult.innerHTML = perimetro.toFixed(4);
}

function calcularTriangulo(){
    const base = Number(document.getElementById("InputBase").value);
    const height = Number(document.getElementById("InputHeight").value);
    const sideA = Number(document.getElementById("InputA").value);
    const sideB = Number(document.getElementById("InputB").value);

    const aResult = document.getElementById("AreaResultado");
    const pResult = document.getElementById("PerimetroResultado");
    
    const area = areaTriangulo(base,height);
    const perimetro = perimetroTriangulo(sideA,sideB,base);


    aResult.innerHTML = area.toFixed(2);
    pResult.innerHTML = perimetro.toFixed(2);
}