function printCars(array) {
    let cars = new Map();
    for (let data of array){
        [brand,model,count] = data.split(" | ");
        if(!cars.has(brand)){
            cars.set(brand,new Map());
            cars.get(brand).set(model,+count);
        }
        else if(cars.get(brand).has(model)){
            cars.get(brand).set(model,cars.get(brand).get(model) + +count);
        }
        else{
            cars.get(brand).set(model,+count);
        }
    }
    for (let [key,value] of cars){
        console.log(key);
        let innerMap = value;
        for (let [innerKey,innerValue] of innerMap){
            console.log(`###${innerKey} -> ${innerValue}`);
        }
    }
}
