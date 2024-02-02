//https://jsonplaceholder.typicode.com/posts

const posts = new XMLHttpRequest();
posts.open("GET", "https://jsonplaceholder.typicode.com/posts");
posts.send();

posts.addEventListener("readystatechange", () => {
  if (posts.status >= 200 && posts.status < 300 && posts.readyState === 4) {
    showPosts(JSON.parse(posts.responseText));
  }
});

function showPosts(obj) {
  const posts = obj.map((item) => {
    const block = document.createElement("div");
    block.classList.add("block");
    block.insertAdjacentHTML(
      "afterbegin",
      `<a href="/"><h2 class="title"> Post #${item.id}: <span class="header">${item.title}</span></h2></a>
 <p class="postBody">${item.body}</p>`
    );
    return block;
  });
  document.querySelector(".container").append(...posts);
}
