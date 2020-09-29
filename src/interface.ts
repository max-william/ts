interface List {
    readonly id: number; //readonly 只读属性
    name: string;
    // [x: string]: any; //字符串索引签名
    age?: number; //？可选属性
}
interface Result {
    data: List[]
}
function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name)
        if (value.age) {
            console.log(value.age)
        }
        // value.id++
    })
}
let result = {
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B', age: 10}
    ]
}
render(result)

interface StringArray {
    [index: number]: string // 数字索引
}
let chars: StringArray = ['a', 'b']

interface Names {
    [x: string]: any; // 字符串索引
    // y: number;
    [z: number]: number;
}

// let add: (x: number, y: number) => number
interface Add {
    (x: number, y: number): number
}
// type Add = (x: number, y: number) => number
let add: Add = (a: number, b: number) => a + b

// 混合类型
interface Lib {
    (): void;
    version: string;
    doSomething(): void; //添加的方法
}

function getLib() {
    let lib = (() => {}) as Lib
    lib.version = '1.0.0'
    lib.doSomething = () => {}
    return lib;
}
let lib1 = getLib()
lib1()
// let lib2 = getLib()
// lib2.doSomething()
