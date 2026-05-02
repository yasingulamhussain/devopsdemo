// Initialize counter value
let count = 0;

// Select elements
const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Update UI function
function updateCounter() {
  counter.textContent = count;
}

// Event listeners
increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});
