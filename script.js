const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const scoreBtn = document.getElementById("checkscore");
const trueBtn = document.getElementById("true");
const falseBtn = document.getElementById("false");
const questionText = document.getElementById("questionarea");
const quizBtn = document.getElementById("takequiz");
const currentq = document.getElementById("qnNo");
const totalscore = document.getElementById("totalScore");


let currentQues = 0;
let score = 0;

let questions = [
    {
        question: "What is the pH of H2O?",
        answers: [
            {
                option: "seven",
                answer: "true"
            },
            {
                option: "zero",
                answer: "false"
            }

        ]
    },
    {
        question: "Which of the following compound is mainly used in hand sanitizer?",
        answers: [
            {
                option: "Alcohol",
                answer: "true"
            },
            {
                option: "Acetic acid",
                answer: "false"
            }
        ]
    },
    {
        question: "Javascript is an _______ language?",
        answers: [
            {
                option: "Procedural",
                answer: "false"
            },
            {
                option: "Object-oriented",
                answer: "true"
            }
        ]
    },
    {
        question: " What is the S.I unit of frequency?",
        answers: [
            {
                option: "Hertz",
                answer: "true"
            },
            {
                option: "Dioptre",
                answer: "false"
            }
        ]
    },
    {
        question: "The full form of CSS is:",
        answers: [
            {
                option: "Colour and Style Sheets",
                answer: "false"
            },
            {
                option: "Cascading Style Sheets",
                answer: "true"
            }
        ]
    }
]
quizBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
scoreBtn.addEventListener("click", checkScore);

function startQuiz() {
    trueBtn.style.display = "inline-block";
    falseBtn.style.display = "inline-block";
    currentQues = 0;
    currentq.innerHTML = currentQues + 1;
    totalscore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQues].question;
    trueBtn.innerHTML = questions[currentQues].answers[0].option;
    trueBtn.onclick = () => {
        if (questions[currentQues].answers[0].answer == "true") {
            if (score < 5) {
                score++;
            }
        }
        trueBtn.style.backgroundColor = "violet";

    }
    falseBtn.innerHTML = questions[currentQues].answers[1].option;
    falseBtn.onclick = () => {
        if (questions[currentQues].answers[1].answer == "true") {
            if (score < 5) {
                score++;
            }
        }
        falseBtn.style.backgroundColor = "violet";

    }
    prevBtn.classList.add("hide");
}
function next() {
    currentQues++;
    currentq.innerHTML = currentQues + 1;
    falseBtn.style.backgroundColor = 'rgb(110, 3, 92)';
    trueBtn.style.backgroundColor = 'rgb(110, 3, 92)';
    if (currentQues >= 4) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQues].question;
    trueBtn.innerHTML = questions[currentQues].answers[0].option;

    trueBtn.onclick = () => {
        if ((questions[currentQues].answers[0].answer == "true") && (trueBtn.style.backgroundColor != "violet")) {
            if (score < 5) {
                score++;
            }
        }
        trueBtn.style.backgroundColor = "violet";
    }
    falseBtn.innerHTML = questions[currentQues].answers[1].option;
    falseBtn.onclick = () => {
        if ((questions[currentQues].answers[1].answer == "true") && (falseBtn.style.backgroundColor != "violet")) {
            if (score < 5) {
                score++;
            }
        }
        falseBtn.style.backgroundColor = "violet";

    }
    prevBtn.classList.remove("hide");
}

function prev() {
    currentQues--;
    falseBtn.style.backgroundColor = 'rgb(110, 3, 92)';
    trueBtn.style.backgroundColor = 'rgb(110, 3, 92)';
    currentq.innerHTML = currentQues + 1;
    if (currentQues <= 0) {
        prevBtn.classList.add("hide");
        nextBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQues].question;
    trueBtn.innerHTML = questions[currentQues].answers[0].option;

    trueBtn.onclick = () => {
        if ((questions[currentQues].answers[0].answer == "true") && (trueBtn.style.backgroundColor != "violet")) {
            if (score < 5) {
                score++;
            }
        }
        trueBtn.style.backgroundColor = "violet";
    }
    falseBtn.innerHTML = questions[currentQues].answers[1].option;

    falseBtn.onclick = () => {
        if ((questions[currentQues].answers[1].answer == "true") && (falseBtn.style.backgroundColor != "violet")) {
            if (score < 5) {
                score++;
            }
        }
        falseBtn.style.backgroundColor = "violet";

    }
    nextBtn.classList.remove("hide");
}
var username = document.getElementById("name").value;
function checkScore() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    trueBtn.style.display = "none";
    falseBtn.style.display = "none";
    scoreBtn.classList.add("hide");
    questionText.innerHTML = `Your score :${score}/5    
    Congratulations on completing the Quiz!`;
}