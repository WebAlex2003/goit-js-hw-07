/* Task-1 */

const listEl = document.querySelector("#categories");
const itemEl = listEl.querySelectorAll(".item");

console.log("Number of categories:", itemEl.length);

itemEl.forEach((item) => {
  const CategoryName = item.querySelector("h2").textContent;
  const items = item.querySelectorAll("ul li").length;

  console.log(`Category: ${CategoryName}`);
  console.log(`Elements: ${items}`);
});
