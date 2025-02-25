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
    let final = []
    const acceptedGroups = []
    const situation = [0, 0]
    let id = 1;
    for(let event of events) { //itera sobre todos os eventos
        
        if(Number.isInteger(Number(event))) {
            //identifica eventos de saída
            for(let exit of acceptedGroups) {
                if(exit.id === Number(event)) {
                    situation[0] -= exit['M'] + exit['m']
                    situation[1] -= exit['F'] + exit['f']
                }
            }
            
            //console.log(acceptedGroups)
        } else {
            //identifica eventos de entrada
            const groups = {
                "m": 0,
                "f": 0,
                "M": 0,
                "F": 0,
            }
            let approved = true;
            for(let group in groups) { //separamos crianças e adultos por genero em um objeto
                for(let pessoa of event) {
                    if(group === pessoa){
                        groups[group]++
                    }
                }
            }

            
            
            // DAQUI PRA BAIXO SERÃO FEITAS AS VALIDAÇÕES
            let totalPeople = 0
            for(let iterateGroups in groups) { //aqui vemos quantas pessoas tentam entrar
                totalPeople += groups[iterateGroups]
            }
            
            if(groups['M'] === 0 && groups['m'] > 0) {
                groups['f'] += groups['m']
                groups['m'] = 0
            } else if(groups['F'] === 0 && groups['f'] > 0) {
                groups['m'] += groups['f'] 
                groups['f'] = 0
            }

            if(groups['M'] === 0 && groups['F'] === 0) { //Garantimos que há ao menos um 
                approved = false                         //adulto para acompanhar crianças.
            }

            const situationTotalSpace = situation[0] + situation[1];
            if(situationTotalSpace + totalPeople > capacity * 2) { 
                //garantimos que há espaço para todos nas seções independentemente de gênero
                approved = false
            }

            if(groups['M'] + situation[0] > capacity ||
            groups['F'] + situation[1] > capacity) {
                approved = false
            }


            const sections = [[groups['M'], groups['m']], [groups['F'], groups['f']]]
            const gendersControl = []
            
            let childsLeftover = [0, 0];
            function distribui(n) {
                let distribute = 0

                // if(sections[n][0] === 0 && sections[n][1] > 0) {
                //     if(n === 0) {
                //         sections[1][1] += sections[n][1]
                //         sections[n][1] = 0
                //     } else {
                //         sections[0][1] += sections[n][1]
                //         sections[n][1] = 0
                //     }
                // }

                if(sections[n][0] >= 1) {  //separamos 1 adulto para as crianças
                    distribute += 1
                    sections[n][0] -= 1
                }

                if(distribute + sections[n][1] > capacity) {
                    //validamos se há espaço suficiente para uma seção por gênero e separamos as crianças que sobraram em uma variavel global
                    //sections[n][1] -= (capacity - distribute);
                    childsLeftover[n] = (sections[n][1] + distribute) - 5
                    return 5
                    
                } else {
                    distribute += sections[n][0] + sections[n][1] 
                    return distribute
                }
                
            }

            for(let gender in sections) {
                gendersControl.push(distribui(gender))
                
            }
            // agora distribuiremos os leftovers e se caso não houver jeito de equilibrar as seções, vamos dar um FALSE para o "approved" o que irá negar a entrada no grupo
            if(childsLeftover[0] > 0) {
                gendersControl[1] += childsLeftover[0] 
            } else if(childsLeftover[1] > 0) {
                gendersControl[0] += childsLeftover[1]
            }
            
        
            // se chegar aqui como FALSE o grupo será negado e nenhum número será atribuido
           if(approved === true) {
                //console.log('grupo aceito:', gendersControl)
                situation[0] += gendersControl[0]
                situation[1] += gendersControl[1]
                groups.id = id
                id++
                acceptedGroups.push(groups)
                
           }
        } 
    final.push([situation[0], situation[1]])
    }
    
    
    
    return final;
}

console.log(bathhouse(5, ["Mmmf", "Fmm", "2", "Mff", "1", "3"]))
//expected: [[4,0], [4,3], [4,0], [4,0], [0,0]] 

// no teste acima deu errado porque não havia adulto para supervisionar a menina na outra seção, teremos de criar outra validação de alguma forma (fica pra você ae)