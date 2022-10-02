
var readlineSync = require('readline-sync');

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " do you know Ajay?");
}
welcome();
//high scores 

var highScores = [
  { name: "Aviraj", score: 5,},
  { name: "Akash ",  score: 4,},
  { name: "Nisarg",  score: 5,},
  ]

var score = 0; 

//quiz and answers 

var question = [];

var answer = [];
 
question[1] = "what is my favourite activity ? ";
answer[1] = "Programming";

question[2] = "what is my favourite anime?";
answer[2] = "one piece";

question[3] = "what is my favourite color?";
answer[3] = "blue";

question[4] = "where do i live?";
answer[4] = "Ahmedabad";

question[5] = "what is my favourite game?";
answer[5] = "valorant";

//calling funcation play 
for(var i=1 ; i<= 5 ; i++){
play(question[i], answer[i])
console.log("---------------------------------------------")
}

//body of function play
function play(question, answer) {

  var userAnswer = readlineSync.question(question);
  
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You are right!");
    score = score + 1;
    console.log('\x1b[33m%s\x1b[0m\x1b[5m' , "Current Score is: " + score)
  } else {
    console.log("You are wrong!");
    console.log('\x1b[33m%s\x1b[0m\x1b[5m' , "Current Score is: " + score)
  }
}

//calling function show scores
showScores();

function showScores() {


  console.log("Nani ? You Scored : ", score);
  
  console.log("---------------------------------------------")
  
  console.log('\x1b[33m%s\x1b[0m' , "Some of the highest scores : ")

  highScores.map(score => console.log(score.name, " : ", score.score))

  console.log("---------------------------------------------")
}