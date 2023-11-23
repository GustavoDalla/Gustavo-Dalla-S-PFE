var bauinv = document.getElementById('bauinv');
var bauaberto = false; //bau aberto falso = fechado
var jukeboxtocando = false; //var pra ver se a jukebox ta tocando ou nao
var jukeboxAudio;

function bau() {
    if (bauaberto) {
        fechabau(); //se o "bauaberto" no caso que está falso(fechado) ele vai fazer a função de fechado
    } else {
        abrebau(); //senão o bau faz a função de abrir
    }
}

function abrebau() {
    bauinv = document.getElementById('bauinv');
    bauaberto = true; //bau ficou aberto
    bauinv.style.display = "grid";

    //cria uma classe que acaba funcionando coisas no css aqui no js
    document.querySelectorAll('.cdb').forEach(function(cd) {
        cd.classList.add('cd-aberto');
    });

    tocaSom("#som_bauabrindo");
}

function fechabau() {
    bauinv.style.display = "none"; //some
    bauaberto = false; //bau fechado

    //remove a classe clicked de todos cd
    document.querySelectorAll('.cdb').forEach(function(cd) {
        cd.classList.remove('cd-aberto', 'clicked');
    });

    tocaSom("#som_baufechando");
}

function pegacd(cd) {
    //remove a classe "clicked" de todos os cd
    document.querySelectorAll(".cdb").forEach(function(element) { //para cada função de clicar no cd ele remove a classe "clicada"
        element.classList.remove("clicked");
    });

    //adiciona a classe "clicked" ao CD selecionado se não houver a função acima
    cd.classList.add("clicked");

    //armazena o CD selecionado na variável
    cdb = cd;
    musica = "#musica_" + cdb.classList[1]; //a mesma coisa do tocaSom la embaixo porém em uma variavel

    //quando clicado no cd pela segunda vez ele para de tocar e toca o som drop
    if (jukeboxtocando) {
        jukeboxpara();
    }
}

function jukeboxtoca() {
    jukeboxAudio = document.querySelector(musica);

    if (jukeboxtocando) {
        //se a jukebox já estiver tocando, pare a reprodução e toque o som "drop"
        jukeboxpara();
    } else {
        //se a jukebox não estiver tocando, toque a música
        jukeboxtocando = true;
        tocaSom(musica);
    }
}

function jukeboxpara() {
    if (jukeboxtocando && jukeboxAudio) {
        //se a jukebox estiver tocando, pare a reprodução da música
        jukeboxAudio.pause();
        jukeboxAudio.currentTime = 0;  // Reinicia o áudio para o início
        jukeboxtocando = false;  // Reseta o estado da jukebox
        tocaSom("#som_drop");
    }
}

function slime() {
    // Obtém o elemento slime
    var slime = document.getElementById("slime");

    // Toca o som
    tocaSom("#som_slime");

    // Verifica se a classe 'jello-horizontal' está presente no slime
    if (slime.classList.contains('jello-horizontal')) {
        // Remove a classe se estiver presente
        slime.classList.remove('jello-horizontal');
    } else {
        // Adiciona a classe se não estiver presente
        slime.classList.add('jello-horizontal');
    }
}

function tocaSom(idElementoAudio, audioElement) {
    if (audioElement) {
        audioElement.play();
    } else {
        const elementoAudio = document.querySelector(idElementoAudio);
        if (elementoAudio) {
            elementoAudio.currentTime = 0; // Reinicia o áudio, se estiver tocando
            elementoAudio.play();
        }
    }
}

document.addEventListener("DOMContentLoaded", function() { //isso faz com que os arquivos DOM carreguem após o carregamento da página evitando que os arquivos não apareçam
    let lista = document.querySelectorAll(".tecla"); //seleciona todas as classes tecla

    lista.forEach(function(tecla) { //para cada "onclick" faz esta função
        tecla.addEventListener("click", function() { //evento de click criado
            tocaSom("#som_" + tecla.classList[1]); //id som + o segundo nome da classe tecla
        });
    });
});
