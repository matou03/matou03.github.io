---
title: C语言指针与回调函数
date: 2025-02-04 16:46:32
tags:
  - 编程
  - C程序
categories:
  - 编程
  - C教程 
  - C基础教程
---
# 👇😊 **C语言函数指针** 😊👇  

---

## **🌈 1. 函数指针是什么？**
想象你有一个**遥控器**📱，可以控制不同的电器（比如电视、空调）。每个按钮对应一个功能。  
- **函数指针**就像这个遥控器，它“指向”一个函数，按下按钮（调用指针）就能执行对应的函数！  
- **本质**：存储函数的内存地址，通过地址调用函数。  

---

## **🌈 2. 函数指针的声明与赋值**
### **2.1 声明函数指针**
📝 **语法**：`返回类型 (*指针名)(参数类型1, 参数类型2...);`  
```c
// 声明一个指向“接受两个int参数，返回int”的函数的指针
int (*pFunc)(int, int); 
```

🔍 **对比普通函数声明**：  
```c
int max(int a, int b); // 普通函数
int (*pFunc)(int, int); // 函数指针
```

### **2.2 给函数指针赋值**
将函数名（即函数地址）赋给指针（`&`可省略）：  
```c
pFunc = max;   // 正确 ✅
pFunc = &max;  // 也正确 ✅
```

❌ **错误示例**：  
```c
pFunc = max(); // ❌ max()是调用函数，返回int，无法赋值给指针！
```

---

## **🌈 3. 通过函数指针调用函数**
### **3.1 直接调用**
```c
int result = pFunc(3, 5); // 等价于 max(3,5)
```

### **3.2 解引用调用（清晰写法）**
```c
int result = (*pFunc)(3, 5); // 与上面等价
```

🌰 **完整示例**：  
```c
#include <stdio.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    int (*p)(int, int) = max; // 定义函数指针并赋值
    int x = 10, y = 20;
    int z = p(x, y); // 调用
    printf("最大值：%d\n", z); // 输出20
    return 0;
}
```

---

## **🌈 4. 函数指针的用途：回调函数（超重要！）**
### **4.1 什么是回调函数？**
- **你定义函数** → **别人调用你的函数**  
- **场景**：将函数作为参数传递给另一个函数，在特定事件发生时被调用。  

🌰 **生活比喻**：  
- 你去餐厅吃饭，排队等位时留下手机号（**注册回调函数**）。  
- 有空位时，餐厅打电话通知你（**触发回调**）。  
- 你去就餐（**执行回调函数**）。  

### **4.2 代码示例：生成随机数组**
```c
#include <stdlib.h>
#include <stdio.h>

// 回调函数类型：无参数，返回int
typedef int (*GetValueFunc)(void);

// 高阶函数：用回调函数填充数组
void fillArray(int *arr, int size, GetValueFunc getValue) {
    for(int i=0; i<size; i++) {
        arr[i] = getValue(); // 调用回调函数
    }
}

// 回调函数1：返回随机数
int getRandom() {
    return rand();
}

// 回调函数2：返回固定序列值
int getSequence() {
    static int num = 0;
    return num++;
}

int main() {
    int arr1[10], arr2[10];
    
    fillArray(arr1, 10, getRandom);   // 用随机数填充
    fillArray(arr2, 10, getSequence); // 用序列值填充
    
    // 打印arr1
    printf("随机数组：");
    for(int i=0; i<10; i++) printf("%d ", arr1[i]);
    
    // 打印arr2
    printf("\n序列数组：");
    for(int i=0; i<10; i++) printf("%d ", arr2[i]);
    
    return 0;
}
```

**输出示例**：  
```
随机数组：1804289383 846930886 1681692777 ... 
序列数组：0 1 2 3 4 5 6 7 8 9 
```

---

## **🌈 5. 函数指针的高级用法**
### **5.1 函数指针数组**
可以创建函数指针数组，实现“多态”效果。  
```c
// 定义两个函数
void sayHello() { printf("Hello!\n"); }
void sayBye() { printf("Bye!\n"); }

int main() {
    // 函数指针数组
    void (*funcs[2])() = {sayHello, sayBye};
    
    funcs[0](); // 输出Hello!
    funcs[1](); // 输出Bye!
    return 0;
}
```

### **5.2 使用typedef简化**
为复杂的函数指针类型定义别名，提高可读性。  
```c
// 定义类型别名
typedef int (*CompareFunc)(int, int);

// 使用别名声明函数指针
CompareFunc pCompare = max;
```

---

## **❌ 6. 常见错误与注意事项**
1. **函数签名不匹配**：  
```c
int max(int a, int b);
void (*p)(int, int) = max; // ❌ 返回类型不匹配！
```

2. **错误传递回调函数**：  
```c
fillArray(arr, 10, getRandom()); // ❌ 加了括号，传递的是int而非函数指针！
```

3. **未初始化函数指针**：  
```c
int (*p)(int, int); 
p(1, 2); // ❌ p未赋值，指向随机地址 → 程序崩溃！
```

---

## **🌈 7. 综合练习**
### **练习1：排序策略选择**
写一个排序函数 `void sort(int arr[], int size, CompareFunc compare)`，根据传入的比较函数决定升序或降序排序。  
- 定义两个比较函数：`int ascending(int a, int b)`（a>b返回1）和 `int descending(int a, int b)`（a<b返回1）。  
- 在main函数中测试两种排序方式。  

### **练习2：计算器函数**
用函数指针数组实现计算器（加、减、乘、除），根据用户选择调用对应操作。  

### **练习3：找错误**  
以下代码有什么问题？  
```c
int add(int a, int b) { return a + b; }
int main() {
    int (*p)(int) = add; // 这里有问题！
    printf("%d", p(2, 3));
    return 0;
}
```

---

## **🎯 参考答案**  
### **练习1**：  
```c
// 比较函数
int ascending(int a, int b) { return a > b; }
int descending(int a, int b) { return a < b; }

// 冒泡排序（根据compare决定顺序）
void sort(int arr[], int size, CompareFunc compare) {
    for(int i=0; i<size-1; i++) {
        for(int j=0; j<size-1-i; j++) {
            if(compare(arr[j], arr[j+1])) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

// 使用示例
int main() {
    int arr[] = {3,1,4,1,5};
    sort(arr, 5, ascending);  // 升序 → 1,1,3,4,5
    sort(arr, 5, descending); // 降序 → 5,4,3,1,1
    return 0;
}
```

### **练习2**：  
```c
#include <stdio.h>

int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }
int mul(int a, int b) { return a * b; }
int div(int a, int b) { return a / b; }

int main() {
    int (*ops[4])(int, int) = {add, sub, mul, div};
    int choice, x, y;
    
    printf("选择操作：0.加 1.减 2.乘 3.除\n");
    scanf("%d", &choice);
    printf("输入两个数：");
    scanf("%d %d", &x, &y);
    
    printf("结果：%d\n", ops[choice](x, y));
    return 0;
}
```

### **练习3**：  
**错误**：函数指针 `p` 的声明参数数量与 `add` 不匹配。  
**修正**：  
```c
int (*p)(int, int) = add; // 参数应为两个int
```

---

🚀 **总结**：  
- 函数指针是**指向代码的指针**，实现灵活的函数调用。  
- 回调函数是“**你定义，别人调用**”的机制，广泛用于事件处理、库设计。  
- 牢记**函数签名匹配**，避免野指针调用！  

**口诀**：函数指针像遥控，指向函数真奇妙，回调机制很灵活，签名一致要记牢！ 🎮🔧