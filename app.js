$(document).ready(onReady);

function onReady() {
  $('.js-btn-generate').on('click', makeBox);
}

function makeBox() {
  $('.js-container').append(`
    <div class="box">
      <button class="js-btn-yellow">Yellow</button>
    </div>
  `);
}
