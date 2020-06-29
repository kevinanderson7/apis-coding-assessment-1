$(document).ready(onReady);

let clickCount = 0;

function onReady() {
  $('.js-btn-generate').on('click', makeBox);
  $('.js-container').on('click', '.js-btn-yellow', toggleYellowBox);
  $('.js-container').on('click', '.js-btn-delete', deleteBox);
}

function makeBox() {
  clickCount++;
  $('.js-container').append(`
    <div class="box">
        <p>${clickCount}</p>
        <button class="js-btn-yellow">Yellow</button>
        <button class="js-btn-delete">Delete</button>
    </div>
  `);
}

function toggleYellowBox() {
  $(this).parent().toggleClass('yellowBox');
}

function deleteBox() {
  $(this).parent().remove();
}
