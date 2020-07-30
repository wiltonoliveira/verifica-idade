function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Sinto muito. Por favor, revise os dados e tente novamente')
    } else{
        var Fsexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        //Equivale a criar uma TAG img no HTML, porém no JS
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //Fim

        if(Fsexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/bebeM.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovemM.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adultoM.png')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/idosoM.png')
            }
        } else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/bebeF.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovemF.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adultoF.png')
            } else{
                //Idoso
                img.setAttribute('src', 'imagens/idosoF.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Identificamos ${genero} de ${idade} anos!<br>`
        resultado.appendChild(img)
    }
}


