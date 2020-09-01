var ALL = document.querySelectorAll('.all');
var MEDICAL = document.querySelectorAll('.medical');
var CRITICAL_ILLNESS = document.querySelectorAll('.critical-illness');

var ALL_SELECTED = document.querySelectorAll('.all-selected');
var MEDICAL_SELECTED = document.querySelectorAll('.medical-selected');
var CRITICAL_ILLNESS_SELECTED = document.querySelectorAll('.critical-illness-selected');

for (i = 0; i < ALL_SELECTED.length; i++) {
    ALL_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'flex';
        })
    });
};

for (i = 0; i < MEDICAL_SELECTED.length; i++) {
    MEDICAL_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        MEDICAL.forEach(function(div) {
            div.style.display = 'flex';
        });
    });
};

for (i = 0; i < CRITICAL_ILLNESS_SELECTED.length; i++) {
    CRITICAL_ILLNESS_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        CRITICAL_ILLNESS.forEach(function(div) {
            div.style.display = 'flex';
        });
    });
};

// document.getElementById('all-selected').addEventListener('click', function() {
//     [].forEach.call(ALL, function(section) {
//         section.style.display = 'flex';
//     });
// });

// document.getElementById('medical-selected').addEventListener('click', function() {
//     [].forEach.call(ALL, function(section) {
//         section.style.display = 'none';
//     });
//     [].forEach.call(MEDICAL, function(section) {
//         section.style.display = 'flex';
//     });
// });

// document.getElementById('critical-illness-selected').addEventListener('click', function() {
//     [].forEach.call(ALL, function(section) {
//         section.style.display = 'none';
//     });
//     [].forEach.call(CRITICAL_ILLNESS, function(section) {
//         section.style.display = 'flex';
//     });
// });