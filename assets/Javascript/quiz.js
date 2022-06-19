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

// 