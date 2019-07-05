const A = Number(prompt('Enter A'));
const B = Number(prompt('Enter B'));
const C = Number(prompt('Enter C'));

const triangle = 180;
const sum = A + B + C;

if(sum === triangle && A > 0 && B > 0 && C > 0) {
    if(A === B && B === C) {
        console.log('Eequivalent triangle');
    }
    if(A === B && B !== C || B === C && C !== A || A === C && A !== B) {
        console.log('Isosceles triangle');   
    }
    if(A !== B && B !== C && A !== C) {
        console.log('Normal triangle')
    }
} else {
    console.log('Triangle doesn’t exist');
}