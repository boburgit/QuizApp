const quizData = [
    {
        question: 'How old is Azamat?',
        a: '10',
        b: '17',
        c: '25',
        d: '110',
        correct: 'c'
    },
    {
        question: 'How old is Bobur?',
        a: '14',
        b: '15',
        c: '16',
        d: '17',
        correct: 'b'
    },
    {
        question: 'Who is the President of Uzbekistan',
        a: 'Donald Tramp',
        b: 'Barak Obama',
        c: 'Osama Bin Laden',
        d: 'Shavkat Mirziyoyev',
        correct: 'd'
    },
    {
        question: 'In what year did Uzbekistan gain independence day',
        a: '1991',
        b: '1992',
        c: '1993',
        d: '1994',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '2020',
        b: '1996',
        c: '2018',
        d: '1995',
        correct: 'd'
    }
]


const container = document.getElementById('container')
const title = document.getElementById('title')
const user = document.querySelectorAll('.user')
const variant_a = document.getElementById('variant-a')
const variant_b = document.getElementById('variant-b')
const variant_c = document.getElementById('variant-c')
const variant_d = document.getElementById('variant-d')
const btn = document.getElementById('btn')

let currentQuiz = 0
let score = 0

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    title.innerText = currentQuizData.question
    variant_a.innerText = `${currentQuizData.a} `
    variant_b.innerText = `${currentQuizData.b}`
    variant_c.innerText = `${currentQuizData.c}`
    variant_d.innerText = `${currentQuizData.d} `
}
loadQuiz()

function getSelected() {
  let answer = undefined
  for (let index = 0; index < user.length; index++) {
    const element = user[index];
    if(element.checked) {
        answer = element.id
      }
    }                             
    return answer
}

function deselectAnswers() {
    user.forEach(function(userInput) {
        userInput.checked = false
    })
}

btn.addEventListener('click', function() {
    const answer = getSelected()
    
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            container.innerHTML = `
                <h2>Umumiy savol ${quizData.length} / to'g'ri javob ${score}</h2>
                <button onclick="location.reload()">Qayta yuklash</button>  
            `
        }
    }
})