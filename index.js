function imgSlider(anything) {
  document.querySelector(".starbucks").src = anything;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  const text = document.querySelector(".text");
  const link = document.querySelector(".link");
  circle.style.background = color;
  text.style.color = color;
  link.style.background = color;
}
