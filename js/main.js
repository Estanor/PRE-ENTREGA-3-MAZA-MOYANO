//lista de mangas
const mangas = [
    "Attack on Titan",
    "Chainsaw Man",
    "Berserk",
    "Vinland Saga",
    "Black Clover",
    "GUNNM: Battle Angel Alita",
    "Bleach",
    "Innocent",
    "Kaguya-Sama: Love is War",
    "My Dress-up Darling",
    "Oshi no Ko",
    "My Hero Academia",
    "Spy x Family",
    "Jojo's Bizarre Adventure",
];

const selectMangas= document.querySelector('#mangas')

mangas.forEach((manga)=>{
    let option =document.createElement('option');
    option.value= manga;
    option.innerText= manga;
    selectMangas.appendChild(option)
})
selectMangas.addEventListener('change', ()=>{
    let option= selectMangas.options[selectMangas.selectedIndex].value
    console.log(option);
}
)
//formulario (completa con tus datos)
const formulario = document.querySelector("#form-login");
console.log(formulario); 
formulario.addEventListener("submit", (e) => {
e.preventDefault();
console.log(e);
console.log(e.target);
console.log(e.target[0].value);
console.log(e.target[1].value);


});


//calculadora
function calcular() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado = 0;
    switch(operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
    }
    document.getElementById("resultado").value = resultado;
}

//storage y JSON

localStorage.setItem("darkMode", false);
sessionStorage.setItem("user", "Estanislao")
sessionStorage.setItem("nickName", "EstanorElDiosDelOlimpo")

let user= sessionStorage.getItem("user"), nickName= sessionStorage.getItem("nickName")
console.log(user);
console.log(nickName);

const tomo= {id:1, nombre:"ChainsawManVol1", precio:1800}

const enJSON= JSON.stringify({id:1, nombre:"ChainsawManVol1", precio:1800})

localStorage.setItem("tomo", enJSON)

let volume= localStorage.getItem('tomo')
console.log(volume);
