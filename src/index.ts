const colorSelector = document.getElementById('color-selector') as HTMLInputElement;
var color = colorSelector.value;

colorSelector.addEventListener('input', (event: Event) => {
    const selectedColor = (event.target as HTMLInputElement).value;
    console.log(`Selected color is ${selectedColor}`);
    color = selectedColor;
});

chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    console.log(tabs[0].url);
});
