var ALL = document.querySelectorAll('.all');
var INDIVIDUAL = document.querySelectorAll('.individual');
var ENGAGED = document.querySelectorAll('.engaged');
var MARRIED = document.querySelectorAll('.married');
var CORPORATE = document.querySelectorAll('.corporate');

var CLOSE_SELECTED = document.querySelectorAll('.close-selected');
var INDIVIDUAL_SELECTED = document.querySelectorAll('.individual-selected');
var ENGAGED_SELECTED = document.querySelectorAll('.engaged-selected');
var MARRIED_SELECTED = document.querySelectorAll('.married-selected');
var CORPORATE_SELECTED = document.querySelectorAll('.corporate-selected');

for (i = 0; i < CLOSE_SELECTED.length; i++) {
    CLOSE_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
    });
};

for (i = 0; i < INDIVIDUAL_SELECTED.length; i++) {
    INDIVIDUAL_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        INDIVIDUAL.forEach(function(div) {
            div.style.display = 'flex';
        });
    });
};

for (i = 0; i < ENGAGED_SELECTED.length; i++) {
    ENGAGED_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        ENGAGED.forEach(function(div) {
            div.style.display = 'flex';
        });
    });
};

for (i = 0; i < MARRIED_SELECTED.length; i++) {
    MARRIED_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        MARRIED.forEach(function(div) {
            div.style.display = 'flex';
        });
    });
};

for (i = 0; i < CORPORATE_SELECTED.length; i++) {
    CORPORATE_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        CORPORATE.forEach(function(div) {
            div.style.display = 'flex';
        });
    });
};


$('.bg-modal').on('click', function() {
    $(this).toggleClass('clicked');
});