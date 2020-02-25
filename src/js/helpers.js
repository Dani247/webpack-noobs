function getOperationResult(selectedOperation, selectedValue, secondSelectedValue) {
  let res = 0;
  switch (selectedOperation) {
    case 'add':
      res = parseFloat(selectedValue, 10) + parseFloat(secondSelectedValue, 10)
      break;
    case 'substract':
      res = parseFloat(selectedValue, 10) - parseFloat(secondSelectedValue, 10)
      break;
    case 'mutiply':
      res = parseFloat(selectedValue, 10) * parseFloat(secondSelectedValue, 10)
      break;
    case 'divide':
      res = parseFloat(selectedValue, 10) / parseFloat(secondSelectedValue, 10)
      break;
    default:
      res = selectedValue + '';
      break
  }
  return res;
}

function deleteLast(string) {
  if (string.length === 1) {
    return '0'
  }
  return string.substr(0, string.length - 1)
}

function getOperationString(op) {
  let res = ''
  switch (op) {
    case 'add':
      res = selectedValue + ' +'
      break;
    case 'substract':
      res = selectedValue + ' -'
      break;
    case 'mutiply':
      res = selectedValue + ' x'
      break;
    case 'divide':
      res = selectedValue + ' /'
      break;
  }
  return res
}