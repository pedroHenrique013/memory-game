import "./style.css";
import { CardGame } from "./../CardGame/index";
import { flipHideCards } from "../../js";
import { swapPlayer } from "./../../js/index";

export function CardFrontBack(icon, alt) {
  let hasFlippedCard = false;
  let firstCard, secondCard;

  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest(".card-front-back");
    const $firstCard = $cardFrontBack
      .querySelector(".card.-back #img")
      .getAttribute("src");

    $cardFrontBack.classList.add("-active");

    /* --------------- Logica das Cartas ------------------------*/

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = $firstCard;
      console.log(firstCard);
      return firstCard;
    }

    hasFlippedCard = false;
    secondCard = $firstCard;
    const $cardsActive = document.querySelectorAll(".-active");
    const $score = document.getElementsByTagName("ol");
    const $playerScore = document.querySelector(".player-score");
    const $currentScore = $playerScore.getAttribute("data-currentScore");
    const $card = document.querySelector(".card-front-back");

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
        card.classList.add("-flip")
        card.setAttribute("onclick", "return false");
        
      });
      
    } else {
      setTimeout(() => {
        flipHideCards($cardsActive);
        swapPlayer();

        $playerScore.setAttribute(
          "data-currentScore",
          $currentScore == "1" ? "2" : "1"
        );
      }, 1000);
    }
  };

  return /*html*/ `
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back" >
                ${CardGame(icon, alt)}
            </div>
        </article>
    `;
}
