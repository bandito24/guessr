function firstSlide(){
    document.getElementById('front-page').style.display = 'none'
    document.getElementById('questionnaire').style.display = 'flex'
}

const tryOne = document.getElementById('try');

tryOne.addEventListener('click', firstSlide)