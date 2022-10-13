/*
//定义了一个User类和一个数据库类
class User {
    username: string | undefined;
    password: string | undefined;
}

class MysqlDb {
    //使用数据库类中的方法时，采用User类做验证
    add(user: User): boolean {
        console.log(user);
        return true;
    }
}

var u = new User();
u.username = "张三";
u.password = "123456";

var Db = new MysqlDb();
Db.add(u);




//定义了一个ArticleCate类和一个数据库类
class ArticleCate {
    title: string | undefined;
    status: string | undefined;
    desc: string | undefined;
}

class MysqlDb1 {
    //使用数据库类中的方法时，采用User类做验证
    add(info: ArticleCate): boolean {
        console.log(info);
        return true;
    }
}

var a = new ArticleCate();
a.title = "学习";
a.status = "目不转睛";
a.desc = "TS";

var Db1 = new MysqlDb1();
Db1.add(a);
*/

/*
//采用泛型定义类，使该类作为参数

//一：定义类
class User {
    username: string | undefined;
    password: number | undefined;
}

class ArticleCate {
    title: string | undefined;
    status: string | undefined;
    desc: string | undefined;
    constructor(params: {
        t: string | undefined;
        s: string | undefined;
        d: string | undefined;
    }) {
        this.title = params.t;
        this.status = params.s;
        this.desc = params.d;
    }
}

class MysqlDb<T> {
    //使用数据库类中的方法时，采用User类做验证
    add(info: T): boolean {
        console.log(info);
        return true;
    };
    updated(info: T, id: number): boolean {
        console.log(info, id);
        return true;
    };
}

var u = new User();
u.username = "张三";
u.password = 123456;

// var a = new ArticleCate();
// a.title = "学习";
// a.status = "目不转睛";
// a.desc = "TS";


var Db = new MysqlDb<User>();
Db.add(u);
// Db.add(a);//错误：因为a类的类型不是User类的类型。
// var Db1 = new MysqlDb<ArticleCate>();
// Db1.add(a);


var A = new ArticleCate({ t: "吃饭", s: "睡觉", d: "打豆豆" });
var Db2 = new MysqlDb<ArticleCate>();
Db2.add(A);

Db2.updated(A, 1);
*/