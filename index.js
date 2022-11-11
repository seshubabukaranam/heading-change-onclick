var userInput = document.querySelector("#user-input");
var btnH1 = document.querySelector("#btn-h1");
var btnH2 = document.querySelector("#btn-h2");
var btnH3 = document.querySelector("#btn-h3");
var btnH4 = document.querySelector("#btn-h4");
var btnH5 = document.querySelector("#btn-h5");
var btnH6 = document.querySelector("#btn-h6");
var outputMessage = document.querySelector("#output-message");


function btnHeadingh1(){

    outputMessage.innerHTML = `<h1>${userInput.value}</h1>`;  
}
function btnHeadingh2(){

    outputMessage.innerHTML = `<h2>${userInput.value}</h2>`;  
}
function btnHeadingh3(){

    outputMessage.innerHTML = `<h3>${userInput.value}</h3>`;  
}
function btnHeadingh4(){

    outputMessage.innerHTML = `<h4>${userInput.value}</h4>`;  
}
function btnHeadingh5(){

    outputMessage.innerHTML = `<h5>${userInput.value}</h5>`;  
}
function btnHeadingh6(){

    outputMessage.innerHTML = `<h6>${userInput.value}</h6>`;  
}

btnH1.addEventListener("click", btnHeadingh1);
btnH2.addEventListener("click", btnHeadingh2);
btnH3.addEventListener("click", btnHeadingh3);
btnH4.addEventListener("click", btnHeadingh4);
btnH5.addEventListener("click", btnHeadingh5);
btnH6.addEventListener("click", btnHeadingh6);

 

