function toggleText() {
  // ваш код...
  const button = document.querySelector('.toggle-text-button');
  const div = document.getElementById('text');

  button.addEventListener('click', handler1);
  button.addEventListener('click', handler2);
  
  function handler1(){
    div.hidden = true;
  }

  function handler2(){
    div.hidden = false;
  }

}
