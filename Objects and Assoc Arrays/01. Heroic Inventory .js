function heroicInventory(array){
    let result = [];
    for (let sentence of array){
        let obj = {};
        let data = sentence.split(" / ");
        let name = data[0];
        let level = +data[1];
        let items = [];
        if(data.length > 2){
         items = data[2].split(", ");
        }
        obj = {
            name: name,
            level : level,
            items: items
        };
        result.push(obj);
    }
    console.log(JSON.stringify(result));


}