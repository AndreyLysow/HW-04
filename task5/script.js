let textInput = document.querySelector('#textInput');
let button = document.querySelector('button');
textInput.addEventListener('input',  function (event)  {
     this.textContent = event.target.value;
    duplicateField.innerText = this.value;
  })
button.addEventListener('click', (event) => {
  // можно, конечно, усложнить решение: if (event.target.nodeName === 'BUTTON') {};
      console.log(duplicateField.textContent);
      event.stopPropagation();
     textInput.value = "";
     duplicateField.innerText = "";
  })
