// ---------------------------
// SML Squid Game 3 Fan Site
// TypeScript script to embed YouTube videos dynamically
// ---------------------------
// 1️⃣ Array of full YouTube URLs (ignore any &t=XXXs)
var videoUrls = [
    "https://www.youtube.com/watch?v=Hl2yo3TNxEw",
    "https://www.youtube.com/watch?v=PCPKdUAQCws&t=1s",
    "https://www.youtube.com/watch?v=NYXvwYfeFZ4&t=322s"
];
// 2️⃣ Function to extract video ID from URL (ignores start times)
function parseYouTubeUrl(url) {
    var match = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
}
// 3️⃣ Select the container in HTML where videos will appear
var container = document.getElementById("video-container");
if (container) {
    videoUrls.forEach(function (url) {
        var videoId = parseYouTubeUrl(url);
        if (!videoId) {
            console.warn("Invalid YouTube URL:", url);
            return;
        }
        var div = document.createElement("div");
        div.className = "video";
        var iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = "https://www.youtube.com/embed/".concat(videoId); // always start at 0:00
        iframe.allowFullscreen = true;
        div.appendChild(iframe);
        container.appendChild(div);
    });
}
else {
    console.error("Container element with id 'video-container' not found!");
}
