import './style.css';
import { PlayerName } from './../PlayerName/index';
import { PlayerScore } from './../PlayerScore/index';
import { PlayerView } from '../PlayerView';



export function ScoreBoard() {
  return /*html*/`
    <header class="score-board">
      ${PlayerView(1)}
      ${PlayerName("Player1")}
      ${PlayerScore(0,1)}
      <p class="versus">vs</p>
      ${PlayerScore(0,2)}
      ${PlayerName("Player2")}
    </header>
  `;
}
