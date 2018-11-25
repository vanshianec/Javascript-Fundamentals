function cityMarkets(array) {
    let map = new Map();
    for (let data of array){
        let [town,product,prices] = data.split(" -> ");
        let [sales,price] = prices.split(" : ");
        sales = +sales;
        price = +price;
        if(!map.has(town)){
            map.set(town,new Map());
        }
        let totalAmount = price * sales;
        map.get(town).set(product,+totalAmount);
    }
    for (let key of map.keys()){
        console.log(`Town - ${key}`);
        for (let [innerkey,value] of map.get(key)){
            console.log(`$$$${innerkey} : ${value}`)
        }
    }
}
