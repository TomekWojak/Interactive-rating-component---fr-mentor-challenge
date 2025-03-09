
const submitBtn = document.querySelector('.review__btn')
const ratingForm = document.querySelector('.review__box')
const summaryForm = document.querySelector('.review__summary')
const allAnswers = Array.from(document.querySelectorAll('.review__input'))
const summaryMsg = document.querySelector('.review__summary-box')
const labels = document.querySelectorAll('label')


const handleRatingForm = (e) => {
    e.preventDefault()

    const checkedAnswer = allAnswers.find(answer => answer.checked); 



    let answerValue
    if(checkedAnswer){
        answerValue = parseInt(checkedAnswer.getAttribute('value'))
        setTimeout(() => {
            summaryForm.classList.add('active')
            summaryMsg.innerText = `You selected ${answerValue} out of ${allAnswers.length}`
        }, 150)
    }
}

labels.forEach(label => label.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        e.preventDefault()
        document.getElementById(label.getAttribute("for")).click();
    }
}))

ratingForm.addEventListener('submit', handleRatingForm)

