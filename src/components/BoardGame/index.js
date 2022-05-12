import './style.css';

import { CardFrontBack } from '../CardFrontBack';


export function BoardGame (amountCard) {
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCard);

    return /*html*/`
      <section class="board-game">
        ${$htmlContent}
      </section>
    `;
}