const colorSelector = document.getElementById('color-selector') as HTMLInputElement;

chrome.storage.sync.get(['color'], function(result) {
    colorSelector.value = result.color;
});

var color = colorSelector.value;

const clickme = document.getElementById('console') as HTMLInputElement;

clickme.addEventListener('click', (event: Event) => {
    chrome.storage.sync.get(['color'], function(result) {
        console.log('Value currently is (get)' + result.color);
    });
});


colorSelector.addEventListener('input', (event: Event) => {
    const selectedColor = (event.target as HTMLInputElement).value;
    console.log(`Selected color is ${selectedColor}`);
    color = selectedColor;

    chrome.storage.sync.set({'color': color}, function() {
        console.log('The color is set to ' + color);
    });


});

const slider = document.getElementById('size') as HTMLInputElement;

chrome.storage.sync.get(['size'], function(result) {
    slider.value = result.size;
});

slider.addEventListener('input', (event: Event) => {
    chrome.storage.sync.set({'size': slider.value}, function() {
        console.log('The size is set to (index.ts)' + slider.value);
    });
});