function printFigureArea(w, h, W, H) {
    let firstArea = W * H;
    let secondArea = w * h;
    let thirdArea = Math.min(w, W) * Math.min(h, H);
    console.log(firstArea + secondArea - thirdArea);
}
