function criarTabuleiro() {
    var canvas = document.getElementById("myCanvas");
    var canvasWidth = canvas.getAttribute("width");
    var canvasHeight = canvas.getAttribute("height");
    if (canvas.getContext) {
        var espacamentoLetras = 100;
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.font = '48px Inter';
        var palavraSorteada = sortearPalavra();
        palavraSorteada.forEach((palavraSoprteada, index, array) => {
            ctx.fillText(array[index], canvasWidth / 2 - array.length * espacamentoLetras / 2 + espacamentoLetras * index + espacamentoLetras / 2, 550);
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.moveTo(canvasWidth / 2 - array.length * espacamentoLetras / 2 + espacamentoLetras * index + espacamentoLetras / 2, 560);
            ctx.lineTo(canvasWidth / 2 - array.length * espacamentoLetras / 2 + espacamentoLetras * index + espacamentoLetras, 560);
            ctx.stroke();
        });
    desenharForca();
    }
}

function sortearPalavra() {
    var palavras = ["CAT", "DOG", "MOUSE", "PIG", "RAT", "COW", "HORSE", "SHEEP", "CHICKEN", "DUCK", "GOOSE", "PARROT", "SNAKE", "SQUIRREL", "TURTLE", "ZEBRA", "ANT", "BEETLE", "BUTTERFLY", "CRAB", "CROCODILE", "DOLPHIN", "ELEPHANT", "FROG", "GIRAFFE", "HIPPOPOTAMUS", "JACKAL", "KANGAROO", "LEOPARD", "LION", "MANTIS", "MONKEY", "OCTOPUS", "PANDA", "PENGUIN", "RABBIT", "SALAMANDER", "SNAKE", "TIGER", "WOLF", "YAK", "ZEBRA"];
    var palavra = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase().split("");
    return palavra;
}

function desenharForca() {
    var canvas = document.getElementById("myCanvas")
    var canvasWidth = canvas.getAttribute("width");
    var canvasHeight = canvas.getAttribute("height");
    var xVertice = canvasWidth / 2-294/2;
    var yVertice = 400;

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.font = '48px Inter';
    ctx.beginPath();
    ctx.lineWidth = 5;

    ctx.moveTo(xVertice,yVertice);
    ctx.lineTo(xVertice+294,yVertice);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.lineWidth = 4.5;

    ctx.moveTo(xVertice+84,yVertice);
    ctx.lineTo(xVertice+84,yVertice-360);

    ctx.moveTo(xVertice+84,yVertice-360);
    ctx.lineTo(xVertice+84+177,yVertice-360);

    ctx.moveTo(xVertice+84+177,yVertice-360);
    ctx.lineTo(xVertice+84+177,yVertice-360+50);

    ctx.arc(xVertice+84+177,yVertice-360+50+32, 32, 1.5 * Math.PI, 1.4999 * Math.PI);

    ctx.moveTo(xVertice+84+177,yVertice-360+50+64);
    ctx.lineTo(xVertice+84+177,yVertice-360+50+64+135);

    ctx.moveTo(xVertice+84+177,yVertice-360+50+64+135);
    ctx.lineTo(xVertice+84+177-36,yVertice-360+50+64+135+63);

    ctx.moveTo(xVertice+84+177,yVertice-360+50+64+135);
    ctx.lineTo(xVertice+84+177+36,yVertice-360+50+64+135+63);

    ctx.moveTo(xVertice+84+177,yVertice-360+50+64);
    ctx.lineTo(xVertice+84+177-36,yVertice-360+50+64+135-63);

    ctx.moveTo(xVertice+84+177,yVertice-360+50+64);
    ctx.lineTo(xVertice+84+177+36,yVertice-360+50+64+135-63);


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
});

inputTexto.addEventListener("keyup", function () {
    const texto = inputTexto.value;
    if (texto.length == 0) {
        document.querySelector('.resultado-imagem').classList.toggle('escondido');
        document.querySelector('.direita').style.justifyContent = 'center';
        document.querySelector('.resultado').classList.toggle('escondido');
    }
});