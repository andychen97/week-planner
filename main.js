var $entryButt = document.querySelector('.add-button');
var $modal = document.querySelector('.modal');
var $exitButt = document.querySelector('.exit-button');
var $days = document.querySelectorAll('.day');

function addEntry(event) {
  $modal.className = 'modal';
}

$entryButt.addEventListener('click', addEntry);

function exitModal(event) {
  $modal.className = 'modal hidden';
}

$exitButt.addEventListener('click', exitModal);

function days(event) {
  for (var i = 0; i < $days.length; i++) {

  }
}

$days.addEventListener('click', days);
