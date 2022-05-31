//variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var counter = document.getElementById("counter");
var scoreDiv = document.getElementById("scoreContainer");

// create quiz questions

let questions = [
    {
        question : "What is coding?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Correct",
        choiceD : "Wrong",
        correct : "C"
    },{
        question : "What kind of instructions are used to do a repeptitive task?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
    },{
        question : "What is the name for the basic orders givens to a computer?",
        choiceA : "Wrong",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Correct",
        correct : "D"
    },{
        question : "What does HTML stand for?",
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
    },{
        questions : "Who is the main character of Scratch?",
        choiceA : "Wrong",
        choiceB : "Correct",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "B"
    },{
        questions : "What is an error in a program that prevents the program from running as expected?"
        choiceA : "Correct",
        choiceB : "Wrong",
        choiceC : "Wrong",
        choiceD : "Wrong",
        correct : "A"
    }
];

// create more variables