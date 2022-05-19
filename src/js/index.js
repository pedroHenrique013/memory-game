import { cards } from './dados';
import { CardFrontBack } from './../components/CardFrontBack/index';
import { PlayerName } from './../components/PlayerName/index';

export const flipHideCards = ($cardsActive) => {
  $cardsActive.forEach((card) => card.classList.remove("-active"));
};

export const swapPlayer = () => {
  const $playerView = document.querySelector(".player-view");
  const currentPlayer = $playerView.getAttribute("data-currentPlayer");

  $playerView.setAttribute(
    "data-currentPlayer",
    currentPlayer == "1" ? "2" : "1"
  );
};

export const shuffle = () => {

  const shuffleCards = cards.sort(() => Math.floor(Math.random() * 6));
  const $htmlCards = shuffleCards.map((card) => CardFrontBack(card.icon, card.alt, card.id));//
  return $htmlCards;
  
}

export const orderCards = () => {
  cardSort.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

cards.forEach((elemento) => {
  if (!elemento.id) {
    elemento.id = Math.floor(Math.random() * 24);
  }
});

const cardSort = cards;
