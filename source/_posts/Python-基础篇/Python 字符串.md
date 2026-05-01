---
title: Python 字符串
date: 2025-10-28 10:40:12
tags: 
  - 编程
categories:
  - 编程
  - Python 教程
---

# Python 字符串

字符串（String）是我们在编程中处理文本信息时最常用、最基础的数据类型。无论是你看到的网站文字、手机 App 里的消息，还是游戏中的对话，背后都离不开字符串的身影

对于刚接触编程的你来说，理解字符串是什么以及如何使用它，是非常重要的第一步

## 一、什么是字符串？

**字符串**，顾名思义，就是由一系列**字符**连接而成的串。这里的“字符”可以是：
*   英文字母：`A, B, C, ..., a, b, c, ...`
*   数字：`0, 1, 2, ..., 9`
*   标点符号：`!, @, #, $, ., ,, 空格` 等等
*   甚至是中文、英文、特殊符号等。

在 Python 中，**字符串是一种数据类型**，专门用来表示和存储文本信息

## 二、如何创建字符串？

创建字符串非常简单，你只需要用一对**引号**把你想要表示的文本内容括起来就行。Python 接受三种引号方式：

### 2.1 单引号  `'` 

用单引号 `' '` 括起来的内容就是一个字符串。

```python
# 用单引号创建字符串
var1 = 'Hello World!'  # var1 现在就是一个字符串变量，里面存着 "Hello World!"
var2 = 'Python 真有趣！'
print(var1)
print(var2)
```

### 2.2 双引号  `"` 

用双引号 `" "` 括起来的内容也是一个字符串。它和单引号在大多数情况下是完全一样的。

```python
# 用双引号创建字符串
var3 = "I love Python"
var4 = "12345"  # 注意：虽然内容是数字，但用引号括起来就是字符串，不是数字类型哦！
print(var3)
print(var4)
```

**单引号和双引号的小技巧：**
如果你想在字符串内部包含单引号，那么字符串的外部就用双引号；反之亦然。这样可以避免冲突。

例如：
```python
print("He said 'Hello' to me.")  # 输出: He said 'Hello' to me.
print('She said "Hi there!"')    # 输出: She said "Hi there!"
```

### 2.3 三引号  `'''` 或 `"""` 

三引号 `''' '''` 或 `""" """` 用于创建**多行字符串**，或者包含复杂引号的字符串。

```python
# 用三引号创建多行字符串
poem = '''床前明月光，
疑是地上霜。
举头望明月，
低头思故乡。'''
print(poem)

# 也可以用三个双引号
story = """Once upon a time,
there was a little girl..."""
print(story)
```

## 三、Python 中没有单个字符类型！

在有些编程语言中，会区分“单个字符”（如 `'A'`）和“字符串”（如 `"Hello"`）。但在 Python 中，**没有专门的字符类型**！哪怕你只写一个字符，比如 `'A'` 或 `"B"`，它在 Python 中仍然被视为一个**长度为 1 的字符串**。

换句话说，Python 中的所有文本，无论长短，都是字符串

## 四、访问字符串中的字符

字符串就像一排整齐的小房子，每个字符都住在一个固定的位置上。我们可以通过这个位置编号（你也可以看作是门牌号）来找到并访问特定的字符。这个位置编号在编程中叫做**索引**（Index）。

### 4.1 索引的表示：方括号 `[]`

在 Python 中，我们使用**方括号 `[]`** 并在里面写上索引数字，来访问字符串中对应位置的字符。

**语法：**
```python
字符串变量名[索引]
```

### 4.2 索引从 0 开始！这很重要！！！

**这是初学者最容易犯迷糊的地方之一！**
在 Python 中，字符串的第一个字符的索引是 **0**，第二个字符的索引是 **1**，第三个是 **2**，以此类推。

你可以这么想：
字符串:  `H   e   l   l   o`
索引:    `0   1   2   3   4`

**实例：**
```python
var1 = 'Hello World!'
print(var1[0])   # 访问索引为 0 的字符，也就是第一个字符
print(var1[1])   # 访问索引为 1 的字符，也就是第二个字符
```

**输出结果：**
```
H
e
```

### 4.3 访问一段字符

除了访问单个字符，我们还可以一次性访问字符串中**连续的一段字符**，这叫做**切片**（Slicing）

**语法：**
```python
字符串变量名[开始索引 : 结束索引]
```
*   **开始索引**：表示从哪个位置开始截取（这也包含该位置的字符）。
*   **结束索引**：表示截取到哪个位置结束（这并**不包含**该位置的字符）。
*   结果是一个新的字符串，包含了从 `开始索引` 到 `结束索引-1` 的所有字符。

**实例：**
```python
var2 = "Python Runoob"
print(var2[1:5])  # 从索引 1 开始，到索引 5 结束（不包含索引5的字符）
```

**我们来分析一下 `var2 = "Python Runoob"`：**
字符:   P  y  t  h  o  n     R  u  n  o  o  b
索引:   0  1  2  3  4  5  6  7  8  9 10 11 12

`var2[1:5]` 就是从索引 1 (`y`) 开始，取到索引 5 之前（也就是索引 4）的字符：`y` (1), `t` (2), `h` (3), `o` (4)。

**所以输出结果是：**
```
ytho
```

**切片的一些小技巧：**
*   如果省略 `开始索引`，则默认从索引 0 开始。例如 `var2[:5]` 等价于 `var2[0:5]`。
*   如果省略 `结束索引`，则默认截取到字符串的末尾。例如 `var2[7:]` 表示从索引7开始一直取到最后。
*   你也可以尝试 `var2[:]`，它会得到整个字符串的拷贝。

## 五、字符串的连接

有时候，我们需要把两个或多个字符串合并成一个新的字符串，这就叫做**字符串连接**。在 Python 中，使用 **`+` 运算符** 就可以实现

### 5.1 简单的字符串连接

```python
str1 = "Hello"
str2 = "World"
combined_str = str1 + " " + str2  # "Hello" + " " + "World" = "Hello World"
print(combined_str)  # 输出: Hello World
```

### 5.2 结合切片的连接

我们可以先对字符串进行切片，截取一部分，然后再和其他字符串连接。

```python
var1 = 'Hello World!'
# 截取 var1 从开始到索引 6 (不包含6) 的部分，也就是 "Hello "，然后连接上 "Runoob!"
new_str = var1[:6] + 'Runoob!'  # var1[:6] 是 "Hello " (因为 var1[0:6] 是 'H','e','l','l','o',' ')
print(new_str)  # 输出: Hello Runoob!
```

**需要注意的是：**
`+` 运算符两边必须都是字符串类型。你不能直接把一个数字和一个字符串用 `+` 连接。例如 `'Age: ' + 25` 会报错。如果要连接，需要先把数字转换成字符串，后续会学到

---

# Python 转义字符、运算符与格式化

## 一、转义字符

在字符串中，有些字符具有特殊含义，比如我们用来创建字符串的 `'` 和 `"`，或者用来换行的回车键。如果我们想在字符串**内部**显示这些特殊字符本身，该怎么办呢？

这就需要用到 **转义字符**（Escape Character）。Python 使用 **反斜杠 `\`** 作为转义字符的引导符。当 `\` 后面跟着特定的字符时，就表示该字符具有特殊的含义，或者就是要显示这个字符本身

### 1.1 为什么需要转义？答案是：解决引号冲突

最常见的转义需求就是在字符串内部包含引号。

**问题：**
```python
# 尝试在单引号字符串中包含单引号
# str1 = 'It's a cat.'  # 这行代码会报错！Python 会把第一个 ' 当作字符串开始，第二个 ' 当作字符串结束，剩下的就乱了。
```

**解决的方式，使用转义字符 `\'` 或 `\"`**

| 转义字符 | 描述                                   | 示例                                 | 输出结果               |
| :------- | :------------------------------------- | :----------------------------------- | :--------------------- |
| `\'`     | 在字符串中表示一个单引号 `'`           | `print('It\'s a cat.')`              | `It's a cat.`          |
| `\"`     | 在字符串中表示一个双引号 `"`           | `print("He said \"Hello\".")`        | `He said "Hello".`     |

这样，Python 就知道 `\'` 不是字符串的结束，而是一个普通的单引号字符了

### 1.2 其他常用转义字符

除了解决引号冲突，转义字符还有很多其他用途：

| 转义字符 | 描述                                   | 示例                                     | 输出/效果说明                     |
| :------- | :------------------------------------- | :--------------------------------------- | :------------------------------- |
| `\\`     | 在字符串中表示一个反斜杠 `\` 本身       | `print("路径是 C:\\Users\\Name")`        | `路径是 C:\Users\Name`           |
| `\n`     | **换行符** (Newline)，光标移到下一行开头 | `print("第一行\n第二行\n第三行")`        | 第一行<br>第二行<br>第三行        |
| `\t`     | **横向制表符** (Tab)，类似键盘上的 Tab 键 | `print("姓名\t年龄\t城市")`              | `姓名    年龄    城市` (产生对齐的空白) |
| `\r`     | **回车符** (Carriage Return)，光标移到本行开头 | `print("Hello\rWorld")`                 | `World` (Hello 会被 World 覆盖)  |
| `\b`     | **退格符** (Backspace)，删除前一个字符   | `print("abc\bdef")`                      | `abdef` (c 被删除了)             |
| `\a`     | **响铃** (Alert)，有些环境下会发出提示音 | `print("\a")`                            | (可能会听到“叮”一声)             |
| `\(在行尾时)` | **续行符**，将一行代码分多行书写       | `long_string = "这是一个非常长的字符串，\
我们可以用续行符把它拆分成两行来写。"` | (字符串内容会连接成一行)           |

**实例演示：**

```python
# 转义字符示例
print("转义单引号：It\'s me!")
print("转义双引号：He said \"Hi!\"")
print("反斜杠本身：C:\\Program Files\\Python")
print("换行符演示：第一行\n第二行\n第三行")
print("制表符演示：Name\tAge\tScore")
print("退格符演示：abc\bdef")  # 输出 abdef (c被退格删除了)
print("续行符演示：这是第一部分" + \
      "，这是第二部分")  # 注意续行符\要放在行尾，且后面不能有其他字符（包括空格）
```

**需要注意的是：**
*   对于刚接触编程的同学，`\n`（换行）和 `\t`（制表符）是最常用的，请务必掌握。
*   如果你不想让字符串中的 `\` 被解释为转义字符，可以使用 **原始字符串**（Raw String），在字符串前加上 `r` 或 `R`。例如：`print(r"C:\Users\Name")` 会直接输出 `C:\Users\Name`，`\` 不再具有转义功能。

## 二、字符串运算符

和数字一样，字符串也支持一些运算符，让我们可以方便地操作字符串。

假设我们有两个字符串：
`a = "Hello"`
`b = "Python"`

| 运算符 | 描述                 | 实例                | 结果                     |
| :----- | :------------------- | :------------------ | :----------------------- |
| `+`    | **字符串连接**       | `a + b`             | `"HelloPython"`          |
| `*`    | **字符串重复**       | `a * 2`             | `"HelloHello"`           |
| `[]`   | **通过索引访问字符** | `a[1]`              | `'e'` (a的第2个字符)     |
| `[:]`  | **切片 - 截取子串**  | `b[1:4]`            | `"yth"` (b的第2到第4个字符) |
| `in`   | **成员运算符**：检查字符/子串是否在原字符串中 | `"H" in a`        | `True` (a 中包含 "H")    |
| `not in` | **成员运算符**：检查字符/子串是否不在原字符串中 | `"x" not in b`    | `True` (b 中不包含 "x")  |
| `r/R`  | **原始字符串**：禁用转义字符       | `print(r"\n")`      | `\n` (直接输出 \n，不换行) |

### 2.1 `+` 连接运算符
我们已经学过，用于将两个或多个字符串连接成一个新字符串
```python
first_name = "张"
last_name = "三"
full_name = last_name + first_name  # "张三"
greeting = "你好，" + full_name + "！"  # "你好，张三！"
print(greeting)
```

### 2.2 `*` 重复运算符
用于将字符串重复指定的次数。
```python
star = "*"
print(star * 10)  # "**********" (10个星号)
laugh = "哈"
print(laugh * 3)  # "哈哈哈"
```

### 2.3 `[]` 索引访问和 `[:]` 切片
这也是上一节的内容，复习一下：
```python
s = "Python字符串"
print(s[0])   # 'P' (第一个字符)
print(s[-1])  # '串' (最后一个字符，Python支持负索引)
print(s[2:5]) # 'tho' (从索引2开始到4，不包含5)
```

### 2.4 `in` 和 `not in` 成员运算符
判断一个字符或子字符串是否存在于另一个字符串中，返回 `True` 或 `False`。
```python
message = "I love Python programming."
print("love" in message)      # True
print("hate" in message)      # False
print("Python" not in message) # False (因为 "Python" 在 message 里)
print("Java" not in message)  # True (因为 "Java" 不在 message 里)

