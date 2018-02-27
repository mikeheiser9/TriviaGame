// Define variables
$(document).ready(function () {
    var count = 0;
    var time = 30;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    // questions and answers
    var question = ["Who was the starting QB of the 1960 NFL Champion Philadelphia Eagles",
        "Who was the last 76ers player to win the NBA's 6th man of the year award?",
        "On 4th and 1 in the 4th quarter of the 2018 super bowl Nick Foles ran a play that resulted in him catching a TD. What is the name of that famous play?",
        "Ben Simmons was selected with the No. 1 overall pick in the NBA draft. Who was taken right after Simmons?",
        "How many times was Allen Iverson named an all-star in his career?",
        "What was the city and team of the Philadelphia 76ers before their move to the city in 1963?",
        "Who are the only two Phillies managers to win World Series?"
    ];

    var answer = ["Norm Van Brocklin", "Aaron Mckie", "Philly Special", "Brandon Ingram", "11", "Syracuse Nationals", "Charlie Manuel and Dallas Green"];

    var firstChoice = ["Randall Cunningham", "Raja Bell", "TE end-around", "Lonzo Ball", "8", "San Francisco Warriors", "Charlie Manuel and Dallas Green"];

    var secondChoice = ["Norm Van Brocklin", "Lou Williams", "Philly Special", "Jaylen Brown", "10", "Virginia Squires", "Larry Bowa and Dallas Green"];

    var thirdChoice = ["Ron Jaworski", "Aaron Mckie", "The Philly Cheesesteak", "Brandon Ingram", "9", "Kentucky Colonels", "Charlie Manuel and Danny Ozark"];

    var fourthChoice = ["Sunny Jurgensen", "Bobbie Jones", "Philly's Delight", "Jamal Murray", "11", "Syracuse Nationals", "Larry Bowa and Danny Ozark"];

    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
    
    // Hover styles
        $("#choice-holder-1").hover(function() {
            $(this).css("color", "lemonchiffon");
        },
        function(){
            $(this).css("color", "white");
        });
        $("#choice-holder-2").hover(function() {
            $(this).css("color", "lemonchiffon");
        },
        function(){
            $(this).css("color", "white");
        });
        $("#choice-holder-3").hover(function() {
            $(this).css("color", "lemonchiffon");
        },
        function(){
            $(this).css("color", "white");
        });
        $("#choice-holder-4").hover(function() {
            $(this).css("color", "lemonchiffon");
        },
        function(){
            $(this).css("color", "white");
        });
    }
    $("#choice-holder-1").on("click", checkAnswer) 
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)

// Check Answer Function
    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }

// Chekc End Game Function
    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

// Display Images With Answer
    function displayImage() {
        if(count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/QB.jpg">');
        }
        else if(count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/mckie.jpg">');
        }
        else if(count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/PS.jpg">');
        }
        else if(count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/BI.jpg">');
        }
        else if(count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/AI.jpg">');
        }
        else if(count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/syracuse.jpg">');
        }
        else if(count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/CM.jpg">');
        }
        else if(count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/sports.jpg">');
        }
    }

 // Show Results Function   
    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("Unanswered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Click Start above to play again!");
    }

// Reset Results Function 
    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

// Start Game Function
    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

// Start Game On Click
  $(".start").on("click", function() {
    startGame();
  });
});