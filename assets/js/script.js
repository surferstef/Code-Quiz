var startBtnEl = document.querySelector('#start');
var timerEl = document.getElementById("countdown");
var quizEl = document.getElementById("quiz");
var questionsEl = document.getElementById("questions");
var resultsEl = document.getElementById("result");
var currentScore = document.getElementById('current-score');
var submitScoreBtn = document.getElementById("submitScore");
var submitBtnEl = document.querySelector('#submit-initials');
var initialsEl = document.querySelector('.enter-initials');
var finalScoreEl = document.getElementById("finalScore");

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
    answer1: "script href=\"abc.js\"",
    answer2: "script name=\"abc.js\"",
    answer3: "script src=\"abc.js\"",
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
var finalQuestionIndex = questions.length;
var score = 0;
var timeLeft=60;
var timerInterval;
var correct;


function displayQuestion(){
   // gameOverEl.style.display = "none";
   
    var currentQuestion = questions[currentQuestionIndex];
    questionsEl.innerHTML = "<a>" + currentQuestion.question + "</a>";
    A.innerHTML = currentQuestion.answer1;
    B.innerHTML = currentQuestion.answer2;
    C.innerHTML = currentQuestion.answer3;
    D.innerHTML = currentQuestion.answer4;
};


var startTimer = function() {
    console.log("Timer is running");
    timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--
        }
        else {
            timeInterval.textContent = '';
            clearInterval(timeInterval);
            alert("Time's up!");
            endGame();
        }
    }, 1000);
}

function startQuiz(){
    startTimer();
    displayQuestion();
  //  quizEl.style.display = "block";
}

var saveScore = function (event) {
    event.preventDefault();
    console.log('saveScore is running');
    var initialsInput = document.querySelector("input[name='initials-input']").value;
    if(initialsInput === "") {
        alert("Initials cannot be blank!");
        return false
    }
    else {
        scoresArray.push({initials: initialsInput, score: score});
        localStorage.setItem("score", JSON.stringify(scoresArray));
        showScore();
    }
}

var endGame = function() {
    score = timeLeft;
    currentScore.innerText = "Your score is " + score + "!"
    questionsEl.classList.add('hidden');
    initialsEl.classList.remove('hidden');
}

function showScore(){
    quizEl.style.display = "none"
    gameOverEl.style.display = "flex";
    clearInterval(timerInterval);
    initialsEl.value = "";
    finalScoreEl.innerHTML = "You scored " + score + " out of " + questions.length + " correct!";
}

function checkAnswer(answer){
    correct = questions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex){
        score++;
        
        currentQuestionIndex++;
        displayQuestion();
    }else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex){
        // if answer is wrong, subtract 15 secs from timer 
        timeLeft = (timeLeft - 15);

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }
        currentQuestionIndex++;
        displayQuestion();
    }else{
        showScore();
    }
}

startBtnEl.addEventListener("click",startQuiz);
