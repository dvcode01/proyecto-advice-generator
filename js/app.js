// Elements
const adviceNumber = document.querySelector('.advice__number');
const adviceContent = document.querySelector('.advice__content');
const adviceBtn = document.querySelector('.advice__btn');

eventListeners();
function eventListeners(){
    adviceBtn.addEventListener('click', showAdvice);
}

async function showAdvice(){
    try {
        const url = 'https://api.adviceslip.com/advice';
    
        const response = await fetch(url);
        const result = await response.json();

        adviceNumber.innerText = result.slip.id;
        adviceContent.innerText = `"${result.slip.advice}"`;
    } catch (error) {
        console.log(error);
    }
}

showAdvice();