function townsToJSON(array) {
    let output = [];
    for (let i = 1; i< array.length;i++){
        let object = {};
        let tokens = array[i].split(/\s*\|\s*/);
        object['Town'] = tokens[1];
        object['Latitude'] = +tokens[2];
        object['Longitude'] = +tokens[3];
        output.push(object);
    }
        console.log(JSON.stringify(output));
}

