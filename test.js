// Get the YouTube channel ID
const channelId = "UC-PyzSiuCqyzCMqEdzpw61Q";

// This function will be called whenever the iframe needs to be updated
function updateIframe() {
  // Use the YouTube Data API to get the latest video from the channel
  fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDPNbITftM59cd3RBGlV-bYJ5UwBP8_QY8&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`)
    .then(response => response.json())
    .then(data => {
      // Get the video ID from the response
      const videoId = data.items[0].id.videoId;

      // Update the iframe src to the video URL
      const iframe = document.getElementById("youtube-iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
    });
}

// Update the iframe every 5 minutes
setInterval(updateIframe, 1000 * 60 * 5);