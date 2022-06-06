type lalal = {
    (a: number, b: number): number
    (a: number, b: number, c:number): number
}

interface testInter {
    (arg: string): number;
}

const adder: lalal = (a, b, c?: number) => {
    if (c && typeof c === "number") return a + b + c
    return a + b
}

const testFunc: testInter = arg => 1

console.log(adder(1,2,3));