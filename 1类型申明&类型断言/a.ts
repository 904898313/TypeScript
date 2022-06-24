// boolean
let bool: Boolean = false;
console.log('booleanValue is', bool)

// string
let str: String = 'string';
console.log('stringValue is',str)

// number
let num: Number = 1;
console.log('numberValue is', num);

// array[]
// 注:用|来标识多个数据类型
// 1.第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组，推荐这种先表示array 在表示其中数据类型
let arr1: Array<number | string> = [1,'x']
// 2.第二种方式是使用数组泛型，Array<元素类型>：
let arr2: (number|string|boolean)[] = [1,2,'x',false]
console.log('arrayValue is', arr1, 'and', arr2);

// 元组 tuple 
// 声明一个明确数量、类型、顺序的数组
let tupleArray1: [string, number] = ['a',1]
// let tupleArray2: [string, number] = [1, 'a'] error:不符合元组声明时的类型顺序排列
// let tupleArray3: [string, number] = ['a'] error:不符合元组声明时的数量
console.log('tupleArrayValue is', tupleArray1);

// 枚举 enum
// 为一组数据补充一个引用方式，默认编号从0开始，不需要let或者const声明, 当一个编号改变时 之后的所有enum枚举值都会顺延
enum color {red, green = 10, yellow};
console.log('typeof enum is', typeof(color)) //object 证enum为object类型
console.log('enumValue is', color, color[0])

// 任意类型 any
let value: any = false;
value = 1;
value = 'string';
console.log('anyValue is',value);
// 使用any时，要注意它的最终类型是否有改方法
console.log(value.split()); //['string']
// console.log(value.toFixed(2));  //error: value.toFixed is not a function. (string类型没有toFixed方法)
// 当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
let list: Array<any> = [1,'a',false]
console.log('anyArray is', list)

// void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;
console.log('voidValue is', unusable);

// Null 和 Undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。
let u: undefined = undefined;
let n: null = null;
console.log('UndefinedValue is', u);
console.log('nullValue is', n);
// null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
let one: number = 1;
one = undefined;
console.log('numberValue is', one);

// Never
// never类型表示的是那些永不存在的值的类型。
// 即使 any也不可以赋值给never。
function error(message: string): never {
  throw new Error(message);
}

// Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
// 1.以函数参数举例
function myfun( a: object ): void {
  
}
myfun({}) // success
myfun(color) // success enum也为object类型
// myfun(undefined) // error
// myfun(1) // error
// myfun(false) // error
// myfun('a') // error
// 2.以变量举例 [],{},function 都是object类型，都可正常赋值
let obj: object;
obj = function() {}
obj = [];
obj = {};
console.log('objectValue is', obj)

// 时间 date
let date: Date = new Date();
console.log('timeValue is', date)

// 类型断言
// 1.(<类型>变量)
let n1: number = 1.1111;
let fixedN1: string = (<number>n1).toFixed(2) //tofixed保留两位小数,并转为字符串
// 1.(变量 as 类型)
let n2: string = 'hello world';
let n2length: number = (n2 as string).length;