function quizFunction() {
    
//function Question constructor
function Question (question,answers,correctAns) {
    this.question = question;
    this.answers = answers;
    this.correctAns = correctAns;
}

//function displaying questions and answers
Question.prototype.displayQuestion = function() {
        console.log(this.question);
        console.log('1. ' + this.answers[0]);
        console.log('2. ' + this.answers[1]);
        console.log('3. ' + this.answers[2]);

}

//creating 10 question variables
var question1 = new Question('Which book series tells a story of a young wizard?',
                            ['Lord of the rings','Harry Potter','Game of thrones'],
                            1);

var question2 = new Question('Which of these people has never been the president of the United States?',
                            ['George W. Bush', 'Barrack Obama', 'Angela Merkel'],
                            2);

var question3 = new Question('Which of the following is NOT a planet?',
                            ['Moon', 'Mars', 'Pluto'],
                            0);

var question4 = new Question('What is the highest mountain in the world?',
                            ['Makalu', 'K2', 'Mount Everest'],
                            2);
    
var question5 = new Question('Which is the largest country in the world?',
                            ['Russia', 'Canada', 'China'],
                            0);
    
var question6 = new Question('What is wine made of?',
                            ['apples', 'grapes', 'bananas'],
                            1);
    
var question7 = new Question('Which country is home to the kangaroo?',
                            ['Germany', 'Japan', 'Australia'],
                            2);

var question8 = new Question('How many months do we have in a year?',
                            ['12', '5', '20'],
                            0);
    
var question9 = new Question('What do you call the person who brings a letter to your home from post office?',
                            ['police officer', 'postman', 'cook'],
                            1);
    
var question10 = new Question('Which day comes after Friday?',
                            ['Tuesday', 'Monday', 'Saturday'],
                            2);
//initial score
var score = 0;

//creting questions array
    
var questionsArray = [question1,
                      question2,
                      question3,
                      question4,
                      question5,
                      question6,
                      question7,
                      question8,
                      question9,
                      question10   
];
    
for (var questionNumber = Math.floor(Math.random()*questionsArray.length);
     currentAnswer !== 'exit';
     questionNumber = Math.floor(Math.random()*questionsArray.length)) {
    
    
questionsArray[questionNumber].displayQuestion();


//setting current answer variable
 var currentAnswer = prompt("Please enter your answer (write 'exit' to stop the game)", "Number 1 - 3");

//function to check the answer,add points and display score
Question.prototype.checkAnswer = function() {
    var line = '----------------------------------------------';

    //right answer
    if ((currentAnswer - 1) === questionsArray[questionNumber].correctAns) {
        score = score + 1;
        console.log(line);
        console.log('Congratulations! This is the right answer! :)');
        console.log('Your current score is: ' + score);
        console.log(line);

    } 
    
    //including quitting the game option
    else if (currentAnswer === 'exit') {
        console.log(line);
        console.log('GAME FINISHED! :)');
        console.log('YOUR FINAL SCORE IS: ' + score);
    }
    
    //wrong answer
    else {
        console.log(line);
        console.log('You are wrong!:(');
        console.log('Your current score is: ' + score);
        console.log(line);
    }
};

//calling the function
questionsArray[questionNumber].checkAnswer();
    
}    
};