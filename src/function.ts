// 函数定义
function add1(x: number, y: number) {
    return x + y
}

let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
    (x: number, y: number): number
}

// add1(1, 2, 3)

function add5(x: number, y?: number) {
    return y ? x + y : x
}
add5(1)

function add6(x: number, y = 0, z: number, q = 1) {
    return x + y + z + q
}
add6(1, undefined, 3)

function add7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur);
}
add7(1, 2, 3, 4, 5)
console.log(add7(1, 2, 3, 4, 5))


// 函数重载
function add8(...rest: number[]): number; // 函数声明 number
function add8(...rest: string[]): string; // 函数声明 string
function add8(...rest: any[]) { 
    //定义函数 如果是字符串返回所有字符串拼接 数字类型返回所有数字之和
    let first = rest[0];
    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
    if (typeof first === 'string') {
        return rest.join('');
    }
}
console.log(add8(1, 2))
console.log(add8('a', 'b', 'c'))
