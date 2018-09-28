const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!` //interpolar linha - converter a variavel dentro do proprio texto
console.log(concatenacao,template)

//expressoes

console.log(`1 + 1 = ${1 + 1}`)

//função
const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('Cuidado')}!`)