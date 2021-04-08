const $elementExampleFirst = document.querySelector('.elementExample_first');

const $elementExampleLast = document.querySelector('.elementExample_last');

$elementExampleFirst.addEventListener('click', function(event) {
  this.classList.toggle('elementExample_isActive')       //remove ou add a class - toggle
  $elementExampleLast.classList.add('elementExample_isActive')
});

$elementExampleLast.addEventListener('click', function(event) {
  this.classList.toggle('elementExample_isActive')
  $elementExampleFirst.classList.add('elementExample_isActive')
});

// com o método toogle ,consigo adicionar uma nova classe ou remover, conforme fç criada