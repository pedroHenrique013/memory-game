import './style.css';

import { CardFrontBack } from '../CardFrontBack';
import { cards } from './dados';


export function BoardGame (amountCard) {
  
    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.alt));
    const $htmlCards = htmlCardsList.join('');
    console.log($htmlCards);

    return /*html*/`
      <section class="board-game">
        ${$htmlCards}
      </section>
    `;
}
