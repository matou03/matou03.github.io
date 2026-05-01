---
title: Python 字典
date: 2025-10-29 17:15:12
tags: 
  - 编程
categories:
  - 编程
  - Python 教程
---


# Python 字典 (Dictionary)

在上一部分，我们认识了元组，一种可以有序存放各种宝贝的固定容器。今天，我们要学习一个新的、非常非常实用的数据类型，它就像一个**带有标签的智能储物柜**，名字叫做 **字典 (Dictionary)**。

## 1. 什么是字典？

现在，你有一个储物柜，柜子里有很多小格子。如果是元组，每个格子可能只有编号，比如第1个，第2个。但如果是**字典**，你可以给每个格子贴上一个**独一无二的名字标签**。比如，“我的铅笔”、“你的故事书”、“他的橡皮擦”。这样，你想找什么，直接根据标签一找就能找到，是不是方便多了？

在 Python 中，字典就是这样一种神奇的容器：
*   首先，它**可以存放各种各样的数据**（数字、字符串、列表，甚至其他字典，几乎无所不能！）。
*   其次，它**里面的东西是可以改变的**。即我们可以随时添加、修改或删除里面的东西
*   最后，也是**最重要的特点**。里面的每一样东西都有一个对应的名字标签，我们称之为 **“键 (Key)”**，而这个名字标签所对应的东西，我们称之为 **值 (Value)**。

所以，字典里存的不是孤立的，而是一对一对的 **键:值 (Key: Value)** 组合。

## 2. 字典长什么样？

字典在 Python 中，是用**花括号 `{}`** 来表示的。
每一对“键:值”之间用**逗号 `,`** 分隔。
“键”和“值”之间用一个**冒号 `:`** 连接。

它的基本格式就像这样：
```python
d = {键1: 值1, 键2: 值2, 键3: 值3, ...}
```

### 2.1 一个简单的字典例子

比如，我们想创建一个字典来表示一个人的基本信息：
```python
person = {'name': '小明', 'age': 10, 'hobby': '打篮球'}
```
在这个叫做 `person` 的字典里：
*   `'name'` 是一个**键 (Key)**，它对应的值 `'小明'` 就是这个人的名字。
*   `'age'` 是一个**键 (Key)**，它对应的值 `10` 就是这个人的年龄。
*   `'hobby'` 是一个**键 (Key)**，它对应的值 `'打篮球'` 就是这个人的爱好。

### 2.2 亲手创建一个字典

创建字典非常简单，直接用花括号 `{}` 把这些“键:值”对括起来就行。

**例子 1：一个简单的字典**
```python
# 一个关于水果价格的字典
fruit_prices = {'apple': 5, 'banana': 3, 'orange': 4}
```
这里，`'apple'` 是键，`5` 是它对应的值

**例子 2：值可以是不同类型**
```python
# 一个更复杂一点的字典，值的类型可以不一样
student = {
    'name': '小红',          # 值是字符串
    'age': 12,              # 值是整数
    'grades': [90, 85, 95]  # 值是列表
}
```
看，字典的值可以是字符串 (`'小红'`)、数字 (`12`)，甚至是列表 (`[90, 85, 95]`)！

**需要注意的是：**
*   我们给字典起变量名的时候，**不要用 `dict`** 这个词。因为 `dict` 在 Python 中是一个特殊的关键字，也是创建字典的内置函数名，用它做变量名会引起混乱！

## 3. 字典的小规矩

虽然字典非常灵活，但它也有一些小规矩需要我们遵守，特别是关于键 (Key)的：

### 3.1 键 (Key) 是唯一的

就像每个储物柜的标签不能重复一样，在同一个字典里，**键 (Key) 必须是独一无二的**。如果不小心写了两个一样的键，那么**后面那个键对应的值会把前面的覆盖掉**。

**举个例子：**
```python
# 注意，这里有两个 'b' 作为键
tinydict = {'a': 1, 'b': 2, 'b': '3'}
print(tinydict['b'])  # 我们来看看 'b' 对应的值是多少？
print(tinydict)       # 我们再看看整个字典变成了什么样？
```
**运行结果会是：**
```
3
{'a': 1, 'b': '3'}
```
看到了吧？第二个 `'b': '3'` 把第一个 `'b': 2` 给替换掉了。所以，键一定要唯一！

### 3.2 键 (Key) 必须是“不可变”的类型！

什么是“不可变”的类型呢？简单说，就是创建之后就不能再修改其内部结构的数据类型。

在 Python 中，**可以作为键的常见类型有：**
*   **字符串 (String)**：比如 `'name'`, `'age'`
*   **数字 (Number)**：比如 `123`, `3.14`
*   **元组 (Tuple)**：如果元组里面的元素也是不可变的，那么这个元组也可以作为键。

**不可以作为键的常见类型有：**
*   **列表 (List)**：因为列表的内容可以随时修改。
*   **字典 (Dictionary)**：因为字典本身也可以修改。

**值 (Value) 就没有这些限制了**，它可以是任何类型的数据，可变的、不可变的，都行！

---


## 4. 访问字典里的值

我们已经知道字典里的东西都贴着名字标签。那么，怎么根据这个标签把东西取出来呢？这就像你根据“我的铅笔”这个标签，打开对应的格子拿出铅笔一样简单！

### 4.1 最直接的方法

在 Python 中，要访问字典里某个“键”对应的“值”，最常用也最直接的方法就是：
**在字典变量名后面加上方括号 `[]`，然后在方括号里面写上你想要访问的键 (Key)。**

格式就像这样：
```python
字典变量名[键]
```

**举个例子，我们用之前的 `person` 字典：**
```python
person = {'name': '小坤', 'age': 10, 'hobby': '打篮球'}

# 我想知道这个人的名字（'name' 这个键对应的值）
print(person['name'])  # 输出：小坤

# 我想知道这个人的年龄（'age' 这个键对应的值）
print(person['age'])   # 输出：10

# 我想知道这个人的爱好（'hobby' 这个键对应的值）
print(person['hobby']) # 输出：打篮球
```

是不是很直观？就像在说：“嘿，`person` 字典，把标签是 `'name'` 的那个值给我看看！”

**再看一个官方文档里的例子：**
```python
tinydict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}

print("tinydict['Name']: ", tinydict['Name'])  # 输出：tinydict['Name']:  Zara
print("tinydict['Age']: ", tinydict['Age'])    # 输出：tinydict['Age']:  7
```
完全一样的道理，`'Name'` 是键，`'Zara'` 是对应的值。

### 4.2 请注意！访问不存在的键会出错！

你对着储物柜喊：把标签是“外星人”的东西给我！ 如果根本没有这个标签，储物柜是不是会懵圈？Python 字典也是一样。

**如果你试图访问一个字典里不存在的键，Python 会非常严肃地告诉你：“出错！这个键我找不到！”** 这种错误，我们称之为 **`KeyError`**，键错误

**官方文档中的错误示例：**
```python
tinydict = {'Name': 'Runoob', 'Age': 7, 'Class': 'First'}

# 尝试访问一个不存在的键 'Alice'
print("tinydict['Alice']: ", tinydict['Alice'])
```

**运行上面的代码，你会看到类似这样的错误信息：**
```
Traceback (most recent call last):
  File "test.py", line 5, in <module>
    print "tinydict['Alice']: ", tinydict['Alice']
KeyError: 'Alice'
```
`KeyError: 'Alice'` 就是在告诉你：`'Alice'` 这个键在 `tinydict` 字典里不存在！

**这是初学者非常容易犯的错误之一**，所以一定要注意，在使用 `字典[键]` 的方式取值时，**确保这个键确实存在于字典中**。

（别担心，后面我们会学到更安全的访问方式，即使键不存在也不会报错，而是给我们一个默认值。）

---


## 5. 修改字典

字典是可变的容器，这意味着我们可以随时对它进行装修。我们可以修改已有标签下的东西，也可以给它增加新的标签和东西。

### 5.1 修改已有键的值

如果你想把某个标签下的东西换成另一个，很简单，就像你把储物柜“我的铅笔”格子里的铅笔换成钢笔一样。

**方法是：**
```python
字典变量名[已有的键] = 新的值
```

**举个例子：**
我们有一个字典 `tinydict`：
```python
tinydict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
```
现在，Zara 长大了一岁，我们要更新她的年龄 `'Age'`：
```python
tinydict['Age'] = 8  # 将键 'Age' 对应的值从 7 修改为 8
```

然后我们打印出来看看：
```python
print("tinydict['Age']: ", tinydict['Age'])  # 输出：tinydict['Age']:  8
```
看，`'Age'` 的值已经成功从 7 变成 8 了！

### 5.2 向字典添加新的键:值对

字典就像一个可以无限扩展的储物柜，我们可以随时给它增加新的标签和对应的东西

**添加的方法和修改非常类似：**
```python
字典变量名[新的键] = 新的值
```
如果这个新的键在字典中原来不存在，Python 就会把这个新的“键:值”对添加到字典里

**继续用上面的 `tinydict` 例子：**
我们想给 Zara 添加一个新的信息：她所在的学校 `'School'`。
```python
tinydict['School'] = "RUNOOB"  # 添加一个新的键 'School'，对应的值是 "RUNOOB"
```

然后我们打印出来看看：
```python
print("tinydict['School']: ", tinydict['School'])  # 输出：tinydict['School']:  RUNOOB
```
字典里现在多了一对 `'School': 'RUNOOB'`。

**现在，整个 `tinydict` 变成了：**
```python
{'Name': 'Zara', 'Age': 8, 'Class': 'First', 'School': 'RUNOOB'}
```

