/*
//鸭子辩型法主要是认为具有鸭子叫声或者鸭子步伐的都称为鸭子
//主要是用于绕开多余的类型检验
//接口中的任意属性是为了方便类在实现接口的时候添加多余的属性，方便使用
//而绕开多余的类型检验则完全是一种投机取巧的方式
//例如：
interface LabeledValue {
    label: string;
}
function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}
//这里定义的对象中包含有label属性，所以在作为函数实参的时候，根据兼容性默认是LabelValue类型
//是鸭子辩型法中的一种绕开机制
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj); // OK
// printLabel({ size: 10, label: "Size 10 Object" });//错误，类型不匹配

//绕开额外属性检查方式包括三种方式
//方式一：上述的鸭子辩型法

//方式二：类型断言
interface Props {
    name: string;
    age: number;
    money?: number;
}

let p: Props = {
    name: "兔神",
    age: 25,
    money: -100000,
    girl: false
} as Props; // OK，强行将不完全满足接口的类，类型断言为接口

function printProps(labeledObj: Props) {
    console.log(labeledObj.name);
}

printProps(p);
//方式三：索引签名
在接口定义一个任意属性

*/
