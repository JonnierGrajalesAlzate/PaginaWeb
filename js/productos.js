import {Gusto} from './data.js'
console.log(Gusto)

const container = document.getElementById('container')
leerData(Gusto)

 function leerData  (Gusto){
    
    Gusto.forEach(data => {
        const {id,nombre,descripcion,imagen}=data

        const card = document.createElement('div')
        card.classList.add('nombreclase');
        card.innerHTML = `

        <figure class="figure">
            
             <img src=${imagen} alt="Mountains">
           <figcaption class="figcaption">${descripcion}</figcaption>
        </figure>
        `
        container.appendChild(card)
    });
}