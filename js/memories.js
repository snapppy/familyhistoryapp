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
        //POST request?
        var jsonMemories = JSON.stringify(this.memoryArray);
        var memoryRequest = new XMLHttpRequest();

        memoryRequest.onreadystatechange = function () {
            if (memoryRequest.readyState === 4 && memoryRequest.status === 200) {
                console.log("Ready");
            }
            else {
                console.log("Not ready.");
            }
        };

        memoryRequest.open("PUT", "https://cit261famhistory.firebaseio.com/memories.json", true);

        memoryRequest.setRequestHeader("Content-type", "application/json");

        memoryRequest.send(jsonMemories);
    }
}

/*Save items into memory, when complete, save into memories object literal*/

function Memory(prompt, imageUrl, videoUrl) {
    this.prompt = prompt;
    this.imageUrl = imageUrl;
    this.videoUrl = videoUrl;
}

document.addEventListener('DOMContentLoaded', function() {
    var test = new Memory("Lovely day in the neighborhood", "", "");

    memories.addMemory(test);
    memories.saveMemories();
}, true);

