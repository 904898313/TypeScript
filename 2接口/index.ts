// interface只定义数据的结构，为一种数据类型，不考虑实际数值
// 1.只读属性、可选属性
interface person {
  readonly ID: number,
  readonly birthday: Date,
  age: number,
  name: string,
  savor?: string,
  sayHello(): void
}
const obj: person = { ID:1, birthday: new Date(), name: 'ycg', age: 1, savor: 'pinpang', sayHello: ()=>{} }
// const obj: person = { ID:1, birthday: new Date(), name: 'ycg' } // Error: 缺少 age 属性
// const obj: person = { ID:1, birthday: new Date(), name: 'ycg', age: 1, savor: 'pinpang', xxx: 'xx' } // Error: xxx 未在person中声明
// obj.ID = 1; Error: ID is readonly
// obj.birthday = 1; Error: birthday is readonly
console.log(obj)

// 2.额外的属性
// 在 1.例子 中只能声明 必须的ID、birthday、age、name四个属性，和一个 可选的savor属性。
// 如果多了未知的属性，都会报错
// 那在定义接口时不能确定有多少个属性,后期如何扩展
// [propName string]: any
interface person1 {
  readonly ID: number,
  [propName: string]: any
}
const obj1: person1 = { ID: 1, a: 1, b: 'a', c: false }
console.log(obj1)
// 添加[propName string]: any, 代表可以有任意个任意类型的属性
// 注:额外的属性的类型应为现有属性所包含的类型或者any类型,比如现有属性中有nunber和string类型，那么额外属性的类型必须为string，number，any的其中一个。
// 如果额外的属性的类型不是any类型,比如为number类型( [propName: string]: number ),那么所有的额外属性类型都应该为number类型，否则报错,列子如下：
interface person2 {
  readonly ID: number,
  [propName: string]: number
}
// const obj2: person2 = { ID: 1, a: 1, b: 'a', c: false } // Error：b、c不为number类型
const obj2: person2 = { ID: 1, a: 1, b: 2, c: 3 } //  success 

// 3.函数的接口类型
// 可定义函数的参数类型和返回类型的接口
interface funInter {
  (params1:string, params2:number): boolean
}
// funInter函数接口表示，一个函数应该有两个参数，并有一个boolean的返回值,使用列子:
const fun:funInter = (params1:'str', params2:1) => {
  return params2 > 1
}
// 函数的形参名不需要和接口完全一致，但顺序需一致
const fun1:funInter = (a:'str', b:1) => {
  return b > 1
}

// 4.可索引的类型

// 5.接口允许重复声明
// const obj3:myInterface = { age:1 } //Error 缺少name
const obj3:myInterface = { age:1, name:'ycg' } //Success
interface myInterface {
  age: number
}
interface myInterface {
  name: string
}
// 结果等于两个interface相加,同时拥有age和name
// 同时也证明interface有类型声明提升的效果(在声明之前使用,任然遵守之后的声明规则)