"use strict"
// criar descrição dps tee hee

function bathhouse(capacity, events) {
    let final = []
    const acceptedGroups = []
    const situation = [0, 0]
    let id = 1;

    //itera sobre todos os eventos
    for(let event of events) { 
        
        if(Number.isInteger(Number(event))) { //identifica eventos de saída
            
            for(let exitgroup of acceptedGroups) {
                if(Number(event) === exitgroup.id) {
                    situation[0] -= exitgroup['M'] + exitgroup['m']
                    situation[1] -= exitgroup['F'] + exitgroup['f']
                }
            }

        } else { //identifica eventos de entrada
    
            const atualGroup = {
                "m": 0,
                "f": 0,
                "M": 0,
                "F": 0,
            } 

            //separamos crianças e adultos por genero em um objeto
            let isApproved = true;
            for(let gender in atualGroup) {
                for(let peopleOfEvent of event) {
                    if(gender === peopleOfEvent){
                        atualGroup[gender]++
                    }
                }
            }
            
            // DAQUI PRA BAIXO SERÃO FEITAS AS VALIDAÇÕES

            //aqui vemos quantas pessoas tentam entrar
            let totalPeopleEntering = 0
            for(let iterateActualGroup in atualGroup) { 
                totalPeopleEntering += atualGroup[iterateActualGroup]
            }
            
            //aqui verificamos se há adulto do mesmo genero das crianças do grupo, se não houver e houver um adulto do genero oposto entao a criança é colocada junto do responsavel
            if(atualGroup['M'] === 0 && atualGroup['m'] > 0) {
                atualGroup['f'] += atualGroup['m']
                atualGroup['m'] = 0
            } else if(atualGroup['F'] === 0 && atualGroup['f'] > 0) {
                atualGroup['m'] += atualGroup['f'] 
                atualGroup['f'] = 0
            }
            
            //Garantimos que há ao menos um adulto para acompanhar crianças.
            if(atualGroup['M'] === 0 && atualGroup['F'] === 0) { 
                isApproved = false                         
            }

            //garantimos que há espaço para todos nas seções independentemente de gênero
            const situationTotalPeople = situation[0] + situation[1]; 
            if(situationTotalPeople + totalPeopleEntering > capacity * 2) { 
                isApproved = false
            }

            //veriificamos se o total de pessoas de um gênero ultrapassa a capacidade se uma seção, se sim e pudermos distribuir crianças para equilibrar então nós passamos elas para a outra seção contanto que haja um responsavel, caso contrario nós negamos o grupo.
            if(atualGroup['M'] + atualGroup['m'] + situation[0] > capacity ||
            atualGroup['F'] + atualGroup['f'] + situation[1] > capacity) {
                const enteringGroupSituation = [atualGroup['M'] + atualGroup['m'], atualGroup['F'] + atualGroup['f']]
                if(enteringGroupSituation[1] + situation[1] > capacity && atualGroup['M'] > 0) {
                    const leftoverChild = enteringGroupSituation[1] + situation[1] - capacity
                    atualGroup['f'] -= leftoverChild
                    atualGroup['m'] += leftoverChild
                } else if(enteringGroupSituation[0] + situation[0] > capacity && atualGroup['F'] > 0) {
                    const leftoverChild = enteringGroupSituation[0] + situation[0] - capacity
                    atualGroup['m'] -= leftoverChild
                    atualGroup['f'] += leftoverChild
                } else {
                    isApproved = false
                }
            }

            //criamos um array contendo sendo: [[homens, meninos], [mulheres, meninas]]
            const sections = [[atualGroup['M'], atualGroup['m']], [atualGroup['F'], atualGroup['f']]]
            const gendersControl = []
            
            let childsLeftover = [0, 0];

            //função que distribui as pessoas do grupo que tenta entrar
            function distribui(n) {
                let distribute = 0

                //separamos 1 adulto para as crianças
                if(sections[n][0] >= 1) {  
                    distribute += 1
                    sections[n][0] -= 1
                }

                //validamos se há espaço suficiente para uma seção por gênero e separamos as crianças que sobraram em uma variavel global
                if(distribute + sections[n][1] > capacity) {
                    childsLeftover[n] = (sections[n][1] + distribute) - 5
                    return 5
                } else {
                    distribute += sections[n][0] + sections[n][1] 
                    return distribute
                }
            }

            //atribuimos o grupo atual ao array a ser retornado
            for(let gender in sections) {
                gendersControl.push(distribui(gender))
            }
        
            //distribuimos as crianças que sobraram em seus respectivos lugares
            if(childsLeftover[0] > 0) {
                gendersControl[1] += childsLeftover[0] 
            } else if(childsLeftover[1] > 0) {
                gendersControl[0] += childsLeftover[1]
            }

            // se chegar aqui como FALSE o grupo será negado e nenhum número será atribuido
            if(isApproved === true) {
                    situation[0] += gendersControl[0]
                    situation[1] += gendersControl[1]
                    atualGroup.id = id
                    id++
                    acceptedGroups.push(atualGroup)
            }
        } 
        final.push([situation[0], situation[1]])
    }
    return final;
}

console.log(bathhouse(5, [["FFfF","1","MmffF","m","2","FFF","3","mfm","FMFMFFFF"]]))
 

