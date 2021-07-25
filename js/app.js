'use strict';
function updateExchangeRates(update){
    document.getElementById('usd-buy-rate').textContent=update['usd']['buyRate'];
    document.getElementById('eur-buy-rate').textContent=update['eur']['buyRate'];
    document.getElementById('usd-sell-rate').textContent=update['usd']['sellRate'];
    document.getElementById('eur-sell-rate').textContent=update['eur']['sellRate'];
    document.getElementById('date').textContent=update['date'];
}

const update = {
    date: '28 июля',
    usd: {
        buyRate: '45,75',
        sellRate: '70,24',
    },
    eur:{
        buyRate: '50,75',
        sellRate: '80,24',
    },
};

updateExchangeRates(update);

