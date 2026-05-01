---
title: C++接口(抽象类)
date: 2024-11-22 16:47:25
ags: 
  - 编程
  - C++程序
categories:
  - 编程
  - C++教程 
  - C++面向对象
top_img: /img/2E7ACD823C75B4E15C31DEC35C63511F.jpg
---

# 前言
**这是C++面向对象的最后一节内容，本节内容将会用到前面类的相关知识以及[C++基础教程](https://blog.toumatou.cn/categories/%E7%BC%96%E7%A8%8B/C-%E6%95%99%E7%A8%8B/C-%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/)以及[C++类&对象](https://blog.toumatou.cn/2024/11/20/C-%E7%B1%BB-%E5%AF%B9%E8%B1%A1/)，需要你具备前面的知识，如果你还有不会的或者说不熟悉的地方，请重新温习一下** 

---

# C++ 接口（抽象类）

在 C++ 中，**接口**是一种“**规定一类事物应该具备什么功能**”的方式。可以将接口比作“合同”或“蓝图”，它描述了类的功能和行为，但不关心具体如何实现。

在 C++ 中，接口通常通过**抽象类（Abstract Class）**来实现。抽象类就像建筑的“蓝图”：它定义了应该做什么，但不告诉你怎么做。


## 目录
- [什么是抽象类？](#what-is-an-abstract-class)
- [为什么需要抽象类？](#why-abstract-classes)
- [抽象类的规则](#rules-for-abstract-classes)
- [抽象类的使用场景](#use-cases-for-abstract-classes)
- [抽象类的实例](#examples-of-abstract-classes)
- [常见错误示例](#wrong-example)
- [抽象类与接口的比较](#comparison-between-abstract-classes-and-interfaces)
- [虚析构函数的重要性](#importance-of-virtual-destructors)
- [总结](#summary)

---

<h2 id="what-is-an-abstract-class">什么是抽象类？</h2>

抽象类是一种**不能直接用来创建对象**的特殊类，主要用来给其他类提供标准或模板。

**关键特性**：
1. **至少包含一个纯虚函数**：抽象类中至少有一个函数是“纯虚函数”。
2. **纯虚函数的定义**：纯虚函数是一种特殊的函数，它只有声明，没有实现，写法是`= 0`。

### 举个例子

```cpp
class Shape {
public:
    virtual double getArea() = 0;  // 纯虚函数，定义了一个必须实现的接口
};
```

上面的类`Shape`就是一个抽象类，`getArea()`函数只是告诉其他类“你必须提供计算面积的功能”，但并没有实现具体的计算方法。

---

<h2 id="why-abstract-classes">为什么需要抽象类？</h2>

抽象类的主要目的是**定义接口**，而不是实现细节。它告诉子类“你必须做这些事情，但怎么做由你决定”。这样可以：

1. **统一标准**：确保不同的子类都有一致的功能。
2. **代码灵活**：子类可以用自己的方式实现这些功能。
3. **避免错误**：如果某个子类没有实现必要的功能，编译器会报错。

### 类比说明

想象一下，你是一家汽车制造厂的设计师，制定了一份“汽车设计蓝图”（抽象类），规定了汽车必须有发动机、车轮等基本部件，但具体的发动机类型和车轮设计由不同的制造部门负责。这确保了所有汽车都具备基本功能，但具体实现可以多样化。

---

<h2 id="rules-for-abstract-classes">抽象类的规则</h2>

- **至少包含一个纯虚函数**：抽象类中的函数`= 0`，表示这个函数是纯虚函数，必须在子类中实现。
- **不能直接创建对象**：无法用抽象类创建实例，如果尝试这么做，编译器会报错。
- **必须在子类中实现纯虚函数**：子类如果没有实现纯虚函数，也会被当成抽象类，不能实例化。

### 举个例子

```cpp
class Shape {
public:
    virtual int getArea() = 0;  // 纯虚函数，子类必须实现
};

class Rectangle : public Shape {
public:
    int getArea() override {  // 实现纯虚函数
        return width * height;
    }
    void setDimensions(int w, int h) {
        width = w;
        height = h;
    }
private:
    int width;
    int height;
};

int main() {
    // Shape shape;  // 错误：不能实例化抽象类
    Rectangle rect;
    rect.setDimensions(5, 7);
    cout << "Area: " << rect.getArea() << endl;  // 输出：Area: 35
    return 0;
}
```

**解释**：
1. 抽象类`Shape`定义了接口`getArea()`，但没有实现。
2. 子类`Rectangle`实现了`getArea()`，所以它可以创建实例并使用。
3. 尝试实例化`Shape`会导致编译错误，确保接口不能被滥用。

---

<h2 id="use-cases-for-abstract-classes">抽象类的使用场景</h2>

抽象类通常用来：

1. **统一子类功能**：确保所有子类都有某些共同的功能。
2. **提供灵活性**：允许子类根据自己的需求，用不同的方式实现这些功能。
3. **扩展系统**：以后可以很容易地添加新的子类，而不会影响现有代码。

### 实际应用示例

假设你在开发一个图形编辑软件，需要处理多种形状（如矩形、圆形、三角形等）。你可以创建一个抽象类`Shape`，定义所有形状必须具备的接口，如`getArea()`和`draw()`，然后各个具体形状类继承`Shape`并实现这些接口。

---

<h2 id="examples-of-abstract-classes">抽象类的实例</h2>

### 示例代码

假设我们有一个基类`Shape`，它代表一个形状，并定义了一个接口`getArea()`。然后我们用它的两个子类`Rectangle`（矩形）和`Triangle`（三角形）分别实现计算面积的功能。

```cpp
#include <iostream>
using namespace std;

// 抽象类
class Shape {
public:
    // 纯虚函数：定义接口，但不实现
    virtual int getArea() = 0;
    
    void setWidth(int w) {
        width = w;
    }
    
    void setHeight(int h) {
        height = h;
    }
    
    // 虚析构函数，确保子类对象被正确销毁
    virtual ~Shape() {}
protected:
    int width;
    int height;
};

// 子类：矩形
class Rectangle : public Shape {
public:
    int getArea() override {
        return width * height;  // 矩形面积公式
    }
};

// 子类：三角形
class Triangle : public Shape {
public:
    int getArea() override {
        return (width * height) / 2;  // 三角形面积公式
    }
};

int main() {
    Rectangle rect;
    Triangle tri;

    rect.setWidth(5);
    rect.setHeight(7);
    cout << "Rectangle Area: " << rect.getArea() << endl;

    tri.setWidth(5);
    tri.setHeight(7);
    cout << "Triangle Area: " << tri.getArea() << endl;

    // 尝试实例化抽象类将导致编译错误
    // Shape shape;  // 错误：无法实例化抽象类

    return 0;
}
```

### 输出结果：
```
Rectangle Area: 35
Triangle Area: 17
```

### 解释：
1. 抽象类`Shape`定义了计算面积的接口`getArea()`，并且提供了设置宽度和高度的方法。
2. 子类`Rectangle`和`Triangle`分别实现了`getArea()`，用自己的公式计算面积。
3. 主程序中通过接口调用`getArea()`，而不需要关心子类的具体实现。

---

<h2 id="wrong-example">常见错误示例</h2>

为了更好地理解抽象类的限制，来看几个常见的错误示例。

### 1. 尝试实例化抽象类

```cpp
int main() {
    Shape shape;  // 错误：无法实例化抽象类
    return 0;
}
```

**错误信息**：
```
error: cannot declare variable ‘shape’ to be of abstract type ‘Shape’
```

### 2. 子类未实现所有纯虚函数

```cpp
class IncompleteShape : public Shape {
    // 未实现 getArea()
};

int main() {
    IncompleteShape ishape;  // 错误：IncompleteShape 仍然是抽象类
    return 0;
}
```

**错误信息**：
```
error: cannot declare variable ‘ishape’ to be of abstract type ‘IncompleteShape’
```

---

<h2 id="comparison-between-abstract-classes-and-interfaces">抽象类与接口的比较</h2>
虽然 C++ 没有明确的“接口”关键字，但抽象类可以用来实现接口的功能。

- **抽象类**：
  - 可以包含成员变量和已实现的成员函数。
  - 适用于需要共享代码和数据的场景。

- **接口（通过纯虚类实现）**：
  - 只包含纯虚函数，不包含成员变量。
  - 适用于仅需要定义行为规范的场景。

### 示例：接口类

```cpp
class IPrintable {
public:
    virtual void print() = 0;  // 纯虚函数
    virtual ~IPrintable() {}
};

class Document : public IPrintable {
public:
    void print() override {
        cout << "Printing Document" << endl;
    }
};
```

---

<h2 id="importance-of-virtual-destructors">虚析构函数的重要性</h2>

在抽象类中定义虚析构函数，确保通过基类指针删除子类对象时，子类的析构函数能够被正确调用，防止资源泄漏。

### 示例：

```cpp
class Shape {
public:
    virtual int getArea() = 0;
    virtual ~Shape() { cout << "Shape Destructor" << endl; }
};

class Rectangle : public Shape {
public:
    int getArea() override { return width * height; }
    ~Rectangle() { cout << "Rectangle Destructor" << endl; }
private:
    int width;
    int height;
};

int main() {
    Shape* shape = new Rectangle();
    delete shape;  
    // 输出：
    // Rectangle Destructor
    // Shape Destructor
    return 0;
}
```

如果`Shape`的析构函数不是虚函数，删除`shape`时只会调用`Shape`的析构函数，导致`Rectangle`的析构函数未被调用，可能引发资源泄漏。

---

<h2 id="summary">总结</h2>

抽象类在面向对象编程中扮演着重要角色，它提供了一个统一的接口，确保所有子类实现特定的功能。通过使用抽象类，可以：

- **强制性**：确保子类实现必要的功能，避免遗漏。
- **代码复用**：在抽象类中实现通用功能，子类只需专注于特定部分。
- **灵活性和扩展性**：方便添加新功能或子类，而不影响现有代码。
- **易于维护**：外界依赖于抽象类提供的接口，内部实现可以灵活变化。