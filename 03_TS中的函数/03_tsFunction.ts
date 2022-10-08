//函数返回值必须指定类型------------------------------------
//函数声明法
function run1(): string {
    console.log('run');
    return 'run';
}
//匿名函数法
var fun2 = function (): number {
    return 123;
}

run1();
fun2();

//函数定义形参须指定类型,且形参与实参必须一致-------------------
//函数式声明法
function getInfo(name: string, age: number): string {
    return `${name}---${age}`;
}
alert(getInfo('张三', 18));
//匿名函数法
var getInfo2 = function (name: string, age: number): string {
    return `${name}---${age}`;
}
alert(getInfo2('李四', 20));

//函数没有返回值
function getInfo3(): void {
    console.log('getInfo3');
}
getInfo3();

//ts可以配置可选参数，但是可选参数必须在参数的最后面--------------
function getInfo4(name: string, age?: number): string {
    if (age) {
        return `${name}---${age}`;
    } else {
        return `${name}`;
    }
}
alert(getInfo4('王五'));

//ts和es6可以配置默认参数--------------------------------------
function getInfo5(name: string = '赵六', age?: number): string {
    if (age) {
        return `${name}---${age}`;
    } else {
        return `${name}`;
    }
}
alert(getInfo5());

//元组解结构赋值-------------------------------------------------
let employee: [number, string] = [1, "Semlinker"];
let [id, username] = employee;
console.log(`id: ${id}`);
console.log(`username: ${username}`);

//元组类型的剩余元素---------------------------------------------
type RestTupleType = [number, ...string[]];
let restTuple: RestTupleType = [666, "Semlinker", "Kakuqo", "Lolo"];
console.log(restTuple[0]);
console.log(restTuple[1]);

//unknown-------------------------------------------------------
function getDogName() {
    let x: unknown;
    x = 'TypeScript';
    return x;
};
const dogName = getDogName();
// 直接使用
//    const upName = dogName.toLowerCase(); // Error
// typeof
if (typeof dogName === 'string') {
    const upName = dogName.toLowerCase(); // OK
    console.log(upName);
}

// 类型断言
const upName = (dogName as string).toLowerCase(); // OK
console.log(upName);

//Number,String,Boolean,Symbol原始类型的包装对象
let num: number = 10;
let Num: Number;
Num = num; // ok
// num = Num; // ts(2322)报错

//Object--------------------------------------------------
let upperCaseObject: Object;
let lowerCaseObject: object;
let ObjectLiteral: {};
upperCaseObject = 1; // ok
upperCaseObject = 'a'; // ok
upperCaseObject = true; // ok
// upperCaseObject = null; // ts(2322)
// upperCaseObject = undefined; // ts(2322)
upperCaseObject = {}; // ok
lowerCaseObject = {}; // ok

type isLowerCaseObjectExtendsUpperCaseObject = object extends Object ? true : false; // true
type isUpperCaseObjectExtendsLowerCaseObject = Object extends object ? true : false; // true
upperCaseObject = lowerCaseObject; // ok
lowerCaseObject = upperCaseObject; // ok
ObjectLiteral = upperCaseObject;
ObjectLiteral = lowerCaseObject;

//类型断言----------------------------------------------------------
//TS在解析时不知道数组中是否存在大于2的元素，所以默认greatThan2的值可能是number和undefined(赋值不存在则是undefined)
//所以在声明时直接写greatThan2为number是错误的
const arrayNumber: number[] = [1, 2, 3, 4];
// const greaterThan2: number = arrayNumber.find(num => num > 2); // 提示 ts(2322)

//如果你确定是数字类型，就使用类型断言
const greaterThan2: number = arrayNumber.find(num => num > 2) as number;





