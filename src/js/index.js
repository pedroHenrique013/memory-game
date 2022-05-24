import { cards } from "./dados";
import { CardFrontBack } from "./../components/CardFrontBack/index";

let hasFlippedCard = false;
let firstCard, secondCard;

export const logicGame = (event) => {
  /*-------------- Add class -active to card --------------*/
  const $origin = event.target;
  const $cardFrontBack = $origin.closest(".card-front-back");
  const $srcCard = $cardFrontBack
    .querySelector(".card.-back #img")
    .getAttribute("src");
  $cardFrontBack.classList.add("-active");

  if ($cardFrontBack.getAttribute("class") === "card-front-back -active") {
    $cardFrontBack.removeAttribute("onclick");
  }

  /*-------------- If hasFlippedCard is false, save firstCard --------------*/
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = $srcCard;
    return firstCard;
  }

  hasFlippedCard = false;
  secondCard = $srcCard;
  console.log(firstCard, secondCard);
  const $cardsActive = document.querySelectorAll(".-active");
  const $score = document.getElementsByTagName("ol");
  const $playerScore = document.querySelector(".player-score");
  const $currentScore = $playerScore.getAttribute("data-currentScore");

  /*-------------- If firstCard is equal to secondCard, hide cards --------------*/
  if (firstCard === secondCard) {
    if ($playerScore.getAttribute("data-currentScore") === "1") {
      $score[0].dataset.points = parseInt($score[0].dataset.points) + 1;
      toString($score[0].dataset.points);
    }

    if ($playerScore.getAttribute("data-currentScore") === "2") {
      $score[1].dataset.points = parseInt($score[1].dataset.points) + 1;
      toString($score[1].dataset.points);
    }
    $cardsActive.forEach((card) => {
      card.classList.add("-flip");
      card.removeAttribute("onclick");
    });
  } else {
    setTimeout(() => {
      flipHideCards($cardsActive);
      swapPlayer();

      $playerScore.setAttribute(
        "data-currentScore",
        $currentScore == "1" ? "2" : "1"
      );
      $cardsActive.forEach((card) => {
        card.setAttribute("onclick", "cardFrontBack.handleClick(event)");
      });
    }, 1000);
  }
};

const flipHideCards = ($cardsActive) => {
  $cardsActive.forEach((card) => card.classList.remove("-active"));
};

const swapPlayer = () => {
  const $playerView = document.querySelector(".player-view");
  const currentPlayer = $playerView.getAttribute("data-currentPlayer");

  $playerView.setAttribute(
    "data-currentPlayer",
    currentPlayer == "1" ? "2" : "1"
  );
};

export const shuffle = () => {
  const shuffleCards = cards.sort(() => Math.floor(Math.random() * 6));
  const $htmlCards = shuffleCards.map((card) =>
    CardFrontBack(card.icon, card.alt, card.id)
  ); //
  return $htmlCards;
};

export const orderCards = () => {
  cardSort.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
};

cards.forEach((elemento) => {
  if (!elemento.id) {
    elemento.id = Math.floor(Math.random() * 24);
  }
});

const cardSort = cards;
