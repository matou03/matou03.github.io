---
title: C语言字符串
date: 2025-02-04 17:52:01
tags:
  - 编程
  - C程序
categories:
  - 编程
  - C教程 
  - C基础教程
---
# 👇😊 **C语言字符串** 😊👇  

---

## **🌈 1. 字符串是什么？**
想象你有一串**珍珠项链**📿，每颗珍珠代表一个字符，最后一颗是特殊的**透明珠子**（`\0`）表示项链结束。  
- **本质**：以 `\0` 结尾的字符数组  
- **特点**：必须手动管理内存，没有自动扩容！  

---

## **🌈 2. 字符串的创建与初始化**
### **2.1 两种初始化方式**  
- **方式1：逐个字符初始化**  
```c
char str1[7] = {'H', 'e', 'l', 'l', 'o', '!', '\0'}; // 必须手动加\0
```
- **方式2：字符串字面量**（推荐 ✅）  
```c
char str2[] = "Hello!"; // 自动添加\0，数组长度=字符数+1 → 7
```

⚠️ **易错点**：  
```c
char str3[5] = "Hello"; ❌ // 长度不够（需要6字节：5字符+\0）
```

---

## **🌈 3. 字符串的输入与输出**
### **3.1 输入字符串**
- **使用 `scanf`（有空格会截断）**  
```c
char name[20];
printf("请输入名字：");
scanf("%s", name); // 输入 "Anna Smith" → 只能读取"Anna"
```

- **使用 `fgets`（可包含空格）**  
```c
printf("请输入全名：");
fgets(name, sizeof(name), stdin); // 输入 "Anna Smith" → 完整读取
```

### **3.2 输出字符串**
```c
printf("名字是：%s\n", name); // 输出整个字符串直到遇到\0
```

---

## **🌈 4. 常用字符串函数详解**  
### **4.1 字符串长度：`strlen`**  
```c
char str[] = "Hello";
int len = strlen(str); // len = 5（不算\0）
```

⚠️ **陷阱**：若字符串未以 `\0` 结尾，`strlen` 会一直找直到内存中的 `\0` → 导致错误！

---

### **4.2 字符串复制：`strcpy`**  
```c
char src[] = "Copy me!";
char dest[20];
strcpy(dest, src); // dest = "Copy me!"
```

💥 **危险操作**：目标数组空间不足 → 缓冲区溢出！  
```c
char dest[5];
strcpy(dest, "Hello World"); ❌ // dest只有5字节，装不下！
```

✅ **安全替代**：`strncpy`  
```c
strncpy(dest, src, sizeof(dest)-1); // 限制最大复制长度
dest[sizeof(dest)-1] = '\0'; // 手动加\0
```

---

### **4.3 字符串连接：`strcat`**  
```c
char str1[20] = "Hello";
char str2[] = " World!";
strcat(str1, str2); // str1 = "Hello World!"
```

💥 **危险操作**：目标数组空间不足 → 溢出！  
```c
char str1[10] = "Hello";
strcat(str1, " World!"); ❌ // 总长度超过10！
```

✅ **安全替代**：`strncat`  
```c
strncat(str1, str2, sizeof(str1)-strlen(str1)-1); // 计算剩余空间
```

---

### **4.4 字符串比较：`strcmp`**  
- **比较规则**：按ASCII码逐个字符比较  
```c
int result = strcmp("apple", "apple");   // 0 → 相等
int result = strcmp("apple", "banana");  // 负数 → "apple" < "banana"
int result = strcmp("zoo", "apple");     // 正数 → "zoo" > "apple"
```

⚠️ **易错点**：不能用 `==` 比较字符串！  
```c
if(str1 == str2) { ... } ❌ // 比较的是地址，不是内容！
if(strcmp(str1, str2) == 0) { ... } ✅ // 正确方式
```

---

### **4.5 查找字符：`strchr`**  
```c
char *pos = strchr("Hello", 'l'); // 找到第一个'l'的位置
if(pos != NULL) {
    printf("找到字符，位置：%ld\n", pos - "Hello"); // 输出2（索引从0开始）
}
```

---

