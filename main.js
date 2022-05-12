import './src/styles/reset.css';
import './src/styles/global.css';

import { BoardGame } from './src/components/BoardGame/index';
import { ScoreBoard } from './src/components/ScoreBoard';


const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
  'beforeend',
    ` ${ScoreBoard()}
      ${BoardGame(6)}
    `
);