**你可以看到：**
*   当你使用 `字典[键] = 值` 的时候：
    *   如果这个 `键` **已经存在**于字典中，那么就是**修改**这个键对应的值。
    *   如果这个 `键` **不存在**于字典中，那么就是**添加**一个新的键:值对到字典中。

这很方便！

---

**再举一个生活中的例子，帮助你理解：**

假设你有一个记录个人信息的字典：
```python
my_info = {'name': '小坤', 'city': '北京'}
```
*   你搬家到了上海，需要**修改** `'city'` 的值：
    ```python
    my_info['city'] = '上海'
    ```
*   你想增加一个 `'hobby'`（爱好）的信息：
    ```python
    my_info['hobby'] = '打篮球'
    ```
*   现在 `my_info` 就变成了：
    ```python
    {'name': '小坤', 'city': '上海', 'hobby': '打篮球'}
    ```


---


## 6. 删除字典元素

字典既然是可变的，那么我们当然也可以从里面**删除不再需要的“键:值”对**，甚至可以**清空整个字典**，或者**彻底删除整个字典变量**。Python 提供了 `del` 语句和字典的 `clear()` 方法来帮我们完成这些操作

### 6.1 删除字典中指定的键

如果你想删除字典中某一个特定的标签及其对应的东西，可以使用 **`del` 语句**。

**语法格式：**
```python
del 字典变量名[要删除的键]
```

**举个例子：**
我们有一个字典 `tinydict`：
```python
tinydict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
```
现在，我们想把 `'Name'` 这个键和它对应的值 `'Zara'` 从字典中删除：
```python
del tinydict['Name']  # 删除键是 'Name' 的条目
```
执行这行代码后，`tinydict` 就变成了：`{'Age': 7, 'Class': 'First'}`，`'Name'` 那一项已经不见了

**需要提醒的是：**
*   如果你想要删除一个**不存在的键**，`del` 语句也会引发 **`KeyError`**（键错误）。所以删除前要确保键存在，或者先进行判断。

### 6.2 清空字典中所有的键

如果你想把字典里所有的东西和标签都清空，让字典变成一个空柜子，可以使用字典的 **`clear()` 方法**。

**语法格式：**
```python
字典变量名.clear()
```

**继续上面的 `tinydict` 例子：**
在删除了 `'Name'` 之后，`tinydict` 是 `{'Age': 7, 'Class': 'First'}`。现在我们想把它彻底清空：
```python
tinydict.clear()  # 清空字典所有条目
```
执行这行代码后，`tinydict` 就变成了一个**空字典**：`{}`。它仍然是一个字典对象，只是里面没有任何内容了。

### 6.3 彻底删除整个字典变量 —— `del` 语句

如果你不仅想清空字典里的内容，而是想把整个储物柜（也就是字典变量本身）都从内存中扔掉，让这个字典变量不复存在，那么可以直接使用 **`del` 语句**删除字典变量本身

**语法格式：**
```python
del 字典变量名
```

**继续上面的例子：**
在 `tinydict.clear()` 之后，`tinydict` 是一个空字典 `{}`。现在我们彻底删除这个变量：
```python
del tinydict  # 删除字典变量本身
```
执行这行代码后，变量 `tinydict` 就**完全不存在**了！

**尝试访问已被 `del` 的字典变量会怎样？**
就像官方文档的例子那样：
```python
# 在 del tinydict 之后，再尝试访问 tinydict
print("tinydict['Age']: ", tinydict['Age'])
print("tinydict['School']: ", tinydict['School'])
```
**这会引发一个 `NameError` 异常**，因为 `tinydict` 这个名字已经从内存中被删除了，Python 找不到它了：
```
Traceback (most recent call last):
  File "test.py", line 10, in <module>
    print "tinydict['Age']: ", tinydict['Age']
NameError: name 'tinydict' is not defined
```

### 6.4 一个综合的删除示例

让我们把上面的步骤串起来看一下官方文档的示例（稍作修改以便理解）：
```python
tinydict = {'Name': 'Zara', 'Age': 7, 'Class': 'First'}
print("原始 tinydict:", tinydict)  # 输出：原始 tinydict: {'Name': 'Zara', 'Age': 7, 'Class': 'First'}

del tinydict['Name']  # 删除键是 'Name' 的条目
print("删除 'Name' 后:", tinydict)  # 输出：删除 'Name' 后: {'Age': 7, 'Class': 'First'}

tinydict['School'] = "RUNOOB"  # 我们先添加一个新的键值对，方便观察
print("添加 'School' 后:", tinydict)  # 输出：添加 'School' 后: {'Age': 7, 'Class': 'First', 'School': 'RUNOOB'}

tinydict.clear()      # 清空字典所有条目
print("clear() 之后:", tinydict)  # 输出：clear() 之后: {}

del tinydict          # 删除字典变量本身
print("del tinydict 之后尝试访问:", tinydict)  # 这里会报错！
```
**最后一行 `print` 会引发 `NameError`，因为 `tinydict` 已经不存在了。**


这些操作能帮助我们很好地管理字典中的数据，保持储物柜的整洁
---


## 7. 字典键的特性

我们知道字典是由一系列“键:值”对组成的。**“值 (Value)”** 非常自由，可以是任何 Python 对象（数字、字符串、列表、元组、字典，甚至函数等等，几乎没有限制）。但是，**键 (Key)** 就比较挑剔了，它有两个非常重要的特性需要我们牢牢记住：

### 7.1 键必须是唯一的！

**在同一个字典中，不允许出现两个完全相同的键。** 如果在创建字典或者后续修改字典时，不小心对同一个键赋值了两次，那么**后一次赋的值会覆盖掉前一次的值**，也就是说，**最后一次出现的键值对会被记住**。

**举个例子（官方文档实例）：**
```python
tinydict = {'Name': 'Runoob', 'Age': 7, 'Name': 'Manni'} 
print("tinydict['Name']: ", tinydict['Name'])
```
在这个 `tinydict` 中，我们有两个 `'Name'` 键。
*   第一个 `'Name'` 被赋值为 `'Runoob'`。
*   第二个 `'Name'` 被赋值为 `'Manni'`。

**运行结果是：**
```
tinydict['Name']:  Manni
```
看到了吧？后面的 `'Manni'` 把前面的 `'Runoob'` 给覆盖了。所以，**每个键在字典中只能有一个唯一的位置**。这就像你的储物柜不能有两个完全一样的标签，否则你也不知道该打开哪个格子了。

### 7.2 键必须是不可变的！

**字典的键必须是不可变的数据类型。** 什么是不可变的数据类型呢？简单来说，就是创建之后，它的值或内部结构就不能再被修改的数据类型。

**在 Python 中，常见的不可变类型，可以作为字典的键的有：**
*   **字符串 (String)**：比如 `'Name'`, `'Age'`, `'学校'`。
*   **数字 (Number)**：包括整数 (int) 如 `100`, `42`；浮点数 (float) 如 `3.14`, `2.718`；甚至复数 (complex)。
*   **元组 (Tuple)**：但要求元组内的所有元素也都是不可变的。例如 `(1, 2)`, `('a', 'b')` 可以作为键。但如果元组里包含了列表（列表是可变的），如 `([1,2], 3)`，那么这个元组也不能作为键。

**而像以下这些可变 的数据类型，就不能作为字典的键：**
*   **列表 (List)**：因为列表的元素可以随时被修改
*   **字典 (Dictionary)**：因为字典本身也是可变的。
*   **集合 (Set)**：集合也是可变的（后面会学到）

**错误实例：**
```python
tinydict = {['Name']: 'Zara', 'Age': 7} 
print("tinydict['Name']: ", tinydict['Name'])
```
这里，我们尝试用 `['Name']` 这个**列表**作为键。

**运行结果会报错：**
```
Traceback (most recent call last):
  File "test.py", line 3, in <module>
    tinydict = {['Name']: 'Zara', 'Age': 7} 
TypeError: unhashable type: 'list'
```
错误信息 `TypeError: unhashable type: 'list'` 告诉我们：**列表 (list) 是不可哈希的类型**。不可哈希是一个计算机术语，通常来说，不可变的类型是可哈希的，可变的类型是不可哈希的。而字典的键，要求必须是可哈希的。

**为什么键必须是不可变的？**
这和字典内部的存储和查找机制有关。简单理解，字典需要通过键来快速找到对应的值，这个过程依赖于键的哈希值。如果键是可变的，它的哈希值就可能变化，字典就找不到原来存储的值了。而不可变的键，它的哈希值是固定的，能保证查找的准确性。

**记住** ，把键看成是储物柜的金属标签，一旦贴上去就不能轻易变形或更改；而值就像标签下的物品，可以随时更换

---


## Python 字典 内置函数

字典是 Python 中非常重要的数据结构，用于存储键值对。Python 提供了一些内置函数来帮助我们操作和查询字典。

### 1. `cmp(dict1, dict2)` - 比较两个字典 (Python 2.x)

<details>
<summary><b>点击查看：Python 字典(Dictionary) cmp()方法</b></summary>

**描述**
Python 字典的 `cmp()` 函数用于比较两个字典的元素。

**语法**
`cmp()` 方法语法：
```python
cmp(dict1, dict2)
```

**参数**
*   `dict1` -- 要比较的第一个字典。
*   `dict2` -- 要比较的第二个字典。

**返回值**
*   如果 `dict1` 小于 `dict2`，则返回 **-1**。
*   如果 `dict1` 大于 `dict2`，则返回 **1**。
*   如果 `dict1` 等于 `dict2`，则返回 **0**。

