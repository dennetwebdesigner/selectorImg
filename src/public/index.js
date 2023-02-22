const path = "./imgs/";
const title = document.querySelector("#title-game");
const randomBtn = document.querySelector("#randomBtn");
const randomImg = document.querySelector("#randomImg");
const max = 10;

let historic = null;
const selecGame = document.querySelector("#select-game");

const setImg = async () => {
  const json = await fetch("http://localhost:3000/api/allGames");
  //pega tag html de img
  const { imgs } = await json.json();
  let randomNumber = Math.floor(Math.random() * (imgs.length - 0) + 0);
  while (true) {
    if (historic != randomNumber) {
      const name = imgs[randomNumber]
        .replace(".jpg", "")
        .replace(".png", "")
        .split("-")
        .join(" ");
      title.innerHTML = name;
      randomImg.src = path + imgs[randomNumber];
      historic = randomNumber;
      console.log("nvo numero - ", randomNumber, ", ", historic);

      return;
    } else {
      randomNumber = Math.floor(Math.random() * (imgs.length - 0) + 0);
      console.log("mesmo numero - ", randomNumber, ", ", historic);
    }
  }
};

const autoStart = () => {
  let count = 0;
  const loop = setInterval(() => {
    setImg();
    if (count >= max) {
      selecGame.innerHTML = "Jogo Selecionado";
      clearInterval(loop);
    } else selecGame.innerHTML = "";
    count++;
  }, 500);
};

randomBtn.addEventListener("click", (e) => {
  autoStart();
});

autoStart();
