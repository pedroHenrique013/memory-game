import { PlayerView } from '../PlayerView';
import './style.css';

export function PlayerScore(points, currentScore) {
  return /*html*/`
    <ol id="points" data-points="${points}" data-currentScore="${currentScore}" class="player-score">
      <li class="points"></li>
      <li class="points"></li>
      <li class="points"></li>
    </ol>
  `;
}
