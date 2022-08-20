// array of objects
const quizData = [
    {
        question: 'Which of the following is not a programming language?',
        a: 'Python',
        b: 'HTML',
        c: 'JavaScript',
        d: 'Java',
        answer: 'b'
    },
    {
        question: 'which is the tallest statue in the world?',
        a: 'Statue of Liberty',
        b: 'The Spring Temple Buddha',
        c: 'Statue of Unity',
        d: ' Ushiku Daibutsu',
        answer: 'c'
    },
    {
        question: 'Which is the most used programming language of 2021?',
        a: 'C++',
        b: 'C#',
        c: 'JavaScript',
        d: 'Java',
        answer: 'c'
    },
    {
        question: 'How many union territories are there in India?',
        a: '6',
        b: '7',
        c: '8',
        d: '9',
        answer: 'c'
    },
    {
        question: 'which of the following is not a search engine?',
        a: 'Google Chrome',
        b: 'DuckDuckGo',
        c: 'Bing',
        d: 'Yahoo',
        answer: 'a'
    },
    {
        question: 'Who is the President of India?',
        a: 'Priya Jha',
        b: 'Narendra Modi',
        c: 'Ram Nath Kovind',
        d: 'Droupadi Murmu',
        answer: 'd'
    },
    {
        question: 'which of the following is not an object oriented (OOP) programming language?',
        a: 'C++',
        b: 'Python',
        c: 'JavaScript',
        d: 'C',
        answer: 'd'
    },
    {
        question: 'which country is called as the "Land of the Rising Sun"?',
        a: 'Japan',
        b: 'China',
        c: 'India',
        d: 'Australia',
        answer: 'a'
    },
    {
        question: 'TensorFlow is a library of?',
        a: 'Frontend Web Development',
        b: 'Machine Learning',
        c: 'Artificial Intelligence',
        d: 'both b and c',
        answer: 'd'
    },
    {
        question: 'What is the only continent where humans do not inhabit?',
        a: 'North America',
        b: 'Antartica',
        c: 'Australia',
        d: 'South America',
        answer: 'b'
    },
]

const quiz = document.getElementById("quiz");
// const options = document.querySelectorAll(".option");   // explicitly written inside those functions wherever needed.

const questionEle = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

// current index of 'quizData' object
let currentQuiz = 0;   // index of current quiz 
let score = 0;

function loadQuiz(){
    deSelectOption();
    // 'currentQuizData' variabale is an 'object'
    const currentQuizData = quizData[currentQuiz];     
    questionEle.innerText = currentQuizData.question;

    // know the difference between innerText and innerHtml.
    // a_text.innerHTMl = currentQuizData.a;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deSelectOption(){
    const options = document.querySelectorAll(".option");

    options.forEach(function(currentOption) {   
        if(currentOption.checked){
            currentOption.checked = false;
        }
    }) 
}

function getSelectedOption(){
    const options = document.querySelectorAll(".option");   //here "answers" is a "NodeList" i.e, an "array" which has same class specified inside querySelectorAll() method. Returns all element (in the form of NodeList/array) descendants of node that match selectors.

    // JavaScript Array forEach() method calls a function for each element in an array.
    // The forEach() method calls a function and iterates over the elements of an array. 

    /* syntax 1 : 
    array.forEach(function(currentValue, index, arr))
        // here, specifying index and arr is optional.
        // currentValue - the value of the array.
    }

    option.forEach((currentOption) => {   
        // here we can write anything in place of "currentOption".  Basically, it is the element of the NodeList/array "option".
        // Here, "currentOption" is the "currentvalue" parameter.
    }) */

    /* syntax 3 :
    for(int i=0; i < options.length; i++){

    }  */

    let answer = undefined;

    //  syntax 2 :
    options.forEach(function(currentOption) {   //here, "currentOption" is the "currentValue".
        // console.log(currentOption.value);
        // console.log(currentOption.checked);
        if(currentOption.checked){
            answer = currentOption.id;
        }
    }) 
    // console.log(options);
    // console.log(answer);
    return answer;
}

submitBtn.addEventListener("click", function(){
    const answer = getSelectedOption();

    // check if any option is selected.
    // if an/any option is selected only then we can submit.
    if(answer){
        // check if the option clicked from user is the answer or not.
        if(answer === quizData[currentQuiz].answer){
            score++;
        }

        // if an/any option is selected then the next quiz will appear.
        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            alert("You have completed the quiz. Go get a coffee!");

            // WHY NOT WORKING :(
            // quiz.innerText = 'You answered ${score} correct answers out of ${quizData.length} questions';
            // quiz.innerHTML = <p>fuyuygihgjjg</p>
            // <button onClick="location.reload()">Reload</button>
        }
    }   
})

loadQuiz();
