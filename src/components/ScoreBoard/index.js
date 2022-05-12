import { PlayerName } from './../PlayerName/index';


export function ScoreBoard() {
  return /*html*/`
    <header class="score-board">
      ${PlayerName("Player1")}
      ${PlayerName("Player2")}
    </header>
  `;
}