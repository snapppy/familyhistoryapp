function setupMedia() {
    if (supportsMedia()) {
        audioContext = new AudioContext();

        navigator.getUserMedia(
            {
                video: true,
                audio: true
            },
            function (localMediaStream) {
                // map the camera
                var video = document.getElementById('live_video');
                video.src = window.URL.createObjectURL(localMediaStream);

                // create the canvas & get a 2d context
                videoCanvas = document.createElement('canvas');
                videoContext = videoCanvas.getContext('2d');

                // setup audio recorder
                var audioInput =
                    audioContext.createMediaStreamSource(localMediaStream);
                //audioInput.connect(audioContext.destination);
                // had to replace the above with the following to
                // mute playback (so you don't get feedback)
                var audioGain = audioContext.createGain();
                audioGain.gain.value = 0;
                audioInput.connect(audioGain);
                audioGain.connect(audioContext.destination);

                audioRecorder = new Recorder(audioInput);
                mediaStream = localMediaStream;
                mediaInitialized = true;

               /* document.getElementById('uploading').hidden = true;
                document.getElementById('media-error').hidden = true;
                document.getElementById('record').hidden = false;*/
            },
            function (e) {
                console.log('web-cam & microphone not initialized: ', e);
                document.getElementById('media-error').hidden = false;
            }
        );
    }
};
