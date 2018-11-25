function capitalize(text) {
    text = text.toLowerCase();
    let array = text.split(/[\s]+/g);
    array = array.map((word) => {
        if(word.charCodeAt(0) >= 97 && word.charCodeAt(0) <= 122){
            let lowerCase = word.substring(1);
            return word.toUpperCase().charAt(0) + lowerCase;
        }
        return word;
    });
    console.log(array.join(" "));
}

