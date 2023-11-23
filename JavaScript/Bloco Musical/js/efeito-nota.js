
var notas = ['nota1', 'nota2', 'nota3', 'nota4', 'nota5', 'nota6', 'nota7', 'nota8', 'nota9'];
var indiceNota = 0;

function showNoteEffect(event) {
    // Crie a nota musical
    var note = document.createElement('div');
    note.className = 'note-effect move-up';

    // Adicione a nota ao corpo do documento antes de definir a posição
    document.body.appendChild(note);

    // Posicione a nota em relação ao clique
    note.style.top = event.clientY + 'px';
    note.style.left = event.clientX + 'px';

    // Adicione a imagem de nota à div
    var imagePath = 'img/notas/' + notas[indiceNota] + '.png';
    note.style.backgroundImage = "url('" + imagePath + "')";

    // Atualize o índice para a próxima nota
    indiceNota = (indiceNota + 1) % notas.length;

    // Remova a classe move-up após a animação e adicione a classe move-up-hidden
    setTimeout(function () {
        note.classList.remove('move-up');
        note.classList.add('move-up-hidden');
        // Remova a nota do corpo do documento após a animação
        setTimeout(function() {
            document.body.removeChild(note);
        }, 500);
    }, 500); // Ajustei o tempo para a metade do tempo da animação
}
