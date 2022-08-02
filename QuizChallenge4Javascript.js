

//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score

var Countdownsecs= document.querySelector(".countdown-seconds");
var jo = document.query
var startquiz = document.querySelector(".Startquiz");
var answers = document.querySelector(".Answers");
var Correctanswer = document.querySelector(".Correctanswer");
var initials = document.querySelector(".initials");
var submit = document.querySelector(".submit");

var chosenanswer = "";
var wronganswers = answers;
var iswrong = true;
var rightanswer = Correctanswer;

//timer
var timer;
var timercount;

var time = 60;
console.log(Countdownsecs);
document.queryselector(".Startquiz").onclick = function(){
    timer();
}

//};

function timer(){
    timercount = setInterval(function() {
        time--; 
    console.log(timercount);
    countdownsecs = timercount;
    },1000);
    }


