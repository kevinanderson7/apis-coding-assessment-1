$(document).ready(onReady);

let clickCount = 0;

function onReady() {
  $('.js-btn-generate').on('click', makeBox);
}

function makeBox() {
  clickCount++;
  $('.js-container').append(`
    <div class="box">
        <p>${clickCount}</p>
        <button class="js-btn-yellow">Yellow</button>
    </div>
  `);
}
