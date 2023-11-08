window.alert("Show")

function tocaSom(){
    document.querySelector('#som_tecla_aplausos').play()
    document.querySelector('#som_tecla_vaia').play()
    document.querySelector('#som_tecla_risada').play()
    document.querySelector('#som_tecla_errado').play()
    document.querySelector('#som_tecla_grilo').play()
    document.querySelector('#som_tecla_tambores').play()
    document.querySelector('#som_tecla_trombeta').play()
    document.querySelector('#som_tecla_dinheiro').play()
    document.querySelector('#som_tecla_vitoria').play()
}

document.querySelector('button.tecla_aplausos').onclick = tocaSom();
document.querySelector('button.tecla_vaia').onclick = tocaSom();
document.querySelector('button.tecla_risada').onclick = tocaSom();
document.querySelector('button.tecla_errado').onclick = tocaSom();
document.querySelector('button.tecla_grilo').onclick = tocaSom();
document.querySelector('button.tecla_tambores').onclick = tocaSom();
document.querySelector('button.tecla_trombeta').onclick = tocaSom();
document.querySelector('button.tecla_dinheiro').onclick = tocaSom();
document.querySelector('button.tecla_vitoria').onclick = tocaSom();