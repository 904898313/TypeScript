// 类用class关键字来声明
// constructor 见5
class person {

  // 0.public 公共的实例属性/方法 不写默认为public 需要new实例化后访问,最常用的
  name: string;
  myFun1: object;
  myFun2: object = ():void => {
    console.log('myFun')
  }

  // 1.private 私有的实例属性/方法 不可在外部使用
  private x:string = 'xxx';

  // 2.readonly：只读属性,不可修改
  readonly readonlyData:Date = new Date();

  // 3.static：类属性、静态属性/方法 通过类来访问(不用new实例化)
  static staticData:string = '类属性/静态属性';
  static staticFun() {
    console.log('staticFun')
  }
  // 4.static readonly 静态只读属性 static在前readonly 等于2,3相加
  static readonly text:string = '静态只读';

  // 5.constructor方法是Class类的默认方法，通过new命令，创建一个新的实例对象时，会自动调用此方法。
  // 一个类必须有constructor()方法，如果创建类的时候，没有显示的定义该方法，一个空的 constructor()方法会被默认添加。
  // constructor()方法默认返回类的实例对象 即this
  constructor(name:string) {  // 构造器,再类实例化时自动执行,
    this.name = name;
    this.myFun1 = () => {
      console.log(this.x)
    }
  }
}

console.log('类属性/静态属性 =>', person.staticData) // '类属性/静态属性'
let ycg = new person('ycg');
console.log(ycg)

// 继承
// 1.用extends来继承父类
// 2.在constructor中调用super来给父类传递参数
class dongwu {
  age:number;
  constructor(age: number) {
    this.age = age;
  }
}
class person1 extends dongwu { // 1
  name:string;
  constructor(age:number, name:string) {
    super(age) // 2
    this.name = name;
  }
}
const ycg1 = new person1(18, 'ycg');
console.log('继承class =>', ycg1)