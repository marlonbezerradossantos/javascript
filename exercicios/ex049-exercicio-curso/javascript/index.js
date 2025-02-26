(function(){
    const elementoPai = document.querySelector('.content-section')
    console.log(elementoPai.lastElementChild)
    const newElement = document.createElement("p")
    newElement.className = 'card card2'
    newElement.innerHTML = 'Hello World!'
    elementoPai.appendChild(newElement)

})()
