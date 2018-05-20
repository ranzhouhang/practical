## 类和继承

### 练习1
写一个Person类，要有name，age属性，要有一个introduce方法，
introduce方法返回一个字符串形如：

`My name is Tom. I am 21 years old.`

再写一个Student类继承Person类，除了name，age属性，还有要有clazz属性（表示班级，因为 class 是关键字）。也有一个introduce方法，
introduce方法返回一个字符串形如：

`My name is Tom. I am 21 years old. I am a Student. I am at Class 2.`

再写一个Worker类继承Person类，只有name，age属性。也有一个introduce方法，
introduce方法返回一个字符串形如：

`My name is Tom. I am 21 years old. I am a Worker. I have a job.`

所有这三个类的这段文字

`My name is Tom. I am 21 years old.`

应该调用Person的一个方法basicIntroduce来返回

### 练习2
用原型的方式写一个Person类，要有id，name，age属性，靠id来判断是否是同一个人。要有一个introduce方法， introduce方法返回一个字符串形如：

`My name is Tom. I am 21 years old.`

再写一个Student类继承Person类，除了id，name，age属性，还有要有class属性。也有一个introduce方法， introduce方法返回一个字符串形如：

`My name is Tom. I am 21 years old. I am a Student. I am at Class 2.`

但是Student的class属性不是一个数字，而是一个对象，写一个Class类，有number属性还有一个leader属性。但是leader属性不在构造器里。

Student构造的时候把Class的一个实例传给Student，参见测试用例。 Class有一个assignLeader方法，接收一个Student实例。意为将一名学生设置为该Class的班长。 如果Class的Leader是Tom，那么Tom调用introduce的方法就要返回：

`My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.`

如果没有就继续返回旧的字符串

再写一个Teacher类继承Person类，除了id，name，age属性，也有classes属性。也有一个introduce方法， introduce方法返回一个字符串形如：

`My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2,3.`

如果class为空，就会返回

`My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.`

所有Person的子类的这段文字

`My name is Tom. I am 21 years old.`

都应该调用Person的introduce方法来获得

### 练习3

在 **练习2** 的基础上变动+增加以下需求：

Class还有一个appendMember方法，接受一个Student实例。意味将一名学生加入该班级。

如果学生加入该班级, 那么在调用assignLeader方法的时候, assign成功，会打印一句话：

`Assign team leader successfully.`

如果学生没有加入该班级，不会assign成功，会打印一句话：

`It is not one of us.`

相应的调用Student的introduce方法也只会返回字符串(而学生是否在class中这件事情，应该是Class有一个方法hasStudent来判断。):

`My name is Tom. I am 21 years old. I am a Student. I haven't been allowed to join Class.`

Teacher还有一个isTeaching方法，传入一个学生，返回true/false。只要学生在classes中的任一个class中，就是在教他。 而学生是否在class中这件事情，应该是Class有一个方法hasStudent来判断。

当学生加入Teacher教的班级的时候，Teacher会打印一个句话,形如：

`I am Tom. I know Jerry has joined Class 2.`

当学生成为Teacher教的班级的班长的时候，Teacher会打印一个句话,形如：

`I am Tom. I know Jerry become Leader of Class 2.`

## 参考资料

1. [Javascript基础](http://codefordream.com/courses/js_basic/sections)
2. [Javascript初级训练营](http://codefordream.com/courses/js_learning_camps/sections)
3. [ECMAScript 6 入门](http://es6.ruanyifeng.com/)
4. [npm 下载安装](https://github.com/npm/npm)
5. [node 下载安装](https://github.com/creationix/nvm)
6. [jasmine用法](http://jasmine.github.io/2.6/introduction.html)
7. [Git 参考手册](http://gitref.org/zh/index.html)


## 答题流程
- 请用户仔细阅读题目要求和题目描述

- 在命令行中使用以下命令在用户本地任意目录下clone此题目库
```
git clone repo_of_this_template
```
NOTE：如果提示git命令未找到请先阅读参考资料
- 用任意编辑器打开clone下来的文件夹，内部会存在两个文件夹
```
spec  //测试文件夹
src   //源文件
```
`请在src文件下的person.js和student.js文件内实现`

- 完成函数后，使用以下命令设置github远程仓库地址 (my_url代表你自己的新的github地址)
```
 git remote set-url origin my_url
```
- 请使用**git提交(commit)**并**上传(push)**，之后将此github仓库地址(用户自建的) eg:（https://github.com/username/repo） 填入到提交地址一栏 
- 获取分支
- 提交
- 等待结果


## 如何本地运行

首先初次下载完需要安装依赖：

```
  npm install
```

然后才能执行测试：

```
  npm test
```

可以通过测试来检测本地代码是否完成作业要求，测试通过即可提交到github，把git库地址填到答题页面，并提交表单。
