
// VARIABLES
var timer = 10;
var correctCount = 0;
var wrongCount = 0;
var questionNum = 0;
var questions = [
    {
        question:"Who was the MVP of the 1985 Finals?",
        choices:{
            1:"Magic Johnson",
            2:"Kareem Abdul-Jabbar",
            3:"Jamaal Wilkes",
            4: "Bob McAdoo"    
        },
        answerNum:2,
        answerText:"Kareem Abdul-Jabbar"
    },
    {
        question:"Who scored on Magic Johnson's record-breaking assist?",
        choices:{
            1:"Terry Teagle",
            2:"Byron Scott",
            3:"James Worthy",
            4:"Orlando Woolridge"  
        },
        answerNum:1,
        answerText:"Terry Teagle"
    },
    {
        question:"Who was the coach when the Lakers won the 1980 NBA Finals?",
        choices:{
            1:"Jerry West",
            2:"Pat Riley",
            3:"Paul Westhead",
            4:"Billy Cunningham"  
        },
        answerNum:3,
        answerText:"Paul Westhead"
    },
    {
        question:"Which Laker won the Defensive Player of the Year as a reserve?",
        choices:{
            1:"Lamar Odom",
            2:"Kurt Rambis",
            3:"Michael Cooper",
            4:"Rick Fox" 
        },
        answerNum:3,
        answerText:"Michael Cooper"
    },
    {
        question:"Which vacation destination did Nick Van Exel yell out to break a huddle?",
        choices:{
            1:"Maui",
            2:"Cancun",
            3:"Fiji",
            4:"Bora Bora" 
        },
        answerNum:2,
        answerText:"Cancun"
    },
    {
        question:"The Laker band is comprised of students from which school?",
        choices:{
            1:"UCLA",
            2:"USC",
            3:"Cal State LA",
            4:"Drew University"  
        },
        answerNum:2,
        answerText:"USC"
    },
    {
        question:"Who was traded to the Charlotte Hornets for Kobe Bryant?",
        choices:{
            1:"Nick Van Exel",
            2:"Anthony Peeler",
            3:"Elden Campbell",
            4:"Vlade Divac"  
        },
        answerNum:4,
        answerText:"Vlade Divac"
    },
    {
        question:"Who succeeded Pat Riley as Lakers coach?",
        choices:{
            1:"Mike Dunleavy",
            2:"Randy Pfund",
            3:"Bill Bertka",
            4:"Phil Jackson"  
        },
        answerNum:1,
        answerText:"Mike Dunleavy"
    },
    {
        question:"Which player lied about getting injured in a snowboarding accident?",
        choices:{
            1:"Lamar Odom",
            2:"Vladmir Radmanovic",
            3:"Nick Van Exel",
            4:"Sedale Threatt"  
        },
        answerNum:2,
        answerText:"Vladmir Radmanovic"
    },
    {
        question:"What country is Sasha Vujacic from?",
        choices:{
            1:"Croatia",
            2:"Serbia",
            3:"Slovenia",
            4:"Slovakia"
        },
        answerNum:3,
        answerText:"Slovenia"
    }
];
// FUNCTIONS

