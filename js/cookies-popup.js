const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}`
    },
};

const storageType = cookieStorage;
const consentPropertyName = 'zolucion-consent';

//If the keyname is present, or these is a value associated with key name, return false, no popup will happen
let shouldShowPopup = () => !storageType.getItem(consentPropertyName);
let saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = init();

function init() {
    var consentPopup = document.querySelectorAll('.consent-modal');
    var acceptButton = document.querySelectorAll('.accept');

    if(shouldShowPopup() == true) {
        for (i = 0; i < consentPopup.length; i++) {
                consentPopup.forEach(function(section) {
                    section.style.display = 'flex';
            });
        };

        for (i = 0; i < acceptButton.length; i++) {
            acceptButton[i].addEventListener('click', function() {
                consentPopup.forEach(function(section) {
                    section.style.display = 'none';
                    const consent = true;
                    if (consent == true) {
                        saveToStorage();
                    };
                });
            });
        };
    };
};

