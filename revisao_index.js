//** JSON **

//JSON é basicamente uma forma de converter um objeto em texto e o contrário também, um texto em um objeto.

//Usado principalmente para transmitir dados entre sistemas de forma simples, já que o formato de texto é lido por praticamente toda linguagem de programação.

//JSON.parse() -> Converte TEXTO no padrão JSON em OBJETOS
//JSON.stringify() -> Converte OBJETOS em TEXTO padrão JSON

// // OBJETO CARRO
const carro = {
    marca: "volkswagen",
    modelo: "fusca",
    ano: 1976,
    motor: ["1.3","1.5","1,6"]
}

// Tentando exibir o objeto diretamente no HTML (aparecerá como [object Object])
document.getElementById('root_html').innerHTML = carro

// Convertendo o objeto em um texto
let texto = JSON.stringify(carro); 
//inseriu o texto no html
document.getElementById('root_html_2').innerHTML = texto

//convertendo o texto em objeto 
let objeto = JSON.parse(texto)
//acessando um valor desse objeto 
console.log(objeto.modelo)

console.log(objeto.motor[2])

//----------------------
//método no javascript para fazer uma requisição ao um site sem acessar pelo navegador
const ajax = new XMLHttpRequest()
//pegar as informações do site
ajax.open('GET', 'https://viacep.com.br/ws/03805000/json/')
//enviar essa solicitação
ajax.send()

// Exibindo todas as informações da resposta JSON e o campo "logradouro"
        //ajax.onload = carregar as informações do site 
ajax.onload = function() {
    //Converte o texto recebido da resposta da requisição Ajax (this.responseText) em um objeto JavaScript.
    let objeto2 = JSON.parse(this.responseText)

    // Exibir todas as informações JSON no root_html_3
    document.getElementById('root_html_3').innerHTML = JSON.stringify(objeto2, null, 2) 
    //document.getElementById('root_html_3').innerHTML = ...: 
    //Exibe essa string dentro do elemento HTML.
    //---------------------------------------------------------------------------------------
    //JSON.stringify(objeto2, null, 2): Converte o objeto objeto2 de volta em uma string JSON formatada com indentação de 2 espaços.

    // Exibir apenas o logradouro no root_html_4
    document.getElementById('root_html_4').innerHTML = objeto2.logradouro
}
