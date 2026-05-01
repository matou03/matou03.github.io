---
title: C++数据封装
date: 2024-11-22 16:08:43
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
**本节内容，将会用到前面类的相关知识以及[C++基础教程](https://blog.toumatou.cn/categories/%E7%BC%96%E7%A8%8B/C-%E6%95%99%E7%A8%8B/C-%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/)以及[C++类&对象](https://blog.toumatou.cn/2024/11/20/C-%E7%B1%BB-%E5%AF%B9%E8%B1%A1/)，需要你具备前面的知识，如果你还有不会的或者说不熟悉的地方，请重新温习一下** 

# **数据封装（Data Encapsulation）：将数据安全地锁在盒子里**

数据封装是面向对象编程（OOP）中的一个核心概念，它不仅可以提高代码的安全性和灵活性，还能使程序更易于维护和理解。为了让这个概念更容易理解，我们可以把数据封装比作“**把数据和操作这些数据的方法放在一个盒子里，锁上盖子，只留一个钥匙孔**”。外界只能通过钥匙孔（也就是类提供的公共方法）来操作盒子里的内容。



## 目录
- [C++ 程序的基本构成](#cpp-program-structure)
- [数据封装的核心思想](#core-concepts-of-encapsulation)
- [类的定义及访问修饰符](#class-definition-and-access-modifiers)
- [数据封装的具体例子](#example)
- [数据封装与数据隐藏的区别](#difference-between-encapsulation-and-data-hiding)
- [封装与访问器 (Getter) 和修改器 (Setter)](#getter-and-setter)
- [数据封装的优点](#advantages-of-encapsulation)
- [设计建议](#design-recommendations)
- [数据封装的现实类比](#real-world-encapsulation-examples)
- [总结](#summary)

<h2 id="cpp-program-structure">C++ 程序的基本构成</h2>

在深入了解数据封装之前，先回顾一下 C++ 程序的两个基本组成部分：

1. **程序语句（代码）**：负责执行具体的操作，如计算、输出、存储等。这些操作通常由函数实现。
2. **程序数据**：程序需要处理的信息，如数字、字符、字符串等。

**数据封装**就是将这两部分**绑定在一起**，将数据和操作数据的代码打包成一个整体。

---

<h2 id="core-concepts-of-encapsulation">数据封装的核心思想</h2>

### **2.1 绑定数据和方法**

- **类（Class）**：在 C++ 中，类是实现数据封装的基本单位。它将数据（属性）和操作这些数据的方法（函数）封装在一起。
- **成员变量（属性）**：类中的数据部分，用于存储对象的状态。
- **成员函数（方法）**：类中的函数部分，用于定义对象的行为。

### **2.2 隐藏内部实现**

- **访问控制符**：通过设置 `public`、`private`、`protected` 等访问控制符，控制外部代码对类成员的访问权限。
  - **`private`（私有）**：只能在类的内部访问，外部无法直接访问。
  - **`public`（公有）**：可以在任何地方访问。
  - **`protected`（受保护）**：在类内部和派生类中访问，外部无法直接访问。

### **2.3 通过接口操作数据**

- **公共接口（钥匙孔）**：类对外提供的 `public` 方法，外部只能通过这些方法与类交互，无法直接访问内部的 `private` 数据。
- **好处**：
  - **安全性**：防止外部代码直接修改内部数据，保护数据完整性。
  - **灵活性**：可以在方法中添加数据验证、日志记录等功能。
  - **可维护性**：修改内部实现细节时，不影响外部代码。

---

<h2 id="class-definition-and-access-modifiers">类的定义及访问修饰符</h2>

### **3.1 类的基本结构**

```cpp
class 类名 {
private:
    // 私有成员变量和方法
protected:
    // 受保护的成员变量和方法
public:
    // 公有成员变量和方法
};
```

### **3.2 示例：一个简单的盒子类**

```cpp
class Box {
public:
    // 设置盒子的尺寸
    void setDimensions(double len, double bre, double hei) {
        length = len;
        breadth = bre;
        height = hei;
    }

    // 计算盒子的体积
    double getVolume() {
        return length * breadth * height;
    }

private:
    double length;   // 长度
    double breadth;  // 宽度
    double height;   // 高度
};
```

**解释：**

- **私有成员变量**：`length`、`breadth`、`height`，外部无法直接访问或修改。
- **公有成员函数**：`setDimensions()` 和 `getVolume()`，提供与外部交互的接口。

---

<h2 id="difference-between-encapsulation-and-data-hiding">数据封装与数据隐藏的区别</h2>

- **数据封装（Encapsulation）**：将数据和操作数据的方法绑定在一起，形成一个类。
- **数据隐藏（Data Hiding）**：通过访问控制符，隐藏类的内部实现细节，只暴露必要的接口。

**总结**：数据封装强调的是将数据和方法封装在一起，数据隐藏强调的是对外部隐藏内部细节。两者共同实现了面向对象编程的封装特性。

---

<h2 id="example">数据封装的具体例子</h2>

### **5.1 示例代码：加法器类**

```cpp
#include <iostream>
using namespace std;

class Adder {
public:
    // 构造函数，初始化总和
    Adder(int i = 0) {
        total = i;
    }

    // 添加一个数字到总和
    void addNum(int number) {
        total += number;
    }

    // 获取总和
    int getTotal() {
        return total;
    }

private:
    int total; // 总和变量，外部不能直接修改
};

int main() {
    Adder a;

    a.addNum(10); // 通过 addNum 添加数字
    a.addNum(20);
    a.addNum(30);

    cout << "Total: " << a.getTotal() << endl; // 输出 Total: 60

    return 0;
}
```

**运行结果：**

```
Total: 60
```

**解释：**

1. **私有成员变量**：`total`，用于存储总和，外部无法直接访问或修改。
2. **公有成员函数**：
   - `addNum(int number)`：用于向总和添加数字。
   - `getTotal()`：用于获取当前的总和。
3. **好处**：
   - **保护性**：防止外部直接修改 `total`，确保数据的安全性。
   - **灵活性**：可以在 `addNum()` 中添加数据验证或其他逻辑，而不影响外部代码。

---

<h2 id="getter-and-setter">封装与访问器 (Getter) 和修改器 (Setter)</h2>

### **6.1 什么是 Getter 和 Setter**

- **Getter（访问器）**：用于获取私有成员变量的值。
- **Setter（修改器）**：用于设置私有成员变量的值，通常包含数据验证。

### **6.2 示例代码：学生类**

```cpp
#include <iostream>
using namespace std;

class Student {
private:
    string name;
    int age;

public:
    // 构造函数
    Student(string studentName, int studentAge) {
        name = studentName;
        setAge(studentAge); // 使用 Setter 进行数据验证
    }

    // 获取姓名（Getter）
    string getName() {
        return name;
    }

    // 获取年龄（Getter）
    int getAge() {
        return age;
    }

    // 修改姓名（Setter）
    void setName(string studentName) {
        name = studentName;
    }

    // 修改年龄（Setter）
    void setAge(int studentAge) {
        if (studentAge > 0 && studentAge < 120) {
            age = studentAge;
        } else {
            cout << "年龄无效，设置为默认年龄 18。" << endl;
            age = 18;
        }
    }

    // 打印学生信息
    void printInfo() {
        cout << "姓名: " << name << ", 年龄: " << age << endl;
    }
};

int main() {
    // 创建一个 Student 对象
    Student student1("Alice", 20);

    // 访问和修改数据
    student1.printInfo();

    student1.setName("Bob");
    student1.setAge(22);

    student1.printInfo();

    // 尝试设置无效年龄
    student1.setAge(-5);

    student1.printInfo();

    return 0;
}
```

**运行结果：**

```
姓名: Alice, 年龄: 20
姓名: Bob, 年龄: 22
年龄无效，设置为默认年龄 18。
姓名: Bob, 年龄: 18
```

**解释：**

- **数据验证**：`setAge()` 方法中添加了年龄范围的检查，确保数据合法性。
- **信息隐藏**：`name` 和 `age` 是私有的，外部无法直接访问，只能通过 Getter 和 Setter 方法操作。
- **灵活性**：可以在 Setter 方法中添加更多逻辑，如日志记录、通知等。

---

<h2 id="advantages-of-encapsulation">数据封装的优点</h2>

1. **数据隐藏**：防止外部直接访问和修改内部数据，保护对象的状态。
2. **增强安全性**：通过 Getter 和 Setter，可以在修改数据时进行验证，防止非法输入。
3. **提高可维护性**：内部实现可以随时更改，而不影响外部代码，只要公共接口保持不变。
4. **实现抽象**：使用者只需了解如何使用公共接口，无需关心内部实现细节。
5. **降低耦合度**：外部代码与类的内部实现解耦，提高代码的模块化和可重用性。

---

<h2 id="design-recommendations">设计建议</h2>

1. **将类的成员变量设置为私有（`private`）**：防止外部直接访问，保护数据完整性。
2. **通过公共接口（`public` 方法）操作数据**：提供受控的方式与外部交互，便于添加验证和逻辑控制。
3. **使用 Getter 和 Setter**：控制对数据的访问和修改，确保数据的合法性和一致性。
4. **隐藏实现细节**：外部无需知道类的内部如何实现，只需了解如何使用公共接口。
5. **遵循单一职责原则**：每个类只负责一项功能，保持代码的高内聚性和低耦合性。

---

<h2 id="real-world-encapsulation-examples">数据封装的现实类比</h2>
### **9.1 银行账户**

- **你可以做的操作**：
  - 存款、取款、查询余额。
- **你无法做的操作**：
  - 直接修改银行数据库中的账户余额。
- **解释**：银行系统将账户余额等敏感数据封装起来，客户只能通过受控的方式（ATM、网上银行）进行操作，确保资金安全。

### **9.2 家用电器**

- **你可以做的操作**：
  - 按下按钮打开或关闭设备，调整设置。
- **你无法做的操作**：
  - 直接干涉设备内部的电路或程序。
- **解释**：设备的内部实现对用户是隐藏的，用户只能通过提供的接口（按钮、遥控器）与设备交互。

---

<h2 id="summary">总结</h2>

数据封装是面向对象编程的重要特性，它通过将数据和操作数据的方法封装在一起，并隐藏内部实现细节，实现了数据的保护和代码的灵活性。

- **核心思想**：将数据和方法绑定在一起，隐藏内部细节，只通过公共接口与外界交互。
- **实现方式**：使用类和访问控制符，定义私有成员和公有方法。
- **优势**：
  - 提高安全性，保护数据完整性。
  - 增强代码的可维护性和可扩展性。
  - 降低耦合度，实现模块化编程。
  - 提供数据验证，确保数据合法性。

通过合理运用数据封装，我们可以编写出更健壮、更易于维护的代码，使程序具备更高的质量和灵活性。

---

**如果你还有任何疑问，或者需要进一步的解释，欢迎随时提问！**