let btnRef = document.querySelectorAll(".button");

let count = 0;
let x = true;

btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (x && count%2 != 0) {
      xTurn = false;
      element.innerText = "X";
      element.disabled = true;
      count++;
    } else {
      xTurn = true;
      element.innerText = "O";
      element.disabled = true;
      count++;
    }
  });
});