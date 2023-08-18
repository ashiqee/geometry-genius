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

  //validation
  if (isNaN(width) || isNaN(length)) {
    alert("please insert a number");
    return;
  }

  //calculate rectangle area
  const rectangleArea = width * length;
  console.log(rectangleArea);

  //show rectangle value
  const textElement = document.getElementById("rectangle-area");
  textElement.innerText = rectangleArea;
}

//-----------ParallelogramArea-------------
function calculateParallelogramArea() {
  //get base input field
  const baseField = document.getElementById("parallelogram-base");
  const baseValueText = baseField.value;
  const base = parseFloat(baseValueText);

  //get height input field

  const heightField = document.getElementById("parallelogram-height");
  const heightValueText = heightField.value;
  const height = parseFloat(heightValueText);

  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a Number");
    return;
  }
  // calculate

  const parallelogramArea = base * height;

  // show the value
  const textElement = document.getElementById("parallelogram-area");
  textElement.innerText = parallelogramArea;
  addToCalculationEntry("parallelogram", parallelogramArea);
}

//---Rhombus cal---------

function calculateRhombusArea() {
  const d1 = getInputValue("rhombus-d1");

  const d2 = getInputValue("rhombus-d2");

  if (isNaN(d1) || isNaN(d2)) {
    alert("Please insert valid number");
    return;
  }

  //calculate

  const rhombusArea = 0.5 * d1 * d2;

  //set value function call
  setTextElement("rhombus-area", rhombusArea);
}

//--------Pentagon------------

function calculatePentagonArea() {
  const p = getInputValue("pentagon-p");
  const h = getInputValue("pentagon-height");

  if (isNaN(p) || isNaN(h)) {
    alert("Please insert valid number");
    return;
  }
  //cal

  const pentagonArea = 0.5 * p * h;

  //set value show
  setTextElement("pentagon-area", pentagonArea);
}

//------------Ellipse-----

function calculateEllipseArea() {
  const a = getInputValue("ellipse-a");
  const b = getInputValue("ellipse-b");
  if (isNaN(a) || isNaN(b)) {
    alert("Please insert valid number");
    return;
  }
  //cal
  const ellipseArea = Math.PI * a * b;
  const ellipseAreaTwoDecimal = ellipseArea.toFixed(2);

  // set value
  setTextElement("ellipse-area", ellipseAreaTwoDecimal);
  addToCalculationEntry("Ellipse", ellipseAreaTwoDecimal);
}
