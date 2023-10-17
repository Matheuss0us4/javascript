function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora < 12) {
        /* Bom dia */
        img.src = 'imagens/foto-manha.png'
        document.body.style.backgroundColor = 'rgb(168, 153, 63'
    } else if (hora >= 12 && hora < 18) {
        /* Boa tarde */
        img.src = 'imagens/foto-tarde.png'
        document.body.style.backgroundColor = 'rgb(236, 116, 69)'
    } else {
          /* Boa noite */
          img.src = 'imagens/foto-noite.png'
          document.body.style.backgroundColor = 'rgb(56, 56, 146)'
    }
      
    
}