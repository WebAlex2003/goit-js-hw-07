/* Task-6 */

const boxesContainer = document.querySelector("#boxes");
const dataCreate = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  let boxSize = 30;

  for (let i = 0; amount > i; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
    boxSize += 10;
  }
}

const destroyBoxes = function () {
  boxesContainer.innerHTML = "";
};

dataCreate.addEventListener("click", handleCreateButtonClick);

function handleCreateButtonClick() {
  const input = document.querySelector('input[type="number"]');
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

dataDestroy.addEventListener("click", destroyBoxes);