**实例**
以下实例展示了 `cmp()` 函数的使用方法（注意：此代码在 Python 3.x 中会报错）：
```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

dict1 = {'Name': 'Zara', 'Age': 7}
dict2 = {'Name': 'Mahnaz', 'Age': 27}
dict3 = {'Name': 'Abid', 'Age': 27}
dict4 = {'Name': 'Zara', 'Age': 7}

print("Return Value : %d" % cmp(dict1, dict2))  # dict1 < dict2
print("Return Value : %d" % cmp(dict2, dict3))  # dict2 > dict3 (比较'Name'的值 'Mahnaz' vs 'Abid')
print("Return Value : %d" % cmp(dict1, dict4))  # dict1 == dict4
```
**以上实例在 Python 2.x 中的输出结果如下：**
```
Return Value : -1
Return Value : 1
Return Value : 0
```

**一篇笔记 ：**
**字典 `cmp()` 的比较规则（Python 2.x）：**

1.  **先比较字典的长度**：
    *   如果 `dict1` 的长度小于 `dict2` 的长度，则 `dict1 < dict2`，返回 `-1`。
    *   如果 `dict1` 的长度大于 `dict2` 的长度，则 `dict1 > dict2`，返回 `1`。
    *   如果长度相等，则进行下一步比较。

2.  **找出第一个不同的键**：
    *   遍历两个字典中所有的键（按某种顺序，通常是插入顺序，但在 Python 2.x 中字典是无序的，比较时会先比较键的大小来确定顺序）。
    *   找到第一个在两个字典中都存在但对应值不同的键，或者只存在于一个字典中的键。
    *   **对于只存在于一个字典中的键**：拥有该键的字典被认为是“大”的。例如，如果 `dict1` 有键 `'a'` 而 `dict2` 没有，则 `dict1 > dict2`。
    *   **对于键存在于两个字典但值不同**：比较这两个键对应的值。值的比较遵循 Python 中常规的比较规则。

3.  **比较值**：
    *   如果找到不同的键，则比较它们对应的值。如果 `dict1[key] < dict2[key]`，则 `dict1 < dict2`，返回 `-1`；否则返回 `1`。

4.  **所有键值对都相同**：则两个字典相等，返回 `0`。

**更细致的例子：**

*   **长度相等，但键不同**：
    ```python
    >>> dict1 = {'Name': 'e', 'Age': 30, 'Addr':'hust'}  # 键: 'Name', 'Age', 'Addr'
    >>> dict2 = {'Name': 'z', 'Age': 27, 'Adds':'hust'}  # 键: 'Name', 'Age', 'Adds'
    # 比较所有键，发现 'Addr' (dict1) 和 'Adds' (dict2) 是不同的键。
    # 比较这两个键的字符串大小：'Addr' vs 'Adds'。'Addr' 的第三个字符是 'd'，'Adds' 是 's'。'd' < 's'，所以 'Addr' < 'Adds'。
    # 因此 dict1 被认为小于 dict2。
    >>> print "Return Value : %d" % cmp(dict1, dict2)
    Return Value : -1
    ```

*   **长度相等，键完全相等，值不同**：
    ```python
    >>> dict1 = {'Name': 'e', 'Age': 30, 'Addr':'hust'}  # 'Addr' 的值是 'hust'
    >>> dict2 = {'Name': 'z', 'Age': 27, 'Addr':'whu'}    # 'Addr' 的值是 'whu'
    # 所有键都相同：'Name', 'Age', 'Addr'。
    # 找出这些键中，第一个值不相等的键。比较键的字符串大小来确定顺序：'Addr' < 'Age' < 'Name' (按字母顺序)。
    >>> min('Name', 'Age', 'Addr')  # 在 Python 中比较字符串是按 Unicode 码点（ASCII）顺序
    'Addr'
    # 所以先比较 'Addr' 的值：'hust' vs 'whu'。'h' < 'w'，所以 dict1['Addr'] < dict2['Addr']，因此 dict1 < dict2。
    >>> print "Return Value : %d" % cmp(dict1, dict2)
    Return Value : -1
    ```

**重要提示：**
*   **Python 3.x 中已移除 `cmp()` 函数**。在 Python 3.x 中，如果你需要比较字典，可以直接使用比较运算符 `==` 和 `!=` 来检查字典是否相等或不相等。对于大小比较（`<`, `<=`, `>`, `>=`），Python 3.x 中的字典不再支持，会抛出 `TypeError`。
*   如果需要在 Python 3.x 中实现类似 `cmp()` 的功能，可以使用 `operator` 模块中的 `eq()`, `ne()`, 以及结合 `sorted()` 函数对键进行处理来模拟，但这通常比较复杂，因为字典的比较本身就不直观。
</details>

### 2. `len(dict)` - 计算字典元素个数（键的总数）

<details>
<summary><b>点击查看：Python 字典(Dictionary) len()方法</b></summary>

**描述**
Python 字典的 `len()` 函数用于**计算字典中元素的个数，即字典中键 (key) 的总数**。

**语法**
`len()` 方法语法：
```python
len(dict)
```

**参数**
*   `dict` -- 要计算元素个数的字典。

**返回值**
*   一个整数，表示字典中键值对的数量（即字典的大小）。

**实例**
以下实例展示了 `len()` 函数的使用方法：
```python
# 空字典
empty_dict = {}
print(len(empty_dict))  # 输出：0

# 包含几个键值对的字典
person = {'name': 'Alice', 'age': 30, 'city': 'New York'}
print(len(person))  # 输出：3，因为有 3 个键：'name', 'age', 'city'

# 键可以是不同类型
mixed_dict = {1: 'one', 'two': 2, (3,4): 'tuple'}
print(len(mixed_dict))  # 输出：3
```
**运行结果：**
```
0
3
3
```
</details>

### 3. `str(dict)` - 输出字典的可打印字符串表示

<details>
<summary><b>点击查看：Python 字典(Dictionary) str()方法</b></summary>

**描述**
Python 内置函数 `str(dict)` 用于**将字典转换为一个易于阅读的、可打印的字符串表示形式**。这个字符串通常会包含字典的键和值，并用大括号 `{}` 括起来，键值对之间用逗号 `,` 分隔，键和值之间用冒号 `:` 分隔。

**语法**
`str()` 函数语法：
```python
str(dict)
```

**参数**
*   `dict` -- 要转换为字符串的字典。

**返回值**
*   一个字符串，以可打印的格式表示字典。

**实例**
以下实例展示了 `str()` 函数的使用方法：
```python
person = {'name': 'Bob', 'age': 25, 'is_student': False}

# 将字典转换为字符串
dict_str = str(person)
print(dict_str)  # 输出类似: {'name': 'Bob', 'age': 25, 'is_student': False}
print(type(dict_str))  # 输出：<class 'str'>  # 确认其类型是字符串

# 空字典
empty_dict = {}
print(str(empty_dict))  # 输出：{}

# 包含特殊字符的字典
special_dict = {'key with spaces': 'value', 'number': 123, 'nested': [1, 2, 3]}
print(str(special_dict))  # 输出类似: {'key with spaces': 'value', 'number': 123, 'nested': [1, 2, 3]}
```
**运行结果（Python 3.x，注意字典的插入顺序）：**
```
{'name': 'Bob', 'age': 25, 'is_student': False}
<class 'str'>
{}
{'key with spaces': 'value', 'number': 123, 'nested': [1, 2, 3]}
```

**注意：**
*   `str(dict)` 的输出格式与字典在 Python 中的字面量表示非常相似，但它是一个字符串。
*   在 Python 3.7 及以上版本，字典是有序的，`str(dict)` 的输出会保持键值对的插入顺序。在 Python 3.6 及以下版本（包括 Python 2.x），字典是无序的，`str(dict)` 的输出顺序可能不固定。
*   这个字符串表示主要用于人类阅读，而不是用于精确的序列化（如存储到文件后再准确读取回来）。如果需要序列化，通常使用 `json` 模块等。
</details>

### 4. `type(variable)` - 返回变量的类型

<details>
<summary><b>点击查看：Python type() 函数 (判断变量是否为字典类型)</b></summary>

**描述**
Python 内置函数 `type(variable)` 用于**返回输入变量的类型对象**。如果传入的变量是一个字典 (dictionary)，那么它将返回 `dict` 类型。

**语法**
`type()` 函数语法：
```python
type(variable)
```

**参数**
*   `variable` -- 要检查类型的变量。

**返回值**
*   一个类型对象，表示 `variable` 的数据类型。

**实例**
以下实例展示了如何使用 `type()` 函数来判断一个变量是否为字典类型：
```python
# 定义一个字典
my_dict = {'name': 'Alice', 'age': 30}
print(type(my_dict))  # 输出：<class 'dict'>  # 表明 my_dict 是 dict 类型

# 定义其他类型的变量
my_list = [1, 2, 3]
my_tuple = (4, 5, 6)
my_str = "Hello"
my_int = 100

# 检查它们的类型
print(type(my_list))   # 输出：<class 'list'>
print(type(my_tuple))  # 输出：<class 'tuple'>
print(type(my_str))    # 输出：<class 'str'>
print(type(my_int))    # 输出：<class 'int'>

# 可以将 type() 的结果与 dict 类型进行比较
if type(my_dict) is dict:
    print("my_dict 是一个字典")
else:
    print("my_dict 不是一个字典")

if type(my_list) is dict:
    print("my_list 是一个字典")
else:
    print("my_list 不是一个字典")
```
**运行结果：**
```
<class 'dict'>
<class 'list'>
<class 'tuple'>
<class 'str'>
<class 'int'>
my_dict 是一个字典
my_list 不是一个字典
```

**注意：**
*   `type(variable) is dict` 是判断变量是否为字典的常用方式。
*   另一种判断对象是否为某种类型的方法是使用 `isinstance(variable, dict)`。`isinstance` 考虑继承关系，而 `type` 不考虑。对于基本类型判断，两者通常可以互换，但 `isinstance` 更推荐用于检查一个对象是否是某个类（或其子类）的实例。
    ```python
    print(isinstance(my_dict, dict))  # 输出：True
    ```
