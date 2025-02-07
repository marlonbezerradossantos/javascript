"use strict"
// criar descrição dps tee hee

/*
name: "Family night. Jane, you go with dad and your little brother.",
capacity: 5, 
events: ["MFmf", "MmFfff", "1", "2"],
expected: [[2,2], [5,5], [3,3], [0,0]] 
*/

function bathhouse(capacity, events) {
    const sections = [capacity, capacity]
    for(let event of events) { //itera sobre todos os eventos
        
        const groups = {
            "M": 0,
            "m": 0,
            "F": 0,
            "f": 0
        }
        if(event.includes("M", "F", "m", "f")) { //para eventos de entrada
            for(let group in groups){//itera sobre o objeto de grupos e os eventos para contar
                for(let people of event){  
                    if(people === group){
                        groups[group]++
                    }
                }
            }
            console.log(sections)
            for(let group in groups) { //iteramos novamente no objeto para distribuir pessas
                //provavelmente este for será inutil, precisaremos agora atender todas as condições para a entrada do grupo, se eles falharem então teremos que dar uma flag para rejeitar o grupo inteiro. Use um length para descobrir o numero total de pessoas e/ou o numero exato de pessoas do sexo masculino e feminino e então só com esta verificação preliminar conseguiremos rejeitar ou aceitar e seguir para outros requisitos de entrada, lembre-se que a entrada ou saída dependerão de um TRUE ou FALSE. Agora é contigo, já pensei o suficiente por hoje boa sorte.
            }
        } else { //para eventos de saída
            
        }
    }
}

bathhouse(5, ["MFmf", "MmFfff", "1", "2"])