window.addEventListener("load", function () {
  // 创建对象的方式 新建一个正则表达式
  var reg0 = new RegExp(/123/);
  // 字面量创建正则表达式
  var reg1 = /123/;
  console.log(reg0.test(123)); //true
  console.log(reg0.test("123")); //true
  console.log(reg1.test(1234)); //true
  console.log(reg1.test("1234")); //true

  console.log("================");
  var reg2 = /^abc/; //以 abc 开头
  console.log(reg2.test("0abc")); //false
  console.log(reg2.test("abcd")); //true

  console.log("================");
  var reg3 = /^abc$/; //只含字符 abc
  console.log(reg3.test("abc")); //true
  console.log(reg3.test("abcd")); //false
  console.log(reg3.test("abc==abc")); //false 前后得是同一个abc才行

  console.log("================");
  var reg4 = /[ab]/; //内含 a 或 b
  console.log(reg4.test("axxxx")); //true
  console.log(reg4.test("bxxxx")); //true
  console.log(reg4.test("ccccc")); //false

  console.log("================");
  var reg5 = /^[ab]$/; //只含单个字符 a 或 b
  console.log(reg5.test("ax")); //false
  console.log(reg5.test("b")); //true
  console.log(reg5.test("ab")); //false

  console.log("================");
  var reg6 = /^[^a]$/; //单个字符不为 a
  console.log(reg6.test("a")); //false
  console.log(reg6.test("b")); //true
  console.log(reg6.test("xx")); //false

  var regtext = /^[a-zA-z0-9_-]{6,16}$/; //用户名的格式
  var input = document.querySelector("input");
  var span = document.querySelector("span");
  input.addEventListener("blur", function () {
    if (regtext.test(input.value)) {
      span.className = "right";
      span.innerHTML = "输入正确";
    } else {
      span.className = "wrong";
      span.innerHTML = "输入错误";
    }
  });

  // ==============================
  var textarea = document.querySelector("textarea");
  var div = document.querySelector(".box");
  var btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    div.innerHTML = textarea.value.replace(/激情/g, "**");
  });
});
