//
//Oracle ONE Challenge 02 - Jogo da Forca
//
var palavraSorteada;
var letrasEscolhidasIncorretas;
var letrasEscolhidasCorretas;
var letrasEscolhidasCorretasTotal;
var palavras = ["BORBOLETA"];
var palavras = ["GATO", "CACHORRO", "RATO", "PORCO", "RATO", "VACA", "CAVALO", "OVELHA", "GALINA", "PATO", "GANSO", "PAPAGAIO", "ESQUILO", "TARTARUGA", "ZEBRA", "FORMIGA", "BESOURO", "BORBOLETA", "CARANGUEJO", "CROCODILO", "GOLFINHO", "ELEFANTE", "SAPO", "GIRAFA", "LOBO", "CANGURU", "LEOPARDO", "MACACO", "POLVO", "PANDA", "PINGUIM", "COELHO", "SALAMANDRA", "TIGRE", "LOBO", "ZEBRA"];
const letrasValidas = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var canvas = document.getElementById("myCanvas");
var canvasWidth = canvas.getAttribute("width");
var canvasHeight = canvas.getAttribute("height");
var xOffset = canvasWidth / 2 - 294 / 2; 
var yOffset = 500;

function inicializaVariaveis() {
    var palavraSorteada = ""
    letrasEscolhidasIncorretas = [];
    letrasEscolhidasCorretas = [];
    letrasEscolhidasCorretasTotal = 0;
}

function criarTabuleiro() {
    inicializaVariaveis();
    if (canvas.getContext) {
        var espacamentoLetras = 100;
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = '48px Inter';
        ctx.fillStyle = '#0A3871';
        ctx.fillText("JOGO DA FORCA", canvasWidth / 2 - ctx.measureText("JOGO DA FORCA").width / 2, 50);
        sortearPalavra();
        desenharForca(0);

        palavraSorteada.forEach((palavraSorteada, index, array) => {
            ctx.lineWidth = 5;
            ctx.moveTo(canvasWidth / 2 - array.length * espacamentoLetras / 2 + espacamentoLetras * index + espacamentoLetras / 2, 560 + 50);
            ctx.lineTo(canvasWidth / 2 - array.length * espacamentoLetras / 2 + espacamentoLetras * index + espacamentoLetras, 560 + 50);
            ctx.strokeStyle = '#0A3871';
            ctx.stroke();
        });
    }
}

function sortearPalavra() {
    var palavra = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase().split("");
    palavraSorteada = palavra;
}

function desenharForca(sequenciaErros) {
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.font = '48px Inter';
    ctx.beginPath();
    ctx.beginPath();
    ctx.lineWidth = 4.5;
    switch (sequenciaErros) {
        case 0:
            ctx.lineWidth = 5;
            ctx.moveTo(xOffset, yOffset);
            ctx.lineTo(xOffset + 294, yOffset);
            break;
        case 1:
            ctx.moveTo(xOffset + 84, yOffset);
            ctx.lineTo(xOffset + 84, yOffset - 360);
            break;
        case 2:
            ctx.moveTo(xOffset + 84, yOffset - 360);
            ctx.lineTo(xOffset + 84 + 177, yOffset - 360);
            break;
        case 3:
            ctx.moveTo(xOffset + 84 + 177, yOffset - 360);
            ctx.lineTo(xOffset + 84 + 177, yOffset - 360 + 50);
            break;
        case 4:
            ctx.arc(xOffset + 84 + 177, yOffset - 360 + 50 + 32, 32, 1.5 * Math.PI, 1.4999 * Math.PI);
            break;
        case 5:
            ctx.moveTo(xOffset + 84 + 177, yOffset - 360 + 50 + 64);
            ctx.lineTo(xOffset + 84 + 177, yOffset - 360 + 50 + 64 + 135);
            break;
        case 6:
            ctx.moveTo(xOffset + 84 + 177, yOffset - 360 + 50 + 64 + 135);
            ctx.lineTo(xOffset + 84 + 177 - 36, yOffset - 360 + 50 + 64 + 135 + 63);
            break;
        case 7:
            ctx.moveTo(xOffset + 84 + 177, yOffset - 360 + 50 + 64 + 135);
            ctx.lineTo(xOffset + 84 + 177 + 36, yOffset - 360 + 50 + 64 + 135 + 63);
            break;
        case 8:
            ctx.moveTo(xOffset + 84 + 177, yOffset - 360 + 50 + 64);
            ctx.lineTo(xOffset + 84 + 177 - 36, yOffset - 360 + 50 + 64 + 135 - 63);
            break;
        case 9:
            ctx.moveTo(xOffset + 84 + 177, yOffset - 360 + 50 + 64);
            ctx.lineTo(xOffset + 84 + 177 + 36, yOffset - 360 + 50 + 64 + 135 - 63);
            break;
    }
    ctx.stroke();
};

