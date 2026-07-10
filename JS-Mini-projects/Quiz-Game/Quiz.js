const Questions = [
    {
        question: "Who am I?",
        answer: [
            { text: "Human", correct: true },
            { text: "Alien", correct: false },
            { text: "Super Human", correct: false }
        ]
    },
    {
        question: "Which language is used to style web pages?",
        answer: [
            { text: "HTML", correct: false },
            { text: "CSS", correct: true },
            { text: "JavaScript", correct: false }
        ]
    },
    {
        question: "Which language is used to make web pages interactive?",
        answer: [
            { text: "CSS", correct: false },
            { text: "JavaScript", correct: true },
            { text: "HTML", correct: false }
        ]
    },

    {
        question: "Which company developed JavaScript?",
        answer: [
            { text: "Microsoft", correct: false },
            { text: "Netscape", correct: true },
            { text: "Google", correct: false }
        ]
    },

    {
        question: "Which method prints something in the browser console?",
        answer: [
            { text: "console.log()", correct: true },
            { text: "print()", correct: false },
            { text: "document.write()", correct: false }
        ]
    },
    {
        question: "Which keyword declares a block-scoped variable?",
        answer: [
            { text: "var", correct: false },
            { text: "let", correct: true },
            { text: "define", correct: false }
        ]
    },
 
    {
        question: "What does CSS stand for?",
        answer: [
            { text: "Creative Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false }
        ]
    }
];
const questionEl = document.querySelector(".question")
const AnsBtn = document.querySelector(".ans")
const nextbtn = document.querySelector(".next")

let currentIndex = 0;
let score = 0;

function startGame() {
    currentIndex = 0
    score = 0
    nextbtn.innerHTML = "Next"
    showQuestion()

}

function showQuestion() {
    resetState()
    let CurrentQues = Questions[currentIndex]
    let QuesNo = currentIndex + 1

    questionEl.innerHTML = QuesNo + "." + CurrentQues.question

    CurrentQues.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("anss")
        AnsBtn.appendChild(button)
        if(answer.correct)
        {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", SelectAns)
    });
}
function resetState() {
    nextbtn.style.display = "none"
    while (AnsBtn.firstChild) {
        AnsBtn.removeChild(AnsBtn.firstChild)
    }
}
function SelectAns(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.style.backgroundColor = "pink";
        score++;
    } else {
        selectedBtn.style.backgroundColor = "red";
    }

    Array.from(AnsBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.style.backgroundColor = "pink";
        }

        button.disabled = true;
    });

    nextbtn.style.display = "block";

    nextbtn.addEventListener("click", () => {
    currentIndex++;

        if (currentIndex < Questions.length) {
            showQuestion();
        } else {
      
        }
    });
    
}

startGame();