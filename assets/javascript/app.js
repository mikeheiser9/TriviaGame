$(document).ready(function () {


    var count = 60;
    // score keeper
    var correctCount = 0;
    var wrongCount = 0;
    var unansweredCount = 0;

    startScreen();

    function startScreen() {

        $("#gameContainer").hide();
        $("#endGame").hide();

    };

    function endGame() {

    }
    //
    var myQuestions = [{
            question: "Who was the starting QB of the 1960 NFL Champion Philadelphia Eagles",
            answers: {
                a: "Randall Cunningham",
                b: "Ron Jaworski",
                c: "Norm Van Brocklin",
                d: "Sunny Jurgensen"
            },
            correctAnswer: "c"
        },
        {
            question: "Who was the last 76ers player to win the NBA's 6th man of the year award?",
            answers: {
                a: "Lou Williams",
                b: "Aaron Mckie",
                c: "Bobbie Jones",
                d: "Raja Bell"
            },
            correctAnswer: "b"
        },
        {
            question: "On 4th and 1 in the 4th quarter of the 2018 super bowl Nick Foles ran a play that resulted in him catching a TD. What is the name of that famous play?",
            answers: {
                a: "The Mummer",
                b: "The Philly Cheesesteak",
                c: "The Cheesesteak",
                d: "The Philly Special"
            },
            correctAnswer: "d"
        }
    ];

    // create a function that hides the start screen and initiates the game
    function startGame() {
        //hide the start screen and end screen and show the game container
        $("#startButton").click(function () {
            $("#gameContainer").show();
            $("#startScreen").hide();
            $("#endGame").hide();

            // loop thru the questions
            for (i = 0; i < myQuestions.length; i++) {
                //display the questions in empty div in html

                $("#quizQuestions").append(myQuestions[i]);

            }

        })
    };

    $(document).on("click", "#startButton", startGame);

    startGame();



});