</details>

---


## Python 字典内置方法

字典提供了丰富的内置方法来操作其键值对。

### 1. `dict.clear()` - 删除字典内所有元素

<details>
<summary><b>点击查看：Python 字典(Dictionary) clear()方法</b></summary>

**描述**
Python 字典(Dictionary) `clear()` 函数用于**删除字典内所有的键值对元素**，使字典变为空字典。

**语法**
`clear()` 方法语法：
```python
dict.clear()
```

**参数**
*   NA（无参数）。

**返回值**
*   该函数没有任何返回值（返回 `None`）。

**实例**
以下实例展示了 `clear()` 函数的使用方法：
```python
#!/usr/bin/python

tinydict = {'Name': 'Zara', 'Age': 7}

print("清除前字典长度 : %d" % len(tinydict))  # 输出：清除前字典长度 : 2
tinydict.clear()
print("清除后字典长度 : %d" % len(tinydict))  # 输出：清除后字典长度 : 0
print("清除后的字典内容 :", tinydict)         # 输出：清除后的字典内容 : {}
```
**以上实例输出结果为：**
```
清除前字典长度 : 2
清除后字典长度 : 0
清除后的字典内容 : {}
```

**注意：**
`clear()` 方法是**原地修改**字典，它会清空原字典的内容，而不是创建一个新的空字典。
</details>

### 2. `dict.copy()` - 返回一个字典的浅复制

<details>
<summary><b>点击查看：Python 字典(Dictionary) copy()方法</b></summary>

**描述**
Python 字典(Dictionary) `copy()` 函数用于**返回一个字典的浅复制 (shallow copy)**。

**语法**
`copy()` 方法语法：
```python
dict.copy()
```

**参数**
*   NA（无参数）。

**返回值**
*   返回一个新的字典，该字典包含原字典的所有键值对的浅复制。

**实例**
以下实例展示了 `copy()` 函数的使用方法：
```python
# 简单字典的复制
original = {'name': 'Alice', 'age': 30}
copied = original.copy()

print("原始字典:", original)  # 输出：原始字典: {'name': 'Alice', 'age': 30}
print("复制的字典:", copied)   # 输出：复制的字典: {'name': 'Alice', 'age': 30}

# 修改复制后的字典，原字典不受影响
copied['age'] = 31
copied['city'] = 'New York'
print("修改后的复制字典:", copied)   # 输出：修改后的复制字典: {'name': 'Alice', 'age': 31, 'city': 'New York'}
print("原始字典是否改变:", original)  # 输出：原始字典是否改变: {'name': 'Alice', 'age': 30}
```
**运行结果：**
```
原始字典: {'name': 'Alice', 'age': 30}
复制的字典: {'name': 'Alice', 'age': 30}
修改后的复制字典: {'name': 'Alice', 'age': 31, 'city': 'New York'}
原始字典是否改变: {'name': 'Alice', 'age': 30}
```

**一篇笔记：浅复制 (Shallow Copy) vs 深复制 (Deep Copy)**

`copy()` 方法执行的是**浅复制**。这意味着：
*   如果字典中的**值是不可变类型**（如数字、字符串、元组），那么复制后的值是独立的，修改一个字典中的值不会影响另一个。
*   如果字典中的**值是可变类型**（如列表、字典、集合等），那么复制的只是这个可变对象的**引用**（内存地址）。因此，原字典和复制字典会共享这个可变对象。修改其中一个字典中该可变对象的值，会影响到另一个字典。

**示例 - 浅复制的局限性：**
```python
original = {'name': 'Bob', 'hobbies': ['reading', 'gaming']}  # 'hobbies' 的值是一个列表（可变）
copied = original.copy()

# 修改 copied 中 'hobbies' 列表的元素
copied['hobbies'].append('coding')

print("原始字典的 hobbies:", original['hobbies'])  # 输出：原始字典的 hobbies: ['reading', 'gaming', 'coding']
print("复制字典的 hobbies:", copied['hobbies'])   # 输出：复制字典的 hobbies: ['reading', 'gaming', 'coding']
# 可以看到，原字典的列表也被修改了！

# 但如果是给 copied['hobbies'] 赋一个全新的列表，则不会影响 original
copied['hobbies'] = ['sports']
print("原始字典的 hobbies 不受影响:", original['hobbies'])  # 输出：原始字典的 hobbies 不受影响: ['reading', 'gaming', 'coding']
print("复制字典的新 hobbies:", copied['hobbies'])          # 输出：复制字典的新 hobbies: ['sports']
```

**如果需要完全独立的复制（深复制），即便是可变对象也完全复制一份新的，则需要使用 `copy` 模块的 `deepcopy()` 函数。**
```python
import copy

original = {'name': 'Bob', 'hobbies': ['reading', 'gaming']}
deep_copied = copy.deepcopy(original)

deep_copied['hobbies'].append('coding')

print("原始字典的 hobbies:", original['hobbies'])    # 输出：原始字典的 hobbies: ['reading', 'gaming'] (不受影响)
print("深复制字典的 hobbies:", deep_copied['hobbies'])  # 输出：深复制字典的 hobbies: ['reading', 'gaming', 'coding']
```
</details>

### 3. `dict.fromkeys(seq[, val])` - 创建新字典

<details>
<summary><b>点击查看：Python 字典(Dictionary) fromkeys()方法</b></summary>

**描述**
Python 字典 `fromkeys()` 函数用于**创建一个新的字典**。该字典以序列 `seq` 中的元素作为字典的键 (keys)，可选参数 `val` 作为这些键对应的初始值 (values)。如果不提供 `val`，则默认值为 `None`。

**语法**
`fromkeys()` 方法语法：
```python
dict.fromkeys(seq[, val])
```
通常也可以直接通过 `dict` 类调用：`dict.fromkeys(seq[, val])`

**参数**
*   `seq` -- 一个可迭代对象，其元素将作为新字典的键。
*   `val` (可选) -- 可选参数，设置字典中所有键对应的初始值。默认为 `None`。

**返回值**
*   该方法返回一个**新的字典**。

**实例**
以下实例展示了 `fromkeys()` 函数的使用方法：
```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

seq = ('Google', 'Runoob', 'Taobao')

# 不指定默认的键值，默认为 None
thisdict = dict.fromkeys(seq)
print("新字典 1 (默认值 None) : %s" % str(thisdict))

# 指定默认的键值为 10
thisdict = dict.fromkeys(seq, 10)
print("新字典 2 (默认值 10) : %s" % str(thisdict))

# 指定默认的键值为 'website'
thisdict = dict.fromkeys(seq, 'website')
print("新字典 3 (默认值 'website') : %s" % str(thisdict))
```
**以上实例输出结果为：**
```
新字典 1 (默认值 None) : {'Google': None, 'Runoob': None, 'Taobao': None}
新字典 2 (默认值 10) : {'Google': 10, 'Runoob': 10, 'Taobao': 10}
新字典 3 (默认值 'website') : {'Google': 'website', 'Runoob': 'website', 'Taobao': 'website'}
```

**一篇笔记：**

`fromkeys()` 方法**只用来创建新字典，不负责保存**。当通过一个字典对象来调用 `fromkeys()` 方法时（而不是直接用 `dict.fromkeys()`），它的行为可能会让人困惑：

*   它**不会修改调用它的那个字典对象**，而是**返回一个全新的字典**。
*   因此，如果需要后续使用这个新创建的字典，**一定记得要将它赋值给一个变量**。

**示例：**
```python
>>> dict1 = {}  # 创建一个空字典
>>> dict1.fromkeys((1, 2, 3), 'number')  # 调用 dict1 的 fromkeys 方法创建新字典
{1: 'number', 2: 'number', 3: 'number'}
>>> print(dict1)  # dict1 本身并没有被修改，仍然是空字典
{}
>>> dict2 = dict1.fromkeys((1, 2, 3), 'number')  # 将新创建的字典赋值给 dict2
>>> dict2  # 现在可以通过 dict2 访问新字典了
{1: 'number', 2: 'number', 3: 'number'}
```

**另一个注意点：**
如果 `val` 是一个**可变对象**（如列表、字典），那么所有的键都会共享这个对象的引用。修改这个对象会影响所有的键。

```python
>>> keys = ('a', 'b', 'c')
>>> value = [0]
>>> d = dict.fromkeys(keys, value)
>>> d
{'a': [0], 'b': [0], 'c': [0]}
>>> value.append(1)  # 修改原始 value 列表
>>> d
{'a': [0, 1], 'b': [0, 1], 'c': [0, 1]}  # 所有键的值都变了！
>>> d['a'].append(2)  # 修改 d['a'] 指向的列表
>>> d
{'a': [0, 1, 2], 'b': [0, 1, 2], 'c': [0, 1, 2]}  # 所有键的值都变了！
```
要避免这种情况，可以使用字典推导式来为每个键创建独立的可变对象：
```python
>>> d = {key: [0] for key in keys}
>>> d['a'].append(1)
>>> d
{'a': [0, 1], 'b': [0], 'c': [0]}  # 只有 'a' 的值变了
```
</details>

### 4. `dict.get(key, default=None)` - 返回指定键的值

<details>
<summary><b>点击查看：Python 字典(Dictionary) get()方法</b></summary>

**描述**
Python 字典(Dictionary) `get()` 函数用于**返回指定键 `key` 所对应的值**。如果字典中不存在该键，则返回指定的默认值 `default`（如果未提供 `default`，则默认返回 `None`）。

