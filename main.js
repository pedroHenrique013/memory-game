import './src/styles/reset.css';
import './src/styles/global.css';

import { CardGame } from './src/components/CardGame';


const $root = document.querySelector('#root');
const $htmlCardGame = CardGame();
$root.insertAdjacentHTML('beforeend',$htmlCardGame);
