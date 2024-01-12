var agora_h = new Date();
var agora_m = new Date();
var hora = agora_h.getHours();
var minuto = agora_m.getMinutes();
var imag = window.document.querySelector('img#imagem');
var escrever_div1 = document.querySelector('div#div1');
var escrever_div2 = document.querySelector('div#div2');
escrever_div1.innerHTML += `${hora} horas e ${minuto} minutos.`;
//vou mudar aqui para usar com o git, hahahaha. VOu só comentar mesmo

if(hora < 12 && hora >= 6){
    imag.src = 'manha.png';
    escrever_div2.innerHTML += `<p><strong>Bom dia meu consagrado!</strong></p>`;
    document.body.style.background = "#0673e7";
}
else if(hora >= 12 && hora < 18){
    imag.src = 'tarde.png';
    escrever_div2.innerHTML += `<p><strong>Boa tarde campeão!</strong></p>`;
    document.body.style.background = "#dabd61";
}
else if(hora >= 18 && hora <= 23){
    imag.src = 'noite.png';
    escrever_div2.innerHTML += `<p><strong>Boa noite aliado!</strong></p>`;
    document.body.style.background = "#030e1a";
}
else{
    imag.src = 'noite.png';
    escrever_div2.innerHTML += `<p><strong>Hora de dormir vagabundo!</strong></p>`;
    document.body.style.background = "#030e1a";
}
