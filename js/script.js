$('.open-btn').on('click', function() {
    $('.sidebar').addClass('active');
})

$('.close-btn').on('click', function() {
    $('.sidebar').removeClass('active');
})

$(document).ready(function() { 
    $('search-select-box select').selectpicker();
})