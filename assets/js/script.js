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
    {
    question: "What is the correct JavaScript syntax to write Hello World?",
    answer1: "System.out.println(\"Hello World\")",
    answer2: "println(\"Hello World\")",
    answer3: "document.write(\"Hello World\")",
    answer4: "response.write(\"Hello World\")",
    correctAnswer: "c"},
    {
    question: "What is the correct syntax for referring to an external script called \"abc.js\"?",
    answer1: "<script href=\"abc.js\">",
    answer2: "<script name=\"abc.js\">",
    answer3: "<script src=\"abc.js\">",
    answer4: "None of The Above",
    correctAnswer: "c"},
    {
    question: "Which types of image maps can be used with JavaScript?",
    answer1: "Server-side image maps",
    answer2: "Client-side image maps",
    answer3: "Server-side image maps and Client-side image maps",
    answer4: "None of The Above",
    correctAnswer: "b"},
];

var currentQuestionIndex = 0;


function displayQuestion(){
   // gameOverEl.style.display = "none";
   
    var currentQuestion = questions[currentQuestionIndex];
    questionsEl.innerHTML = "<a>" + currentQuestion.question + "</a>";
    A.innerHTML = currentQuestion.answer1;
    B.innerHTML = currentQuestion.answer2;
    C.innerHTML = currentQuestion.answer3;
    D.innerHTML = currentQuestion.answer4;
};
// var displayQuestion = function () {
//     var currentQuestion = questions[currentQuestionIndex];
//     questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
//     A.innerHTML = currentQuestion.answer1;
// };

function startQuiz(){

    displayQuestion();
  //  quizEl.style.display = "block";
}

startBtnEl.addEventListener("click",startQuiz);
