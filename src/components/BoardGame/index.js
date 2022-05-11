import './style.css';

import { CardGame } from './../CardGame/index';


export function BoardGame (amountCard) {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCard);

    return `
      <section class="board-game">
        ${$htmlContent}
      </section>
    `;
}