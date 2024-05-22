const init = () => {
  const luckyDipBtn = document.querySelector("#lottoBtn");
  const balls = document.querySelectorAll(".lotto"); // Corrected selector
  let numbers = [];
  let lotto = [];
  const maxNum = 40;
  const totalBalls = 8;

  for (let i = 1; i <= maxNum; i++) {
    numbers.push(i);
  }

  luckyDipBtn.addEventListener("click", () => {
    lotto = [];

    // Fill lotto array with unique numbers and assign random colors
    while (lotto.length < totalBalls) {
      const number = numbers[Math.floor(Math.random() * numbers.length)];
      const numberExists = lotto.find((o) => o.number === number);

      if (!numberExists) {
        // Generate a random color
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        lotto.push({ number, colour: randomColor });
      }
    }

    displayResult(lotto, balls);
  });

  // Display 7 numbers with correct colours from lotto array
  const displayResult = (lotto, balls) => {
    for (let i = 0; i < balls.length; i++) {

      if (i == 6) {
        continue;
      }
      balls[i].classList.remove("show");

      setTimeout(() => {
        balls[i].classList.add("show");

        let rollingInterval = setInterval(() => {
          balls[i].innerHTML = Math.floor(Math.random() * maxNum) + 1;
          // Q
        }, 50);

        setTimeout(() => {
          clearInterval(rollingInterval);
          balls[i].innerHTML = lotto[i].number;
        }, 2000);
      }, 500 * (i + 1));
    }
  };
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});