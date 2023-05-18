console.log("background.ts");

chrome.storage.sync.get(['color'], function(result) {
    console.log('Value currently is (get)' + result.color);
});