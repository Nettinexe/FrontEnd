const resultado = confirm("Deseja ver a mensagem secreta?");
// Linha 2: declara e inicializa uma variável.
const mensagem = document.getElementById("mensagem");
// Linha 3: declara e inicializa uma variável.
const mensagem2 = document.getElementById("mensagem2");

// Linha 5: condição de controle (if/else).
if (resultado){
// Linha 6: criação ou alteração de conteúdo do DOM.
    mensagem.innerHTML = "Você confirmou! Que bom ter você aqui."
// Linha 7: executa uma operação (verifique o código para detalhes).
}
// Linha 8: condição de controle (if/else).
else{
// Linha 9: criação ou alteração de conteúdo do DOM.
    mensagem2.innerHTML = "Tudo bem! Talvez da próxima vez."
// Linha 10: executa uma operação (verifique o código para detalhes).
};

// Linha 12: declara e inicializa uma variável.
const paragrafo = document.getElementById("texto");
// Linha 13: interação com o DOM, janela ou console.
console.log(paragrafo)
// Linha 14: declara e inicializa uma variável.
const btnpeq = document.getElementById("bt-peq");
// Linha 15: declara e inicializa uma variável.
const btnmed= document.getElementById("bt-med");
// Linha 16: declara e inicializa uma variável.
const btngg= document.getElementById("bt-gg");

// Linha 18: define uma função.
btnpeq.addEventListener("click", () =>{
// Linha 19: executa uma operação (verifique o código para detalhes).
    paragrafo.style.fontSize = "12px" ;
// Linha 20: executa uma operação (verifique o código para detalhes).
});
// Linha 21: define uma função.
btnmed.addEventListener("click", () =>{
// Linha 22: executa uma operação (verifique o código para detalhes).
    paragrafo.style.fontSize = "18px" ;
// Linha 23: executa uma operação (verifique o código para detalhes).
});
// Linha 24: define uma função.
btngg.addEventListener("click", () =>{
// Linha 25: executa uma operação (verifique o código para detalhes).
    paragrafo.style.fontSize = "26px" ;
// Linha 26: executa uma operação (verifique o código para detalhes).
});
// Linha 27: declara e inicializa uma variável.
const frase = document.getElementById("frase");
// Linha 28: declara e inicializa uma variável.
const btn_cor = document.getElementById("btn-cor")
// Linha 29: define uma função.
frase.addEventListener("dblclick", () =>{
// Linha 30: executa uma operação (verifique o código para detalhes).
    frase.style.color = "blue";
// Linha 31: executa uma operação (verifique o código para detalhes).
});
// Linha 32: define uma função.
btn.addEventListener("dblclick", () =>{
// Linha 33: executa uma operação (verifique o código para detalhes).
    frase.style.color = "blue";
// Linha 34: executa uma operação (verifique o código para detalhes).
});
// Linha 35: declara e inicializa uma variável.
const texto = document.getElementById("texto");
// Linha 36: declara e inicializa uma variável.
const btnoc = document.getElementById("btn-ocultar");
// Linha 37: declara e inicializa uma variável.
const btnmost = document.getElementById("btn-mostrar");
// Linha 38: define uma função.
btnmost.addEventListener("click", () =>{
// Linha 39: executa uma operação (verifique o código para detalhes).
    texto.style.display = "block";
// Linha 40: executa uma operação (verifique o código para detalhes).
});
// Linha 41: define uma função.
btnoc.addEventListener("click", () =>{
// Linha 42: executa uma operação (verifique o código para detalhes).
    texto.style.display = "none";
// Linha 43: executa uma operação (verifique o código para detalhes).
});
// Linha 44: declara e inicializa uma variável.
const btn_img = document.getElementById("btn_img");
// Linha 45: declara e inicializa uma variável.
const img_messi = document.getElementById("img_1");

// Linha 47: define uma função.
btn_img.addEventListener("click", () =>{
// Linha 48: executa uma operação (verifique o código para detalhes).
    img_messi.src = "cr7.png"
// Linha 49: executa uma operação (verifique o código para detalhes).
});
// Linha 50: declara e inicializa uma variável.
const btn_contador = document.getElementById("btn_contador");
// Linha 51: declara e inicializa uma variável.
const contador = document.getElementById("contador");
// Linha 52: declara e inicializa uma variável.
let estado_contador = 0;

// Linha 54: define uma função.
btn_contador.addEventListener("click", () =>{
// Linha 55: executa uma operação (verifique o código para detalhes).
    estado_contador +=1;
// Linha 56: criação ou alteração de conteúdo do DOM.
    contador.innerHTML = `Cliques: ${estado_contador}`;
// Linha 57: executa uma operação (verifique o código para detalhes).
})
// Linha 58: declara e inicializa uma variável.
let inputAno = document.getElementById("input");
// Linha 59: declara e inicializa uma variável.
const btn = document.getElementById("btn_calc_idade");
// Linha 60: declara e inicializa uma variável.
let displayResultado = document.getElementById("resultado");

// Linha 62: define uma função.
btn.addEventListener("click", () =>{
// Linha 63: declara e inicializa uma variável.
    const anoNasc = parseInt(inputAno.value);
// Linha 64: declara e inicializa uma variável.
    const idade = 2025 - anoNasc

// Linha 66: criação ou alteração de conteúdo do DOM.
    displayResultado.innerHTML = `Sua idade aproximada é: ${idade} anos.`
// Linha 67: executa uma operação (verifique o código para detalhes).
})

