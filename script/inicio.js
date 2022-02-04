document.addEventListener('DOMContentLoaded', () => {
    const logoPeq = document.querySelector('#icono1');
    logoPeq.style.display = 'flex';

    setTimeout(() => {
        logoPeq.style.display = 'none';


        setTimeout(() => {
            const logoGr = document.querySelector('#icono2');
            logoGr.style.display = 'flex';
        },0);

},2000);

});