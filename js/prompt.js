window.onload = function() {
    var promptRequest = new XMLHttpRequest();
    var randomNum = Math.floor((Math.random() * 6) + 1);
    console.log("Inside prompt js");
    promptRequest.onreadystatechange = function () {
        if (promptRequest.readyState === 4 && promptRequest.status === 200) {

            var promptText = JSON.parse(promptRequest.responseText);
            console.log(promptText);
            document.getElementById("prompt").innerHTML = promptText[randomNum - 1];

            console.log("Working.");
        }
        else {
            console.log("Prompts not Working.");
        }
    };

    promptRequest.open("GET", "https://cit261famhistory.firebaseio.com/prompts.json", true);

    //https://cit261famhistory.firebaseio.com/prompts.json  //https://snapppy.github.io/familyhistoryapp/prompts.json

    promptRequest.send();
}
