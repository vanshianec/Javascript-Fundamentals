function modifyAverage(number) {
    while(true){
        let sum = 0;
        let array = number+"".split("");
        for (let num of array) {
            sum += +num;
        }
        if(sum / number.length >5){
            break;
        }
        number += '9';
    }
    console.log(number);
}
