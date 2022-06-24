var obj = { ID: 1, birthday: new Date(), name: 'ycg', age: 1, savor: 'pinpang', sayHello: function () { } };
// const obj: person = { ID:1, birthday: new Date(), name: 'ycg' } // Error: 缺少 age 属性
// const obj: person = { ID:1, birthday: new Date(), name: 'ycg', age: 1, savor: 'pinpang', xxx: 'xx' } // Error: xxx 未在person中声明
// obj.ID = 1; Error: ID is readonly
// obj.birthday = 1; Error: birthday is readonly
console.log(obj);
var obj1 = { ID: 1, a: 1, b: 'a', c: false };
console.log(obj1);
// const obj2: person2 = { ID: 1, a: 1, b: 'a', c: false } // Error：b、c不为number类型
var obj2 = { ID: 1, a: 1, b: 2, c: 3 }; //  success 
// funInter函数接口表示，一个函数应该有两个参数，并有一个boolean的返回值,使用列子:
var fun = function (params1, params2) {
    return params2 > 1;
};
// 函数的形参名不需要和接口完全一致，但顺序需一致
var fun1 = function (a, b) {
    return b > 1;
};
// 4.可索引的类型
// 5.接口允许重复声明
// const obj3:myInterface = { age:1 } //Error 缺少name
var obj3 = { age: 1, name: 'ycg' }; //Success
// 结果等于两个interface相加,同时拥有age和name
// 同时也证明interface有类型声明提升的效果(在声明之前使用,任然遵守之后的声明规则)
