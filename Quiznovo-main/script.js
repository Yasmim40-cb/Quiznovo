const question = [
    {
        question: "Qual é a capital do Canadá?",
        answers: [
            { id: 1, text: "Toronto", correct:false},
            { id: 2, text: "Vancouver", correct:false},
            { id: 3, text: "Ottawa", correct:true},
            { id: 4, text: "Montreal", correct:false},
        ]
    },

    {
        question: "Qual é a capital da Austrália?",
        answers: [
            { id: 1, text: "Sydney", correct:false},
            { id: 2, text: "Melbourne", correct:false},
            { id: 3, text: "Brisbane", correct:false},
            { id: 4, text: "Canberra", correct:true},
        ]
    },

    {
        question: "Qual é a capital do África do Sul?",
        answers: [
            { id: 1, text: "Joanesburgo", correct:false},
            { id: 2, text: "Pretória", correct:true},
            { id: 3, text: "Cidade do Cabo", correct:false},
            { id: 4, text: "Durban", correct:false},
        ]
    },

    {
        question: "Qual é a capital do Argentina?",
        answers: [
            { id: 1, text: "Buenos Aires", correct:true},
            { id: 2, text: "Córdoba", correct:false},
            { id: 3, text: "Rosário", correct:false},
            { id: 4, text: "Mendoza", correct:false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answear-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
      }
    }

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.array.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    })
}

function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter ((answer) => answer.correct == true)[0]; 

    const selectedBtn = e.target;
    const isCorrect= selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.lenght}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex <question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (durrentQuestionIndex < question.lenght) {
        handleNextButton();
    } else {
        startQuiz();
    }
    })


startQuiz();