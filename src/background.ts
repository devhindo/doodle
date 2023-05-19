chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({'color': '#ff00ae', 'size': '5'});
});