let inputAdultos= document.getElementById ("adultos")
let inputCrianças= document.getElementById ("crianças")
let inputDuração= document.getElementById ("duração")
let resultado= document.getElementById ("resultado")

function calcular() {

    console.log("Calculando...");


    let adultos = inputAdultos.value;
    let crianças = inputCrianças.value;
    let duração = inputDuração.value;

    let qdtTotalCarne = carnePp(duração) * adultos + (carnePp(duração) / 2 * crianças);
    let qdtTotalCerveja = cervejaPp(duração) * adultos;
    let qdtTotalBebidas = bebidasPp(duração) * adultos + (bebidasPp(duração)/ 2 * crianças);

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000} kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 350)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas/2000)} L de Refrigerante</p>`
   
}


function carnePp (duração) {
    if (duração >=6){
        return 650;
    } 
        else {
            return 400;
        }
    }

    function cervejaPp (duração) {
        if (duração >=6){
            return 2000;
        } 
            else {
                return 1200;
            }
        }

        function bebidasPp (duração) {
            if (duração >=6){
                return 1500;
            } 
                else {
                    return 1200;
                }
            }

