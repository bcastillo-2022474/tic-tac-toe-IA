import { play } from "./play.js";
import { changePlayer } from "./changePlayer.js";

const choiceContainer = document.querySelector(".choice");
choiceContainer.addEventListener("click", changePlayer);

const container = document.querySelector(".container");
container.addEventListener("click", play);
