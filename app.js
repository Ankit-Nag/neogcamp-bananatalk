var btnTranslate = document.querySelector("#btnTranslate");
var txtInput = document.querySelector("#input-box");
var outputDiv = document.querySelector("#output-box");



function clickEventHandler(){
    console.log("Clicked!");
    console.log(txtInput.value);
}


btnTranslate.addEventListener("click",clickEventHandler)