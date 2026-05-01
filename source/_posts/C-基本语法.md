---
title: C++基本语法
date: 2024-11-14 13:43:04
tags: 
  - 编程
  - C++程序
categories:
  - 编程
  - C++教程 
  - C++基础教程 
top_img: /img/2E7ACD823C75B4E15C31DEC35C63511F.jpg
cover: /img/QQ图片20241107193033.png
---
# 前言
**相信你已经看完前面一节的内容了，如果还有不熟悉的地方，可以再去温故一下[面向对象与面向过程](https://blog.toumatou.cn/2024/11/11/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%8E%E9%9D%A2%E5%90%91%E8%BF%87%E7%A8%8B/)，本节我将正式开始讲解关于C++的内容，废话不多说，我们正式开始吧！**


# C++基本语法
C++ 程序可以看作是由一组对象组成的，每个对象都有自己的特性和行为。这些对象通过互相调用方法来交流。现在让我们用简单的方式理解一下**类**、**对象**、**方法**和**实例变量**。

1. **对象**  
   - 对象就像是生活中的实物，它既有特性，也有行为。  
     - 比如：一只狗。  
       - **特性**：颜色（白色）、名字（小白）、品种（牧羊犬）。  
       - **行为**：摇尾巴、叫、吃东西。  
     - **在程序中，对象是根据类创建出来的“实例”。**

2. **类**  
   - 类可以看作是创建对象的“设计图”或者“模板”。  
     - 比如，“狗”这个类就描述了所有狗的共性（颜色、名字、品种）和它们可以做的事（摇尾巴、叫、吃东西）。  
     - **具体的狗（如小白、小黑）就是从这个类生成的对象。**

3. **方法**  
   - 方法就是对象可以执行的“动作”或者“功能”。  
     - 对狗来说，方法可以是“叫”（bark()）、“吃”（eat()）。  
     - **方法中包含程序逻辑，定义了对象可以做的事情。**

4. **实例变量**  
   - 实例变量是对象的“特性值”，每个对象都有自己的值。  
     - 比如，狗类中可能有变量“颜色”、“名字”。小白的颜色是白色，名字是“小白”；而小黑的颜色是黑色，名字是“小黑”。这些特性值存储在实例变量中，决定了对象的状态。

---

### 总结
把类比作“模板”，对象是根据模板创建的“具体实例”，方法定义了对象的“行为”，而实例变量存储了对象的“特性值”。通过这种方式，我们可以用编程模拟真实世界中的事物和它们之间的交互。


# C++ 程序结构
让我们看一段简单的代码，可以输出单词 Hello World

```Cpp
#include <iostream>
using namespace std;
 
// main() 是程序开始执行的地方
 
int main()
{
   cout << "Hello World"; // 输出 Hello World
   return 0;
}
```

**接下来我们讲解一下这个程序:**

1. **头文件 `<iostream>`**  
   - `<iostream>` 是一个标准库，提供输入输出功能。  
   - 在这个程序中，它允许我们使用 `cout` 输出信息到屏幕上。

2. **`using namespace std;`**  
   - 告诉编译器我们要使用标准命名空间 `std`。  
   - 这样，我们可以直接写 `cout` 而不用每次都写成 `std::cout`。

3. **单行注释 `//`**  
   - 以 `//` 开头的部分是注释，它的作用是让程序员记录说明，编译器会忽略这些内容。  
   - 比如 `// main() 是程序的开始`，是为了帮助人类理解程序的结构。

4. **主函数 `int main()`**  
   - `main()` 是程序的入口点，每个 C++ 程序都需要这个函数。  
   - 程序从这里开始运行。

5. **输出语句 `cout << "Hello World";`**  
   - `cout` 是 C++ 用来输出信息到屏幕的工具。  
   - 这句代码会在屏幕上打印 `Hello World`。

6. **`return 0;`**  
   - 这句话的意思是：程序运行结束，并返回一个值 `0` 给系统。  
   - 在 C++ 中，返回 `0` 通常表示程序正常结束。


## 编译 & 执行 C++ 程序
接下来让我们看看如何把源代码保存在一个文件中，以及如何编译并运行它。下面是简单的步骤:

1. **编写代码**  
   - 打开一个文本编辑器，比如记事本或代码编辑器（如 VS Code、Sublime Text）。  
   - 将前面写好的代码粘贴进去。  

2. **保存文件**  
   - 将文件保存为 `hello.cpp`（扩展名必须是 `.cpp`，表示这是一个 C++ 程序）。

3. **打开命令提示符**  
   - 在 Windows 系统中，可以通过按下 `Win + R`，输入 `cmd` 打开命令提示符。  
   - 使用 `cd` 命令进入保存 `hello.cpp` 文件的文件夹。  
     例如，如果文件在桌面上：
     ```bash
     cd Desktop
     ```

4. **编译代码**  
   - 输入以下命令，按下回车：
     ```bash
     g++ hello.cpp
     ```
   - 如果代码没有错误，编译器会生成一个可执行文件，默认命名为 `a.exe`（在 Windows 中）或 `a.out`（在 Linux/macOS 中）。

5. **运行程序**  
   - 在命令提示符中输入以下命令，运行生成的可执行文件：
     ```bash
     a.exe    # Windows 系统
     ./a.out  # Linux/macOS 系统
     ```
   - 你将看到屏幕上显示 `Hello World`。

### 补充说明：
- **什么是编译？**  
  编译是将我们写的 C++ 代码转换成机器能理解的二进制文件（可执行文件）的过程。  
- **为什么需要编译？**  
  计算机只能理解二进制代码，因此必须先将源代码“翻译”成计算机语言，才能运行。  
通过以上步骤，你的第一个 C++ 程序就成功运行了！



## C++ 中的分号 & 语句块
在 C++ 中，分号是语句结束符。也就是说，每个语句必须以分号结束。它表明一个逻辑实体的结束

### 分号的作用
1. **分号是语句结束的标志**：  
   - 每条C++语句都需要以分号结尾，用来告诉编译器“这句话结束了”。
   - 你可以把分号看成是句号，表示一个完整的逻辑结束。

2. **示例**：  
   下面是三条独立的语句，每条语句都以分号结束：  
   ```cpp
   x = y;         // 把 y 的值赋给 x
   y = y + 1;     // y 加 1 后赋值给 y
   add(x, y);     // 调用函数 add，把 x 和 y 作为参数
   ```

### 语句块的作用
1. **语句块是逻辑上的一组代码**：  
   - 使用大括号 `{}` 将多条语句包裹在一起，这些语句作为一个整体，通常用于函数、条件语句、循环等结构中。

2. **示例**：  
   下面是一个语句块，它包含两条语句：
   ```cpp
   {
       cout << "Hello World"; // 输出 Hello World
       return 0;             // 返回值 0
   }
   ```

### 同一行的多个语句
1. **C++ 不限制每行只能写一条语句**：  
   - 你可以在同一行放置多条语句，只要每条语句以分号结束即可。

2. **示例**：  
   以下两种写法是等价的：  
   ```cpp
   x = y;
   y = y + 1;
   add(x, y);
   ```
   等同于：
   ```cpp
   x = y; y = y + 1; add(x, y);
   ```

### 总结
- **分号**：是C++的语句结束符，必须添加。
- **语句块**：是一组用大括号 `{}` 包裹的语句，用于逻辑上的分组。
- **多语句**：C++允许多条语句写在一行，只需确保用分号分隔即可。  
通过这些规则，你可以更灵活地组织代码。


## C++ 标识符
C++ 标识符是用于命名变量、函数、类等的符号，用来帮助程序员在代码中识别不同的内容。下面是一些详细解释：

1. **命名规则**：
   - 标识符必须以字母（A-Z或a-z）或下划线（_）开头。
   - 后面可以跟字母、数字（0-9）或下划线的组合。

2. **限制**：
   - 不能包含特殊字符，如 `@`、`&`、`%` 等。
   - C++ 区分大小写，也就是说 `apple` 和 `Apple` 是两个不同的标识符。

3. **有效的标识符示例**：
   - `mohd`, `zara`, `move_name`, `a_123`, `_temp` 等，符合规则。
通过这些规则，C++ 程序员可以创建各种命名来组织代码，使代码更有条理。



## C++关键字
下面出了一些在 C++ 中的保留字，这些保留字不能作为常量名、变量名或其他标识符名称。
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C++ Keywords</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h2>C++ Keywords</h2>

<table>
    <tr>
        <td>asm</td>
        <td>else</td>
        <td>new</td>
        <td>this</td>
    </tr>
    <tr>
        <td>auto</td>
        <td>enum</td>
        <td>operator</td>
        <td>throw</td>
    </tr>
    <tr>
        <td>bool</td>
        <td>explicit</td>
        <td>private</td>
        <td>true</td>
    </tr>
    <tr>
        <td>break</td>
        <td>export</td>
        <td>protected</td>
        <td>try</td>
    </tr>
    <tr>
        <td>case</td>
        <td>extern</td>
        <td>public</td>
        <td>typedef</td>
    </tr>
    <tr>
        <td>catch</td>
        <td>false</td>
        <td>register</td>
        <td>typeid</td>
    </tr>
    <tr>
        <td>char</td>
        <td>float</td>
        <td>reinterpret_cast</td>
        <td>typename</td>
    </tr>
    <tr>
        <td>class</td>
        <td>for</td>
        <td>return</td>
        <td>union</td>
    </tr>
    <tr>
        <td>const</td>
        <td>friend</td>
        <td>short</td>
        <td>unsigned</td>
    </tr>
    <tr>
        <td>const_cast</td>
        <td>goto</td>
        <td>signed</td>
        <td>using</td>
    </tr>
    <tr>
        <td>continue</td>
        <td>if</td>
        <td>sizeof</td>
        <td>virtual</td>
    </tr>
    <tr>
        <td>default</td>
        <td>inline</td>
        <td>static</td>
        <td>void</td>
    </tr>
    <tr>
        <td>delete</td>
        <td>int</td>
        <td>static_cast</td>
        <td>volatile</td>
    </tr>
    <tr>
        <td>do</td>
        <td>long</td>
        <td>struct</td>
        <td>wchar_t</td>
    </tr>
    <tr>
        <td>double</td>
        <td>mutable</td>
        <td>switch</td>
        <td>while</td>
    </tr>
    <tr>
        <td>dynamic_cast</td>
        <td>namespace</td>
        <td>template</td>
        <td></td>
    </tr>
</table>

</body>
</html>

若要查看完整关键字介绍可查阅：[C++ 的关键字（保留字）完整介绍](https://blog.toumatou.cn/2024/11/15/C-%E7%9A%84%E5%85%B3%E9%94%AE%E5%AD%97%EF%BC%88%E4%BF%9D%E7%95%99%E5%AD%97%EF%BC%89%E5%AE%8C%E6%95%B4%E4%BB%8B%E7%BB%8D/)


## 三字符组
### 什么是三字符组？
三字符组是用三个特定字符组合来表示其他字符的一种方法，通常以??开头。这是早期为了解决一些键盘上缺少特定字符的问题而设计的。虽然现代编译器和键盘已经不需要这个功能，但它仍然是C++标准的一部分。

### 三字符组的常用替换规则
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>字符替换表</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #add8e6; /* 浅蓝色背景 */
            color: #000; /* 文本颜色，可以根据需要调整 */
        }
    </style>
</head>
<body>

<h2>字符替换表</h2>

<table>
    <tr>
        <th>三字符组</th>
        <th>替换</th>
    </tr>
    <tr>
        <td>??=</td>
        <td>#</td>
    </tr>
    <tr>
        <td>??/</td>
        <td>\</td>
    </tr>
    <tr>
        <td>??'</td>
        <td>^</td>
    </tr>
    <tr>
        <td>??(</td>
        <td>[</td>
    </tr>
    <tr>
        <td>??)</td>
        <td>]</td>
    </tr>
    <tr>
        <td>??!</td>
        <td>|</td>
    </tr>
    <tr>
        <td>??&lt;</td>
        <td>{</td>
    </tr>
    <tr>
        <td>??&gt;</td>
        <td>}</td>
    </tr>
    <tr>
        <td>??-</td>
        <td>~</td>
    </tr>
</table>

</body>
</html>

### 示例代码
```CPP
#include <iostream>

int main() {
    // 使用三字符组代替常规符号
    std::cout << "Hello, World!" ??! std::endl;  // ??! 替换成 |
    int arr??(3??) = {1, 2, 3};                 // ??( 和 ??) 替换成 [ 和 ]
    std::cout << arr??(0??) << std::endl;       // 输出数组第一个元素
    return 0;
}

```
**输出结果**
```
Hello, World!
1
```

### 三字符组的注意事项
**特殊情况避免替换**：

如果你需要在字符串、字符常量或者注释中保留两个连续的问号，而不被自动替换，可以用以下方式：
转义序列："??\?"。
字符串拼接："??""?"。

**现代编译器支持：**

Microsoft Visual C++：从2010版开始，默认不再支持三字符组。如果需要启用，可以使用命令行选项/Zc:trigraphs。
GCC编译器：仍支持三字符组，但会提示编译警告，表明这种用法已经过时。

### 为什么了解三字符组？
虽然三字符组在现代开发中极少使用，但在维护一些古老的代码时可能会遇到。这是一个有趣的历史遗留特性，了解它有助于更全面地理解C++语言的设计。



## C++中的空格
以下是对“C++ 中的空格”更通俗易懂的解释：

### 空白行和空格
1. **空白行**：只有空格或注释的行称为“空白行”。C++ 编译器会自动忽略这些行，它们不会影响代码运行。

2. **空格的作用**：
   - 空格不仅指空白符，还包括制表符（Tab）、换行符和注释，它们都属于“空白符号”。
   - 空格帮助编译器区分不同部分，比如在`int age;`这行代码中，`int`和`age`之间需要空格，这样编译器才能知道`int`是数据类型，`age`是变量名。

3. **代码的可读性**：
   - 在一些地方，空格不是必需的，比如在 `fruit = apples + oranges;` 中，`fruit` 和 `=` 之间不强制要求空格，但适当添加空格可以让代码更清晰，便于阅读。
### 总结
空格让代码更易读，帮助编译器识别代码中的不同部分。虽然有些地方空格不是必须的，但为了让代码更美观，推荐合理使用空格。