console.log('JS OK');

let messagePrice;

const outputticketFinalPrice = document.getElementById('ticketFinalPrice');

const kmNumb = parseInt(prompt('Inserisci qui quanti km devi percorrere'));
console.log(kmNumb);

const Age = parseInt(prompt('Inserisci qui la tua età'));
console.log(Age);

const kmPrice = ('0.21');
console.log(kmPrice);


let ticketFinalPrice = (kmNumb * kmPrice);

let ticketpriceDecimals = ticketFinalPrice.toFixed(2);
console.log(ticketpriceDecimals, '€');

if (Age < 18) {

    const discountSmall = (ticketFinalPrice * 20) / 100;

    let discountSmallDecimals = (discountSmall.toFixed(2));
    console.log(discountSmallDecimals, '€');

    const priceDiscountSmall = (ticketFinalPrice - discountSmall);

    let priceDiscountSmallDecimals = (priceDiscountSmall.toFixed(2));
    console.log(priceDiscountSmallDecimals, '€');

    document.getElementById('ticketFinalPrice').innerHTML = 'Il prezzo totale del biglietto' + ' ' + ticketFinalPrice - discountSmall + '€'

}

else if (Age >= 65) {

    const discountBig = (ticketFinalPrice * 40) / 100;

    let discountBigDecimals = (discountBig.toFixed(2));
    console.log(discountBigDecimals, '€');

    const priceDiscountBig = (ticketFinalPrice - discountBig);

    let priceDiscountBigDecimals = (priceDiscountBig.toFixed(2));
    console.log(priceDiscountBigDecimals, '€');

    document.getElementById('ticketFinalPrice').innerHTML = 'Il prezzo totale del biglietto' + ' ' + ticketFinalPrice - discountBig + '€'

}

let ticketDecimals = ticketFinalPrice.toFixed(2);
console.log(ticketDecimals, '€');

const paragraph = document.getElementById('ticketFinalPrice');

document.getElementById('ticketFinalPrice').innerHTML = 'Il prezzo totale del biglietto' + ' ' + ticketFinalPrice + ' ' + '€'