---
title: Python 列表（List）
date: 2025-10-29 10:40:12
tags: 
  - 编程
categories:
  - 编程
  - Python 教程
---

# Python 列表（List）

你刚学会整理自己的书包的时候，你会把课本、笔记本、铅笔盒都放在里面，它们虽然各不相同，但都被整齐地收纳在一起，方便你随时取用。在 Python 中，**列表** 就扮演了类似书包或者说数据收纳盒的角色

## 一、什么是序列？列表从哪里来？

在 Python 中，有一类非常基础和重要的数据结构，我们称之为 **序列 (Sequence)**。你可以把序列理解成一种排列方式。它把多个数据元素按照一定的顺序一个挨着一个地排起来

**Python 中有好几种内置的序列类型**，就像书包有不同的款式，比如双肩包、单肩包。在这些序列类型中，**列表 (List)** 和 **元组 (Tuple)** 是我们最最常用的两种。而今天，我们的主角就是**列表 (List)**

## 二、列表能做什么？基本操作初体验

既然列表是收纳盒，那我们就来看看这个收纳盒能帮我们做些什么基础的事情：

1.  **索引 (Indexing)：找到特定位置的元素**
    *   你的书包里，第一格放课本，第二格放笔记本。第几格就是一种简单的索引
    *   在 Python 列表中，每个元素也都有自己的位置编号，我们称之为 **索引**。
    *   **需要注意的是，Python 列表的索引是从 `0` 开始的！** 也就是说，第一个元素的索引是 `0`，第二个是 `1`，以此类推。

2.  **切片 (Slicing)：获取一部分元素**
    *   如果你想从书包里拿出“从第二格到第四格”的所有东西，这就类似列表的切片操作。
    *   切片就是从列表中切出连续的一部分元素，形成一个新的列表。

3.  **拼接 (Concatenation)：把两个列表连起来**
    *   你有一个小盒子装铅笔，一个小盒子装橡皮，现在想把它们的东西合并到一个大盒子里，这就类似列表的拼接。
    *   我们可以用 `+` 号把两个列表“加”起来，形成一个包含了两个列表所有元素的新列表。

4.  **重复 (Repetition)：让列表内容重复出现**
    *   如果你想在书包里放 3 本一模一样的练习本，列表的重复操作就能帮你快速实现。
    *   我们可以用 `*` 号让一个列表里的所有元素重复若干次，形成一个新的列表。

5.  **检查成员 (Membership Check)：判断元素是否在列表中**
    *   你想知道书包里有没有带橡皮，就会翻一翻看看。
    *   对于列表，我们可以很方便地检查某个元素是不是在这个列表里面。

除了这些，Python 还为我们提供了一些内置的小工具来操作列表，比如

*   **确定序列的长度 (Length)**。数一数你的书包里一共有多少件东西
*   **找出最大和最小的元素 (Max & Min)**。在一堆数字中，快速找到最大的那个和最小的那个

## 三、创建你的第一个列表

**列表的模样**，列表通常写在一对 **方括号 `[]`** 里面，列表中的元素之间用 **逗号 `,`** 分隔开

**列表的特点**，列表里面放的元素，也叫数据项。**不需要是同一种类型**！你可以在一个列表里放数字、文字、甚至以后我们会学到的其他复杂对象

### 看几个例子，你就明白了：

```python
# 例子 1：一个包含字符串和数字的列表
list1 = ['physics', 'chemistry', 1997, 2000]
# 这里有 'physics'（物理，字符串类型）、'chemistry'（化学，字符串类型）、1997（数字）、2000（数字）

# 例子 2：一个只包含数字的列表
list2 = [1, 2, 3, 4, 5]
# 这里面全是整数 1, 2, 3, 4, 5

# 例子 3：一个只包含字符串的列表
list3 = ["a", "b", "c", "d"]
# 这里面全是单个字母的字符串 "a", "b", "c", "d"
```

在上面的代码中，`list1`、`list2`、`list3` 就是我们创建的三个列表变量。我们用赋值符号 `=` 把右边创建好的列表“装”进了这些变量里。

就像我们前面说的，列表的索引也是从 0 开始，所以 `list2` 中的第一个元素 `1` 的索引就是 `0`，`2` 的索引就是 `1`，依此类推。

---


## 四、访问列表中的值

现在，最关键的问题是：**怎么从这个收纳盒里拿出我们想要的特定物品？**

### 4.1 索引 (Indexing)

还记得我们说过，列表里的元素是按顺序排好队的吗？就像电影院的座位一样，每个座位都有自己的号码。列表里的每个元素也有一个唯一的座位号，我们称之为 **“索引 (Index)”**。通过这个索引，我们就能精确地找到并取出对应位置的元素。

**最最重要的规则（敲黑板！）：**
在 Python 的列表中，**第一个元素的索引是 `0`，而不是 `1`！** 第二个元素的索引是 `1`，第三个是 `2`，以此类推。

**格式：**
要访问列表中的某个元素，我们使用 **列表名** 后面跟一个 **方括号 `[]`**，方括号里面写上该元素的 **索引值**。

```
列表名[索引值]
```

**动手试一试：**

```python
# 我们先创建一个列表
list1 = ['physics', 'chemistry', 1997, 2000]
list2 = [1, 2, 3, 4, 5, 6, 7]

# 现在，我们来访问 list1 中的第一个元素
# 第一个元素的索引是 0
print("list1[0]: ", list1[0])  # 这行代码的意思是：打印 list1 中索引为 0 的元素

# 我们再来访问 list2 中的第二个元素
# 第二个元素的索引是 1
print("list2[1]: ", list2[1])  # 打印 list2 中索引为 1 的元素
```

**你觉得会输出什么呢？**
运行上面的代码，你会看到：
```
list1[0]:  physics
list2[1]:  2
```
是不是和你想的一样？`list1[0]` 就是取 `list1` 的第一个元素 `'physics'`，`list2[1]` 就是取 `list2` 的第二个元素 `2`。

### 4.2 切片 (Slicing)

有时候，我们不仅仅想取出单个元素，可能想一下子取出列表中某一段连续的元素，比如从第2个到第5个。这时候，**切片 (Slicing)** 操作就非常有用了！

切片就像是用一把小刀，从列表这个大蛋糕上，切下其中的一小块。

**格式：**
切片的格式是在方括号中使用冒号 `:` 来分隔起始索引和结束索引：

```
列表名[起始索引 : 结束索引]
```

*   **起始索引 (start):** 表示从这个索引开始取（**包含**这个索引的元素）。
*   **结束索引 (end):** 表示取到这个索引**之前**结束（**不包含**这个索引的元素）。

**动手试一试：**

我们还用上面的 `list2 = [1, 2, 3, 4, 5, 6, 7]`

```python
# 假设我们想取出 list2 中，从索引 1 到索引 5 之前的元素
# 也就是想取出第2个元素到第5个元素（因为索引从0开始嘛）
print("list2[1:5]: ", list2[1:5])
```

**思考一下：**
`list2` 的元素和对应的索引是：
元素: 1, 2, 3, 4, 5, 6, 7
索引: 0, 1, 2, 3, 4, 5, 6

`list2[1:5]` 表示从索引 `1` (元素 `2`) 开始，取到索引 `5` **之前**结束。索引 `5` 对应的元素是 `6`，所以不包含 `6`。那么取到的就是索引 `1,2,3,4` 对应的元素 `2,3,4,5`。

**运行结果：**
```
list2[1:5]:  [2, 3, 4, 5]
```
完美！和我们分析的一样。

**切片的小秘密：**
*   如果 **起始索引** 省略（即 `list2[:5]`），表示从列表的**开头**（索引0）开始取，直到结束索引之前。
*   如果 **结束索引** 省略（即 `list2[1:]`），表示从起始索引开始取，一直取到列表的**末尾**（包含最后一个元素）。
*   如果两者都省略（即 `list2[:]`），则表示取**整个列表**（会创建一个原列表的副本）。

