// heart-game.js
const canvas = document.getElementById("heartGame");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 500;

let score = 0;

const catcher = {
  x: canvas.width / 2 - 30,
  y: canvas.height - 40,
  width: 60,
  height: 20,
  speed: 7,
};

let hearts = [];

function drawCatcher() {
  ctx.fillStyle = "#ff4081";
  ctx.fillRect(catcher.x, catcher.y, catcher.width, catcher.height);
}

function drawHeart(heart) {
  ctx.beginPath();
  ctx.fillStyle = "#e91e63";
  ctx.arc(heart.x, heart.y, heart.radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

function drawScore() {
  ctx.fillStyle = "#000";
  ctx.font = "18px Arial";
  ctx.fillText("Score: " + score, 10, 20);
}

function createHeart() {
  hearts.push({
    x: Math.random() * (canvas.width - 20) + 10,
    y: 0,
    radius: 10,
    speed: 2 + Math.random() * 3,
  });
}

function updateHearts() {
  for (let i = 0; i < hearts.length; i++) {
    const heart = hearts[i];
    heart.y += heart.speed;

    // Collision check
    if (
      heart.y + heart.radius > catcher.y &&
      heart.x > catcher.x &&
      heart.x < catcher.x + catcher.width
    ) {
      score++;
      hearts.splice(i, 1);
      i--;
    }

    // Missed
    else if (heart.y > canvas.height) {
      hearts.splice(i, 1);
      i--;
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCatcher();
  drawScore();
  hearts.forEach(drawHeart);
  updateHearts();
}

function loop() {
  draw();
  requestAnimationFrame(loop);
}

setInterval(createHeart, 1000);
loop();

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && catcher.x > 0) {
    catcher.x -= catcher.speed;
  } else if (e.key === "ArrowRight" && catcher.x < canvas.width - catcher.width) {
    catcher.x += catcher.speed;
  }
});


