const container = document.querySelector(".container");

export const renderFigure = (box, isCircle) => {
  // if (box.querySelector(".circle") || box.querySelector(".cross-stripe")) return;
  // const markup = `<div class="${isCircle ? "cross-stripe" : "circle"}"></div>`;
  const markup = `<i class="las ${
    !isCircle ? "la-fire" : "la-dragon"
  } figure player-${!isCircle ? 2 : 1}__figure"></i>`;
  box.insertAdjacentHTML("afterbegin", markup);
  box.dataset.value = isCircle ? "X" : "O";
};

export const createBoard = () =>
  [...container.querySelectorAll(".box")].map((el) => el.dataset.value || null);
