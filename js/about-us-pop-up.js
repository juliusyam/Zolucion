var ALL = document.querySelectorAll('.all');
var MISSION_STATEMENT = document.querySelectorAll('.mission-statement');
var FOUNDER_STORY = document.querySelectorAll('.founder-story');
var OUR_MOTO = document.querySelectorAll('.our-moto');

var CLOSE_SELECTED = document.querySelectorAll('.close-selected');
var MISSION_STATEMENT_SELECTED = document.querySelectorAll('.mission-statement-selected');
var FOUNDER_STORY_SELECTED = document.querySelectorAll('.founder-story-selected');
var OUR_MOTO_SELECTED = document.querySelectorAll('.our-moto-selected');

for (i = 0; i < CLOSE_SELECTED.length; i++) {
    CLOSE_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
    });
};

for (i = 0; i < MISSION_STATEMENT_SELECTED.length; i++) {
    MISSION_STATEMENT_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        MISSION_STATEMENT.forEach(function(div) {
            div.style.display = 'flex';
        });
    });
};

for (i = 0; i < FOUNDER_STORY_SELECTED.length; i++) {
    FOUNDER_STORY_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        FOUNDER_STORY.forEach(function(div) {
            div.style.display = 'flex';
        });
    });
};

for (i = 0; i < OUR_MOTO_SELECTED.length; i++) {
    OUR_MOTO_SELECTED[i].addEventListener('click', function() {
        ALL.forEach(function(div) {
            div.style.display = 'none';
        });
        OUR_MOTO.forEach(function(div) {
            div.style.display = 'flex';
        });
    });
};