var botaoComecar = document.querySelector('.btn-comecar');
botaoComecar.addEventListener("click", function () {
    document.querySelector('.menu-inicial').classList.add('oculto');
    document.querySelector('.tabuleiro').classList.remove('oculto');
    document.querySelector('.jogo').classList.remove('oculto');
    criarTabuleiro();
});

var botaoNovoJogo = document.querySelector('.btn-novo-jogo');
botaoNovoJogo.addEventListener("click", function () {
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

var botaoDesistir = document.querySelector('.btn-desistir');
botaoDesistir.addEventListener("click", function () {
    document.querySelector('.menu-inicial').classList.remove('oculto');
    document.querySelector('.tabuleiro').classList.add('oculto');
    document.querySelector('.jogo').classList.add('oculto');
    criarTabuleiro();
});

document.body.addEventListener('keypress', function (event) {
    const key = event.key;

    const letraUnicaIncorreta = letrasEscolhidasIncorretas.includes(key.toUpperCase());
    const letraUnicaCorreta = letrasEscolhidasCorretas.includes(key.toUpperCase());
    const validaLetra = letrasValidas.includes(key.toUpperCase());
    if (!letraUnicaIncorreta && !letraUnicaCorreta && validaLetra) {
        var acertos = verificarLetraPrecionada(key.toUpperCase());
        if (acertos.length === 0) {
            letrasEscolhidasIncorretas.push(key.toUpperCase());
            escreverLetraIncorreta(letrasEscolhidasIncorretas);
            desenharForca(letrasEscolhidasIncorretas.length);
            verificarFimDeJogo();
        } else {
            letrasEscolhidasCorretas.push(key.toUpperCase());
            letrasEscolhidasCorretasTotal += acertos.length;
            escreverLetraAcertada(acertos);
            verificarVencerJogo();
        }
    }
});

function escreverLetraIncorreta(incorretas) {
    var letrasIncorretas = incorretas;
    var espacamentoLetras = 40;

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, yOffset + 130, canvasWidth, yOffset + 130);
        ctx.font = '24px Inter';
        ctx.fillStyle = '#0A3871';
        letrasIncorretas.forEach((letrasIncorretas, index, array) => {
            ctx.fillText(array[index], canvasWidth / 2 - array.length * espacamentoLetras / 2 + espacamentoLetras * index + espacamentoLetras / 2, yOffset + 170);
        });
    }
}

function escreverLetraAcertada(acertos) {
    var letrasAcertadas = acertos;

    var espacamentoLetras = 100;
    var ctx = canvas.getContext("2d");
    ctx.font = '48px Inter';
    ctx.fillStyle = '#0A3871';

    letrasAcertadas.forEach((letrasAcertadas) => {
        ctx.fillText(palavraSorteada[letrasAcertadas], canvasWidth / 2 - palavraSorteada.length * espacamentoLetras / 2 + espacamentoLetras * letrasAcertadas + espacamentoLetras / 2, yOffset + 100);
        ctx.stroke();
    });
}

function verificarLetraPrecionada(letraEscolhida) {
    var letra = letraEscolhida;
    var indices = [];
    var idx = palavraSorteada.indexOf(letra);
    while (idx != -1) {
        indices.push(idx);
        idx = palavraSorteada.indexOf(letra, idx + 1);
    }
    return (indices);
}

function verificarVencerJogo() {
    if (palavraSorteada.length === letrasEscolhidasCorretasTotal) {
        var ctx = canvas.getContext("2d");
        ctx.font = '24px Inter';
        ctx.fillStyle = 'red';
        ctx.fillText("Você venceu!", xOffset + 300, yOffset - 200);
        ctx.stroke();
        letrasEscolhidasIncorretas = letrasValidas;
    }
}

function verificarFimDeJogo() {
    if (letrasEscolhidasIncorretas.length === 9) {
        var ctx = canvas.getContext("2d");
        ctx.font = '24px Inter';
        ctx.fillStyle = 'red';
        ctx.fillText("Você perdeu!", xOffset + 300, yOffset - 200);
        ctx.stroke();
        letrasEscolhidasIncorretas = letrasValidas;
    }
}