# 判断单个字符
print('P' in message)         # True
```

### 2.5 `r/R` 原始字符串
在字符串前面加上 `r` 或 `R`，表示该字符串是原始字符串，其中的 `\` 不会被当作转义字符。非常适合表示文件路径或正则表达式。
```python
print("C:\\new_folder")  # 普通字符串，需要转义 \，输出 C:\new_folder
print(r"C:\new_folder")  # 原始字符串，不需要转义 \，输出 C:\new_folder
print(r"\n 这只是一个反斜杠n，不会换行")  # 输出 \n 这只是一个反斜杠n，不会换行
```

## 三、字符串格式化

当我们需要将变量，尤其是数字、其他类型等插入到字符串中，或者需要控制字符串的格式，比如，小数位数、对齐方式，**字符串格式化**就非常有用了

### 3.1 百分号 `%` 格式化 (较传统的方式)

这种方式类似于 C 语言的 `printf` 函数。其基本语法是：
```python
"格式化字符串" % (值1, 值2, ...)
```
其中，格式化字符串中包含一个或多个 **格式符**（以 `%` 开头），用于指定后续值的类型和格式。

**常用格式符：**

| 格式符 | 描述                                   | 示例                                     | 输出结果             |
| :----- | :------------------------------------- | :--------------------------------------- | :------------------- |
| `%s`   | 格式化**字符串** (string)，可以接收任何类型 | `print("姓名：%s" % "张三")`              | `姓名：张三`         |
| `%d`   | 格式化**整数** (decimal integer)        | `print("年龄：%d岁" % 25)`                | `年龄：25岁`         |
| `%f`   | 格式化**浮点数** (float)                | `print("身高：%f米" % 1.75)`              | `身高：1.750000米`   |
| `%.nf` | 格式化浮点数，并指定**小数点后 n 位**    | `print("身高：%.2f米" % 1.75)`            | `身高：1.75米`       |
| `%c`   | 格式化**单个字符** (character)           | `print("性别：%c" % '男')`                | `性别：男`           |

**实例：**
```python
name = "小明"
age = 10
score = 95.5
print("我叫%s，今年%d岁，考试得了%.1f分。" % (name, age, score))
# 输出：我叫小明，今年10岁，考试得了95.5分。
```

**多个值时，需要用括号 `()` 括起来，按顺序对应。**

### 3.2 `str.format()` 方法 (比较推荐使用的)

Python 2.6 引入了 `str.format()` 方法，它提供了更强大、更灵活的字符串格式化方式。基本语法是：
```python
"格式化字符串".format(值1, 值2, ...)
```
格式化字符串中使用 `{}` 作为占位符，可以指定位置、名称或格式。

**基本用法：**
```python
name = "小红"
age = 12
score = 98.5

# 1. 按位置顺序
print("我叫{}，今年{}岁，考试得了{}分。".format(name, age, score))
# 输出：我叫小红，今年12岁，考试得了98.5分。

# 2. 指定位置索引 (从0开始)
print("我叫{0}，{0}今年{1}岁。".format(name, age))  # {0} 代表第一个参数 name
# 输出：我叫小红，小红今年12岁。

# 3. 命名参数
print("姓名：{n}，年龄：{a}，分数：{s:.1f}".format(n=name, a=age, s=score))
# 输出：姓名：小红，年龄：12，分数：98.5 (:.1f 同样表示保留一位小数)
```

`str.format()` 功能非常强大，还可以控制对齐、填充、正负号等，后续我们会专门学习

### 3.3 f-字符串 (f-string, Python 3.6+) (这是最简洁现代的方式)

Python 3.6 及以上版本引入了 **f-字符串** (f-strings)，这是一种在字符串前加上 `f` 或 `F`，并在 `{}` 中直接嵌入表达式的简洁方式。

**基本用法：**
```python
name = "小李"
age = 11
score = 90.0

print(f"我叫{name}，今年{age}岁，考试得了{score}分。")
# 输出：我叫小李，今年11岁，考试得了90.0分。

# 可以直接在 {} 内进行运算或调用函数
print(f"明年我就{age + 1}岁了。")  # 输出：明年我就12岁了。
print(f"分数取整是{int(score)}。")  # 输出：分数取整是90。

