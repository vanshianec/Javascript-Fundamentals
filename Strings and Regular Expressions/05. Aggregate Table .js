function aggregateTable(input) {
    let sum = 0;
    let array = [];
    for (let line of input) {
        let tokens = line.split('|');
        array.push(tokens[1].trim());
        sum += +(tokens[2].trim());
    }
    console.log(array.join(', ') + '\n' + sum);
      

}