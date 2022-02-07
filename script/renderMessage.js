import { urlchatCat, urlchatDog } from "./url.js";
import {getPoint} from './point.js'

const containerChat = document.getElementById('containerChat'); 
// const messageFoto = document.querySelector('.messageFoto');
// const messageName = document.querySelector('.messageName');

// const chatDog = document.getElementById('chatDog');

// chatDog.addEventListener('DOMContentLoaded', () => {
//     renderChatDog();
// })

export const renderChatCat = async () => {
    const messages = await getPoint(urlchatCat);
    containerChat.innerHTML = '';

    messages.forEach(element => {
    const {name, foto} = element;

    // messageFoto.innerHTML = `<img class="messageFoto" src=${foto} width="64px">`;
    // messageName.textContent = `${name}`;

    setTimeout(() => {
        messages.forEach(element => {
            const {sP, sO} = element;
            containerChat.innerHTML += `
        <div class="person">
            <p>${sP}</p>
        </div>

        <div class="owner">
            <p>${sO}</p>
    `
        })
    },1500);

    setTimeout(() => {
        messages.forEach(element => {
            const {p1, r1} = element;
            containerChat.innerHTML += `
        <div class="person">
            <p>${p1}</p>
        </div>

        <div class="owner">
            <p>${r1}</p>
    `
        })
    },2500);

    setTimeout(() => {
        messages.forEach(element => {
            const {p2, r2} = element;
            containerChat.innerHTML += `
        <div class="person">
            <p>${p2}</p>
        </div>

        <div class="owner">
            <p>${r2}</p>
    `
        })
    },3500);

    setTimeout(() => {
        messages.forEach(element => {
            const {dP, dO} = element;
            containerChat.innerHTML += `
        <div class="person">
            <p>${dP}</p>
        </div>

        <div class="owner">
            <p>${dO}</p>
    `
        })
    },4500);


} ) };


export const renderChatDog = async () => {
    const messages = await getPoint(urlchatDog);
    containerChat.innerHTML = '';

    messages.forEach(element => {
    const {name, foto} = element;

    messageFoto.innerHTML = `<img class="messageFoto" src=${foto} width="64px">`;
    messageName.textContent = `${name}`;

    setTimeout(() => {
        messages.forEach(element => {
            const {sP, sO} = element;
            containerChat.innerHTML += `
        <div class="person">
            <p>${sP}</p>
        </div>

        <div class="owner">
            <p>${sO}</p>
    `
        })
    },1500);

    setTimeout(() => {
        messages.forEach(element => {
            const {p1, r1} = element;
            containerChat.innerHTML += `
        <div class="person">
            <p>${p1}</p>
        </div>

        <div class="owner">
            <p>${r1}</p>
    `
        })
    },2500);

    setTimeout(() => {
        messages.forEach(element => {
            const {p2, r2} = element;
            containerChat.innerHTML += `
        <div class="person">
            <p>${p2}</p>
        </div>

        <div class="owner">
            <p>${r2}</p>
    `
        })
    },3500);

    setTimeout(() => {
        messages.forEach(element => {
            const {dP, dO} = element;
            containerChat.innerHTML += `
        <div class="person">
            <p>${dP}</p>
        </div>

        <div class="owner">
            <p>${dO}</p>
    `
        })
    },4500);


} ) };
