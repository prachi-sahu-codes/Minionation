var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Hey! something is wrong with server!! Can you please try again later");
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
