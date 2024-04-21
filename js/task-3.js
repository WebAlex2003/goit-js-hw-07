/* task-3 */

const inputEl = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const onInput = inputEl.addEventListener("input", inputFunction);

function inputFunction(event) {
  event.preventDefault();
  console.log(event.currentTarget.value);

  nameOutput.textContent = event.currentTarget.value.trim();
}
