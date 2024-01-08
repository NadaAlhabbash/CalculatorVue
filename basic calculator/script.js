
const themeToggleBtn = document.querySelector(".swtich-button");
const result = document.querySelector(".result");
const buttons = document.querySelector(".buttons");
const calculator = document.querySelector(".calculator");
const rowRectangle = document.querySelector(".row-rectangle");
const button = document.querySelectorAll("button");
const columnRectangle = document.querySelector(".column-rectangle");
// console.log(button);
// eslint-disable-next-line no-unused-vars
const toggleIcon = document.querySelector(".toggler-icon");
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  result.classList.toggle("dark");
  buttons.classList.toggle("dark");
  rowRectangle.classList.toggle("dark")
  themeToggleBtn.classList.toggle("active");
  button.forEach(function(btn) {
    btn.classList.toggle("dark");
  });
  columnRectangle.classList.toggle("dark");
};