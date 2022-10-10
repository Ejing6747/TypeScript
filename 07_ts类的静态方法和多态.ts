//一：ES5静态属性和静态方法------------------------------------------------
// function Person() {
//     this.run = function () {/*实例方法*/ }
// }
// Person.run = function () { /*静态方法*/ }
//Person.name='哈哈哈'; /*静态属性*/
// var p = new Person();
// p.run();//实例方法必须new对象调用

// Person.run();//静态方法就直接调用

//二：TS静态属性和静态方法--------------------------------------------------

/*
class Person {
    public name: string;
    public age: number = 20;
    public static sex: string = '男';
    constructor(n: string) {
        this.name = n;
    }
    run() {//实例方法
        alert(`${this.name}在跑步，年龄${this.age}`);
    }
    work() {
        alert(`${this.name}在学习`);
    }
    static print() {//静态方法不能使用类里面的属性,只能使用静态属性
        // alert(`${this.name}在绘画，他的年龄是${this.age}`);
        alert(`他的性别是${Person.sex}`);
    }
}
var p = new Person('张三');
p.run();//实例方法的调用，用实例对象调用
Person.print();//静态方法阿德调用，使用类调用
*/

// 三：多态，多态是继承的一种实现，父类定义方法，子类去实现,每个子类的实现不同-----
/*
class Animal {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    eat(): void {
        console.log('吃');
    }
}

class Dog extends Animal {
    constructor(DogName: string) {
        super(DogName);
    }
    eat(): void {
        alert(`${this.name}+啃骨头`);
    }
}

class Cat extends Animal {
    constructor(CatName: string) {
        super(CatName);
    }
    eat(): void {
        alert(`${this, name}+吃老鼠`)
    }
}


var wangcai = new Dog('旺财');
var mimi = new Cat('咪咪');
wangcai.eat();
mimi.eat();
*/

//四：abstract抽象方法，抽象类，抽象方法只能放在抽象类中--------------------------------
// 例如：必须要求Animal的子类有eat方法，就可以把Animal定义为抽象类
/*
abstract class Animal {

    name: string;
    constructor(n: string) {
        this.name = n;
    }
    abstract eat(): void;//抽象方法，子类必须复写
    //普通方法,子类可以继承不用复写
    run(): void {
        alert(`${this.name}在跑跑跳跳`);
    }
    //静态方法,子类可以继承，但是不能使用属性(静态属性除外)
    static sleep(): void {
        alert(`在${Dog.state}睡觉`);
    }
}

// var a = new Animal();//这是错误写法，不能实例抽象类
//但是可以采用子类继承并复写抽象方法的方法实现
class Dog extends Animal {
    public static state: string;
    constructor(n: string, state: string) {
        super(n);
        Dog.state = state;
    };
    eat(): void {
        alert(`${this.name}吃骨头`);
    }
}

var wangcai = new Dog('旺财', '香香的');
wangcai.eat();
wangcai.run();

Dog.sleep();
Animal.sleep();

*/