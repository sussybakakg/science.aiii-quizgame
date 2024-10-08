// Quiz data
const quizQuestions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "H2SO4"],
        answer: "H2O"
    },
    {
        question: "What planet is known as the Red Planet?",
        options: ["Mars", "Earth", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        answer: "Mitochondria"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let badgeEarned = false;

// Function to display a question
function showQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const options = document.getElementById('options');
    options.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.className = 'option';
        button.onclick = () => checkAnswer(option);
        options.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById('result').textContent = 'Correct!';
    } else {
        document.getElementById('result').textContent = 'Wrong! The correct answer was: ' + correctAnswer;
    }
    if (score >= 2 && !badgeEarned) {
        document.getElementById('badge').textContent = '🎉 Badge Earned: Science Expert! 🎉';
        badgeEarned = true;
    }
    nextQuestion();
}

// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        document.getElementById('question').textContent = 'Quiz Over!';
        document.getElementById('options').innerHTML = '';
        document.getElementById('result').textContent = `Your score: ${score}/${quizQuestions.length}`;
        document.getElementById('badge').textContent = score >= quizQuestions.length ? '🏆 Perfect Score! 🏆' : document.getElementById('badge').textContent;
    }
}

// Initialize the quiz
showQuestion();
