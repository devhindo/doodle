const colorSelector = document.getElementById('color-selector') as HTMLInputElement;
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
    
    /*chrome.storage.local.set({'color': color}).then(() => {
        console.log('The color is set to ' + color);
    });
    chrome.storage.local.get(['color']).then((result) => {
        console.log("Value currently is (get - index.ts) " + result.key);
    });
    chrome.storage.sync.get(null, function(items) {
        var allKeys = Object.keys(items);
        console.log(allKeys);
    });
    */

    chrome.storage.sync.set({'color': color}, function() {
        console.log('The color is set to ' + color);
    });


});

// chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
//     console.log(tabs[0].url);
// });

// chrome.storage.sync.set({'color': color}, function() {
//     console.log('The color is set.');
// });