function verificar() {
    var data = new Date()/* data atual */
    var ano = data.getFullYear()/* pegando o ano atual */
    var fano = document.getElementById('txtAno')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        /* erro ano igual a 0 */
    } else {
        var fsex = document.getElementsByName('radsex')/* o getElementByName() foi usando como parametro para os dois input radios para que nao precisasse fazer os dois input e para facilitar na condicao logica. */
        var idade = ano - Number(fano.value)
        var genero = ''
        var imagem = document.createElement('img')
        
        if (fsex[0].checked) {/* se fsex tiver marcando em 0 que e masculino entao */
            /* sera masculino */
            genero = 'Homen'
            if (idade >= 0 && idade < 14) {
                /* crianca */
                imagem.src = 'minino.png'
            } else if (idade < 22) {
                /* jovem */
                imagem.src = 'homen-jovem.png'
            } else if (idade < 45) {
                /* adulto */
                imagem.src = 'homen-adulto.png'
            } else {
                /* idoso */
                imagem.src = 'homen-idoso.png'
            }
        } else {
            genero = 'Feminino'
            if (idade >= 0 && idade < 14) {
                /* crianca */
                imagem.src = 'minina.png'
            } else if (idade < 22) {
                /* jovem */
                imagem.src = 'mulher-jovem.png'
            } else if (idade < 45) {
                /* adulta */
                imagem.src = 'mulher-adulta.png'
            } else {
                /* idosa */
                imagem.src = 'mulher-idosa.png'
            }
           
        }
        
              
    }
    res.style.textAlign = "center"
    res.innerHTML = `Gernero ${genero} e idade ${idade}`
    res.appendChild(imagem) 
}