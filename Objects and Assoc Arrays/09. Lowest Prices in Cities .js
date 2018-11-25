function printLowestPrices(params) {
    let map = new Map();
    for (const row of params) {
        let [town, product, price] = row.split(' | ');
        if (!map.get(product)) {
            map.set(product, new Map());
        }
        map.get(product).set(town, Number(price));
    }

    let result = '';

    for (let kvp of map) {
        let pair = kvp[1];
        let lowestPrice = [...pair].sort((a, b) => a[1] - b[1])[0];
        result += `${kvp[0]} -> ${lowestPrice[1]} (${lowestPrice[0]})\n`;
    }

    console.log(result.trim());
}