function startGame() {
    var startScreen = "<button type='button' class='btn btn-primary btn-lg btn-block' id='startButton' href='#'>Click Here to Start</button>";
    $("#row1").html("<div class='container'><div class='row'><div class='col-md-12 offset-md-5'>" + startScreen + "</div></div></div>");
  
}
//
function generateQuestion() {
    var qTimer = "<div class='row'><div class='mx-auto'><div id='time'>10</div></div></div>";
    var qQuestion = "<div class='row'><div class='mx-auto'><p id='question'></p></div></div>";
    var qAnswers = "<div class='row'><div class='mx-auto'><a class='choice' id='choice1' href='#'></a></div></div> <div class='row'><div class='mx-auto'><a class='choice' id='choice2' href='#'></a></div></div> <div class='row'><div class='mx-auto'><a class='choice' id='choice3' href='#'></a></div></div> <div class='row'><div class='mx-auto'><a class='choice' id='choice4' href='#'></a></div></div>";

    $("#row1").html(qTimer);
    $("#row2").html(qQuestion);
    $("#row3").html(qAnswers);

    $("#question").text(questions[questionNum].question);
    $("#choice1").text(questions[questionNum].choices[1]);
    $("#choice2").text(questions[questionNum].choices[2]);
    $("#choice3").text(questions[questionNum].choices[3]);
    $("#choice4").text(questions[questionNum].choices[4]);
}
//
function countdown() {
    clock = setInterval(shotClock, 1000);
        function shotClock() {
            if (timer === 0) {
                clearInterval(clock);
                outOfTime();
            }
            if (timer > 0) {
                timer--;
                $("#time").html(timer); 
            }
        }
          
}
//
function outOfTime() {
    wrongCount++;
    var body1 = "<div class='row'><div class='mx-auto'><p id=prefix></p></div></div>"
    var body2 = "<div class='row'><div class='mx-auto'><p id=player></p></div></div>"
    var body3 = "<div class='row'><div class='mx-auto'><p id=filler></p></div></div>"
    
    $("#row1").html(body1);
    $("#row2").html(body2);
    $("#row3").html(body3);

    $("#prefix").html("Times Up! The correct answer is...");
    $("#player").html(questions[questionNum].answerText);
    $("#filler").html(" ");
    setTimeout(standby, 2000);
}
//
function correctChoice() {
    correctCount++;
    var body1 = "<div class='row'><div class='mx-auto'><p id=prefix></p></div></div>"
    var body2 = "<div class='row'><div class='mx-auto'><p id=player></p></div></div>"
    var body3 = "<div class='row'><div class='mx-auto'><p id=filler></p></div></div>"

    $("#row1").html(body1);
    $("#row2").html(body2);
    $("#row3").html(body3);

    $("#prefix").html("CORRECT!");
    $("#player").html(questions[questionNum].answerText);
    $("#filler").html(" ");
    setTimeout(standby, 2000);
}
//
function incorrectChoice() {
    wrongCount++;
    var body1 = "<div class='row'><div class='mx-auto'><p id=prefix></p></div></div>"
    var body2 = "<div class='row'><div class='mx-auto'><p id=player></p></div></div>"
    var body3 = "<div class='row'><div class='mx-auto'><p id=filler></p></div></div>"

    $("#row1").html(body1);
    $("#row2").html(body2);
    $("#row3").html(body3);

    $("#prefix").html("INCORRECT! The correct answer was...");
    $("#player").html(questions[questionNum].answerText);
    $("#filler").html(" ");
    setTimeout(standby, 2000);
}

//
function standby() {
    if (questionNum < questions.length-1) {
        questionNum++;
        generateQuestion();
        timer = 10;
        countdown();
    }
    else {
        gameOver();
    }
}
//
function gameOver() {
    var correctTotal = "<div class='row'><div class='mx-auto'><p id='correct'></p></div></div>";
    var wrongTotal = "<div class='row'><div class='mx-auto'><p id='wrong'></p></div></div>";
    var thankYou = "<div class='row'><div class='mx-auto'><p id='thanks'></p></div></div>";


    $("#row1").html(correctTotal);
    $("#row2").html(wrongTotal);
    $("#row3").html(thankYou);

    $("#correct").html("Correct: " + correctCount);
    $("#wrong").html("Wrong: " + wrongCount);
    $("#thanks").html("Thank you for playing.  Go Lakers!!!")

}

//

startGame();

$("#startButton").on("click", function() {
    generateQuestion();
    countdown();
});


$("body").on("click", ".choice", function() {
    selected = $(this).text();
    if (selected === questions[questionNum].answerText) {
        correctChoice();
        clearInterval(clock);
    }
    else {
        incorrectChoice();
        clearInterval(clock);
    }
})


