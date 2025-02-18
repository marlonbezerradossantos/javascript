"use strict"
// criar descrição dps tee hee

/*
name: "Family night. Jane, you go with dad and your little brother.",
capacity: 5, 
events: ["MFmf", "MmFfff", "1", "2"],
expected: [[2,2], [5,5], [3,3], [0,0]] 
*/

// bathhouse(5, ["MFmf", "MmFfff", "1", "2"])
function bathhouse(capacity, events) {
    //const sections = [capacity, capacity]
    
    
    let totalPeople = 0
    for(let event of events) { //itera sobre todos os eventos
        let approved = true;
        const groups = {
            "m": 0,
            "f": 0,
            "M": 0,
            "F": 0,
        }
        
        if(Number.isInteger(Number(event))) {
            //identifica eventos de saída
        } else {
            //identifica eventos de entrada
            for(let group in groups) {
                for(let pessoa of event) {
                    if(group === pessoa){
                        groups[group]++
                    }
                }
            }
            
            // DAQUI PRA BAIXO SERÃO FEITAS AS VALIDAÇÕES
            
            for(let iterateGroups in groups) {
                totalPeople += groups[iterateGroups]
            }

            if(groups['M'] === 0 && groups['F'] === 0) { //Garantimos que há ao menos um 
                approved = false                         //adulto para acompanhar crianças.
            }

            if(groups['M'] + groups['m'] > capacity || groups['F'] + groups['f'] > capacity) {
                approved = false //Garantimos que há espaço para todos os grupos por genero
            }

            
             
            const sections = [[groups['M'], groups['m']], [groups['F'], groups['f']]]
            
            //console.log(sections)
            // separar homens e mulheres em um objeto? === [{homens}, {mulheres}]
            // sempre refletir no array a soma dos generos? 
            //iterar distribuir cada um segundo seu genero e o requerimento
            //console.log(sections)
            const controle = []
            function distribui(n) {
                let distribute = 0

                

                if(sections[n][0] >= 1) {
                    sections[n][0] -= 1
                    distribute += 1
                }

                

                //talvez fazer esta validação abaixo lá em cima seja o ideal
                if(sections[n][0] + sections[n][1] > capacity) {
                    console.log('deu ruim')
                } else {
                    distribute += sections[n][1]
                    sections[n][1] -= sections[n][1]
                    return distribute
                }
                
            }

            for(let gender in sections) {
                controle.push(distribui(gender))
            }
            console.log(controle)

        
            
            
            // se chegar aqui como FALSE o grupo será negado e nenhum número será atribuido
           
        } 
       
    }
    
}

//bathhouse(5, ["MFmf", "MmFfff", "1", "2"])
//bathhouse(5, ["mmmmM", "mmmmmmmM", "m", "1", "2"])
bathhouse(5, ['MmmmmmmmFfff'])
//bathhouse(5, ["MFmf", "MmFfff", "mmmm", "FFFFF", "1", "2"])

