function iniciar(){
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('imagem')
    var data = new Date() 
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        ///bom-dia
        img.src = 'manha.jpg'
        document.body.style.background = "#e5e500 "
    }else if(hora >= 12 && hora < 18){
        //boa tarde 
        img.src = 'tardecer.jpg'
        document.body.style.background = "#ff8a22"
    }else{
        //boa noite
        img.src = 'noiteee.jpg'
        document.body.style.background = "#1a3678 " ///muda cor de fundo para cada config
    }
}
