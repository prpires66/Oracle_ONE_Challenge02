var palavraSorteada = "";
var letrasEscolhidasIncorretas = []

function criarTabuleiro() {
    var canvas = document.getElementById("myCanvas");
    var canvasWidth = canvas.getAttribute("width");
    var canvasHeight = canvas.getAttribute("height");
    if (canvas.getContext) {
        var espacamentoLetras = 100;
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = '48px Inter';
        ctx.fillStyle = '#0A3871';
        sortearPalavra();
        ctx.fillText(palavraSorteada.join([separador = '']), 100, 100);
        desenharForca(0);

        palavraSorteada.forEach((palavraSorteada, index, array) => {
            ctx.lineWidth = 5;
            ctx.moveTo(canvasWidth / 2 - array.length * espacamentoLetras / 2 + espacamentoLetras * index + espacamentoLetras / 2, 560);
            ctx.lineTo(canvasWidth / 2 - array.length * espacamentoLetras / 2 + espacamentoLetras * index + espacamentoLetras, 560);
            ctx.strokeStyle = '#0A3871';
            ctx.stroke();
        });
    
    }
}

function sortearPalavra() {
    var palavras = ["CAT", "DOG", "MOUSE", "PIG", "RAT", "COW", "HORSE", "SHEEP", "CHICKEN", "DUCK", "GOOSE", "PARROT", "SNAKE", "SQUIRREL", "TURTLE", "ZEBRA", "ANT", "BEETLE", "BUTTERFLY", "CRAB", "CROCODILE", "DOLPHIN", "ELEPHANT", "FROG", "GIRAFFE", "HIPPOPOTAMUS", "JACKAL", "KANGAROO", "LEOPARD", "LION", "MANTIS", "MONKEY", "OCTOPUS", "PANDA", "PENGUIN", "RABBIT", "SALAMANDER", "SNAKE", "TIGER", "WOLF", "YAK", "ZEBRA"];
    var palavra = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase().split("");
    palavraSorteada = palavra;
}

function desenharForca(sequenciaErros) {
    var canvas = document.getElementById("myCanvas")
    var canvasWidth = canvas.getAttribute("width");
    var canvasHeight = canvas.getAttribute("height");
    var xVertice = canvasWidth / 2 - 294 / 2;
    var yVertice = 450;

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.font = '48px Inter';
    ctx.beginPath();
    ctx.beginPath();
    ctx.lineWidth = 4.5;
    switch (sequenciaErros) {
        case 0:
            ctx.lineWidth = 5;
            ctx.moveTo(xVertice, yVertice);
            ctx.lineTo(xVertice + 294, yVertice);
            break;
        case 1:
            ctx.moveTo(xVertice + 84, yVertice);
            ctx.lineTo(xVertice + 84, yVertice - 360);
            break;
        case 2:
            ctx.moveTo(xVertice + 84, yVertice - 360);
            ctx.lineTo(xVertice + 84 + 177, yVertice - 360);
            break;
        case 3:
            ctx.moveTo(xVertice + 84 + 177, yVertice - 360);
            ctx.lineTo(xVertice + 84 + 177, yVertice - 360 + 50);
            break;
        case 4:
            ctx.arc(xVertice + 84 + 177, yVertice - 360 + 50 + 32, 32, 1.5 * Math.PI, 1.4999 * Math.PI);
            break;
        case 5:
            ctx.moveTo(xVertice + 84 + 177, yVertice - 360 + 50 + 64);
            ctx.lineTo(xVertice + 84 + 177, yVertice - 360 + 50 + 64 + 135);
            break;
        case 6:
            ctx.moveTo(xVertice + 84 + 177, yVertice - 360 + 50 + 64 + 135);
            ctx.lineTo(xVertice + 84 + 177 - 36, yVertice - 360 + 50 + 64 + 135 + 63);
            break;
        case 7:
            ctx.moveTo(xVertice + 84 + 177, yVertice - 360 + 50 + 64 + 135);
            ctx.lineTo(xVertice + 84 + 177 + 36, yVertice - 360 + 50 + 64 + 135 + 63);
            break;
        case 8:
            ctx.moveTo(xVertice + 84 + 177, yVertice - 360 + 50 + 64);
            ctx.lineTo(xVertice + 84 + 177 - 36, yVertice - 360 + 50 + 64 + 135 - 63);
            break;
        case 9:
            ctx.moveTo(xVertice + 84 + 177, yVertice - 360 + 50 + 64);
            ctx.lineTo(xVertice + 84 + 177 + 36, yVertice - 360 + 50 + 64 + 135 - 63);
            break;
    }
    ctx.stroke();
};

var botaoComecar = document.querySelector('.btn-comecar');
botaoComecar.addEventListener("click", function () {
    document.querySelector('.menu-inicial').classList.add('oculto');
    document.querySelector('.tabuleiro').classList.remove('oculto');
    document.querySelector('.jogo').classList.remove('oculto');
    letrasEscolhidasIncorretas = [];
    criarTabuleiro();
});

var botaoNovoJogo = document.querySelector('.btn-novo-jogo');
botaoNovoJogo.addEventListener("click", function () {
    document.querySelector('.menu-inicial').classList.add('oculto');
    document.querySelector('.tabuleiro').classList.remove('oculto');
    document.querySelector('.jogo').classList.remove('oculto');
    letrasEscolhidasIncorretas = [];
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
    letrasEscolhidasIncorretas = [];
});

document.body.addEventListener('keypress', function (event) {
    const letrasValidas = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const key = event.key;

    const letraUnica = letrasEscolhidasIncorretas.includes(key.toUpperCase());
    const validaLetra = letrasValidas.includes(key.toUpperCase());
    if (!letraUnica && validaLetra) {
        var acertos = verificarLetraPrecionada(key.toUpperCase());
        if (acertos.length === 0) {
            letrasEscolhidasIncorretas.push(key.toUpperCase());
            escreverLetraIncorreta(letrasEscolhidasIncorretas);
            desenharForca(letrasEscolhidasIncorretas.length);
        } else {
            escreverLetraAcertada(acertos);
        }
    }
});

function escreverLetraIncorreta(incorretas) {
    var letrasIncorretas = incorretas;
    var canvas = document.getElementById("myCanvas");
    var canvasWidth = canvas.getAttribute("width");
    var canvasHeight = canvas.getAttribute("height");
    var espacamentoLetras = 40;

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(10, 580, 1180, 580);
        ctx.font = '24px Inter';
        ctx.fillStyle = '#0A3871';
        letrasIncorretas.forEach((letrasIncorretas, index, array) => {
            ctx.fillText(array[index], canvasWidth / 2 - array.length * espacamentoLetras / 2 + espacamentoLetras * index + espacamentoLetras / 2, 620);
        });
    }
}

function escreverLetraAcertada(acertos) {
    var letrasAcertadas = acertos;

    var canvas = document.getElementById("myCanvas");
    var canvasWidth = canvas.getAttribute("width");
    var canvasHeight = canvas.getAttribute("height");
    var espacamentoLetras = 100;
    var ctx = canvas.getContext("2d");
    ctx.font = '48px Inter';
    ctx.fillStyle = '#0A3871';    

    letrasAcertadas.forEach((letrasAcertadas) => {
        ctx.fillText(palavraSorteada[letrasAcertadas], canvasWidth / 2 - palavraSorteada.length * espacamentoLetras / 2 + espacamentoLetras * letrasAcertadas + espacamentoLetras / 2, 550);
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
