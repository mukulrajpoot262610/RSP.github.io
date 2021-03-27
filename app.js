const start = document.getElementById("start-btn");
const welcome = document.getElementsByClassName("welcome-page");
const game = document.getElementsByClassName("game-area");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const player = document.getElementById("player");
const ai = document.getElementById("ai");
const playerScore = document.getElementById("player-score");
const aiScore = document.getElementById("ai-score");
const wonPage = document.getElementsByClassName("end-page");
const winner = document.getElementById("winner");
const option = document.getElementsByClassName("option");
const playAgain = document.getElementById("playagain-btn");
const rulesPage = document.getElementsByClassName("rules-page");
const nextBtn = document.getElementById("next-btn");

playAgain.addEventListener("click", () => {
  location.reload();
});

start.addEventListener("click", () => {
  welcome[0].style.display = "none";
  rulesPage[0].style.display = "flex";
});

nextBtn.addEventListener("click", () => {
  game[0].style.display = "flex";
  rulesPage[0].style.display = "none";
});

let aiOption = null;

rock.addEventListener("click", () => {
  player.innerHTML = "✊";
  aiOption = Math.floor(Math.random() * 3);
  winnerRock();
});

paper.addEventListener("click", () => {
  player.innerHTML = "🖐️";
  aiOption = Math.floor(Math.random() * 3);
  winnerPaper();
});

scissor.addEventListener("click", () => {
  player.innerHTML = "✌️";
  aiOption = Math.floor(Math.random() * 3);
  winnerScissor();
});

let pScore = 0;
let aScore = 0;

// --------------------------------- logic part ----------------------------
function winnerRock() {
  if (aiOption === 0) {
    ai.innerHTML = "✊";
  } else if (aiOption === 1) {
    ai.innerHTML = "🖐️";
    aiScore.innerHTML = ++aScore;
  } else if (aiOption === 2) {
    ai.innerHTML = "✌️";
    playerScore.innerHTML = ++pScore;
  }
  if (pScore === 10 || aScore === 10) {
    game[0].style.display = "none";
    option[0].style.display = "none";
    wonPage[0].style.display = "flex";
    if (pScore > aScore) {
      winner.innerHTML = "You Won 🐱";
    } else {
      winner.innerHTML = "You Lose 😈";
    }
  }
}

function winnerPaper() {
  if (aiOption === 0) {
    ai.innerHTML = "✊";
    playerScore.innerHTML = ++pScore;
  } else if (aiOption === 1) {
    ai.innerHTML = "🖐️";
  } else if (aiOption === 2) {
    ai.innerHTML = "✌️";
    aiScore.innerHTML = ++aScore;
  }
  if (pScore === 10 || aScore === 10) {
    option[0].style.display = "none";
    game[0].style.display = "none";
    wonPage[0].style.display = "flex";
    if (pScore > aScore) {
      winner.innerHTML = "You Won 🐱";
    } else {
      winner.innerHTML = "You Lose 😈";
    }
  }
}

function winnerScissor() {
  if (aiOption === 0) {
    ai.innerHTML = "✊";
    aiScore.innerHTML = ++aScore;
  } else if (aiOption === 1) {
    ai.innerHTML = "🖐️";
    playerScore.innerHTML = ++pScore;
  } else if (aiOption === 2) {
    ai.innerHTML = "✌️";
  }
  if (pScore === 10 || aScore === 10) {
    game[0].style.display = "none";
    option[0].style.display = "none";
    wonPage[0].style.display = "flex";
    if (pScore > aScore) {
      winner.innerHTML = "You Won 🐱";
    } else {
      winner.innerHTML = "You Lose 😈";
    }
  }
}

// if (pScore === 10 || aScore === 10) {
//   game[0].style.display = "none";
//   wonPage[0].style.display = "flex";
//   if (pScore > aScore) {
//     winner.innerHTML = "You Won 🐱";
//   } else {
//     winner.innerHTML = "You Lose 😈";
//   }
// }

// // ============================== toggle ==========================/
// const icons = document.querySelectorAll(".toggle h1");
// let i = 1;

// setInterval(() => {
//   i++;

//   const icon = document.querySelector(".toggle .active");
//   icon.classList.remove("active");

//   if (i > icons.length) {
//     icons[0].classList.add("active");
//     i = 1;
//   } else {
//     icon.nextElementSibling.classList.add("active");
//   }
// }, 1000);
