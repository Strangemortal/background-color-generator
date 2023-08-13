const color1Input = document.getElementById("color1");
const color2Input = document.getElementById("color2");
const generateButton = document.getElementById("generate-button");
const resultBox = document.getElementById("result-box");

generateButton.addEventListener("click", generateBackground);

function generateBackground() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;

  resultBox.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}