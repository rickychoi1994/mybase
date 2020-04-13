# 基本概念


## 数据类型

- 6种简单数据类型(基本数据类型) - `Undeined`、`Null`、`Number`、`String`、`Boolean`、`Symbol`
- 1种复杂数据类型 - `Object` (本质上是有一组无序的名值对组成的)


### Undefined

对未初始化和未声明的变量执行`typeof`都会返回`undefined`


### Null

用`typeof`检测`null`值时会返回`object`，因为`null`值表示一个空对象的指针。

如果定义的变量准备在将来用于保存对象，最好将该变量初始化为`null`而不是其他值。这样一来，只要直接检查`null`值就可以知道相应的变量是否已经保存了一个对象的引用。

实际上，`undefined`值是派生自`null`值的，因此对它们的相等性测试返回的是`true`。

```javascript
null == undefined // true
```


### Number


#### 浮点数值

对于极大或极小的数值，可以用`e`表示法表示的浮点数值表示。

```javascript
3.125e7 // 31250000  3.125 * 10^7
```

浮点数值的最高精度是17位小数，但是在进行算术计算时会产生舍入误差的问题。这是使用基于IEEE754数值的浮点计算的通病。

```javascript
0.1 + 0.2 // 0.30000000000000004
```

#### 数值范围

由于内存的限制，ECMAScript能表示的最小数值保存在`Number.MIN_VALUE`中，在大多数浏览器中，这个值是`5e-324`；最大数值保存在`Number.MAX_VALUE`中，在大多数浏览器中，这个值是`1.7976931348623157e+308`。如果某次计算超出了JS的数值范围，这个数值会被自动转换成特殊的`Infinity`值。`Infinity`也有正负之分，而且这个值无法继续参与下一次的计算。如果想确定一个数值是不是有穷的，可以使用`isFinite()`函数。

#### NaN

NaN，即非数值(Not a Number)是一个特殊的数值。用于表示一个本来要返回数值的操作数未返回数值的情况(这样就不会抛出错误了)。

在其他编程语言中，任何数值除以非数值都会导致错误，但在EMCAscript中，任何数值除以非数值都会返回NaN，因此不会影响其他代码的执行。

特点:
1. 任何涉及NaN的操作都会返回NaN
2. NaN与任何值都不相等，包括自身

可以使用`isNaN()`来检测一个参数是否"不是数值"。这个函数在接收一个值之后，会尝试将这个值转换为数值。

`isNaN()`也适用于对象。在基于对象调用时，会首先调用对象的`valueOf()`方法，然后确定该方法返回的值是否可以转换为数值。如果不能，则基于这个返回值再调用`toString()`方法，在测试返回值。

#### 数值转换

- `Number()`可以用于任何数据类型
- `parseInt()`、`parseFloat()` 专门用于把字符串转换成数值

Number()转换`null`或`空字符串`返回`0`，转换`undefined`返回`NaN`

parseInt()在转换字符串时，更多的是看其是否符合数值模式。它会忽略字符串前面的空格，直至找到第一个非空格字符。如果第一个字符不是数字字符或者负号，就会返回`NaN`，也就是说，它转换`空字符串`时返回的是`NaN`。还可以对这个函数提供第二个参数: 转换时使用的基数(多少进制)。parseFloat()只解析十进制。


### String

字符串是不可变的。要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量。

```javascript
var lang = 'Java'
lang = lang + 'Script'
```

#### 转换为字符串

`String()`、`toString()`

在调用数值的`toString()`方法时，可以传一个参数: 输出数值的基数

转换`null`返回`"null"`，转换`undefined`返回`"undefined"`


### Object

ECMAScript中的对象其实就是一组数据和功能的集合。

Object类型是所有它的实例的基础。换句话说，Object类型所具有的任何属性和方法也同样存在与更具体的对象中。

| 属性/方法             | 作用                                 |
| --------------------- | ------------------------------------------------------------ |
| constructor           | 保存着用于创建当前对象的函数                                 |
| hasOwnProperty        | 用于检查给定的属性在当前对象实例中(而不是在实例的原型中)是否存在 |
| isPrototypeOf         | 用于检查传入的对象是否是当前对象的原型                       |
| propertyIsEnumberable | 用于检查给定的属性是否能够使用for-in语句来枚举               |
| toLocaleString()      | 返回对象的字符串表示，该字符串与执行环境的地区对应           |
| toString()            | 返回对象的字符串表示                                         |
| valueOf()             | 返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值相同 |

由于在ECMAScript中Object是所有对象的基础，因此所有对象都具有这些基本的属性和方法。

:::warning 注意
从技术角度讲，ECMA-262中对象的行为不一定适用于JS中的其他对象。浏览器环境中的对象，比如BOM和DOM中的对象，都属于宿主对象，因为它们是由宿主实现提供和定义的。ECMA-262不负责定义宿主对象，因此宿主对象可能会也可能不会继承Object。
:::


