// Reference DOM elements
const box = document.getElementById("box");
const result = document.getElementById("result");

let startTime;

// Generate a random position for the box within the window
function moveBox() {
  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight - 100;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  box.style.left = `${randomX}px`;
  box.style.top = `${randomY}px`;
}

// Show the box after a random delay
function showBoxWithDelay() {
  const delay = Math.random() * 2000 + 1000; // 1 to 3 seconds
  setTimeout(() => {
    moveBox();
    box.style.display = "block";
    startTime = new Date().getTime();
  }, delay);
}

// Calculate and show reaction time
box.addEventListener("click", () => {
  const clickTime = new Date().getTime();
  const reactionTime = (clickTime - startTime) / 1000;

  result.textContent = `Your reaction time: ${reactionTime.toFixed(3)} seconds`;

  // Change box color for visual feedback
  box.style.backgroundColor = getRandomColor();
  box.style.display = "none";

  // Show next box after delay
  showBoxWithDelay();
});

// Utility: Random color generator
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Start the game
showBoxWithDelay();
