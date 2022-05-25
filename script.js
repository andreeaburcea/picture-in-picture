const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// async func -> prompt to select media stream, pass to video element, then play

async function selectMedia() {
    try {
    // screen capture API, live screen contents by calling nav
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
        videoElement.play();
    }

     
    } catch (error) {
     //catch error
     console.log('Oops, error here:', error)
    }
}

button.addEventListener('click', async () => {
    // disable button
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // reset button
    button.disabled = false;
    

});
// on load

selectMedia();