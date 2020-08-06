let i = 0;
console.log(i)

let object1 = {
    question: 'What is the national animal of China?',
    answer: 'Giant Panda',
  
  }
  
  let object2 = {
    question: 'What\'s the capital of China?',
    answer: 'Beijing'
  }
  
  let obejct3 = {
    question: 'What\'s the population of China?',
    answer: 'Around 1.39 billion'
  }

  let flashcards = [object1, object2,obejct3];


const myQuestion = document.getElementById('myQ');
    myQuestion.textContent = flashcards[i].question;
    const myAnswer = document.getElementById('myA');
    myAnswer.textContent = flashcards[i].answer;


    

  
alert('Hover over the question to see the answer, hover over the answer to switch to next question')

 function myFunction() {
    var x = document.getElementById("myA");

    if (x.style.display === "none") {
      x.style.display = "block";

    }
 
  }

  function myFunction2() {
    var x = document.getElementById("myA");
    i++
    const myQuestion = document.getElementById('myQ');
    myQuestion.textContent = flashcards[i].question;
    const myAnswer = document.getElementById('myA');
    myAnswer.textContent = flashcards[i].answer;
    myAnswer.style.display = "none"

  }






