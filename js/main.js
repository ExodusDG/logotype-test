$(document).ready(function() {
    $('.logo-text').hide();
    $('.logotype-block').hover(
        function() {
            $('.logo-text').show('slide', { direction: 'left' }, 500);
        },
        function() {
            $('.logo-text').hide('slide', { direction: 'left' }, 500);
        });
});