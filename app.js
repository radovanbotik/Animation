const windowInnerHeight = window.innerHeight;
const windowInnerWidth = window.innerWidth;

const box = document.querySelector(".box");

document.addEventListener("scroll", () => {
  const boxWidth = box.getBoundingClientRect().width;
  const boxHeight = box.getBoundingClientRect().height;
  const boxTop = box.getBoundingClientRect().top;
  const boxBottom = box.getBoundingClientRect().bottom;
  const boxLeft = box.getBoundingClientRect().left;
  const boxRight = box.getBoundingClientRect().right;

  console.log("boxTop:", boxTop, "boxBottom:", boxBottom);
  console.log(
    "windowheight:",
    windowInnerHeight
    // "windowWidth:",
    // windowInnerWidth
  );
  if (boxTop < windowInnerHeight && boxBottom < windowInnerHeight) {
    box.classList.add("animate");
  }
  if (boxTop > windowInnerHeight) {
    box.classList.remove("animate");
  }
  if (boxBottom < 0) {
    box.classList.remove("animate");
  }
});
