const quizData = [
    {
        question: "Which state has the longest coastal line in India?",
        a:"Gujarat",
        b:"Kerala", 
        c:"Karnataka", 
        d:"West Bengal", 
        correct: "a"    
    },
    {
        question: "How many letters are there in the English alphabet?",
        a:"20", 
        b:"26",
        c:"21", 
        d:"24",
        correct:"b" 
        
    },
    {
        question: "Which is the highest dam of India?",    
        a:"Rihand Dam",
        b:"Tehri Dam",
        c:"Mettur Dam",
        d:"Sardar Sarovar Dam",
        correct:"b" 
    },
    {
        question: " What is the 19th letter of the English alphabet?",
        a:"M",
        b:"N",
        c:"W",
        d:"S",
        correct:"d"     
    },
    {
        question: "Who was India’s first President?",   
        a:"Dr. Rajendra Prasad",
        b:"Sarvepalli Radhakrishnan",
        c:"Varahagiri Venkata Giri",
        correct:"a"  
    }
    
    ];
    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitButton = document.getElementById("submit");
    let currentQuiz = 0;
    let score = 0;
    const deselectAnswers = () => {
        answerElements.forEach((answer) => (answer.checked = false));
    };
    const getSelected = () => {
        let answer;
        answerElements.forEach((answerElement) => {
            if (answerElement.checked) answer = answerElement.id;
        });
        return answer;
    };
    const loadQuiz = () => {
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionElement.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    };
    loadQuiz();
    submitButton.addEventListener("click", () => {
        const answer = getSelected();
        if (answer) {
            if (answer === quizData[currentQuiz].correct) score++;
            currentQuiz++;
            if (currentQuiz < quizData.length) loadQuiz();
            else {
                quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
                    <button onclick="history.go(0)">Play Again</button> `
            }
        }
    });