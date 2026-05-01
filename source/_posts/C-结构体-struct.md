---
title: C++ 结构体(struct)
date: 2024-11-16 16:19:28
tags: 
  - 编程
  - C++程序
categories:
  - 编程
  - C++教程 
  - C++基础教程 
top_img: /img/2E7ACD823C75B4E15C31DEC35C63511F.jpg
cover: /img/761C2CA8C5CB8CC72668C50F3EFFB0CF.jpg
---

# 前言
**这一节内容可能会涉及到一些之前所学习的相关知识，如果你还有不明不白的，可以去温习一下之前所学[C++基础教程](http://localhost:4000/categories/%E7%BC%96%E7%A8%8B/C-%E6%95%99%E7%A8%8B/)**



# C++ 结构体(struct)

在C++中，**结构体（`struct`）** 是一种非常有用的数据类型，它可以把多种类型的数据组合在一起，形成一个整体。简单来说，**结构体就是一个容器，可以存放不同类型的变量，这些变量称为结构体的“成员”**。

---

## **为什么需要结构体？**

假设我们要管理一本书的信息，比如：
- **标题（Title）**：比如《C++ 教程》
- **作者（Author）**：比如“张三”
- **类别（Subject）**：比如“编程”
- **编号（Book ID）**：比如“12345”

这些属性的数据类型是不同的：
- 标题和作者是**字符串**，
- 编号是**整数**。

如果用普通的变量来存储这些信息，代码会变得杂乱无章：
```cpp
string title1 = "C++ 教程";
string author1 = "张三";
string subject1 = "编程";
int bookID1 = 12345;
```
每增加一本书，就需要定义四个变量，管理起来非常麻烦。  
**结构体**解决了这个问题：它允许我们把这些相关的数据组合起来，作为一个整体来管理。

---

## **如何定义结构体？**

用 `struct` 关键字来定义结构体，基本语法如下：
```cpp
struct StructName {
    DataType MemberName1; // 第一个成员
    DataType MemberName2; // 第二个成员
    ...
};
```

例如，定义一个用于表示“书籍”的结构体：
```cpp
struct Book {
    char title[50];    // 标题
    char author[50];   // 作者
    char subject[100]; // 类别
    int book_id;       // 编号
};
```

- **`Book`** 是结构体类型的名字。
- 结构体里包含的成员有：`title`、`author`、`subject` 和 `book_id`。

---

## **如何使用结构体？**

定义了结构体后，可以用它来创建“结构体变量”，表示具体的对象（如一本书）：

### **1. 创建结构体变量**
```cpp
Book book1, book2;
```
上面创建了两个结构体变量 `book1` 和 `book2`，分别表示两本书。

### **2. 访问结构体成员**
结构体的成员可以通过 **`.` 运算符** 来访问或赋值：
```cpp
book1.book_id = 12345;               // 设置编号
strcpy(book1.title, "C++ 教程");     // 设置标题
cout << book1.title << endl;         // 输出标题
```

---

## **完整示例：存储并输出两本书的信息**
```cpp
#include <iostream>
#include <cstring> // 包含字符串处理函数
using namespace std;

// 定义结构体
struct Book {
    char title[50];    // 标题
    char author[50];   // 作者
    char subject[100]; // 类别
    int book_id;       // 编号
};

int main() {
    // 创建两个书的结构体变量
    Book book1, book2;

    // 设置第一本书的信息
    strcpy(book1.title, "C++ 教程");
    strcpy(book1.author, "张三");
    strcpy(book1.subject, "编程");
    book1.book_id = 12345;

    // 设置第二本书的信息
    strcpy(book2.title, "CSS 教程");
    strcpy(book2.author, "李四");
    strcpy(book2.subject, "前端开发");
    book2.book_id = 12346;

    // 输出第一本书的信息
    cout << "第一本书标题: " << book1.title << endl;
    cout << "第一本书作者: " << book1.author << endl;
    cout << "第一本书类别: " << book1.subject << endl;
    cout << "第一本书编号: " << book1.book_id << endl;

    // 输出第二本书的信息
    cout << "第二本书标题: " << book2.title << endl;
    cout << "第二本书作者: " << book2.author << endl;
    cout << "第二本书类别: " << book2.subject << endl;
    cout << "第二本书编号: " << book2.book_id << endl;

    return 0;
}
```

### **运行结果：**
```
第一本书标题: C++ 教程
第一本书作者: 张三
第一本书类别: 编程
第一本书编号: 12345
第二本书标题: CSS 教程
第二本书作者: 李四
第二本书类别: 前端开发
第二本书编号: 12346
```

---

## **结构体的高级用法**

### **1. 结构体作为函数参数**
可以把结构体传递给函数，用来操作结构体成员数据。

#### 示例：
```cpp
#include <iostream>
#include <cstring>
using namespace std;

// 定义结构体
struct Book {
    char title[50];
    char author[50];
    char subject[100];
    int book_id;
};

// 定义函数，打印书的信息
void printBook(Book book) {
    cout << "标题: " << book.title << endl;
    cout << "作者: " << book.author << endl;
    cout << "类别: " << book.subject << endl;
    cout << "编号: " << book.book_id << endl;
}

int main() {
    Book book1;
    strcpy(book1.title, "C++ 教程");
    strcpy(book1.author, "张三");
    strcpy(book1.subject, "编程");
    book1.book_id = 12345;

    printBook(book1); // 调用函数打印书的信息
    return 0;
}
```

---

### **2. 指针操作结构体**
用指针操作结构体变量，可以通过 `->` 运算符访问成员。
```cpp
Book book1;
Book* bookPtr = &book1; // 定义一个指向 book1 的指针

bookPtr->book_id = 12345; // 通过指针设置编号
cout << bookPtr->book_id; // 通过指针获取编号
```

---

### **3. 结构体中添加构造函数**
像类一样，结构体也可以有构造函数，用来初始化数据。
```cpp
struct Book {
    string title;
    string author;
    string subject;
    int book_id;

    // 构造函数
    Book(string t, string a, string s, int id)
        : title(t), author(a), subject(s), book_id(id) {}
};

// 创建对象
Book book1("C++ 教程", "张三", "编程", 12345);
```

---

## **结构体和类的区别**

- **默认访问权限不同**：
  - `struct` 的成员默认是 **public**。
  - `class` 的成员默认是 **private**。
  
- **适用场景**：
  - **结构体**：用于简单数据的封装，比如存储图书信息、学生信息等。
  - **类**：用于更复杂的场景，比如需要继承、封装和多态的情况下。

---

## **小总结**

1. **结构体** 是一种用户自定义的数据类型，用来把不同类型的数据组合成一个整体。
2. 结构体可以用来管理复杂的数据，比如图书馆的书籍、学生的成绩等。
3. 可以通过 **`.` 运算符** 访问成员，也可以通过 **`->` 运算符** 用指针访问。
4. 结构体支持函数传参、构造函数、指针操作等高级用法。
5. 和类类似，但结构体更轻量，适合简单的数据封装任务。