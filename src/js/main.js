import { setValue, setOperation, deleteChar, getResult } from './functions'

export default function start() {
  // set event listeners
  const numberBtns = document.getElementsByClassName("numberBTN")
  const resultBtn = document.getElementById("resultBtn")
  const deleteBtn = document.getElementById("deleteBtn")
  const operationBTN = document.getElementsByClassName("operationBTN")

  Array(...numberBtns).forEach(element => {
    const numberVal = element.innerHTML
    element.addEventListener('click', () => {
      setValue(numberVal)
    })
  });

  resultBtn.addEventListener('click', () => {
    getResult()
  })

  deleteBtn.addEventListener('click', () => {
    deleteChar()
  })

  Array(...operationBTN).forEach(element => {
    const op = element.innerHTML
    element.addEventListener('click', () => {
      setOperation(op)
    })
  });
}