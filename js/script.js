function encriptar(texto) {
    let textoEncriptado = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    let textoEncriptadoFinal = "";
    let vogal;
    for (let i = 0; i < texto.length; i++) {
        vogal = false;
        for (let j = 0; j < textoEncriptado.length; j++) {
            if (texto[i] == textoEncriptado[j][0]) {
                textoEncriptadoFinal += textoEncriptado[j][1];
                vogal = true;
            }
        }
        if (vogal == false) {
            textoEncriptadoFinal += texto[i];
        }
    }
    return textoEncriptadoFinal;
}

function desencriptar(texto) {
    let textoEncriptado = [["a", "ai", 2], ["e", "enter", 5], ["i", "imes", 4], ["o", "ober", 4], ["u", "ufat", 4]];
    let textoEncriptadoFinal = "";
    let vogal;
    let x;
    for (let i = 0; i < texto.length; i++) {
        vogal = false;
        x = 0;
        for (let j = 0; j < textoEncriptado.length; j++) {
            console.log("i: ", i, "j: " + j);
            if (texto[i] == textoEncriptado[j][0]) {
                console.log(texto[i], textoEncriptado[j][0]);
                textoEncriptadoFinal += textoEncriptado[j][0];
                i += textoEncriptado[j][2] - 1;
                vogal = true;
                break;
            }
        }
        if (vogal == false) {
            console.log("consoante ", texto[i]);
            textoEncriptadoFinal += texto[i];
        }
    }
    return textoEncriptadoFinal;
};

var botaoAdicionar = document.querySelector('.btn-adicionar');
botaoAdicionar.addEventListener("click", function () {
    alert("Adicionar");
});

var botaoComecar = document.querySelector('.btn-comecar');
botaoComecar.addEventListener("click", function () {
    alert("Começar");
});

inputTexto.addEventListener("keyup", function () {
    const texto = inputTexto.value;
    if (texto.length == 0) {
        document.querySelector('.resultado-imagem').classList.toggle('escondido');
        document.querySelector('.direita').style.justifyContent = 'center';
        document.querySelector('.resultado').classList.toggle('escondido');
    }
});