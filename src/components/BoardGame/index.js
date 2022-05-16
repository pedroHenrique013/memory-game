import './style.css';

import { CardFrontBack } from '../CardFrontBack';
import { cards } from '../../js/dados';
import { cardsCompare } from './../../js/index';



export function BoardGame (amountCard) {

  window.boardGame = {}
  window.boardGame.handleClick = () => {
    cardsCompare();
  }

  const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.alt));
  const $htmlCards = htmlCardsList.join('');
  
  return /*html*/`
    <section class="board-game" onClick="boardGame.handleClick()">
        ${$htmlCards}
    </section>
  `;
}