比如：
```python
print("list2[:3]: ", list2[:3])  # 从开头取到索引3之前：元素 1,2,3
print("list2[4:]: ", list2[4:])  # 从索引4开始取到末尾：元素 5,6,7
```
输出会是：
```
list2[:3]:  [1, 2, 3]
list2[4:]:  [5, 6, 7]
```

---


## 五、更新列表

我们的收纳盒不是一成不变的。有时候我们想把里面的旧东西换成新的，有时候我们想往里面再加点新东西。Python 列表很灵活，支持这些操作

### 5.1 修改列表中的元素

如果你想把列表中某个位置的元素换成另一个元素，非常简单，就像给那个位置重新赋值一样。

**格式：**
```
列表名[要修改元素的索引] = 新的值
```

**动手试一试：**

```python
# 假设我们有一个列表，记录一些水果
fruits = ['苹果', '香蕉', '橙子', '梨']
print("修改前的列表:", fruits)  # 输出: 修改前的列表: ['苹果', '香蕉', '橙子', '梨']

# 哎呀，我不喜欢梨，想把第三个索引（也就是第四个元素，因为索引从0开始）的 '梨' 换成 '葡萄'
# '梨' 在列表中的索引是 3
fruits[3] = '葡萄'
print("修改后的列表:", fruits)  # 输出: 修改后的列表: ['苹果', '香蕉', '橙子', '葡萄']
```

看，通过指定索引，我们轻松地把 `'梨'` 改成了 `'葡萄'`！

### 5.2 添加列表项

如果我们想在列表的 **末尾** 再添加一个新的元素，`append()` 方法就是我们的好帮手。

**什么是方法 (Method)？**
你可以暂时把方法理解成 **列表自带的一个小功能或者小工具**。`append()` 这个工具的功能就是在列表的最后面追加一个元素。

**格式：**
```
列表名.append(要添加的新元素)
```

**动手试一试：**

```python
# 我们先来创建一个空列表（里面什么都没有）
empty_list = []
print("空列表:", empty_list)  # 输出: 空列表: []

# 现在，我们用 append() 方法给它加点东西
empty_list.append('Google')  # 追加字符串 'Google'
empty_list.append('Runoob')  # 再追加字符串 'Runoob'

# 看看现在列表变成什么样了
print("添加元素后的列表:", empty_list)  # 输出: 添加元素后的列表: ['Google', 'Runoob']
```

是不是很神奇？一个空列表，通过 `append()` 方法，我们一步步给它添加了新元素。`append()` 总是把新元素放在列表的最后面。

**小贴士：**
`append()` 方法非常常用，记得它是 **在列表末尾添加**。会在后续章节中详细介绍更多列表的方法。

---

## 六、删除列表元素

有时候，列表里的某些元素可能过时了，或者我们不小心放错了东西，这时候就需要把它们从列表中删除。Python 提供了多种方式来删除列表元素，我们先来学习最直接的一种：使用 `del` 语句。

### 6.1 使用 `del` 语句删除元素

`del` 是 Python 中的一个关键字，它的功能之一就是删除变量或者数据结构中的元素。对于列表，我们可以用 `del` 语句配合 **索引** 来删除列表中指定位置的元素。

**格式：**
```
del 列表名[要删除元素的索引]
```

**动手试一试：**

```python
# 我们有一个列表
list1 = ['physics', 'chemistry', 1997, 2000]
print("删除前的 list1:", list1)  # 输出: 删除前的 list1: ['physics', 'chemistry', 1997, 2000]

# 假设我们想删除索引为 2 的元素，也就是数字 1997
del list1[2]

print("After deleting value at index 2:")  # 这行是提示信息，告诉你删除了索引2的元素之后
print("删除后的 list1:", list1)  # 输出: 删除后的 list1: ['physics', 'chemistry', 2000]
```

**过程解析：**
*   原始列表 `list1` 是 `['physics', 'chemistry', 1997, 2000]`
*   元素 `'physics'` 的索引是 0，`'chemistry'` 是 1，`1997` 是 2，`2000` 是 3。
*   我们执行 `del list1[2]`，就是明确告诉 Python：“请删除 `list1` 中索引为 2 的那个元素。”
*   于是，`1997` 就被从列表中移除了。剩下的元素会自动往前靠拢，填补空缺。所以删除后，`2000` 的索引就变成了 2。

### 6.2 更多删除方法预告：`remove()` 方法

除了用 `del` 语句根据索引删除，Python 列表还有其他删除元素的方法。比如，我们后面会学到的 `remove()` 方法。`remove()` 方法可以直接根据 **元素的值** 来删除，而不是索引。

例如，如果你知道列表里有一个元素叫 `'apple'`，但不确定它在哪个位置，就可以用 `remove('apple')` 来尝试删除它。

**我们会在后续的章节中详细讨论 `remove()` 方法以及其他相关方法（比如 `pop()`）的使用。**

---


## 七、Python 列表脚本操作符

列表虽然是收纳盒，但它也支持一些类似数字或字符串的运算操作。这些操作符能让我们更方便地操作列表。

### 7.1 `+` 号：组合列表（列表拼接）

`+` 号（加号）可以把两个列表“拼接”在一起，形成一个**新的列表**。原来的两个列表不会发生改变。

**就像把两个小收纳盒里的东西倒在一起，组成一个新的大收纳盒。**

| Python 表达式         | 结果                               | 描述                 |
| :-------------------- | :--------------------------------- | :------------------- |
| `[1, 2, 3] + [4, 5, 6]` | `[1, 2, 3, 4, 5, 6]`               | 将两个列表组合成一个新列表 |

**动手试一试：**
```python
list_a = [1, 2, 3]
list_b = [4, 5, 6]
combined_list = list_a + list_b
print("组合后的列表:", combined_list)  # 输出: 组合后的列表: [1, 2, 3, 4, 5, 6]
print("原来的 list_a:", list_a)  # 输出: 原来的 list_a: [1, 2, 3] (没变)
print("原来的 list_b:", list_b)  # 输出: 原来的 list_b: [4, 5, 6] (没变)
```

### 7.2 `*` 号：重复列表

`*` 号可以让列表中的所有元素重复指定的次数，形成一个**新的列表**。

**就像你有一个模板，然后复制粘贴了好几次。**

| Python 表达式         | 结果                                       | 描述                 |
| :-------------------- | :----------------------------------------- | :------------------- |
| `['Hi!'] * 4`         | `['Hi!', 'Hi!', 'Hi!', 'Hi!']`             | 将列表中的元素重复4次 |

**动手试一试：**
```python
greeting = ['Hi!']
repeated_greeting = greeting * 4
print("重复后的列表:", repeated_greeting)  # 输出: 重复后的列表: ['Hi!', 'Hi!', 'Hi!', 'Hi!']
```

### 7.3 `len()` 函数

`len()` 是一个内置函数，它可以告诉我们列表中一共有多少个元素，也就是列表的长度。

| Python 表达式         | 结果                                       | 描述                 |
| :-------------------- | :----------------------------------------- | :------------------- |
| `len([1, 2, 3])`      | `3`                                        | 列表中元素的个数     |

**动手试一试：**
```python
numbers = [10, 20, 30, 40]
print("列表 numbers 有", len(numbers), "个元素")  # 输出: 列表 numbers 有 4 个元素
```

### 7.4 `in` 关键字

`in` 关键字可以用来检查某个元素**是否存在于**列表中。如果存在，它会返回 `True`（真），否则返回 `False`（假）。这在我们想快速查找某个东西是否在列表里时非常有用！

| Python 表达式         | 结果                                       | 描述                 |
| :-------------------- | :----------------------------------------- | :------------------- |
| `3 in [1, 2, 3]`      | `True`                                     | 3 是列表中的元素     |
| `5 in [1, 2, 3]`      | `False`                                    | 5 不是列表中的元素   |

**动手试一试：**
```python
fruits = ['苹果', '香蕉', '橙子']
print('苹果' in fruits)  # 输出: True (苹果在列表里)
print('西瓜' in fruits)  # 输出: False (西瓜不在列表里)
```

### 7.5 `for` 循环

我们可以使用 `for` 循环来**遍历**列表中的每一个元素，逐个处理它们。这是非常常用的操作。

