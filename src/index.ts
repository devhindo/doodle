
// fetching colorSelector values

const colorSelector = document.getElementById('color-selector') as HTMLInputElement;

chrome.storage.sync.get(['color'], function(result) {
    colorSelector.value = result.color;
});

// fetching size value

const slider = document.getElementById('size') as HTMLInputElement;

chrome.storage.sync.get(['size'], function(result) {
    slider.value = result.size;
});


// handling changes in color and size value

var color = colorSelector.value;

colorSelector.addEventListener('change', (event: Event) => {
    const selectedColor = (event.target as HTMLInputElement).value;
    color = selectedColor;

    chrome.storage.sync.set({'color': color});


});



slider.addEventListener('change', (event: Event) => {
    var silderValue: number = +slider.value;
    silderValue = Math.round(silderValue/2);
    var val = silderValue.toString();
    chrome.storage.sync.set({'size': val});
});