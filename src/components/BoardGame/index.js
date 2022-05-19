import "./style.css";

import { shuffle, orderCards } from "./../../js/index";

export function BoardGame() {
  orderCards();


  window.boardGame = {}
  window.boardGame.handleClick = () => {
    const $cardsActive = document.querySelectorAll(".-flip");
    const $modal = document.querySelector(".modal");
    const $playerWinner = $modal.querySelector(".player-win");
    const $score = document.getElementsByTagName("ol");
    

    if($cardsActive.length == 6){
      console.log($score[1].dataset.points, $score[0].dataset.points);
      if($score[0].dataset.points > $score[1].dataset.points){
        $modal.classList.remove("-play");
        $playerWinner.innerHTML = "Player1";
      }else if($score[1].dataset.points > $score[0].dataset.points){
        $modal.classList.remove("-play");
        $playerWinner.innerHTML = "Player2";
      } else {
        $modal.classList.add("-play");
        $playerWinner.innerHTML = "Empate";
      }
    }
  }

  const htmlCardsList = shuffle();
  const $htmlCards = htmlCardsList.join("");

  return /*html*/ `
    <section id="board" class="board-game" onClick="boardGame.handleClick()">
      ${$htmlCards}
    </section>
  `;
}
