var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#input-box");
var outputDiv = document.querySelector("#output-box");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("Error occured ",error)
}

function clickEventHandler() {
    var inputText = txtInput.value;

    //call server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {outputDiv.innerText=json.contents.translated
        })
        .catch(errorHandler)

};


btnTranslate.addEventListener("click", clickEventHandler)