var entryBut = document.querySelector('.add-button');
var $modal = document.querySelector('.modal');

function addEntry(event) {
  $modal.className = 'modal';
}

entryBut.addEventListener('click', addEntry);
