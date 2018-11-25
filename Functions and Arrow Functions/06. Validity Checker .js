function validityChecker(number) {

    let x1 = number[0];
    let y1 = number[1];
    let x2 = number[2];
    let y2 = number[3];

    console.log(distanceBetweenTwoPoints(x1, y1, 0, 0) % 1 === 0 ?
        `{${x1}, ${y1}} to {0, 0} is valid` : `{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(distanceBetweenTwoPoints(x2, y2, 0, 0) % 1 === 0 ?
        `{${x2}, ${y2}} to {0, 0} is valid` : `{${x2}, ${y2}} to {0, 0} is invalid`);
    console.log(distanceBetweenTwoPoints(x1, y1, x2, y2) % 1 === 0 ?
        `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);


    function distanceBetweenTwoPoints(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }

}
