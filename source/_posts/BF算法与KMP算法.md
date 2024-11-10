---
title: BF算法与KMP算法
date: 2022-1-17 20:01:44
top_img: /img/2E7ACD823C75B4E15C31DEC35C63511F.jpg
cover: /img/3175F7D0E3276DAD663A4622838F4915.jpg
categories:
  - 编程
  - 数据结构
  - C语言
tags: 
  - 编程
  - 数据结构
swiper_index: 3  
---
我们来聊聊数据结构中两种在字符串中寻找子串的方法：暴力匹配（BF算法）和KMP算法。**这两种方法都像是在玩一个“找茬”游戏**，目的是在一个大字符串（我们称之为主串）中找到一个小字符串（我们称之为模式串）出现的位置。

我们先举一个例子：
**假设主串为 "ababcabcacbab"，模式串为 "abcac"**

## 暴力匹配（BF算法）
**BF算法，也称为暴力匹配算法，是一种简单的字符串匹配方法。它的基本思想是从主串的每一个字符开始，逐个与模式串的字符进行比较，直到找到匹配的字符或比较完整个模式串。如果模式串中有某个字符不匹配，BF算法会回溯到主串的下一个字符重新开始匹配。想象一下，你手上有一张小图片（模式串），你想在一个巨大的画布（主串）上找到这张图片。使用暴力匹配的方法，你会从画布的最左边开始，试着把小图片的每个角对准画布上的每个点，看看是否能完全匹配。如果不匹配，你就向右移动一点，再试一次。这个过程会一直重复，直到你找到匹配的地方，或者把整个画布都试一遍。**

**原理**
**1.从主串的第一个字符开始，与模式串的第一个字符进行比较。**
**2.如果相等，则继续比较主串和模式串的下一个字符。**
**3.如果不相等，则主串指针回溯到上次匹配的首位的下一位，模式串指针回到开头，重新开始匹配。**
**4.重复上述过程，直到找到匹配的子串或主串遍历完毕。**

以下是代码演示：

```C
    #include <stdio.h>
    #include <string.h>

    // 暴力匹配算法
    int BF(const char *S, const char *T) {
        int i, j;
        int n = strlen(S);
        int m = strlen(T);

        for (i = 0; i <= n - m; i++) {
            j = 0;
            while (j < m && S[i + j] == T[j]) {
                j++;
            }
            if (j == m) {
                return i; // 找到匹配的位置
            }
        }
        return -1; // 没有找到匹配
    }

    int main() {
        char S[] = "ababcabcacbab";
        char T[] = "abcac";
        int pos = BF(S, T);
        if (pos != -1) {
            printf("找到匹配，位置：%d\n", pos);
        } else {
            printf("没有找到匹配\n");
        }
        return 0;
    }
```

## KMP算法（Knuth-Morris-Pratt算法）
**KMP算法是一种改进的字符串匹配算法。它通过预处理模式串，构建部分匹配表（next数组），在匹配过程中利用已经匹配的信息，避免重复比较，从而提高匹配效率。KMP算法更聪明一些。它在开始全面搜索之前，会先研究一下小图片（模式串），找出一些特征，这样在大画布（主串）上搜索时，就能跳过一些明显不需要检查的地方。这就像是你记住了小图片的一些特征，然后在大画布上快速地找到可能匹配的地方。**

**KMP算法的核心是预处理模式串，创建一个“部分匹配表”，这个表告诉我们，当某个位置不匹配时，我们应该跳到模式串的哪个位置继续比较.**

**原理**
**1.预处理模式串，构建next数组。next数组记录了模式串中每个位置的最长相等前后缀的长度。**
**2.在匹配过程中，当遇到不匹配时，利用next数组跳过已经匹配的部分，避免回溯。**

还是刚才的例子，以下是代码演示：

```C
#include <stdio.h>
#include <string.h>

// 计算部分匹配表
void computeNext(const char *T, int *next) {
    int m = strlen(T);
    next[0] = 0;
    int j = 0;
    for (int i = 1; i < m; i++) {
        while (j > 0 && T[i] != T[j]) {
            j = next[j - 1];
        }
        if (T[i] == T[j]) {
            j++;
        }
        next[i] = j;
    }
}

// KMP算法
int KMP(const char *S, const char *T) {
    int n = strlen(S);
    int m = strlen(T);
    int *next = (int *)malloc(sizeof(int) * m);
    computeNext(T, next);
    int i = 0, j = 0;
    while (i < n && j < m) {
        if (S[i] == T[j]) {
            i++;
            j++;
        }
        if (j == m) {
            free(next);
            return i - j; // 找到匹配的位置
        } else if (i < n && S[i] != T[j]) {
            if (j != 0) {
                j = next[j - 1];
            } else {
                i++;
            }
        }
    }
    free(next);
    return -1; // 没有找到匹配
}

int main() {
    char S[] = "ababcabcacbab";
    char T[] = "abcac";
    int pos = KMP(S, T);
    if (pos != -1) {
        printf("找到匹配，位置：%d\n", pos);
    } else {
        printf("没有找到匹配\n");
    }
    return 0;
}
```
## 总结一下：
**BF算法：简单易懂，但效率较低，时间复杂度为 O(n⋅m)**
**KMP算法：通过预处理模式串，利用next数组避免重复比较，提高匹配效率，时间复杂度为O(n+m)**