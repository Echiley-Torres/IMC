
function calcular(){

    var n1  = window.document.getElementById('peso')
    var n2  = window.document.getElementById('altura')
    var res = window.document.getElementById('resultado')

    var peso = Number.parseFloat(n1.value)
    var alt = Number.parseFloat(n2.value)

    var imc = peso/(alt*alt)

    if(imc <= 16.9){
        res.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> Você está muito abaixo do peso`
    } else if(imc <= 18.4 &&  imc >= 17){
        res.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> Você está abaixo do peso`
    } else if( imc >= 18.6 && imc <= 24.9){
        res.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> Peso ideal`
    } else if (imc >= 25 && imc <= 29.9 ){
        res.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> Acima do peso`
    } else if(imc >= 30){
        res.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> Você está com Obesidade`
    }
        

}