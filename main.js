onload = () =>{
    document.body.classList.remove("container");
};

// Function to redirect to YouTube video
function redirectToYouTubeVideo() {
    // Replace 'VIDEO_ID' with the ID of the YouTube video you want to redirect to
    var videoId = 'VIDEO_ID';
    var redirectUrl = 'https://www.youtube.com/watch?v=qhg0Zaw3e8M';
    window.location.href = redirectUrl;
}

// Set the time after which you want to redirect (in milliseconds)
var redirectTime = 20000; // 5000 milliseconds = 5 seconds

// Wait for the specified time and then redirect
setTimeout(redirectToYouTubeVideo, redirectTime);