| Python 表达式                                  | 结果（打印出来） | 描述                 |
| :--------------------------------------------- | :--------------- | :------------------- |
| `for x in [1, 2, 3]: print(x, end=' ')` | `1 2 3`          | 依次取出列表中的元素并打印 |

**动手试一试：**
```python
print("列表中的元素是:")
for x in [1, 2, 3]:
    print(x, end=' ')  # end=' ' 是为了让打印的元素在一行，用空格隔开，而不是每个元素占一行
# 输出: 列表中的元素是:
#      1 2 3
```

## 八、Python 列表截取（高级索引）

我们之前学过通过索引获取单个元素和通过 `[start:end]` 获取切片,即，一连串元素。这里我们再补充一些更灵活的截取方式，特别是关于**负数索引**的使用

负数索引是什么意思呢？它允许我们从列表的**末尾**开始计数。

*   `L[-1]` 表示列表的**最后一个**元素。
*   `L[-2]` 表示列表的**倒数第二个**元素。
*   以此类推。

### 列表截取实例：

假设我们有一个列表：
```python
L = ['Google', 'Runoob', 'Taobao']  # 索引 0: 'Google', 1: 'Runoob', 2: 'Taobao'
```

| Python 表达式 | 结果          | 描述                                   |
| :------------ | :------------ | :------------------------------------- |
| `L[2]`        | `'Taobao'`    | 读取列表中**第三个**元素（索引为2）         |
| `L[-2]`       | `'Runoob'`    | 读取列表中**倒数第二个**元素（索引为-2）     |
| `L[1:]`       | `['Runoob', 'Taobao']` | 从**索引1开始**截取到列表末尾（包含索引1的元素） |
| `L[:-1]`      | `['Google', 'Runoob']` | 从列表开头截取到**倒数第一个元素之前**（不包含最后一个元素） |
| `L[:]`        | `['Google', 'Runoob', 'Taobao']` | 截取整个列表（相当于创建了原列表的一个副本） |

**动手试一试，加深理解：**
```python
L = ['Google', 'Runoob', 'Taobao']
print("L[2] =", L[2])       # 输出: L[2] = Taobao
print("L[-2] =", L[-2])     # 输出: L[-2] = Runoob
print("L[1:] =", L[1:])     # 输出: L[1:] = ['Runoob', 'Taobao']
print("L[:-1] =", L[:-1])   # 输出: L[:-1] = ['Google', 'Runoob']
print("L[:] =", L[:])       # 输出: L[:] = ['Google', 'Runoob', 'Taobao']
```

**小贴士：**
`L[start:end]` 中，`start` 是起始索引（包含），`end` 是结束索引（不包含）。
如果 `start` 省略（如 `L[:end]`），则默认从索引 `0` 开始。
如果 `end` 省略（如 `L[start:]`），则默认截取到列表末尾。

---



## 九、Python 列表函数 & 方法

Python 为列表提供了一些内置的 **函数 (Functions)** 和 **方法 (Methods)**，帮助我们更方便地操作列表。

**函数** 通常是独立的，可以直接调用，作用于列表。
**方法** 则是列表对象自带的“功能”，需要通过列表对象来调用，例如 `list.append()`。

我们先来了解常用的 **列表函数**。点击每个函数名称可以展开查看详细说明和示例。

### 9.1 列表函数速览

以下是一些常用的 Python 内置列表函数：

1.  <a href="#func-cmp" id="link-cmp"><code>cmp(list1, list2)</code></a>
    <details id="func-cmp">
    <summary><strong>Python List cmp() 方法</strong> (注意：Python 3 已移除该函数)</summary>

    **描述**
    `cmp()` 方法用于比较两个列表的元素。

    **语法**
    `cmp()` 方法语法：
    ```python
    cmp(list1, list2)
    ```

    **参数**
    *   `list1` -- 要比较的第一个列表。
    *   `list2` -- 要比较的第二个列表。

    **返回值**
    *   如果比较的元素是同类型的，则比较其值，返回结果：
        *   如果 `list1` 小于 `list2`，返回 **-1**。
        *   如果 `list1` 大于 `list2`，返回 **1**。
        *   如果 `list1` 等于 `list2`，返回 **0**。
    *   如果两个元素不是同一种类型，则检查它们是否是数字：
        *   如果是数字，执行必要的数字强制类型转换，然后比较。
        *   如果有一方的元素是数字，则另一方的元素“大”（数字是“最小的”）。
        *   否则，通过类型名字的字母顺序进行比较。
    *   如果有一个列表首先到达末尾，则另一个长一点的列表“大”。
    *   如果两个列表的所有元素都相等且长度相同，则返回 **0**。

    **实例**
    以下实例展示了 `cmp()` 函数的使用方法（注意：此代码在 Python 3 中会报错）：
    ```python
    #!/usr/bin/python
    # -*- coding: UTF-8 -*-

    list1, list2 = [123, 'xyz'], [456, 'abc']

    print(cmp(list1, list2))   # 输出: -1，因为 123 < 456
    print(cmp(list2, list1))   # 输出: 1，因为 456 > 123
    list3 = list2 + [786]      # list3 现在是 [456, 'abc', 786]
    print(cmp(list2, list3))   # 输出: -1，因为 list2 比 list3 短
    ```

    **注意**：
    `cmp()` 函数在 **Python 3.x 版本中已经被移除**。在 Python 3 中，比较两个列表可以直接使用关系运算符 `==`, `!=`, `<`, `<=`, `>`, `>=`，它们会按照元素的顺序和值进行比较，规则与 `cmp()` 类似，但返回布尔值 `True` 或 `False`。例如 `list1 < list2`。
    </details>

2.  <a href="#func-len" id="link-len"><code>len(list)</code></a>
    <details id="func-len">
    <summary><strong>Python len() 函数</strong></summary>

    **描述**
    `len()` 函数用于返回列表中元素的个数，即列表的长度。

    **语法**
    `len()` 函数语法：
    ```python
    len(list)
    ```

    **参数**
    *   `list` -- 要计算长度的列表。

    **返回值**
    一个整数，表示列表中元素的数量。

    **实例**
    以下实例展示了 `len()` 函数的使用方法：
    ```python
    fruits = ['苹果', '香蕉', '橙子', '葡萄']
    print("水果列表的长度是:", len(fruits))  # 输出: 水果列表的长度是: 4

    empty_list = []
    print("空列表的长度是:", len(empty_list))  # 输出: 空列表的长度是: 0
    ```
    </details>

3.  <a href="#func-max" id="link-max"><code>max(list)</code></a>
    <details id="func-max">
    <summary><strong>Python max() 函数</strong></summary>

    **描述**
    `max()` 函数用于返回列表中元素的最大值。列表中的元素必须是可比较的类型（例如，都是数字，或者都是字符串）。

    **语法**
    `max()` 函数语法：
    ```python
    max(list)
    ```

    **参数**
    *   `list` -- 要从中找出最大值的列表。

    **返回值**
    列表中最大的元素。

    **实例**
    以下实例展示了 `max()` 函数的使用方法：
    ```python
    numbers = [10, 25, 5, 42, 18]
    print("列表中最大的数字是:", max(numbers))  # 输出: 列表中最大的数字是: 42

    words = ['apple', 'banana', 'cherry', 'date']
    print("列表中按字母顺序最大的单词是:", max(words))  # 输出: 列表中按字母顺序最大的单词是: date (因为 'd' 在字母表中最靠后)
    ```

    **注意**：
    如果列表中包含不同类型且不可比较的元素（如同时包含数字和字符串），`max()` 函数会抛出 `TypeError` 错误。
    </details>

