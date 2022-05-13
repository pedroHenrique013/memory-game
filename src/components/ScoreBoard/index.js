import './style.css';
import { PlayerName } from './../PlayerName/index';
import { PointsGame } from './../PointsGame/index';


export function ScoreBoard() {
  return /*html*/`
    <header class="score-board">
      ${PlayerName("Player1")}
      ${PointsGame()}
      <p class="versus">vs</p>
      ${PointsGame()}
      ${PlayerName("Player2")}
    </header>
  `;
}
