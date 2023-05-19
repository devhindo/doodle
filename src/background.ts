chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({'color': '#0000ff', 'size': '15'});
});