import './style.css';
import { CardGame } from './../CardGame/index';


export function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame('logo-javascript', 'Logo javascript')}
            </div>
        </article>
    `;
}