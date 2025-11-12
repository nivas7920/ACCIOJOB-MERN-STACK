const questions = [
    {
        title: "1. What does JS stand for?",
        options: ["JavaScript", "Just Script", "Java Source", "JSON Script"],
        correctOption: 1,
    },
    {
        title: "2. Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "--"],
        correctOption: 1,
    },
    {
        title: "3. Which method is used to print output in the console?",
        options: ["document.write()", "console.log()", "alert()", "print()"],
        correctOption: 2,
    },
    {
        title: "4. Which HTML tag is used to link a CSS file?",
        options: ["<css>", "<script>", "<link>", "<style>"],
        correctOption: 4,
    },
    {
        title: "5. Which keyword declares a constant variable?",
        options: ["var", "let", "const", "new"],
        correctOption: 3,
    }
];

let currQuesIdx = 0;  
let score = 0;       

const correctAnswerScore = 4;
const wrongAnswerScore = -1;

const questionSection = document.querySelector(".section");
const questionTitle = document.querySelector(".para p"); 

const option1 = document.querySelector(".option-1");
const option2 = document.querySelector(".option-2");
const option3 = document.querySelector(".option-3");
const option4 = document.querySelector(".option-4");

const nextbtn = document.querySelector(".next");
const scoreSection = document.querySelector(".score");



function changeScore(optionNumber) {
    if (questions[currQuesIdx].correctOption === optionNumber)
        score += correctAnswerScore;
    else
        score += wrongAnswerScore;
}


function changeQuestion() {

    if (currQuesIdx === questions.length - 1) {
        questionSection.style.display = "none";
        scoreSection.style.display = "block";
        scoreSection.textContent = "Your Score: " + score;
        return;
    }

    currQuesIdx++;

    const questionObj = questions[currQuesIdx];

    questionTitle.textContent = questionObj.title;
    option1.textContent = questionObj.options[0];
    option2.textContent = questionObj.options[1];
    option3.textContent = questionObj.options[2];
    option4.textContent = questionObj.options[3];
}



option1.addEventListener("click", () => {
    changeScore(1);
    changeQuestion();
});
option2.addEventListener("click", () => {
    changeScore(2);
    changeQuestion();
});
option3.addEventListener("click", () => {
    changeScore(3);
    changeQuestion();
});
option4.addEventListener("click", () => {
    changeScore(4);
    changeQuestion();
});

