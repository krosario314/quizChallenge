var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var progressText = document.querySelector("#progressText");
var scoreText = document.querySelector("#score");

var currentQuestion = {}
var acceptingAnswers = true
var score = 0
var questionCounter = 0
var availableQuestions = {}

let questions = [
    {
        question: "What is coding?",
        choice1: "Javascript",
        choice2: "Writing instructions in a language that computers understand",
        choice3: "Writing directions with ONLY numbers to reveal a secret message",
        choice4: "A way to communicate to R2-D2",
        answer: 2,
    },
    {
        question: "What is the name for the basic orders given to a computer?",
        choice1: "Code",
        choice2: "Algorithm",
        choice3: "HTML",
        choice4: "All of the above",
        answer: 1,
    },
    {
        question: "What kind of instructions are used to do a repetitive task?",
        choice1: "A function",
        choice2: "An element",
        choice3: "A repeat button",
        choice4: "A loop",
        answer: 4,
    },
    {
        question: "What is an error in a program that prevents the program from running as expected?",
        choice1: "Program",
        choice2: "Bug",
        choice3: "code",
        choice4: "software",
        answer: 2,
    },
    {
        question: "What is an event in coding?",
        choice1: "a way to plan a party",
        choice2: "an item for your calendar",
        choice3: "an action that causes something to happen",
        choice4: "a coding social event",
        answer: 3,
    },
    {
        question: "What is a list of steps you can follow to finish a task?",
        choice1: "Algorithm",
        choice2: "Bug",
        choice3: "Code",
        choice4: "CSS",
        answer: 1,
    }
]

var SCORE_POINTS = 100
var MAX_QUESTIONS = 6

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'

    var questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        acceptingAnswers = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame