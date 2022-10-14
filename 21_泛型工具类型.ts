
//typeof 可以获取接口，类，函数的结构类型

function toArray(x: number): number[] {//返回数字型数组的两种写法:1.number[]
    return [x];
}
type Func = typeof toArray; // -> (x: number) => number[]

function toArray1(x: number): Array<number> {//返回数字型数组的两种写法:1.类型断言Array<number>
    return [x];
}
type Func1 = typeof toArray1; // -> (x: number) => number[]

//keyof
interface Person {
    name: string;
    age: number;
}

type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 
type K3 = keyof { [x: string]: Person };  // string | number
