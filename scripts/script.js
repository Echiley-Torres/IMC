
function calcular(){

    var n1  = window.document.getElementById('peso')
    var n2  = window.document.getElementById('altura')
    var res = window.document.getElementById('resultado')

    var peso = Number.parseFloat(n1.value)
    var alt = Number.parseFloat(n2.value)

    var imc = peso/(alt*alt)

    var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    if(imc <= 16.9){
        res.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> Você está muito abaixo do peso</p>`
        img.setAttribute('src', 'img-1-map.png')
    } else if(imc <= 18.4 &&  imc >= 17){
        res.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> Você está abaixo do peso</p>`
        img.setAttribute('src', 'img-abaixopeso.png')
    } else if( imc >= 18.6 && imc <= 24.9){
        res.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> Peso ideal</p>`
        img.setAttribute('src', 'img-pesoideal.png')
    } else if (imc >= 25 && imc <= 29.9 ){
        res.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> Acima do peso</p>`
        img.setAttribute('src', 'img-acimapeso.png')
    } else if(imc >= 30){
        res.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> Você está com Obesidade</ps>`
        img.setAttribute('src', 'img-obesidade.png')
    }
    res.style.textAlign = 'center'
    res.appendChild(img)

}