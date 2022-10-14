
//在缺少类型注解的情况下，变量的类型会根据字面量的父类型进行确定
/*
//字符串字面量类型
type Direction = 'up' | 'down';

function move(dir: Direction) {
    // ...
}
move('up'); // ok
move('right'); // ts(2345) Argument of type '"right"' is not assignable to parameter of type 'Direction'


//字面量类型拓宽
let str = 'this is string'; // 类型是 string
let strFun = (str = 'this is string') => str; // 类型是 (str?: string) => string;
const specifiedStr: "this is string" = 'this is string'; // 类型是 'this is string'
let str2 = specifiedStr; // 类型是 'string'
console.log(typeof (str2));
let strFun2 = (str = specifiedStr) => str; // 类型是 (str?: string) => string;


let x = null; // 类型拓宽成 any
let y = undefined; // 类型拓宽成 any

// -----分界线------- 
const z = null; // 类型是 null
//  -----分界线------- 
let anyFun = (param = null) => param; // 形参类型是 null
let z2 = z; // 类型是 null
let x2 = x; // 类型是 null
let y2 = y; // 类型是 undefined

x = "123";
x = 1234;
console.log(x);

interface Vector3 {
    x: number;
    y: number;
    z: number;
}

function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
    return vector[axis];
}
//将const类型转换成let类型就会出错，因为X的类型会被拓宽成字符串类型
//而字符串类型不复合axis被声明时的类型
const x = "x"; // type is "x" 
let vec = { x: 10, y: 20, z: 30 };
getComponent(vec, x); // OK


const obj: { x: number | string | boolean } = {
    x: 1,
};

obj.x = 5; // OK 



// Type '"6"' is not assignable to type 'number'.
// obj.x = '6'; // Error

// Property 'y' does not exist on type '{ x: number; }'.
// obj.y = 8; // Error

// Property 'name' does not exist on type '{ x: number; }'.
// obj.name = 'semlinker'; // Error

*/