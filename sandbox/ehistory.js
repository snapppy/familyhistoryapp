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
        }
        else {
            console.log("else" + ":" + n);
            memoryDiv.className = "smallDiv";
        }
        n = (n + 1);
        history.appendChild(memoryDiv);
        document.getElementById("eHistory").focus();
    }
    console.log(document.querySelector(".eHistory").childNodes);
    document.querySelector(".eHistory").replaceChild(history, (document.querySelector(".eHistory").childNodes[0]));
    console.log(document.querySelector(".eHistory").childNodes);
    document.getElementsByClassName("eHistory")[0].style.display = "block";
    document.getElementsByClassName("eBehindHistory")[0].style.display = "block";
}

function ajaxRequest(type, path) {
    var myRequest, object;
    myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (myRequest.readyState === 4) {
            if( myRequest.status === 200) {
            console.log("AJAX successful");
            object = JSON.parse(myRequest.responseText);
            console.log(object);
            parseMemories(object);
        }
        else {
            throw new Error("unable to manage ajax request");
        }}
    };
    myRequest.open(type, path, true);
    myRequest.send(); 
}
function loadMemories() {
    
    console.log("Function: Load Memories");
    try{
    ajaxRequest("GET", "https://bagleric.github.io/CIT261/Memories/memoryFile.json" );
    }
    catch(err){
        console.log("ERROR: " + err + "for loading the memories.");
        }
}

function hideHistory() {
    console.log("hideHistory");
    document.getElementById("eHistory").style.display = "none";
    document.getElementsByClassName("eBehindHistory")[0].style.display = "none";
}