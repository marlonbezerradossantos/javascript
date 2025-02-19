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

            //podemos criar um objeto contendo o numero e um array com uma cópia do numero de pessoas de cada sexo por grupo (podemos mandar essa copia a partir da section e mandar para um array global), assim quando houver a saída basta subtrairmos 
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

            
            //mandar uma cópia disso para um objeto global contendo nomeado por numeros caso passem na validação
            const sections = [[groups['M'], groups['m']], [groups['F'], groups['f']]]
             
            const final = []
            function distribui(n) {
                let distribute = 0

                if(sections[n][0] >= 1) {  //separamos 1 adulto para as crianças
                    sections[n][0] -= 1
                    distribute += 1
                }

                //talvez fazer esta validação abaixo lá em cima seja o ideal
                if(distribute + sections[n][1] > capacity) {
                    console.log('deu ruim') //aqui validamos se haverá espaço suficiente para
                                            //uma seção por genero(se caiu aqui entao n há), podemos jogar umas crianças para o outro lado
                } else {
                    distribute += sections[n][1]
                    sections[n][1] = 0;
                    return distribute
                }
                
            }

            for(let gender in sections) {
                final.push(distribui(gender))
            }
            console.log(final)

        
            
            
            // se chegar aqui como FALSE o grupo será negado e nenhum número será atribuido
           
        } 
       
    }
    
}

//bathhouse(5, ["MFmf", "MmFfff", "1", "2"])
//bathhouse(5, ["mmmmM", "mmmmmmmM", "m", "1", "2"])
bathhouse(5, ['MmmmmmmmFfff'])
//bathhouse(5, ["MFmf", "MmFfff", "mmmm", "FFFFF", "1", "2"])

