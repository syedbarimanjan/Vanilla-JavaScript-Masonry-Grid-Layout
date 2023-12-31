const container = document.querySelector(".container");

function generateMasonryGrid(columns, posts) {
  container.innerHTML = "";

  let columnWrappers = {};

  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }
  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }
  for (let i = 0; i < columns; i++) {
    let columnPosts = columnWrappers[`column${i}`];
    let columnElement = document.createElement("div");
    columnElement.classList.add("column");

    columnPosts.forEach((post) => {
      let postDiv = document.createElement("div");
      postDiv.classList.add("post");
      let imageElement = document.createElement("img");
      imageElement.src = post.image;
      let overlayElement = document.createElement("div");
      overlayElement.classList.add("overlay");
      let titleElement = document.createElement("h3");
      titleElement.innerText = post.title;

      overlayElement.appendChild(titleElement);
      postDiv.append(imageElement, overlayElement);
      columnElement.appendChild(postDiv);
    });
    container.appendChild(columnElement);
  }
}

let prevScreenSize = window.innerWidth;

window.addEventListener("resize", () => {
  imageIndex = 0;

  if (window.innerWidth < 600 && prevScreenSize >= 600) {
    generateMasonryGrid(1, posts);
  } else if (
    window.innerWidth >= 600 &&
    window.innerWidth < 1000 &&
    (prevScreenSize < 600 || prevScreenSize >= 1000)
  ) {
    generateMasonryGrid(2, posts);
  } else if (window.innerWidth >= 1000 && prevScreenSize < 1000) {
    generateMasonryGrid(4, posts);
  }

  prevScreenSize = window.innerWidth;
});

if (prevScreenSize < 600) {
  generateMasonryGrid(1, posts);
} else if (prevScreenSize >= 600 && prevScreenSize < 1000) {
  generateMasonryGrid(2, posts);
} else {
  generateMasonryGrid(4, posts);
}