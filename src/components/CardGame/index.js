import './style.css'

export function CardGame(icon = "logo-card", alt = "Logo de um ponto de interrogação") {
    return /*html*/`
        <article class="card-game">
            <img src="images/${icon}.png" alt="${alt}" />
        </article>
    `;
}
