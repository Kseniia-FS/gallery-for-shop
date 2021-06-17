const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;
const colors = [
  "rgb(222, 235, 46)",
  "rgb(81, 211, 69)",
  "rgb(12, 197, 151)",
  "rgb(93, 175, 241)",
  "rgb(63, 110, 241)",
  "rgb(188, 98, 230)",
  "rgb(196, 45, 138)",
  "rgb(233, 64, 101)",
  "rgb(245, 90, 19)",
];

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
