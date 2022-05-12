import { CardGame } from './../CardGame/index';


export function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame('logo-javascript', 'Logo javascript')}
        </article>
    `;
}