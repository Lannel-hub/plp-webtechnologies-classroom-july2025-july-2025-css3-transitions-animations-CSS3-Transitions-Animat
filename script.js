/* === Part 2: JavaScript Functions & Scope === */

// Global variable (bad practice if overused, but shown for assignment)
let animationCount = 0;

// Pure function with parameters & return value
function calculateScaleClicks(clicks) {
  // Local scope variable
  let scale = 1 + clicks * 0.1;
  return scale > 2 ? 2 : scale; // Cap at scale 2
}

// Function to toggle CSS classes
function toggleAnimation(element, className) {
  element.classList.toggle(className);
  animationCount++; // modifies global scope
  console.log("Animations triggered:", animationCount);
}

// === Part 3: Combining CSS Animations with JS ===

// Animate Box
const box = document.getElementById("box");
document.getElementById("animateBoxBtn").addEventListener("click", () => {
  toggleAnimation(box, "animated");

  // Example of reusing function with return value
  let newScale = calculateScaleClicks(animationCount);
  box.style.transform = `scale(${newScale})`;
});

// Flip Card
const card = document.querySelector(".card");
document.getElementById("flipCardBtn").addEventListener("click", () => {
  toggleAnimation(card, "flipped");
});

// Modal
const modal = document.getElementById("modal");
const toggleModalBtn = document.getElementById("toggleModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

toggleModalBtn.addEventListener("click", () => {
  modal.classList.remove("hide");
  modal.classList.add("show");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.classList.add("hide");
  // Remove from DOM after fade out
  setTimeout(() => {
    modal.classList.remove("hide");
    modal.style.display = "none";
  }, 600);
});

