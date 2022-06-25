// Tagging my HTML elements to variables
var startPage = document.getElementById("startPageCommands");
var startBtn = document.getElementById("startpageButton");
var startPageHighscoreBtn = document.getElementById("startpageHighscore");
var quizText = document.getElementById("theQuiz");
var quizTimer = document.getElementById("timeLeft");
var questionsContainer = document.getElementById("theQuestions");
var quizResults = document.getElementById("result");
var quizOver = document.getElementById("quizOver");
var finalScoreContainer = document.getElementById("finalScore");
var usernameDisplay = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreEl = document.getElementById("high-scores-page");
var highscoreUsername = document.getElementById("highscoreNickname");
var highscoreDisplay = document.getElementById("highscore-List");
var endQuizBtns = document.getElementById("endQuizCommands");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// The quiz questions 
var quizQuestions = [{
    question: "What is coding?",
    choiceA: "A bunch of math and numbers",
    choiceB: "Writing instructions in a language that only computers understand",
    choiceC: "A list of to do instructions for robots",
    choiceD: "A secret message written in numbers and letters",
    correctAnswer: "b"
    },

    {
        question: "What's an 'event' in coding?",
        choiceA: "A function to celebrate a special occasion",
        choiceB: "A way for your computer to cool down",
        choiceC: "An action that causes something to happen",
        choiceD: "A coding seminar",
        correctAnswer: "c"
    },

    {
        question: "What is an error in a program that prevents the program from running as expected?",
        choiceA: "Bug",
        choiceB: "Code",
        choiceC: "Algorithm",
        choiceD: "java",
        correctAnswer: "a"
    },

    {
        question: "What is the name for the basic orders given to a computer?",
        choiceA: "Line",
        choiceB: "Elements",
        choiceC: "Algorithm",
        choiceD: "Code",
        correctAnswer: "d"
    },

    {
        question: "What kind of instructions are used to do a repetitive task?",
        choiceA: "A loop",
        choiceB: "A function",
        choiceC: "A condition",
        choiceD: "An Event",
        correctAnswer: "a"
    },

    {
        question: "What do you call a person who writes the instructions for the computer to complete a task?",
        choiceA: "A composer",
        choiceB: "A programmer",
        choiceC: "A robot",
        choiceD: "R2-D2",
        correctAnswer: "b"
    },
];

// My variables
var finalQuestionEl = quizQuestions.length;
var currentQuestionEl = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;

// Generate questions and answers
function generateQuizQuestion(){
    quizOver.style.display = "none";
    if (currentQuestionEl === finalQuestionEl){
        return showScore();
    }
    var currentQuestionDisplayed = quizQuestions[currentQuestionEl];
    questionsContainer.innerHTML = "<p>" + currentQuestionDisplayed.question + "</p>";
    buttonA.innerHTML = currentQuestionDisplayed.choiceA;
    buttonB.innerHTML = currentQuestionDisplayed.choiceB;
    buttonC.innerHTML = currentQuestionDisplayed.choiceC;
    buttonD.innerHTML = currentQuestionDisplayed.choiceD;
};

// Start quiz + timer
function startQuiz(){
    quizOver.style.display = "none";
    startPage.style.display = "none";
    generateQuizQuestion();

    // Timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    quizText.style.display = "block";
}
// Highscore page
function showScore(){
    quizText.style.display = "none";
    quizOver.style.display = "flex";
    clearInterval(timerInterval);
    //highscoreUsername.value = " ";
    finalScoreContainer.innerHTML = "Your score is " + score + "/" + quizQuestions.length + " !";
}
// Saves scores and nickname with onClick
submitBtn.addEventListener("click", function highscore(){
    if (usernameDisplay.value === " ") {
        alert("Must enter a nickname");
        return false;
    } else {
        var savedScores = JSON.parse(localStorage.getItem("savedScores")) || []
        console.log(usernameDisplay.value)
        var currentUser = usernameDisplay.value.trim();
        var currentHighscore = {
            name: currentUser,
            score: score
        };
        quizOver.style.display = "none";
        highscoreEl.style.display = "flex";
        highscoreContainer.style.display = "block";
        endQuizBtns.style.display = "flex";

        savedScores.push(currentHighscore);
        localStorage.setItem("savedScores", JSON.stringify(savedScores));
        generateHighscores();
    }
});
// Clear scores button
function generateHighscores(){
    highscoreUsername.innerHTML = "";
    highscoreDisplay.innerHTML = "";
    var highscores = JSON.parse(localStorage.getItem("savedScores")) || [];
    for (i = 0; i < highscores.length; i++){
        var newName = document.createElement("h3");
        var newScore = document.createElement("h3");
        newName.textContent = highscores[i].name;
        newScore.textContent = highscores[i].score;
        highscoreUsername.appendChild(newName);
        highscoreDisplay.appendChild(newScore);
    }
}
// Display scores
function showHighscore(){
    startPage.style.display = "none";
    quizOver.style.display = "none";
    highscoreEl.style.display = "flex";
    highscoreContainer.style.display = "block";
    endQuizBtns.style.display = "flex";
    generateHighscores();
}

// clearing local storage
function clearScores(){
    window.localStorage.clear();
    usernameDisplay.textContent = "";
    highscoreDisplay.textContent = "";
}

// Restart quiz
function restartQuiz(){
    highscoreEl.style.display = "none";
    quizOver.style.display = "none";
    startPage.style.display = "flex";
    timeLeft = 90;
    score = 0;
    currentQuestionEl = 0;
}
// corrects and incorrect
function checkAnswer(answer){
    correct = quizQuestions[currentQuestionEl].correctAnswer;
    if (answer === correct && currentQuestionEl !== finalQuestionEl){
        score++;
        alert("Correct!");
        currentQuestionEl++;
        generateQuizQuestion();
    } else if (answer !== correct && currentQuestionEl !== finalQuestionEl){
        alert("Incorrect!")
        currentQuestionEl++;
        generateQuizQuestion();
    } else {
        showScore();
    }
}
// start quiz button here
startBtn.addEventListener("click", startQuiz);