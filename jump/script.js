console.log("All systems are up!");

import { Character } from "./character.js";
import { Plank } from "./plank.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px Anton";

window.game = {
  groundY: innerHeight,
  width: 500,
};

canvas.width = window.game.width;
canvas.height = window.game.groundY;

const character = new Character(ctx);
character.listenTo(window);

let planks = [];
let highestPosition = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    planks.push(new Plank(getRandomInt(canvas.width - 150), canvas.height - i * 100, ctx, 150 - i, "BOOST"));
  } else {
    planks.push(new Plank(getRandomInt(canvas.width - 150), canvas.height - i * 100, ctx, 150 - i, "NORMAL"));
  }
  if (i === 100) {
    planks.push(new Plank(0, canvas.height - i * 100, ctx, canvas.width, "FINISH"));
  }
  highestPosition = window.game.groundY - i * 100;
}

console.log(planks[1]);
character.x = planks[1].x + planks[1].width / 2 - character.width / 2;
character.y = planks[1].y - character.height - 10;

console.log(character);

character.planks = planks;

let translateY = 0;

ctx.save();
ctx.fillStyle = "#FFB4A2";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.translate(0, translateY);
planks.forEach((plank) => {
  plank.draw();
});
character.draw();
ctx.restore();

const gameLoop = () => {
  ctx.save();
  ctx.fillStyle = "#FFB4A2";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.translate(0, (translateY += 3));

  character.move();
  planks.forEach((plank) => {
    plank.draw();
    if (plank.remove) {
      plank.remove = false;
      plank.visible = true;
      plank.x = getRandomInt(canvas.width - 150);
      plank.y = highestPosition;
    }
  });

  character.draw();
  ctx.restore();
  if (character.y >= canvas.height - translateY) {
    window.location.reload();
  } else {
    requestAnimationFrame(gameLoop);
  }
};

const startGame = () => {
  window.removeEventListener("keydown", startGame);
  requestAnimationFrame(gameLoop);
};

window.addEventListener("keydown", startGame);
