

$("document").ready(function() {
    console.log("document loaded");
});

//particulars input form;

// $("#start").on("click", function() {
//     $("#test").empty();
//     $(".particulars").append("<h2> Key Your Your Particulars </h2>");
//     $(".particulars").append("<div id='particularsForm'></div>");
//     $("#particularsForm").append("Your Full Name : ");
//     $("#particularsForm").append("<input type='text' name='fullname' ></input> <br/>");
//     $("#particularsForm").append("Your Email : ");
//     $("#particularsForm").append("<input type='email' name='email' ></input> <br/>");
//     $("#particularsForm").append("Your Mobile No. : ");
//     $("#particularsForm").append("<input type='tel ' name='mobile' ></input> <br/>");
//     $("#particularsForm").append("<input type='submit' name='submit' ></input>");
// })


$("#start").on("click", function() {
        timerID = setInterval(countdown, 1000);
        renderQuestion();
        // startTimer();
        $("#start").prop("disabled", true);   
    })

//Abtract questions from test bank;
var pos = 0, //pos is the question position in Array file
    test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
    ["what is 10 + 4 ?", "12", "14", "16", "B", "img/1.png"],
    ["What is 20 - 9 ?", "7", "13", "11", "C", "img/2.png"],
    ["What is 7 x 3 ?", "21", "24", "25", "A", "img/3.png"],
    ["What is 8 / 2 ?", "10", "2", "4", "C", "img/4.png"]
];

function element(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = element("test"); //get element of form div;

    // the following code is to check if question reach the end;
    if (pos >= questions.length || timeInSeconds === 0) {

        // Check if game is over; if it is over, give result, reset value;

        test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct </h2>";
        element("test_score").textContent = "SCORE: " + correct + "/" + questions.length;

        element("test_status").innerHTML = "test completed";
        pos = 0;
        correct = 0;
        progressBar = 0;
        $("#progressBar").html("0%");
        return false;

    } else {

        element("test_score").textContent = "Score: " + correct + "/" + questions.length;
    }

    element("test_status").textContent = "Question " + (pos + 1) + " of " + questions.length;

    progressBar = Math.floor(((pos + 1) / questions.length) * 100) + "%";

    $("#progressBar").css("width", progressBar);
    $("#progressBar").html(progressBar);

    //read next question from test bank;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];

    //write the questions in form
    var imgFile = questions[pos][5];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<img src='" + imgFile + "'" + "></img> <br>";
    test.innerHTML += "<input type='radio' name='choices' value='A'>" + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'>" + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'>" + chC + "<br> <br>";
    test.innerHTML += "<button class='btn btn-lg btn-info' onclick='checkAnswer()'>Submit Answer </button>";
}

function checkAnswer() {
    choices = document.getElementsByName('choices');
    // choices is an array 
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice === questions[pos][4]) {
        correct++;
    }
    pos++;
    renderQuestion();
}

//Timer Function
timeInSeconds = 60;  //set inital time value;
function countdown() {
    if (timeInSeconds > 0) {
        timeInSeconds--
        minutes = Math.floor(timeInSeconds / 60);
        seconds = (timeInSeconds % 60)
        document.getElementById("timer").textContent = "Time Remaining " + minutes + ":" + seconds;
    } else {
        return false;
    }
}
//Restart, set everything to inital status;
$("#restart").on("click", function() {
    console.log("inside restart function");
    pos = 0;
    correct = 0;
    progressBar = 0 + "%";
    $("#progressBar").html("0%");
    $("#progressBar").css("width", progressBar); // Reset progress bar to zero;
    test.innerHTML = ""; //set test question HTML to empty; 
    $("#test").html("<img src='img/cover.png' />"); //set image to default; 
    $("#start").prop("disabled", false); //re-active the start button
    $("#test_status").html("<h2 id='test_status,></h2>"); //set test status to empty;
    $("#test_score").html("<h2 id='test_score'></h2>"); //set test score to empty;
    $("#timer").html("<h2 id='timer'></h2> "); //set time to empty;
    clearTimeout(timerID); ////Stop timer;
    timeInSeconds = 60; 

});
