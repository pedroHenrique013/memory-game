export function cardsCompare() {
  const $cardsActive = document.querySelectorAll(".-active");
  const $cardsImgs = document.querySelectorAll(".-active .-back #img");
  const points = document.getElementById("points");

  if ($cardsActive.length === 2) {
    console.log($cardsImgs);

    if ($cardsImgs[0].getAttribute("src") === $cardsImgs[1].getAttribute("src")) {
      console.log("Acertou");
      points.dataset.points = parseInt(points.dataset.points) + 1;
      toString(points);
    } else {
      setTimeout(() => {
        flipHideCards($cardsActive);
        swapPlayer();
      }, 1000);
    }
  }
}

const flipHideCards = ($cardsActive) => {
  $cardsActive.forEach((card) => card.classList.remove("-active"));
};

const swapPlayer = () => {
  const $playerView = document.querySelector(".player-view");
  const currentPlayer = $playerView.getAttribute("data-currentPlayer");
  $playerView.setAttribute(
    "data-currentPlayer",
    currentPlayer == "1" ? "2" : "1"
  );
};
