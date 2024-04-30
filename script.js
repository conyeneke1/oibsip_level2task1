let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    screen.textContent += value;
    console.log(value);
  });
});

equal.addEventListener("click", function (e) {
  if (screen.textContent === "") {
    screen.textContent = "Enter number";
  } else {
    let answer = eval(screen.textContent);
    screen.textContent = answer;
  }
});

clear.addEventListener("click", function (e) {
  screen.textContent = "";
});
