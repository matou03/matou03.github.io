---
title: C++ vector容器
date: 2024-11-16 16:31:33
tags: 
  - 编程
  - C++程序
categories:
  - 编程
  - C++教程 
  - C++基础教程 
top_img: /img/2E7ACD823C75B4E15C31DEC35C63511F.jpg
cover: /img/5E1835FEA121BA57EB34ED5FF7C38167.jpg
---

# 前言
**这一节内容可能会涉及到一些之前所学习的相关知识，如果你还有不明白的，可以去温习一下之前所学[C++基础教程](https://blog.toumatou.cn/categories/%E7%BC%96%E7%A8%8B/C-%E6%95%99%E7%A8%8B/C-%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B/)**



# C++ vector容器
在 C++ 中，`vector` 是一种非常强大的数据结构，它和数组类似，但功能更灵活。**它是一个可以动态调整大小的数组**，不需要你手动管理内存，是 C++ 标准模板库（STL）的一部分。

如果你需要一个可以自动扩展的数组来存储数据，`vector` 是你的首选。

---

## **为什么用 `vector` 而不是数组？**

数组虽然可以存储元素，但有几个缺点：
1. **固定大小**：数组在创建时必须指定大小，无法动态扩展或缩小。
2. **手动管理内存**：如果需要动态数组，你必须手动分配和释放内存，容易出错。
3. **功能有限**：数组没有直接提供添加、删除、查找等功能。

而 `vector` 可以解决这些问题：
- **动态大小**：`vector` 可以根据需要自动增长或缩小。
- **连续存储**：`vector` 的元素存储在连续的内存中，因此访问速度快。
- **灵活接口**：提供了丰富的操作方法，如添加、删除、清空等。

---

## **如何使用 `vector`？**

### 1. **引入头文件**
要使用 `vector`，必须包含 `<vector>` 头文件：
```cpp
#include <vector>
```

---

### 2. **创建 `vector`**
创建 `vector` 和声明普通变量一样简单。

#### 示例：创建一个存储整数的 `vector`
```cpp
std::vector<int> myVector; // 创建一个空的整数向量
```

#### 示例：创建时指定大小
```cpp
std::vector<int> myVector(5); // 创建一个大小为5的向量，初始值为默认值（0）
std::vector<int> myVector(5, 10); // 创建一个大小为5的向量，每个元素初始值为10
```

#### 示例：使用列表初始化
```cpp
std::vector<int> myVector = {1, 2, 3, 4, 5}; // 创建一个包含元素1, 2, 3, 4, 5的向量
```

---

### 3. **向 `vector` 添加元素**
使用 `push_back` 方法，可以在 `vector` 的末尾添加元素：
```cpp
myVector.push_back(7); // 向向量末尾添加元素7
```

---

### 4. **访问 `vector` 中的元素**
你可以通过两种方式访问元素：
- **下标操作符 `[]`**：直接通过下标访问元素（从 0 开始计数）。
- **`at()` 方法**：更安全的访问方法，会检查下标是否合法。

#### 示例：
```cpp
int x = myVector[0];      // 获取第一个元素
int y = myVector.at(1);   // 获取第二个元素
```

---

### 5. **获取 `vector` 的大小**
使用 `size()` 方法可以得到 `vector` 中的元素数量：
```cpp
int size = myVector.size(); // 获取向量大小
```

---

### 6. **遍历 `vector`**
你可以用多种方式遍历 `vector`：

#### 方法 1：普通 for 循环
```cpp
for (size_t i = 0; i < myVector.size(); ++i) {
    std::cout << myVector[i] << " ";
}
```

#### 方法 2：迭代器
```cpp
for (auto it = myVector.begin(); it != myVector.end(); ++it) {
    std::cout << *it << " ";
}
```

#### 方法 3：范围循环（推荐）
```cpp
for (int element : myVector) {
    std::cout << element << " ";
}
```

---

### 7. **删除元素**
使用 `erase()` 方法可以删除某个位置的元素：
```cpp
myVector.erase(myVector.begin() + 2); // 删除第三个元素（下标为2）
```

---

### 8. **清空 `vector`**
使用 `clear()` 方法可以清空 `vector` 中的所有元素：
```cpp
myVector.clear(); // 清空向量
```

---

## **完整实例**

以下代码展示了如何创建一个 `vector`，添加、访问、删除、清空元素，并输出其内容：

```cpp
#include <iostream>
#include <vector>

int main() {
    // 创建一个空的整数向量
    std::vector<int> myVector;

    // 添加元素到向量中
    myVector.push_back(3);
    myVector.push_back(7);
    myVector.push_back(11);
    myVector.push_back(5);

    // 输出向量中的元素
    std::cout << "Elements in the vector: ";
    for (int element : myVector) {
        std::cout << element << " ";
    }
    std::cout << std::endl;

    // 访问第一个和第二个元素
    std::cout << "First element: " << myVector[0] << std::endl;
    std::cout << "Second element: " << myVector.at(1) << std::endl;

    // 获取向量大小
    std::cout << "Size of the vector: " << myVector.size() << std::endl;

    // 删除第三个元素
    myVector.erase(myVector.begin() + 2);

    // 输出删除后的向量
    std::cout << "Elements in the vector after erasing: ";
    for (int element : myVector) {
        std::cout << element << " ";
    }
    std::cout << std::endl;

    // 清空向量
    myVector.clear();
    std::cout << "Size of the vector after clearing: " << myVector.size() << std::endl;

    return 0;
}
```

---

### **运行结果：**
```
Elements in the vector: 3 7 11 5
First element: 3
Second element: 7
Size of the vector: 4
Elements in the vector after erasing: 3 7 5
Size of the vector after clearing: 0
```

---

## **总结**
1. **`vector` 是一个动态数组**，可以根据需要自动扩展或缩小。
2. 使用方便：
   - 添加元素：`push_back()`
   - 删除元素：`erase()`
   - 访问元素：`[]` 或 `at()`
   - 遍历：普通循环、迭代器、范围循环。
3. **适用场景**：
   - 需要动态调整大小的数组。
   - 需要频繁在末尾添加或移除元素。
   - 需要高效的随机访问操作。

`vector` 是 C++ 开发中最常用的容器之一，简单易用且功能强大，几乎可以胜任所有需要动态数组的场景。
