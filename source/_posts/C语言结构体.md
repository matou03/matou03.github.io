---
title: C语言结构体
date: 2025-02-06 15:47:20
tags:
  - 编程
  - C程序
categories:
  - 编程
  - C教程 
  - C基础教程
---
# 👇😊 **C语言结构体** 😊👇  

---

## **🌈 1. 结构体是什么？**
现在你有一个**收纳盒**📦，里面可以放不同类型的物品（比如书、笔、橡皮）。结构体就是这样的“盒子”，用来组合**不同类型的数据**，形成一个新的复合数据类型！  
- **作用**：把相关数据打包，方便管理（比如学生信息：姓名、年龄、成绩）  

---

## **🌈 2. 结构体的定义与声明**
### **2.1 基本定义**  
📝 **语法**：  
```c
struct 结构体标签 {
    数据类型 成员1;
    数据类型 成员2;
    // ...
} 变量名; // 可选的变量声明
```

🌰 **例子**：定义一个学生结构体  
```c
struct Student {
    char name[20]; // 姓名
    int age;       // 年龄
    float score;   // 成绩
} stu1; // 直接声明一个结构体变量 stu1
```

### **2.2 用typedef简化**  
避免每次声明都要写 `struct` 关键字：  
```c
typedef struct Student {
    char name[20];
    int age;
    float score;
} Student; // 现在可以用 Student 代替 struct Student

Student stu2; // 声明变量更简洁
```

---

## **🌈 3. 结构体初始化与成员访问**
### **3.1 初始化结构体**  
- **方式1：定义时初始化**  
```c
struct Student stu3 = {"Alice", 18, 95.5};
```

- **方式2：逐个赋值**  
```c
struct Student stu4;
strcpy(stu4.name, "Bob"); // 字符串必须用strcpy
stu4.age = 20;
stu4.score = 88.5;
```

### **3.2 访问成员**  
使用 **`.` 运算符**访问成员：  
```c
printf("姓名：%s，年龄：%d\n", stu3.name, stu3.age);
```

---

## **🌈 4. 结构体指针**
### **4.1 指向结构体的指针**  
```c
Student *pStu = &stu3; // 定义指针并指向stu3
```

### **4.2 用指针访问成员**  
使用 **`->` 运算符**：  
```c
printf("成绩：%.1f\n", pStu->score); // 等价于 (*pStu).score
```

---

## **🌈 5. 结构体作为函数参数**
### **5.1 传值（拷贝整个结构体）**  
```c
void printStudent(Student stu) {
    printf("姓名：%s，年龄：%d\n", stu.name, stu.age);
}
// 调用
printStudent(stu3);
```

### **5.2 传指针（高效，可修改原数据）**  
```c
void updateScore(Student *stu, float newScore) {
    stu->score = newScore; // 修改原结构体的成绩
}
// 调用
updateScore(&stu3, 99.0);
```

---

## **🌈 6. 结构体的大小与内存对齐**
### **6.1 计算结构体大小**  
用 `sizeof` 运算符：  
```c
printf("Student结构体大小：%zu字节\n", sizeof(Student));
```

### **6.2 内存对齐规则**  
- **规则**：成员变量按自身大小对齐（如int按4字节对齐）  
- **填充字节**：编译器可能插入空字节优化访问速度  

🌰 **例子**：  
```c
struct Example {
    char a;    // 1字节 → 填充3字节
    int b;     // 4字节
    double c;  // 8字节
};
// 总大小：1 + 3(填充) + 4 + 8 = 16字节
```

---

## **🌈 7. 嵌套结构体与自引用**
### **7.1 嵌套结构体**  
结构体成员可以是其他结构体：  
```c
typedef struct Date {
    int year;
    int month;
    int day;
} Date;

typedef struct Person {
    char name[20];
    Date birthday; // 嵌套Date结构体
} Person;

Person p = {"Tom", {2000, 5, 20}};
printf("出生年份：%d\n", p.birthday.year);
```

### **7.2 自引用结构体（链表节点）**  
结构体成员可以包含指向自己的指针：  
```c
typedef struct Node {
    int data;
    struct Node *next; // 指向下一个节点的指针
} Node;
```

---

## **🌈 8. 常见错误与避坑指南**
1. **字符串赋值错误**  
```c
Student stu;
stu.name = "Alice"; ❌ // 数组不能直接赋值
strcpy(stu.name, "Alice"); ✅ // 正确
```

2. **结构体类型不匹配**  
```c
struct A { int x; };
struct B { int x; };
struct A a;
struct B b = a; ❌ // 虽然成员相同，但类型不同！
```

3. **忽略内存对齐**  
```c
// 假设结构体实际大小为12字节，但按4字节对齐后是16字节
// 若按12字节操作内存（如网络传输），可能导致数据错位！
```

---

## **🌈 9. 综合练习**  
### **练习1：定义坐标结构体**  
定义一个 `Point` 结构体，包含x和y坐标，并写函数计算两点距离。  

### **练习2：学生管理系统**  
定义一个 `Student` 结构体（姓名、年龄、成绩），实现函数：  
- `void inputStudent(Student *stu)` 输入学生信息  
- `void printStudent(Student stu)` 输出学生信息  

### **练习3：结构体大小计算**  
预测以下结构体的大小，并用 `sizeof` 验证：  
```c
struct Test {
    char a;
    int b;
    char c;
};
```

---

## **🎯 参考答案**  
### **练习1**：  
```c
#include <math.h>

typedef struct Point {
    float x;
    float y;
} Point;

float distance(Point p1, Point p2) {
    return sqrt(pow(p1.x - p2.x, 2) + pow(p1.y - p2.y, 2));
}
```

### **练习2**：  
```c
typedef struct Student {
    char name[20];
    int age;
    float score;
} Student;

void inputStudent(Student *stu) {
    printf("输入姓名、年龄、成绩：");
    scanf("%s %d %f", stu->name, &stu->age, &stu->score);
}

void printStudent(Student stu) {
    printf("姓名：%s，年龄：%d，成绩：%.1f\n", stu.name, stu.age, stu.score);
}
```

### **练习3**：  
**预测**：  
- `char a` 占1字节 → 填充3字节（对齐到4）  
- `int b` 占4字节  
- `char c` 占1字节 → 填充3字节  
总大小：1 + 3 + 4 + 1 + 3 = **12字节**  

**验证**：  
```c
printf("Sizeof Test: %zu\n", sizeof(struct Test)); // 输出12
```

---

🚀 **总结**：  
- 结构体是“数据收纳盒”，管理不同类型的数据  
- 用`.`访问成员，`->`访问指针成员  
- 内存对齐可能影响结构体大小，需注意  
- 多练习结构体的嵌套和指针操作，轻松应对复杂数据！  

**记住**：结构体让代码更整洁，数据更直观！ 💻📦