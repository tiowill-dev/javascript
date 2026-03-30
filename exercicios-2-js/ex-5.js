/*Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,
a pessoa deve ser maior de idade e brasileira para ser aprovada.
Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.*/

const personOne =
    {nome: "joão", 
    idade: 18, 
    sexo:"masculino", 
    profissão: "N",
    nacionalidade:"brasileiro"}

    const personTwo = 
    {nome: "nathalia", 
    idade: 38, 
    sexo:"feminino", 
    profissão: "contadora",
    nacionalidade:"brasileira"}

    const personThri =
    {nome: "maria", 
    idade: 20, 
    sexo:"feminino", 
    profissão: "copeira",
    nacionalidade:"brasileira"}

    const personFor = 
    {nome: "richard", 
    idade: 30, 
    sexo:"masculino", 
    profissão: "empresario",
    nacionalidade:"americano"}

    const personFive = 
    {nome: "elza", 
    idade: 27, 
    sexo:"feminino", 
    profissão: "bartendder",
    nacionalidade:"brasileira"}

    if(personOne.idade >=18 && (personOne.nacionalidade === "brasileiro" ||personOne.nacionalidade === "brasileira")){
        console.log(`${personOne.nome} voce foi aprovado`)
    }
    else{console.log(`${personOne.nome} voce foi reprovado`)}

      if(personTwo.idade >=18 && (personTwo.nacionalidade === "brasileiro" ||personTwo.nacionalidade === "brasileira")){
        console.log(`${personTwo.nome} voce foi aprovado`)
    }
    else{console.log(`${personTwo.nome} voce foi reprovado`)}

      if(personThri.idade >=18 && (personThri.nacionalidade === "brasileiro" ||personThri.nacionalidade === "brasileira")){
        console.log(`${personThri.nome} voce foi aprovado`)
    }
    else{console.log(`${personThri.nome} voce foi reprovado`)}

      if(personFor.idade >=18 && (personFor.nacionalidade === "brasileiro" ||personFor.nacionalidade === "brasileira")){
        console.log(`${personFor.nome} voce foi aprovado`)
    }
    else{console.log(`${personFor.nome} voce foi reprovado`)}

      if(personFive.idade >=18 && (personFive.nacionalidade === "brasileiro" ||personFive.nacionalidade === "brasileira")){
        console.log(`${personFive.nome} voce foi aprovado`)
    }
    else{console.log(`${personFive.nome} voce foi reprovado`)}