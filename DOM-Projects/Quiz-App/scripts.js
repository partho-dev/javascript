let questions = [
    {
        question:"what is 1*1?",
        answers: [
            {text:1, correct:true},
            {text:2, correct:false},
            {text:3, correct:false},
            {text:4, correct:false}
        ]
    },
    {
        question:"what is 1*2?",
        answers: [
            {text:1, correct:false},
            {text:2, correct:true},
            {text:3, correct:false},
            {text:4, correct:false}
        ]
    },
    {
        question:"what is 1*3?",
        answers: [
            {text:1, correct:false},
            {text:2, correct:false},
            {text:3, correct:true},
            {text:4, correct:false}
        ]
    },
    {
        question:"what is 1*4?",
        answers: [
            {text:1, correct:false},
            {text:2, correct:false},
            {text:3, correct:false},
            {text:4, correct:true}
        ]
    },
    {
        question:"what is 1*5?",
        answers: [
            {text:2, correct:false},
            {text:3, correct:false},
            {text:4, correct:false},
            {text:5, correct:true}
        ]
    }
]

const questionElement = document.querySelector(".question")
const answerButtons = document.querySelector(".answer-buttons")
const nextButton = document.querySelector(".next-btn")
const Quiz = document.querySelector(".quiz")

let currentQuestionnIndex = 0
let score = 0

 let startQuiz = () =>{
        currentQuestionnIndex = 0
        score = 0
        nextButton.innerHTML = "Next"
        showQuestion()
 }

 let showQuestion = () =>{
    resetQuestion()
    //show the questions
    let currentQuestion = questions[currentQuestionnIndex]
    let questionNo = currentQuestionnIndex + 1
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question

    //show the answer options
    currentQuestion.answers.forEach((elem)=>{
        let button = document.createElement("button")
        button.innerHTML = elem.text
        button.classList.add("btn")
        answerButtons.appendChild(button)

        // enable click function on the buttons 
        if(elem.correct){
            button.dataset.correct = elem.correct
        }
        button.addEventListener("click", (e)=>{
            let selectedBtn = e.target
            let isCorrect = selectedBtn.dataset.correct === "true"
            if(isCorrect){
                selectedBtn.classList.add("correct")
                score++
            }else{
                selectedBtn.classList.add("incorrect")
            }

            //Disable the multiselection and show correct if incorrect is selected
            Array.from(answerButtons.children).forEach(button =>{
                if(button.dataset.correct === "true"){
                    button.classList.add("correct")
                }
                button.disabled = true
            })
            nextButton.style.display = "block"
        })
    })
 }
 let resetQuestion = ()=>{
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
 }
 
 let showScore = () =>{
    resetQuestion()
    questionElement.innerHTML = `Scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
 }

 nextButton.addEventListener("click", ()=>{
    if(currentQuestionnIndex < questions.length){
        currentQuestionnIndex ++
        if(currentQuestionnIndex < questions.length){
            showQuestion()
        }else{
            showScore()
        }
    }
 })

 startQuiz()


// let clutter = ""
// questions.forEach((elem, index)=>{
//     clutter += `<h2 class="question"> ${index+1}. ${elem.question}</h2>
//     <div class="answer-buttons">
//         <button class="btn">${elem.answers[0].text}</button>
//         <button class="btn">${elem.answers[1].text}</button>
//         <button class="btn">${elem.answers[2].text}</button>
//         <button class="btn">${elem.answers[3].text}</button> 
//     </div>`
//     Quiz.innerHTML = clutter
// })

