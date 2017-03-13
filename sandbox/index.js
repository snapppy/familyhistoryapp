window.onload = function() {
    var promptRequest = new XMLHttpRequest();
    var randomNum = Math.floor((Math.random() * 6) + 1);

    promptRequest.onreadystatechange = function () {
        if (promptRequest.readyState === 4 && promptRequest.status === 200) {

            var promptText = JSON.parse(promptRequest.responseText);

            document.getElementById("prompt").innerHTML = promptText.prompts[randomNum - 1];
        }
        else {

        }
    };

    promptRequest.open("GET", "https://snapppy.github.io/familyhistoryapp/prompts.json", true);

    promptRequest.send();
}
