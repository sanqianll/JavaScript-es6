window.addEventListener("load", function () {
  let num = 20;
  if (true) {
    let num = 999; //只要块级作用域中出现同名的外部变量，暂时性死区
    console.log(num);
  }

  let [a, b, c, d] = [1, 2, 3]; //解构赋值
  console.log(a, b, c, d);

  // 对象解构
  let xjl = {
    uname: "徐嘉乐",
    age: 21,
  };
  let { uname, age } = xjl;
  console.log(uname, age);

  // 通过第一个参数进行检索，把值传递给第二个参数
  let { uname: aaa, age: bbb } = xjl;
  console.log(aaa, bbb);

  // ( 形参 ) => { 函数体 };    箭头函数
  let sumab = (a, b) => {
    return a + b;
  };
  console.log(sumab(3, 4));

  // 剩余参数
  let supersum = (...items) => {
    let total = 0;
    items.forEach((items) => {
      total += items;
    });
    return total;
  };
  console.log(supersum(1, 2, 3, 4, 5));

  let arr = ["first", "second", "third", "forth"];
  console.log(...arr); // 相当于 "first", "second", "third", "forth"

  let [aa, ...bb] = arr;
  console.log(aa); //first
  console.log(...bb); //second third forth

  // 利用 扩展运算符 合并数组
  let arr1 = [1, 2, 3];
  let arr2 = [7, 8, 9];
  let arr3 = [...arr1, ...arr2];
  console.log(arr3); //[1, 2, 3, 7, 8, 9]
  // 或者是
  arr1.push(...arr2);
  console.log(arr1); //[1, 2, 3, 7, 8, 9]
  // 利用扩展运算符 将 伪数组去掉外衣，加上数组的外衣 可变为数组

  // 模板字符串
  let str = "这个是一个普通的字符串";
  let htmlstr = `现在这个是一个模板字符串
  ${str}
  可以随便换行哦                                   还可以写这里呢

  这 就 是 模 板 字 符 串
  `;
  console.log(htmlstr);
  // repeat 将字符串重复多次
  console.log("ha ".repeat(3));

  // Set 数据结构 类似于数组，但是数组里面 对象都是唯一的
  const s1 = new Set(["a", "b", "c", "c"]);
  s1.add("y").add("z");
  s1.delete("a");
  console.log(s1.has("b")); //true
  console.log(s1); //{"a", "b", "c"}
  s1.clear();
  const s2 = [...s1]; //脱衣服，穿衣服，将对象变为数组
  console.log(s2);
});
