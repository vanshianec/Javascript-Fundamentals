function atmMachine(input) {
    let totalSum = 0;
    let banknotes = [];
    for (let array of input) {
        if (array.length > 2) {
            let insertedCash = 0;
            for (let element of array) {
                banknotes.push(element);
                insertedCash += +element;
                totalSum += +element;
            }
            console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalSum}$.`)
        }
        else if (array.length === 2) {
            let balance = array[0];
            let withdrawMoney = array[1];
            if (balance < withdrawMoney) {
                console.log(`Not enough money in your account. Account balance: ${balance}$.`)
            }
            else if (totalSum < withdrawMoney) {
                console.log('ATM machine is out of order!');
            }
            else {
                let count = 0;
                let sorted = banknotes.sort((a, b) => a - b);
                let result = [];
                while (count !== withdrawMoney) {
                    let insertedMoney = sorted.pop();
                    if (count + insertedMoney <= withdrawMoney) {
                        count += insertedMoney;
                    }
                    else {
                        result.push(insertedMoney);
                    }
                }
                for (let item of sorted) {
                    result.push(item);
                }
                totalSum -= count;
                banknotes = result;
                console.log(`You get ${count}$. Account balance: ${balance - count}$. Thank you!`)
            }
        }
        else {
            let banknote = array[0];
            let count = banknotes.filter((value) => banknote === value).length;
            console.log(`Service Report: Banknotes from ${banknote}$: ${count}.`)
        }
    }
}