4.  <a href="#func-min" id="link-min"><code>min(list)</code></a>
    <details id="func-min">
    <summary><strong>Python min() 函数</strong></summary>

    **描述**
    `min()` 函数用于返回列表中元素的最小值。列表中的元素必须是可比较的类型。

    **语法**
    `min()` 函数语法：
    ```python
    min(list)
    ```

    **参数**
    *   `list` -- 要从中找出最小值的列表。

    **返回值**
    列表中最小的元素。

    **实例**
    以下实例展示了 `min()` 函数的使用方法：
    ```python
    numbers = [10, 25, 5, 42, 18]
    print("列表中最小的数字是:", min(numbers))  # 输出: 列表中最小的数字是: 5

    words = ['apple', 'banana', 'cherry', 'date']
    print("列表中按字母顺序最小的单词是:", min(words))  # 输出: 列表中按字母顺序最小的单词是: apple (因为 'a' 在字母表中最靠前)
    ```

    **注意**：
    与 `max()` 类似，如果列表中包含不同类型且不可比较的元素，`min()` 函数会抛出 `TypeError` 错误。
    </details>

5.  <a href="#func-list" id="link-list"><code>list(seq)</code></a>
    <details id="func-list">
    <summary><strong>Python list() 函数</strong></summary>

    **描述**
    `list()` 函数用于将一个可迭代对象（如元组、字符串、集合、字典等）转换为一个列表。如果不提供参数，它会创建一个空列表。

    **语法**
    `list()` 函数语法：
    ```python
    list(seq)
    ```

    **参数**
    *   `seq` (可选) -- 一个可迭代对象。如果省略，则返回空列表。

    **返回值**
    一个新的列表，包含了可迭代对象中的所有元素。

    **实例**
    以下实例展示了 `list()` 函数的使用方法：

    ```python
    # 将元组转换为列表
    my_tuple = (1, 2, 3, 'hello')
    my_list = list(my_tuple)
    print("从元组转换而来的列表:", my_list)  # 输出: 从元组转换而来的列表: [1, 2, 3, 'hello']

    # 将字符串转换为列表 (每个字符成为列表的一个元素)
    my_string = "Python"
    str_list = list(my_string)
    print("从字符串转换而来的列表:", str_list)  # 输出: 从字符串转换而来的列表: ['P', 'y', 't', 'h', 'o', 'n']

    # 创建空列表
    empty_list = list()
    print("空列表:", empty_list)  # 输出: 空列表: []
    ```
    </details>

---

这样，用户可以通过点击函数名来展开查看详细信息，平时则保持折叠状态，使页面更加整洁。注意 `cmp()` 函数在 Python 3 中已移除，我在描述中特别指出了这一点。


### 9.2 列表方法详解

列表方法是列表对象自带的函数，用于对列表进行各种操作。调用方式是 `列表名.方法名(参数)`。

1.  <a href="#method-append" id="link-append"><code>list.append(obj)</code></a>
    <details id="method-append">
    <summary><strong>Python List append() 方法</strong></summary>

    **描述**
    `append()` 方法用于在列表的**末尾**添加新的对象。

    **语法**
    `append()` 方法语法：
    ```python
    list.append(obj)
    ```

    **参数**
    *   `obj` -- 要添加到列表末尾的对象（可以是任何数据类型）。

    **返回值**
    该方法**没有返回值**（返回 `None`），但会**直接修改原来的列表**。

    **实例**
    以下实例展示了 `append()` 方法的使用方法：
    ```python
    aList = [123, 'xyz', 'zara', 'abc']
    print("添加前的列表:", aList)  # 输出: 添加前的列表: [123, 'xyz', 'zara', 'abc']

    aList.append(2009)  # 在列表末尾添加整数 2009
    print("Updated List : ", aList)  # 输出: Updated List :  [123, 'xyz', 'zara', 'abc', 2009]

    aList.append(['a', 'b'])  # 在列表末尾添加一个新列表 ['a', 'b']
    print("再次添加后的列表:", aList)  # 输出: 再次添加后的列表: [123, 'xyz', 'zara', 'abc', 2009, ['a', 'b']]
    ```
    </details>

2.  <a href="#method-count" id="link-count"><code>list.count(obj)</code></a>
    <details id="method-count">
    <summary><strong>Python List count() 方法</strong></summary>

    **描述**
    `count()` 方法用于统计某个元素在列表中**出现的次数**。

    **语法**
    `count()` 方法语法：
    ```python
    list.count(obj)
    ```

    **参数**
    *   `obj` -- 要统计出现次数的对象。

    **返回值**
    一个整数，表示指定元素在列表中出现的次数。如果元素不存在，则返回 `0`。

    **实例**
    以下实例展示了 `count()` 方法的使用方法：
    ```python
    fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple']

    # 统计 'apple' 出现的次数
    apple_count = fruits.count('apple')
    print("'apple' 在列表中出现了", apple_count, "次")  # 输出: 'apple' 在列表中出现了 3 次

    # 统计 'watermelon' 出现的次数（不存在）
    watermelon_count = fruits.count('watermelon')
    print("'watermelon' 在列表中出现了", watermelon_count, "次")  # 输出: 'watermelon' 在列表中出现了 0 次

    # 对于嵌套列表，count 不会递归查找
    nested_list = [1, 2, [1, 1], 1, [2]]
    print("1 在 nested_list 中出现了", nested_list.count(1), "次")  # 输出: 1 在 nested_list 中出现了 3 次 (只统计了顶层的 1)
    ```
    </details>

3.  <a href="#method-extend" id="link-extend"><code>list.extend(seq)</code></a>
    <details id="method-extend">
    <summary><strong>Python List extend() 方法</strong></summary>

    **描述**
    `extend()` 方法用于在列表的**末尾一次性追加另一个序列中的多个值**（可以是列表、元组、字符串等可迭代对象）。它会将可迭代对象中的每个元素单独添加到原列表中。

    **语法**
    `extend()` 方法语法：
    ```python
    list.extend(seq)
    ```

    **参数**
    *   `seq` -- 一个可迭代对象（如列表、元组、字符串、集合等），其元素将被添加到原列表的末尾。

    **返回值**
    该方法**没有返回值**（返回 `None`），但会**直接修改原来的列表**。

    **实例**
    以下实例展示了 `extend()` 方法的使用方法：
    ```python
    list1 = [1, 2, 3]
    list2 = [4, 5, 6]

    # 用 list2 扩展 list1
    list1.extend(list2)
    print("用 list2 扩展后的 list1:", list1)  # 输出: 用 list2 扩展后的 list1: [1, 2, 3, 4, 5, 6]

    # 用元组扩展列表
    tuple1 = ('a', 'b', 'c')
    list1.extend(tuple1)
    print("用元组扩展后的 list1:", list1)  # 输出: 用元组扩展后的 list1: [1, 2, 3, 4, 5, 6, 'a', 'b', 'c']

    # 用字符串扩展列表 (字符串的每个字符会被当作一个元素)
    str1 = "hello"
    list1.extend(str1)
    print("用字符串扩展后的 list1:", list1)  # 输出: 用字符串扩展后的 list1: [1, 2, 3, 4, 5, 6, 'a', 'b', 'c', 'h', 'e', 'l', 'l', 'o']
    ```

    **`append()` 与 `extend()` 的区别：**
    *   `append(obj)`：将 `obj` 作为**一个整体**添加到列表末尾。如果 `obj` 是一个列表，它会成为原列表的一个新元素（嵌套列表）。
    *   `extend(seq)`：将 `seq` 中的**每个元素**都添加到列表末尾。它会“拆开”可迭代对象 `seq`。

    例如：
    ```python
    a = [1, 2, 3]
    b = [4, 5]

    a.append(b)
    print(a)  # 输出: [1, 2, 3, [4, 5]]

    a = [1, 2, 3]  # 重置 a
    a.extend(b)
    print(a)  # 输出: [1, 2, 3, 4, 5]
    ```
    </details>

