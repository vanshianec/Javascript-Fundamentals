function quadricEquation(a, b, c) {
    let discriminant = b * b - 4 * a * c;

    if(discriminant < 0) {
        console.log('No');
    } else if(discriminant === 0) {
        console.log( -b / (2 * a));
    } else {
        let x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b + Math.sqrt(discriminant)) / (2 * a);

        console.log(x1);
        console.log(x2);
    }
}