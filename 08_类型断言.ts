//类型断言有两种方法<>和as
//由于<>可能和react冲突，所以建议使用as
/*
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
let strLength1: number = (someValue as string).length;

console.log(strLength);
console.log(strLength1);

//非空断言，可以去除类型中的null和undefined类型
type NumGenerator = () => number;

function myFunc(numGenerator: NumGenerator | undefined) {
    // Object is possibly 'undefined'.(2532)
    // Cannot invoke an object which is possibly 'undefined'.(2722)
    // const num1 = numGenerator(); // Error
    const num2 = numGenerator!(); //OK

}

//确定赋值断言
let x!: number;

function initialize() {
    x = 10;
}
initialize();
// Variable 'x' is used before being assigned.(2454)
console.log(2 * x); // Error
*/


