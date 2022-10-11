//函数类型接口：主要是对方法传入的参数和返回值类型进行约束
//加密函数类型接口
//这个接口的意思是传入两个string类型的参数，分别叫key和value,返回值类型是string
/*
interface encrypt {
    (key: string, value: string): string;
}

var fangfa: encrypt = function (key: string, value: string) {
    return key + value;
}

alert(fangfa('admin', '123456'));
*/