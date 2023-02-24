var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
let errorText = document.querySelector(".error-text");

//var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
  errorText.innerText = "";
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  errorText.innerText =
    "Hey! something is wrong with the server!! Can you please try again later.";
  errorText.style.color = "red";
  outputDiv.innerText = "";
}

function clickHandler() {
  //outputDiv.innerText = "blahblahblah" + txtInput.value;

  var inputText = txtInput.value;

  fetch(getTranslationUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
