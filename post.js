document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get("index");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    if (index !== null && posts[index]) {
        document.getElementById("postTitle").textContent = posts[index].title;
        document.getElementById("postContent").textContent = posts[index].content;
    }
    
    // Load delete post functionality
    const script = document.createElement("script");
    script.src = "deletePost.js";
    document.body.appendChild(script);
});