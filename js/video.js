/*TO-DO: Add recording to a file.*/

document.addEventListener('DOMContentLoaded', function() {

    var video = document.querySelector('video'),
        canvas = document.querySelector('canvas'),
        context = canvas.getContext('2d');

    var frames = [];

    var url = canvas.toDataURL('image/webp', 1);

    //get access to camera and microphone, vender prefixes.
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;

    window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

    //taking video or audio, and two functions for if it is successful or if there's an error.
    navigator.getUserMedia({video: true, audio: true}, onSuccessCallback, onErrorCallback);

    function onSuccessCallback(stream) {

        //this is attaching this stream to the video tag in our html
        video.src = window.URL.createObjectURL(stream) || stream;
        //this is to autoplay the video
        video.play();

        requestAnimationFrame(updateCanvas);
    }

    function onErrorCallback() {
        console.log("Error loading camera.");
    }

    function updateCanvas(){
        context.clearRect(0,0,canvas.width,canvas.height);
        context.drawImage(video, 0, 0, 600, 600);
        //frames.push(canvas.toDataURL('image/webp', 1));

        requestAnimationFrame(updateCanvas);
    }
}, false);

function snapShot(element) {
    var canvas = document.getElementById("canvas");

    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

    //Convert image to 'octet-stream' (Just a download, really)
    window.location.href = image;

    //save image url into json?

    //make snapshot animation
    /*var snapshotTransition = document.getElementById("snapshot-transition");*/

    /*snapshotTransition.style.backgroundImage = "url('" + image + "')";
    snapshotTransition.style.transform = "scale(1.2)";

    document.getElementById("download-icon").style.display = "block";
    document.getElementById("download-icon-triangle").style.display = "block";
    document.getElementById("download-icon-base").style.display = "block";*/
}

function close() {
    /*snapshotTransition.style.backgroundImage = "url()";
    snapshotTransition.style.transform = "scale(1)";

    document.getElementById("download-icon").style.display = "none";
    document.getElementById("download-icon-triangle").style.display = "none";
    document.getElementById("download-icon-base").style.display = "none";*/
}


