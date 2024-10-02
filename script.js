let questions = [
  {
    question: "How many time zones are there in Russia?",
    answers: ["10", "11", "12", "13"],
    correct: 2
  },
  {
    question: "What’s the smallest country in the world?",
    answers: ["Costa Rica", "The Vactian", "Russia", "Hati"],
    correct: 2
  },
  {
    question: "What’s the capital of Canada?",
    answers: ["Winnipeg", "Toronto", "Ottawa", "Montreal"],
    correct: 3
  }
];

let currentQuestionIndex = 0;
let score = 0;

// Load first question
function loadQuestion() {
  let questionObj = questions[currentQuestionIndex];
  $("#question").text(questionObj.question);
  $(".answer-btn").each(function (index) {
    $(this).text(questionObj.answers[index]);
  });
}

// Check answer
$(".answer-btn").click(function () {
  let selectedAnswer = $(this).data("answer");
  let correctAnswer = questions[currentQuestionIndex].correct;

  if (selectedAnswer === correctAnswer) {
    $("#result").text("Correct!");
    score++;
  } else {
    $("#result").text(
      "Wrong! The correct answer was " +
        questions[currentQuestionIndex].answers[correctAnswer - 1]
    );
  }

  $("#score").text("Score: " + score);
  currentQuestionIndex++;

  // If there are more questions, load the next one
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    $("#result").text("Quiz Over! Your final score is: " + score);
    $(".answer-btn").prop("disabled", true);
  }
});

// Reset game
$("#reset-btn").click(function () {
  currentQuestionIndex = 0;
  score = 0;
  $("#result").text("");
  $("#score").text("Score: 0");
  $(".answer-btn").prop("disabled", false);
  loadQuestion();
});

// Initialize game
$(document).ready(function () {
  loadQuestion();
});
