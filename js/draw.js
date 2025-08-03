// // const canvas = document.getElementById("draw-canvas");
// // const ctx = canvas.getContext("2d");

// // let drawing = false;
// // let rainbowMode = false;
// // let heartMode = false;
// // let hue = 0;

// // function resizeCanvas() {
// //   canvas.width = canvas.offsetWidth;
// //   canvas.height = canvas.offsetHeight;
// // }
// // window.addEventListener("resize", resizeCanvas);
// // resizeCanvas();

// // function startPosition(e) {
// //   drawing = true;
// //   draw(e);
// // }

// // function endPosition() {
// //   drawing = false;
// //   ctx.beginPath();
// // }

// // function draw(e) {
// //   if (!drawing || heartMode) return;

// //   let x, y;
// //   if (e.touches) {
// //     x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
// //     y = e.touches[0].clientY - canvas.getBoundingClientRect().top;
// //   } else {
// //     x = e.clientX - canvas.getBoundingClientRect().left;
// //     y = e.clientY - canvas.getBoundingClientRect().top;
// //   }

// //   ctx.lineWidth = 2;
// //   ctx.lineCap = "round";
// //   ctx.strokeStyle = rainbowMode ? `hsl(${hue++}, 100%, 50%)` : "#b23a48";

// //   ctx.lineTo(x, y);
// //   ctx.stroke();
// //   ctx.beginPath();
// //   ctx.moveTo(x, y);
// // }

// // function placeHeart(e) {
// //   if (!heartMode) return;
// //   let x, y;
// //   if (e.touches) {
// //     e.preventDefault();
// //     x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
// //     y = e.touches[0].clientY - canvas.getBoundingClientRect().top;
// //   } else {
// //     x = e.clientX - canvas.getBoundingClientRect().left;
// //     y = e.clientY - canvas.getBoundingClientRect().top;
// //   }

// //   const size = 20 + Math.random() * 10;
// //   ctx.font = `${size}px Arial`;
// //   ctx.fillStyle = "red";
// //   ctx.fillText("❤️", x - size / 2, y + size / 2);
// // }

// // canvas.addEventListener("mousedown", startPosition);
// // canvas.addEventListener("mouseup", endPosition);
// // canvas.addEventListener("mousemove", draw);
// // canvas.addEventListener("click", placeHeart);

// // canvas.addEventListener("touchstart", function (e) {
// //     if (heartMode) {
// //       placeHeart(e);
// //     } else {
// //       startPosition(e);
// //     }
// //   });
// //   canvas.addEventListener("touchend", endPosition);
// //   canvas.addEventListener("touchmove", draw);
  
// // document.getElementById("clear-btn").addEventListener("click", () => {
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// // });

// // document.getElementById("save-btn").addEventListener("click", () => {
// //   const link = document.createElement("a");
// //   link.download = "drawing.png";
// //   link.href = canvas.toDataURL();
// //   link.click();
// // });

// // document.getElementById("rainbow-btn").addEventListener("click", () => {
// //   rainbowMode = !rainbowMode;
// //   heartMode = false;
// // });

// // document.getElementById("heart-btn").addEventListener("click", () => {
// //   heartMode = !heartMode;
// //   rainbowMode = false;
// // });




// // const canvas = document.getElementById("canvas");
// // const ctx = canvas.getContext("2d");
// // const colorPicker = document.getElementById("color");
// // const sizePicker = document.getElementById("size");
// // const eraseBtn = document.getElementById("erase");
// // const clearBtn = document.getElementById("clear");
// // const saveBtn = document.getElementById("save");

// // let painting = false;
// // let erasing = false;

// // function startPosition(e) {
// //   painting = true;
// //   draw(e);
// // }

// // function endPosition() {
// //   painting = false;
// //   ctx.beginPath();
// // }

// // function draw(e) {
// //   if (!painting) return;

// //   e.preventDefault();
// //   const rect = canvas.getBoundingClientRect();
// //   const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
// //   const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

// //   ctx.lineWidth = sizePicker.value;
// //   ctx.lineCap = "round";
// //   ctx.strokeStyle = erasing ? "#ffffff" : colorPicker.value;

// //   ctx.lineTo(x, y);
// //   ctx.stroke();
// //   ctx.beginPath();
// //   ctx.moveTo(x, y);
// // }

// // canvas.addEventListener("mousedown", startPosition);
// // canvas.addEventListener("mouseup", endPosition);
// // canvas.addEventListener("mousemove", draw);

// // canvas.addEventListener("touchstart", startPosition, { passive: false });
// // canvas.addEventListener("touchend", endPosition, { passive: false });
// // canvas.addEventListener("touchmove", draw, { passive: false });

// // eraseBtn.addEventListener("click", () => {
// //   erasing = !erasing;
// //   eraseBtn.textContent = erasing ? "Drawing" : "Erase";
// // });

// // clearBtn.addEventListener("click", () => {
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// // });

// // saveBtn.addEventListener("click", () => {
// //   const link = document.createElement("a");
// //   link.download = "my-art.png";
// //   link.href = canvas.toDataURL();
// //   link.click();
// // });






