import { TALLER } from './data.js'
console.log(TALLER)

const container = document.getElementById('container')
leerData(TALLER)

function leerData(TALLER) {

    TALLER.forEach(data => {
        const { id, imagen } = data

        const card = document.createElement('div')
    
        card.innerHTML = `

        <div class="">
        <div class="imagen">
            <img src=${imagen} alt="">
            <div class="overlay">
                <h2><a href="https://www.instagram.com/marcelarecicladora/" class="moti">Instagram</a>
                </h2>
            </div>
        </div>
        </div>
        `
        container.appendChild(card)
    });
}