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
            let approved = true;
            for(let group in groups) { //separamos crianças e adultos por genero em um objeto
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

           
            if(totalPeople > capacity * 2) { 
                //garantimos que há espaço para todos nas seções independentemente de gênero
                approved = false
            }

            if(groups['M'] > 5 || groups['F'] > 5) {
                approved = false
            }

            //mandar uma cópia disso para um objeto global contendo nomeado por numeros caso passem na validação
            const sections = [[groups['M'], groups['m']], [groups['F'], groups['f']]]
             
            const final = []
            
            let childsLeftover = [[0], [0]];
            function distribui(n) {
                let distribute = 0

                if(sections[n][0] >= 1) {  //separamos 1 adulto para as crianças
                    distribute += 1
                    sections[n][0] -= 1
                }

                if(distribute + sections[n][1] > capacity) {
                    //validamos se há espaço suficiente para uma seção por gênero e separamos as crianças que sobraram em uma variavel global
                    //sections[n][1] -= (capacity - distribute);
                    childsLeftover[n][0] = (sections[n][1] + distribute) - 5
                    //return sections[n][1] + distribute
                    return 5
                    console.log('deu ruim') //aqui validamos se haverá espaço suficiente para
                                            //uma seção por genero(se caiu aqui entao n há), podemos jogar umas crianças para o outro lado
                } else {
                    distribute += sections[n][0] + sections[n][1] 
                    return distribute
                }
                
            }

            for(let gender in sections) {
                final.push(distribui(gender))
                
            }

            // agora distribuiremos os leftovers e se caso não houver jeito de equilibrar as seções, vamos dar um FALSE para o "approved" o que irá negar a entrada no grupo
            
            if(childsLeftover[0] > 0) {
                final[1] += childsLeftover[0][0]
                childsLeftover[0] = 0
            } else if(childsLeftover[1] > 0) {
                final[0] += childsLeftover[1][0]
                childsLeftover[1] = 0
            }

            // console.log('leftover:', childsLeftover)
            // console.log(final)
            // console.log(approved)
        
            // se chegar aqui como FALSE o grupo será negado e nenhum número será atribuido
           if(approved === false) {
                console.log('grupo negado:', final)
           } else {
                console.log('grupo aceito:', final)
           }
        } 
       
    }
    
}

//bathhouse(5, ["MFmf", "MmFfff", "1", "2"])
//bathhouse(5, ["mmmmM", "mmmmmmmM", "m", "1", "2"])
//bathhouse(5, ["MFmf", "MmFfff", "mmmm", "FFFFF", "1", "2"])
//bathhouse(5, ['MMMMmFFFFf'])
bathhouse(5, ["mmmFff"])

//Encontrado um possível problema, precisávamos ter considerado que o array que representa as seções precisam servir para todos os eventos, ou seja, a cada iteração no for principal esse array precisa ser alterado com o número de pessoas que foram aprovadas de acordo com seu sexo(podemos somar isso no final de cada iteração mas antes precisamos de uma variavel global que reflita as seções definitivamente, então caso um grupo mesmo que aceito precisará passar por outra validação que indicará se de fato existe espaço para todos entrarem considerando os grupos ja aceitos anteriormente que estão no banho)

//ferrou, a lógica esta bem errada, estavamos considerando somente a entrada de um unico grupo que preencheria a casa toda assim que entrasse - não necessariamente preencher - (falta de atenção) precisaremos revisar toda a lógica e se estiver errado aproveitar o que der 

// provavelmente se dermos um jeito de transformar a variavel "final" em uma global nós poderemos minimizar as alterações na lógica

// a variavel "capacity" pode ser alterada para uma reflexão do estado atual da casa de banho a cada iteração

// podemos refazer a lógica das primeiras validações antes da funtion para ficarem de acordo com a var global que reflete a casa de banho a cada iteração

//basicamente precisamos refazer as validações baseado em como esta a casa de banho a cada iteração deve ser simples










