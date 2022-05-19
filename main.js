import './src/styles/reset.css';
import './src/styles/global.css';

import { BoardGame } from './src/components/BoardGame/index';
import { ScoreBoard } from './src/components/ScoreBoard';
import { Modal } from './src/components/Modal/index';


const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
  'beforeend',
    /*html*/` 
      ${ScoreBoard()}
      ${BoardGame()}
      ${Modal()}
    `
);
