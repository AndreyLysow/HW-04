const textLink=document.querySelector('#link');

  textLink.addEventListener("click", (event)=>{
    event.preventDefault();
      alert('Переход по ссылке невозможен! Переименуйте ссылку.');
  });
    textLink.addEventListener("click", ()=>{
    textLink.textContent = prompt();
  });


 