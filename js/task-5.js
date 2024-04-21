/* Task-5 */
const bodyEl = document.querySelector("body");
const buttonColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

buttonColor.addEventListener("click", onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onButtonClick(event) {
  const randomColor = getRandomHexColor();

  bodyEl.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}
