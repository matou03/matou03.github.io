---
title: C++字符串
date: 2024-11-16 15:27:25
tags: 
  - 编程
  - C++程序
categories:
  - 编程
  - C++教程 
  - C++基础教程 
top_img: /img/2E7ACD823C75B4E15C31DEC35C63511F.jpg
cover: /img/F24E079B77A820FE6EC19C7337BDBD19.jpg
---
# 前言
**这一节内容可能会涉及到一些之前所学习的相关知识，如果你还有不明白的，可以去温习一下之前所学[C++基础教程](https://blog.toumatou.cn/categories/%E7%BC%96%E7%A8%8B/C-%E6%95%99%E7%A8%8B/C-%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/)**



# C++ 字符串
C++ 提供了以下两种类型的字符串表示形式：

***C 风格字符串***
**C++ 引入的 string 类类型**


## **C风格字符串**

在 C 和 C++ 中，字符串实际上是用来存放文字或字符的一种特殊的 **字符数组**，并在最后加上一个 **特殊符号 `\0`**（表示字符串结束）。我们称这种字符串为 **C 风格字符串**。

---

### **字符串的本质：字符数组**
- 就像一个储物柜，里面每个格子存放一个字符。
- 字符串的末尾会有一个 **隐藏的结束符 `\0`**，告诉程序「字符串到这里就结束了」。

**例子：**
```cpp
char site[7] = {'R', 'U', 'N', 'O', 'O', 'B', '\0'};
```
这里 `site` 是一个字符数组，包含：
- **6 个字符**：`R`、`U`、`N`、`O`、`O`、`B`
- **1 个结束符**：`'\0'`

储存结构：
```
位置：  [0]  [1]  [2]  [3]  [4]  [5]  [6]
字符：  'R'  'U'  'N'  'O'  'O'  'B'  '\0'
```

因为有 `\0`，字符串的大小比字符数多 1。

---

### **字符串的简化写法**
你可以用更简单的方式直接初始化字符串，程序会自动在末尾加上 `\0`：
```cpp
char site[] = "RUNOOB";
```

**等同于**：
```cpp
char site[7] = {'R', 'U', 'N', 'O', 'O', 'B', '\0'};
```

所以 `site` 中存储的内容依然是：
```
"RUNOOB\0"
```

---

### **字符串的打印**
在 C++ 中，`cout` 遇到字符串时，会从第一个字符开始输出，一直到碰到 `\0` 结束。例如：
```cpp
#include <iostream>
using namespace std;

int main() {
    char site[] = "RUNOOB";
    cout << "网站名: " << site << endl; // 输出 "RUNOOB"
    return 0;
}
```

**结果：**
```
网站名: RUNOOB
```

---

### **常用的字符串操作函数**
C++ 提供了一些常用的函数来操作 C 风格字符串，这些函数都在 `<cstring>` 头文件中。

### **1. `strcpy`：字符串复制**
把一个字符串复制到另一个字符串。
```cpp
char str1[] = "runoob";
char str2[20]; 
strcpy(str2, str1); // 把 str1 的内容复制到 str2
cout << str2;       // 输出：runoob
```

---

### **2. `strcat`：字符串拼接**
把一个字符串追加到另一个字符串的末尾。
```cpp
char str1[20] = "runoob";
char str2[] = "google";
strcat(str1, str2); // 拼接：str1 = "runoobgoogle"
cout << str1;       // 输出：runoobgoogle
```

---

### **3. `strlen`：字符串长度**
计算字符串的长度（不包括 `\0`）。
```cpp
char str[] = "runoob";
int len = strlen(str); // 长度是 6
cout << len;           // 输出：6
```

---

### **4. `strcmp`：字符串比较**
比较两个字符串的大小：
- 如果相等，返回 `0`
- 如果第一个字符串比第二个小，返回负值
- 如果第一个字符串比第二个大，返回正值

```cpp
char str1[] = "runoob";
char str2[] = "google";
int result = strcmp(str1, str2); // 返回正值，因为 "runoob" > "google"
```

---

### **5. `strchr`：查找字符**
在字符串中查找某个字符的第一次出现，并返回其地址。
```cpp
char str[] = "runoob";
char *pos = strchr(str, 'n'); // 找到 'n'，返回其地址
cout << *pos;                // 输出：n
```

---

### **6. `strstr`：查找子字符串**
在字符串中查找某个子字符串的第一次出现，并返回其地址。
```cpp
char str1[] = "runoobgoogle";
char str2[] = "google";
char *pos = strstr(str1, str2); // 找到 "google"，返回其地址
cout << pos;                    // 输出：google
```

---

### **完整示例：操作 C 风格字符串**
```cpp
#include <iostream>
#include <cstring> // 包含字符串操作函数头文件
using namespace std;

int main() {
    char str1[20] = "runoob";
    char str2[20] = "google";
    char str3[20];
    int len;

    // 1. 复制 str1 到 str3
    strcpy(str3, str1);
    cout << "复制后 str3: " << str3 << endl;

    // 2. 拼接 str2 到 str1
    strcat(str1, str2);
    cout << "拼接后 str1: " << str1 << endl;

    // 3. 计算 str1 的长度
    len = strlen(str1);
    cout << "str1 长度: " << len << endl;

    return 0;
}
```

**结果：**
```
复制后 str3: runoob
拼接后 str1: runoobgoogle
str1 长度: 12
```

---

## **C++ 的 `string` 类（现代方式）**
C++ 提供了 `string` 类，操作字符串更简单，推荐使用：

**示例：**
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string str1 = "runoob";
    string str2 = "google";

    // 1. 复制字符串
    string str3 = str1;
    cout << "str3: " << str3 << endl;

    // 2. 拼接字符串
    str3 = str1 + str2;
    cout << "拼接后: " << str3 << endl;

    // 3. 获取长度
    cout << "长度: " << str3.size() << endl;

    return 0;
}
```

**结果：**
```
str3: runoob
拼接后: runoobgoogle
长度: 12
```

---

## **小总结**
- **C 风格字符串**：用字符数组实现，需注意 `\0` 结束符。
- **字符串操作函数**：如 `strcpy`、`strcat`、`strlen` 提供基本功能。
- **C++ `string` 类**：更现代化，更灵活，推荐在 C++ 中使用。