### **4.6 查找子串：`strstr`**  
```c
char *pos = strstr("Hello World", "World"); 
if(pos != NULL) {
    printf("找到子串，位置：%ld\n", pos - "Hello World"); // 输出6
}
```

---

## **🌈 5. 代码实例全解析**  
### **示例代码**  
```c
#include <stdio.h>
#include <string.h>

int main() {
    char str1[14] = "runoob"; // 实际长度7（6字符+\0）
    char str2[14] = "google"; // 实际长度7
    char str3[14];
    int len;

    // 复制：str3 = str1
    strcpy(str3, str1); // 正确，str3足够大
    printf("复制结果：%s\n", str3); // 输出runoob

    // 连接：str1 = str1 + str2
    strcat(str1, str2); // 总长度6+6=12 +1(\0) =13 <14 → 安全
    printf("连接结果：%s\n", str1); // 输出runoobgoogle

    // 计算长度
    len = strlen(str1); // 12（不含\0）
    printf("长度：%d\n", len);

    return 0;
}
```

## **逐行解释**  
1. **声明数组**  
   - `str1[14]` 初始化为 `"runoob"` → 实际占用7字节（6字符 + `\0`）  
   - `str2[14]` 同理  
   - `str3[14]` 未初始化，用于存储复制结果  

2. **复制操作 `strcpy`**  
   - 将 `str1` 的内容复制到 `str3`，`str3` 变为 `"runoob\0"`  

3. **连接操作 `strcat`**  
   - 将 `str2` 的内容追加到 `str1` 末尾  
   - 原 `str1` 内容为 `"runoob\0"` → 追加后变为 `"runoobgoogle\0"`（总长度12字符 + `\0`）  

4. **计算长度 `strlen`**  
   - 返回 `str1` 中 `\0` 前的字符数 → 12  

---

## **🌈 6. 常见错误大集合**  
1. **数组越界**  
```c
char s[5] = "Hello"; ❌ // 需要6字节（5字符+\0）
```

2. **忘记 `\0`**  
```c
char s[] = {'a', 'b', 'c'}; // 没有\0 → 不是合法字符串！
printf("%s", s); // 可能输出乱码或崩溃！
```

3. **使用未初始化的指针**  
```c
char *s;
strcpy(s, "Hello"); ❌ // s未指向有效内存！
```

---

## **🌈 7. 综合练习**  
### **练习1：字符串反转**  
写一个函数 `void reverseString(char str[])`，将输入的字符串原地反转。  
**示例**：输入 `"Hello"` → 输出 `"olleH"`  

### **练习2：统计单词数**  
写一个函数 `int countWords(char str[])`，统计字符串中的单词数（假设单词间用空格分隔）。  
**示例**：输入 `"Hello World C"` → 输出3  

### **练习3：错误修复**  
以下代码有什么问题？  
```c
char s1[10] = "Hello";
char s2[] = "World!";
strcat(s1, s2); // 试图连接成"HelloWorld!"
```

---

## **🎯 参考答案**  
### **练习1**：  
```c
void reverseString(char str[]) {
    int len = strlen(str);
    for(int i=0; i<len/2; i++) {
        char temp = str[i];
        str[i] = str[len-1-i];
        str[len-1-i] = temp;
    }
}
```

### **练习2**：  
```c
int countWords(char str[]) {
    int count = 0;
    int inWord = 0; // 0表示不在单词中，1表示在单词中
    for(int i=0; str[i] != '\0'; i++) {
        if(str[i] == ' ') {
            inWord = 0;
        } else if(inWord == 0) {
            count++;
            inWord = 1;
        }
    }
    return count;
}
```

### **练习3**：  
**错误**：`s1` 初始长度10，`"Hello"`占6字节（含\0），连接 `"World!"`（7字节）总长度6+6=12+1=13 → 超出s1容量！  
**修正**：增大 `s1` 的容量，如 `char s1[20];`  

---

🚀 **总结**：  
- 字符串是 `\0` 结尾的字符数组  
- 操作字符串要时刻注意内存安全  
- 掌握 `strcpy`、`strcat`、`strcmp` 等函数，避免常见错误  

**记住**：多练习调试，字符串操作会越来越熟练！ 💻🔍