var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类用class关键字来声明
// constructor 见5
// 用extends 来继承父类
var person = /** @class */ (function () {
    // 5.constructor方法是Class类的默认方法，通过new命令，创建一个新的实例对象时，会自动调用此方法。
    // 一个类必须有constructor()方法，如果创建类的时候，没有显示的定义该方法，一个空的 constructor()方法会被默认添加。
    // constructor()方法默认返回类的实例对象 即this
    function person(name) {
        var _this = this;
        this.myFun2 = function () {
            console.log('myFun');
        };
        // 1.private 私有的实例属性/方法 不可在外部使用
        this.x = 'xxx';
        // 2.readonly：只读属性,不可修改
        this.readonlyData = new Date();
        this.name = name;
        this.myFun1 = function () {
            console.log(_this.x);
        };
    }
    person.staticFun = function () {
        console.log('staticFun');
    };
    // 3.static：类属性、静态属性/方法 通过类来访问(不用new实例化)
    person.staticData = '类属性/静态属性';
    // 4.static readonly 静态只读属性 static在前readonly 等于2,3相加
    person.text = '静态只读';
    return person;
}());
console.log('类属性/静态属性 =>', person.staticData); // '类属性/静态属性'
var ycg = new person('ycg');
console.log(ycg);
// 继承
// 1.用extends来继承父类
// 2.在constructor中调用super来给父类传递参数
var dongwu = /** @class */ (function () {
    function dongwu(age) {
        this.age = age;
    }
    return dongwu;
}());
var person1 = /** @class */ (function (_super) {
    __extends(person1, _super);
    function person1(age, name) {
        var _this = _super.call(this, age) // 2
         || this;
        _this.name = name;
        return _this;
    }
    return person1;
}(dongwu));
var ycg1 = new person1(18, 'ycg');
console.log('继承class =>', ycg1);
