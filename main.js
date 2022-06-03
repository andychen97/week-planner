var $entryButt = document.querySelector('.add-button');
var $modal = document.querySelector('.modal');
var $exitButt = document.querySelector('.exit-button');
var $days = document.querySelectorAll('.day');
var $tbl = document.querySelector('table');
var $form = document.querySelector('form');

function addEntry(event) {
  $modal.className = 'modal';
}

$entryButt.addEventListener('click', addEntry);

function exitModal(event) {
  $modal.className = 'modal hidden';
}

$exitButt.addEventListener('click', exitModal);

function days(event) {
  // for (var i = 0; i < $days.length; i++) {

  // }
}

function renderTbl(event) {
  var $tr = document.createElement('tr');

  var $td1 = document.createElement('td');
  $td1.textContent = data.task[event].time[event];
  $tr.appendChild($td1);

  var $td2 = document.createElement('td');
  $td2.textContent = '';
  $tr.appendChild($td2);

  return $tr;
}

// $days.addEventListener('click', days);

// function

$form.addEventListener('submit', addEntry);

function addEntry(event) {

}
