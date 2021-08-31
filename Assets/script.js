var startButton=document.getElementById("start-button");
var displayTime=document.getElementById("display-time");
var timeLeft=480;

var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".answers");
var responseEl = document.querySelector(".response");
var scoreEl = document.querySelector("#score");
var timerEl = document.querySelector("#time");
var questionsEl = document.querySelector("#questions-container");
var resultsEl = document.getElementById("results");

var questions = [
    {
        question: "What is Javascript?",
        answers:["Programming language", "CSS", "HTML", "Python"],
        correct:"programming language"
    },
    {
        question: "What year are we in?",
        answers:["2000", "2035", "2021", "2023"],
        correct:"2021"
    },
    {
        question: "How many days are in a year?",
        answers:["426", "365", "520", "365"],
        correct:"365"
    },
    {
        question: "How many days are in a week?",
        answers:["14", "32", "7", "8"],
        correct:"7"
    },
    {
        question: "How many months in a year?",
        answers:["24", "12", "36", "6"],
        correct:"12"
    },
    {
        question: "GAME OVER",
        answers: ["Save My Score"],
        
    },
    
function gameOver() {
    console.log
}    


]

var results = [
    {
        results: "Your total score is:",
        answers: ["4"],
    },
]

var currentQuestion = 0;
var score = 0;

// Starts the quiz
function startQuiz(){
    var startContainer=document.getElementById("start-container");
    startContainer.classList.add("hide");
    questionsEl.classList.remove("hide");
    startTimer();
    renderAnswers();
} 

// Starts the timer
function startTimer() {
    var timer=setInterval(() => {
    timeLeft--;
    displayTime.textContent="Time Left: " + timeLeft
    }, 1000);
}


function renderAnswers(){
    answersEl.innerHTML= ""
    questionEl.textContent = questions[currentQuestion].question;

    for(let i=0; i<questions[currentQuestion].answers.length; i++) {
        let btnEl = document.createElement ('button');
        btnEl.textContent=questions[currentQuestion].answers[i];
        answersEl.append(btnEl);

    }

}

function checkAnswers(e){
    if(e.target.type === "submit"){
        if(e.target.textContent === questions[currentQuestion].correct){
            score++;
            scoreEl.textContent = score ;
        }
        else{
            timeLeft-=100;
        }
        currentQuestion++;
        renderAnswers()
    }
}

answersEl.addEventListener("click",checkAnswers)
startButton.addEventListener("click", startQuiz);
endButton.addEventListener("textbox", endButton);

