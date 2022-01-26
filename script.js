//1 - crie uma função que exiba uma mensagem no console

function mostrarNome (name){
    console.log(`Olá, ${name}!`)
}

mostrarNome(`Dandara`)

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console


function myName(nome){
    console.log(`Olá, eu sou ${nome}, uma pessoa que gosta de ficar bem com todos.`)
}

myName(`Lidiane`)

//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console

function perfil(name, number, music){
    console.log(`Olá, me chamo ${name}`)
    console.log(`Eu tenho ${number} anos`) 
    console.log(`O meu estilo músical preferido é o ${music}`)
}

perfil(`Lidiane`, `33`, `louvor`)

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function preference(film, music){
    console.log(`Preferências:`)
    console.log(`O filme ${film} é o meu preferido`) 
    console.log(`A música ${music} é a minha favorita`)
}

preference(`extraordinário`,`Deus Proverá`)

//5 - crie uma função que retorne o triplo do número recebido no (parâmetro)

function soma(x, y){
    return x * y
}
console.log(soma(3, 10))
console.log(soma(3,20))
console.log(soma(3,15))

