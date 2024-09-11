
//json: Javascript Object Notation, objeto literal Javascript 

// const pessoa = {
//     nome: 'João',
//     idade: 17
// }
// console.log(pessoa.nome)
// console.log(pessoa['idade'])
//rodar o código node --watch index.js

// const pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         bairro: 'Vila J',
//         numero: 50
//     }
// }
// console.log(pessoa.endereco.logradouro)
// console.log(pessoa['endereco']['numero'])
// console.log(pessoa.endereco['bairro'])



//porque usar o operador [] para acesso a membro?
// const aluno ={
//     'Seu nome': 'Danillo',
//     'Seu RA': 822124979
// }

// console.log(aluno['Seu nome'])


// const concessionaria = {
//     cnpj: '1234567890',
//     endereco: {
//         logradouro: 'Rua B',
//         bairro: 'Vila J',
//         numero: 50
//     },
//     veiculos:[
//         {
//             marca: 'VW',
//             modelo: 'Fusca',
//             ano: 1976,
//             preco:15000
//         },
//         {
//             marca: 'BMW',
//             modelo: 'M4',
//             ano: 2024,
//             preco: 80000
//         }
//     ]
// }
// console.log(concessionaria.veiculos[0])
// console.log(concessionaria.veiculos.find(veiculos => veiculos.modelo === 'Fusca').ano)




//1. usar a função forEach para exibir cada detalhe de cada veiculo
//2. adicionar um preco a cada veiculo e exibir o valor medio
// concessionaria.veiculos.forEach(v => {
//     console.log(`Marca: ${v.marca}`);
//     console.log(`Modelo: ${v.modelo}`);
//     console.log(`Ano: ${v.ano}`);
//     console.log('---');
// });

// /

// // Calcula a média dos preços
// const precoTotal = concessionaria.veiculos.reduce((ac, v) => ac.preco + v.preco)
// console.log(
//     total === 0 ? 
//     'Estoque vazio':
//     'Valor médio' ${total / concessionaria.veiculos.length}'
// )



// const numeros =[1, 2, 3]
// numeros.reduce((ac,v)=> ac + v)


//execução síncrona 
// console.log('Primeiro')
// console.log('Segundo')
// console.log('Terceiro')
// const a = 2 + 7
// const b = 5
// console.log(a + b)

// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     console.log(atualMais2Segundos)
//     while(new Date().getTime() <=atualMais2Segundos); //NO-OP   
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9

// setTimeout(() => {
//     const d = demorada()
//     console.log(`Demorada terminou: ${d}`)
// }, 500)

// const e = 2 + a + b
// console.log(e)

// //assicrono (não consegui copiar e entender, revisar esse assunto)
// //get /livros
// //localhost:3000/livros
// app.get('/livros')


//Callback Hell 
//processamento assicrono
const fs = require('fs')
const abrirArquivo = function(nomeArquivo){
    //funções callback
    const exibirConteudo = function(erro, conteudo){
        if(!erro){
            console.log(conteudo.toString())
        const dobro = Number(conteudo.toString())*2
        const finalizar = function(erro){
            if(erro)
                console.log(´Deu erro´)
        }
        fs.writeFile('dobro.txt', dobro.toString(),finalizar)
        }
        else
            console.log(`Erro: ${erro}`)
    }
    fs.readFile(nomeArquivo, exibirConteudo) 
}
abrirArquivo('arquivo.txt')



