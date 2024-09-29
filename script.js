// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Select necessary elements
  const buttonOne = document.querySelector(".coffee-header__button-one");
  const buttonTwo = document.querySelector(".coffee-header__button-two");
  const coffeeArm = document.querySelector(".coffee-medium__arm");
  const coffeeLiquid = document.querySelector(".coffee-medium__liquid");
  const coffeeSmokes = document.querySelectorAll(".coffee-medium__smoke");
  const display = document.querySelector(".coffee-header__display");

  // Function to animate brewing coffee
  function startBrewing() {
    display.textContent = "Brewing...";
    coffeeArm.classList.add("move-arm"); // Animate arm
    coffeeLiquid.classList.add("fill-coffee"); // Simulate filling coffee

    // Start smoke animation
    coffeeSmokes.forEach((smoke, index) => {
      setTimeout(() => {
        smoke.classList.add("start-smoke");
      }, index * 500);
    });

    // End brewing after a few seconds
    setTimeout(() => {
      display.textContent = "Coffee Ready!";
      coffeeArm.classList.remove("move-arm");
      coffeeLiquid.classList.remove("fill-coffee");
      coffeeSmokes.forEach((smoke) => smoke.classList.remove("start-smoke"));
    }, 5000);
  }

  // Button one will start brewing
  buttonOne.addEventListener("click", startBrewing);

  // Button two will reset the machine display
  buttonTwo.addEventListener("click", () => {
    display.textContent = "";
  });
});
