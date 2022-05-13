import './style.css';
import { PlayerName } from './../PlayerName/index';
import { PlayerScore } from './../PlayerScore/index';



export function ScoreBoard() {
  return /*html*/`
    <header class="score-board">
      ${PlayerName("Player1")}
      ${PlayerScore(1)}
      <p class="versus">vs</p>
      ${PlayerScore()}
      ${PlayerName("Player2")}
    </header>
  `;
}
