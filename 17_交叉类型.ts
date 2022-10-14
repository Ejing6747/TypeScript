
/*
//交叉类型用在原始类型和字面量类型上并没有意义，因为不存在一个类型同时满足多个原始类型
// 例如
{
    type Useless = string & number;//Useless的类型就是never
}

//交叉内心的主要用途是实现多个接口类型（也就是接口取并集）
// 例如
type IntersectionType = { id: number; name: string; } & { age: number };
const mixed: IntersectionType = {
    id: 1,
    name: 'name',
    age: 18
}
//但是如果两个接口中存在同样的属性，但是属性的类型不一样
//在使用交叉类型的时候就会将属性的类型取交集
// 例如：上述第二个接口在存在name:number
//合并后name的类型就是：never

type IntersectionTypeConfict = { id: number; name: 2; }
    & { age: number; name: number; };

let mixedConflict: IntersectionTypeConfict = {
    id: 1,
    name: 2, // ok
    age: 2
};
// mixedConflict = {
//     id: 1,
//     name: 22, // '22' 类型不能赋给 '2' 类型
//     age: 2
// };
interface A {
    x: { d: true },
}
interface B {
    x: { e: string },
}
interface C {
    x: { f: number },
}
type ABC = A & B & C
let abc: ABC = {
    x: {
        d: true,
        e: '',
        f: 666
    }
}
  //成功，结果：｛d:true,e:",f:666｝
  */