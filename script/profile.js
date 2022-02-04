import { urlUsers as endpoint } from "./url.js";

const form = document.querySelector('#formularioPerfil');
const bntEditar = document.querySelector('#btnEditar');
document.getElementById('inputId').style.display = 'none';

const capturarDatos = () => {
    const image = document.getElementById('inputImagen').value;
    const name = document.getElementById('inputName').value;
    const lastName = document.getElementById('inputLastName').value;
    const email = document.getElementById('inputEmail').value;

    const profile = {
        image, 
        name,
        lastName,
        email
    }

    console.log(profile)
    return profile;
}

const profileFoto = document.querySelector('.profileFoto');
const profileNombre = document.querySelector('.profileNombre');

const getProfile = async () => {
    const resp = await fetch(endpoint)
    const data = await resp.json()

    data.forEach(element => {
        const {imagen, nombre, apellido} = element;
        profileNombre.innerHTML = '';
        profileFoto.innerHTML = `<img class="profileFoto" src=${imagen} `;
        profileNombre.innerHTML = `<p class="profileNombre">${nombre} ${ apellido}</p>`;        
    });
}

window.addEventListener("DOMContentLoaded", getProfile);

document.getElementById('inputId').style.display = 'none';

form.addEventListener('submit', async (e) => {
    console.log("probandooooo")
    e.preventDefault()
    const objeto = capturarDatos()

    await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
});

bntEditar.addEventListener('click', async () => {
    const dataModificar = capturarDatos()
    const {imagen, nombre, apellido, correo,} = dataModificar

    if (imagen === "", nombre === "", apellido === "", correo === ""){
        alert("Llenar todos los campos")
    } else {
        const id = document.getElementById('inputId').value 

        await fetch(endpoint + id, {
            method: 'PUT',
            body: JSON.stringify(dataModificar),
            headers: {
                'Content-Type':'application/json; charset=utf-8'
            }
        })
    }
})




