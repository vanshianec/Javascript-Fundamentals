function distanceOverTime(input) {
    let v1 = input[0];
    let v2 = input[1];
    let t = input[2];
    let timeInHours = t / 3600;
    console.log(Math.abs((v1*timeInHours)*1000 - (v2*timeInHours)*1000));
}
