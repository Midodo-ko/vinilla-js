const body = document.querySelector("body");

const IMG_NUMBER = 5;

// function handleImgLoad() {
//   console.log("finished loading");
// }

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `image/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  //만약 API에서 일을하고 있다면 이러한 방식이 필요할지도 모름
  //image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
