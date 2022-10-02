const  consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
alert('Служит для вывода информации в консоль');
})

document.querySelector('#alert').addEventListener('click', 
  (event) => {
    alert('Пример alert');
})

document.querySelector('#prompt').addEventListener('click', 
  (event) => {
    prompt('Пример prompt');
})