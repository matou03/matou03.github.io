---
title: C++ 重载运算符和重载函数
date: 2024-11-20 09:53:56
tags: 
  - 编程
  - C++程序
categories:
  - 编程
  - C++教程 
  - C++面向对象
top_img: /img/2E7ACD823C75B4E15C31DEC35C63511F.jpg
---

# 前言
**从本节内容开始的内容，需要你具备前面的知识，如果你还有不会的或者说不熟悉的地方，请[点击这里](https://blog.toumatou.cn/categories/%E7%BC%96%E7%A8%8B/C-%E6%95%99%E7%A8%8B/C-%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/)重新温习一下,废话不多说，直接进入正题吧！**



# C++ 重载运算符和重载函数
想象一下，你有一个多功能的瑞士军刀，每个工具都有自己的特定用途，但它们都藏在同一个刀柄里。在C++中，函数重载和运算符重载就像是这个瑞士军刀，允许你用同一个名字来执行不同的任务，只要你给它不同的“工具”。

1. **函数重载**：
   - 这就像是你告诉你的瑞士军刀，“当我需要切东西时，给我刀片；当我需要拧螺丝时，给我螺丝刀。”在C++中，你可以有多个同名的函数，但每个函数接受的参数类型或数量不同。比如，你可以有一个`print()`函数来打印整数，另一个`print()`函数来打印字符串。
   - 当你调用`print(5)`时，编译器知道你想要打印一个整数，所以它会选择接受整数参数的那个`print()`函数。如果你调用`print("Hello")`，编译器会选择接受字符串参数的那个`print()`函数。

2. **运算符重载**：
   - 这就像是你对你的瑞士军刀说，“当我用加号时，如果我在加两个数字，就做数学加法；如果我在加两个我自定义的类对象，就按照我告诉你的特殊方式来加。”在C++中，你可以改变大多数内置运算符的行为，让它们也能用于你自定义的类。
   - 例如，如果你有一个`Box`类，你可以重载加号运算符来定义两个`Box`对象相加意味着什么。你可能会决定它意味着把两个盒子的体积相加。

**重载决策**：
- 当你使用重载的函数或运算符时，编译器需要决定哪个版本是最佳匹配。这就像你对瑞士军刀说，“我要切这个苹果”，军刀就会决定给你刀片而不是螺丝刀。
- 编译器通过比较你使用的参数类型和函数或运算符定义中的参数类型来做出决定。这个过程就像是军刀在检查你想要做什么，然后选择最合适的工具。


## C++ 中的函数重载
在 C++ 中，**函数重载**指的是可以在同一个作用域中定义多个同名函数，但这些函数的参数列表必须不同（包括参数的数量、类型或顺序）。它允许我们使用一个名字来处理不同类型的操作。

**注意**：
- 函数重载的区分是基于参数的类型和数量。
- **仅通过返回值的不同是不能实现重载的**。

### 一个简单的例子

假如我们有一个需求：输出不同类型的数据，比如整数、浮点数和字符串。每种数据类型需要一个特定的方法去输出，但我们不想使用不同的函数名（比如 `printInt()`、`printFloat()` 等），这时候可以使用**函数重载**。

下面是代码示例：

```cpp
#include <iostream>
using namespace std;

// 定义一个类 printData，包含多个同名函数 print()
class printData
{
   public:
      // 用于输出整数
      void print(int i) {
        cout << "整数为: " << i << endl;
      }

      // 用于输出浮点数
      void print(double f) {
        cout << "浮点数为: " << f << endl;
      }

      // 用于输出字符串
      void print(char c[]) {
        cout << "字符串为: " << c << endl;
      }
};

int main(void)
{
   // 创建一个 printData 的对象
   printData pd;

   // 调用 print 函数输出整数
   pd.print(5);

   // 调用 print 函数输出浮点数
   pd.print(500.263);

   // 调用 print 函数输出字符串
   char c[] = "Hello C++";
   pd.print(c);

   return 0;
}
```

### 程序运行的结果

运行上述代码会输出：

```
整数为: 5
浮点数为: 500.263
字符串为: Hello C++
```

### 程序工作原理的详细解释

1. **定义类 `printData`**：
   - 包含三个同名函数 `print()`。
   - 每个函数的参数类型不同：一个接收 `int` 类型，一个接收 `double` 类型，一个接收 `char[]` 类型。
   - 根据传递给 `print()` 的参数类型，C++ 编译器会选择调用相应的函数。

2. **在 `main()` 函数中**：
   - 创建了一个 `printData` 的对象 `pd`。
   - 调用了不同参数版本的 `print()`：
     - 传入整数 `5`，调用接收 `int` 类型参数的函数。
     - 传入浮点数 `500.263`，调用接收 `double` 类型参数的函数。
     - 传入字符串 `"Hello C++"`，调用接收 `char[]` 类型参数的函数。

### 为什么函数重载很有用？

函数重载的好处包括：
1. **统一接口**：不同的操作共享同一个函数名，提高代码的可读性和易用性。
2. **自动匹配类型**：根据传递的参数，自动调用对应的函数，无需手动区分函数名。
3. **避免混乱**：不用为每种操作创建不同的函数名，减少记忆负担。

### 函数重载的核心规则

1. 参数列表必须不同，具体包括：
   - 参数的数量不同。
   - 参数的类型不同。
   - 参数的顺序不同（例如 `print(int, double)` 和 `print(double, int)` 是可以重载的）。
   
2. **返回值的不同不能作为重载的条件**：
   ```cpp
   int print();
   double print(); // 错误：仅靠返回值不同，不能区分函数。
   ```

### 更直观的对比

**不使用重载的方式**：
```cpp
class printData
{
   public:
      void printInt(int i) {
         cout << "整数为: " << i << endl;
      }

      void printDouble(double f) {
         cout << "浮点数为: " << f << endl;
      }

      void printString(char c[]) {
         cout << "字符串为: " << c << endl;
      }
};
```
调用这些方法时，需要记住不同的函数名，比如 `printInt()`、`printDouble()` 等。

**使用重载的方式**：
```cpp
class printData
{
   public:
      void print(int i);
      void print(double f);
      void print(char c[]);
};
```
调用时只需记住一个名字 `print()`，编译器根据参数自动调用合适的版本。

### 小总结

函数重载是 C++ 提供的一种重要功能，用来让函数名称更简洁、统一，同时又支持多种类型的操作。在上面的例子中，`print()` 方法能够根据参数类型自动选择合适的版本，这是函数重载的核心优势。



## C++ 中的运算符重载
在 C++ 中，**运算符重载**允许我们为自定义的类定义运算符行为，使得可以像操作基本数据类型（例如整数、浮点数）一样，使用运算符对自定义的对象进行操作。

### 1. 运算符重载的基本概念

运算符重载实际上是通过定义一个特殊的成员函数或者非成员函数，使得运算符能够适用于我们自定义的类。在 C++ 中，重载运算符的函数名由关键字 `operator` 加上运算符符号组成。这样做的好处是，运算符可以像普通函数一样处理对象，并实现自定义的行为。

### 2. 运算符重载的形式

有两种常见的方式来定义运算符重载：
- **成员函数重载**：运算符重载是类的成员函数，并且通常只需要一个参数（即右侧操作数）。
- **非成员函数重载**：运算符重载是类外部的普通函数，通常需要两个参数（即两个操作数）。

### 3. 运算符重载实例：加法运算符

假设我们有一个 `Box` 类，它表示一个长方体。我们希望能够对两个 `Box` 对象进行加法操作，使得两个长方体的尺寸（长度、宽度、高度）相加，得到一个新的 `Box` 对象。

#### 代码示例：

```cpp
#include <iostream>
using namespace std;

class Box {
public:
    // 获取长方体的体积
    double getVolume() {
        return length * breadth * height;
    }
    
    // 设置长方体的长度、宽度和高度
    void setLength(double len) { length = len; }
    void setBreadth(double bre) { breadth = bre; }
    void setHeight(double hei) { height = hei; }
    
    // 重载加法运算符，用于将两个 Box 对象的尺寸相加
    Box operator+(const Box& b) {
        Box box; // 新的 Box 对象
        box.length = this->length + b.length; // 加法操作
        box.breadth = this->breadth + b.breadth;
        box.height = this->height + b.height;
        return box; // 返回新创建的 Box 对象
    }

private:
    double length;  // 长度
    double breadth; // 宽度
    double height;  // 高度
};

// 主函数
int main() {
    Box Box1, Box2, Box3; // 创建三个 Box 对象
    double volume = 0.0; // 存储体积

    // 设置 Box1 的尺寸
    Box1.setLength(6.0);
    Box1.setBreadth(7.0);
    Box1.setHeight(5.0);

    // 设置 Box2 的尺寸
    Box2.setLength(12.0);
    Box2.setBreadth(13.0);
    Box2.setHeight(10.0);

    // 输出 Box1 的体积
    volume = Box1.getVolume();
    cout << "Volume of Box1: " << volume << endl;

    // 输出 Box2 的体积
    volume = Box2.getVolume();
    cout << "Volume of Box2: " << volume << endl;

    // 将 Box1 和 Box2 相加，得到 Box3
    Box3 = Box1 + Box2;

    // 输出 Box3 的体积
    volume = Box3.getVolume();
    cout << "Volume of Box3: " << volume << endl;

    return 0;
}
```

#### 代码解释：

1. **定义 `Box` 类：** `Box` 类有三个私有成员变量：`length`（长度）、`breadth`（宽度）和 `height`（高度）。我们通过公共成员函数 `setLength()`、`setBreadth()` 和 `setHeight()` 来设置它们的值。

2. **成员函数 `operator+`：** 这个函数重载了加法运算符 `+`，它接受一个 `Box` 类型的对象 `b`，并将当前对象（通过 `this` 指针访问）和 `b` 的尺寸进行相加。相加的结果存储在一个新的 `Box` 对象中，并返回这个新的对象。

3. **计算体积：** `getVolume()` 函数返回长方体的体积，即 `length * breadth * height`。

4. **主函数：**
   - 我们创建了三个 `Box` 对象：`Box1`、`Box2` 和 `Box3`。
   - 给 `Box1` 和 `Box2` 设置了不同的尺寸。
   - 使用重载的加法运算符将 `Box1` 和 `Box2` 相加，得到一个新的 `Box3`。
   - 最后输出 `Box1`、`Box2` 和 `Box3` 的体积。

#### 输出结果：

```
Volume of Box1: 210
Volume of Box2: 1560
Volume of Box3: 5400
```

在这个例子中：
- `Box1` 的体积是 `6 * 7 * 5 = 210`。
- `Box2` 的体积是 `12 * 13 * 10 = 1560`。
- `Box3` 是 `Box1` 和 `Box2` 的尺寸相加，得到的新 Box 的体积是 `(6+12) * (7+13) * (5+10) = 18 * 20 * 15 = 5400`。

### 4. 小结

- 运算符重载让我们能够自定义运算符行为，使得运算符可以对自定义类型的对象进行操作。
- 可以通过成员函数或者非成员函数来重载运算符。
- 运算符重载可以大大提高代码的可读性和可维护性，尤其是对于复杂的对象操作。



## 可重载运算符/不可重载运算符
下面是可重载的运算符列表：

<!DOCTYPE html>
<html>
<head>
    <title>运算符重载</title>
</head>
<body>
    <h2>可重载的运算符</h2>
    <table border="1">
        <thead>
            <tr>
                <th>类别</th>
                <th>运算符</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>双目算术运算符</td>
                <td>+ (加)，- (减)，* (乘)，/ (除)，% (取模)</td>
            </tr>
            <tr>
                <td>关系运算符</td>
                <td>== (等于)，!= (不等于)，< (小于)，> (大于)，<= (小于等于)，>= (大于等于)</td>
            </tr>
            <tr>
                <td>逻辑运算符</td>
                <td>|| (逻辑或)，&& (逻辑与)，! (逻辑非)</td>
            </tr>
            <tr>
                <td>单目运算符</td>
                <td>+ (正)，- (负)，* (指针)，& (取地址)</td>
            </tr>
            <tr>
                <td>自增自减运算符</td>
                <td>++ (自增)，-- (自减)</td>
            </tr>
            <tr>
                <td>位运算符</td>
                <td>| (按位或)，& (按位与)，~ (按位取反)，^ (按位异或)，<< (左移)，>> (右移)</td>
            </tr>
            <tr>
                <td>赋值运算符</td>
                <td>=, +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=</td>
            </tr>
            <tr>
                <td>空间申请与释放</td>
                <td>new, delete, new[], delete[]</td>
            </tr>
            <tr>
                <td>其他运算符</td>
                <td>() (函数调用)，-> (成员访问)，, (逗号)，[] (下标)</td>
            </tr>
        </tbody>
    </table>
</body>
</html>


下面是不可重载的运算符列表：
<table>
  <tr>
    <th>不可重载运算符</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>. (点运算符)</td>
    <td>成员访问运算符，用于访问对象的成员。</td>
  </tr>
  <tr>
    <td>.* (点星运算符)</td>
    <td>成员指针访问运算符，用于通过成员指针访问成员。</td>
  </tr>
  <tr>
    <td>->* (箭头星运算符)</td>
    <td>成员指针访问运算符，用于通过成员指针访问成员。</td>
  </tr>
  <tr>
    <td>:: (域运算符)</td>
    <td>用于指定某个类或命名空间的成员。</td>
  </tr>
  <tr>
    <td>sizeof (长度运算符)</td>
    <td>用于获取数据类型的大小。</td>
  </tr>
  <tr>
    <td>?: (条件运算符)</td>
    <td>用于进行条件选择。</td>
  </tr>
  <tr>
    <td># (预处理符号)</td>
    <td>用于预处理阶段的宏定义。</td>
  </tr>
</table>



## 运算符重载实例
<table border="1">
  <tr>
    <th>序号</th>
    <th>运算符和实例</th>
  </tr>
  <tr>
    <td>1</td>
    <td>一元运算符重载</td>
  </tr>
  <tr>
    <td>2</td>
    <td>二元运算符重载</td>
  </tr>
  <tr>
    <td>3</td>
    <td>关系运算符重载</td>
  </tr>
  <tr>
    <td>4</td>
    <td>输入/输出运算符重载</td>
  </tr>
  <tr>
    <td>5</td>
    <td>++ 和 -- 运算符重载</td>
  </tr>
  <tr>
    <td>6</td>
    <td>赋值运算符重载</td>
  </tr>
  <tr>
    <td>7</td>
    <td>函数调用运算符 () 重载</td>
  </tr>
  <tr>
    <td>8</td>
    <td>下标运算符 [] 重载</td>
  </tr>
  <tr>
    <td>9</td>
    <td>类成员访问运算符 -> 重载</td>
  </tr>
</table>