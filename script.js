var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output");

function submitHandler () {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss (ip, qty, curr);

}



function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
       var loss = (initial - current) * quantity;
       var lossPercentage = (loss / (initial*quantity)) * 100;

      showOutput (`Loss is ${loss} and percentage is ${lossPercentage}%`);
    } 
    else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / (initial*quantity)) * 100;
        showOutput(`profit is ${profit} and percent is ${profitPercentage}%`);
    } 
    else {
        showOutput(`No Pain No Gain and No Gain No Pain!!`); 
    }

}

submitBtn.addEventListener("click", submitHandler);

function showOutput (message) {
  outputBox.innerHTML = message;
 }