4.  <a href="#method-insert" id="link-insert"><code>list.insert(index, obj)</code></a>
    <details id="method-insert">
    <summary><strong>Python List insert() 方法</strong></summary>

    **描述**
    `insert()` 方法用于将指定对象**插入列表的指定位置**。

    **语法**
    `insert()` 方法语法：
    ```python
    list.insert(index, obj)
    ```

    **参数**
    *   `index` -- 对象 `obj` 需要插入的**索引位置**。新元素将被放置在该索引处，原索引处及之后的元素将依次向后移动一位。
    *   `obj` -- 要插入列表中的对象。

    **返回值**
    该方法**没有返回值**（返回 `None`），但会**直接修改原来的列表**。

    **实例**
    以下实例展示了 `insert()` 方法的使用方法：
    ```python
    aList = [123, 'xyz', 'zara', 'abc']
    print("插入前的列表:", aList)  # 输出: 插入前的列表: [123, 'xyz', 'zara', 'abc']

    # 在索引 3 的位置插入 2009
    aList.insert(3, 2009)
    print("Final List : ", aList)  # 输出: Final List :  [123, 'xyz', 'zara', 2009, 'abc']

    # 在列表开头插入 (索引 0)
    aList.insert(0, 'start')
    print("在开头插入后的列表:", aList)  # 输出: 在开头插入后的列表: ['start', 123, 'xyz', 'zara', 2009, 'abc']

    # 在列表末尾插入 (索引可以是 len(list))
    aList.insert(len(aList), 'end')
    print("在末尾插入后的列表:", aList)  # 输出: 在末尾插入后的列表: ['start', 123, 'xyz', 'zara', 2009, 'abc', 'end']
    ```

    **1 篇笔记：**

    **insert 注意事项**

    *   如果 `index` 大于列表的长度，则会将元素添加到列表的**末尾**，相当于 `append(obj)`。
    *   如果 `index` 是负数，则表示从列表末尾开始计数（与负数索引类似）。例如 `index=-1` 表示插入到倒数第一个元素之前。
    *   **列表为空时，位置参数无效？** 严格来说，当列表为空时，任何 `index` 都会导致元素被插入（因为列表为空，插入后只有一个元素）。例如 `empty_list.insert(100, 'a')` 会使 `empty_list` 变为 `['a']`。

    **例题：实现对列表的重新排序。**

    **原代码（可能存在问题）：**
    ```python
    list1 = ['A','B','C']
    list2 = []
    for i in range (3):
        order = int(input('你要把'+list1[i]+'放在第几位？（请输入数字1,2,3):'))
        list2.insert(order - 1, list1[i])
    print(list2 )
    ```
    **运行结果如下：**
    ```
    你要把A放在第几位？（请输入数字1,2,3):3
    你要把B放在第几位？（请输入数字1,2,3):2
    你要把C放在第几位？（请输入数字1,2,3):1
    ['C', 'A', 'B']
    ```
    **问题分析：**
    这段代码的逻辑是，依次询问 A、B、C 要放在新列表 list2 的第几位（用户输入 1,2,3，代码转为索引 order-1）。
    *   放 A 时，list2 为空，`insert(2, 'A')` → list2 变为 `['A']` (因为列表长度为0，插入索引2会自动放到末尾，即索引0，但这里可能用户期望的是最终位置，而不是动态插入)。
    *   放 B 时，用户输入 2 → 索引1。此时 list2 是 `['A']`，在索引1插入 'B' → list2 变为 `['A', 'B']`。
    *   放 C 时，用户输入 1 → 索引0。在索引0插入 'C' → list2 变为 `['C', 'A', 'B']`。
    这与用户期望的 "A放3，B放2，C放1" 得到 `['C', 'B', 'A']` 的结果不符。因为每次插入都会影响后续元素的位置。

    **例题正确答案（思路）：**
    使用字典来记录每个元素的目标位置，然后按位置顺序构建新列表。
    ```python
    list1 = ['A','B','C']
    dict1 = {}  # 用字典存储 {目标位置: 元素}
    for i in range(3):
        order = int(input('你要把'+list1[i]+'放在第几位？（请输入数字1,2,3)'))
        dict1[order] = list1[i]
    print(dict1)  # 例如输入 3,2,1，dict1 会是 {3: 'A', 2: 'B', 1: 'C'}

    list1 = []  # 清空原本列表list1的元素
    for i in range(1,4):  # 按位置1,2,3的顺序从字典中取值
        list1.append(dict1[i])
    print(list1)  # 输出: ['C', 'B', 'A']
    ```
    **运行结果如下：**
    ```
    你要把A放在第几位？（请输入数字1,2,3)3
    你要把B放在第几位？（请输入数字1,2,3)2
    你要把C放在第几位？（请输入数字1,2,3)1
    {3: 'A', 2: 'B', 1: 'C'}
    ['C', 'B', 'A']
    ```
    **这种方法的优点：** 先收集所有元素的最终目标位置，然后一次性按顺序排列，避免了动态插入时元素位置互相影响的问题。
    </details>

---


5.  <a href="#method-index" id="link-index"><code>list.index(obj)</code></a>
    <details id="method-index">
    <summary><strong>Python List index() 方法</strong></summary>

    **描述**
    `index()` 方法用于从列表中找出某个值 **第一个匹配项的索引位置**。

    **语法**
    `index()` 方法语法：
    ```python
    list.index(obj)
    ```

    **参数**
    *   `obj` -- 要查找其索引的对象。

    **返回值**
    该方法返回查找对象的**第一个**出现的索引位置。如果在列表中没有找到指定对象，则会抛出 `ValueError` 异常。

    **实例**
    以下实例展示了 `index()` 方法的使用方法：
    ```python
    fruits = ['apple', 'banana', 'orange', 'apple', 'grape']

    # 查找 'banana' 的索引
    banana_index = fruits.index('banana')
    print("'banana' 的索引是:", banana_index)  # 输出: 'banana' 的索引是: 1

    # 查找 'apple' 的索引 (返回第一个出现的 'apple' 的索引)
    apple_index = fruits.index('apple')
    print("第一个 'apple' 的索引是:", apple_index)  # 输出: 第一个 'apple' 的索引是: 0

    # 尝试查找不存在的元素
    try:
        watermelon_index = fruits.index('watermelon')
        print("'watermelon' 的索引是:", watermelon_index)
    except ValueError:
        print("'watermelon' 不在列表中。")  # 输出: 'watermelon' 不在列表中。
    ```

    **1 篇笔记：**

    **index() 注意事项**

    *   **只返回第一个匹配项**：如果列表中有多个相同的元素，`index()` 只返回第一个出现的元素的索引。
    *   **元素不存在则报错**：如果要查找的元素不在列表中，`index()` 会抛出 `ValueError`。因此，在不确定元素是否存在时，建议先用 `in` 关键字检查，例如：
        ```python
        if 'watermelon' in fruits:
            print(fruits.index('watermelon'))
        else:
            print("'watermelon' 不在列表中。")
        ```
    *   **指定起始和结束位置（扩展用法）**：`index()` 方法还可以接受两个可选参数 `start` 和 `end`，用于指定查找的范围：
        `list.index(obj, start, end)`
        表示从索引 `start` 开始查找，到索引 `end` 结束（不包含 `end`）。
        例如：
        ```python
        numbers = [1, 2, 3, 2, 1]
        print(numbers.index(2))        # 输出: 1 (第一个 2)
        print(numbers.index(2, 2))     # 输出: 3 (从索引2开始查找第一个 2)
        # print(numbers.index(2, 4))   # 会抛出 ValueError，因为从索引4开始到末尾没有 2
        ```
    </details>

