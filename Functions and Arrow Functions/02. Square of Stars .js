function squareOfStars(n) {
    for (let i = 1; i <= n; i++) {
        let square = '';
        for (let j = 1; j <= n; j++) {
           square +='* ';
        }
        console.log(square);
    }


}