// // const canvas = document.getElementById("draw-canvas");
// // const ctx = canvas.getContext("2d");

// // // Resize canvas to fit container
// // canvas.width = window.innerWidth * 0.8;
// // canvas.height = 400;

// // let drawing = false;
// // let rainbowMode = false;
// // let heartMode = false;
// // let hue = 0;

// // function startDrawing(e) {
// //   drawing = true;
// //   draw(e);
// // }

// // function stopDrawing() {
// //   drawing = false;
// //   ctx.beginPath();
// // }

// // function draw(e) {
// //   if (!drawing || heartMode) return;

// //   const rect = canvas.getBoundingClientRect();
// //   const x = (e.clientX || e.touches[0].clientX) - rect.left;
// //   const y = (e.clientY || e.touches[0].clientY) - rect.top;

// //   ctx.lineWidth = 5;
// //   ctx.lineCap = "round";
// //   ctx.lineJoin = "round";

// //   if (rainbowMode) {
// //     ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
// //     hue = (hue + 1) % 360;
// //   }

// //   ctx.lineTo(x, y);
// //   ctx.stroke();
// //   ctx.beginPath();
// //   ctx.moveTo(x, y);
// // }

// // function drawHeart(x, y) {
// //   ctx.save();
// //   ctx.fillStyle = "red";
// //   ctx.translate(x, y);
// //   ctx.beginPath();
// //   ctx.moveTo(0, 0);
// //   ctx.bezierCurveTo(0, -3, -5, -3, -5, 0);
// //   ctx.bezierCurveTo(-5, 3, 0, 6, 0, 8);
// //   ctx.bezierCurveTo(0, 6, 5, 3, 5, 0);
// //   ctx.bezierCurveTo(5, -3, 0, -3, 0, 0);
// //   ctx.fill();
// //   ctx.restore();
// // }

// // // Clear button
// // document.getElementById("clear-btn").addEventListener("click", () => {
// //   ctx.clearRect(0, 0, canvas.width, canvas.height);
// // });

// // // Save button
// // document.getElementById("save-btn").addEventListener("click", () => {
// //   const link = document.createElement("a");
// //   link.download = "my_drawing.png";
// //   link.href = canvas.toDataURL();
// //   link.click();
// // });

// // // Rainbow button
// // document.getElementById("rainbow-btn").addEventListener("click", () => {
// //   rainbowMode = !rainbowMode;
// //   heartMode = false;
// // });

// // // Heart button
// // document.getElementById("heart-btn").addEventListener("click", () => {
// //   heartMode = !heartMode;
// //   rainbowMode = false;
// // });

// // // Handle drawing events
// // canvas.addEventListener("mousedown", startDrawing);
// // canvas.addEventListener("mouseup", stopDrawing);
// // canvas.addEventListener("mouseout", stopDrawing);
// // canvas.addEventListener("mousemove", draw);

// // // Touch support
// // canvas.addEventListener("touchstart", startDrawing);
// // canvas.addEventListener("touchend", stopDrawing);
// // canvas.addEventListener("touchcancel", stopDrawing);
// // canvas.addEventListener("touchmove", draw);

// // // Heart stamp on click
// // canvas.addEventListener("click", (e) => {
// //   if (heartMode) {
// //     const rect = canvas.getBoundingClientRect();
// //     const x = e.clientX - rect.left;
// //     const y = e.clientY - rect.top;
// //     drawHeart(x, y);
// //   }
// // });



// const canvas = document.getElementById("draw-canvas");
// const ctx = canvas.getContext("2d");

// let drawing = false;
// let rainbowMode = false;
// let heartMode = false;
// let hue = 0;

// // Resize canvas to match its displayed size
// function resizeCanvas() {
//   canvas.width = canvas.offsetWidth;
//   canvas.height = canvas.offsetHeight;
// }
// window.addEventListener("resize", resizeCanvas);
// resizeCanvas();

// // Start drawing
// function startPosition(e) {
//   drawing = true;
//   if (!heartMode) draw(e);
// }

// // End drawing
// function endPosition() {
//   drawing = false;
//   ctx.beginPath();
// }

// // Draw on canvas
// function draw(e) {
//   if (!drawing || heartMode) return;

//   let x, y;
//   if (e.touches) {
//     x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
//     y = e.touches[0].clientY - canvas.getBoundingClientRect().top;
//   } else {
//     x = e.clientX - canvas.getBoundingClientRect().left;
//     y = e.clientY - canvas.getBoundingClientRect().top;
//   }

//   ctx.lineWidth = 2;
//   ctx.lineCap = "round";
//   ctx.strokeStyle = rainbowMode ? `hsl(${hue++}, 100%, 50%)` : "#b23a48";

//   ctx.lineTo(x, y);
//   ctx.stroke();
//   ctx.beginPath();
//   ctx.moveTo(x, y);
// }

// // Draw heart on click or touch
// function placeHeart(e) {
//   if (!heartMode) return;

//   let x, y;
//   if (e.touches) {
//     e.preventDefault();
//     x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
//     y = e.touches[0].clientY - canvas.getBoundingClientRect().top;
//   } else {
//     x = e.clientX - canvas.getBoundingClientRect().left;
//     y = e.clientY - canvas.getBoundingClientRect().top;
//   }

