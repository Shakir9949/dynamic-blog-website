document.getElementById("postForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push({ title, content });
    localStorage.setItem("posts", JSON.stringify(posts));
    window.location.href = "index.html";
});