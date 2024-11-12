let alunos = ['Bia', 'Áquila', 'Alexonderson', 'Mikelly', 'Dsordes']

console.log(alunos)

alunos.push('Philippe')

console.log(alunos)

alunos.forEach(item=>{
    console.log(item)
})


let pessoas = [{
    nome:'Márcia',
    idade:54,
    cpf:'123-4',
},{
    nome:'Márcio',
    idade:59,
    cpf:'123-5',
}]

console.log(pessoas[1].cpf)
