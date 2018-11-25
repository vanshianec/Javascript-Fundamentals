function printLetter(str){
    let array = str.split('');
    for (let i =0 ;i<array.length;i++){
        console.log(`str[${i}] -> ${array[i]}`);
    }
}