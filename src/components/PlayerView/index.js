import "./style.css";

export function PlayerView(currentPlayer = 1) {
  return /*html*/ `
    <img class="player-view"
         data-currentPlayer="${currentPlayer}"
         src="../../../src/images/IconArrowDown.png" 
         alt="Icone de uma seta para baixo" 
    />
  `;
}
