//类可以继承类的同时实现接口：extends:继承   implements:实现接口  接口之间也可以继承
/*

interface Animal {
    eat(food: string): void;
}

//Person继承Animal接口，获得eat方法
interface Person extends Animal {
    //Person接口又拥有自己的方法
    work(job: string): void;
}

//创建一个程序员(programmer)类
class Programmer {
    name: string;
    constructor(name: string) {
        this.name = name;
    };
    codeing(code: string): void {
        console.log(this.name + "的项目是" + code);
    }
}

//Chinese类继承Programmer类，并需要实现Person接口
class Chinese extends Programmer implements Person {
    hair: string;
    constructor(name: string, hair: string) {
        super(name);
        this.hair = hair;
    }
    eat(food: string): void {
        console.log(this.name + "吃" + food);
    }
    work(job: string): void {
        console.log(this.name + "的工作是" + job + "还" + this.hair);
    }
}





const people = new Chinese("张三", "没头发");
people.eat("中餐");
people.work("程序员");
people.codeing("Vue")
*/