**语法**
`get()` 方法语法：
```python
dict.get(key, default=None)
```

**参数**
*   `key` -- 要在字典中查找的键。
*   `default` (可选) -- 如果指定的 `key` 不存在于字典中，则返回该默认值。默认为 `None`。

**返回值**
*   如果 `key` 在字典中存在，则返回 `key` 对应的 value。
*   如果 `key` 在字典中不存在，则返回 `default` 参数的值（如果提供），否则返回 `None`。

**实例**
以下实例展示了 `get()` 函数的使用方法：
```python
#!/usr/bin/python

tinydict = {'Name': 'Zara', 'Age': 27}

# 获取存在的键 'Name'
print("Name 值为 : %s" % tinydict.get('Name'))  # 输出：Name 值为 : Zara

# 获取存在的键 'Age'
print("Age 值为 : %s" % tinydict.get('Age'))    # 输出：Age 值为 : 27

# 获取不存在的键 'Sex'，使用默认的 default (None)
print("Sex 值为 : %s" % tinydict.get('Sex'))    # 输出：Sex 值为 : None (通常不会显示 None)

# 获取不存在的键 'Sex'，并指定 default 值为 'Female'
print("Sex 值为 : %s" % tinydict.get('Sex', 'Female'))  # 输出：Sex 值为 : Female

# 获取不存在的键 'Height'，并指定 default 值为 165
print("Height 值为 : %d" % tinydict.get('Height', 165))  # 输出：Height 值为 : 165
```
**以上实例输出结果为：**
```
Name 值为 : Zara
Age 值为 : 27
Sex 值为 : None
Sex 值为 : Female
Height 值为 : 165
```

**`get()` 方法 vs 直接使用 `dict[key]` 访问：**
*   **使用 `dict[key]`**：如果 `key` 不存在，会直接抛出 `KeyError` 异常。
*   **使用 `dict.get(key, default)`**：如果 `key` 不存在，会返回 `default` 值，避免了异常的发生，使代码更加健壮。

**推荐场景：**
当你不确定字典中是否存在某个键，并且希望在键不存在时有一个合理的默认行为时，优先使用 `get()` 方法。
</details>


### 5. `dict.has_key(key)` - 检查键是否存在 (Python 2.x)

<details>
<summary><b>点击查看：Python 字典(Dictionary) has_key()方法</b></summary>

**描述**
Python 字典(Dictionary) `has_key()` 方法用于**检查指定的键 `key` 是否存在于字典中**。如果键在字典中存在，则返回 `True`；否则返回 `False`。

**语法**
`has_key()` 方法语法：
```python
dict.has_key(key)
```

**参数**
*   `key` -- 要检查是否存在于字典中的键。

**返回值**
*   如果 `key` 在字典中存在，返回 `True`；否则返回 `False`。

**实例 (Python 2.x)**
以下实例展示了 `has_key()` 函数在 Python 2.x 中的使用方法：
```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

tinydict = {'Name': 'Zara', 'Age': 7}

print("Has key 'Name'? ", tinydict.has_key('Name'))  # 输出：Has key 'Name'?  True
print("Has key 'Sex'? ", tinydict.has_key('Sex'))    # 输出：Has key 'Sex'?  False
```
**以上 Python 2.x 实例输出结果为：**
```
Has key 'Name'?  True
Has key 'Sex'?  False
```

**一篇笔记：`has_key()` 在 Python 3.x 中的替代方案**
*   **重要提示：Python 3.x 中已经完全移除了 `has_key()` 方法**。如果你尝试在 Python 3.x 中使用它，会抛出 `AttributeError: 'dict' object has no attribute 'has_key'`。
*   **在 Python 3.x 中检查一个键是否存在于字典中，推荐使用 `in` 关键字**，这是一种更 Pythonic 且高效的方式。
    ```python
    # Python 3.x 示例
    tinydict = {'Name': 'Zara', 'Age': 7}
    print('Name' in tinydict)  # 输出：True
    print('Sex' in tinydict)   # 输出：False
    print('Sex' not in tinydict) # 输出：True (检查键不存在)
    ```
    `in` 关键字的用法更直观，也兼容 Python 2.7+。因此，无论使用哪个 Python 版本，都建议使用 `in` 关键字来替代 `has_key()` 方法。
</details>

### 6. `dict.items()` - 返回字典的键值对视图对象

<details>
<summary><b>点击查看：Python 字典(Dictionary) items()方法</b></summary>

**描述**
Python 字典(Dictionary) `items()` 方法用于**返回一个包含字典中所有键值对的视图对象 (view object)**。这个视图对象会动态反映字典的变化，即当字典发生改变时，视图对象也会随之改变。

**语法**
`items()` 方法语法：
```python
dict.items()
```

**参数**
*   NA（无参数）。

**返回值**
*   返回一个字典视图对象，该对象包含字典中每个元素的键值对 `(key, value)` 元组。在 Python 3.x 中，其类型是 `dict_items`。

**实例**
以下实例展示了 `items()` 函数的使用方法：
```python
tinydict = {'Name': 'Zara', 'Age': 7, 'City': 'Beijing'}

# 获取 items 视图对象
items_view = tinydict.items()
print("items_view:", items_view)       # 输出：items_view: dict_items([('Name', 'Zara'), ('Age', 7), ('City', 'Beijing')])
print("items_view 的类型:", type(items_view))  # 输出：items_view 的类型: <class 'dict_items'>

# 遍历 items_view - 方法 1: 使用两个变量分别接收键和值
print("\n使用两个变量遍历:")
for key, value in items_view:
    print(f"{key}: {value}")

# 遍历 items_view - 方法 2: 使用一个变量接收键值对元组
print("\n使用一个变量遍历 (获取元组):")
for item in items_view:
    print(item)
    # 也可以从元组中提取键和值
    # print(f"{item[0]}: {item[1]}")

# 字典视图对象是动态的，字典变化，视图也会变化
tinydict['Age'] = 8  # 修改字典中的值
tinydict['Country'] = 'China'  # 向字典中添加新的键值对
print("\n修改字典后，再次打印 items_view:", items_view)
```
**运行结果：**
```
items_view: dict_items([('Name', 'Zara'), ('Age', 7), ('City', 'Beijing')])
items_view 的类型: <class 'dict_items'>

使用两个变量遍历:
Name: Zara
Age: 7
City: Beijing

使用一个变量遍历 (获取元组):
('Name', 'Zara')
('Age', 7)
('City', 'Beijing')

修改字典后，再次打印 items_view: dict_items([('Name', 'Zara'), ('Age', 8), ('City', 'Beijing'), ('Country', 'China')])
```

**一篇笔记：`items()` 方法的遍历与应用**
`items()` 方法返回的 `dict_items` 对象是一个可迭代对象，非常适合用于遍历字典的键值对。

*   **当使用两个变量（如 `key, value`）进行遍历时**：
    迭代器会自动将每个 `(key, value)` 元组解包，分别赋值给 `key` 和 `value` 变量，这是最常用的方式，代码清晰易读。
    ```python
    d = {'one': 1, 'two': 2, 'three': 3}
    for key, value in d.items():
        print(f"{key}: {str(value)}")  # 字符串格式化输出
    # 输出:
    # one:1
    # two:2
    # three:3
    ```

*   **当使用一个变量（如 `item`）进行遍历时**：
    这个变量会接收每个完整的 `(key, value)` 元组。你可以直接使用这个元组，或者通过索引 `item[0]` (key) 和 `item[1]` (value) 来访问键和值。
    ```python
    d = {'one': 1, 'two': 2, 'three': 3}
    for item in d.items():
        print(item)           # 打印整个元组
        # print(f"{item[0]}: {item[1]}")  # 也可以这样访问
    # 输出:
    # ('one', 1)
    # ('two', 2)
    # ('three', 3)
    ```

*   **转换为列表**：
    如果需要一个静态的列表而非动态视图，可以使用 `list()` 函数将 `dict_items` 对象转换为包含 `(key, value)` 元组的列表。
    ```python
    d = {'one': 1, 'two': 2}
    items_list = list(d.items())
    print(items_list)  # 输出：[('one', 1), ('two', 2)]
    print(type(items_list))  # 输出：<class 'list'>
    ```
    转换后的列表不会再随原字典的变化而变化。

**Python 2.x 注意：**
在 Python 2.x 中，`items()` 方法返回的是一个包含 `(key, value)` 元组的**列表**（而非视图对象），类型是 `list`。Python 2.x 中还有一个 `iteritems()` 方法返回迭代器。而在 Python 3.x 中，`items()` 合并了 Python 2.x 中 `items()` 和 `iteritems()` 的功能，返回的是高效的视图对象。
</details>

### 7. `dict.keys()` - 返回字典的键视图对象

<details>
<summary><b>点击查看：Python 字典(Dictionary) keys()方法</b></summary>

**描述**
Python 字典(Dictionary) `keys()` 方法用于**返回一个包含字典中所有键 (key) 的视图对象 (view object)**。这个视图对象会动态反映字典的变化。

**语法**
`keys()` 方法语法：
```python
dict.keys()
```

**参数**
*   NA（无参数）。

**返回值**
*   返回一个字典视图对象，该对象包含字典中所有的键。在 Python 3.x 中，其类型是 `dict_keys`。

