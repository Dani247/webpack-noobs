function getOperationResult(selectedOperation, selectedValue, secondSelectedValue) {
  let res = 0;
  switch (selectedOperation) {
    case '+':
      res = parseFloat(selectedValue, 10) + parseFloat(secondSelectedValue, 10)
      break;
    case '-':
      res = parseFloat(selectedValue, 10) - parseFloat(secondSelectedValue, 10)
      break;
    case 'x':
      res = parseFloat(selectedValue, 10) * parseFloat(secondSelectedValue, 10)
      break;
    case '/':
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
  return string.substring(0, string.length - 1)
}

function getOperationString(op, selectedValue) {
  let res = ''
  switch (op) {
    case '+':
      res = selectedValue + ' +'
      break;
    case '-':
      res = selectedValue + ' -'
      break;
    case 'x':
      res = selectedValue + ' x'
      break;
    case '/':
      res = selectedValue + ' /'
      break;
  }
  return res
}