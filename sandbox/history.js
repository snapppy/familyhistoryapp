function parseMemories(object) {
    //go through the list of memories
    var n, i, history, memoryDiv, prompt, video, image;
    n = 0;
    console.log(Object.keys(object).length);
    history = document.createElement("div");
    for (i = 0; i < Object.keys(object.memory).length; i = (i + 1)) {
        console.log("for loop");
        //create the new memory div and determine the size
        memoryDiv = document.createElement("div");
        //add a prompt title
        prompt = document.createElement("div");
        prompt.innerHTML = object.memory[i].prompt;
        //add a video
        video = document.createElement("video");
        video.src = object.memory[i].videoURL;
        video.setAttribute("controls", "controls");
        //add a picture
        image = document.createElement("img");
        image.src = object.memory[i].photoURL;
        memoryDiv.appendChild(prompt);
        memoryDiv.appendChild(video);
        memoryDiv.appendChild(image);
        //assign the memoryDiv a size by giving it a class name.
        if (n % 4 === 0) {
            console.log("n%4" + ":" + n);
            memoryDiv.className = "bigDiv";
        } else {
            console.log("else" + ":" + n);
            memoryDiv.className = "smallDiv";
        }
        n = (n + 1);
        history.appendChild(memoryDiv);
    }
    console.log(document.querySelector(".history").childNodes);
    document.querySelector(".history").replaceChild(history, (document.querySelector(".history").childNodes[0]));
    console.log(document.querySelector(".history").childNodes);
}

function loadMemories() {
    console.log("Function: Load Memories");
    var myRequest, object;
    myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (myRequest.readyState === 4 && myRequest.status === 200) {
            console.log("AJAX succeded");
            object = JSON.parse(myRequest.responseText);
            console.log(object);
            parseMemories(object);
        } else {
            console.log("AJAX working...");
        }
    };
    myRequest.open("GET", "https://bagleric.github.io/CIT261/Memories/memoryFile.json", true);
    myRequest.send();
}

function hideHistory() {
    document.getElementById("history").display= "hidden"
}