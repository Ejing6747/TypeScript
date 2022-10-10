/*
//TS实现继承，extends，super
class Person {
    // name: string;//属性 前面省略了public关键词
    protected name: string;//protected修饰的属性 子类可以使用
    // private name: string;//private修饰的属性，子类不能使用,private可以配置set和get修改属性
    constructor(n: string) {
        this.name = n;
    }
    run(): void {
        alert(this.name + '在运动');
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }
}

let p = new Person('王五');
p.run();
console.log(p.getName());
p.setName('老六');
console.log(p.getName());
// console.log(p.name);//保护类型在类外不能直接使用

//情况一：继承时需要写constructor,写与父类一样的形参。
class Web extends Person {
    age: number;
    constructor(name: string, age: number) {
        super(name);
        this.age = age;
    }
    work(): void {
        alert(`${this.name}在工作`);
    }
    run(): void {
        alert(`${this.name}在跑步`);
    }
    getAge(): number {
        return this.age;
    }
}

let w = new Web('李四', 20);
w.run();//子类与父类的方法一样时，优先使用子类中的方法
// w.work();//子类可以拥有自己的方法
const WebAge = w.getAge();
console.log(WebAge);

//public protected private,不写默认public
*/