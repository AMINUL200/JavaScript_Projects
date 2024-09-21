// Array of questions and their respective answers
const questions = [
  // Question 1
  {
      question: "Which is the largest animal in the world?",
      answers: [
          { text: "Shark", correct: false },
          { text: "Blue whale", correct: true },
          { text: "Elephant", correct: false },
          { text: "Giraffe", correct: false },
      ]
  },
  // Question 2
  {
      question: "Which is the smallest country in the world?",
      answers: [
          { text: "Vitican City", correct: true },
          { text: "Bhutan", correct: false },
          { text: "Nepal", correct: false },
          { text: "Shri Lanka", correct: false },
      ]
  },
  // Question 3
  {
      question: "Which is the largest desert in the world?",
      answers: [
          { text: "Kalahari", correct: false },
          { text: "Gobi", correct: false },
          { text: "Sahara", correct: false },
          { text: "Antarctica", correct: true },
      ]
  },
  // Question 4
  {
      question: "Which is the smallest continent in the world?",
      answers: [
          { text: "Asia", correct: false },
          { text: "Austalia", correct: true },
          { text: "Arctic", correct: false },
          { text: "Africa", correct: false },
      ]
  },
];

// DOM elements
const questionElement = document.querySelector("#question");
const answerBtns = document.querySelector("#answer-buttons")
const nextBtn = document.querySelector("#next-btn");

let currQuestIdx = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
  currQuestIdx = 0;
  score = 0;
  nextBtn.innerText = "Next";
  showQuestion();
}

// Function to display a question and its answers
function showQuestion() {
  resetSate();
  let currQuestion = questions[currQuestIdx];
  let questionNo = currQuestIdx + 1;
  questionElement.innerHTML = questionNo + ". " + currQuestion.question;

  // Dynamically create answer buttons and add event listeners
  currQuestion.answers.forEach(answer => {
      const btn = document.createElement("button");
      btn.innerHTML = answer.text;
      btn.classList.add("btn");
      answerBtns.appendChild(btn);
      btn.dataset.correct = answer.correct; // Assign correctness to the button
      btn.addEventListener("click", selectAnswer);
  });
};

// Function to reset the state of the quiz
function resetSate() {
  nextBtn.style.display = "none";
  while (answerBtns.firstChild) {
      answerBtns.removeChild(answerBtns.firstChild);
  }
}

// Function to handle the selection of an answer
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
  } else {
      selectedBtn.classList.add("incorrect");
      // Find and style the correct answer button in green
      const correctBtn = Array.from(answerBtns.children).find(button => button.dataset.correct === "true");
      correctBtn.classList.add("correct");
  }
  // Disable all buttons after an answer is selected
  Array.from(answerBtns.children).forEach(button => {
      button.disabled = true;
  });
  nextBtn.style.display = "block";
}

// Function to display the final score
function showScore() {
  resetSate();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

// Function to handle the next button click
function handleNextButton() {
  currQuestIdx++;
  if (currQuestIdx < questions.length) {
      showQuestion();
  } else {
      showScore();
  }
}

// Event listener for the next button click
nextBtn.addEventListener("click", () => {
  if (currQuestIdx < questions.length) {
      handleNextButton();
  } else {
      startQuiz();
  }
});

// Start the quiz when the page loads
startQuiz();
