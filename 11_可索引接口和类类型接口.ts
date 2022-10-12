/*
//可索引数组接口
interface UserArr {
    [index: number]: string;
}
var arr: UserArr = ['aaa', 'bbb'];
console.log(arr[0]);

//可索引对象接口
interface UserObj {
    [index: string]: string;
}
var obj: UserObj = { name: "张三", age: "18" };
console.log(obj);


//类类型接口,implements是实现接口
interface Animal {
    name: string;//这里表示必须有一个name属性，且属性的键值必须是string类型
    eat(food: string): void;
}

class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    };
    eat(food: string) {
        console.log(this.name + "吃" + food);
    }
}

const dog = new Dog("旺财");
dog.eat("骨头");
*/