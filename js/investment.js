var ALL = document.querySelectorAll('.all');
var PREMIUM = document.querySelectorAll('.premium');
var BASIC_ONLY = document.querySelectorAll('.basic-only');

document.getElementById('all-selected').addEventListener('click', function() {
    [].forEach.call(ALL, function(div) {
        div.style.display = 'inline-block';
    });
});

document.getElementById('premium-selected').addEventListener('click', function() {
    [].forEach.call(ALL, function(div) {
        div.style.display = 'none';
    });
    [].forEach.call(PREMIUM, function(div) {
        div.style.display = 'inline-block';
    });
});

document.getElementById('basic-only-selected').addEventListener('click', function() {
    [].forEach.call(ALL, function(div) {
        div.style.display = 'none';
    });
    [].forEach.call(BASIC_ONLY, function(div) {
        div.style.display = 'inline-block';
    });
});