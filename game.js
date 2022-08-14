let btn = document.querySelectorAll(".button");
let rst = document.querySelectorAll(".restart");

let count = 0;
let x = true;

btn.forEach((element) => {
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

const restart = () => {
    btn.forEach((element) => {
      element.innerText = "";
    });
};

rst.forEach((element) => {
    element.addEventListener("click", () => restart());
});

