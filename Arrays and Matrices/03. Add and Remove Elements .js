function addAndRemoveElemnets(array) {
    let counter = 0;
    let result = [];
    for (let i = 0;i<array.length;i++){
        switch(array[i]){
            case "add":
                result.push(++counter);
                break;
            case "remove":
                result.pop();
                counter++;
                break;
            default:
                break;
        }
    }
    result.length === 0 ? console.log("Empty") : result.forEach((value) => console.log(value));


}
