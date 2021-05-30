
var h1 = $("#MyDiv");
var signUpDiv = $("#SignUpDialog");

var span = $("<span></span>").text("My Gram");
h1.append(span);

var button = $("<button></button>").attr("id", "LogInButton").text("Log In");
h1.append(button);

var button2 = $("<button></button>").attr("id", "SignUpButton").text("Sign Up");
h1.append(button2);

var lineBreak = $("<br>");
h1.append(lineBreak);


for (var x = 1; x < 21; x++) {
    var image = $("<span></span>").text("Image" + x);
h1.append(image);
}

$.when($.ajax({
    type: "POST",
    url: "/Home/ImageProperties",
    async: true,
    data: {
        listName: listName,
        newImage: newImage
    },
})).then(function (data) {
    alert(data);
});

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
    $("#SignUpDialog").dialog("open");
}
$("#SignUpDialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
        "Cancel": function () {
            $("#SignUpDialog").dialog("close");
        }
    }
});

$("#SignUpButton").click(function () {
    SignUpFunction();
});

function LogInFunction() {
    
    $.toast({
        heading: "Success",
        text: "You are logged in",
        icon: "success",
        position: "top-left"
    });

}

$("#LogInButton").click(function () {
    LogInFunction();
});


var myForm = $("<form></form>").attr("id", "UserForm");
signUpDiv.append(myForm);

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
   // var userInputValue = $("#UserInput").val();
    //var passwordInputValue = $("#PasswordInput").val();

    //alert("User is: " + userInputValue + " and the Password is: " + passwordInputValue

    $("#dialog").dialog("open");

    //var result;

    /*$.when(
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
    });*/

});

$("#dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
        "Create": function () {
             $.toast({
                heading: "Success",
                text: "You are have registerd",
                icon: "success",
                position: "top-left"
             });
        },

        "Cancel": function () {
            $("#dialog").dialog("close");
        }
    }

});

