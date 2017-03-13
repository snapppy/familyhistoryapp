var memories = {
    //whatever is brought in from JSON will be put here
    memoryArray: [],
    //common functionality will be put here
    displayMemories: function() {

    },

    addMemory: function(memory) {
        this.memoryArray.push(memory);
    },

    saveMemories: function() {
        //stringify JSON
        //PUT request?
        var jsonMemories = JSON.stringify(this.memoryArray);
        var memoryRequest = new XMLHttpRequest();
        var randomNum = Math.floor((Math.random() * 6) + 1);

        memoryRequest.onreadystatechange = function () {
            if (memoryRequest.readyState === 4 && memoryRequest.status === 200) {

                var promptText = JSON.parse(memoryRequest.responseText);

                document.getElementById("prompt").innerHTML = promptText.prompts[randomNum - 1];
            }
            else {

            }
        };

        memoryRequest.open("PUT", "https://snapppy.github.io/familyhistoryapp/memories.json", true);

        memoryRequest.send();
    }
}

/*Save items into memory, when complete, save into memories object literal*/

function Memory(prompt, imageUrl, videoUrl) {
    this.prompt = prompt;
    this.imageUrl = imageUrl;
    this.videoUrl = videoUrl;
}