//   const size = 20 + Math.random() * 10;
//   ctx.font = `${size}px Arial`;
//   ctx.fillStyle = "red";
//   ctx.fillText("❤️", x - size / 2, y + size / 2);
// }

// // Mouse events
// canvas.addEventListener("mousedown", startPosition);
// canvas.addEventListener("mouseup", endPosition);
// canvas.addEventListener("mousemove", draw);
// canvas.addEventListener("click", placeHeart);

// // Touch events
// canvas.addEventListener("touchstart", function (e) {
//   if (heartMode) {
//     placeHeart(e);
//   } else {
//     startPosition(e);
//   }
// });
// canvas.addEventListener("touchend", endPosition);
// canvas.addEventListener("touchmove", draw);

// // Clear button
// document.getElementById("clear-btn").addEventListener("click", () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// });

// // Save button
// document.getElementById("save-btn").addEventListener("click", () => {
//   const link = document.createElement("a");
//   link.download = "drawing.png";
//   link.href = canvas.toDataURL();
//   link.click();
// });

// // Rainbow button
// const rainbowBtn = document.getElementById("rainbow-btn");
// const heartBtn = document.getElementById("heart-btn");

// rainbowBtn.addEventListener("click", () => {
//   rainbowMode = !rainbowMode;
//   heartMode = false;
//   rainbowBtn.classList.toggle("active", rainbowMode);
//   heartBtn.classList.remove("active");
// });

// // Heart button
// heartBtn.addEventListener("click", () => {
//   heartMode = !heartMode;
//   rainbowMode = false;
//   heartBtn.classList.toggle("active", heartMode);
//   rainbowBtn.classList.remove("active");
// });







const colorPicker = document.getElementById("color-picker");


const canvas = document.getElementById("draw-canvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let rainbowMode = false;
let heartMode = false;
let eraserMode = false;
let hue = 0;

// Resize canvas
function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Start drawing
function startPosition(e) {
  drawing = true;
  if (!heartMode) draw(e);
}

// End drawing
function endPosition() {
  drawing = false;
  ctx.beginPath();
}

// Drawing logic
function draw(e) {
  if (!drawing || heartMode) return;

  let x, y;
  if (e.touches) {
    x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    y = e.touches[0].clientY - canvas.getBoundingClientRect().top;
  } else {
    x = e.clientX - canvas.getBoundingClientRect().left;
    y = e.clientY - canvas.getBoundingClientRect().top;
  }

ctx.lineWidth = parseInt(brushSizeInput.value);
  ctx.lineCap = "round";

  if (eraserMode) {
    ctx.strokeStyle = "white";
  } else if (rainbowMode) {
    ctx.strokeStyle = `hsl(${hue++}, 100%, 50%)`;
  } else {
    ctx.strokeStyle = "black";
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

// Heart Stamp
function placeHeart(e) {
  if (!heartMode) return;

  let x, y;
  if (e.touches) {
    e.preventDefault();
    x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    y = e.touches[0].clientY - canvas.getBoundingClientRect().top;
  } else {
    x = e.clientX - canvas.getBoundingClientRect().left;
    y = e.clientY - canvas.getBoundingClientRect().top;
  }

  const size = 20 + Math.random() * 10;
  ctx.font = `${size}px Arial`;
  ctx.fillStyle = "red";
  ctx.fillText("❤️", x - size / 2, y + size / 2);
}

// Mouse & Touch Events
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("click", placeHeart);

canvas.addEventListener("touchstart", function (e) {
  if (heartMode) {
    placeHeart(e);
  } else {
    startPosition(e);
  }
});
canvas.addEventListener("touchend", endPosition);
canvas.addEventListener("touchmove", draw);

// Button functionality
const rainbowBtn = document.getElementById("rainbow-btn");
const heartBtn = document.getElementById("heart-btn");
const eraserBtn = document.getElementById("eraser-btn");

document.getElementById("clear-btn").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById("save-btn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "drawing.png";
  link.href = canvas.toDataURL();
  link.click();
});

rainbowBtn.addEventListener("click", () => {
  rainbowMode = !rainbowMode;
  heartMode = false;
  eraserMode = false;
  rainbowBtn.classList.toggle("active", rainbowMode);
  heartBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
});

heartBtn.addEventListener("click", () => {
  heartMode = !heartMode;
  rainbowMode = false;
  eraserMode = false;
  heartBtn.classList.toggle("active", heartMode);
  rainbowBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
});

eraserBtn.addEventListener("click", () => {
  eraserMode = !eraserMode;

  // Turn off other modes
  rainbowMode = false;
  heartMode = false;

  // Toggle active state visually
  eraserBtn.textContent = eraserMode ? "Draw Mode" : "Eraser";
  eraserBtn.classList.toggle("active", eraserMode);
  rainbowBtn.classList.remove("active");
  heartBtn.classList.remove("active");
});


const brushSizeInput = document.getElementById("brush-size");
ctx.lineWidth = parseInt(brushSizeInput.value);










