const escola = "Cod3r"

console.log(escola.charAt(4)) //charAt retona a letra no índice passado no parâmetro

console.log(escola.charCodeAt(4)) //retonar o valor da letra na tabela asc 

console.log(escola.indexOf(3)) //retornar o indice onde o valor '3' passado no parametro está na palavra escola


console.log(escola.substring(1)) //retorna a palavra incluindo a letra no indice 1 até o final

console.log(escola.substring(0,3)) //retorna a palavra incluindo a letra na posicao 1 até o índice 3 sem inlcuir o indice 3

console.log('Escola '.concat(escola).concat("!")) //concatenar

console.log('Escola '+ escola + "!")

console.log(escola.replace(3,'e')) // Ele trocou o valor 3 pela letra 'e' em Cod3r

console.log(escola.replace(/\d/,'e')) //Substitui todos os digitos  dentro do texto pela letra 'e'

console.log(escola.replace(/\w/g, 'e')) // Substitui todos os numeros e letras pela letra 'e', a letra 'g' significa que é global

console.log('Ana,Maria,Pedro'.split(',')) //transformando em array o conjunto de palavras separando por virgula

console.log('Ana,Maria,Pedro'.split(/,/)) //regex 