import { PlayerView } from '../PlayerView';
import './style.css';

export function PlayerScore(points = 0) {
  return /*html*/`
    <ol id="points" data-points="${points}" class="player-score">
      <li class="points"></li>
      <li class="points"></li>
      <li class="points"></li>
    </ol>
  `;
}
