window.onload = function() {
    var promptRequest = new XMLHttpRequest();
    var randomNum = Math.floor((Math.random() * 6) + 1);

    promptRequest.onreadystatechange = function () {
        if (promptRequest.readyState === 4 && promptRequest.status === 200) {

            console.log("Request received");

            var promptText = JSON.parse(promptRequest.responseText);

            document.getElementById("prompt").innerHTML = promptText;
        }
        else {
            console.log("AJAX working...");
        }
    };

    promptRequest.open("GET", "https://cit261famhistory.firebaseio.com/prompt" + randomNum, true);

    promptRequest.send();
}
