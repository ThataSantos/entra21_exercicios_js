var arrays = [1, 2, 3, 5, 6, "thabata"]
let strings = " oi professor";
    let numbers = 42;
    let booleans = true
var objeto={
    nome:"qualquer",
idade:numbers,
lista:arrays
}

listar();

function listar(variaveis) {
    
   
    console.log("essas são as variaveis dentro de listar :", strings, typeof (strings), numbers,
        typeof (numbers), booleans, typeof (booleans), arrays, typeof (arrays), objeto, typeof(objeto));
}
console.log("E listar é uma ", typeof (listar));

function ifs(){
    let strings = " oi professor";
    let numbers = 42;
    let booleans = true
     if (typeof(strings) == 'string') {
        console.log("é sim");
     } else {
        console.warn("deu ruim");
     }
     if (typeof(numbers) == 'number') {
        console.log("é sim");
     } else {
        console.warn("deu ruim");
     }
     if (typeof(booleans) == 'boolean') {
        console.log("é sim");
     } else {
        console.warn("deu ruim");
     }
     if (typeof(arrays) == 'object') {
        console.log("é sim");
     } else {
        console.warn("deu ruim", typeof(arrays));
     }
     if (typeof(objeto) == 'object') {
        console.log("é sim");
     } else {
        console.warn("deu ruim", typeof(objeto) );
     }
     if (typeof(listar) == 'function') {
        console.log("é sim");
     } else {
        console.warn("deu ruim");
     }
}

