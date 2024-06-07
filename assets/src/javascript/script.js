const cards = document.querySelectorAll(".card");
let stepsElement = document.querySelector(".steps");
let timerElement = document.querySelector(".time");
let scoreElement = document.querySelector(".score");
let steps = 0;
let score = 0;
let time = 0;
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
let gameStart = false;
console.log(steps);
if (steps == 1 || gameStart) {
  setTimeout(() => {
    time += 1;
    timerElement.innerText = `${time} sec`;
    console.log(timerElement);
    gameStart = true;
  }, 1000);
}
let cardOne;
let cardTwo;
function flipCard(event) {
  steps += 1;

  // For timer
  let gameStart = false;
  console.log(steps);
  if (steps == 1 || gameStart) {
    setInterval(() => {
      time += 1;
      timerElement.innerText = `${time} sec`;
      gameStart = true;
    }, 1000);
  }
  stepsElement.innerText = steps;
  let clickedCard = event.target;
  if (clickedCard !== cardOne) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
  }

  let cardOneImg = cardOne.querySelector("img").src;
  let cardTwoImg = cardTwo.querySelector("img").src;

  matchCards(cardOneImg, cardTwoImg);
}
console.log(steps);
function matchCards(cardOneImg, cardTwoImg) {
  if (cardOneImg === cardTwoImg) {
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    score += 1;
    scoreElement.innerText = score;
    return console.log("card Matched");
  }
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
    console.log(cardOne, cardTwo);
  }, 100);

  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
  }, 1200);
}
