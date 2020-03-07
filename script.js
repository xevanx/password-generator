var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", ",", "@", "#", "$", "%", "^", "&", "*", "-", "_", ".", "?", "/", "~"];
var newPassh1 = document.getElementById("newPass");
var password = "";
var genButton = document.getElementById("genButton");
// console.log(lowerCheck);

genButton.addEventListener("click", function (event) {
    event.preventDefault();
    password = "";
    newPass();
});

function newPass() {
    var chosenLength = prompt("How long do you want your password?");
    var maxLength = parseInt(chosenLength);
    var lowerCheck = document.querySelector("#lower").checked;
    var upperCheck = document.querySelector("#upper").checked;
    var numberCheck = document.querySelector("#numb").checked;
    var specialCheck = document.querySelector("#special").checked;
    var passwordArray = [""];
    if (lowerCheck === true) {
        passwordArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    };
    console.log(lowerCheck);
    if (upperCheck === true) {
        passwordArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    };
    if (numberCheck === true) {
        passwordArray.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
    };
    if (specialCheck === true) {
        passwordArray.push("!", ",", "@", "#", "$", "%", "^", "&", "*", "-", "_", ".", "?", "/", "~");
    };

    for (var i = 0; i < maxLength - 1; i++) {
        var rand = Math.floor(Math.random() * passwordArray.length);
        password = password + passwordArray[rand];
    };
    console.log(password);
    newPassh1.textContent = password;
};