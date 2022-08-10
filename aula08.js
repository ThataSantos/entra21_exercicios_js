var arrays = [1, 2, 3, 5, 6, "thabata"]
let strings = "oi professor";
let numbers = 42;
let booleans = true
var objeto = {
    nome: "qualquer",
    idade: numbers,
    lista: arrays
}

listar();

function listar(variaveis) {


    console.log("essas são as variaveis dentro de listar :", strings, typeof (strings), numbers,
        typeof (numbers), booleans, typeof (booleans), arrays, typeof (arrays), objeto, typeof (objeto));
}
console.log("E listar é uma ", typeof (listar));

function ifs() {
    let strings = " oi professor";
    let numbers = 42;
    let booleans = true
    if (typeof (strings) == 'string') {
        console.log("é sim");
    } else {
        console.warn("deu ruim");
    }
    if (typeof (numbers) == 'number') {
        console.log("é sim");
    } else {
        console.warn("deu ruim");
    }
    if (typeof (booleans) == 'boolean') {
        console.log("é sim");
    } else {
        console.warn("deu ruim");
    }
    if (typeof (arrays) == 'object') {
        console.log("é sim");
    } else {
        console.warn("deu ruim", typeof (arrays));
    }
    if (typeof (objeto) == 'object') {
        console.log("é sim");
    } else {
        console.warn("deu ruim", typeof (objeto));
    }
    if (typeof (listar) == 'function') {
        console.log("é sim");
    } else {
        console.warn("deu ruim");
    }
}

function switch_string() {

    switch (strings) {
        case "professor":
            console.log("escolheu professor");
            break;
        case "oi professor":
            console.log("escolheu oi professor");
            break;
        default:
            console.warn("escolheu errado");
            break;
    }
}

function switch_number() {
    switch (numbers) {
        case 1:
            console.log("escolheu 1");
            break;
        case 42:
            console.log("escolheu 42 a resposta universal");
            break;
        default:
            console.warn("escolheu errado");
            break;
    }

}

function percorrer_lista_for() {
    for (let contador = 0; contador < arrays.length; contador++) {
        const element = arrays[contador];
        console.log(contador, arrays[contador]);
    }

}

function percorrer_lista_foreach() {
    arrays.forEach(item => {
        console.log("Repetindo com forEach sem conta indíce " + item);
    });
}
console.group('Manipular html com Javascript Puro');
let ler = document.getElementById("paragrafo_ler")
console.log(ler);
function add1(conteudo){
    let enter = document.createElement("br");
    document.body.append(enter);
    let elemento = document.createElement("div");
    elemento.textContent = conteudo;
    document.body.append(elemento);
}

console.groupEnd();



$("#apis").on("click ", () => {
    $.ajax(
        {
            url: "https://protected-taiga-89091.herokuapp.com/api/card",
            type: "get",
            success: (retorno) => {
                console.log(retorno.data);
                cartas = retorno.data
                listar_cartas(cartas);
            },
            error: (errou) => {
                console.warn("Algo não esta certo ", errou);
            }
        }
    )
    function listar_cartas(cartas) {
        cartas.forEach(carta => {
            console.log(carta);
        });
    }
})









