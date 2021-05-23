
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
    $("#UserForm").show();
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


var myForm = $("<form></form>").attr("id", "UserForm");
h1.append(myForm);

var userLabel = $("<label></label>").text("User");
myForm.append(userLabel);

var userInput = $("<input></input>").attr("id", "UserInput").attr("name", "UserInput");
myForm.append(userInput);

var lineBreak5 = $("<br>");
myForm.append(lineBreak5);

var passwordLabel = $("<label></label>").text("Password");
myForm.append(passwordLabel);

var passwordInput = $("<input></input>").attr("id", "PasswordInput").attr("name", "PasswordInput");
myForm.append(passwordInput);

var lineBreak6 = $("<br>");
myForm.append(lineBreak6);

var registerButton = $("<button></button>").attr("id", "RegisterButton").text("Register");
myForm.append(registerButton);


$("#RegisterButton").click(function () {
    var userInputValue = $("#UserInput").val();
    var passwordInputValue = $("#PasswordInput").val();

    //alert("User is: " + userInputValue + " and the Password is: " + passwordInputValue

    var result;

    $.when(
        $.ajax({
            type: "POST",
            url: "/Home/Register",
            async: true,
            data: {
                UserInput: userInputValue,
                PasswordInput: passwordInputValue
            },

        })).then(function (data) {
            result = data;

            alert(result);
        });
    $.when($.ajax({
        type: "GET",
        url: "/Home/UserInfo",
        async: true,
        datatype: "json"
    })).then(function (data) {
        var userString = data.userName + ", " +
            data.password;
        alert(userString);
        });
});

$("#UserForm").hide();