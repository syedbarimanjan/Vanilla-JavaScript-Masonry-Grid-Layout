const posts = [];

const images = [
  "https://r1.ilikewallpaper.net/iphone-wallpapers/download-105160/two-black-birds-on-electric-wires-under-gray-sky-d_200.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWFtgrwxB2BlnJxWRfBxh_V0MJGeNCG1YVOA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL2INvH3GR3gr2NtjYDLtYVPsrnQ2HN-phYQ&usqp=CAU",
  "https://images.unsplash.com/photo-1687162703228-63155c83dd05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1687314100832-d99ea1fe1c2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1687090277460-664d439eb3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  "https://plus.unsplash.com/premium_photo-1670793631527-a0ce6adec101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
];

let imageIndex = 0;

for (let i = 0; i < 80; i++) {
  let item = {
    id: i,
    title: `Post ${i}`,
    image: images[imageIndex],
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts);
export default posts;
