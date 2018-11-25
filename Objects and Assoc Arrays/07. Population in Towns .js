function populationInTowns(array) {
    let map = new Map();
    for (let data of array){
        let [town,population] = data.split(/\s*<->\s*/);
        population = +population;
        if(!map.has(town)){
            map.set(town,population);
        }
        else{
        map.set(town,map.get(town) + population);
        }
    }
    for (let key of map.keys()){
        console.log(`${key} : ${map.get(key)}`);
    }
}