## 函数

函数对任何语言来说都是一个核心的概念。

### 理解参数

EMCAscript中的参数在内部是一个数组来表示的。函数接收到的始终是这个数组，而不关心数组中包含那些参数。实际上，在函数体内可以通过`arguments`对象来访问这个参数数组。`arguments`是类数组对象，可以使用`length`属性来确定传递进来多少个参数。

**EMCAscript中的所有参数传递的都是值，不可能通过引用传递参数**

### 没有重载

ECMAScript函数不能像传统意义上的那样实现重载。而在其他语言中，可以为一个函数编写两个定义，只要这两个定义的签名(接受的参数的类型和属性)不同即可。

ECMAScript函数没有签名，因为参数是有包含零个或多个值的数组来表示的，所以**真正的重载**是不可能做到的。但是通过检查传入函数中的参数的类型和数量并作出不同的反应，可以**模仿**方法的重载。

<hr>

以下内容转载于 [浅谈JavaScript函数重载](https://www.cnblogs.com/yugege/p/5539020.html)

在JQuery之父John Resig写的《secrets of the JavaScript ninja》有一个绝佳巧妙的方法！那种方法充分的利用了闭包的特性！

重载的实现：

```javascript
// 在介绍这个方法之前，我们先来看看外国人名字组成哈，比如，John Resig，John是first-name，Resig是last-name，就相当于我们的姓名由姓和名组成一样。
// 我们现在有这样的一个需求，有一个people对象，里面存着一些人名，如下
var people = {
  values: ["Dean Edwards", "Sam Stephenson", "Alex Russell", "Dean Tom"]
};

// 我们希望people对象拥有一个find方法，
// 当不传任何参数时，就会把people.values里面的所有元素返回来；
// 当传一个参数时,就把first-name跟这个参数匹配的元素返回来；
// 当传两个参数时，则把first-name和last-name都匹配的才返回来。
// 因为find方法是根据参数的个数不同而执行不同的操作的，所以，我们希望有一个addMethod方法，能够如下的为people添加find的重载：
addMethod(people, "find", function() {}); /*不传参*/
addMethod(people, "find", function(a) {}); /*传一个*/
addMethod(people, "find", function(a, b) {}); /*传两个*/

// 这时候问题来了，这个全局的addMethod方法该怎么实现呢？John Resig的实现方法如下，代码不长，但是非常的巧妙：
function addMethod(object, name, fn) {
　　var old = object[name]; //把前一次添加的方法存在一个临时变量old里面
　　object[name] = function() { // 重写了object[name]的方法
　　　　// 如果调用object[name]方法时，传入的参数个数跟预期的一致，则直接调用
　　　　if(fn.length === arguments.length) {
　　　　　　return fn.apply(this, arguments);
　　　　// 否则，判断old是否是函数，如果是，就调用old
　　　　} else if(typeof old === "function") {
　　　　　　return old.apply(this, arguments);
　　　　}
　　}
}

// 全部代码如下:
//addMethod
function addMethod(object, name, fn) {
　　var old = object[name];
　　object[name] = function() {
　　　　if(fn.length === arguments.length) {
　　　　　　return fn.apply(this, arguments);
　　　　} else if(typeof old === "function") {
　　　　　　return old.apply(this, arguments);
　　　　}
　　}
}


var people = {
　　values: ["Dean Edwards", "Alex Russell", "Dean Tom"]
};

/* 下面开始通过addMethod来实现对people.find方法的重载 */

// 不传参数时，返回peopld.values里面的所有元素
addMethod(people, "find", function() {
　　return this.values;
});

// 传一个参数时，按first-name的匹配进行返回
addMethod(people, "find", function(firstName) {
　　var ret = [];
　　for(var i = 0; i < this.values.length; i++) {
　　　　if(this.values[i].indexOf(firstName) === 0) {
　　　　　　ret.push(this.values[i]);
　　　　}
　　}
　　return ret;
});

// 传两个参数时，返回first-name和last-name都匹配的元素
addMethod(people, "find", function(firstName, lastName) {
　　var ret = [];
　　for(var i = 0; i < this.values.length; i++) {
　　　　if(this.values[i] === (firstName + " " + lastName)) {
　　　　　　ret.push(this.values[i]);
　　　　}
　　}
　　return ret;
});

// 测试：
console.log(people.find()); //["Dean Edwards", "Alex Russell", "Dean Tom"]
console.log(people.find("Dean")); //["Dean Edwards", "Dean Tom"]
console.log(people.find("Dean Edwards")); //["Dean Edwards"]
```

还有一篇文章: [JavaScript实现函数重载](https://segmentfault.com/a/1190000016193719)