# 同样支持格式控制，如保留小数
print(f"平均分：{score / 1:.2f}")  # 输出：平均分：90.00
```

f-字符串简单直观，推荐在 Python 3.6+ 中优先使用。

## 四、三引号字符串：轻松处理多行文本和特殊格式

我们在创建字符串时提到过三引号 `'''` 或 `"""`。它的主要优势在于

1.  **创建多行字符串**：字符串内容可以直接换行，无需使用 `\n`。
2.  **包含特殊引号**：可以自由包含单引号和双引号，无需大量转义。
3.  **保留格式**：所见即所得 (WYSIWYG)，适合嵌入 HTML、SQL、诗歌、代码块等

### 4.1 多行字符串
```python
poem = '''床前明月光，
疑是地上霜。
举头望明月，
低头思故乡。'''

print(poem)
# 输出就是：
# 床前明月光，
# 疑是地上霜。
# 举头望明月，
# 低头思故乡。
```

### 4.2 包含特殊引号
```python
document = """
老师说：'学习Python很有趣。'
学生问："真的吗？"
老师回答："当然，你可以用它做很多事情！"
"""

print(document)
# 输出会正确包含单引号和双引号，无需转义。
```

### 4.3 用于文档字符串 (Docstring)
在函数、类或模块的开头，用三引号编写的字符串会被视为文档字符串，用于说明其功能。这是 Python 的一个好习惯。
```python
def add(a, b):
    """
    这个函数用于计算两个数的和。
    参数：
        a: 第一个加数
        b: 第二个加数
    返回值：
        a 和 b 的和
    """
    return a + b

# 可以通过 help() 函数查看文档字符串
help(add)
```

## 五、Unicode 字符串 (了解即可)

在 Python 3 中，**所有字符串默认都是 Unicode 字符串**。这意味着 Python 天然支持中文、日文、韩文等各种语言的字符。

Unicode 是一种国际编码标准，为世界上几乎所有的字符都分配了一个唯一的数字编号（码点）。在字符串中，你可以直接使用这些字符，或者通过 `\uXXXX` (其中 XXXX 是 4 位十六进制数) 来表示 Unicode 字符。

```python
# 直接使用中文
print("你好，世界！")  # 输出：你好，世界！

# 使用 Unicode 转义序列表示字符
print("\u4F60\u597D")  # \u4F60 是 "你" 的 Unicode 码点，\u597D 是 "好"
# 输出：你好
```

Python 3 对 Unicode 的支持非常完善，所以我们通常不需要特别处理，直接使用各种语言的字符即可

---

# Unicode 字符串

## 关于 Unicode 字符串 (Python 2 背景知识，Python 3 用户可略过细节)

在 **Python 2** 中，有两种主要的字符串类型：
*   `str`：默认使用 ASCII 编码或系统默认编码，主要处理字节。
*   `unicode`：专门用于处理 Unicode 字符，可以表示世界上几乎所有语言的文字。

### 如何在 Python 2 中创建 Unicode 字符串？
在字符串前面加上一个小写的 **`u`**，就表示这是一个 Unicode 字符串。

```python
# Python 2 代码示例
unicode_str1 = u'Hello World!'  # 一个 Unicode 字符串
unicode_str2 = u'你好，世界！'    # Unicode 字符串可以直接包含中文等非英文字符
```

### Unicode 转义序列：`\uXXXX`
如果你知道某个 Unicode 字符的**十六进制编码值**（码点），可以使用 `\uXXXX` 的形式将其插入到 Unicode 字符串中。其中 `XXXX` 是 4 位十六进制数。

```python
# Python 2 代码示例
# \u0020 是空格字符的 Unicode 十六进制编码
unicode_str3 = u'Hello\u0020World!'  # 等价于 u'Hello World!'
print(unicode_str3)  # 输出: Hello World!

# \u4F60\u597D 是 "你好" 的 Unicode 编码
unicode_str4 = u'\u4F60\u597D'
print(unicode_str4)  # 输出: 你好
```

---

### Python 3 的变化
**在 Python 3 中，所有的字符串默认都是 Unicode 字符串**！不再需要用 `u` 前缀来区分。虽然为了兼容性，Python 3 也允许使用 `u` 前缀，但意义不大

所以，在 Python 3 中，你直接写：
```python
# Python 3 代码示例
str1 = 'Hello World!'
str2 = '你好，世界！'
str3 = 'Hello\u0020World!'  # \uXXXX 转义序列在 Python 3 的普通字符串中同样适用
print(str3)  # 输出: Hello World!
```
这些都是 Unicode 字符串，可以直接处理各种语言的字符。

**总结一下**：
*   **Python 2**：用 `u'字符串'` 创建 Unicode 字符串，支持 `\uXXXX` 转义。
*   **Python 3**：所有字符串默认是 Unicode，直接使用 `'字符串'` 即可，`\uXXXX` 转义同样支持，`u` 前缀可选。

对于现代 Python 开发，你只需要知道字符串天然支持 Unicode，能直接显示和处理中文等各种字符就好。`\uXXXX` 这种转义方式了解即可，主要用于一些特殊字符的输入


---

# 字符串内建函数

字符串方法是 Python 为字符串对象提供的内置函数，用于方便地对字符串进行各种操作。这些方法非常强大且易用。

下面列出了常用的字符串内建方法，点击方法名可以展开查看详细说明和示例。

---

## 字符串方法列表

<details>
<summary><b>1. string.capitalize()</b> - 首字母大写，其余小写</summary>

### 描述
`capitalize()` 方法将字符串的**第一个字符**转换为大写，**其余所有字符**转换为小写。如果字符串的第一个字符不是字母，则仅将后续字符转为小写。

### 语法
```python
str.capitalize()
```

### 参数
无。

### 返回值
返回一个新的字符串，该字符串是原字符串经过首字母大写、其余小写处理后的结果。

### 实例
```python
s1 = "hello world!"
print(s1.capitalize())  # 输出: "Hello world!"

s2 = "a, BcD123"
print(s2.capitalize())  # 输出: "A, bcd123"

s3 = "   hello"  # 第一个非空格字符是 'h'
print(s3.capitalize())  # 输出: "   hello"  (注意：开头的空格不变，'h' 变成 'H')

s4 = "123python"  # 第一个字符是数字，非字母
print(s4.capitalize())  # 输出: "123python"  (数字不变，后续 'python' 转为 'python' (本身就是小写))
```
</details>

---

<details>
<summary><b>2. string.center(width[, fillchar])</b> - 居中对齐</summary>

### 描述
`center()` 方法返回一个原字符串居中对齐的新字符串，总长度为 `width`。如果指定了 `fillchar`（可选参数），则使用该字符填充两侧的空白；如果未指定，则默认使用**空格**填充。

如果原字符串的长度大于或等于 `width`，则直接返回原字符串。

### 语法
```python
str.center(width[, fillchar])
```

### 参数
*   `width` (必需): 指定返回字符串的总长度。
*   `fillchar` (可选): 用于填充空白的字符，默认为空格。该参数必须是单个字符（长度为1的字符串）。

### 返回值
返回一个新的居中对齐的字符串。

### 实例
```python
s = "Python"

# 默认用空格填充
print(s.center(10))       # 输出: "  Python  "  (总长度10，两边各2个空格)
print(s.center(5))        # 输出: "Python"     (原长6 > 5，返回原字符串)

# 用指定字符填充
print(s.center(10, '*'))  # 输出: "**Python**"  (两边各2个 '*')
print(s.center(12, '-'))  # 输出: "---Python---" (两边各3个 '-')

# fillchar 必须是单个字符
# print(s.center(10, 'ab'))  # 报错: TypeError: The fill character must be exactly one character long
```
</details>

---

<details>
<summary><b>3. string.count(sub[, start[, end]])</b> - 统计子串出现次数</summary>

### 描述
`count()` 方法用于统计字符串中**子串 `sub`** 出现的次数。可以通过 `start` 和 `end` 参数指定搜索的范围（索引，左闭右开）。

### 语法
```python
str.count(sub, start=0, end=len(str))
```

### 参数
*   `sub` (必需): 要搜索的子字符串。
*   `start` (可选): 搜索的起始索引，默认为 `0`。
*   `end` (可选): 搜索的结束索引，默认为字符串的长度 `len(str)`。**不包含 `end` 位置本身**。

### 返回值
返回一个整数，表示子串 `sub` 在指定范围内出现的次数。如果未找到，则返回 `0`。

### 实例
```python
s = "ababaabab"
sub = "ab"

# 统计整个字符串中 "ab" 出现的次数
print(s.count(sub))  # 输出: 4  (位置 0-1, 2-3, 4-5, 6-7)

# 从索引 2 开始搜索 (包含2)
print(s.count(sub, 2))  # 输出: 3  (位置 2-3, 4-5, 6-7)

# 从索引 2 开始，到索引 6 结束 (不包含6)
print(s.count(sub, 2, 6))  # 搜索范围是 s[2:6] = "baab"，其中 "ab" 出现1次 (位置 4-5 of original)
# 输出: 1

# 子串不存在
print(s.count("xyz"))  # 输出: 0
```
</details>

---

<details>
<summary><b>4. string.decode(encoding='UTF-8', errors='strict')</b> - 字节串解码为字符串 (Python 2 为主)</summary>

### 描述
`decode()` 方法用于将**字节串 (bytes)** 按照指定的编码格式解码为**字符串 (str/unicode)**。

> **重要的提示**:
> * 在 **Python 3** 中，字符串 (`str`) 是 Unicode，字节串 (`bytes`) 和字符串是严格区分的。`decode()` 是 `bytes` 对象的方法，用于将字节串解码为字符串。
> * 在 **Python 2** 中，`str` 是字节串，`unicode` 是字符串。`decode()` 是 `str` 对象的方法，用于将字节串解码为 `unicode` 字符串。

### 语法
```python
# Python 3: bytes.decode(encoding='UTF-8', errors='strict')
# Python 2: str.decode(encoding='UTF-8', errors='strict')
byte_str.decode(encoding='UTF-8', errors='strict')
```

### 参数
*   `encoding` (可选): 解码时使用的字符编码，如 `'UTF-8'`, `'GBK'`, `'ASCII'` 等。默认为 `'UTF-8'`。
*   `errors` (可选): 指定解码错误处理方式。常见取值：
    *   `'strict'` (默认): 解码出错时抛出 `UnicodeDecodeError` 异常。
    *   `'ignore'`: 忽略无法解码的字节。
    *   `'replace'`: 用 `�` (Unicode 替换字符) 替换无法解码的字节。
    *   `'backslashreplace'`: 用 Python 的反斜杠转义序列（如 `\xhh`）替换无法解码的字节。

### 返回值
返回一个解码后的字符串。

### 实例 (Python 3)
```python
# 定义一个 UTF-8 编码的字节串 (以 b 开头)
byte_data = b'Hello World! \xe4\xbd\xa0\xe5\xa5\xbd'  # \xe4\xbd\xa0\xe5\xa5\xbd 是 "你好" 的 UTF-8 字节

# 正确解码
str_data = byte_data.decode('UTF-8')
print(str_data)  # 输出: "Hello World! 你好"

# 尝试用错误的编码解码 (可能出错)
try:
    str_data = byte_data.decode('ASCII')
except UnicodeDecodeError as e:
    print("解码错误:", e)  # 输出: 解码错误: 'ascii' codec can't decode byte 0xe4 in position 13: ordinal not in range(128)

# 使用 errors='replace' 处理错误
str_data = byte_data.decode('ASCII', errors='replace')
print(str_data)  # 输出: "Hello World! ��"  (无法解码的字节被替换为 �)
```
</details>

---

<details>
<summary><b>5. string.encode(encoding='UTF-8', errors='strict')</b> - 字符串编码为字节串</summary>

### 描述
`encode()` 方法用于将**字符串 (str)** 按照指定的编码格式转换为**字节串 (bytes)**。这与 `decode()` 方法相反。

> **重要的提示**:
> * 在 **Python 3** 中，`encode()` 是 `str` 对象的方法，用于将字符串编码为字节串。
> * 在 **Python 2** 中，`encode()` 是 `unicode` 对象的方法，用于将 `unicode` 字符串编码为 `str` 字节串。

### 语法
```python
str.encode(encoding='UTF-8', errors='strict')
```

### 参数
*   `encoding` (可选): 编码时使用的字符编码，如 `'UTF-8'`, `'GBK'`, `'ASCII'` 等。默认为 `'UTF-8'`。
*   `errors` (可选): 指定编码错误处理方式。常见取值与 `decode()` 类似：
    *   `'strict'` (默认): 编码出错时抛出 `UnicodeEncodeError` 异常。
    *   `'ignore'`: 忽略无法编码的字符。
    *   `'replace'`: 用 `?` 或其他符号替换无法编码的字符（取决于编码）。
    *   `'backslashreplace'`: 用 Python 的反斜杠转义序列替换无法编码的字符。

### 返回值
返回一个编码后的字节串 (`bytes` 对象)。

### 实例 (Python 3)
```python
s = "Hello World! 你好"

# 用 UTF-8 编码为字节串
utf8_bytes = s.encode('UTF-8')
print(utf8_bytes)  # 输出: b'Hello World! \xe4\xbd\xa0\xe5\xa5\xbd'

# 用 GBK 编码
gbk_bytes = s.encode('GBK')
print(gbk_bytes)   # 输出: b'Hello World! \xc4\xe3\xba\xc3'  ("你好" 的 GBK 编码)

# 尝试用 ASCII 编码包含中文的字符串 (会出错，因为 ASCII 不支持中文)
try:
    ascii_bytes = s.encode('ASCII')
except UnicodeEncodeError as e:
    print("编码错误:", e)  # 输出: 编码错误: 'ascii' codec can't encode characters in position 13-14: ordinal not in range(128)

# 使用 errors='replace' 处理错误
ascii_bytes = s.encode('ASCII', errors='replace')
print(ascii_bytes)  # 输出: b'Hello World! ??'  (中文被替换为 '?')
```
</details>

---

<details>
<summary><b>6. string.endswith(suffix[, start[, end]])</b> - 判断是否以指定后缀结尾</summary>

### 描述
`endswith()` 方法用于判断字符串是否以指定的 `suffix`（后缀）结尾。可以通过 `start` 和 `end` 参数指定检查的范围（索引，左闭右开）。

### 语法
```python
str.endswith(suffix[, start[, end]])
```

### 参数
*   `suffix` (必需): 要检查的后缀。可以是一个字符串，或者是一个包含多个字符串的**元组**（只要匹配其中一个就返回 `True`）。
*   `start` (可选): 检查的起始索引，默认为 `0`。
*   `end` (可选): 检查的结束索引，默认为字符串的长度 `len(str)`。**不包含 `end` 位置本身**，即检查的是 `str[start:end]` 这个子串是否以 `suffix` 结尾。

### 返回值
布尔值 `True` 或 `False`。如果字符串（或指定范围内的子串）以 `suffix` 结尾，则返回 `True`，否则返回 `False`。

### 实例
```python
s = "example.txt"

# 检查是否以 ".txt" 结尾
print(s.endswith(".txt"))  # 输出: True

# 检查是否以 ".py" 结尾
print(s.endswith(".py"))   # 输出: False

# 检查是否以 "e" 或 "le.txt" 结尾 (使用元组)
print(s.endswith(("e", "le.txt")))  # 输出: True (因为以 "le.txt" 结尾)

# 指定检查范围: s[7:11] 是 "txt"
print(s.endswith("txt", 7, 11))  # 输出: True (检查从索引7到10的子串 "txt" 是否以 "txt" 结尾)

# 范围超出字符串长度
print(s.endswith("txt", 0, 5))   # 检查 s[0:5] = "examp"，输出: False
```
</details>

---

<details>
<summary><b>7. string.expandtabs(tabsize=8)</b> - 将制表符转换为空格</summary>

### 描述
`expandtabs()` 方法将字符串中的**制表符 `\t`** 转换为指定数量的空格。

### 语法
```python
str.expandtabs(tabsize=8)
```

### 参数
*   `tabsize` (可选): 指定每个制表符 `\t` 代表的空格数。默认为 `8`。

### 返回值
返回一个新的字符串，其中所有的 `\t` 都被替换为相应数量的空格。

### 实例
```python
s = "Name\tAge\tCity"  # 包含两个制表符

# 默认 tabsize=8
print(s.expandtabs())  # 输出: "Name    Age     City"
# 解释:
# "Name" 长度4，距离下一个8的倍数 (8) 差4个空格 → 补4个空格
# "Age" 长度3，距离下一个16 (8*2) 差5个空格 → 补5个空格

# tabsize=4
print(s.expandtabs(tabsize=4))  # 输出: "Name    Age City"
# 解释:
# "Name" 长度4，正好是4的倍数 → 补0个空格 (但通常会补4个？实际测试 "Name\t".expandtabs(4) 是 "Name    " (4个空格))
# 不同 Python 版本或实现可能有细微差异，但总体是按制表位对齐。

s2 = "a\tb\tc"
print(s2.expandtabs(2))  # 输出: "a b c" (每个 \t 变成2个空格)
print(s2.expandtabs(3))  # 输出: "a  b  c" (每个 \t 变成2个空格？或者按3的倍数对齐："a  " (a+2空格), "b  " (b+2空格))
```
</details>

---

<details>
<summary><b>8. string.find(sub[, start[, end]])</b> - 查找子串首次出现的索引</summary>

### 描述
`find()` 方法用于在字符串中查找**子串 `sub`** 首次出现的**起始索引**。可以通过 `start` 和 `end` 参数指定搜索的范围（索引，左闭右开）。

如果找到子串，则返回其首次出现的起始索引；如果**未找到**，则返回 `-1`。

### 语法
```python
str.find(sub[, start[, end]])
```

### 参数
*   `sub` (必需): 要搜索的子字符串。
*   `start` (可选): 搜索的起始索引，默认为 `0`。
*   `end` (可选): 搜索的结束索引，默认为字符串的长度 `len(str)`。**不包含 `end` 位置本身**。

### 返回值
*   找到时：返回子串 `sub` 在字符串中首次出现的起始索引。
*   未找到时：返回 `-1`。

### 实例
```python
s = "Hello, world! This is a world of Python."

# 查找 "world"
print(s.find("world"))  # 输出: 7 (首次出现在索引7)

# 从索引8开始查找 "world"
print(s.find("world", 8))  # 输出: 19 (第二次出现在索引19)

# 查找不存在的子串
print(s.find("Java"))    # 输出: -1

# 指定搜索范围 [0, 10)
print(s.find("world", 0, 10))  # 输出:7 (在 s[0:10] = "Hello, worl" 中找到)
print(s.find("world", 10, 15)) # 输出:-1 (在 s[10:15] = "d! Th" 中未找到)
```

### 注意
`find()` 和 `index()` 方法类似，但 `index()` 在子串未找到时会抛出 `ValueError` 异常，而 `find()` 返回 `-1`。因此，当不确定子串是否存在时，使用 `find()` 更安全。
</details>

---


<details>
<summary><b>9. string.format(*args, **kwargs)</b> - 格式化字符串</summary>

### 描述
`str.format()` 方法通过**位置参数**、**关键字参数**或**对象属性/索引**等方式，将值插入到字符串中的占位符 `{}` 中，从而生成一个新的格式化字符串。它比传统的 `%` 格式化方式更加灵活和强大。

### 语法
```python
str.format(*args, **kwargs)
```

### 参数
*   `*args`: 可变位置参数，按顺序填充到不带名称的占位符中。
*   `**kwargs`: 可变关键字参数，通过名称填充到带名称的占位符中。

### 占位符格式
占位符 `{}` 可以包含可选的格式说明符，用于控制值的显示方式（如对齐、填充、小数位数、类型转换等）。基本格式为：
`{[field_name][!conversion][:format_spec]}`
其中：
*   `field_name`: 指定要格式化的值，可以是位置索引、关键字名称、对象属性名或列表/字典索引。
*   `!conversion`: 转换标志，如 `!s` (转为字符串)、`!r` (转为 repr 字符串)、`!a` (转为 ascii 字符串)。
*   `:format_spec`: 格式规范，用于详细控制格式（如对齐、宽度、精度、进制等）。

### 返回值
返回一个新的格式化后的字符串。

### 实例

#### 基本用法：位置参数与关键字参数
```python
# 1. 位置参数 (按顺序)
print("Hello, {}! My name is {}.".format("World", "Alice"))
# 输出: Hello, World! My name is Alice.

# 2. 指定位置索引 (可以打乱顺序)
print("Hello, {1}! My name is {0}.".format("Alice", "World"))
# 输出: Hello, World! My name is Alice.

# 3. 关键字参数 (通过名称)
print("网站名: {name}, 地址: {url}".format(name="菜鸟教程", url="www.runoob.com"))
# 输出: 网站名: 菜鸟教程, 地址: www.runoob.com

# 4. 位置参数和关键字参数混合使用
print("今天是 {0}，天气 {weather}，温度 {1} 度。".format("周一", 25, weather="晴朗"))
# 输出: 今天是 周一，天气 晴朗，温度 25 度。
```

#### 通过对象属性或字典/列表索引
```python
# 通过字典
person = {"name": "Bob", "age": 30}
print("姓名: {name}, 年龄: {age}".format(**person))  # 使用 ** 解包字典
# 输出: 姓名: Bob, 年龄: 30

# 通过列表
fruits = ["苹果", "香蕉", "橙子"]
print("我喜欢 {0[0]} 和 {0[2]}".format(fruits))  # 0 是列表的位置，[0] 是列表内的索引
# 输出: 我喜欢 苹果 和 橙子

# 通过对象属性
class Student:
    def __init__(self, id, name):
        self.id = id
        self.name = name

stu = Student(1001, "Charlie")
print("学号: {0.id}, 姓名: {0.name}".format(stu))  # 0 是对象的位置，.id 是对象的属性
# 输出: 学号: 1001, 姓名: Charlie
```

#### 格式规范示例 (对齐、填充、数字格式化)
```python
# 对齐与填充 (^:居中, <:左对齐, >:右对齐)
print("|{:^10s}|".format("居中"))    # 宽度10，居中对齐
print("|{:<10d}|".format(123))       # 宽度10，左对齐
print("|{:>10.2f}|".format(3.1415))  # 宽度10，右对齐，保留2位小数
print("|{:0>6d}|".format(45))        # 宽度6，右对齐，不足用0填充
print("|{:a^8s}|".format("Hi"))      # 宽度8，居中对齐，不足用 'a' 填充

# 数字格式化
print("整数: {:d}".format(123))                  # 十进制整数
print("八进制: {:#o}".format(123))               # 带前缀的八进制
print("十六进制: {:#x}".format(123))             # 带前缀的十六进制 (小写)
print("百分比: {:.2%}".format(0.75))             # 百分比格式，保留2位小数
print("科学计数法: {:.2e}".format(1234567))       # 科学计数法，保留2位小数
print("千分位分隔: {:,}".format(123456789))      # 千分位分隔符
```

#### 转义大括号
如果需要在字符串中显示 `{` 或 `}`，可以使用双重大括号 `{{` 或 `}}`。
```python
print("这是一个大括号: {{}}，里面可以放 {0}。".format("内容"))
# 输出: 这是一个大括号: {}，里面可以放 内容。
```
</details>

---

<details>
<summary><b>10. string.index(sub[, start[, end]])</b> - 查找子串首次出现的索引 (找不到会报错)</summary>

### 描述
`index()` 方法与 `find()` 方法**功能几乎完全相同**，用于在字符串中查找**子串 `sub`** 首次出现的**起始索引**。可以通过 `start` 和 `end` 参数指定搜索的范围（索引，左闭右开）。

**唯一区别**：如果 `sub` 不在字符串中，`index()` 方法会**抛出 `ValueError` 异常**，而 `find()` 方法返回 `-1`。

### 语法
```python
str.index(sub[, start[, end]])
```

### 参数
*   `sub` (必需): 要搜索的子字符串。
*   `start` (可选): 搜索的起始索引，默认为 `0`。
*   `end` (可选): 搜索的结束索引，默认为字符串的长度 `len(str)`。**不包含 `end` 位置本身**。

### 返回值
返回子串 `sub` 在字符串中首次出现的起始索引。

### 实例
```python
s = "Hello, world! This is a world of Python."

# 查找存在的子串
print(s.index("world"))  # 输出: 7 (首次出现在索引7)
print(s.index("world", 8))  # 输出: 19 (从索引8开始找，第二次出现在索引19)

# 查找不存在的子串 (会抛出异常)
try:
    print(s.index("Java"))
except ValueError as e:
    print("错误:", e)  # 输出: 错误: substring not found
```

### 何时使用 `index()` 而非 `find()`？
当你**确定子串一定存在**，或者希望在子串不存在时明确地抛出异常（以便捕获和处理），可以使用 `index()`。否则，`find()` 更为安全，因为它返回 `-1` 而不是报错。
</details>

---

<details>
<summary><b>11. string.isalnum()</b> - 检查字符串是否只包含字母和数字</summary>

### 描述
`isalnum()` 方法用于检查字符串是否**至少包含一个字符**，并且**所有字符都是字母（a-z, A-Z）或数字（0-9）**，没有其他特殊字符（如空格、标点符号等）。

### 语法
```python
str.isalnum()
```

### 参数
无。

### 返回值
*   如果字符串满足条件（非空且全是字母或数字），返回 `True`。
*   否则（字符串为空，或包含非字母数字字符），返回 `False`。

### 实例
```python
print("Python123".isalnum())   # 输出: True (字母和数字)
print("Python".isalnum())      # 输出: True (纯字母)
print("12345".isalnum())       # 输出: True (纯数字)
print("Python 123".isalnum())  # 输出: False (包含空格)
print("Python!".isalnum())     # 输出: False (包含感叹号 '!')
print("".isalnum())            # 输出: False (空字符串)
print("中文测试".isalnum())     # 输出: True (对于 Unicode 字母，如中文、日文等，也会返回 True)
```

### 注意
对于非英文字母（如中文、日文、韩文等 Unicode 字母），`isalnum()` 也会认为它们是“字母”，因此包含这些字符的字符串也可能返回 `True`。
</details>

---

<details>
<summary><b>12. string.isalpha()</b> - 检查字符串是否只包含字母</summary>

### 描述
`isalpha()` 方法用于检查字符串是否**至少包含一个字符**，并且**所有字符都是字母（a-z, A-Z）**，没有数字、空格或其他特殊字符。

### 语法
```python
str.isalpha()
```

### 参数
无。

### 返回值
*   如果字符串满足条件（非空且全是字母），返回 `True`。
*   否则（字符串为空，或包含非字母字符），返回 `False`。

### 实例
```python
print("Python".isalpha())      # 输出: True (纯字母)
print("Python3".isalpha())     # 输出: False (包含数字 '3')
print("Python ".isalpha())     # 输出: False (包含空格)
print("Python!".isalpha())     # 输出: False (包含感叹号 '!')
print("".isalpha())            # 输出: False (空字符串)
print("中文Abc".isalpha())     # 输出: True (包含 Unicode 字母，如中文)
```

### 注意
与 `isalnum()` 类似，对于非英文字母（如中文、日文等 Unicode 字母），`isalpha()` 也会返回 `True`。
</details>

---

<details>
<summary><b>13. string.isdecimal()</b> - 检查字符串是否只包含十进制数字字符</summary>

### 描述
`isdecimal()` 方法用于检查字符串是否**只包含十进制数字字符**（0-9）。它返回 `True` 仅当字符串中的所有字符都是十进制数字，并且字符串**至少包含一个字符**。

### 语法
```python
str.isdecimal()
```

### 参数
无。

### 返回值
*   如果字符串满足条件（非空且全是十进制数字字符），返回 `True`。
*   否则，返回 `False`。

### 实例
```python
print("12345".isdecimal())     # 输出: True (纯十进制数字)
print("123.45".isdecimal())    # 输出: False (包含小数点 '.')
print("123a5".isdecimal())     # 输出: False (包含字母 'a')
print(" 1234".isdecimal())     # 输出: False (包含空格)
print("".isdecimal())          # 输出: False (空字符串)
print("⑩".isdecimal())         # 输出: False (这是特殊符号，不是标准的 0-9 数字字符)
print("１２３".isdecimal())     # 输出: True (某些 Unicode 中的全角数字字符也会被识别，如 '１' 是全角 '1')
```

### 与 `isdigit()` 和 `isnumeric()` 的区别 (了解即可)
*   `isdecimal()`: 仅识别 **0-9** 等标准十进制数字字符。
*   `isdigit()`: 除了十进制数字，还能识别一些如 **上标数字² (Unicode '\u00B2')** 等。
*   `isnumeric()`: 范围最广，除了上述，还能识别 **汉字数字 '三'、罗马数字 'Ⅷ'** 等。
对于初学者，`isdecimal()` 通常是检查字符串是否可安全转换为整数的首选（但最好还是用 `try-except` 进行类型转换）。
</details>

---


<details>
<summary><b>14. string.isdigit()</b> - 检查字符串是否只包含数字字符</summary>

### 描述
`isdigit()` 方法用于检查字符串是否**只包含数字字符**。这里的“数字字符”范围比 `isdecimal()` 稍广，除了标准的十进制数字 `0-9`，还包括一些特殊的数字符号，如 Unicode 中的上标数字 (², ³)、下标数字 (₁, ₂) 等。

### 语法
```python
str.isdigit()
```

### 参数
无。

### 返回值
*   如果字符串中所有字符都是数字字符且至少有一个字符，返回 `True`。
*   否则，返回 `False`。

### 实例
```python
print("12345".isdigit())      # 输出: True (标准十进制数字)
print("123.45".isdigit())     # 输出: False (包含小数点 '.')
print("123a5".isdigit())      # 输出: False (包含字母 'a')
print("²³".isdigit())         # 输出: True (上标数字 ² (U+00B2), ³ (U+00B3))
print("₁₂₃".isdigit())        # 输出: True (下标数字 ₁ (U+2081), ₂ (U+2082), ₃ (U+2083))
print("⑩".isdigit())         # 输出: True (带圈数字 ⑩ (U+2469) - 注意与 `isdecimal()` 的区别)
print("一二三".isdigit())     # 输出: False (汉字数字，`isdecimal()` 也返回 False，但 `isnumeric()` 返回 True)
print("".isdigit())           # 输出: False (空字符串)
```

### 注意
`isdigit()` 主要关注字符的“数字”属性，而不仅仅是十进制数字。对于初学者，如果需要判断一个字符串是否是纯数字（如 `"123"`），`isdecimal()` 和 `isdigit()` 通常都能满足，但需注意它们对特殊数字字符的处理差异。
</details>

---

<details>
<summary><b>15. string.islower()</b> - 检查字符串是否全为小写</summary>

### 描述
`islower()` 方法用于检查字符串中**所有区分大小写的字符是否都为小写**，并且**至少包含一个区分大小写的字符**。

*   不区分大小写的字符（如数字、符号、空格）不影响结果。
*   如果字符串中没有区分大小写的字符（如全是数字或符号），则返回 `False`。

### 语法
```python
str.islower()
```

### 参数
无。

### 返回值
*   如果字符串满足：包含至少一个小写字母，且没有大写字母，则返回 `True`。
*   否则，返回 `False`。

### 实例
```python
print("hello world".islower())   # 输出: True (全是小写字母)
print("Hello world".islower())   # 输出: False (包含大写字母 'H')
print("hello World".islower())   # 输出: False (包含大写字母 'W')
print("hello123!".islower())     # 输出: True (字母全是小写，数字和符号不影响)
print("HELLO".islower())         # 输出: False (全是大写字母)
print("12345!".islower())        # 输出: False (没有区分大小写的字母)
print("".islower())              # 输出: False (空字符串)
```
</details>

---

<details>
<summary><b>16. string.isnumeric()</b> - 检查字符串是否只包含数字字符 (最宽泛)</summary>

### 描述
`isnumeric()` 方法用于检查字符串是否**只包含数字字符**。它是三者（`isdecimal()`, `isdigit()`, `isnumeric()`）中识别范围**最宽泛**的。除了十进制数字、上标/下标数字外，还包括罗马数字、汉字数字（如一、二、三、壹、贰、叁）等具有数字含义的字符。

### 语法
```python
str.isnumeric()
```

### 参数
无。

### 返回值
*   如果字符串中所有字符都是数字字符（广义）且至少有一个字符，返回 `True`。
*   否则，返回 `False`。

### 实例
```python
print("12345".isnumeric())      # 输出: True (标准十进制数字)
print("²³".isnumeric())         # 输出: True (上标数字)
print("₁₂₃".isnumeric())        # 输出: True (下标数字)
print("⑩".isnumeric())         # 输出: True (带圈数字)
print("一二三".isnumeric())     # 输出: True (汉字数字)
print("壹贰叁".isnumeric())     # 输出: True (汉字大写数字)
print("Ⅷ".isnumeric())          # 输出: True (罗马数字 8)
print("123.45".isnumeric())     # 输出: False (包含小数点 '.')
print("123a5".isnumeric())      # 输出: False (包含字母 'a')
print("".isnumeric())           # 输出: False (空字符串)
```

### 总结 `isdecimal()`, `isdigit()`, `isnumeric()` 的区别 (重要)
| 方法名        | 识别范围                                                                 | 例子 (返回 True)          | 例子 (返回 False)          |
| :------------ | :----------------------------------------------------------------------- | :----------------------- | :------------------------ |
| `isdecimal()` | 仅识别 **0-9** 等标准十进制数字字符，以及一些 Unicode 全角数字。               | `"123"`, `"１２３"` (全角) | `"²"`, `"三"`, `"12.3"`   |
| `isdigit()`   | 识别十进制数字、上标/下标数字、部分带圈数字等。                               | `"123"`, `"²"`, `"₃"`, `"⑩"` | `"三"`, `"12.3"`          |
| `isnumeric()` | 识别所有数字字符（十进制、上标、下标、带圈、罗马数字、汉字数字等），范围最广。 | `"123"`, `"²"`, `"⑩"`, `"三"`, `"Ⅷ"` | `"12.3"`, `"abc"` |

**选择建议**：
*   如果需要严格的十进制数字（如用于解析为整数），优先使用 `isdecimal()`。
*   如果不确定，但想包括上标下标等，可用 `isdigit()`。
*   如果需要包括罗马数字、汉字数字等，用 `isnumeric()`。
*   最可靠的方法还是尝试用 `int()` 或 `float()` 转换，并捕获异常。
</details>

---

<details>
<summary><b>17. string.isspace()</b> - 检查字符串是否只包含空白字符</summary>

### 描述
`isspace()` 方法用于检查字符串是否**只包含空白字符**（如空格 ` `, 制表符 `\t`, 换行符 `\n`, 回车符 `\r`, 垂直制表符 `\v`, 换页符 `\f` 等），并且**至少包含一个空白字符**。

### 语法
```python
str.isspace()
```

### 参数
无。

### 返回值
*   如果字符串全是空白字符且非空，返回 `True`。
*   否则，返回 `False`。

### 实例
```python
print("   ".isspace())         # 输出: True (纯空格)
print("\t\n\r".isspace())      # 输出: True (制表符、换行符、回车符)
print("  a  ".isspace())       # 输出: False (包含非空白字符 'a')
print("".isspace())            # 输出: False (空字符串)
print(" \t\nabc".isspace())    # 输出: False (包含 'abc')
```

### 用途
常用于判断用户输入是否为空（或仅输入了空格）。例如：
```python
user_input = input("请输入内容: ")
if user_input.isspace():
    print("您输入的全是空白字符！")
elif not user_input:
    print("您没有输入任何内容！")
else:
    print(f"您输入的是: {user_input}")
```
</details>

---

<details>
<summary><b>18. string.istitle()</b> - 检查字符串是否为标题化格式</summary>

### 描述
`istitle()` 方法用于检查字符串是否符合**标题化格式**。标题化格式指的是：
*   字符串中的**每个单词的首字母为大写**。
*   每个单词中**其余字母为小写**。
*   **单词之间用一个或多个非字母字符分隔**（如空格、数字、符号等）。
*   字符串**至少包含一个字母**。

### 语法
```python
str.istitle()
```

### 参数
无。

### 返回值
*   如果字符串符合标题化格式，返回 `True`。
*   否则，返回 `False`。

### 实例
```python
print("Hello World".istitle())     # 输出: True ("Hello" 和 "World" 首字母大写，其余小写)
print("Hello world".istitle())     # 输出: False ("world" 首字母小写)
print("Hello World!".istitle())    # 输出: True (感叹号是分隔符，不影响)
print("Hello2World".istitle())     # 输出: True (数字 '2' 作为分隔符)
print("Hello   World".istitle())   # 输出: True (多个空格作为分隔符)
print("HelloWorld".istitle())      # 输出: False (两个单词之间没有非字母分隔符，被视为一个单词)
print("hEllo World".istitle())     # 输出: False ("hEllo" 首字母小写，第二个字母大写)
print("123 Hello".istitle())       # 输出: True (以数字开头，后面的单词符合规则)
print("".istitle())                # 输出: False (空字符串)
print("A".istitle())               # 输出: True (单个大写字母)
print("a".istitle())               # 输出: False (单个小写字母)
```

### 注意
`istitle()` 对单词的定义是“由字母组成的连续序列”，单词之间必须有非字母字符分隔。`title()` 方法可以将字符串转换为标题化格式。
</details>

---


<details>
<summary><b>19. string.isupper()</b> - 检查字符串是否全为大写</summary>

### 描述
`isupper()` 方法用于检查字符串中**所有区分大小写的字符是否都为大写**，并且**至少包含一个区分大小写的字符**。

*   不区分大小写的字符（如数字、符号、空格）不影响结果。
*   如果字符串中没有区分大小写的字符（如全是数字或符号），则返回 `False`。

### 语法
```python
str.isupper()
```

### 参数
无。

### 返回值
*   如果字符串满足：包含至少一个大写字母，且没有小写字母，则返回 `True`。
*   否则，返回 `False`。

### 实例
```python
print("HELLO WORLD".isupper())   # 输出: True (全是大写字母)
print("Hello WORLD".isupper())   # 输出: False (包含小写字母 'H')
print("HELLO World".isupper())   # 输出: False (包含小写字母 'W')
print("HELLO123!".isupper())     # 输出: True (字母全是大写，数字和符号不影响)
print("hello".isupper())         # 输出: False (全是小写字母)
print("12345!".isupper())        # 输出: False (没有区分大小写的字母)
print("".isupper())              # 输出: False (空字符串)
```
</details>

---

<details>
<summary><b>20. string.join(iterable)</b> - 用字符串连接序列中的元素</summary>

### 描述
`join()` 方法是一个非常实用的字符串方法。它以调用该方法的字符串 `string` 作为**分隔符**，将 `iterable`（可迭代对象，如列表、元组、字符串等）中的**所有元素（必须是字符串类型）连接起来**，形成一个新的字符串。

### 语法
```python
str.join(iterable)
```

### 参数
*   `iterable`: 可迭代对象，其元素必须是字符串。如果元素不是字符串，会抛出 `TypeError`。

### 返回值
返回一个新的字符串，由 `iterable` 中的元素通过 `str` 分隔并连接而成。

### 实例
```python
# 用空格连接列表元素
words = ["Hello", "World", "Python"]
sentence = " ".join(words)
print(sentence)  # 输出: "Hello World Python"

# 用逗号加空格连接元组元素
fruits = ("apple", "banana", "orange")
fruit_str = ", ".join(fruits)
print(fruit_str)  # 输出: "apple, banana, orange"

# 用空字符串连接 (相当于合并字符串)
chars = ["P", "y", "t", "h", "o", "n"]
word = "".join(chars)
print(word)  # 输出: "Python"

# 用换行符连接
lines = ["第一行", "第二行", "第三行"]
paragraph = "\n".join(lines)
print(paragraph)
# 输出:
# 第一行
# 第二行
# 第三行

# 错误示例：元素包含非字符串类型
nums = [1, 2, 3]
try:
    print("-".join(nums))  # 1,2,3 是整数，不是字符串
except TypeError as e:
    print("错误:", e)  # 输出: 错误: sequence item 0: expected str instance, int found
# 正确做法：先将元素转为字符串
nums_str = [str(n) for n in nums]
print("-".join(nums_str))  # 输出: "1-2-3"
```

### 常见用途
*   将列表/元组中的单词拼接成句子。
*   将多个字符串片段合并成一个路径。
*   格式化输出（如用逗号分隔多个选项）。
</details>

---

<details>
<summary><b>21. string.ljust(width[, fillchar])</b> - 左对齐字符串</summary>

### 描述
`ljust()` 方法返回一个原字符串**左对齐**的新字符串，总长度为 `width`。如果指定了 `fillchar`（可选参数），则使用该字符填充右侧的空白；如果未指定，则默认使用**空格**填充。

如果原字符串的长度大于或等于 `width`，则直接返回原字符串。

### 语法
```python
str.ljust(width[, fillchar])
```

### 参数
*   `width` (必需): 指定返回字符串的总长度。
*   `fillchar` (可选): 用于填充右侧空白的字符，默认为空格。该参数必须是单个字符。

### 返回值
返回一个新的左对齐的字符串。

### 实例
```python
s = "Python"

# 默认用空格填充
print(s.ljust(10))       # 输出: "Python    "  (总长度10，右侧补4个空格)
print(s.ljust(5))        # 输出: "Python"     (原长6 > 5，返回原字符串)

# 用指定字符填充
print(s.ljust(10, '*'))  # 输出: "Python****"  (右侧补4个 '*')
print(s.ljust(8, '-'))   # 输出: "Python--"   (右侧补2个 '-')

# fillchar 必须是单个字符
# print(s.ljust(10, 'ab'))  # 报错: TypeError: The fill character must be exactly one character long
```

### 对比
*   `ljust(width)`: 左对齐，右侧填充。
*   `rjust(width)`: 右对齐，左侧填充。 (后续会介绍)
*   `center(width)`: 居中对齐，两侧填充。 (已介绍)
</details>

---

<details>
<summary><b>22. string.lower()</b> - 将字符串转换为小写</summary>

### 描述
`lower()` 方法将字符串中**所有区分大小写的字符**转换为**小写字母**，并返回一个新的字符串。不区分大小写的字符（如数字、符号）保持不变。

### 语法
```python
str.lower()
```

### 参数
无。

### 返回值
返回一个新的字符串，其中所有大写字母均转为小写，其他字符不变。

### 实例
```python
s1 = "Hello World!"
print(s1.lower())  # 输出: "hello world!"

s2 = "PYTHON IS FUN!"
print(s2.lower())  # 输出: "python is fun!"

s3 = "AbC123!@#"
print(s3.lower())  # 输出: "abc123!@#" (A→a, B→b, C→c，数字和符号不变)

s4 = "12345"
print(s4.lower())  # 输出: "12345" (无字母，返回原字符串)
```

### 用途
常用于不区分大小写的比较。例如：
```python
user_input = input("请输入 'yes' 或 'no': ")
if user_input.lower() == 'yes':
    print("您同意了。")
else:
    print("您不同意或输入错误。")
# 这样无论用户输入 "YES", "Yes", "yes" 都能被识别为同意。
```
</details>

---

<details>
<summary><b>23. string.lstrip([chars])</b> - 截掉字符串左侧的指定字符 (默认截空格)</summary>

### 描述
`lstrip()` 方法用于截掉字符串**左侧（开头）** 的指定字符。
*   如果不提供 `chars` 参数（或为 `None`），则默认截掉**所有空白字符**（空格 ` `, `\t`, `\n`, `\r`, `\v`, `\f`）。
*   如果提供了 `chars` 参数，它是一个字符串，表示要截掉的**字符集合**（不是子串）。方法会从字符串开头开始，移除所有包含在 `chars` 中的字符，直到遇到一个不在 `chars` 中的字符为止。

### 语法
```python
str.lstrip([chars])
```

### 参数
*   `chars` (可选): 字符串，指定要从左侧移除的字符集合。

### 返回值
返回一个新的字符串，是原字符串截掉左侧指定字符后的结果。

### 实例
```python
# 1. 默认情况：截掉左侧空白字符
s1 = "   Hello World!   "
print(s1.lstrip())  # 输出: "Hello World!   " (左侧空格被移除，右侧空格保留)

s2 = "\t\nHello\n"
print(s2.lstrip())  # 输出: "Hello\n" (左侧的 \t 和 \n 被移除)

# 2. 指定 chars 参数：截掉左侧包含在 chars 中的字符
s3 = "aaaaHello"
print(s3.lstrip('a'))  # 输出: "Hello" (左侧所有 'a' 被移除)

s4 = "abcabcHelloabc"
print(s4.lstrip('abc'))  # 输出: "Helloabc" (从左侧开始，只要字符是 'a'/'b'/'c' 就移除，直到遇到 'H')

s5 = "1234Python1234"
print(s5.lstrip('123'))  # 输出: "4Python1234" (左侧 '1','2','3' 被移除，直到遇到 '4')

s6 = "HelloWorld"
print(s6.lstrip('Hlo'))  # 输出: "World" (H 被移除，e 不在 'Hlo' 中，所以停止？不！'e' 不在 'Hlo' 中，所以结果是 "elloWorld"？
# 注意：chars 是字符集合，不是前缀。上述 s6.lstrip('Hlo') 会移除开头所有属于 {'H','l','o'} 的字符。
# "HelloWorld" 开头是 'H' (移除) → 'e' (不在集合中，停止) → 结果是 "elloWorld"
```

### 注意
`chars` 参数是一个字符集合，而不是一个固定的前缀。例如 `'abc'` 表示可以移除 `'a'`、`'b'` 或 `'c'` 中的任何字符，直到遇到一个不在集合中的字符。
</details>

---

<details>
<summary><b>24. string.maketrans(intab, outtab)</b> - 创建字符映射转换表</summary>

### 描述
`maketrans()` 方法用于创建一个**字符映射转换表**（本质是一个字典），该表可以传递给 `str.translate()` 方法，用于批量替换字符串中的字符。

**最常用的调用方式**（接受两个参数）：
- `intab`: 字符串，表示**需要被替换的字符**（源字符集）。
- `outtab`: 字符串，表示**替换后的目标字符**（目标字符集）。
- 要求 `intab` 和 `outtab` 的**长度必须相等**，否则会抛出 `ValueError`。

### 语法
```python
str.maketrans(intab, outtab)  # 两个参数形式 (常用)
# 或
str.maketrans(mapping)        # 一个参数形式 (直接传入字典，键为被替换字符，值为目标字符)
```

### 参数
- `intab`: 字符串，源字符集。
- `outtab`: 字符串，目标字符集。
- `mapping`: 字典，键为单个字符（或 Unicode 码点整数），值为替换后的字符（或 `None` 表示删除该字符）。

### 返回值
返回一个用于字符转换的映射表（`dict` 类型，Python 3.10+ 可能返回 `str` 对象，但用法一致）。

### 实例
```python
# 1. 两个参数形式：创建 "abc" → "123" 的映射
intab = "abc"
outtab = "123"
trans_table = str.maketrans(intab, outtab)
print(trans_table)  # 输出类似: {97: 49, 98: 50, 99: 51} (键是字符 'a','b','c' 的 Unicode 码点，值是 '1','2','3' 的码点)

s = "a1b2c3xyz"
translated_s = s.translate(trans_table)
print(translated_s)  # 输出: "112233xyz" (a→1, b→2, c→3, 其他字符不变)

# 2. 错误示例：intab 和 outtab 长度不等
try:
    str.maketrans("ab", "1")
except ValueError as e:
    print("错误:", e)  # 输出: 错误: the first two arguments must have equal length

# 3. 一个参数形式（传入字典）
trans_dict = {'a': 'A', 'b': 'B', 'c': None}  # 'c' 被映射为 None，表示删除 'c'
trans_table = str.maketrans(trans_dict)
s = "abcabc"
translated_s = s.translate(trans_table)
print(translated_s)  # 输出: "ABAB" (a→A, b→B, c 被删除)
```

### 用途
配合 `str.translate()` 实现高效的批量字符替换或删除，比多次调用 `replace()` 更简洁。
</details>

---

<details>
<summary><b>25. max(str)</b> - 返回字符串中最大的字符</summary>

### 描述
`max()` 是 Python 内置函数（非字符串方法），用于返回可迭代对象中的最大元素。当传入字符串时，它返回字符串中**Unicode 码点值最大的字符**。

### 语法
```python
max(str)
```

### 参数
- `str`: 非空字符串。如果字符串为空，会抛出 `ValueError`。

### 返回值
字符串中 Unicode 码点最大的单个字符。

### 实例
```python
s1 = "hello"
print(max(s1))  # 输出: 'o' (字符 'o' 的 Unicode 码点是 111，大于 'h'(104), 'e'(101), 'l'(108), 'l'(108))

s2 = "Python123"
print(max(s2))  # 输出: 'y' (字符 'y' 的码点是 121，其他字符码点：'P'(80), 'y'(121), 't'(116), ..., '3'(51))

s3 = "aA0"
print(max(s3))  # 输出: 'a' (码点：'a'(97) > 'A'(65) > '0'(48))

s4 = "你好，世界！"
print(max(s4))  # 输出: '界' (比较各汉字的 Unicode 码点，'界' 的码点最大)

# 空字符串会报错
try:
    print(max(""))
except ValueError as e:
    print("错误:", e)  # 输出: 错误: max() arg is an empty sequence
```

### 注意
比较的是字符的 **Unicode 码点值**（可通过 `ord(char)` 查看），而非字符的字面含义或长度。
</details>

---

<details>
<summary><b>26. min(str)</b> - 返回字符串中最小的字符</summary>

### 描述
`min()` 是 Python 内置函数（非字符串方法），用于返回可迭代对象中的最小元素。当传入字符串时，它返回字符串中**Unicode 码点值最小的字符**。

### 语法
```python
min(str)
```

### 参数
- `str`: 非空字符串。如果字符串为空，会抛出 `ValueError`。

### 返回值
字符串中 Unicode 码点最小的单个字符。

### 实例
```python
s1 = "hello"
print(min(s1))  # 输出: 'e' (字符 'e' 的 Unicode 码点是 101，小于 'h'(104), 'l'(108), 'o'(111))

s2 = "Python123"
print(min(s2))  # 输出: '1' (字符 '1' 的码点是 49，是所有字符中最小的)

s3 = "aA0"
print(min(s3))  # 输出: '0' (码点：'0'(48) < 'A'(65) < 'a'(97))

s4 = "你好，世界！"
print(min(s4))  # 输出: '！' (感叹号的 Unicode 码点可能是最小的，具体取决于字符集)

# 空字符串会报错
try:
    print(min(""))
except ValueError as e:
    print("错误:", e)  # 输出: 错误: min() arg is an empty sequence
```
</details>

---

<details>
<summary><b>27. string.partition(sep)</b> - 将字符串分割为三部分</summary>

### 描述
`partition()` 方法用于将字符串根据**第一个出现的分隔符 `sep`** 分割为一个**三元元组** `(head, sep, tail)`：
- `head`: 分隔符 `sep` 出现之前的子串（如果 `sep` 是字符串的开头，则 `head` 为空）。
- `sep`: 分隔符本身（如果 `sep` 未找到，则此部分为空）。
- `tail`: 分隔符 `sep` 出现之后的子串（如果 `sep` 是字符串的结尾，则 `tail` 为空）。

如果 `sep` 未在字符串中找到，则返回 `(原字符串, '', '')`。

### 语法
```python
str.partition(sep)
```

### 参数
- `sep`: 必需，作为分隔符的字符串。

### 返回值
一个包含三个元素的元组 `(head, sep, tail)`。

### 实例
```python
s = "Hello,World!Python"

# 1. 分隔符存在且只出现一次
print(s.partition(","))  # 输出: ('Hello', ',', 'World!Python') (根据第一个 ',' 分割)

# 2. 分隔符出现多次，只按第一个分割
print(s.partition("o"))  # 输出: ('Hell', 'o', ',World!Python') (第一个 'o' 在索引4)

# 3. 分隔符是字符串的开头
print(s.partition("Hello"))  # 输出: ('', 'Hello', ',World!Python')

# 4. 分隔符是字符串的结尾
print(s.partition("Python"))  # 输出: ('Hello,World!', 'Python', '')

# 5. 分隔符未找到
print(s.partition("Java"))   # 输出: ('Hello,World!Python', '', '')

# 6. 分隔符是空字符串 (会报错)
try:
    print(s.partition(""))
except ValueError as e:
    print("错误:", e)  # 输出: 错误: empty separator
```

### 对比 `split()`
- `split(sep, 1)` 会返回一个列表，包含分隔后的两部分（如果 `sep` 存在）。
- `partition(sep)` 则固定返回一个三元元组，明确包含分隔符前后的部分和分隔符本身，即使分隔符不存在。
```python
s = "a-b-c"
print(s.split("-", 1))    # 输出: ['a', 'b-c']
print(s.partition("-"))   # 输出: ('a', '-', 'b-c')
```
</details>

---

<details>
<summary><b>28. string.replace(old, new[, count])</b> - 替换字符串中的子串</summary>

### 描述
`replace()` 方法用于将字符串中**所有出现的 `old` 子串**替换为 `new` 子串，并返回一个新的字符串。如果指定了可选参数 `count`，则只替换**前 `count` 次**出现的 `old` 子串。

原字符串不会被修改，所有操作都返回新字符串。

### 语法
```python
str.replace(old, new[, count])
```

### 参数
- `old`: 必需，要被替换的旧子串。
- `new`: 必需，用于替换的新子串。
- `count`: 可选，指定最多替换的次数，默认为 `-1`（表示替换所有）。

### 返回值
返回一个新的字符串，其中 `old` 子串被 `new` 子串替换（根据 `count` 指定的次数）。

### 实例
```python
s = "ababaabab"

# 1. 替换所有 'ab' 为 'XY'
print(s.replace("ab", "XY"))  # 输出: 'XYXYaXYXY' (原字符串中有4个 'ab'，全部替换)

# 2. 只替换前2次 'ab'
print(s.replace("ab", "XY", 2))  # 输出: 'XYXYaabab' (只替换前2个 'ab')

# 3. 替换次数超过实际出现次数，按实际次数替换
print(s.replace("ab", "XY", 10))  # 输出: 'XYXYaXYXY' (只有4个 'ab'，全部替换)

# 4. 替换不存在的子串，返回原字符串
print(s.replace("cd", "XY"))  # 输出: 'ababaabab'

# 5. 替换为空字符串 (相当于删除 old 子串)
print(s.replace("ab", ""))    # 输出: 'aa' (删除所有 'ab')

# 6. new 可以比 old 长或短
print("Hello".replace("l", "xyz"))  # 输出: 'Hexyzxyzlo' (将 'l' 替换为 'xyz')
```

### 注意
- `replace()` 是大小写敏感的。
- 如果需要复杂的替换逻辑（如正则表达式），可以使用 `re.sub()` 方法。
</details>

---

<details>
<summary><b>29. string.rfind(sub[, start[, end]])</b> - 查找子串最后一次出现的位置</summary>

### 描述
`rfind()` 方法用于在字符串中**从右向左**查找子串 `sub` 最后一次出现的起始索引。可以通过 `start` 和 `end` 参数指定搜索的范围（索引，左闭右开）。
如果找到子串，返回其最后一次出现的起始索引；如果未找到，返回 `-1`。
**与 `find()` 的区别**：`find()` 从左向右查找第一次出现，`rfind()` 从右向左查找最后一次出现。

### 语法
```python
str.rfind(sub[, start[, end]])
```

### 参数
*   `sub` (必需): 要搜索的子字符串。
*   `start` (可选): 搜索的起始索引（从左开始计数），默认为 `0`。
*   `end` (可选): 搜索的结束索引（从左开始计数），默认为字符串长度 `len(str)`。**不包含 `end` 位置本身**。

### 返回值
*   找到时：返回子串 `sub` 在指定范围内最后一次出现的起始索引。
*   未找到时：返回 `-1`。

### 实例
```python
s = "ababaabab"  # 子串 "ab" 出现位置：0, 2, 4, 6

# 查找 "ab" 最后一次出现的位置
print(s.rfind("ab"))  # 输出: 6 (最后一个 "ab" 起始于索引6)

# 从索引0到7范围内查找（即 s[0:7] = "ababaab"）
print(s.rfind("ab", 0, 7))  # 输出: 4 (该范围内最后一个 "ab" 起始于索引4)

# 从索引5开始查找（s[5:] = "aabab"）
print(s.rfind("ab", 5))     # 输出: 6 (该范围内 "ab" 起始于索引6)

# 查找不存在的子串
print(s.rfind("cd"))        # 输出: -1
```
</details>

---

<details>
<summary><b>30. string.rindex(sub[, start[, end]])</b> - 查找子串最后一次出现的索引（找不到会报错）</summary>

### 描述
`rindex()` 方法与 `rfind()` 方法功能完全相同，用于在字符串中**从右向左**查找子串 `sub` 最后一次出现的起始索引。
**唯一区别**：如果 `sub` 未找到，`rindex()` 会抛出 `ValueError` 异常，而 `rfind()` 返回 `-1`。

### 语法
```python
str.rindex(sub[, start[, end]])
```

### 参数
*   `sub` (必需): 要搜索的子字符串。
*   `start` (可选): 搜索的起始索引，默认为 `0`。
*   `end` (可选): 搜索的结束索引，默认为 `len(str)`。

### 返回值
返回子串 `sub` 在指定范围内最后一次出现的起始索引。

### 实例
```python
s = "ababaabab"

# 查找 "ab" 最后一次出现的位置
print(s.rindex("ab"))  # 输出: 6

# 指定范围查找
print(s.rindex("ab", 0, 7))  # 输出: 4

# 子串未找到时抛出异常
try:
    print(s.rindex("cd"))
except ValueError as e:
    print("错误:", e)  # 输出: 错误: substring not found
```

### 应用场景
当需要确保子串一定存在，并获取其最后一次出现的位置时使用。
</details>

---

<details>
<summary><b>31. string.rjust(width[, fillchar])</b> - 右对齐字符串</summary>

### 描述
`rjust()` 方法返回一个原字符串**右对齐**的新字符串，总长度为 `width`。如果指定 `fillchar`（可选），则用该字符填充左侧空白；默认使用**空格**填充。
如果原字符串长度大于或等于 `width`，则直接返回原字符串。

### 语法
```python
str.rjust(width[, fillchar])
```

### 参数
*   `width` (必需): 指定返回字符串的总长度。
*   `fillchar` (可选): 填充字符，默认为空格。必须是单个字符。

### 返回值
返回一个右对齐的新字符串。

### 实例
```python
s = "Python"

# 默认空格填充
print(s.rjust(10))       # 输出: "    Python" (左侧补4个空格，总长度10)
print(s.rjust(5))        # 输出: "Python" (原长6 > 5，返回原字符串)

# 指定填充字符
print(s.rjust(10, "*"))  # 输出: "****Python" (左侧补4个 '*')
print(s.rjust(8, "-"))   # 输出: "--Python" (左侧补2个 '-')
```

### 对比
* `ljust(width)`: 左对齐，右侧填充。
* `rjust(width)`: 右对齐，左侧填充。
* `center(width)`: 居中对齐，两侧填充。
</details>

---

<details>
<summary><b>32. string.rpartition(sep)</b> - 从右侧分割字符串为三部分</summary>

### 描述
`rpartition()` 方法与 `partition()` 类似，但**从字符串右侧开始查找分隔符 `sep`**，并返回一个三元元组 `(head, sep, tail)`：
* `head`: 分隔符 `sep` 右侧第一次出现之前的子串（如果 `sep` 不存在，则 `head` 为空）。
* `sep`: 分隔符本身（如果 `sep` 不存在，则 `sep` 和 `tail` 为空）。
* `tail`: 分隔符 `sep` 右侧第一次出现之后的子串（如果 `sep` 是字符串结尾，则 `tail` 为空）。

### 语法
```python
str.rpartition(sep)
```

### 参数
* `sep` (必需): 作为分隔符的字符串（不可为空）。

### 返回值
一个包含三个元素的元组 `(head, sep, tail)`。

### 实例
```python
s = "Hello,World!Python"

# 从右侧查找第一个 ','
print(s.rpartition(","))    # 输出: ('Hello', ',', 'World!Python') (与 partition 结果相同，因为 ',' 只出现一次)

# 从右侧查找第一个 'o'
print(s.rpartition("o"))    # 输出: ('Hello,World!Pyth', 'o', 'n') (最后一个 'o' 的位置)

# 分隔符未找到
print(s.rpartition("Java")) # 输出: ('', '', 'Hello,World!Python') (与 partition 不同)

# 分隔符在字符串开头
print(s.rpartition("Hello"))# 输出: ('', 'Hello', ',World!Python') (与 partition 结果相同)
```

### 对比 `partition()`
| 方法 | 查找方向 | 未找到分隔符时返回 |
|------|----------|-------------------|
| `partition(sep)` | 从左向右 | `(原字符串, '', '')` |
| `rpartition(sep)` | 从右向左 | `('', '', 原字符串)` |
</details>

---

<details>
<summary><b>33. string.rstrip([chars])</b> - 截掉字符串右侧的指定字符（默认截空格）</summary>

### 描述
`rstrip()` 方法用于截掉字符串**右侧（末尾）** 的指定字符。
* 如果不提供 `chars`，默认截掉所有**空白字符**（空格、`\t`、`\n`、`\r` 等）。
* 如果提供 `chars`，则截掉末尾所有包含在 `chars` 中的字符，直到遇到不在 `chars` 中的字符为止。

### 语法
```python
str.rstrip([chars])
```

### 参数
* `chars` (可选): 要截掉的字符集合（字符串）。

### 返回值
返回一个截掉右侧指定字符后的新字符串。

### 实例
```python
# 默认截掉右侧空白字符
s1 = "   Hello World!   "
print(s1.rstrip())  # 输出: "   Hello World!" (右侧空格被移除)

s2 = "Hello\n\t"
print(s2.rstrip())  # 输出: "Hello" (右侧的 \n 和 \t 被移除)

# 指定字符集合
s3 = "Helloaaaa"
print(s3.rstrip('a'))  # 输出: "Hello" (右侧所有 'a' 被移除)

s4 = "abc123abc"
print(s4.rstrip('abc')) # 输出: "abc123" (从右侧移除 'a'/'b'/'c'，直到遇到 '3')

s5 = "1234end"
print(s5.rstrip('dne')) # 输出: "1234" (右侧 'e'/'n'/'d' 被移除)
```

### 注意
`chars` 是字符集合，而非固定后缀。例如 `'abc'` 会移除末尾所有 `'a'`、`'b'` 或 `'c'`。
</details>

---

<details>
<summary><b>34. string.split(sep=None, maxsplit=-1)</b> - 分割字符串为列表</summary>

### 描述
`split()` 方法通过指定**分隔符 `sep`** 对字符串进行分割，并返回一个由分割后的子串组成的**列表**。
- 如果不指定 `sep` 或 `sep=None`，则默认以**任意空白字符**（空格、`\t`、`\n`、`\r` 等）为分隔符，且会自动忽略开头和结尾的空白字符，并将连续的空白字符视为单个分隔符。
- 如果指定 `sep`，则按 `sep` 进行精确分割（`sep` 可以是多个字符的字符串）。
- `maxsplit` 参数用于指定**最大分割次数**，默认 `-1`（分割所有可能的位置）。分割次数达到 `maxsplit` 后，剩余部分作为列表的最后一个元素。

### 语法
```python
str.split(sep=None, maxsplit=-1)
```

### 参数
* `sep` (可选): 分隔符。默认为 `None`（空白字符分割模式）。
* `maxsplit` (可选): 最大分割次数。默认为 `-1`（无限制）。

### 返回值
返回一个包含分割后子串的列表。

### 实例
```python
# 1. 默认模式 (sep=None，空白字符分割)
s1 = "   Hello   World   Python   "
print(s1.split())  # 输出: ['Hello', 'World', 'Python'] (忽略开头结尾空白，连续空白视为一个分隔符)

s2 = "Hello\tWorld\nPython"  # \t 制表符，\n 换行符
print(s2.split())            # 输出: ['Hello', 'World', 'Python'] (任意空白字符都作为分隔符)

# 2. 指定分隔符 sep
s3 = "apple,banana,orange,grape"
print(s3.split(','))         # 输出: ['apple', 'banana', 'orange', 'grape'] (按 ',' 分割)

s4 = "a-b-c-d"
print(s4.split('-'))         # 输出: ['a', 'b', 'c', 'd'] (按 '-' 分割)

s5 = "HelloWorldHello"
print(s5.split("Hello"))     # 输出: ['', 'World', ''] (分隔符是 "Hello"，开头和结尾匹配会产生空字符串)

# 3. 指定 maxsplit (最大分割次数)
s6 = "a-b-c-d-e"
print(s6.split('-', 2))      # 输出: ['a', 'b', 'c-d-e'] (分割 2 次，得到 3 个元素)
print(s6.split('-', 0))      # 输出: ['a-b-c-d-e'] (分割 0 次，返回原字符串组成的列表)

# 4. sep 是多字符字符串
s7 = "Hello||World||Python"
print(s7.split("||"))        # 输出: ['Hello', 'World', 'Python'] (按 "||" 分割)

# 5. sep 是空字符串 (会报错)
try:
    print(s7.split(""))
except ValueError as e:
    print("错误:", e)  # 输出: 错误: empty separator
```

### 注意
* 当 `sep` 为 `None` 时，结果中不会包含空字符串（因为会忽略开头结尾空白和合并连续空白）。
* 当 `sep` 为具体字符串时，如果字符串以 `sep` 开头或结尾，或 `sep` 连续出现，结果中会包含空字符串。
</details>

---

<details>
<summary><b>35. string.splitlines([keepends])</b> - 按行分隔字符串为列表</summary>

### 描述
`splitlines()` 方法用于按照**行分隔符**（如 `\n`、`\r\n`、`\r` 等）对字符串进行分割，并返回一个包含各行内容的**列表**。
- 它能识别所有常见的行结束符，比使用 `split('\n')` 更智能。
- 可选参数 `keepends` 为 `True` 时，返回的列表元素会**保留行结束符**；为 `False`（默认）时，行结束符会被去除。

### 语法
```python
str.splitlines(keepends=False)
```

### 参数
* `keepends` (可选): 布尔值。`True` 保留行结束符，`False` 不保留。默认为 `False`。

### 返回值
返回一个包含各行内容的列表。

### 实例
```python
s = "第一行\n第二行\r\n第三行\r第四行"  # 包含 \n, \r\n, \r 三种行结束符

# 默认 keepends=False (不保留行结束符)
print(s.splitlines())
# 输出: ['第一行', '第二行', '第三行', '第四行'] (所有行结束符都被去除)

# keepends=True (保留行结束符)
print(s.splitlines(keepends=True))
# 输出: ['第一行\n', '第二行\r\n', '第三行\r', '第四行'] (保留原始行结束符)

# 空行处理
s2 = "Hello\n\nWorld"
print(s2.splitlines())  # 输出: ['Hello', '', 'World'] (空行被保留为列表中的空字符串)

# 与 split('\n') 的对比 (split 无法识别 \r\n 和 \r 为行结束符)
print(s.split('\n'))
# 输出: ['第一行', '第二行\r', '第三行\r第四行'] (无法正确分割 \r\n 和 \r)
```

### 常见行结束符
`splitlines()` 能识别的行结束符包括：`\n` (换行)、`\r\n` (回车+换行)、`\r` (回车)、`\v` (垂直制表符)、`\f` (换页符) 等。

### 用途
常用于处理多行文本，如读取文件内容后按行分割。
</details>

---

<details>
<summary><b>36. string.startswith(prefix[, start[, end]])</b> - 检查字符串是否以指定前缀开头</summary>

### 描述
`startswith()` 方法用于检查字符串是否以**指定的前缀 `prefix`** 开头。可以通过 `start` 和 `end` 参数指定检查的范围（索引，左闭右开）。
返回 `True` 或 `False`。

### 语法
```python
str.startswith(prefix[, start[, end]])
```

### 参数
* `prefix` (必需): 要检查的前缀字符串。也可以是一个**元组**，包含多个前缀，只要字符串以其中任何一个前缀开头，就返回 `True`。
* `start` (可选): 检查的起始索引，默认为 `0`。
* `end` (可选): 检查的结束索引，默认为字符串长度 `len(str)`。**不包含 `end` 位置本身**。

### 返回值
布尔值 `True` 或 `False`。

### 实例
```python
s = "Hello, World! Python is great."

# 1. 基本用法：单个前缀
print(s.startswith("Hello"))       # 输出: True (以 "Hello" 开头)
print(s.startswith("hello"))       # 输出: False (大小写敏感)
print(s.startswith("World", 7))    # 输出: True (从索引7开始，子串是 "World! Python...", 以 "World" 开头)
print(s.startswith("Python", 0, 13))  # 输出: False (检查范围是 s[0:13] = "Hello, World!", 不以 "Python" 开头)

# 2. prefix 是元组（多个前缀）
print(s.startswith(("Hello", "Hi", "Hey")))  # 输出: True (以元组中的 "Hello" 开头)
print(s.startswith(("Hi", "Hey")))           # 输出: False (元组中所有前缀都不匹配)

# 3. 实际应用：检查文件扩展名
filename = "document.txt"
if filename.startswith(("image.", "pic.")):
    print("图片文件")
elif filename.endswith((".txt", ".doc")):  # endswith() 类似，检查后缀
    print("文档文件")  # 输出: 文档文件
```

### 注意
* `prefix` 为元组时，只要其中一个前缀匹配，就返回 `True`。
* 该方法**大小写敏感**。如果需要不区分大小写，可先将字符串和前缀都转为小写（或大写）。
</details>

---

<details>
<summary><b>37. string.strip([chars])</b> - 截掉字符串两端的指定字符（默认截空白字符）</summary>

### 描述
`strip()` 方法用于截掉字符串**开头和结尾**的指定字符，相当于同时执行 `lstrip()` 和 `rstrip()`。
- 如果不指定 `chars`，默认截掉**所有空白字符**（空格、`\t`、`\n`、`\r` 等）。
- 如果指定 `chars`，则截掉开头和结尾所有包含在 `chars` 中的字符，直到遇到不在 `chars` 中的字符为止。

### 语法
```python
str.strip([chars])
```

### 参数
* `chars` (可选): 要截掉的字符集合（字符串）。

### 返回值
返回一个截掉两端指定字符后的新字符串。

### 实例
```python
# 1. 默认情况：截掉两端空白字符
s1 = "   \tHello World!\n   "
print(s1.strip())  # 输出: "Hello World!" (开头的空格、\t 和结尾的 \n、空格被移除)

# 2. 指定 chars 参数：截掉两端包含在 chars 中的字符
s2 = "###Hello World###"
print(s2.strip('#'))  # 输出: "Hello World" (两端的 '#' 被移除)

s3 = "abc123XYZcba"
print(s3.strip('abc'))  # 输出: "123XYZ" (开头的 'a','b','c' 和结尾的 'c','b','a' 被移除)

s4 = "1234Python4321"
print(s4.strip('1234'))  # 输出: "Python" (两端的 '1','2','3','4' 被移除)

s5 = "HelloWorld"
print(s5.strip('HdloW'))  # 输出: "orl" (开头移除 'H','e' 不在集合中？不！'H' 在集合中 → 移除，'e' 不在 → 开头停止；结尾 'd' 在集合中 → 移除，'l' 在集合中 → 移除，'r' 不在 → 结尾停止。结果是 "orl")
# 注意：chars 是字符集合，不是前缀/后缀。上述 s5.strip('HdloW') 会移除开头和结尾所有属于 {'H','d','l','o','W'} 的字符。
```

### 注意
* `chars` 是字符集合，而非固定的前缀或后缀。例如 `'abc'` 会移除开头和结尾所有 `'a'`、`'b'` 或 `'c'`。
* 如果字符串所有字符都在 `chars` 中，则返回空字符串。
```python
print("aaaaa".strip('a'))  # 输出: ""
```
</details>

---

<details>
<summary><b>38. string.swapcase()</b> - 翻转字符串中的大小写</summary>

### 描述
`swapcase()` 方法用于将字符串中**所有大写字母转换为小写，所有小写字母转换为大写**，并返回一个新的字符串。不区分大小写的字符（如数字、符号）保持不变。

### 语法
```python
str.swapcase()
```

### 参数
无。

### 返回值
返回一个新的字符串，其中大小写字母被翻转。

### 实例
```python
s1 = "Hello World! Python 3.10"
print(s1.swapcase())  # 输出: "hELLO wORLD! pYTHON 3.10" (H→h, e→E, l→L, o→O, W→w, P→p, y→Y, t→T, h→H, o→O, n→N)

s2 = "AbCdEfG"
print(s2.swapcase())  # 输出: "aBcDeFg"

s3 = "123!@#"
print(s3.swapcase())  # 输出: "123!@#" (无字母，返回原字符串)
```

### 注意
* 该方法会翻转所有字母的大小写，无论其原来的状态如何。
* 对于非字母字符无影响。
</details>

---


<details>
<summary><b>39. string.title()</b> - 将字符串转换为标题格式</summary>

### 描述
`title()` 方法将字符串转换为**标题化格式**，即**每个单词的首字母大写，其余字母小写**。
单词的定义是：以**非字母字符**分隔的连续字母序列。数字和符号会被视为单词分隔符。

### 语法
```python
str.title()
```

### 参数
无。

### 返回值
返回一个新的标题化字符串。

### 实例
```python
# 基本用法
s1 = "hello world"
print(s1.title())  # 输出: "Hello World"

# 包含数字和符号的情况
s2 = "hello2world!python is fun"
print(s2.title())  # 输出: "Hello2World!Python Is Fun" (数字 '2' 和符号 '!' 作为分隔符)

# 原字符串中存在大写字母的情况
s3 = "hELLo wORLD"
print(s3.title())  # 输出: "Hello World" (首字母转为大写，其余字母转为小写)

# 连续非字母字符作为分隔符
s4 = "hello__world!!python"
print(s4.title())  # 输出: "Hello__World!!Python" (连续的 '_' 和 '!' 仍作为单个分隔符)

# 空字符串
print("".title())  # 输出: ""
```

### 注意
* `title()` 方法会将每个单词的**首字母强制转为大写**，**其余字母强制转为小写**，无论原字符串的大小写如何。
* 与 `istitle()` 方法配合使用：`istitle()` 检查是否为标题格式，`title()` 则将字符串转换为标题格式。
</details>

---

<details>
<summary><b>40. string.translate(table)</b> - 使用转换表转换字符</summary>

### 描述
`translate()` 方法使用一个**字符转换表**（通常由 `str.maketrans()` 创建）对字符串进行字符级别的转换或删除操作，并返回新字符串。
**注意**：Python 3 中，`translate()` 仅接受一个参数（转换表），删除字符的功能通过在转换表中映射为 `None` 实现（不再支持 `del` 参数）。

### 语法
```python
str.translate(table)
```

### 参数
* `table`: 必需，字符转换表。通常通过 `str.maketrans()` 创建。

### 返回值
返回一个应用转换表后的新字符串。

### 实例
```python
# 1. 创建转换表并替换字符 (使用 str.maketrans(intab, outtab))
intab = "abc"
outtab = "123"
trans_table = str.maketrans(intab, outtab)  # 创建 {'a': '1', 'b': '2', 'c': '3'} 的映射
s = "a1b2c3xyz"
print(s.translate(trans_table))  # 输出: "112233xyz" (a→1, b→2, c→3)

# 2. 创建转换表并删除字符 (映射为 None)
trans_dict = {'a': None, 'b': None, 'c': '3'}  # 'a' 和 'b' 被删除，'c' 替换为 '3'
trans_table = str.maketrans(trans_dict)
s = "abcabc123"
print(s.translate(trans_table))  # 输出: "33123" (a和b被删除，c替换为3)

# 3. 结合 maketrans 的三个参数形式 (Python 3.1+)
# str.maketrans(intab, outtab, delchars): 先删除 delchars 中的字符，再进行 intab→outtab 映射
trans_table = str.maketrans("abc", "123", "xyz")  # 删除 'x','y','z'，然后 a→1, b→2, c→3
s = "axbycz123xyz"
print(s.translate(trans_table))  # 输出: "123123123" (x/y/z 被删除，a/b/c 被替换)
```

### 用途
* 批量替换字符（比多次 `replace()` 更高效）。
* 删除特定字符。
* 实现简单的加密/解密（如字符映射）。
</details>

---

<details>
<summary><b>41. string.upper()</b> - 将字符串转换为大写</summary>

### 描述
`upper()` 方法将字符串中**所有区分大小写的字符**转换为**大写字母**，并返回一个新的字符串。不区分大小写的字符（如数字、符号）保持不变。

### 语法
```python
str.upper()
```

### 参数
无。

### 返回值
返回一个新的大写字符串。

### 实例
```python
s1 = "hello world"
print(s1.upper())  # 输出: "HELLO WORLD"

s2 = "Python Is Fun!"
print(s2.upper())  # 输出: "PYTHON IS FUN!"

s3 = "AbC123!@#"
print(s3.upper())  # 输出: "ABC123!@#" (a→A, b→B, c→C，数字和符号不变)

s4 = "12345"
print(s4.upper())  # 输出: "12345" (无字母，返回原字符串)
```

### 对比 `lower()`
* `lower()`: 所有字母转为小写。
* `upper()`: 所有字母转为大写。
* 常用于不区分大小写的比较（统一转为大写或小写后比较）。
</details>

---

<details>
<summary><b>42. string.zfill(width)</b> - 用0填充字符串至指定宽度</summary>

### 描述
`zfill()` 方法返回一个**指定宽度**的新字符串，原字符串**右对齐**，左侧用**0** 填充。
如果原字符串的长度大于或等于 `width`，则直接返回原字符串。
如果原字符串以**正负号 `+` 或 `-`** 开头，则 `0` 会填充在符号之后、数字之前（例如 `"-123".zfill(6)` → `"-00123"`）。

### 语法
```python
str.zfill(width)
```

### 参数
* `width` (必需): 指定返回字符串的总长度。

### 返回值
返回一个右对齐、左侧用0填充的新字符串。

### 实例
```python
# 基本用法
s1 = "42"
print(s1.zfill(5))  # 输出: "00042" (总长度5，左侧补3个0)

# 原字符串长度 ≥ width
s2 = "123456"
print(s2.zfill(3))  # 输出: "123456" (原长6 > 3，返回原字符串)

# 包含正负号的情况
s3 = "-123"
print(s3.zfill(6))  # 输出: "-00123" (符号后补0，总长度6)
s4 = "+456"
print(s4.zfill(5))  # 输出: "+0456" (符号后补0，总长度5)

# 非数字字符串
s5 = "abc"
print(s5.zfill(10))  # 输出: "000000abc" (同样右对齐，左侧补0)

# 空字符串
print("".zfill(5))   # 输出: "00000" (空字符串视为长度0，补5个0)
```

### 对比 `rjust()`
* `rjust(width, '0')` 也可以实现用0填充的效果，但对正负号的处理不同：
  ```python
  print("-123".rjust(6, '0'))  # 输出: "00-123" (0填充在符号前)
  print("-123".zfill(6))       # 输出: "-00123" (0填充在符号后，更符合数字格式)
  ```
* `zfill()` 对数字字符串更友好，推荐用于数字补零场景。
</details>

---

至此，我们已经详细介绍了 Python 字符串的大部分常用内建方法。这些方法覆盖了字符串的创建、修改、查询、分割、连接、格式化等核心操作。熟练掌握它们，能极大提升字符串处理的效率和代码质量。

如果需要进一步了解某个方法的细节或特殊用法，可以查阅 [Python 官方文档](https://docs.python.org/3/library/stdtypes.html#string-methods)。


---
# Python 字符串方法综合练习

为了帮助你巩固所学的字符串方法，以下提供一些从基础到综合的练习题。建议先独立思考，遇到困难再查看参考答案。

---

## 基础练习

### 练习1：字符串大小写转换
将字符串 `s = "hElLo, pYtHoN!"` 转换为：
1. 全小写
2. 全大写
3. 首字母大写（其余小写）
4. 标题化（每个单词首字母大写）

<details>
<summary>参考答案</summary>

```python
s = "hElLo, pYtHoN!"

# 1. 全小写
print(s.lower())  # 输出: hello, python!

# 2. 全大写
print(s.upper())  # 输出: HELLO, PYTHON!

# 3. 首字母大写（其余小写）
print(s.capitalize())  # 输出: Hello, python!

# 4. 标题化
print(s.title())  # 输出: Hello, Python!
```
</details>

### 练习2：字符串搜索与替换
给定字符串 `s = "Python is powerful. Python is easy to learn."`
1. 查找第一个 "Python" 的位置
2. 查找最后一个 "Python" 的位置
3. 将所有 "Python" 替换为 "Java"
4. 只替换第一个 "Python" 为 "Java"

<details>
<summary>参考答案</summary>

```python
s = "Python is powerful. Python is easy to learn."

# 1. 第一个 "Python" 的位置
print(s.find("Python"))  # 输出: 0

# 2. 最后一个 "Python" 的位置
print(s.rfind("Python"))  # 输出: 19

# 3. 替换所有 "Python" 为 "Java"
print(s.replace("Python", "Java"))
# 输出: Java is powerful. Java is easy to learn.

# 4. 只替换第一个 "Python"
print(s.replace("Python", "Java", 1))
# 输出: Java is powerful. Python is easy to learn.
```
</details>

### 练习3：字符串对齐与填充
将字符串 `s = "Python"` 分别进行：
1. 左对齐，总长度10，用 `-` 填充
2. 右对齐，总长度10，用 `*` 填充
3. 居中对齐，总长度10，用 `#` 填充

<details>
<summary>参考答案</summary>

```python
s = "Python"

# 1. 左对齐
print(s.ljust(10, '-'))  # 输出: Python----

# 2. 右对齐
print(s.rjust(10, '*'))  # 输出: ****Python

# 3. 居中对齐
print(s.center(10, '#'))  # 输出: ##Python##
```
</details>

---

## 进阶练习

### 练习4：字符串分割与连接
给定句子 `sentence = "   Hello   world!  Python is   fun.   "`
1. 移除句子前后的空白字符
2. 将句子按空白字符分割成单词列表（不含空字符串）
3. 用 `-` 将单词列表连接成新的字符串

<details>
<summary>参考答案</summary>

```python
sentence = "   Hello   world!  Python is   fun.   "

# 1. 移除前后空白
trimmed = sentence.strip()
print(trimmed)  # 输出: Hello   world!  Python is   fun.

# 2. 分割成单词列表
words = trimmed.split()  # 默认按任意空白分割，自动过滤空字符串
print(words)  # 输出: ['Hello', 'world!', 'Python', 'is', 'fun.']

# 3. 用 '-' 连接
result = '-'.join(words)
print(result)  # 输出: Hello-world!-Python-is-fun.
```
</details>

### 练习5：判断字符串特性
编写函数 `is_valid_password(password)`，检查密码是否符合以下规则：
- 长度至少8位
- 至少包含1个大写字母
- 至少包含1个小写字母
- 至少包含1个数字
- 至少包含1个特殊字符（`!@#$%^&*`）

<details>
<summary>参考答案</summary>

```python
def is_valid_password(password):
    if len(password) < 8:
        return False
  
    has_upper = False
    has_lower = False
    has_digit = False
    has_special = False
    special_chars = "!@#$%^&*"
  
    for char in password:
        if char.isupper():
            has_upper = True
        elif char.islower():
            has_lower = True
        elif char.isdigit():
            has_digit = True
        elif char in special_chars:
            has_special = True
  
    return has_upper and has_lower and has_digit and has_special

# 测试
print(is_valid_password("Pass123!"))    # True
print(is_valid_password("pass123!"))    # False (无大写)
print(is_valid_password("Pass123"))     # False (无特殊字符)
print(is_valid_password("Pass!"))       # False (长度不足)
```
</details>

---

## 综合练习

### 练习6：文本处理小工具
实现一个简单的文本处理函数 `process_text(text)`，功能如下：
1. 将文本中所有的行首尾空白字符移除
2. 合并连续的空行（只保留一行）
3. 将每行的第一个单词转换为大写（假设单词以空格分隔）
4. 在文本末尾添加一行，显示总行数（处理后的有效行数）

示例输入：
```
   hello world
 
   python is great
 
   have a nice day
```

示例输出：
```
Hello world
Python is great
Have a nice day
Total lines: 3
```

<details>
<summary>参考答案</summary>

```python
def process_text(text):
    # 按行分割，保留换行符（方便后续处理空行）
    lines = text.splitlines(keepends=True)
    processed = []
    empty_line_count = 0
  
    for line in lines:
        # 移除行首尾空白
        trimmed = line.strip()
        if not trimmed:
            # 空行：累计计数，只保留一个
            empty_line_count += 1
            if empty_line_count == 1:
                processed.append('\n')  # 保留一个空行
        else:
            # 非空行：重置空行计数，首单词大写
            empty_line_count = 0
            # 分割单词，首单词大写，再连接
            words = trimmed.split(' ', 1)  # 只分割第一个空格
            if len(words) >= 1:
                words[0] = words[0].capitalize()
            new_line = ' '.join(words) + '\n'  # 恢复换行符
            processed.append(new_line)
  
    # 移除末尾可能多余的空行
    while processed and processed[-1].strip() == '':
        processed.pop()
  
    # 添加总行数
    total_lines = len(processed)
    processed.append(f'Total lines: {total_lines}\n')
  
    # 合并所有行
    return ''.join(processed)

# 测试
input_text = """   hello world
 
   python is great
 
   have a nice day
"""
output = process_text(input_text)
print(output, end='')  # end='' 避免双重换行
```
</details>

### 练习7：字符串加密解密
实现一个简单的凯撒密码加密/解密函数：
- 加密：将每个字母向后移动 `shift` 位（例如 `A` 移动 3 位变为 `D`，`z` 移动 2 位变为 `b`）
- 解密：将每个字母向前移动 `shift` 位
- 非字母字符保持不变

示例：
- 加密：`encrypt("Hello, World!", 3)` → `"Khoor, Zruog!"`
- 解密：`decrypt("Khoor, Zruog!", 3)` → `"Hello, World!"`

<details>
<summary>参考答案</summary>

```python
def caesar_cipher(text, shift, encrypt=True):
    result = []
    shift = shift % 26  # 确保 shift 在 0-25 之间
    if not encrypt:
        shift = -shift  # 解密时反向移动
  
    for char in text:
        if char.isupper():
            # 大写字母
            original_pos = ord(char) - ord('A')
            new_pos = (original_pos + shift) % 26
            new_char = chr(new_pos + ord('A'))
            result.append(new_char)
        elif char.islower():
            # 小写字母
            original_pos = ord(char) - ord('a')
            new_pos = (original_pos + shift) % 26
            new_char = chr(new_pos + ord('a'))
            result.append(new_char)
        else:
            # 非字母字符
            result.append(char)
  
    return ''.join(result)

def encrypt(text, shift):
    return caesar_cipher(text, shift, encrypt=True)

def decrypt(text, shift):
    return caesar_cipher(text, shift, encrypt=False)

# 测试
encrypted = encrypt("Hello, World!", 3)
print(encrypted)  # 输出: Khoor, Zruog!
decrypted = decrypt(encrypted, 3)
print(decrypted)  # 输出: Hello, World!
```
</details>

---

## 挑战题

### 练习8：最长回文子串
给定一个字符串，找出其中最长的回文子串（回文是指正读和反读都一样的字符串）。
示例：
- 输入：`"babad"`，输出：`"bab"` 或 `"aba"`
- 输入：`"cbbd"`，输出：`"bb"`

<details>
<summary>参考答案（中心扩展法）</summary>

```python
def longest_palindrome(s):
    if not s:
        return ""
  
    start = 0
    end = 0
  
    def expand_around_center(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        # 返回最长回文子串的起始和结束索引（左闭右开）
        return left + 1, right - 1
  
    for i in range(len(s)):
        # 奇数长度回文（中心是一个字符）
        l1, r1 = expand_around_center(i, i)
        # 偶数长度回文（中心是两个字符）
        l2, r2 = expand_around_center(i, i + 1)
      
        # 更新最长回文的起始和结束索引
        if r1 - l1 > end - start:
            start, end = l1, r1
        if r2 - l2 > end - start:
            start, end = l2, r2
  
    return s[start:end + 1]

# 测试
print(longest_palindrome("babad"))  # 输出: bab 或 aba
print(longest_palindrome("cbbd"))   # 输出: bb
print(longest_palindrome("a"))      # 输出: a
```
</details>

---

这些练习涵盖了字符串方法的大部分核心用法，从基础操作到综合应用。建议结合实际场景多动手练习，加深理解。如果有疑问，欢迎随时讨论！