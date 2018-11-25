function aggregateTable(input) {
    let sum = 0;
    let products = [];
    for (let i =0;i<input.length;i++){
        if(i % 2 ===0){
            products.push(input[i]);
        }
        else{
            sum+=+input[i];
        }
    }
    console.log(`You purchased ${products.join(", ")} for a total sum of ${sum}`);

}