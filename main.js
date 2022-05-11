import './src/styles/reset.css';
import './src/styles/global.css';

import { BoardGame } from './src/components/BoardGame/index';


const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(6);
$root.insertAdjacentHTML('beforeend', $htmlBoardGame);;
