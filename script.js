console.log('JS OK');

const kmNumb = parseInt(prompt('Inserisci qui quanti km devi percorrere'));
console.log(kmNumb);

const userAge = parseInt(prompt('Inserisci qui la tua età'));
console.log(userAge);

const kmPrice = ('0.21');
console.log(kmPrice);

let ticketFinalPrice = (kmNumb * kmPrice);


if (userAge <= 18) {

    const discountSmall = (ticketFinalPrice * 20) / 100;

    let discountSmallDecimals = (discountSmall.toFixed(2));

    console.log(discountSmallDecimals, '€');

    const priceDiscountSmall = (ticketFinalPrice - discountSmall);

    let priceDiscountSmallDecimals = (priceDiscountSmall.toFixed(2));

    console.log(priceDiscountSmallDecimals, '€');

}

let ticketDecimals = ticketFinalPrice.toFixed(2);
console.log(ticketDecimals, '€');
