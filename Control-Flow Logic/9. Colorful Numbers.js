function colorfulNumbers(n) {
    let code = '<ul>\n';
    let color = null;
    for (let i = 1; i <= n; i++) {
        color = i%2===0 ? 'blue' : 'green';
        code += ` <li><span style='color:${color}'>${i}</span></li>\n`;
    }
    code += '</ul>';
    console.log(code);
}

