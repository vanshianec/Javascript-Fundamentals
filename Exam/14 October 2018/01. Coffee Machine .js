function coffeeMachine(input) {
    const caffeinePrice = 0.80;
    const decafPrice = 0.90;
    const teaPrice = 0.80;
    let totalSum = 0;

    for (let data of input) {
        let price = 0;
        let tokens = data.split(", ");
        let coins = +tokens[0];
        let typeOfDrink = tokens[1];
        let sugar;
        if (typeOfDrink === 'coffee') {
            let typeOfCoffee = tokens[2];
            switch (typeOfCoffee) {
                case  "caffeine":
                    price = caffeinePrice;
                    break;
                case "decaf":
                    price = decafPrice;
                    break;
            }
            if (tokens.length === 5) {
                price += Math.round((price * 0.10) * 10) / 10;
                sugar = +tokens[4];
                sugar !== 0 ? price += 0.10 : price += 0;
            }
            else {
                sugar = +tokens[3];
                sugar !== 0 ? price += 0.10 : price += 0;
            }
        }
        else {
            price = teaPrice;
            if (tokens.length === 4) {
                price += Math.round((price * 0.10) * 10) / 10;
                sugar = +tokens[3];
                sugar !== 0 ? price += 0.10 : price += 0;
            }
            else{
            sugar = +tokens[2];
            sugar !== 0 ? price += 0.10 : price += 0;
            }
        }
        if(price <= coins){
            console.log(`You ordered ${typeOfDrink}. Price: ${price.toFixed(2)}$ Change: ${(coins-price).toFixed(2)}$`);
            totalSum += price;
        }
        else {
            console.log(`Not enough money for ${typeOfDrink}. Need ${(price-coins).toFixed(2)}$ more.`);
        }
    }
    console.log(`Income Report: ${totalSum.toFixed(2)}$`);


}
