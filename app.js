var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Hey something is wrong is server!! Can you please try again later");
}

function clickHandler() {
  //outputDiv.innerText = "blahblahblah" + txtInput.value;

  var inputText = txtInput.value;

  fetch(getTranslationUrl(inputText));
    .then(response => response.json())
    .then(json => console.log (json.contents.translated))
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler);
