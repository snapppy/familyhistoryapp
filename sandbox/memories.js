window.onload = function() {
    var test = new Memory("Lovely day in the neighborhood", "", "");

    this.memories.addMemory(test);
    this.memories.saveMemories();
}

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
            }
            else {

            }
        };

        memoryRequest.open("POST", "https://snapppy.github.io/familyhistoryapp/sandbox/memories.json", true);
        memoryRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        memoryRequest.send(jsonMemories);
    }
}

/*Save items into memory, when complete, save into memories object literal*/

function Memory(prompt, imageUrl, videoUrl) {
    this.prompt = prompt;
    this.imageUrl = imageUrl;
    this.videoUrl = videoUrl;
}
