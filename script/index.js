import {renderDog, renderCat } from './renderCard.js'
import { urlDog, urlCat } from "./url.js";
import {getPoint} from './point.js'

const btnDog = document.getElementById('btnCategory1');
const btnCat = document.getElementById('btnCategory2');

btnDog.addEventListener('click', () => {
    renderDog();
});

btnCat.addEventListener('click', () => {
    renderCat();
});

/*********/

const container = document.getElementById('renderCard'); 

container.addEventListener('click', async(e) => {
    console.log(container)
    console.log(e.target.classList)
    console.log('entre')
    const dog = e.target.classList.contains('perro');
    const cat = e.target.classList.contains('gato');
    const id = e.target.offsetParent.id
    console.log(e.target)
    console.log(e)
    console.log(id)

    if (dog) {
        console.log('perro')
        const data = await getPoint(urlDog);
        console.log(data, "prueba de promesa con await")
        const dog = data.find(dog => dog.id === Number(id))
        console.log(dog, "prueba validando")
        localStorage.setItem("Detail",JSON.stringify(dog));
        window.location.href = "detail.html"
    }

    if (cat) {
            console.log('gato')
            const data = await getPoint(urlCat);
            console.log(data, "prueba de promesa con await")
            const cat = data.find(cat => cat.id === Number(id))
            console.log(cat, "prueba validando")
            localStorage.setItem("Detail",JSON.stringify(cat));
            window.location.href = "detail.html"
        }
    

})