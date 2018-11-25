function cappyJuice(array) {
    let map = new Map();
    let result = new Map();
    for (let data of array){
        let [juice,amount] = data.split(" => ");
        amount = +amount;
        if(!map.has(juice)){
            map.set(juice,0);
        }
        map.set(juice,map.get(juice) + amount);
        if(map.get(juice)>=1000 && !result.has(juice)){
            result.set(juice,0);
        }
    }
    map.forEach((value, key) => {
        if(value >=1000){
            result.set(key,Math.floor(value/1000));
        }
    });

    for (let [key,value] of result){
        console.log(`${key} => ${value}`);
    }

}