**实例**
以下实例展示了 `keys()` 函数的使用方法：
```python
tinydict = {'Name': 'Zara', 'Age': 7, 'City': 'Beijing'}

# 获取 keys 视图对象
keys_view = tinydict.keys()
print("keys_view:", keys_view)         # 输出：keys_view: dict_keys(['Name', 'Age', 'City'])
print("keys_view 的类型:", type(keys_view))  # 输出：keys_view 的类型: <class 'dict_keys'>

# 遍历 keys_view
print("\n遍历所有键:")
for key in keys_view:
    print(key)

# 检查键是否在 keys_view 中 (通常直接用 'key in dict' 更简洁)
print("\n'Name' 在 keys_view 中吗?", 'Name' in keys_view)  # 输出：'Name' 在 keys_view 中吗? True

# 字典视图对象是动态的
tinydict['Country'] = 'China'  # 添加新键值对
print("\n添加新键后，keys_view:", keys_view)  # 输出：添加新键后，keys_view: dict_keys(['Name', 'Age', 'City', 'Country'])
```
**运行结果：**
```
keys_view: dict_keys(['Name', 'Age', 'City'])
keys_view 的类型: <class 'dict_keys'>

遍历所有键:
Name
Age
City

'Name' 在 keys_view 中吗? True

添加新键后，keys_view: dict_keys(['Name', 'Age', 'City', 'Country'])
```

**一篇笔记：`keys()` 方法与 `in` 关键字**
*   `keys()` 方法主要用于需要获取字典所有键的场景，例如遍历字典的键。
*   **检查某个键是否存在于字典中，更推荐直接使用 `key in dict` 语法**，而不是 `key in dict.keys()`。虽然两者在 Python 3.x 中效果相同（因为 `keys()` 返回的视图对象支持 `in` 操作），但 `key in dict` 更简洁、直观且高效。
    ```python
    d = {'a': 1, 'b': 2}
    print('a' in d)          # 推荐，输出：True
    print('a' in d.keys())   # 等效，但不常用
    ```

*   **转换为列表**：
    如果需要一个静态的键列表，可以使用 `list()` 函数将 `dict_keys` 对象转换为列表。
    ```python
    d = {'a': 1, 'b': 2}
    keys_list = list(d.keys())
    print(keys_list)  # 输出：['a', 'b']
    print(type(keys_list))  # 输出：<class 'list'>
    ```

**Python 2.x 注意：**
在 Python 2.x 中，`keys()` 方法返回的是一个包含所有键的**列表**（类型是 `list`）。Python 2.x 中还有一个 `iterkeys()` 方法返回键的迭代器。Python 3.x 中的 `keys()` 返回的是动态视图对象 `dict_keys`。
</details>

### 8. `dict.setdefault(key, default=None)` - 获取键值，若键不存在则设置默认值

<details>
<summary><b>点击查看：Python 字典(Dictionary) setdefault()方法</b></summary>

**描述**
Python 字典(Dictionary) `setdefault()` 方法与 `get()` 方法类似，用于**返回指定键 `key` 对应的值**。如果字典中不存在该键，则会**将该键和指定的默认值 `default` 添加到字典中**，然后返回 `default`。

**语法**
`setdefault()` 方法语法：
```python
dict.setdefault(key, default=None)
```

**参数**
*   `key` -- 要查找的键。
*   `default` (可选) -- 如果 `key` 不存在于字典中，则将 `key` 的值设为 `default`。默认为 `None`。

**返回值**
*   如果 `key` 在字典中存在，则返回 `key` 对应的 value。
*   如果 `key` 在字典中不存在，则将 `key: default` 添加到字典中，并返回 `default`。

**实例**
以下实例展示了 `setdefault()` 函数的使用方法：
```python
tinydict = {'Name': 'Zara', 'Age': 7}

# 1. 获取存在的键 'Name'
name = tinydict.setdefault('Name', 'Li Ming')
print("Name 的值:", name)          # 输出：Name 的值: Zara (原字典中存在，返回原值)
print("当前字典:", tinydict)       # 输出：当前字典: {'Name': 'Zara', 'Age': 7} (字典未改变)

# 2. 获取不存在的键 'Sex'，使用默认 default (None)
sex = tinydict.setdefault('Sex')
print("Sex 的值:", sex)            # 输出：Sex 的值: None (键不存在，返回默认 None)
print("当前字典:", tinydict)       # 输出：当前字典: {'Name': 'Zara', 'Age': 7, 'Sex': None} (键 'Sex' 已被添加)

# 3. 获取不存在的键 'City'，并指定 default 值为 'Beijing'
city = tinydict.setdefault('City', 'Beijing')
print("City 的值:", city)          # 输出：City 的值: Beijing (键不存在，返回指定的 default)
print("当前字典:", tinydict)       # 输出：当前字典: {'Name': 'Zara', 'Age': 7, 'Sex': None, 'City': 'Beijing'} (键 'City' 已被添加)

# 4. 再次获取已添加的键 'City'，尝试修改 default 值 (不会生效)
city2 = tinydict.setdefault('City', 'Shanghai')
print("City2 的值:", city2)        # 输出：City2 的值: Beijing (键已存在，返回现有值，忽略新的 default)
print("当前字典:", tinydict)       # 输出：当前字典: {'Name': 'Zara', 'Age': 7, 'Sex': None, 'City': 'Beijing'} (字典未改变)
```
**运行结果：**
```
Name 的值: Zara
当前字典: {'Name': 'Zara', 'Age': 7}
Sex 的值: None
当前字典: {'Name': 'Zara', 'Age': 7, 'Sex': None}
City 的值: Beijing
当前字典: {'Name': 'Zara', 'Age': 7, 'Sex': None, 'City': 'Beijing'}
City2 的值: Beijing
当前字典: {'Name': 'Zara', 'Age': 7, 'Sex': None, 'City': 'Beijing'}
```

**一篇笔记：`setdefault()` vs `get()` vs `dict[key] = value`**
*   **`dict.get(key, default)`**: 仅获取值。如果键不存在，返回 `default`，**但不会修改原字典**。
*   **`dict.setdefault(key, default)`**: 获取值。如果键不存在，**会将 `key: default` 添加到字典中**，然后返回 `default`。它是一种简洁的 "获取值，如果不存在则设置默认值并返回" 的操作。
*   **`if key not in dict: dict[key] = default` + `dict[key]`**: 这与 `setdefault()` 效果类似，但 `setdefault()` 用一行代码即可完成。

**`setdefault()` 的应用场景：**
当你需要确保某个键存在于字典中，如果不存在则使用默认值初始化它，然后再进行后续操作时，`setdefault()` 非常有用。例如，在处理嵌套字典或统计词频时：

**示例：统计列表中元素出现的次数**
```python
words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
word_count = {}

for word in words:
    # 如果 word 不存在，则设置 word_count[word] = 0，然后返回 0；否则返回现有值
    # 然后将该值 +1
    word_count.setdefault(word, 0)
    word_count[word] += 1

print(word_count)  # 输出：{'apple': 3, 'banana': 2, 'orange': 1}
```
这个例子中，`setdefault(word, 0)` 确保了每次循环时 `word` 键都存在，初始值为 0，然后我们才能安全地进行 `+=1` 操作。这比使用 `if-else` 判断更简洁。
</details>


### 9. `dict.update(dict2)` - 更新字典

<details>
<summary><b>点击查看：Python 字典(Dictionary) update()方法</b></summary>

**描述**
Python 字典(Dictionary) `update()` 方法用于**将另一个字典 `dict2` 中的键值对更新到当前字典 `dict` 中**。如果 `dict2` 中的键在 `dict` 中已存在，则该键的值会被 `dict2` 中的值覆盖；如果 `dict2` 中的键在 `dict` 中不存在，则该键值对会被添加到 `dict` 中。

**语法**
`update()` 方法语法：
```python
dict.update(dict2)
```

**参数**
*   `dict2` -- 包含键值对的字典，或者是一个可迭代的键值对序列（如列表、元组构成的 (key, value) 对）。

**返回值**
*   该方法没有返回值（返回 `None`），它直接修改原字典。

**实例**
以下实例展示了 `update()` 函数的使用方法：

**实例 1：使用字典更新**
```python
tinydict = {'Name': 'Zara', 'Age': 7}
dict2 = {'Age': 8, 'City': 'Beijing'}

# 使用 dict2 更新 tinydict
tinydict.update(dict2)
print("更新后的 tinydict:", tinydict)  # 输出：更新后的 tinydict: {'Name': 'Zara', 'Age': 8, 'City': 'Beijing'}
# 'Age' 键已存在，值被覆盖；'City' 键不存在，被添加
```

**实例 2：使用可迭代对象（如列表的元组）更新**
```python
tinydict = {'Name': 'Zara'}
# 可迭代对象是一个包含 (key, value) 元组的列表
iterable = [('Age', 9), ('City', 'Shanghai'), ('Country', 'China')]

tinydict.update(iterable)
print("使用可迭代对象更新后的 tinydict:", tinydict)  # 输出：使用可迭代对象更新后的 tinydict: {'Name': 'Zara', 'Age': 9, 'City': 'Shanghai', 'Country': 'China'}
```

**实例 3：使用关键字参数形式更新 (键名必须是有效的 Python 标识符)**
```python
tinydict = {'Name': 'Zara'}
tinydict.update(Age=10, City='Guangzhou')  # 注意这里 Age 和 City 不带引号，是关键字参数
print("使用关键字参数更新后的 tinydict:", tinydict)  # 输出：使用关键字参数更新后的 tinydict: {'Name': 'Zara', 'Age': 10, 'City': 'Guangzhou'}
```

**运行结果综合：**
```
更新后的 tinydict: {'Name': 'Zara', 'Age': 8, 'City': 'Beijing'}
使用可迭代对象更新后的 tinydict: {'Name': 'Zara', 'Age': 9, 'City': 'Shanghai', 'Country': 'China'}
使用关键字参数更新后的 tinydict: {'Name': 'Zara', 'Age': 10, 'City': 'Guangzhou'}
```

