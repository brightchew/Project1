window.addEventListener("load", renderQuestion, false);


var pos = 0,
    test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
    ["what is 10 + 4 ?", "12", "14", "16", "B"],
    ["What is 20 - 9 ?", "7", "13", "11", "C"],
    ["What is 7 x 3 ?", "21", "24", "25", "A"],
    ["What is 8 / 2 ?", "10", "2", "4", "C"]
];

function _(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = _("test");

    if (pos >= questions.length) {

        test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct </h2>";

        _(x)("test_status").innerHTML = "test completed";

        pos = 0;
        correct = 0;
        return false;
    }

    // console.log("inside function")
    _("test_status").textContent = "Question of " + (pos+1) + " of " + questions.length;

    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];

    console.log("inside chA") //check

    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'>" + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'>" + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'>" + chC + "<br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer </button>";
}
    console.log("end html");

function checkAnswer() {

    console.log("checkAnswer caled"); //check

    choices = document.getElementsByName('choices');
    
    console.log("choices is " + choices.length); //check array result

    for (var i = 0; i < choices.length; i++ ) {
        if (choices[i].checked) {
            choice = choices[i].value;

            console.log("value is " +choice);
        }
    }

        if (choice == questions[pos][4]) {
            correct++;

            console.log("correct value is "+ correct);
        }
        pos++;
        console.log("pos value is " + pos);
        renderQuestion();

}



