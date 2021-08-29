var startBtnEl = document.querySelector('#start');
var timerEl = document.getElementById("countdown");
var quizEl = document.getElementById("quiz");
var questionsEl = document.getElementById("questions");
var resultsEl = document.getElementById("result");
var currentScore = document.getElementById('current-score');

var submitScoreBtn = document.getElementById("submitScore");
var submitBtnEl = document.querySelector('#submit-initials');

var A = document.getElementById("1");
var B = document.getElementById("2");
var C = document.getElementById("3");
var D = document.getElementById("4");

// Questions!
var questions = [{
    question: "Why do JavaScript and Java have similar names?",
    answer1: "JavaScript is a stripped-down version of Java",
    answer2: "JavaScript's syntax is loosely based on Java's",
    answer3: "They both originated on ther island of Java",
    answer4: "None of The Above",
    correctAnswer: "b"},  

];

var currentQuestionIndex = 0;

var displayQuestion = function () {
    var currentQuestion = questions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    A.innerHTML = currentQuestion.answer1;
};

function startQuiz(){

    displayQuestion();
}

startBtnEl.addEventListener("click",startQuiz);
