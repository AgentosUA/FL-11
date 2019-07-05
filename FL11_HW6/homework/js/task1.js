const a1 = Number(prompt('Enter a1 (x) coordinate', 0));
const a2 = Number(prompt('Enter a2 (y) coordinate', 0));

const b1 = Number(prompt('Enter b1 (x) coordinate', 0));
const b2 = Number(prompt('Enter b2 (y) coordinate', 0));

const c1 = Number(prompt('Enter c1 (x) coordinate', 0));
const c2 = Number(prompt('Enter c2 (y) coordinate', 0));

const center = [(a1 + b1) / (1 + 1), (a2 + b2) / (1 + 1)];
const C = [c1, c2];

if (C[0] === center[0] && C[1] === center[1]) {
    console.log(true);
} else {
    console.log(false);
}