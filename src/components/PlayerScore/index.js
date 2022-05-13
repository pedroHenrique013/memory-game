import { PlayerView } from '../PlayerView';
import './style.css';

export function PlayerScore(points = 0) {
  return /*html*/`
    <ol data-points="${points}" class="points-game">
      <li class="points"></li>
      <li class="points"></li>
      <li class="points"></li>
    </ol>
  `;
}
