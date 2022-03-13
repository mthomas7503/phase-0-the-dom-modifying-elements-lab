const main = document.querySelector('#main')

main.remove()

const header = document.createElement('h1')

document.body.append(header)

function createID(idName) {
    const h1= document.querySelector('h1')
    return h1.id = idName;}

createID('victory')

const newHeader = document.getElementById('victory')

newHeader.innerText = "YOUR-NAME is the champion"