**注意：**
*   `update()` 方法会**直接修改原字典**。
*   如果 `dict2` 不是一个字典，而是一个可迭代对象，那么这个可迭代对象的每个元素都必须是一个包含两个元素的子序列（如元组或列表），其中第一个元素作为键，第二个元素作为值。
</details>

### 10. `dict.values()` - 返回字典的值视图对象

<details>
<summary><b>点击查看：Python 字典(Dictionary) values()方法</b></summary>

**描述**
Python 字典(Dictionary) `values()` 方法用于**返回一个包含字典中所有值 (value) 的视图对象 (view object)**。这个视图对象会动态反映字典的变化。

**语法**
`values()` 方法语法：
```python
dict.values()
```

**参数**
*   NA（无参数）。

**返回值**
*   返回一个字典视图对象，该对象包含字典中所有的值。在 Python 3.x 中，其类型是 `dict_values`。

**实例**
以下实例展示了 `values()` 函数的使用方法：
```python
tinydict = {'Name': 'Zara', 'Age': 7, 'City': 'Beijing'}

# 获取 values 视图对象
values_view = tinydict.values()
print("values_view:", values_view)       # 输出：values_view: dict_values(['Zara', 7, 'Beijing'])
print("values_view 的类型:", type(values_view))  # 输出：values_view 的类型: <class 'dict_values'>

# 遍历 values_view
print("\n遍历所有值:")
for value in values_view:
    print(value)

# 字典视图对象是动态的，字典变化，视图也会变化
tinydict['Age'] = 8  # 修改字典中的值
tinydict['Country'] = 'China'  # 向字典中添加新的键值对
print("\n修改字典后，再次打印 values_view:", values_view)
```
**运行结果：**
```
values_view: dict_values(['Zara', 7, 'Beijing'])
values_view 的类型: <class 'dict_values'>

遍历所有值:
Zara
7
Beijing

修改字典后，再次打印 values_view: dict_values(['Zara', 8, 'Beijing', 'China'])
```

**一篇笔记：**
*   `values()` 方法返回的 `dict_values` 视图对象主要用于遍历字典中的值。
*   **检查某个值是否在字典中**，可以使用 `value in dict.values()`。但请注意，字典的设计初衷是通过键快速查找值，通过值查找键效率较低，尤其是在大字典中。
    ```python
    d = {'a': 1, 'b': 2}
    print(1 in d.values())  # 输出：True
    ```

*   **转换为列表**：
    如果需要一个静态的值列表，可以使用 `list()` 函数将 `dict_values` 对象转换为列表。
    ```python
    d = {'a': 1, 'b': 2}
    values_list = list(d.values())
    print(values_list)  # 输出：[1, 2]
    print(type(values_list))  # 输出：<class 'list'>
    ```
    转换后的列表不会再随原字典的变化而变化。

**Python 2.x 注意：**
在 Python 2.x 中，`values()` 方法返回的是一个包含所有值的**列表**（而非视图对象），类型是 `list`。Python 2.x 中还有一个 `itervalues()` 方法返回值的迭代器。Python 3.x 中的 `values()` 返回的是动态视图对象 `dict_values`。
</details>

### 11. `dict.pop(key[, default])` - 删除并返回指定键的值

<details>
<summary><b>点击查看：Python 字典(Dictionary) pop()方法</b></summary>

**描述**
Python 字典(Dictionary) `pop()` 方法用于**删除字典中指定键 `key` 所对应的键值对，并返回该键对应的值**。如果指定的键 `key` 不存在于字典中，则返回 `default` 参数的值（如果提供了 `default`）；如果没有提供 `default` 且 `key` 不存在，则会抛出 `KeyError` 异常。

**语法**
`pop()` 方法语法：
```python
dict.pop(key[, default])
```

**参数**
*   `key` -- 要删除的键。
*   `default` (可选) -- 如果 `key` 不存在，返回该默认值。

**返回值**
*   返回被删除键 `key` 所对应的值。如果 `key` 不存在且提供了 `default`，则返回 `default`。

**实例**
以下实例展示了 `pop()` 函数的使用方法：
```python
tinydict = {'Name': 'Zara', 'Age': 7, 'City': 'Beijing'}

# 1. 删除存在的键 'Age'，并返回其值
age = tinydict.pop('Age')
print("被删除的 'Age' 值为:", age)  # 输出：被删除的 'Age' 值为: 7
print("删除 'Age' 后的字典:", tinydict)  # 输出：删除 'Age' 后的字典: {'Name': 'Zara', 'City': 'Beijing'}

# 2. 删除不存在的键 'Sex'，并提供默认值 'Unknown'
sex = tinydict.pop('Sex', 'Unknown')
print("删除 'Sex' 返回的默认值为:", sex)  # 输出：删除 'Sex' 返回的默认值为: Unknown
print("字典没有 'Sex' 键，保持不变:", tinydict)  # 输出：字典没有 'Sex' 键，保持不变: {'Name': 'Zara', 'City': 'Beijing'}

# 3. 删除不存在的键 'Height'，不提供默认值，会抛出 KeyError
try:
    height = tinydict.pop('Height')
except KeyError as e:
    print("尝试删除不存在的键 'Height' 时发生错误:", e)  # 输出：尝试删除不存在的键 'Height' 时发生错误: 'Height'
```
**运行结果：**
```
被删除的 'Age' 值为: 7
删除 'Age' 后的字典: {'Name': 'Zara', 'City': 'Beijing'}
删除 'Sex' 返回的默认值为: Unknown
字典没有 'Sex' 键，保持不变: {'Name': 'Zara', 'City': 'Beijing'}
尝试删除不存在的键 'Height' 时发生错误: 'Height'
```

**`pop()` 与 `del` 语句的比较：**
*   `dict.pop(key)`: 用于删除指定键并**返回其值**，功能更丰富。
*   `del dict[key]`: 也用于删除指定键，但**没有返回值**。如果键不存在，同样会抛出 `KeyError`。
    ```python
    d = {'a': 1}
    del d['a']
    # print(d.pop('a'))  # 会报错，因为 'a' 已被删除
    ```
</details>

### 12. `dict.popitem()` - 删除并返回最后一对键值对

<details>
<summary><b>点击查看：Python 字典(Dictionary) popitem()方法</b></summary>

**描述**
Python 字典(Dictionary) `popitem()` 方法用于**删除并返回字典中的最后一对键值对 (key, value) 元组**。如果字典为空，则会抛出 `KeyError` 异常。

**语法**
`popitem()` 方法语法：
```python
dict.popitem()
```

**参数**
*   NA（无参数）。

**返回值**
*   返回一个包含被删除键值对的元组 `(key, value)`。

**实例**
以下实例展示了 `popitem()` 函数的使用方法：
```python
# 非空字典
tinydict = {'Name': 'Zara', 'Age': 7, 'City': 'Beijing'}

# 删除并返回最后一对键值对
item = tinydict.popitem()
print("被删除的键值对:", item)  # 输出：被删除的键值对: ('City', 'Beijing') (在 Python 3.7+ 中是插入顺序的最后一个)
print("删除后 tinydict:", tinydict)  # 输出：删除后 tinydict: {'Name': 'Zara', 'Age': 7}

# 再删除一个
item = tinydict.popitem()
print("再次被删除的键值对:", item)  # 输出：再次被删除的键值对: ('Age', 7)
print("再次删除后 tinydict:", tinydict)  # 输出：再次删除后 tinydict: {'Name': 'Zara'}

# 空字典调用 popitem()
empty_dict = {}
try:
    empty_dict.popitem()
except KeyError as e:
    print("空字典调用 popitem() 发生错误:", e)  # 输出：空字典调用 popitem() 发生错误: popitem from empty dictionary
```
**运行结果（Python 3.7+，保证插入顺序）：**
```
被删除的键值对: ('City', 'Beijing')
删除后 tinydict: {'Name': 'Zara', 'Age': 7}
再次被删除的键值对: ('Age', 7)
再次删除后 tinydict: {'Name': 'Zara'}
空字典调用 popitem() 发生错误: popitem from empty dictionary
```

**一篇笔记：`popitem()` 的顺序**
*   **Python 3.7+：** `popitem()` 始终删除并返回字典中**最后插入**的键值对 (LIFO - Last In, First Out 顺序)。这使得字典可以用作简单的栈。
*   **Python 3.6 及之前版本（包括 Python 2.x）：** 字典是无序的（或伪随机有序），`popitem()` 会删除并返回任意一个键值对（通常是内部哈希表中的最后一个）。因此，在这些版本中，`popitem()` 的行为是不可预测的。

**`popitem()` 的应用场景：**
`popitem()` 在需要逐个处理并删除字典中所有键值对的场景下非常有用，例如在实现某些算法或需要清空字典并同时处理其内容时。由于它返回被删除的键值对，我们可以方便地获取键和值进行后续操作。
</details>

---

我们已经介绍了字典大部分常用的内置方法。这些方法为字典的增删改查提供了强大的支持

## 练习

### 练习 1：字典的创建与访问
**题目：**
1.  创建一个名为 `student` 的字典，包含以下键值对：`'name'` 对应 `'Alice'`，`'age'` 对应 `20`，`'major'` 对应 `'Computer Science'`。
2.  打印 `student` 字典。
3.  访问并打印学生的年龄（`'age'` 键对应的值）。
4.  使用 `get()` 方法获取学生的 `'grade'` 键对应的值，如果不存在，返回 `'A'`。

<details>
<summary><b>点击查看参考答案</b></summary>

