(function(){
    const elementoPai = document.querySelector('.content-section')
    const newElement = document.createElement("p")
    newElement.className = 'parag'
    newElement.innerHTML = 'Hello World!'
    const card2 = document.querySelector('.card-2')
    elementoPai.insertBefore(newElement, card2)
    console.log(newElement.textContent)
})()
