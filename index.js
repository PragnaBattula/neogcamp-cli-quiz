var readlineSync = require("readline-sync");
const chalk=require("chalk");
var score=0;

var userName=readlineSync.question(chalk.yellowBright("Hey!! whats your name? "));
console.log(chalk.bold.magentaBright("Welcome "+chalk.cyanBright(userName) +(" DO YOU KNOW Pragna??")));

console.log(chalk.whiteBright("Lets play the",
chalk.bold.redBright('GAME')));

//data of high score
var highScores = [
  {
  name:"B.Preethi",
  score:5,
},
{
  name:"sony",
  score:4,
},
];
 
//function
function play(question,answer){
  var useranswer = readlineSync.question(question);

  if(useranswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.greenBright("You are right!"));
    score=score+1;
   
  }
  else{
    console.log(chalk.redBright("You are wrong!"));
    
   
  }
   console.log(chalk.blueBright("Your score is "+chalk.whiteBright(score)));
   console.log("------------------");
}

//call function



// array of objects

var questions = [
  {
  question:"Who is my favourite Avenger? ",
  answer:"Iron Man"},
  {
  question:"What is my favourite color? ",
  answer:"lavender"},
  {
  question:"What kind of movies i like? ",
  answer:"Action"
  },
  {
  question:"Which season do i prefer? ",
  answer:"winter"
  },
  {
  question:"Which TV series have i rewatched the most? ",
  answer:"Harry Potter"
  },
];

//loop
for (var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

//print final score
 function showScores() {
  console.log("YAY!!! " +userName+ " scored:", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


 showScores();
