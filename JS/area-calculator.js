function calculateTriangleArea() {
  //   get triangle base value
  const baseField = document.getElementById("triangle-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);
  console.log(base);

  //get triangle height value

  const heightField = document.getElementById("triangle-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);
  console.log(height);

  //calculate triangle area

  const triangleArea = 0.5 * base * height;
  console.log(triangleArea);

  // show view area value
  const textElement = document.getElementById("triangle-area");
  textElement.innerText = triangleArea;
}

//-------------- calculateRectangleArea---------------------

function calculateRectangleArea() {
  //get rectangleArea width
  const widthField = document.getElementById("rectangle-width");
  const widthValueText = widthField.value;
  const width = parseFloat(widthValueText);
  console.log(width);

  // get rectangle Length
  const lengthField = document.getElementById("rectangle-length");
  const lengthValueText = lengthField.value;
  const length = parseFloat(lengthValueText);
  console.log(length);

  //calculate rectangle area
  const rectangleArea = width * length;
  console.log(rectangleArea);

  //show rectangle value
  const textElement = document.getElementById("rectangle-area");
  textElement.innerText = rectangleArea;
}

function calculateParallelogramArea() {
  console.log("Btn On click");
}
