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
    var questions = ["Who was the starting QB of the 1960 NFL Champion Philadelphia Eagles",
        "Who was the last 76ers player to win the NBA's 6th man of the year award?",
        "On 4th and 1 in the 4th quarter of the 2018 super bowl Nick Foles ran a play that resulted in him catching a TD. What is the name of that famous play?",
        "Ben Simmons was selected with the No. 1 overall pick in the NBA draft. Who was taken right after Simmons?",
        "How many times was Allen Iverson named an all-star in his career?",
        "What was the city and team of the Philadelphia 76ers before their move to the city in 1963?",
        "Who are the only two Phillies managers to win World Series?"
    ];

    var answers = ["Norm Van Brocklin", "Aaron Mckie", "Philly Special", "Brandon Ingram", "11", "Syracuse Nationals", "Charlie Manuel and Dallas Green"];

    var choiceOne = ["Randall Cunningham", "Raja Bell", "TE end-around", "Lonzo Ball", "8", "San Francisco Warriors", "Charlie Manuel and Dallas Green"];

    var choiceTwo = ["Norm Van Brocklin", "Lou Williams", "Philly Special", "Jaylen Brown", "10", "Virginia Squires", "Larry Bowa and Dallas Green"];

    var choiceThree = ["Ron Jaworski", "Aaron Mckie", "The Philly Cheesesteak", "Brandon Ingram", "9", "Kentucky Colonels", "Charlie Manuel and Danny Ozark"];

    var choiceFour = ["Sunny Jurgensen", "Bobbie Jones", "Philly's Delight", "Jamal Murray", "11", "Syracuse Nationals", "Larry Bowa and Danny Ozark"];


    // Show & Hide Functions
    function showGame() {
        $("#questionsHolder").show();
        $("#choiceOne").show();
        $("#choiceTwo").show();
        $("#choiceThree").show();
        $("#choiceFour").show();
    }

    function hideGame() {
        $("#questionsHolder").hide();
        $("#choiceOne").hide();
        $("#choiceTwo").hide();
        $("#choiceThree").hide();
        $("#choiceFour").hide();
    }

    function hideResults() {
        $("#correctAnswer").hide();
        $("#incorrectAnswer").hide();
        $("#unansweredQuestions").hide();
        $("#restartGame").hide();
    }

    function showQuestion() {
        hideResults();
        $("#answers").hide();
        $("#image").hide();
        $("#timer").show();
        showGame();
        $("#questionsHolder").html(questions[count]);
        $("#choiceOne").html(choiceOne[count]);
        $("#choiceTwo").html(choiceTwo[count]);
        $("#choiceThree").html(choiceThree[count]);
        $("#choiceFour").html(choiceFour[count]);

        // Hover CSS
        $("#choiceOne").hover(function () {
                $(this).css("background-color", "lemonchiffon");
            },
            function () {
                $(this).css("background-color", "lemonchiffon");
            });
        $("#choiceTwo").hover(function () {
                $(this).css("background-color", "lemonchiffon");
            },
            function () {
                $(this).css("background-color", "lemonchiffon");
            });
        $("#choiceThree").hover(function () {
                $(this).css("background-color", "lemonchiffon");
            },
            function () {
                $(this).css("background-color", "lemonchiffon");
            });
        $("#choiceFour").hover(function () {
                $(this).css("background-color", "lemonchiffon");
            },
            function () {
                $(this).css("background-color", "lemonchiffon");
            });
    }
    $("#choiceOne").on("click", checkAnswer)
    $("#choiceTwo").on("click", checkAnswer)
    $("#choiceThree").on("click", checkAnswer)
    $("#choiceFour").on("click", checkAnswer)

    // Check Answer Function
    function checkAnswer() {

        hideGame();

        if ($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answers").show();
            $("#answers").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        } else {
            stopTime();
            isSelected = true;
            $("#answers").show();
            $("#answers").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        }

        checkGameEnd();
    }

    // Chekc End Game Function
    function checkGameEnd() {
        if (count === question.length) {
            $("#timer").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function () {
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
        $("#timer").html("Time remaining: " + time);

        if (time <= 0) {
            hideGame();
            stopTime();
            $("#answers").show();
            $("#answers").html("Time is up! The answer is: " + answer[count]);
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
        if (count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(showQuestion, 3000);
        }
    }

    resetTime();

    // Display Images With Answer
    function displayImage() {
        if (count === 0) {
            $("#image").show();
            $("#image").html('<img src="assets/images/tom_marvolo_riddle.jpg">');
        } else if (count === 1) {
            $("#image").show();
            $("#image").html('<img src="assets/images/armando_dippet.jpg">');
        } else if (count === 2) {
            $("#image").show();
            $("#image").html('<img src="assets/images/helena_ravenclaw.png">');
        } else if (count === 3) {
            $("#image").show();
            $("#image").html('<img src="assets/images/merope_gaunt.png">');
        } else if (count === 4) {
            $("#image").show();
            $("#image").html('<img src="assets/images/snitch.jpg">');
        } else if (count === 5) {
            $("#image").show();
            $("#image").html('<img src="assets/images/phoenix.jpg">');
        } else if (count === 6) {
            $("#image").show();
            $("#image").html('<img src="assets/images/lion.jpg">');
        } else if (count === 7) {
            $("#image").show();
            $("#image").html('<img src="assets/images/neville_longbottom.jpg">');
        }
    }

    // Show Results Function   
    function showResults() {
        $("#correctAnswer").show();
        $("#correctAnswer").html("Correct: " + correct);
        $("#incorrectAnswer").show();
        $("#incorrectAnswer").html("Incorrect: " + incorrect);
        $("#unansweredQuestions").show();
        $("#unansweredQuestions").html("Unanswered: " + unanswered);
        $("#restartGame").show();
        $("#restartGame").html("Click Start button to play again!");
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
        showQuestion();
    }

    // Start Game On Click
    $(".start").on("click", function () {
        startGame();
    });
});