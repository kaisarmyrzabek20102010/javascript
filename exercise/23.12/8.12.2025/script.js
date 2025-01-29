const cards = document.querySelectorAll(".card");
const startbutton = document.getElementById("start");
const timer = document.getElementById("timer");
const result = document.getElementById('result')

let seconds = 0;
let timerInterval;
let flippedCards = [];
let guessedcards = 0;

startbutton.addEventListener("click", (e) => {
  starttimer();
});

function starttimer() {
  timerInterval = setInterval(() => {
    seconds++;
    timer.textContent = "time:" + seconds + "seconds";
  }, 1000);
}

function stoptimer() {
    clearInterval(timerInterval)

    result.textContent = 'you finished in ' +seconds +'seconds'
}

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (flippedCards.length >= 2) {
      return;
    } else {
      card.classList.add("flipped");
      flippedCards.push(card);
    }

    if (flippedCards.length == 2) {
      checkformatch();
    }
  });
});

function checkformatch() {
  const [card1, card2] = flippedCards;

  const img1 = card1.querySelector(".back-view img").src;
  const img2 = card2.querySelector(".back-view img").src;

  if (img1 == img2) {
    flippedCards = [];
    guessedcards++;
  } else {
    setTimeout(() => {
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
    }, 500);
  }

  if (guessedcards==8) {
    stoptimer()
  }
}
