export const getPoint = async (url)  => {
    const peticion = await fetch(url);
    const data = await peticion.json();
    return data;
}


