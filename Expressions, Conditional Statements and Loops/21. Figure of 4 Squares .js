function printFigure(n) {
    if (n === 2) {
        console.log('+' + '+' + '+');
        return;
    }
    let middle = n % 2 === 0 ? Math.floor(n / 2 - 2) : Math.floor(n / 2 - 1);
    let repeatCount = n - 2;
    console.log('+' + '-'.repeat(repeatCount) + '+' + '-'.repeat(repeatCount) + '+');
    for (let i = 0; i < middle; i++) {
        console.log('|' + ' '.repeat(repeatCount) + '|' + ' '.repeat(repeatCount) + '|');
    }
    console.log('+' + '-'.repeat(repeatCount) + '+' + '-'.repeat(repeatCount) + '+');
    for (let i = 0; i < middle; i++) {
        console.log('|' + ' '.repeat(repeatCount) + '|' + ' '.repeat(repeatCount) + '|');
    }
    console.log('+' + '-'.repeat(repeatCount) + '+' + '-'.repeat(repeatCount) + '+');
}

