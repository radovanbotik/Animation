const windowInnerHeight = window.innerHeight;
const windowInnerWidth = window.innerWidth;

const outsideBox = document.querySelector(".outside-box");
const box = document.querySelector(".box");

document.addEventListener("scroll", () => {
  const outsideBoxWidth = outsideBox.getBoundingClientRect().width;
  const outsideBoxHeight = outsideBox.getBoundingClientRect().height;
  const outsideBoxTop = outsideBox.getBoundingClientRect().top;
  const outsideBoxBottom = outsideBox.getBoundingClientRect().bottom;
  const outsideBoxLeft = outsideBox.getBoundingClientRect().left;
  const outsideBoxRight = outsideBox.getBoundingClientRect().right;

  console.log(
    "outsideBoxTop:",
    outsideBoxTop,
    "outsideBoxBottom:",
    outsideBoxBottom
  );
  console.log(
    "windowheight:",
    windowInnerHeight
    // "windowWidth:",
    // windowInnerWidth
  );
  if (
    outsideBoxTop < windowInnerHeight &&
    outsideBoxBottom < windowInnerHeight
  ) {
    box.classList.add("animate");
  }
  if (outsideBoxTop > windowInnerHeight) {
    box.classList.remove("animate");
  }
  if (outsideBoxBottom < 0) {
    box.classList.remove("animate");
  }
});
