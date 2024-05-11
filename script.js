const inital = 2000;
const rate = 10;
const years = 3;

let getValue = (init = 0, rate = 5, time = 0) =>
    init + (init * (rate / 100) * time)
console.log(getValue(10, 35, 15));