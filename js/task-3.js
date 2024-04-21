/* task-3 */

const inputEl = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const onInput = inputEl.addEventListener("input", inputFunction);

function inputFunction(event) {
  event.preventDefault();

  const inputValue = event.currentTarget.value.trim();

  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
}
