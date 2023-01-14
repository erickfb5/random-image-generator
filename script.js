const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 4;

const getRandomSize = () => `${getRandomNr()}x${getRandomNr()}`;

const getRandomNr = () => Math.floor(Math.random() * 10) + 300;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${unsplashURL}${getRandomSize()}`;
  container.appendChild(img);
}
