document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('#pop-up').onclick = function(){
    document.querySelector('#modal-window').classList.add('active');
  };

  document.querySelector('.modal-close').onclick = function(){
    document.querySelector('#modal-window').classList.remove('active');
  };
});
