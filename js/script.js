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
        x=0;
        for (let j = 0; j < textoEncriptado.length; j++) {
            console.log("i: ", i, "j: " + j);
            if (texto[i] == textoEncriptado[j][0]) {
                console.log(texto[i], textoEncriptado[j][0]);
                textoEncriptadoFinal += textoEncriptado[j][0];
                i += textoEncriptado[j][2]-1;
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

var botaoCriptografar = document.querySelector('.criptografar');
inputTexto = document.querySelector('.inText');
outputTexto = document.querySelector('.outText');

botaoCriptografar.addEventListener("click", function () {
    const texto = inputTexto.value;
    if (texto.length > 0) {
        const textoEncriptado = encriptar(inputTexto.value);

        outputTexto.innerHTML = textoEncriptado;

        document.querySelector('.resultado').classList.remove('escondido');
        document.querySelector('.resultado-imagem').classList.add('escondido');
        document.querySelector('.direita').style.justifyContent = 'end';
    }
});

var botaoDescriptografar = document.querySelector('.descriptografar');
botaoDescriptografar.addEventListener("click", function () {
    const texto = inputTexto.value;
    if (texto.length > 0) {
        const textoEncriptado = desencriptar(inputTexto.value);

        outputTexto.innerHTML = textoEncriptado;

        document.querySelector('.resultado').classList.remove('escondido');
        document.querySelector('.resultado-imagem').classList.add('escondido');
        document.querySelector('.direita').style.justifyContent = 'end';
    }
});

var botaoCopiar = document.querySelector('.copiar');
botaoCopiar.addEventListener("click", function () {

    let textoCopiado = document.querySelector('.outText');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(textoCopiado.value);
});

inputTexto.addEventListener("keyup", function () {
    const texto = inputTexto.value;
    if (texto.length == 0) {
        document.querySelector('.resultado-imagem').classList.toggle('escondido');
        document.querySelector('.direita').style.justifyContent = 'center';
        document.querySelector('.resultado').classList.toggle('escondido');
    }
});