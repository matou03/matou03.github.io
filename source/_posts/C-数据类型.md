---
title: C++数据类型
date: 2024-11-15 13:43:04
tags: 
  - 编程
  - C++程序
categories:
  - 编程
  - C++教程 
  - C++基础教程 
top_img: /img/2E7ACD823C75B4E15C31DEC35C63511F.jpg
cover: /img/6C3851ACED67EE331B5CBDB0416A86D2.jpg    
---
# 前言
**这一节我们将学习数据类型的相关知识，可能会涉及到一些C++的基本语法，如果你还有不明白的，请到[C++基本语法](https://blog.toumatou.cn/2024/11/14/C++%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95/)这里温故一下**

# C++数据类型

**在编写程序时，我们经常需要用到变量来保存各种信息。变量其实是内存中的一块空间，用来存储特定的数据。创建变量时，计算机会根据变量的类型，分配合适大小的内存，并决定存储的数据格式。**

不同的数据类型可以用来保存不同种类的信息，比如：  
- **字符类型**：用来存储单个字符，比如`'A'`。  
- **宽字符类型**：用于存储多字节字符，比如Unicode字符。  
- **整数类型**：用来存储整数，比如`10`或`-5`。  
- **浮点数类型**：用来存储小数，比如`3.14`。  
- **双精度浮点数类型**：精度更高的小数，比如`3.1415926`。  
- **布尔类型**：用来存储`true`（真）或`false`（假）。  

操作系统会根据变量的类型，确定分配多少内存以及如何处理存储的数据。这样，可以更高效地利用系统资源并保证数据正确存储。



## 基本的内置类型
C++ 为程序员提供了种类丰富的内置数据类型和用户自定义的数据类型。下表列出了七种基本的 C++ 数据类型：
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数据类型和关键字</title>
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

<h2>数据类型和关键字</h2>

<table>
    <tr>
        <th>类型</th>
        <th>关键字</th>
    </tr>
    <tr>
        <td>布尔型</td>
        <td>bool</td>
    </tr>
    <tr>
        <td>字符型</td>
        <td>char</td>
    </tr>
    <tr>
        <td>整型</td>
        <td>int</td>
    </tr>
    <tr>
        <td>浮点型</td>
        <td>float</td>
    </tr>
    <tr>
        <td>双浮点型</td>
        <td>double</td>
    </tr>
    <tr>
        <td>无类型</td>
        <td>void</td>
    </tr>
    <tr>
        <td>宽字符型</td>
        <td>wchar_t</td>
    </tr>
</table>

</body>
</html>

`wchar_t` 其实是通过定义类型别名实现的，具体是：

```cpp
typedef short int wchar_t;
```

这意味着，`wchar_t` 实际上占用的空间和 `short int` 一样，通常是 2 个字节。

C++ 中的一些基本数据类型可以通过修饰符来修改它们的属性，包括：
- **signed**：表示带符号（可以是正数或负数，默认情况下大多数整数类型是带符号的）。
- **unsigned**：表示无符号，只能是正数。
- **short**：表示短整型，通常占用比 `int` 更少的内存（通常是 2 个字节）。
- **long**：表示长整型，通常占用比 `int` 更多的内存（通常是 8 个字节）。

不同的数据类型在内存中占用的空间（字节数）会有所不同，而且它们能存储的最大值和最小值也会根据系统有所不同。通常情况下，1 字节等于 8 位。

### 默认情况下：
- `int`、`short`、`long` 类型都是带符号的（`signed`），可以表示负数和正数。

### 关于 `long int` 和 `int` 的大小：
- 在一些早期的编译器中，`long int` 占 4 个字节，`int` 占 2 个字节。但是现代的 C/C++ 标准已经兼容这种设定，通常在较新的系统中，`long int` 占 8 个字节，`int` 占 4 个字节。
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Types and Ranges</title>
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

<h2>Data Types and Ranges</h2>

<table>
    <tr>
        <th>类型</th>
        <th>位</th>
        <th>范围</th>
    </tr>
    <tr>
        <td>char</td>
        <td>1个字节</td>
        <td>-128到127或者0到255</td>
    </tr>
    <tr>
        <td>unsigned char</td>
        <td>1个字节</td>
        <td>0到255</td>
    </tr>
    <tr>
        <td>signed char</td>
        <td>1个字节</td>
        <td>-128到127</td>
    </tr>
    <tr>
        <td>int</td>
        <td>4个字节</td>
        <td>-2147483648到2147483647</td>
    </tr>
    <tr>
        <td>unsigned int</td>
        <td>4个字节</td>
        <td>0到4294967295</td>
    </tr>
    <tr>
        <td>signed int</td>
        <td>4个字节</td>
        <td>-2147483648到2147483647</td>
    </tr>
    <tr>
        <td>short int</td>
        <td>2个字节</td>
        <td>-32768到32767</td>
    </tr>
    <tr>
        <td>unsigned short int</td>
        <td>2个字节</td>
        <td>0到65,535</td>
    </tr>
    <tr>
        <td>signed short int</td>
        <td>2个字节</td>
        <td>-32768到32767</td>
    </tr>
    <tr>
        <td>long int</td>
        <td>8个字节</td>
        <td>-9,223,372,036,854,775,808到9,223,372,036,854,775,807</td>
    </tr>
    <tr>
        <td>signed long int</td>
        <td>8个字节</td>
        <td>-9,223,372,036,854,775,808到9,223,372,036,854,775,807</td>
    </tr>
    <tr>
        <td>unsigned long int</td>
        <td>8个字节</td>
        <td>0到18,446,744,073,709,551,615</td>
    </tr>
    <tr>
        <td>float</td>
        <td>4个字节</td>
        <td>精度型占4个字节(32位)内存空间,+/-3.4e+/-38(~7个数字)</td>
    </tr>
    <tr>
        <td>double</td>
        <td>8个字节</td>
        <td>双精度型占8个字节(64位)内存空间,+/-1.7e+/-308(~15个数字)</td>
    </tr>
    <tr>
        <td>long long</td>
        <td>8个字节</td>
        <td>双精度型占8个字节(64位)内存空间,表示-9,223,372,036,854,775,807到9,223,372,036,854,775,807的范围</td>
    </tr>
    <tr>
        <td>long double</td>
        <td>16个字节</td>
        <td>长双精度型16个字节(128位)内存空间,可提供18-19位有效数字。</td>
    </tr>
    <tr>
        <td>wchar_t</td>
        <td>2或4个字节</td>
        <td>1个宽字符</td>
    </tr>
</table>

</body>
</html>



## typedef 声明
在 C++ 中，`typedef` 关键字可以用来给已有的类型起一个新的名字。这相当于创建一个类型的别名，让代码更清晰或者更方便。

### 使用方法：
```cpp
typedef 原类型 新名字;
```

### 示例：
如果想给 `int` 类型起一个新名字 `feet`，可以这样写：
```cpp
typedef int feet;
```

从现在起，`feet` 就和 `int` 完全等价，表示同一种类型。比如下面的代码是合法的：
```cpp
feet distance; // 等同于 int distance;
```
这里的 `distance` 是一个整型变量，但通过 `feet` 这个名字，它更直观地表示变量的意义，比如“表示距离”。这让代码更容易阅读和理解。



## 枚举类型
**枚举类型（`enumeration`）是 C++ 中一种用户自定义的数据类型，用来定义一组固定的值。它非常适合表示只有有限可能取值的变量。通过枚举，可以为变量列举出所有合法值，变量的取值范围就被限制在这些列举的值中。**

### 枚举的定义
枚举用关键字 `enum` 定义，基本语法如下：
```cpp
enum 枚举名 { 
    标识符1[=整型常数], 
    标识符2[=整型常数], 
    ...
    标识符n[=整型常数]
} 枚举变量;
```

### 工作方式
- 如果没有为标识符赋值（即省略 `=整型常数`），枚举会默认从 0 开始，后续值依次加 1。
- 也可以为部分或全部标识符指定具体的值。未指定的标识符会自动比前一个值大 1。

### 示例 1：默认值
```cpp
enum color { red, green, blue }; // red=0, green=1, blue=2
color c;  // 定义变量 c，类型为 color
c = blue; // c 的值为 blue（等价于 2）
```

### 示例 2：自定义值
```cpp
enum color { red, green=5, blue }; // red=0, green=5, blue=6
color c = green;  // c 的值为 5
```
在这个例子中：
- `red` 的值为 0。
- `green` 的值被设置为 5。
- `blue` 自动被赋值为 6，因为它比前一个值大 1。

### 枚举的好处
1. **代码更易读**：通过枚举名称表达变量的意义（如 `red` 和 `green`）。
2. **更安全**：变量的取值被限制在定义的枚举值范围内，避免了非法值的出现。



## 类型转换
类型转换是指将一种数据类型的值转换成另一种数据类型的值。在 C++ 中，主要有四种类型转换方式：**静态转换、动态转换、常量转换**和**重新解释转换**。下面我们用更简单的语言解释这些转换方式。

---

### 1. **静态转换（Static Cast）**
- **作用**：在编译时，将一种类型强制转换成另一种类型。
- **特点**：没有运行时检查，所以如果转换不合理，可能会导致程序运行时出错。
- **用途**：通常用在类型之间有一定相似性的场景，比如 `int` 和 `float` 的转换。

**例子：**
```cpp
int i = 10;
float f = static_cast<float>(i); // 把 int 类型的值转换为 float
```

---

### 2. **动态转换（Dynamic Cast）**
- **作用**：在运行时将基类的指针或引用转换为派生类的指针或引用。
- **特点**：会进行运行时类型检查，如果转换不合法，会返回空指针或抛出异常。
- **用途**：主要用于带有**继承关系的类**之间的指针或引用转换。

**例子：**
```cpp
class Base {};
class Derived : public Base {};
Base* ptr_base = new Derived;  // 基类指针指向派生类对象
Derived* ptr_derived = dynamic_cast<Derived*>(ptr_base); // 转换成派生类指针
```

---

### 3. **常量转换（Const Cast）**
- **作用**：用于移除变量的 `const` 属性，允许对其进行修改。
- **特点**：只能去掉 `const`，不会改变数据类型。
- **用途**：在特定场景下需要修改 `const` 修饰的变量时使用。

**例子：**
```cpp
const int i = 10;  // 一个常量
int& r = const_cast<int&>(i); // 将 const int 转换为普通 int
```

---

### 4. **重新解释转换（Reinterpret Cast）**
- **作用**：直接将一种类型的值按二进制格式解释为另一种类型。
- **特点**：不做任何检查，可能会导致未定义行为。
- **用途**：通常用于需要对内存内容重新解释的场景（如底层编程）。

**例子：**
```cpp
int i = 10;
float f = reinterpret_cast<float&>(i); // 强行把 int 的内存解释为 float
```

---

### 总结
| **转换方式**         | **特点**                                          | **主要用途**                                             |
|-----------------------|--------------------------------------------------|----------------------------------------------------------|
| **静态转换**          | 编译时转换，无运行时检查                        | 类型相似的普通数据类型转换（如 `int` 转 `float`）        |
| **动态转换**          | 运行时检查，安全但速度稍慢                      | 基类与派生类之间的指针或引用转换                         |
| **常量转换**          | 去掉 `const` 属性，只修改可变性                 | 修改 `const` 变量的值                                    |
| **重新解释转换**      | 直接按内存内容重新解释类型，不安全               | 内存地址、类型的低级转换（如底层硬件编程）               |

需要注意的是，**尽量避免不必要的类型转换**，特别是动态转换和重新解释转换，因为它们可能引发潜在的问题或性能损耗。