6.  <a href="#method-pop" id="link-pop"><code>list.pop([index=-1])</code></a>
    <details id="method-pop">
    <summary><strong>Python List pop() 方法</strong></summary>

    **描述**
    `pop()` 方法用于移除列表中的一个元素（**默认是最后一个元素**），并**返回该元素的值**。

    **语法**
    `pop()` 方法语法：
    ```python
    list.pop([index=-1])
    ```
    方括号 `[]` 中的参数表示可选参数。`index=-1` 表示如果不提供索引，默认移除并返回最后一个元素。

    **参数**
    *   `index` (可选) -- 要移除元素的索引位置。如果不指定，默认为 `-1`，即最后一个元素。

    **返回值**
    返回被移除的元素。如果列表为空，或者指定的索引超出范围，则会抛出 `IndexError` 异常。

    **实例**
    以下实例展示了 `pop()` 方法的使用方法：
    ```python
    fruits = ['apple', 'banana', 'orange', 'grape']

    # 默认移除并返回最后一个元素
    last_fruit = fruits.pop()
    print("被移除的元素 (默认最后一个):", last_fruit)  # 输出: 被移除的元素 (默认最后一个): grape
    print("pop 后的列表:", fruits)                     # 输出: pop 后的列表: ['apple', 'banana', 'orange']

    # 移除并返回指定索引 (索引1) 的元素
    banana = fruits.pop(1)
    print("被移除的元素 (索引1):", banana)             # 输出: 被移除的元素 (索引1): banana
    print("pop(1) 后的列表:", fruits)                  # 输出: pop(1) 后的列表: ['apple', 'orange']

    # 移除并返回第一个元素 (索引0)
    first_fruit = fruits.pop(0)
    print("被移除的元素 (索引0):", first_fruit)        # 输出: 被移除的元素 (索引0): apple
    print("pop(0) 后的列表:", fruits)                  # 输出: pop(0) 后的列表: ['orange']
    ```

    **1 篇笔记：**

    **pop() 注意事项与应用**

    *   **修改原列表**：`pop()` 方法会**直接修改原列表**，并返回被移除的元素。这一点与 `del` 语句不同，`del` 语句没有返回值。
    *   **空列表或无效索引**：如果对一个空列表使用 `pop()`，或者指定的索引超出了列表的有效范围（`0 <= index < len(list)`），会抛出 `IndexError: pop from empty list` 或 `IndexError: pop index out of range`。
    *   **实现栈和队列**：`pop()` 方法常与 `append()` 方法一起使用来实现 **栈 (Stack)** 和 **队列 (Queue)** 数据结构：
        *   **栈 (LIFO - 后进先出)**：使用 `append(obj)` 在末尾添加元素，使用 `pop()` 从末尾移除元素。
        *   **队列 (FIFO - 先进先出)**：使用 `append(obj)` 在末尾添加元素，使用 `pop(0)` 从开头移除元素。不过，对于频繁的 `pop(0)` 操作，列表效率不高，推荐使用 `collections.deque`。
    *   **获取并删除元素**：当你需要获取列表中某个元素，并且同时将其从列表中删除时，`pop()` 非常有用。
    ```python
    stack = []
    stack.append("A")
    stack.append("B")
    stack.append("C")
    print("栈:", stack)  # 输出: 栈: ['A', 'B', 'C']
    print("弹出:", stack.pop())  # 输出: 弹出: C
    print("栈:", stack)  # 输出: 栈: ['A', 'B']
    ```
    </details>

7.  <a href="#method-remove" id="link-remove"><code>list.remove(obj)</code></a>
    <details id="method-remove">
    <summary><strong>Python List remove() 方法</strong></summary>

    **描述**
    `remove()` 方法用于移除列表中某个值的 **第一个匹配项**。

    **语法**
    `remove()` 方法语法：
    ```python
    list.remove(obj)
    ```

    **参数**
    *   `obj` -- 要从列表中移除的对象。

    **返回值**
    该方法**没有返回值**（返回 `None`），但会**直接修改原来的列表**，移除第一个匹配到的元素。如果在列表中没有找到指定的对象，则会抛出 `ValueError` 异常。

    **实例**
    以下实例展示了 `remove()` 方法的使用方法：
    ```python
    fruits = ['apple', 'banana', 'orange', 'apple', 'grape']
    print("移除前的列表:", fruits)  # 输出: 移除前的列表: ['apple', 'banana', 'orange', 'apple', 'grape']

    # 移除第一个 'apple'
    fruits.remove('apple')
    print("移除 'apple' 后的列表:", fruits)  # 输出: 移除 'apple' 后的列表: ['banana', 'orange', 'apple', 'grape']

    # 移除 'orange'
    fruits.remove('orange')
    print("移除 'orange' 后的列表:", fruits)  # 输出: 移除 'orange' 后的列表: ['banana', 'apple', 'grape']

    # 尝试移除不存在的元素
    try:
        fruits.remove('watermelon')
        print("移除 'watermelon' 后的列表:", fruits)
    except ValueError:
        print("'watermelon' 不在列表中，无法移除。")  # 输出: 'watermelon' 不在列表中，无法移除。
    ```

    **1 篇笔记：**

    **remove() 注意事项及与 pop()、del 的区别**

    *   **只移除第一个匹配项**：与 `index()` 类似，如果列表中有多个相同的元素，`remove()` 只移除第一个出现的那个。如果要移除所有匹配项，需要结合循环使用。
    *   **按值查找，而非索引**：`remove(obj)` 是根据元素的值来查找并删除的，而 `pop(index)` 是根据索引来删除的。`del list[index]` 也是根据索引删除。
    *   **元素不存在则报错**：与 `index()` 一样，如果 `obj` 不在列表中，`remove()` 会抛出 `ValueError`。因此，删除前最好用 `in` 检查。
    *   **没有返回值**：`remove()` 没有返回值，它只是修改列表。而 `pop()` 会返回被删除的元素。

    **对比示例：**
    ```python
    numbers = [1, 2, 3, 2, 1]

    # 使用 remove()
    numbers.remove(2)
    print(numbers)  # 输出: [1, 3, 2, 1]  (移除了第一个 2)

    # 使用 pop()
    popped = numbers.pop(1)  # 移除索引1的元素 (3)
    print(numbers, "被弹出的元素:", popped)  # 输出: [1, 2, 1] 被弹出的元素: 3

    # 使用 del
    del numbers[0]  # 移除索引0的元素 (1)
    print(numbers)  # 输出: [2, 1]
    ```

    **如何移除列表中所有某个元素？**
    可以用 while 循环：
    ```python
    numbers = [1, 2, 2, 3, 2, 4]
    while 2 in numbers:
        numbers.remove(2)
    print(numbers)  # 输出: [1, 3, 4]
    ```
    </details>

---


8.  <a href="#method-reverse" id="link-reverse"><code>list.reverse()</code></a>
    <details id="method-reverse">
    <summary><strong>Python List reverse() 方法</strong></summary>

    **描述**
    `reverse()` 方法用于将列表中的元素**原地反转**，即第一个元素变成最后一个，最后一个元素变成第一个，以此类推。

    **语法**
    `reverse()` 方法语法：
    ```python
    list.reverse()
    ```

    **参数**
    该方法**没有参数**。

    **返回值**
    该方法**没有返回值**（返回 `None`），但会**直接修改原来的列表**。

    **实例**
    以下实例展示了 `reverse()` 方法的使用方法：
    ```python
    numbers = [1, 2, 3, 4, 5]
    print("反转前的列表:", numbers)  # 输出: 反转前的列表: [1, 2, 3, 4, 5]

    numbers.reverse()
    print("反转后的列表:", numbers)  # 输出: 反转后的列表: [5, 4, 3, 2, 1]

    fruits = ['apple', 'banana', 'cherry']
    fruits.reverse()
    print("水果列表反转后:", fruits)  # 输出: 水果列表反转后: ['cherry', 'banana', 'apple']
    ```

    **1 篇笔记：**

    **reverse() 注意事项及与 reversed() 函数的区别**

    *   **原地修改**：`reverse()` 方法会直接修改调用它的列表本身，而不是创建一个新的反转列表。
    *   **无返回值**：记住 `reverse()` 返回 `None`，不要尝试将其结果赋值给另一个变量，例如 `new_list = numbers.reverse()` 会得到 `new_list = None`。
    *   **`reversed()` 内置函数**：如果不想修改原列表，而是希望得到一个反转的**迭代器**（可用于创建新列表），可以使用内置函数 `reversed()`。例如：
        ```python
        numbers = [1, 2, 3, 4, 5]
        reversed_numbers = list(reversed(numbers))  # 将 reversed 对象转换为列表
        print("原列表:", numbers)          # 输出: 原列表: [1, 2, 3, 4, 5] (未被修改)
        print("反转后的新列表:", reversed_numbers)  # 输出: 反转后的新列表: [5, 4, 3, 2, 1]
        ```
    *   **反转字符串**：字符串也可以用 `[::-1]` 的切片方式反转，列表也可以：`numbers[::-1]` 会返回一个新的反转列表，原列表不变。
    ```python
    numbers = [1,2,3]
    reversed_numbers = numbers[::-1]
    print(numbers)          # [1,2,3]
    print(reversed_numbers) # [3,2,1]
    ```
    </details>

