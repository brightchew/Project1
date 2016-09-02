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
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["The sign indicates:", "Vihicles must travel at a speed not more than 40km/h", "Vehicles must travel at a speed not lesser than 40km/h", "Vehicles must travel at a speed around 40km/h", "A", "img/40.png"],
    ["The sign indicates:", "No entry for vehicles with overall height lesser than 3.5m", "No entry for vehicles with overal width exceeding 3.5m", "No entry for vehicles with overall height more than 3.5m", "C", "img/3-5m.png"],
    ["WWhich of the following statement is INCORRECT?", "The two second rule can be applied to all types of vehicles at any speed", "The teo second rule can be applied to all road conditions, include wet road", "You should leave more than a two second distance in bad weather", "B", "img/2second.png"],
    ["The sign indicates:", "An overhead bridgr ahead", "The start of an expressway", "Tunnel Ahead", "B", "img/startexpress.png"],
    ["Which of the follwing is correct?", "Adjust your mirror before adjusting the position of your seat", "SAdjust your mirror after adjusting the position of your seat", "Adjust your mirror and seat position after moving off", "B", "img/adjustmirror.png"],
    ["The sign indicates that?", "Vehicle can only turn right", "One way road ahead", "Vehicle may turn left", "A", "img/rightonly.png"],
    ["What should you do when you see traffic light sign on the road (not the real traffic light)", "Slow down and prepare to stop", "Slow down and stop", "Keep driving as normal speed and stop when traffic light change to red", "A", "img/faketrafficlight.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when you see traffic light sign on the road (not the real traffic light)", "Slow down and prepare to stop", "Slow down and stop", "Keep driving as normal speed and stop when traffic light change to red", "A", "img/faketrafficlight.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when you see traffic light sign on the road (not the real traffic light)", "Slow down and prepare to stop", "Slow down and stop", "Keep driving as normal speed and stop when traffic light change to red", "A", "img/faketrafficlight.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when you see traffic light sign on the road (not the real traffic light)", "Slow down and prepare to stop", "Slow down and stop", "Keep driving as normal speed and stop when traffic light change to red", "A", "img/faketrafficlight.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when you see traffic light sign on the road (not the real traffic light)", "Slow down and prepare to stop", "Slow down and stop", "Keep driving as normal speed and stop when traffic light change to red", "A", "img/faketrafficlight.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when you see traffic light sign on the road (not the real traffic light)", "Slow down and prepare to stop", "Slow down and stop", "Keep driving as normal speed and stop when traffic light change to red", "A", "img/faketrafficlight.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when you see traffic light sign on the road (not the real traffic light)", "Slow down and prepare to stop", "Slow down and stop", "Keep driving as normal speed and stop when traffic light change to red", "A", "img/faketrafficlight.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when you see traffic light sign on the road (not the real traffic light)", "Slow down and prepare to stop", "Slow down and stop", "Keep driving as normal speed and stop when traffic light change to red", "A", "img/faketrafficlight.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when you see traffic light sign on the road (not the real traffic light)", "Slow down and prepare to stop", "Slow down and stop", "Keep driving as normal speed and stop when traffic light change to red", "A", "img/faketrafficlight.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"],
    ["What should you do when approaching speed bumps?", "Speed up to pass the speed bumps faster", "Slow down", "Stop and push your car over the speed bumps carefully", "B", "img/bumps.png"]
];

function element(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = element("test"); //get element of form div;

    // the following code is to check if question reach the end;
    if (pos >= questions.length || timeInSeconds === 0) {

        // Check if game is over; if it is over, give result, reset value;

        test.innerHTML = "<h3> You got " + correct + " of " + questions.length + " questions correct </h3>";
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

    //read the questions from Array to form a question;
    var imgFile = questions[pos][5];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<img src='" + imgFile + "'" + "></img> <br>";
    test.innerHTML += "<div class='radio'> <label> <input type='radio' name='choices' value='A'>" + chA + "</label> </div>";
    test.innerHTML += "<div class='radio'><label> <input type='radio' name='choices' value='B'>" + chB + "</label></div>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'>" + chC + "</label>  <br> <br>";
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
timeInSeconds = 60; //set inital time value;
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
