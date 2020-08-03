let object1 = {
  question: 'What is the national animal of China?',
  answer: 'Giant Panda',

}

let object2 = {
  question: 'What\'s the capital of China?',
  answer: 'Beijing'
}

let object3 = {
  question: 'What\'s the population of China?',
  answer: 'Around 1.39 billion'
}

let flashcards = [object1, object2, object3];


let i = 0;
do {
  console.log(flashcards[i]);
  console.log(flashcards[i].question)
  console.log(flashcards[i].answer)
  alert(flashcards[i].question)
  alert(flashcards[i].answer)
 
  //document.getElementById('Q1').onclick = function() {
//alert(flashcards[i].answer);}
  i++;
}
while (i < flashcards.length);


document.getElementById('Q1').onclick = function() {
  alert('Giant Panda');
}
document.getElementById('Q2').onclick = function() {
  alert('Beijing');
}
document.getElementById('Q3').onclick = function() {
  alert('Around 1.39 billion');
}

document.getElementById('Q3').mouseover = function() {
  alert('Around 1.39 billion');
}


// const myQuestion = document.getElementById('Q1');
 
//myQuestion.textContent = 'This is my question';
