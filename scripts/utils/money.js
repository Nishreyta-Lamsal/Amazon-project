export function formatCurrency(priceCents){
    //to ensure that there are two decimals in the price
    return (priceCents / 100).toFixed(2);

}