```python
# 1. 创建 student 字典
student = {
    'name': 'Alice',
    'age': 20,
    'major': 'Computer Science'
}

# 2. 打印字典
print("学生信息:", student)  # 输出：学生信息: {'name': 'Alice', 'age': 20, 'major': 'Computer Science'}

# 3. 访问并打印年龄
print("学生年龄:", student['age'])  # 输出：学生年龄: 20

# 4. 使用 get() 方法获取 'grade'，默认 'A'
grade = student.get('grade', 'A')
print("学生成绩 (默认 A):", grade)  # 输出：学生成绩 (默认 A): A
```
</details>

---

### 练习 2：字典的修改、添加与删除
**题目：**
给定字典 `person = {'name': 'Bob', 'age': 25}`。
1. 将 `'age'` 的值修改为 `26`。
2. 为字典添加一个新的键值对：`'city'` 对应 `'Shanghai'`。
3. 使用 `pop()` 方法删除 `'age'` 键，并打印被删除的值。
4. 打印修改后的字典。

<details>
<summary><b>点击查看参考答案</b></summary>

```python
person = {'name': 'Bob', 'age': 25}

# 1. 修改 'age' 的值为 26
person['age'] = 26
print("修改年龄后:", person)  # 输出：修改年龄后: {'name': 'Bob', 'age': 26}

# 2. 添加新键值对 'city': 'Shanghai'
person['city'] = 'Shanghai'
print("添加城市后:", person)  # 输出：添加城市后: {'name': 'Bob', 'age': 26, 'city': 'Shanghai'}

# 3. 使用 pop() 删除 'age' 并打印
deleted_age = person.pop('age')
print("被删除的年龄:", deleted_age)  # 输出：被删除的年龄: 26

# 4. 打印修改后的字典
print("最终字典:", person)  # 输出：最终字典: {'name': 'Bob', 'city': 'Shanghai'}
```
</details>

---

### 练习 3：字典的遍历
**题目：**
给定字典 `scores = {'Math': 90, 'English': 85, 'Science': 95}`。
1. 遍历字典，打印所有的科目（键）。
2. 遍历字典，打印所有的分数（值）。
3. 遍历字典，打印每个科目及其对应的分数，格式为：`"Math: 90"`。

<details>
<summary><b>点击查看参考答案</b></summary>

```python
scores = {'Math': 90, 'English': 85, 'Science': 95}

# 1. 遍历所有科目（键）
print("所有科目:")
for subject in scores.keys():
    print(subject)

# 2. 遍历所有分数（值）
print("\n所有分数:")
for score in scores.values():
    print(score)

# 3. 遍历键值对，打印科目和分数
print("\n科目与分数:")
for subject, score in scores.items():
    print(f"{subject}: {score}")
```
**运行结果：**
```
所有科目:
Math
English
Science

所有分数:
90
85
95

科目与分数:
Math: 90
English: 85
Science: 95
```
</details>

---

### 练习 4：字典的内置方法应用
**题目：**
1.  使用 `fromkeys()` 方法创建一个新字典 `fruits`，以列表 `['apple', 'banana', 'orange']` 中的元素为键，所有键的初始值设为 `0`。
2.  使用 `update()` 方法，将字典 `{'banana': 5, 'grape': 3}` 更新到 `fruits` 中。
3.  使用 `setdefault()` 方法为 `fruits` 字典添加键 `'apple'`，值设为 `10`（观察是否会覆盖原有的值）。
4.  使用 `setdefault()` 方法为 `fruits` 字典添加键 `'mango'`，值设为 `2`。
5.  打印最终的 `fruits` 字典。

<details>
<summary><b>点击查看参考答案</b></summary>

```python
# 1. 使用 fromkeys() 创建初始值为 0 的字典
fruits = dict.fromkeys(['apple', 'banana', 'orange'], 0)
print("步骤1 - fromkeys 创建后:", fruits)  # 输出：步骤1 - fromkeys 创建后: {'apple': 0, 'banana': 0, 'orange': 0}

# 2. 使用 update() 方法更新字典
fruits.update({'banana': 5, 'grape': 3})
print("步骤2 - update 后:", fruits)  # 输出：步骤2 - update 后: {'apple': 0, 'banana': 5, 'orange': 0, 'grape': 3}

# 3. 使用 setdefault() 添加已存在的键 'apple'，值设为 10 (不会覆盖)
fruits.setdefault('apple', 10)
print("步骤3 - setdefault 'apple' 后:", fruits)  # 输出：步骤3 - setdefault 'apple' 后: {'apple': 0, 'banana': 5, 'orange': 0, 'grape': 3}

# 4. 使用 setdefault() 添加不存在的键 'mango'，值设为 2
fruits.setdefault('mango', 2)
print("步骤4 - setdefault 'mango' 后:", fruits)  # 输出：步骤4 - setdefault 'mango' 后: {'apple': 0, 'banana': 5, 'orange': 0, 'grape': 3, 'mango': 2}

# 5. 打印最终字典
print("最终 fruits 字典:", fruits)
```
**最终输出：**
```
最终 fruits 字典: {'apple': 0, 'banana': 5, 'orange': 0, 'grape': 3, 'mango': 2}
```
</details>

---

### 练习 5：综合应用 - 统计单词频率
**题目：**
给定一个字符串 `text = "hello world hello python hello"`，请统计其中每个单词出现的频率，并将结果存储在一个字典中，键为单词，值为出现的次数。最后打印这个频率字典。

<details>
<summary><b>点击查看参考答案</b></summary>

```python
text = "hello world hello python hello"

# 步骤1: 将字符串分割成单词列表
words = text.split()  # 默认按空格分割，得到 ['hello', 'world', 'hello', 'python', 'hello']

# 步骤2: 初始化一个空字典用于存储频率
word_count = {}

# 步骤3: 遍历单词列表，统计频率
for word in words:
    # 方法一：使用 if-else
    # if word in word_count:
    #     word_count[word] += 1
    # else:
    #     word_count[word] = 1

    # 方法二：使用 get() 方法
    # word_count[word] = word_count.get(word, 0) + 1

    # 方法三：使用 setdefault() 方法
    word_count.setdefault(word, 0)
    word_count[word] += 1

# 步骤4: 打印频率字典
print("单词频率统计:", word_count)  # 输出：单词频率统计: {'hello': 3, 'world': 1, 'python': 1}
```
**解释：**
*   `text.split()` 将字符串按空格分割成单词列表。
*   遍历每个单词，使用 `setdefault(word, 0)` 确保单词在字典中存在，初始值为 0。
*   然后将该单词的计数加 1。
*   最终得到每个单词的出现次数。
</details>

---

### 练习 6：综合应用 - 嵌套字典的访问与修改
**题目：**
给定一个嵌套字典，表示一个班级的学生信息：
```python
class_info = {
    'class_name': 'Python Class',
    'students': [
        {'name': 'Alice', 'age': 20, 'scores': {'Math': 90, 'English': 85}},
        {'name': 'Bob', 'age': 21, 'scores': {'Math': 88, 'English': 92}},
        {'name': 'Charlie', 'age': 19, 'scores': {'Math': 78, 'English': 80}}
    ]
}
```
1. 打印班级名称 `'class_name'`。
2. 打印第二个学生（索引为 1）的姓名。
3. 打印第一个学生的数学成绩。
4. 将第三个学生的英语成绩修改为 85。
5. 为第一个学生的 `'scores'` 字典添加一个键值对 `'Science': 95`。
6. 打印修改后的 `class_info` 字典（可以只打印相关部分验证）。

<details>
<summary><b>点击查看参考答案</b></summary>

```python
class_info = {
    'class_name': 'Python Class',
    'students': [
        {'name': 'Alice', 'age': 20, 'scores': {'Math': 90, 'English': 85}},
        {'name': 'Bob', 'age': 21, 'scores': {'Math': 88, 'English': 92}},
        {'name': 'Charlie', 'age': 19, 'scores': {'Math': 78, 'English': 80}}
    ]
}

# 1. 打印班级名称
print("班级名称:", class_info['class_name'])  # 输出：班级名称: Python Class

# 2. 打印第二个学生（索引 1）的姓名
second_student_name = class_info['students'][1]['name']
print("第二个学生姓名:", second_student_name)  # 输出：第二个学生姓名: Bob

# 3. 打印第一个学生的数学成绩
first_student_math = class_info['students'][0]['scores']['Math']
print("第一个学生数学成绩:", first_student_math)  # 输出：第一个学生数学成绩: 90

# 4. 将第三个学生的英语成绩修改为 85
class_info['students'][2]['scores']['English'] = 85
print("修改后第三个学生的英语成绩:", class_info['students'][2]['scores']['English'])  # 输出：修改后第三个学生的英语成绩: 85

# 5. 为第一个学生的 'scores' 添加 'Science': 95
class_info['students'][0]['scores']['Science'] = 95
print("第一个学生的科学成绩:", class_info['students'][0]['scores']['Science'])  # 输出：第一个学生的科学成绩: 95

# 6. 打印修改后的部分信息以验证
print("\n修改后的第一个学生信息:", class_info['students'][0])
print("修改后的第三个学生成绩:", class_info['students'][2]['scores'])
```
**运行结果：**
```
班级名称: Python Class
第二个学生姓名: Bob
第一个学生数学成绩: 90
修改后第三个学生的英语成绩: 85
第一个学生的科学成绩: 95

修改后的第一个学生信息: {'name': 'Alice', 'age': 20, 'scores': {'Math': 90, 'English': 85, 'Science': 95}}
修改后的第三个学生成绩: {'Math': 78, 'English': 85}
```
</details>

---

希望这些练习能帮助你更好地理解和掌握 Python 字典的各种操作！字典是 Python 中非常强大和常用的数据结构，多动手练习，熟悉这些方法的使用场景，对你后续的 Python 编程会有很大帮助。如果遇到困难，随时回顾前面的知识点或者查看参考答案。也可在评论区提出自己的疑问。加油！

