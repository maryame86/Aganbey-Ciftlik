
$(document).ready(function() {
  
    const $turkish = $('.turk');
    const $english = $('.eng');

    const $turkBtn = $('#TR-btn');
    const $engBtn = $('#ENG-btn');

    $english.hide();
    $turkish.show();

    $engBtn.on('click', () => {
        $english.show();
        $turkish.hide();
    });

    $turkBtn.on('click', () => {
        $turkish.show();
        $english.hide();
    });


});

