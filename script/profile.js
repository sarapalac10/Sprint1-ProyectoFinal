import getPoint from "./point.js";
import {urlUsers} from "./url.js";

// document.querySelector('#formularioPerfil').visibility = 'none';
document.getElementById('inputId').style.display = 'none'; 

const form = document.querySelector('#formularioPerfil');
const edit = document.querySelector('#btnEditar');
const renderUSer = document.querySelector('.userRender');

const renderUser = async () => {
    const data = await getPoint(urlUsers)
    data.forEach(element => {
        const { imagen, nombre, apellido } = element;
        renderUSer.innerHTML += `
        <div class="col-12">
            <img src="${imagen}" class="profileFoto" alt="">
        </div>
        <div class="col-12 Text">
            <h5 class="profileNombre">${nombre} ${apellido}</h5>
        </div>
       `
    });
    getUser();
}

const getUser = async () => {
    
    console.log('entre')
    console.log(urlUsers)
    const user =  await getPoint(urlUsers)
    console.log(user)
 
   user.forEach(element => {
        const {imagen, nombre, apellido, email, id} = element;
        document.getElementById('inputImagen').value = imagen;
        document.getElementById('inputName').value = nombre;
        document.getElementById('inputLastName').value = apellido;
        document.getElementById('inputEmail').value = email;
        document.getElementById('inputId').value = id;
    });  
}

document,addEventListener('DOMContentLoaded', renderUser)

edit.addEventListener('click', () => {
    let main = document.querySelector('main');
    main.style.height = '650px';
    console.log('Edit')
    document.querySelector('#formularioPerfil').style.visibility = 'visible'
})

const getData = () => {
    const imagen = document.getElementById('inputImagen').value;
    const nombre = document.getElementById('inputName').value;
    const apellido = document.getElementById('inputLastName').value;
    const email = document.getElementById('inputEmail').value;
    const id = document.getElementById('inputId').value;

    const user = {
        imagen, 
        nombre, 
        apellido, 
        email, 
        id
    }
    return user;
}

form.addEventListener('submit', async (e) => {
  
    console.log('botonEditar')
    e.preventDefault();
    const user = getData();
    const {imagen,nombre,email,apellido,id} = user;
    console.log(user)
     
    if(imagen === "",nombre === "",apellido === '' ,email === ""){
        alert('Por favor, diligenciar los campos')
    }
    else{
        const id = document.getElementById('inputId').value;
        console.log(user)
        await fetch(urlUsers + id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        })
    }
})