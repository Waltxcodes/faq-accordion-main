// document.addEventListener('DOMContentLoaded', function() {

// const questions = document.querySelectorAll('.question');


// questions.forEach((question) => {
//   question.addEventListener('click', (event) => {

    
//     const answer = document.querySelector('.answer');
//     const toggleSymbol = document.querySelector('.toggle');

//     // const answerDisplay = window.getComputedStyle(answer).getPropertyValue('display');

//     answer.style.display = 'block';
//       toggleSymbol.innerHTML = '<img src="./assets/images/icon-minus.svg" alt="">';

//    });

//  });
// });
let  clicked = false;

function display (answer, toggle)  {
  clicked = !clicked
  if (clicked === true) {
    document.querySelector(`.${answer}`).style.display = 'block';
    document.querySelector(`.${toggle}`).innerHTML = '<img src="./assets/images/icon-minus.svg" alt="">';

  } else { 
    document.querySelector(`.${answer}`).style.display = 'none';
    document.querySelector(`.${toggle}`).innerHTML = '<img src="./assets/images/icon-plus.svg" alt="">';


  
  }

}
