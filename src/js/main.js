import { play } from "./play.js";
import { changePlayer } from "./changePlayer.js";
import { reset } from "./reset.js";

const choiceContainer = document.querySelector(".choice");
choiceContainer.addEventListener("click", changePlayer);

const container = document.querySelector(".container");
container.addEventListener("click", play);

const buttonReset = document.querySelector(".reset");
buttonReset.addEventListener("click", reset);
