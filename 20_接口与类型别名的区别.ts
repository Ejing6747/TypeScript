/*
//通常情况下接口与类型别名的区别不大
//区别一：语法不同---------------------------------------------------------
//interface
interface Point {
    x: number;
    y: number;
  }
  
  interface SetPoint {
    (x: number, y: number): void;
  }
//Type alias
type Point = {
    x: number;
    y: number;
  };
  
type SetPoint = (x: number, y: number) => void;
  
//区别二：类型别名可以用于其他类型，如基本类型，联合类型，元组等----------------------------------------------
 // primitive
type Name = string;

// object
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple
type Data = [number, string];

// dom
let div = document.createElement('div');
type B = typeof div;

//区别三：接口可以定义多次，但是类型别名不可以---------------------------------------------------------------
//与类型别名不同，接口可以定义多次，会被自动合并为单个接口
interface Point { x: number; }
interface Point { y: number; }
const point: Point = { x: 1, y: 2 };

//区别四：两者的扩展方式不同
//interface的扩展采用extends的方式实现，类型别名的扩展采用交叉类型&符号实现
//但是接口可以扩展类型别名，类型别名也可以扩展接口

//接口扩展接口
interface PointX {
    x: number
}

interface Point extends PointX {
    y: number
}

//类型别名扩展类型别名

type PointX = {
    x: number
}

type Point = PointX & {
    y: number
}

//接口扩展类型别名
interface PointX{
  x:number
}
interface Point extends PointX{
  y:number;
}

//类型别名扩展接口
interface PointX{
  x:number
}
type Point = PointX & {
  y:nmber;
}
*/