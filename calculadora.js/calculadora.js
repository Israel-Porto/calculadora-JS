function insert(value) {
    var currentInput = document.getElementById('resultado').innerText;
    document.getElementById('resultado').innerText = currentInput + value;
}

function limpar() {
    document.getElementById('resultado').innerText = "";
}

function voltar() {
    let resultado = document.getElementById('resultado').innerText;
    document.getElementById('resultado').innerText = resultado.substring(0, resultado.length - 1);
}

function formatarResultado(resultado) {
    let valores = resultado.split(/(\+|\-|\*|\/|\x|\÷|\^|\√|\π)/);

    for (let i = 0; i < valores.length; i++) {
        index = valores.indexOf(valores[i]);

        if (valores[i] == 'x') {
            valores[i] = '*';
        } else if (valores[i] == '÷') {
            valores[i] = '/';
        } else if (valores[i] == '^') {
            valores[i] = `**`;
        } else if (valores[i] == '√') {
            valores[i] = `Math.sqrt(${valores[i + 1]})`;
            valores.splice(index + 1, 1);
        } else if (valores[i] == 'π') {
            valores[i] = `*Math.PI`;
        }
    }

    return valores.join('');
}

function calcular() {
    var resultado = document.getElementById('resultado').innerText;
    if (resultado) {
        try {
            // Substitui os símbolos específicos por equivalentes JavaScript e avalia a expressão
            resultado = formatarResultado(resultado);
            // Avalia a expressão
            var result = eval(resultado);
            // Exibe o resultado
            document.getElementById('resultado').innerText = result;
        } catch (e) {
            // Se houver um erro na avaliação da expressão, exibe "Erro"
            document.getElementById('resultado').innerText = "Erro";
            console.error(e);
            Math.PI
        }
    }
}

function mudarTema() {
    var temaSelecionado = document.getElementById("temas").value;
    var body = document.body;
    var calculadora = document.querySelector(".calculadora");

    body.classList.remove("escuro","claro","azul", "rosa", "ambar");
    calculadora.classList.remove("escuro","claro","azul", "rosa", "ambar");

    switch (temaSelecionado) {
        case "azul":
            body.classList.add("azul");
            calculadora.classList.add("azul");
            break;
        case "rosa":
            body.classList.add("rosa");
            calculadora.classList.add("rosa");
            break;
        case "ambar":
            body.classList.add("ambar");
            calculadora.classList.add("ambar");
            break;
        case "claro":
            body.classList.add("claro");
            calculadora.classList.add("claro");
            break;
        case "escuro":
            body.classList.add("escuro");
            calculadora.classList.add("escuro");
            break;
        default:
            break;
    }   
}