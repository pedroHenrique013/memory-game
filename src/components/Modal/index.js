import './style.css';

export function Modal() {
  window.restartGame = {}
  window.restartGame.handleClick = (event) => {
    const $modal = document.querySelector(".modal");
    $modal.classList.add("-play");
    location.reload();
  }

  return /*html*/ `
    <div class="modal -play">
      <div class="modal-winner">
        <p class="player-win">Player1</p>
        <p class="winner">Winner!!!</p>
        <img src="../../../src/assets/archievement.png" alt="winner" class="winner-img">
        <button class="btn-restart" onClick="restartGame.handleClick()">Restart</button>
      </div>
    </div>
  `;
}
