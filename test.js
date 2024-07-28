const aginBtn = document.querySelector(".again");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const scoreEle = document.querySelector(".score");
const highScoreEle = document.querySelector(".highscore");
const userNumber = document.querySelector(".userNumber");
const checkBtn = document.querySelector(".check");

let highscore = 0;

let score, genertedNumber;
//initiazation function
const display = function (ele, message) {
  ele.textContent = message;
};

const initiazation = function () {
  genertedNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(genertedNumber);
  score = 20;
  display(scoreEle, score);
  display(number, "?");
  display(message, "start guessing...");
  userNumber.value = "";
  document.body.style.backgroundColor = "black";
  checkBtn.disabled=false
};
initiazation();

checkBtn.addEventListener("click", function () {
  const inputNumber = Number(userNumber.value);

  //compar the input number with the generted number
  if (score > 0) {
    if (genertedNumber !== inputNumber) {
      let result = genertedNumber > inputNumber ? "too low" : "too high";
      display(message, result);
      score--;
      display(scoreEle, score);
    } else {
      highscore =highscore> score?highscore:score;
      display(highScoreEle, highscore);
      display(message, "you are wine");
      display(number, genertedNumber);
      document.body.style.backgroundColor = "green";
     checkBtn.disabled=true;
    }
  } else {
    display(message, "Game Over, You lost the game!");
    document.body.style.backgroundColor = "red";
    checkBtn.disabled=true;
  }
});
aginBtn.addEventListener("click", initiazation);
