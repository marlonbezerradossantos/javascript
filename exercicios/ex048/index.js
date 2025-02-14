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
    const arrayGroups = []
    let numberAssignment = 1
    for(let event of events) { //itera sobre todos os eventos
        let approved = true;
        const groups = {
            "m": 0,
            "f": 0,
            "M": 0,
            "F": 0,
            "number": 0
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
            
            
            groups["number"] = numberAssignment
            numberAssignment++
            arrayGroups.push(groups)

            // cada grupo é avaliado separadamente aqui(estamos lidando com um objeto aqui)
            console.log('inicial: \nsecao:', sections[0], 'homens:',groups['m'] )
            for(; groups['m'] > 0; groups['m']--){
                sections[0]--
                if(sections[0] < 0){
                    approved = false
                }

                if(approved === false) {
                    arrayGroups.pop()
                }
                // debugar este "for"
            }
     
            
        } 
    }
    console.log(arrayGroups)
}

//bathhouse(5, ["MFmf", "MmFfff", "1", "2"])
bathhouse(5, ["mmmm", "mmmmmmm", "m", "1", "2"])
//bathhouse(5, ["MFmf", "MmFfff", "mmmm", "FFFFF", "1", "2"])

