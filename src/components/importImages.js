// fetching all the images

// exp https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
// credits for this article

export default function importAll(r) {
  let images = [];
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
