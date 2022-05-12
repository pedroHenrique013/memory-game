import './src/styles/reset.css';
import './src/styles/global.css';

import { BoardGame } from './src/components/BoardGame/index';
import { PlayerName } from './src/components/PlayerName';


const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
  'beforeend',
    `
      ${PlayerName("Player1")}
      ${PlayerName("Player2")}
      ${BoardGame(6)}
    `
);
