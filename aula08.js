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

let ler = document.getElementById("paragrafo_ler")
console.log("Apenas o conteudo do texto", ler.textContent);
console.log(ler);
let paragrafos = [...document.getElementsByTagName("p")]
console.log("Lendo todos os paragrafos", paragrafos);
paragrafos.forEach(pagrafro => {
    console.log(pagrafro.textContent);
});
let classes1 = [...document.getElementsByClassName("card-body")]
console.log("Lendo todos os elementos com essa classe", classes1);
classes1.forEach(classe => {
    console.log(classe.innerHTML);
});


function addConteudo(conteudo){
    let enter = document.createElement("br");
    document.body.append(enter);
    let elemento = document.createElement("div");
    elemento.textContent = conteudo;
    document.body.append(elemento);
}
console.group("Ler conteudo com jQuery")
console.log($("#paragrafo_1"));
console.log($("#paragrafo_1").text());
console.groupEnd()

console.group("Altera conteudos com jQuery")
$("#paragrafo_2").text("Conteudo escrito com jQuery")
console.log($("#paragrafo_2").text());
console.groupEnd()

console.group("Ler varios conteudos com jQuery")
let lista = $("p")
console.log(lista);
console.log(lista.text());

$("p").each(function () {
    console.log(this.textContent);
})
console.groupEnd()

console.group("Escrever varios conteudos com jQuery")
$("li").text("li esacrito com jQuery")
console.groupEnd()



$("#aqui").append(
    $("<br>"),
    $("<b>", { text: "Texto negrito" }),
    $("<br>"),
    $("<i>", { text: "Texto Italico" })
)
console.groupEnd()

console.group('Mais de um item com jQuery');
$("<ul>").append(
    $("<li>", {
        text: "Item 1"
    }),
    $("<li>", {
        text: "Item 2"
    }),
    $("<li>", {
        text: "Item 3"
    })
).appendTo("#aqui2")
console.groupEnd();

$("<table>",{class: "table  table-striped table-bordered "}).append(
    $("<thead>").append($("<th>", { text: " coluna" }), $("<th>", { text: " coluna2" }), $("<th>", { text: " coluna3" })),
            $("<tbody>").append(
        $("<tr>").append($("<td>", { text: " linha" }), $("<td>", { text: " linha1" }), $("<td>", { text: " linha3" })),
        $("<tr>").append($("<td>", { text: " linha" }), $("<td>", { text: " linha1" }), $("<td>", { text: " linha3" }))
            )
).appendTo("#aqui3")
console.groupEnd();

console.group('Enventos de click em qulaquer lugar');
$("p").on("click", function () {
    alert("Opa!")
    
})
$("li").on("click",()=> {
console.warn("Clicou foi?");    
})

$("#ok").on("click", function () {
    alert("Está ok!")
})
console.groupEnd();

console.group('Exercicios com eventos');
$("#add").on("click", ()=> {
    $("<p>", {text:" Arouuuuuuuuuuuu!", class:"alert alert-danger"}).appendTo("#card-body")

})

$("#limpar").on("click", ()=>{
    $(".alert").remove()
})
console.groupEnd();

console.group('operações matematicas');
function calcular(operacao) {

    let a = Number(prompt("Primeiro Numero"));
  
    let b = Number(prompt("Segundo Numero"));
  
    switch (operacao) {
  
      case "+":
  
        somar(a, b);
  
        break;
  
      case "-":
  
          subtrair(a, b);
  
        break;
  
      case "*":
  
          multiplicar(a, b);
  
        break;
  
      case "/":
  
          dividir(a, b);
  
        break;
  
        default:
  
          alert("Essa operação nao existe :"+operacao)
  
          break;
  
    }
  
  }
  function somar(a, b) {
  
    console.log(Number(a) + Number(b));
  
  }
  
  function subtrair(a, b) {
  
    console.log(Number(a) - Number(b));
  
  }
  
  function multiplicar(a, b) {
  
    console.log(Number(a) * Number(b));
  
  }
  
  function dividir(a, b) {
  
    aleconsole.logrt(Number(a) / Number(b));
  
  }
console.groupEnd();

console.group('CRUD');
$("header .card-body a").attr("class", "btn btn-outline-success")
$("#update").hide();

let pessoas = [];
let update = null;

$("form").on("submit", function (event) {
  event.preventDefault();
  let dados = obterDados();

  if ($("#add").is(":visible")) {
    pessoas.push(dados);

    console.log("Added");
  } else {
    pessoas[pessoas.indexOf(update)] = dados;
    $("#add").toggle();
    $("#update").toggle();
    console.log("Updated");
  }
  escreverTabela();
  $("#clean").click();
});


function obterDados() {
    let nome = $("#nome").val();
    let idade = $("#idade").val();
    let cidade = $("#cidade").val();

    return {
        nome: nome,
        idade: idade,
        cidade: cidade,
    };
    console.log("recebi", nome, idade, cidade);
}

$("#clean").on("click", function () {
    $("#add").show();
    $("#update").hide();
  });

  function escreverTabela() {
    $("tbody").empty();
  
    pessoas.forEach((pessoa) => {
      $("tbody").append(
        $("<tr>").append(
          $("<td>", { text: pessoa.nome }),
          $("<td>", { text: pessoa.idade }),
          $("<td>", { text: pessoa.cidade }),
          $("<td>").append(
            $("<button>", {
              text: "Edit",
              class: "btn btn-outline-primary",
              click: function () {
                update = pessoa;
                $("#nome").val(pessoa.nome);
                $("#idade").val(pessoa.idade);
                $("#add").toggle();
                $("#update").toggle();
              },
            }),
            $("<button>", {
              text: "Delete",
              class: "btn btn-outline-danger",
              click: function () {
                pessoas.splice(pessoas.indexOf(pessoa), 1);
                escreverTabela();
              },
            })
          )
        )
      );
    });
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








