document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get("index");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    
    if (index !== null && posts[index]) {
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Post";
        deleteButton.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this post?")) {
                posts.splice(index, 1);
                localStorage.setItem("posts", JSON.stringify(posts));
                window.location.href = "index.html";
            }
        });
        document.body.appendChild(deleteButton);
    }
});