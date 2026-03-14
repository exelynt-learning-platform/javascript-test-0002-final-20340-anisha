let n = 5;

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

for (let i = n - 1; i >= 0; i--) {
    let row = "";
    for (let s = 0; s < (n - 1 - i); s++) {
        row += " ";
    }
    for (let j = 0; j <= i; j++) {
        row += combination(i, j) + " ";
    }

    console.log(row);
}