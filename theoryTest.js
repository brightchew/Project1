window.addEventListener("load", renderQuestion, false);


var pos = 0,//pos is the question position in Array file
    test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
    ["what is 10 + 4 ?", "12", "14", "16", "B", "img/1.png"],
    ["What is 20 - 9 ?", "7", "13", "11", "C","img/2.png"],
    ["What is 7 x 3 ?", "21", "24", "25", "A", "img/3.png"],
    ["What is 8 / 2 ?", "10", "2", "4", "C", "img/4.png"]
];

function element(x) {
    return document.getElementById(x);
}

function renderQuestion() {
    test = element("test");

    // the following code is to check if question reach the end;
    if (pos >= questions.length) {

        test.innerHTML = "<h2> You got " + correct + " of " + questions.length + " questions correct </h2>";

        element("test_status").innerHTML = "test completed";

        pos = 0;
        correct = 0;
        return false;

    } 

    // else {

    //     element(x)("test_score").textContent = correct + "/" +questions.length;



    
    element("test_status").textContent = "Question of " + (pos+1) + " of " + questions.length;

    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];

    

    //write the questions in form

     var imgFile = questions[pos][5];

     console.log("imgFile= " + imgFile)

    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<img src='"+imgFile +"'" + "></img> <br>";
    test.innerHTML += "<input type='radio' name='choices' value='A'>" + chA + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'>" + chB + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'>" + chC + "<br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer </button>";
}
    

function checkAnswer() {


    choices = document.getElementsByName('choices');

    for (var i = 0; i < choices.length; i++ ) {
        if (choices[i].checked) {
            choice = choices[i].value;

            console.log("value is " +choice);
        }
    }

        if (choice == questions[pos][4]) {
            correct++;
        }
        pos++;
        renderQuestion();

}