9.  <a href="#method-sort" id="link-sort"><code>list.sort(cmp=None, key=None, reverse=False)</code></a>
    <details id="method-sort">
    <summary><strong>Python List sort() 方法</strong></summary>

    **描述**
    `sort()` 方法用于对原列表进行**原地排序**（默认是升序排序）。可以通过参数指定排序规则。

    **语法**
    `sort()` 方法语法：
    ```python
    list.sort(cmp=None, key=None, reverse=False)
    ```

    **参数**
    *   `cmp` (可选，Python 3 已移除) -- 比较函数，该函数应有两个参数，且返回一个负数、零或正数来表示第一个参数比第二个参数小、相等或大。在 Python 3 中，此参数已被移除，推荐使用 `key` 参数。
    *   `key` (可选) -- 用于从每个列表元素中提取一个用于比较的键（例如，`key=str.lower` 表示在排序字符串时忽略大小写）。这个函数只接受一个参数，并返回一个用于排序的键。
    *   `reverse` (可选) -- 排序规则，`reverse=False` (默认) 表示升序，`reverse=True` 表示降序。

    **返回值**
    该方法**没有返回值**（返回 `None`），但会**直接修改原来的列表**。

    **实例**
    以下实例展示了 `sort()` 方法的使用方法：

    ```python
    # 基本升序排序
    numbers = [3, 1, 4, 1, 5, 9, 2, 6]
    print("排序前:", numbers)  # 输出: 排序前: [3, 1, 4, 1, 5, 9, 2, 6]
    numbers.sort()
    print("升序排序后:", numbers)  # 输出: 升序排序后: [1, 1, 2, 3, 4, 5, 6, 9]

    # 降序排序
    numbers.sort(reverse=True)
    print("降序排序后:", numbers)  # 输出: 降序排序后: [9, 6, 5, 4, 3, 2, 1, 1]

    # 对字符串列表排序 (默认按字母顺序)
    fruits = ['banana', 'apple', 'cherry', 'date']
    fruits.sort()
    print("字符串升序排序:", fruits)  # 输出: 字符串升序排序: ['apple', 'banana', 'cherry', 'date']

    # 使用 key 参数 (按字符串长度排序)
    fruits.sort(key=len)  # len 是内置函数，返回字符串长度
    print("按长度升序排序:", fruits)  # 输出: 按长度升序排序: ['date', 'apple', 'banana', 'cherry'] (date 长度4，apple 5， banana 6， cherry 6)

    # 使用 key 参数和 lambda 函数 (按元素的第二个字符排序)
    words = ['banana', 'apple', 'cherry', 'date']
    words.sort(key=lambda x: x[1])  # x 代表列表中的每个元素，x[1] 是元素的第二个字符
    print("按第二个字符排序:", words)  # 输出: 按第二个字符排序: ['banana', 'apple', 'date', 'cherry']
    # 解释: 'banana'[1] = 'a', 'apple'[1] = 'p', 'date'[1] = 'a', 'cherry'[1] = 'h'
    # 按 'a' (97), 'a' (97), 'h' (104), 'p' (112) 的 ASCII 码排序
    ```

    **1 篇笔记：**

    **sort() 注意事项及与 sorted() 函数的区别**

    *   **原地排序，无返回值**：`sort()` 会直接修改原列表，并且没有返回值（返回 `None`）。不要写成 `new_list = my_list.sort()`，这会使 `new_list` 为 `None`。
    *   **`sorted()` 内置函数**：如果不想修改原列表，而是希望得到一个**新的已排序列表**，请使用内置函数 `sorted()`。`sorted()` 接受与 `sort()` 类似的 `key` 和 `reverse` 参数，但它会返回一个新列表，原列表保持不变。
        ```python
        numbers = [3, 1, 4, 1, 5]
        sorted_numbers = sorted(numbers)  # sorted() 返回新列表
        print("原列表:", numbers)        # 输出: 原列表: [3, 1, 4, 1, 5]
        print("新的排序后列表:", sorted_numbers)  # 输出: 新的排序后列表: [1, 1, 3, 4, 5]
        ```
    *   **`key` 参数比 `cmp` 更高效**：在 Python 3 中移除了 `cmp` 参数，因为 `key` 参数通常执行得更快，也更易于使用。`key` 函数为每个元素生成一个用于比较的键，排序基于这些键。
    *   **稳定性**：从 Python 3.0 开始，`sort()` 和 `sorted()` 都是稳定排序（Stable Sort）。这意味着当多个元素具有相同的排序键时，它们的相对顺序会保留原始列表中的顺序。
    *   **自定义对象排序**：对于自定义对象组成的列表，可以通过 `key` 参数指定排序的属性。例如，有一个 `Person` 类的实例列表，可以用 `key=lambda p: p.age` 按年龄排序。
    *   **不可变类型**：字符串、元组等不可变类型没有 `sort()` 方法，必须使用 `sorted()` 函数。例如 `sorted("cab")` 返回 `['a', 'b', 'c']`。

    **常见错误示例：**
    ```python
    my_list = [3, 1, 2]
    # 错误用法：试图将 sort() 的结果赋值
    new_list = my_list.sort()
    print(new_list)  # 输出: None (而不是 [1,2,3])
    print(my_list)   # 输出: [1, 2, 3] (原列表已被修改)

    # 正确用法（如果要新列表）：
    my_list = [3, 1, 2]
    new_list = sorted(my_list)
    print(new_list)  # 输出: [1, 2, 3]
    print(my_list)   # 输出: [3, 1, 2] (原列表未修改)
    ```
    </details>

---

## 练习

### 基础练习

**练习 1：创建与访问**
创建一个包含你最喜欢的 5 种水果名称的列表。然后：
1.  打印列表的长度。
2.  打印列表中的第三个水果（索引为 2）。
3.  打印列表中的最后一个水果（使用负数索引）。
4.  打印列表中从第二个水果到第四个水果的切片（包含第二个和第四个）。

<details>
<summary><b>参考答案</b></summary>

```python
# 创建水果列表
favorite_fruits = ['苹果', '香蕉', '橙子', '草莓', '葡萄']

# 1. 打印列表的长度
print("列表长度:", len(favorite_fruits))  # 输出: 列表长度: 5

# 2. 打印列表中的第三个水果（索引为 2）
print("第三个水果:", favorite_fruits[2])  # 输出: 第三个水果: 橙子

# 3. 打印列表中的最后一个水果（使用负数索引）
print("最后一个水果:", favorite_fruits[-1])  # 输出: 最后一个水果: 葡萄

# 4. 打印列表中从第二个水果到第四个水果的切片（包含第二个和第四个）
# 第二个水果索引是1，第四个是3。切片是 [start:end+1] 因为 end 不包含
print("从第二个到第四个水果:", favorite_fruits[1:4])  # 输出: 从第二个到第四个水果: ['香蕉', '橙子', '草莓']
```
</details>

**练习 2：列表修改与操作符**
现有列表 `numbers = [10, 20, 30, 40, 50]`。请进行以下操作：
1.  在列表末尾添加元素 60。
2.  在索引 1 的位置插入元素 15。
3.  使用 `+` 操作符将列表 `[70, 80]` 与 `numbers` 合并，并将结果赋给一个新列表 `new_numbers`（不要修改原 `numbers` 列表）。
4.  打印修改后的 `numbers` 列表和 `new_numbers` 列表。

<details>
<summary><b>参考答案</b></summary>

```python
numbers = [10, 20, 30, 40, 50]

# 1. 在列表末尾添加元素 60
numbers.append(60)

# 2. 在索引 1 的位置插入元素 15
numbers.insert(1, 15)

# 3. 使用 + 操作符合并列表 [70, 80]
new_numbers = numbers + [70, 80]

# 4. 打印结果
print("修改后的 numbers 列表:", numbers)      # 输出: 修改后的 numbers 列表: [10, 15, 20, 30, 40, 50, 60]
print("合并后的 new_numbers 列表:", new_numbers)  # 输出: 合并后的 new_numbers 列表: [10, 15, 20, 30, 40, 50, 60, 70, 80]
```
</details>

