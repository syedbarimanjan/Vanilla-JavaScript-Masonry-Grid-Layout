import posts from "./items.js";

const container = document.querySelector(".container");

function generateMasonryGrid(columns, posts) {
  container.innerHTML = "";

  let columnWrappers = {};

  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }
}

generateMasonryGrid(4, posts);
