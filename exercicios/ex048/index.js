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
    const sections = [capacity, capacity]
    
    const capacityTotal = capacity * 2
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
             
         
            // separar homens e mulheres em um objeto? === [{homens}, {mulheres}]
            // sempre refletir no array a soma dos generos? 
            //iterar distribuir cada um segundo seu genero e o requerimento
            
            
            
            
            // se chegar aqui como FALSE o grupo será negado e nenhum número será atribuido
            console.log(groups, ": ", approved)
        } 
        console.log(sections)
    }
    
}

//bathhouse(5, ["MFmf", "MmFfff", "1", "2"])
//bathhouse(5, ["mmmmM", "mmmmmmmM", "m", "1", "2"])
bathhouse(5, ['MmmmFff'])
//bathhouse(5, ["MFmf", "MmFfff", "mmmm", "FFFFF", "1", "2"])

