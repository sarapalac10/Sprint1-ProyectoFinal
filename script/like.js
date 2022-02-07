const renderFavoritos = document.getElementById('renderFavoritos');

const getLocalStorage = () => {
//   const arrayLike = [];
  const det = JSON.parse(localStorage.getItem("Like"));
  console.log(det);
  det.forEach(element => {
    const { likeName, likeImg, likeRace, likeId, likeCategory } = element;

      renderFavoritos.innerHTML += `
      <div class="card bg-transparent text-white"  id='${likeId}' >
      <img src=${likeImg} id='${likeId}' class="card-img" alt="...">
  <div class="card-img-overlay ${likeCategory} id=${likeId}">
      <h5 class="card-title">${likeName}</h5>
      <p class="card-text">${likeRace}</p>
  </div>
  </div>
      `

  });
}

window.addEventListener('DOMContentLoaded', getLocalStorage);