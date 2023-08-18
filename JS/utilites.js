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

//Data Validation

/* 
1. set the proper type of the input filed (number, data ,email)
2. check type using typeof
3. NaN means: Not a Number. isNaN is checking whether the input 
is not a number or not
4. set inner HTML . it could be dynamic template string
5. append the created element as a child of the parent
*/

//add to calculation entry
/* 
1. find the element where you want to add  */
function addToCalculationEntry(areaType, area) {
  console.log(areaType, area);
  const calculateEntry = document.getElementById("calculation-entry");
  const count = calculateEntry.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-4");
  p.innerHTML = ` ${count + 1}. ${areaType} ${area} cm<sup>2</sup> 
 <button
                  class="btn btn-sm btn-success"
                  onclick="convertToMeter(${area})">
                  Convert m<sup>2</sup>
                </button>`;
  calculateEntry.appendChild(p);
}

//Convert button

function convertToMeter(area) {
  const meter = area * 0.01;

  const meterText = document.getElementById("meter-element");
  meterText.innerText = meter;
  console.log(meter);
}
