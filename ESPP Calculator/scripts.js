let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });


const runESPP = () => {

let currentValue = document.getElementById('currentStockPrice').value;
let previousValue = document.getElementById('previousStockPrice').value;
let takeHomePay = document.getElementById('takeHomePay').value;
let percentToPlan = (document.getElementById('percentToESPP').value / 100)
let availableFunds = (takeHomePay * percentToPlan) * 12;

/*
console.log(currentValue);
console.log(previousValue);
console.log(takeHomePay);
console.log(percentToPlan);
console.log(availableFunds);
*/

//function to determine which stock price to use

const stockPriceFinder = (currentValue, previousValue) => {
    let yourPrice;
    if (currentValue > previousValue) {
        yourPrice = previousValue;
   
    } else if (previousValue >= currentValue) {
        yourPrice = currentValue;
     
    } let finalPrice = yourPrice * 0.85;
    return (finalPrice);
}

//console.log(stockPriceFinder(currentValue, previousValue));


let purchasedShares = availableFunds / stockPriceFinder(currentValue, previousValue);
console.log(`You are buying ${purchasedShares} shares with ${formatter.format(availableFunds)}`)

let totalShares = purchasedShares

let finalValue = totalShares * currentValue;
let difference = finalValue - availableFunds;

console.log(`Your shares will be worth ${formatter.format(finalValue)} after 6 months, which means your initial ${formatter.format(availableFunds)} will have made you an additional ${formatter.format(difference)}.`);


    
    document.getElementById('totalEarnings').innerHTML = formatter.format(finalValue);
    document.getElementById('totalInvestment').innerHTML = formatter.format(availableFunds)
    document.getElementById('totalIncrease').innerHTML = formatter.format(difference)
}







const runUnqualifiedESPP = () => {

let currentValue = document.getElementById('currentStockPrice2').value;
let previousValue = document.getElementById('previousStockPrice2').value;
let takeHomePay = document.getElementById('takeHomePay2').value;
let percentToPlan = (document.getElementById('percentToESPP2').value / 100)
let availableFunds = (takeHomePay * percentToPlan) * 12;


console.log(currentValue);
console.log(previousValue);
console.log(takeHomePay);
console.log(percentToPlan);
console.log(availableFunds);



const stockPriceFinder = (currentValue, previousValue) => {
    let finalPrice;
    if (currentValue > previousValue) {
        finalPrice = previousValue;
   
    } else if (previousValue >= currentValue) {
        finalPrice = currentValue;
     
    } 
    return finalPrice;
}


//the price at which you'll buy your stock
console.log(`Does this work? ${stockPriceFinder(currentValue, previousValue)}`);

//how many share you can buy
let purchasedShares = availableFunds / stockPriceFinder(currentValue, previousValue);
console.log(`You are buying ${purchasedShares} shares with ${formatter.format(availableFunds)}`)

let totalShares = purchasedShares * 2;

let finalValue = totalShares * currentValue;
let difference = finalValue - availableFunds;

console.log(`Your shares will be worth ${formatter.format(finalValue)} after 3 months, which means your initial ${formatter.format(availableFunds)} will have made you an additional ${formatter.format(difference)}.`);


document.getElementById('totalEarnings2').innerHTML = formatter.format(finalValue);
document.getElementById('totalInvestment2').innerHTML = formatter.format(availableFunds)
document.getElementById('totalIncrease2').innerHTML = formatter.format(difference)

}

let qualifiedButton = document.getElementById('qualified');
let unqualifiedButton = document.getElementById('unqualified');

let qualifiedWindow = document.getElementById('main');
let unqualifiedWindow = document.getElementById('main2');

const showQualified = () => {
    document.getElementById("main2").style.display = "none";
    document.getElementById('main').style.display = "block";
    console.log('this is sort of working')
}

const showUnqualified = () => {
    document.getElementById('main').style.display = "none";
    document.getElementById("main2").style.display = "block";
}