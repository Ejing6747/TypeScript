//因为接口中的类型和形状都是固定的，对于需要给实现了接口的对象添加新的属性就不是很方便
//所以接口引入了任意属性的语法，可以在实例化对象的时候添加任意的属性和类型
//例如：
// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: any;//这里的[表示属性名]，其类型是any类型
// }

// let tom: Person = {
//     name: 'Tom',
//     gender: 'male'//这里的gender就是根据任意属性添加的
// };

//但是，如果任意属性的类型被指定了类型，其所在的接口中的确定属性和不确实属性都必须是任意属性的类型
// 例如：
// interface Person1 {
//     name: string;
//     age?: number;//可选属性的类型默认是指定的类型和undefined
//     [propName: string]: string | undefined;
// };

// let tom1: Person1 = {
//     name: 'Tom',
//     age: 25,//报错，因为age不是string类型。
//     gender: 'male'
// };

//如果接口中的任意属性的类型不使用any.可以采用联合类型的方式解决
// 例如：
// interface Person1 {
//     name: string;
//     age?: number;//可选属性的类型默认是指定的类型和undefined
//     [propName: string]: string | undefined | number;
// };

// let tom1: Person1 = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };