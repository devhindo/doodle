chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({'color': '#0000ff', 'size': '15'}, function() {
        console.log('The color is set to ' + 'blue');
    });
});