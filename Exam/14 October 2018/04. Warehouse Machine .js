function warehouseMachine(array) {
    let coffeeStorage = new Map();
    for (let input of array) {
        let tokens = input.split(", ");
        let command = tokens[0];
        let coffeeBrand;
        let coffeeName;
        let expireDate;
        let quantity;

        switch (command) {
            case 'IN':
                coffeeBrand = tokens[1];
                coffeeName = tokens[2];
                expireDate = tokens[3];
                quantity = tokens[4];
                if (!coffeeStorage.has(coffeeBrand)) {
                    coffeeStorage.set(coffeeBrand, new Map());
                    coffeeStorage.get(coffeeBrand).set(coffeeName, [expireDate, quantity]);
                }
                else if (coffeeStorage.get(coffeeBrand).has(coffeeName)) {
                    let currentDate = coffeeStorage.get(coffeeBrand).get(coffeeName)[0];
                    let currentQuantity = coffeeStorage.get(coffeeBrand).get(coffeeName)[1];
                    if (secondDateExpiresLater(currentDate, expireDate) === 1) {
                        coffeeStorage.get(coffeeBrand).set(coffeeName, [expireDate, quantity]);
                    }
                    else if (secondDateExpiresLater(currentDate, expireDate) === 0) {
                        coffeeStorage.get(coffeeBrand).set(coffeeName, [currentDate, currentQuantity + quantity]);
                    }
                }
                else {
                    coffeeStorage.get(coffeeBrand).set(coffeeName, [expireDate, quantity]);
                }
                break;
            case 'OUT':
                coffeeBrand = tokens[1];
                coffeeName = tokens[2];
                expireDate = tokens[3];
                quantity = tokens[4];
                if (coffeeStorage.has(coffeeBrand)) {
                    if (coffeeStorage.get(coffeeBrand).has(coffeeName)) {
                        let currentDate = coffeeStorage.get(coffeeBrand).get(coffeeName)[0];
                        let currentQuantity = coffeeStorage.get(coffeeBrand).get(coffeeName)[1];
                        if (secondDateExpiresLater(expireDate, currentDate) === 1) {
                            if (currentQuantity >= quantity) {
                                let newQuantity = currentQuantity - quantity;
                                coffeeStorage.get(coffeeBrand).set(coffeeName, [currentDate, newQuantity]);
                            }
                        }
                    }
                }
                break;
            case 'REPORT':
                console.log('>>>>> REPORT! <<<<<');
                for (let [key, value] of coffeeStorage) {
                    console.log(`Brand: ${key}:`);
                    let innerMap = value;
                    for (let [innerKey, innerValue] of innerMap) {
                        let expireDate = innerValue[0];
                        let quantity = innerValue[1];
                        console.log(`-> ${innerKey} -> ${expireDate} -> ${quantity}.`);
                    }
                }
                break;
            case 'INSPECTION':
                let sorted = new Map([...coffeeStorage.entries()].sort());
                console.log('>>>>> INSPECTION! <<<<<');
                for (let [key, value] of sorted) {
                    console.log(`Brand: ${key}:`);
                    let innerMap = new Map([...value.entries()].sort((a, b) => b[1][1] - a[1][1]));
                    for (let [innerKey, innerValue] of innerMap) {
                        let expireDate = innerValue[0];
                        let quantity = innerValue[1];
                        console.log(`-> ${innerKey} -> ${expireDate} -> ${quantity}.`);
                    }
                }

                break;
        }

    }

    function secondDateExpiresLater(firstDate, secondDate) {
        [firstYear, firstMonth, firstDay] = firstDate.split("-");
        [secondYear, secondMonth, secondDay] = secondDate.split("-");

        if (+firstYear < +secondYear) {
            return 1;
        }
        if (+firstYear === +secondYear) {
            if (+firstMonth < +secondMonth) {
                return 1;
            }
            if (+firstMonth === +secondMonth) {
                if (+firstDay < +secondDay) {
                    return 1;
                }
                if (+firstDate === +secondDay) {
                    return 0;
                }
            }
        }
        return -1;
    }
}
