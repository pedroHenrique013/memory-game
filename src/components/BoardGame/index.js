import './style.css';

import { CardFrontBack } from '../CardFrontBack';
import { cards } from './dados';


export function BoardGame (amountCard) {
  const flipHideCards = ($cardsActive) => {
    $cardsActive.forEach((card) => card.classList.remove("-active"));
  }

  const swapPlayer = () => {
    const $playerView = document.querySelector('.player-view');
    const currentPlayer = $playerView.getAttribute('data-currentPlayer');
    $playerView.setAttribute("data-currentPlayer", currentPlayer == '1' ? '2' : '1');
  }

  window.boardGame = {}
  window.boardGame.handleClick = () => {
    const $boardGame = document.querySelector('.board-game');
    const $cardsActive = $boardGame.querySelectorAll(".card-front-back.-active");

    if ($cardsActive.length === 2) {
      setTimeout(() => {
        
        flipHideCards($cardsActive);
        swapPlayer();
      }, 1000);
    }
  }
  const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.alt));
  const $htmlCards = htmlCardsList.join('');

  return /*html*/`
    <section class="board-game" onClick="boardGame.handleClick()">
        ${$htmlCards}
    </section>
  `;
}
