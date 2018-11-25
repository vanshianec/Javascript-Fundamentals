function sumLastKNumbersSequence(n, k) {
    let seq = [1];
    for (let i = 1; i  < n; i ++) {
        let start = Math.max(0, i  - k);
        let end = i - 1;
        let sum = seq.slice(start,end + 1).reduce((a,b) => a+b);
            seq[i] = sum;
    }
    console.log(seq.join(' '));
}