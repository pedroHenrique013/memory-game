import "./style.css";
import { CardGame } from "./../CardGame/index";
import { logicGame } from "../../js";

export function CardFrontBack(icon, alt) {

  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
      logicGame(event);
  };

  return /*html*/ `
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back" >
                ${CardGame(icon, alt)}
            </div>
        </article>
    `;
}
