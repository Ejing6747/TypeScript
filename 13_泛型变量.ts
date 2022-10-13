// 泛型用于解决类、接口、方法的复用性，以及对不特定数据类型的支持
/*
    //泛型类
class Myclass<T>{
    public list: T[] = [];
    add(value: T): void {
        this.list.push(value);
    }
    main(): T {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}

var m1 = new Myclass<number>();
m1.add(1);
m1.add(2);
alert(m1.main());

var m2 = new Myclass<string>();
m2.add("a");
m2.add("b");
alert(m2.main());


//泛型函数

function MyFun<T>(value1: T, value2: T): T {
    return value1;
}

var sum = MyFun(1, 2);
var str = MyFun("hello", "world");
var bool = MyFun(true, false);

console.log(sum, str, bool);



//泛型接口
interface Config {
    //函数类型的接口
    <T>(value: T): T;
}

var getDate: Config = function <T>(value: T): T {
    return value;
}
getDate("hello");

*/