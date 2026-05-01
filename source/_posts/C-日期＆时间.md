---
title: C++ 日期＆时间
date: 2024-11-16 15:50:12
tags: 
  - 编程
  - C++程序
categories:
  - 编程
  - C++教程 
  - C++基础教程 
top_img: /img/2E7ACD823C75B4E15C31DEC35C63511F.jpg
cover: /img/2690FF65E155B40CBBC4CF684061FBFC.jpg
---

# 前言
**这一节内容可能会涉及到一些之前所学习的相关知识，如果你还有不明不白的，可以去温习一下之前所学[C++基础教程](http://localhost:4000/categories/%E7%BC%96%E7%A8%8B/C-%E6%95%99%E7%A8%8B/)**



# C++ 日期＆时间
在C++编程中，我们可以通过标准库来操作日期和时间，但它没有专门的“日期类型”。取而代之的是通过结构和函数来处理。这些功能是从C语言继承而来的，需要使用 `<ctime>` 头文件。

C++ 提供了几种与时间相关的类型和结构：
- **`time_t`**: 用于存储系统时间，表示从1970年1月1日开始的秒数。
- **`tm`**: 是一个结构体，用来表示更详细的日期和时间信息，比如年、月、日、时、分、秒等。

## `tm`结构体长什么样？
`tm` 是一个保存日期和时间信息的结构，定义如下：
```cpp
struct tm {
    int tm_sec;   // 秒，范围 0-59
    int tm_min;   // 分钟，范围 0-59
    int tm_hour;  // 小时，范围 0-23
    int tm_mday;  // 一月中的第几天，范围 1-31
    int tm_mon;   // 月，范围 0-11（0表示1月）
    int tm_year;  // 从 1900 年起的年数（比如2024年对应值为124）
    int tm_wday;  // 一周中的第几天，范围 0-6（0表示星期日）
    int tm_yday;  // 一年中的第几天，范围 0-365
    int tm_isdst; // 是否是夏令时
};
```

## 常见日期和时间的操作函数

| 函数 | 作用 |
|------|------|
| `time()` | 获取当前时间（从1970年到现在的秒数） |
| `localtime()` | 将时间转换为本地时间，并返回 `tm` 结构 |
| `gmtime()` | 将时间转换为 UTC 时间（格林威治时间），返回 `tm` 结构 |
| `ctime()` | 将时间转换为可读的字符串，比如 `Mon Jan 1 12:34:56 2024` |
| `asctime()` | 将 `tm` 结构转换为字符串形式 |
| `difftime()` | 计算两个时间点的秒差 |
| `strftime()` | 自定义格式化输出时间 |

---

## 实例1：获取当前日期和时间

以下代码演示如何获取并打印系统的当前时间：
```cpp
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    time_t now = time(0); // 获取当前时间
    char* dt = ctime(&now); // 转换为字符串形式
    cout << "本地日期和时间：" << dt << endl;

    tm *gmtm = gmtime(&now); // 转换为 UTC 时间
    dt = asctime(gmtm);
    cout << "UTC 日期和时间：" << dt << endl;

    return 0;
}
```
**运行结果示例：**
```
本地日期和时间：Sat Nov 16 15:35:21 2024
UTC 日期和时间：Sat Nov 16 07:35:21 2024
```

---

## 实例2：格式化日期和时间

使用 `tm` 结构可以详细访问时间信息，比如年、月、日等：
```cpp
#include <iostream>
#include <ctime>
using namespace std;

int main() {
    time_t now = time(0); // 获取当前时间
    tm *ltm = localtime(&now); // 转换为本地时间结构

    // 打印时间的各个组成部分
    cout << "1970到现在经过的秒数：" << now << endl;
    cout << "当前时间：" << endl;
    cout << "年: " << 1900 + ltm->tm_year << endl;
    cout << "月: " << 1 + ltm->tm_mon << endl;
    cout << "日: " << ltm->tm_mday << endl;
    cout << "时间: " << ltm->tm_hour << ":" << ltm->tm_min << ":" << ltm->tm_sec << endl;

    return 0;
}
```
**运行结果示例：**
```
1970到现在经过的秒数：1737093321
当前时间：
年: 2024
月: 11
日: 16
时间: 15:35:21
```

---

## 小总结
- **`time_t`** 是一个简单的整数类型，用来表示时间戳。
- **`tm`** 是一个更复杂的结构，用来处理年月日等详细信息。
- 我们可以通过函数（如 `localtime` 或 `gmtime`）来获取和转换时间，然后打印出想要的格式。