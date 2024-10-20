import {saveTasks,} from './firebase.js'

window.addEventListener('DOMcontentLoaded', () =>{
    
})

const iniciar = document.getElementById('iniciar')

//Guardar los datos: correo y contraseña 
iniciar.addEventListener('submit', (e) =>{
    e.preventDefault()
    //console.log('enviado')
    const correo = iniciar['correo']
    const contraseña = iniciar['contraseña']
    //console.log (correo.value, contraseña.value)

    saveTasks(correo.value, contraseña.value)
    iniciar.reset()
})


