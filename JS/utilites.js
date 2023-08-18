//reuseable function

//get input data
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

// set view value

function setTextElement(elementId, areaValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = areaValue;
}
