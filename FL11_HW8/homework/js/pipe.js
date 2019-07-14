let addOne = (x) => x + 1;

let pipe = (number, ...restArgs) => {
    let result = number;
    for (let i = 0; i < restArgs.length; i++) {
        result = restArgs[i](result);
    }
    return result;
}
console.log(pipe(7, addOne, addOne));