function nonDecreasingSubsequence(array) {
    let maxNumber = array[0];
    return array.filter((num) => {
        if(num >= maxNumber){
            maxNumber = num;
            return true;
        }
    }).forEach((num) => console.log(num));
}
