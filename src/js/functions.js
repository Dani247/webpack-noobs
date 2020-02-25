let selectedValue = '0';
let secondSelectedValue = '0'
let selectedOperation = null;

const valSpan = document.getElementById("value");
const opertaionSpan = document.getElementById("operation");

function setValue(val) {
  if(selectedOperation) {
    if (secondSelectedValue === '0') {
      secondSelectedValue = val;
    } else {
      secondSelectedValue = secondSelectedValue + val;
    }
    valSpan.innerHTML = secondSelectedValue
  } else {
    if (selectedValue === '0') {
      selectedValue = val;
    } else {
      selectedValue = selectedValue + val;
    }
    valSpan.innerHTML = selectedValue
  }
}

function setOperation(op) {
  selectedOperation = op
  let res = getOperationString(op, selectedValue);
  
  opertaionSpan.innerHTML = res
  valSpan.innerHTML = '0'
}

function getResult() {
  let res = getOperationResult(selectedOperation, selectedValue, secondSelectedValue)
  selectedValue = '0';
  secondSelectedValue = '0'
  selectedOperation = null;
  opertaionSpan.innerHTML = ''
  valSpan.innerHTML = res + ''
}

function deleteChar() {
  if (selectedOperation) {
    let res = deleteLast(secondSelectedValue)
    secondSelectedValue = res;
    valSpan.innerHTML = res + ''  
  } else {
    let res = deleteLast(selectedValue)
    selectedValue = res;
    valSpan.innerHTML = res + ''  
  }
}
