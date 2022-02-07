const detail = document.querySelector('.detail');

const getLocalStorage = () => {
  const arrayLike = [];
  const det = JSON.parse(localStorage.getItem("Detail"));
  const { nombre, historia, imagen, edad, raza, direccion, personalidad, genero, usuario, imgusuario, id, categoria } = det;

  detail.innerHTML += `
    <header>
      <a href="./inicio4.html"><button class="btnBack"><img src="./img/logo-back.png" alt="logo atrás"></button></a>
      <img src="${imagen}" class="imgPrincipal" alt="">
    </header>
    <main id="detailsMain">
      <div class="container">
        <div class="d-flex justify-content-between primerP">
          <div class="d-flex justify-content-start">
              <p class="nameDetail">${nombre}</p>
              <div class="gender ${genero} d-flex mx-auto"></div>
          </div>
          
          <div  class="circleLike detailLike"> </div>
      </div>
      <div class="container d-flex justify-content-evenly">
        <div>
            <img src="../img/logo-raza.png" alt="name">
            <div class="d-inline p-2 raceAgeDetail" id='race'>${raza}</div>
        </div>
        <div>
            <img src="../img/logo-edad.png" alt="race">
            <div class="d-inline p-2 raceAgeDetail">${edad}</div>
        </div>
      </div>
      <div class="d-flex justify-content-start">
        <img src="../img/logo-pin.png" class="ubicacion" alt="logo-ubicacion">
        <p class="address">${direccion}</p>
      </div>
        <h2 class="titlePersonalidad">Personalidad</h2>
      </div>    

    <section class="container-fluid contPersonalidad">
      <div class="row conPersonality">
        <div class="col-auto boxPerso">
            <div class="imgPerso ${personalidad[0]} d-flex mx-auto"></div>
            <p class="textPerso">${personalidad[0]}</p>
        </div>
        <div class="col-auto boxPerso">
            <div class="imgPerso ${personalidad[1]} d-flex mx-auto"></div>
            <p class="textPerso">${personalidad[1]}</p>
        </div>
        <div class="col-auto boxPerso">
            <div class="imgPerso ${personalidad[2]} d-flex mx-auto"></div>
            <p class="textPerso">${personalidad[2]}</p>
        </div>
      </div>
    </section>

    <section class="container contHistory">
      <h4 class="hHistory"> Historia de ${nombre} </h5>
      <p class="pDetails"> ${historia} </p>
    </section> 
  </main>

  <footer>
      <ul class="nav detailNav justify-content-left">
        <li class="nav-item">
            <img src="${imgusuario}" class="userImgDetails" alt="">
        </li>
        <li class="nav-item">
            <h5 class='subUserDet'>Publicado por</h5>
            <h6 class='UserDet'>${usuario}</h6>
        </li>
        <li class="nav-item">
            <a href="./chat-${categoria}.html"><button class="btnDetails" id="chatDog">Contactar</button></a>
        </li>
      </ul>
    </footer>
  `
    const btnLike = document.querySelector('.circleLike');
  
    btnLike.addEventListener('click', () => {
    let likeName = nombre;
    let likeImg = imagen;
    let likeRace = raza;
    let likeId = id;
    let likeCategory = categoria;

    let like = { 
      likeName,
      likeImg,
      likeRace,
      likeId,
      likeCategory
    }

    console.log(like)

    const key = JSON.parse(localStorage.getItem('Like'))

    if (btnLike.classList.contains('circleLike')) {
      console.log('like')
      btnLike.classList.remove("circleLike");
      btnLike.classList.add("circlePush");

        if (key !== null) { 
          key.push(like) 
          localStorage.setItem('Like', JSON.stringify(key)) 
        } else { 
          arrayLike.push(like); 
          localStorage.setItem('Like', JSON.stringify(arrayLike))
        }

    }  else if (btnLike.classList.contains('circlePush')) {
      btnLike.classList.remove("circlePush");
      btnLike.classList.add("circleLike");
      const cat = key.filter(categ => categ.likeCategory === 'cat')
      const dog = key.filter(categ => categ.likeCategory === 'dog')

    }
  }
  )
}

document.addEventListener('DOMContentLoaded', getLocalStorage )