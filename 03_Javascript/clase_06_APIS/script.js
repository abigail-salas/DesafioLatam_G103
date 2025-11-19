async function getRandomUser() {
  try {
    const resUser = await fetch("https://randomuser.me/api/");
    const dataUser = await resUser.json();
    const userData = dataUser.results[0];

    const resDog = await fetch("https://dog.ceo/api/breeds/image/random");
    const dataDog = await resDog.json();
    const dogData = dataDog.message;

    console.log(dogData, "<--- data");

    const parrafo = document.querySelector("p");

    parrafo.innerText = `Latitud: ${userData.location.coordinates.latitude}, Longitud: ${userData.location.coordinates.longitude}`;

    const imgUser = document.querySelector(".img");
    const nameUser = document.querySelector(".name");
    const phoneUser = document.querySelector(".phone");
    const locationUser = document.querySelector(".location");
    const dogImg = document.querySelector(".dog");

    nameUser.innerText = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;

    phoneUser.innerText = userData.phone;

    locationUser.innerText = `${userData.location.city}, ${userData.location.country}`;

    //   imgUser.setAttribute("src", userData.picture.large);
    imgUser.src = userData.picture.large;

    dogImg.src = dogData;
  } catch (error) {
    console.error(error);
  }
}

getRandomUser();

const btnReset = document.getElementById("btn-reset");

btnReset.addEventListener("click", getRandomUser);
