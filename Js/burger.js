var content = document.querySelector(".content");
var bodySidebar = document.querySelector("#burger-sidebar-body");
var button = document.querySelector("#burger-button");
var overlay = document.querySelector("#overlay");
var activated = 'activated';

bodySidebar.appendChild(content);

button.addEventListener('click', function(a){
  a.preventDefault();

  this.parentNode.classList.add(activated);
});

button.addEventListener('keydown', function(a){
  if (this.parentNode.classList.contains(activated))
  {
    if (a.repeat === false && a.which === 27)
      this.parentNode.classList.remove(activated);
  }
});

overlay.addEventListener('click', function(a){
  a.preventDefault();

  this.parentNode.classList.remove(activated);
});
