var ALL = document.querySelectorAll('.all');
var GENERAL = document.querySelectorAll('.general');
var LONG_TERM = document.querySelectorAll('.long-term');


var ALL_SELECTED = document.querySelectorAll('.all-selected');
var GENERAL_SELECTED = document.querySelectorAll('.general-selected');
var LONG_TERM_SELECTED = document.querySelectorAll('.long-term-selected');


for (i = 0; i < ALL_SELECTED.length; i++) {
    ALL_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'inline-block';
        });
    });
};

for (i = 0; i < GENERAL_SELECTED.length; i++) {
    GENERAL_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        GENERAL.forEach(function(div) {
            div.style.display = 'inline-block';
        });
    });
};

for (i = 0; i < LONG_TERM_SELECTED.length; i++) {
    LONG_TERM_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        LONG_TERM.forEach(function(div) {
            div.style.display = 'inline-block';
        });
    });
};

var ECO_ALL = document.querySelectorAll('.eco-all');
var ECO_HEALTH_CARE = document.querySelectorAll('.eco-health-care');
var ECO_MEDICAL = document.querySelectorAll('.eco-medical');
var ECO_ED_AND_DEV = document.querySelectorAll('.eco-ed-and-dev');
var ECO_SOC_AND_TRA = document.querySelectorAll('.eco-soc-and-tra');
var ECO_MEDIA_AND_TEL = document.querySelectorAll('.eco-media-and-tel');

var ECO_ALL_SELECTED = document.querySelectorAll('.eco-all-selected');
var ECO_HEALTH_CARE_SELECTED = document.querySelectorAll('.eco-health-care-selected');
var ECO_MEDICAL_SELECTED = document.querySelectorAll('.eco-medical-selected');
var ECO_ED_AND_DEV_SELECTED = document.querySelectorAll('.eco-ed-and-dev-selected');
var ECO_SOC_AND_TRA_SELECTED = document.querySelectorAll('.eco-soc-and-tra-selected');
var ECO_MEDIA_AND_TEL_SELECTED = document.querySelectorAll('.eco-media-and-tel-selected');

for (i = 0; i < ECO_ALL_SELECTED.length; i++) {
    ECO_ALL_SELECTED[i].addEventListener('click', function() {
        ECO_ALL.forEach(function(div) {
            div.style.display = 'block';
        });
    });
};

for (i = 0; i < ECO_HEALTH_CARE_SELECTED.length; i++) {
    ECO_HEALTH_CARE_SELECTED[i].addEventListener('click', function() {
        ECO_ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        ECO_HEALTH_CARE.forEach(function(div) {
            div.style.display = 'block';
        });
    });
};

for (i = 0; i < ECO_MEDICAL_SELECTED.length; i++) {
    ECO_MEDICAL_SELECTED[i].addEventListener('click', function() {
        ECO_ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        ECO_MEDICAL.forEach(function(div) {
            div.style.display = 'block';
        });
    });
};

for (i = 0; i < ECO_ED_AND_DEV_SELECTED.length; i++) {
    ECO_ED_AND_DEV_SELECTED[i].addEventListener('click', function() {
        ECO_ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        ECO_ED_AND_DEV.forEach(function(div) {
            div.style.display = 'block';
        });
    });
};

for (i = 0; i < ECO_SOC_AND_TRA_SELECTED.length; i++) {
    ECO_SOC_AND_TRA_SELECTED[i].addEventListener('click', function() {
        ECO_ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        ECO_SOC_AND_TRA.forEach(function(div) {
            div.style.display = 'block';
        });
    });
};

for (i = 0; i < ECO_MEDIA_AND_TEL_SELECTED.length; i++) {
    ECO_MEDIA_AND_TEL_SELECTED[i].addEventListener('click', function() {
        ECO_ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        ECO_MEDIA_AND_TEL.forEach(function(div) {
            div.style.display = 'block';
        });
    });
};