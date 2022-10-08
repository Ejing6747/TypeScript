
//变量a被指定为数字类型number--------------------------------------------
let a: number;
a = 100;
console.log(a);

//字符串类型------------------------------------------------------------------------------------
let str: string;
str = "hello";

//布尔类型------------------------------------------------------------------------------------
let flag: boolean = true;

//数组类型------------------------------------------------------------------------------------
//方法一：
let arr1: number[] = [1, 2, 3, 34];
let arr2: string[] = ["welcome", "come"];
//方法二：
let arr3: Array<string> = ["to", "Beijing"];
let arr4: Array<number> = [5, 56, 7, 78];
//方法三
let arr6: Array<any> = ["Beijing", 666, true];

//元组类型(tuple) 属于数组的一种------------------------------------------
let arr5: [String, Number, Boolean] = ["ts", 666, true];

console.log(arr1, arr2, arr3, arr4, arr5, arr6);

//枚举类型(enum),枚举类型不赋值则默认为索引值.------------------------------------------
//如果前一个元素赋值，后面的元素的索引以上一个为准
enum Gender { male, female }
let sex: Gender = Gender.female;
console.log(sex);//1

//任意类型(any),以最后一次赋值为准------------------------------------------
let num: any = 123;
num = 'str';
num = ["welcome", 666, true];
console.log(num);
//any的应用
let oBox: any = document.getElementById('box');
oBox.style.width = '200px';
oBox.style.color = 'green';

//null 和 undefined  其他(never类型) 数据类型的子类型
//定义未赋值------------------------------------------
// let b: number;
// console.log(b);//错误

let num1: undefined;
console.log(num1);//输出undefined,正确

let num2: number | undefined;
console.log(num2);//输出undefined

// let num3: null;
// console.log(num3);//错误

let num4: number | undefined | null;
num4 = null;
console.log(num4);//输出null

//void类型：表示方法没有返回类型------------------------------------------
function run(): void {
    console.log('run');
};
run();

//never类型：是其他类型(b包括null和undefined)的子类型，
//表示绝不可能出现的类型---------------------------------------------------
let c: never;
c = (() => {
    throw new Error('一个小误会');
})()




