document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h2><a href="post.html?index=${index}">${post.title}</a></h2>`;
        postsContainer.appendChild(postElement);
    });
});
