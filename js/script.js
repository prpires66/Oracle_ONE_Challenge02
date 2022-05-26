function criarTabuleiro() {
    var canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "white"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    }
}


var botaoComecar = document.querySelector('.btn-comecar');
botaoComecar.addEventListener("click", function () {
    document.querySelector('.menu-inicial').classList.add('oculto');
    document.querySelector('.tabuleiro').classList.remove('oculto');
    document.querySelector('.jogo').classList.remove('oculto');
    criarTabuleiro();
});

var botaoAdicionar = document.querySelector('.btn-adicionar');
botaoAdicionar.addEventListener("click", function () {
    document.querySelector('.menu-inicial').classList.add('oculto');
    document.querySelector('.tabuleiro').classList.remove('oculto');
});

inputTexto.addEventListener("keyup", function () {
    const texto = inputTexto.value;
    if (texto.length == 0) {
        document.querySelector('.resultado-imagem').classList.toggle('escondido');
        document.querySelector('.direita').style.justifyContent = 'center';
        document.querySelector('.resultado').classList.toggle('escondido');
    }
});