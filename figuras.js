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
    const AResult = document.getElementById("AreaResultado");
    const PResult = document.getElementById("PerimetroResultado");
    const value = input.value;
    const area = areaCuadrado(value);
    const perimetro = perimetroCuadrado(value);


    AResult.innerHTML = area;
    PResult.innerHTML = perimetro;
}