---
title: C++ 数字
date: 2024-11-16 15:07:25
tags: 
  - 编程
  - C++程序
categories:
  - 编程
  - C++教程 
  - C++基础教程 
top_img: /img/2E7ACD823C75B4E15C31DEC35C63511F.jpg
cover: /img/2BD5A9A66E4EA2C1E0FD95EA948FAB66.jpg
---
# 前言
**这一节内容可能会涉及到一些之前所学习的相关知识，如果你还有不明白的，可以去温习一下之前所学[C++基础教程](https://blog.toumatou.cn/categories/%E7%BC%96%E7%A8%8B/C-%E6%95%99%E7%A8%8B/C-%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/)**



# C++数字
通常，当我们需要用到数字时，我们会使用原始的数据类型，如 int、short、long、float 和 double 等等。这些用于数字的数据类型，其可能的值和数值范围，我们已经在 [C++ 数据类型](https://blog.toumatou.cn/2024/11/15/C-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/)一节中讨论过。




## **1. 定义数字**

在 C++ 中，我们可以定义多种类型的数字，具体的数字类型取决于数值的大小和精度。下面是常用的数字类型：

- **`short`**：用于存储较小的整数（通常为 2 字节）。
- **`int`**：用于存储整数（通常为 4 字节）。
- **`long`**：用于存储较大的整数（通常为 4 或 8 字节，取决于平台）。
- **`float`**：用于存储单精度浮点数，通常用于存储小数（4 字节）。
- **`double`**：用于存储双精度浮点数，通常用于存储精度较高的小数（8 字节）。

**示例：**

```cpp
#include <iostream>
using namespace std;

int main() {
    // 定义各种类型的数字
    short s = 10;     // 小整数
    int i = 1000;     // 整数
    long l = 1000000; // 大整数
    float f = 230.47; // 单精度小数
    double d = 30949.374; // 双精度小数

    // 输出数字值
    cout << "short  s: " << s << endl;
    cout << "int    i: " << i << endl;
    cout << "long   l: " << l << endl;
    cout << "float  f: " << f << endl;
    cout << "double d: " << d << endl;

    return 0;
}
```

**输出：**

```
short  s: 10
int    i: 1000
long   l: 1000000
float  f: 230.47
double d: 30949.4
```

## **2. 数学运算**

C++ 提供了很多内置的数学函数，可以帮助我们做各种数学计算。要使用这些函数，我们需要引入 `<cmath>` 头文件。

以下是一些常见的数学函数：

- **`cos(double)`**：计算角度的余弦值。
- **`sin(double)`**：计算角度的正弦值。
- **`tan(double)`**：计算角度的正切值。
- **`log(double)`**：计算参数的自然对数。
- **`pow(double, double)`**：计算第一个数的第二个数次方（幂运算）。
- **`sqrt(double)`**：计算平方根。
- **`abs(int)`**：计算整数的绝对值。
- **`fabs(double)`**：计算浮点数的绝对值。
- **`floor(double)`**：向下取整，返回小于或等于给定数字的最大整数。

**示例：**

```cpp
#include <iostream>
#include <cmath>  // 引入数学库
using namespace std;

int main() {
    // 定义各种数字
    short s = 10;
    int i = -1000;
    long l = 100000;
    float f = 230.47;
    double d = 200.374;

    // 使用数学函数
    cout << "sin(d): " << sin(d) << endl;        // 计算正弦
    cout << "abs(i): " << abs(i) << endl;        // 计算绝对值
    cout << "floor(d): " << floor(d) << endl;    // 向下取整
    cout << "sqrt(f): " << sqrt(f) << endl;      // 计算平方根
    cout << "pow(d, 2): " << pow(d, 2) << endl;  // 计算平方

    return 0;
}
```

**输出：**

```
sin(d): -0.634939
abs(i): 1000
floor(d): 200
sqrt(f): 15.1812
pow(d, 2): 40149.7
```

## **3. 随机数生成**

在一些应用场景中，我们需要生成随机数。C++ 提供了 `rand()` 函数来生成伪随机数，但需要注意的是，`rand()` 每次程序运行时生成的随机数是固定的，类似于一个固定的序列。为了让每次生成的随机数不同，我们可以使用 `srand()` 函数设置随机数种子。

通常，`srand()` 的参数是当前的系统时间，这样每次运行程序时，生成的随机数都不相同。

**示例：**

```cpp
#include <iostream>
#include <ctime>   // 引入时间库
#include <cstdlib> // 引入随机数库
using namespace std;

int main() {
    int i, j;

    // 设置随机数种子为当前时间
    srand((unsigned)time(NULL));

    // 生成并输出 10 个随机数
    for(i = 0; i < 10; i++) {
        j = rand();  // 获取一个随机数
        cout << "随机数： " << j << endl;
    }

    return 0;
}
```

**输出示例：**

```
随机数： 1748144778
随机数： 630873888
随机数： 2134540646
随机数： 219404170
随机数： 902129458
随机数： 920445370
随机数： 1319072661
随机数： 257938873
随机数： 1256201101
随机数： 580322989
```

## 小总结

- C++ 中可以定义不同类型的数字（如整数、浮点数等）来存储不同类型的数值。
- 通过引入 `<cmath>` 库，我们可以使用 C++ 提供的丰富数学函数来进行各种数学运算。
- 通过 `rand()` 和 `srand()` 函数，我们可以生成随机数并控制随机数序列的不同。