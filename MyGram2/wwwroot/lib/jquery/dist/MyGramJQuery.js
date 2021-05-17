
var h1 = $("#MyDiv");

var span = $("<span></span>").text("My Gram");
h1.append(span);

var button = $("<button></button>").attr("id", "LogInButton").text("Log In");
h1.append(button);

var button2 = $("<button></button>").attr("id", "SignUpButton").text("Sign Up");
h1.append(button2);

var lineBreak = $("<br>");
h1.append(lineBreak);

var image = $("<span></span>").text("Image 1 Image 2 Image 3 Image 4 Image 5");
h1.append(image);

var lineBreak2 = $("<br>");
h1.append(lineBreak2);

var aboutSection = $("<span></span>").text("About Blog Jobs Help");
h1.append(aboutSection);

var lineBreak3 = $("<br>");
h1.append(lineBreak3);

var englishSection = $("<span></span>").text("English 2021 MyGram");
h1.append(englishSection);

var lineBreak4 = $("<br>");
h1.append(lineBreak4);

function SignUpFunction() {
    var signUpSpan1 = $("<span></span>").text("User");
    var signUpSpan2 = $("<span></span>").text("Password");
    $("div.Divv").append(signUpSpan1);
    $("div.Divv").append(signUpSpan2);
}

$("#SignUpButton").click(function () {
    SignUpFunction();
});

function LogInFunction() {
    alert("You have logged in");
}

$("#LogInButton").click(function () {
    LogInFunction();
});