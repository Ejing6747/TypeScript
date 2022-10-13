//功能：定义一个操作数据的库，支持Mysql Mssql MongoDb
//要求：Mysql和Mssql的功能一样，都有add update delete get方法
//规范：执行统一的规范，且代码复用

//思路：规范约束采用接口(interface定义)，代码复用采用泛型

//定义一个类接口,设定规范
interface DBI<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}

//实现接口，创建数据库Mysql和Mssql
class MysqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        throw new Error("Method not implemented");
    }
    update(info: T, id: number): boolean {
        console.log(info);
        return true;
        throw new Error("Method not implemented");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented");
    }
}

class MssqlDb<T> implements DBI<T>{
    add(info: T): boolean {
        console.log(info);
        return true;
        throw new Error("Method not implemented");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented");
    }
}

//定义数据泛型
class User {
    username: string | undefined;
    password: number | undefined;
    constructor(u: string | undefined, p: number | undefined) {
        this.username = u;
        this.password = p;
    }
}

class School {
    schoolname: string | undefined;
    location: string | undefined;
    constructor(s: string | undefined, l: string | undefined) {
        this.schoolname = s;
        this.location = l;
    }
}

var u = new User("张三", 123456);
var s = new School("哔站", "家里蹲大学");

var oMssqlDB = new MssqlDb<User>();
var oMysqlDB = new MysqlDb<School>();

oMssqlDB.add(u);
oMysqlDB.update(s, 1);