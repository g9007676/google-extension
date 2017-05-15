chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
        message.innerText = request.source;
    }
});

var scriptFiles = [
    { file: "jquery-3.2.1.min.js" },
    { file: "getPagesSource.js" }
];

var executeScripts = function(files) {

    var message = document.getElementById("message"); 

    files.map(function(objectKey, index) {
        console.log(objectKey);
        chrome.tabs.executeScript(null, objectKey, function() {
            console.log(chrome.runtime.lastError);
            if (chrome.runtime.lastError) {
                message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
            }

        });
    });
}

window.onload = executeScripts(scriptFiles);
