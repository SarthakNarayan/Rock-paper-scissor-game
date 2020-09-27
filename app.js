// getting all the elements
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const winning_statement = document.querySelector(".winner-sentence");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const reset = document.querySelector(".button");

// scores
let user_score = 0;
let computer_score = 0;

const random_generator = () => {
  const randomnumber = Math.floor(Math.random() * 3);
  return randomnumber;
};

const game = (user_choice) => {
  const number_generated = random_generator();
  const array = ["rock", "paper", "scissor"];
  const computer_choice = array[number_generated];
  if (user_choice === "rock") {
    if (computer_choice === "rock") {
      winning_statement.innerHTML = "It is a tie";
    }
    if (computer_choice === "scissor") {
      user_score++;
      winning_statement.innerHTML = "Rock(U) beats scissors(C). You win";
      userscore_span.innerHTML = user_score;
    }
    if (computer_choice === "paper") {
      computer_score++;
      winning_statement.innerHTML = "Paper(C) beats rock(U). You lose";
      computerscore_span.innerHTML = computer_score;
    }
  } else if (user_choice === "paper") {
    if (computer_choice === "paper") {
      winning_statement.innerHTML = "It is a tie";
    }
    if (computer_choice === "rock") {
      user_score++;
      winning_statement.innerHTML = "Paper(U) beats rock(C). You win";
      userscore_span.innerHTML = user_score;
    }
    if (computer_choice === "scissor") {
      computer_score++;
      winning_statement.innerHTML = "Scissor(C) beats paper(U). You lose";
      computerscore_span.innerHTML = computer_score;
    }
  } else {
    if (computer_choice === "scissor") {
      winning_statement.innerHTML = "It is a tie";
    }
    if (computer_choice === "paper") {
      user_score++;
      winning_statement.innerHTML = "Scissor(U) beats paper(C). You win";
      userscore_span.innerHTML = user_score;
    }
    if (computer_choice === "rock") {
      computer_score++;
      winning_statement.innerHTML = "Rock(C) beats scissor(U). You lose";
      computerscore_span.innerHTML = computer_score;
    }
  }

  //   console.log(`User choice ${user_choice}`);
  //   console.log(`Computer choice ${computer_choice}`);
};

rock.addEventListener("click", () => {
  game("rock");
});
paper.addEventListener("click", () => {
  game("paper");
});
scissor.addEventListener("click", () => {
  game("scissor");
});

reset.addEventListener("click", () => {
  user_score = 0;
  computer_score = 0;
  userscore_span.innerHTML = user_score;
  computerscore_span.innerHTML = computer_score;
});