**练习 3：列表方法应用**
现有列表 `words = ['apple', 'Banana', 'cherry', 'apple', 'date', 'banana']`。请完成：
1.  统计 'apple' 在列表中出现的次数。
2.  将列表中的所有元素转换为小写（提示：创建一个新列表，使用循环和 `lower()` 方法）。
3.  在新的小写列表中，移除第一个出现的 'banana'。
4.  对新列表进行升序排序。
5.  反转排序后的列表。

<details>
<summary><b>参考答案</b></summary>

```python
words = ['apple', 'Banana', 'cherry', 'apple', 'date', 'banana']

# 1. 统计 'apple' 出现的次数
apple_count = words.count('apple')
print("'apple' 出现的次数:", apple_count)  # 输出: 'apple' 出现的次数: 2

# 2. 将所有元素转换为小写，创建新列表
lowercase_words = [word.lower() for word in words]  # 使用列表推导式
# 或者用循环：
# lowercase_words = []
# for word in words:
#     lowercase_words.append(word.lower())
print("转换为小写后的列表:", lowercase_words)  # 输出: 转换为小写后的列表: ['apple', 'banana', 'cherry', 'apple', 'date', 'banana']

# 3. 移除第一个出现的 'banana'
lowercase_words.remove('banana')
print("移除第一个 'banana' 后:", lowercase_words)  # 输出: 移除第一个 'banana' 后: ['apple', 'cherry', 'apple', 'date', 'banana']

# 4. 升序排序
lowercase_words.sort()
print("升序排序后:", lowercase_words)  # 输出: 升序排序后: ['apple', 'apple', 'banana', 'cherry', 'date']

# 5. 反转列表
lowercase_words.reverse()
print("反转后:", lowercase_words)  # 输出: 反转后: ['date', 'cherry', 'banana', 'apple', 'apple']
```
</details>

### 综合练习

**练习 4：列表去重**
编写一个函数 `remove_duplicates(lst)`，接收一个列表作为参数，返回一个新的列表，其中不包含原列表中的重复元素，且元素的顺序与原列表中第一次出现的顺序一致。
例如：`remove_duplicates([1, 2, 2, 3, 1, 4])` 应返回 `[1, 2, 3, 4]`。

<details>
<summary><b>参考答案</b></summary>

```python
def remove_duplicates(lst):
    seen = []  # 用于记录已经出现过的元素
    for item in lst:
        if item not in seen:  # 如果元素不在 seen 中
            seen.append(item)  # 添加到 seen
    return seen

# 测试
original_list = [1, 2, 2, 3, 1, 4, 4, 5]
unique_list = remove_duplicates(original_list)
print("原列表:", original_list)
print("去重后的列表:", unique_list)  # 输出: 去重后的列表: [1, 2, 3, 4, 5]
```

**思路解析：**
*   创建一个空列表 `seen` 来存储已经遇到的元素。
*   遍历原列表中的每个元素。
*   如果元素不在 `seen` 中，就将其添加到 `seen`。
*   最后返回 `seen`，它包含了所有首次出现的元素，没有重复。
</details>

**练习 5：列表元素统计**
给定一个数字列表 `numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 5, 5]`，统计列表中每个数字出现的次数，并将结果以字典形式返回，其中键是数字，值是对应的次数。

<details>
<summary><b>参考答案</b></summary>

```python
numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 5, 5]

count_dict = {}
for num in numbers:
    if num in count_dict:
        count_dict[num] += 1  # 如果数字已在字典中，次数加1
    else:
        count_dict[num] = 1   # 如果数字不在字典中，初始化为1

print("数字出现次数统计:", count_dict)
# 输出可能为: 数字出现次数统计: {1: 2, 2: 3, 3: 3, 4: 3, 5: 4} (字典键的顺序在 Python 3.7+ 是插入顺序)
```

**思路解析：**
*   创建一个空字典 `count_dict` 用于存储统计结果。
*   遍历列表中的每个数字。
*   检查数字是否已经是字典的键：
    *   如果是，对应的值（次数）加 1。
    *   如果不是，将该数字作为新键加入字典，值设为 1。
*   遍历结束后，字典就包含了每个数字及其出现的次数。
</details>

**练习 6：学生成绩处理**
假设有一个学生成绩列表，每个元素是一个包含学生姓名和成绩的列表，例如：`students = [['Alice', 85], ['Bob', 78], ['Charlie', 92], ['David', 88], ['Eve', 76]]`。
请完成以下操作：
1.  计算所有学生的平均成绩。
2.  找出成绩最高的学生姓名和成绩。
3.  将学生列表按成绩从高到低排序。

<details>
<summary><b>参考答案</b></summary>

```python
students = [['Alice', 85], ['Bob', 78], ['Charlie', 92], ['David', 88], ['Eve', 76]]

# 1. 计算平均成绩
total_score = 0
for student in students:
    total_score += student[1]  # student[1] 是成绩
average_score = total_score / len(students)
print(f"平均成绩: {average_score:.2f}")  # :.2f 保留两位小数

# 2. 找出成绩最高的学生
max_score = -1
top_student = ""
for student in students:
    name, score = student  # 解包
    if score > max_score:
        max_score = score
        top_student = name
print(f"成绩最高的学生是 {top_student}，成绩为 {max_score}")

# 3. 按成绩从高到低排序
# 使用 sort() 方法，key 设为学生列表的第二个元素 (成绩)，reverse=True 降序
students.sort(key=lambda x: x[1], reverse=True)
print("按成绩从高到低排序后的学生列表:")
for student in students:
    print(f"{student[0]}: {student[1]}")
```

**输出结果：**
```
平均成绩: 83.80
成绩最高的学生是 Charlie，成绩为 92
按成绩从高到低排序后的学生列表:
Charlie: 92
David: 88
Alice: 85
Bob: 78
Eve: 76
```

**思路解析：**
1.  **平均成绩**：遍历学生列表，累加所有成绩，然后除以学生人数。
2.  **最高成绩**：初始化 `max_score` 为一个较小值，遍历过程中不断更新更高的分数和对应的学生姓名。
3.  **排序**：使用 `list.sort()` 方法，通过 `key=lambda x: x[1]` 指定按子列表的第二个元素（成绩）排序，`reverse=True` 确保是降序。
</details>

**练习 7：列表的嵌套与扁平化**
给定一个嵌套列表 `nested_list = [1, [2, [3, 4], 5], 6, [7, 8]]`，编写一个函数将其扁平化为一个一维列表 `[1, 2, 3, 4, 5, 6, 7, 8]`。（提示：可以使用递归）

<details>
<summary><b>参考答案</b></summary>

```python
def flatten(nested):
    flat_list = []
    for item in nested:
        if isinstance(item, list):  # 检查 item 是否是列表
            # 如果是列表，递归调用 flatten，并将结果合并到 flat_list
            flat_list.extend(flatten(item))
        else:
            # 如果不是列表，直接添加
            flat_list.append(item)
    return flat_list

# 测试
nested_list = [1, [2, [3, 4], 5], 6, [7, 8]]
flattened = flatten(nested_list)
print("嵌套列表:", nested_list)
print("扁平化后的列表:", flattened)  # 输出: 扁平化后的列表: [1, 2, 3, 4, 5, 6, 7, 8]
```

**思路解析：**
*   定义一个 `flatten` 函数，接收一个嵌套列表。
*   创建一个空列表 `flat_list` 用于存放结果。
*   遍历输入列表的每个元素 `item`。
*   如果 `item` 本身也是一个列表（用 `isinstance(item, list)` 判断），则递归调用 `flatten(item)`，并将返回的扁平化子列表用 `extend()` 添加到 `flat_list`。
*   如果 `item` 不是列表，则直接用 `append()` 添加到 `flat_list`。
*   递归是处理嵌套结构的常用方法，它会逐层深入直到所有元素都是非列表类型。
</details>

---

希望这些练习能帮助你巩固 Python 列表的知识！尝试独立完成它们，如果遇到困难，再查看参考答案。编程能力的提升离不开大量的实践。加油！