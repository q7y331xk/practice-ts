type Operator = (a: number, b: number) => number;

interface Func<T> {
    (arg:  T): T;
}


const num: Func<number> = num => num;

const zzzzzzzz: Operator = (a, b) => a + b;