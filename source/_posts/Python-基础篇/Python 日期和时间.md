---
title: Python 日期和时间
date: 2025-10-30 16:20:12
tags: 
  - 编程
categories:
  - 编程
  - Python 教程
---

# Python 日期和时间

想想看，我们日常生活中是不是经常要和日期时间打交道？比如：
*   记录一件事情发生的时间。
*   看看还有多少天到假期。
*   手机上的闹钟、日历提醒。

在编程的世界里，日期和时间同样非常重要。Python 作为一门强大又易用的编程语言，当然也提供了方便的工具来帮助我们处理各种与日期时间相关的任务，比如获取现在几点了、计算两个日期之间差了多少天，或者把日期显示成我们喜欢的格式，比如 `2024年5月20日` 或者 `05/20/2024`

## 1. 时间都去哪儿了？

在我们开始学习具体怎么用 Python 处理日期时间之前，先来了解一个非常基础也非常重要的概念：**时间戳 (Timestamp)**。

你有没有想过，电脑是怎么记住时间的呢？它不像我们人类一样看日历、看钟表。电脑有它自己独特的记时方式。

**时间戳**，简单来说，就是一个数字。这个数字代表的是**从一个特定的起始时间点开始，到某个时刻为止，一共经过了多少秒**。

这个特定的起始时间点，在很多计算机系统中是**1970年1月1日 00:00:00 UTC**（也就是协调世界时，也可以简单理解为格林尼治标准时间）。我们把这个起始点叫做**Unix 纪元 (Unix Epoch)** 。

所以，如果我说某个时间戳是 `1716182400`，这就代表从 1970年1月1日 00:00:00 UTC 开始，过了 1716182400 秒之后的那个时刻。

为什么要用这种方式呢？因为数字方便计算啊！比如，要计算两个时间点之间相差多久，直接用两个时间戳相减就可以得到相差的秒数，非常简单直接。

### 1.1 用 Python 获取当前时间戳

那么，我们怎么用 Python 来获取当前的时间戳呢？Python 内置了一个叫做 `time` 的**模块 (Module)**。模块就像是一个工具包，里面装了很多现成的工具可以供我们使用。

我们可以这样做：

```python
# 引入 time 模块，就像打开工具箱
import time

# 使用 time 模块里的 time() 函数获取当前时间戳
current_timestamp = time.time()

# 打印出这个时间戳
print("当前时间戳是：", current_timestamp)
```

如果现在运行这段代码，你可能会看到类似这样的输出：
```
当前时间戳是： 1716182400.123456
```
**（需要注意的是，你实际运行时得到的数字肯定和这个不一样，因为时间一直在走嘛！）**

你看，这个时间戳是一个**带小数点的数（浮点数）**。整数部分代表秒，小数部分代表秒的小数部分，也就是毫秒、微秒等更精确的时间。

**小思考：**
*   为什么时间戳通常用 1970年作为起点呢？这其实是早期 Unix 系统的设计决定，后来就被广泛沿用了。
*   时间戳能表示所有时间吗？理论上，因为它是一个数字，所以可以表示很大或很小的数。但在实际中，由于计算机存储数字的方式有范围限制，太遥远的过去（比如 1970年之前很久）或太遥远的未来（比如很多年后）的时间戳可能无法准确表示。不过对于我们日常使用来说，完全够用了。

## 2. Python 时间工具包 —— `time` 模块

刚才我们已经用到了 `time` 模块里的 `time()` 函数来获取时间戳。`time` 模块是 Python 处理时间的基础模块之一，它提供了很多与时间相关的功能。

除了 `time()` 函数，`time` 模块还有很多其他有用的工具，比如：
*   把时间戳转换成我们能看懂的日期时间格式。
*   获取当前的本地时间。
*   让程序暂停一段时间（典型的有倒计时）。

在接下来的章节里，我们会逐步学习这些功能。

## 3. 还有一个日历工具包 —— `calendar` 模块

除了 `time` 模块，Python 还提供了一个 `calendar` 模块，听名字就知道，它主要是用来处理**日历相关**的操作。

比如说：
*   打印某年某月的日历。
*   判断某一年是不是闰年。
*   获取一个月有多少天。

`calendar` 模块就像是一个电子日历，能帮我们做很多和日期编排相关的事情。

---


## 2. 时间元组 (struct_time)

我们已经知道时间戳是一个数字，很适合计算机进行计算。但是，这个长长的数字,比如 `1716182400.123456`。这对我们人类来说，一点也不直观，我们看不出是哪年哪月哪日，几点几分几秒。

那么，Python 是如何把时间戳翻译成我们能看懂的日期和时间的呢？这就需要用到 **时间元组 (Time Tuple)**，在 Python 中它通常被称为 `struct_time` 对象。

### 2.1 什么是时间元组？

**时间元组**，顾名思义，就是一个包含了时间各个组成部分的**元组 (Tuple)**。元组是 Python 中的一种数据类型，类似于列表，但元素不能修改。

这个特殊的元组里包含了 **9 个数字**，每个数字代表时间的一个特定部分，比如年份、月份、日期、小时、分钟等等。

下面就是这个时间元组中每个位置（序号）对应的含义和取值范围：

| 序号 (Index) | 字段名称 (Field) | 取值范围和说明                                   |
| :----------- | :--------------- | :---------------------------------------------- |
| 0            | tm_year          | 四位数年份，例如：2024                           |
| 1            | tm_mon           | 月份，1 到 12                                    |
| 2            | tm_mday          | 日，1 到 31                                     |
| 3            | tm_hour          | 小时，0 到 23                                    |
| 4            | tm_min           | 分钟，0 到 59                                    |
| 5            | tm_sec           | 秒，0 到 61（60或61 是闰秒，比较少见）             |
| 6            | tm_wday          | 一周的第几日，0 到 6（**0 代表星期一**，6 代表星期日） |
| 7            | tm_yday          | 一年的第几日，1 到 366（儒略日，考虑闰年）        |
| 8            | tm_isdst         | 夏令时标志，-1, 0, 1。<br>- 1: 是夏令时<br>0: 不是夏令时<br>-1: 不确定（这由系统决定） |

除了通过序号访问，`struct_time` 对象的这些字段也可以通过 **属性名** 来访问，比如 `struct_time.tm_year` 就表示年份。

**提醒：** `tm_wday` 这里要特别注意一下，0 代表星期一，而不是我们有时习惯认为的星期日，这一点在编程时很容易搞错！

### 2.2 如何获取时间元组？

我们可以通过 `time` 模块的一些函数，将时间戳转换为时间元组，或者直接获取当前时间的时间元组。

最常用的函数有：

1.  `time.localtime([timestamp])`
    *   功能：将一个时间戳转换为**本地时间**的时间元组 `struct_time`。
    *   如果不提供 `timestamp` 参数（即括号里为空），则默认使用当前时间的时间戳。

2.  `time.gmtime([timestamp])`
    *   功能：将一个时间戳转换为**UTC时间**的时间元组 `struct_time`。
    *   如果不提供 `timestamp` 参数，则默认使用当前时间的时间戳。

**实例1：获取当前本地时间的时间元组**

```python
import time

# 获取当前时间的时间元组 (本地时间)
local_time_tuple = time.localtime()
print("当前本地时间的时间元组:", local_time_tuple)
print("类型:", type(local_time_tuple))  # 看看它的类型

# 通过序号访问元组元素
print("年份 (通过序号 0):", local_time_tuple[0])
print("月份 (通过序号 1):", local_time_tuple[1])

# 通过属性名访问 (更推荐，可读性更好)
print("年份 (通过属性 tm_year):", local_time_tuple.tm_year)
print("月份 (通过属性 tm_mon):", local_time_tuple.tm_mon)
print("日期 (通过属性 tm_mday):", local_time_tuple.tm_mday)
print("小时 (通过属性 tm_hour):", local_time_tuple.tm_hour)
print("分钟 (通过属性 tm_min):", local_time_tuple.tm_min)
print("秒 (通过属性 tm_sec):", local_time_tuple.tm_sec)
print("星期几 (tm_wday, 0=周一):", local_time_tuple.tm_wday)  # 注意这里！
print("一年中的第几天 (tm_yday):", local_time_tuple.tm_yday)
```

**运行这段代码，你会看到类似这样的输出**（不过具体数值会因你运行的时间而不同）：
```
当前本地时间的时间元组: time.struct_time(tm_year=2024, tm_mon=5, tm_mday=20, tm_hour=15, tm_min=30, tm_sec=45, tm_wday=0, tm_yday=141, tm_isdst=0)
类型: <class 'time.struct_time'>
年份 (通过序号 0): 2024
月份 (通过序号 1): 5
年份 (通过属性 tm_year): 2024
月份 (通过属性 tm_mon): 5
日期 (通过属性 tm_mday): 20
小时 (通过属性 tm_hour): 15
分钟 (通过属性 tm_min): 30
秒 (通过属性 tm_sec): 45
星期几 (tm_wday, 0=周一): 0  # 这表示今天是星期一！
一年中的第几天 (tm_yday): 141
```

**实例2：将一个已知时间戳转换为时间元组**

假设我们有一个时间戳 `1716182400` (这个时间戳对应的是 2024年5月20日 00:00:00 UTC，具体如何计算出来的我们后面会学)。

```python
import time

timestamp = 1716182400
# 将时间戳转换为本地时间元组
local_time = time.localtime(timestamp)
print("时间戳", timestamp, "对应的本地时间元组:", local_time)
print("对应的本地日期时间:", local_time.tm_year, "年", local_time.tm_mon, "月", local_time.tm_mday, "日",
      local_time.tm_hour, "时", local_time.tm_min, "分", local_time.tm_sec, "秒")

# 将时间戳转换为 UTC 时间元组
utc_time = time.gmtime(timestamp)
print("时间戳", timestamp, "对应的 UTC 时间元组:", utc_time)
print("对应的 UTC 日期时间:", utc_time.tm_year, "年", utc_time.tm_mon, "月", utc_time.tm_mday, "日",
      utc_time.tm_hour, "时", utc_time.tm_min, "分", utc_time.tm_sec, "秒")
```

**你可能会看到的输出**（注意本地时间和UTC时间可能因为时区不同而有差异，比如中国是 UTC+8）：
```
时间戳 1716182400 对应的本地时间元组: time.struct_time(tm_year=2024, tm_mon=5, tm_mday=20, tm_hour=8, tm_min=0, tm_sec=0, tm_wday=0, tm_yday=141, tm_isdst=0)
对应的本地日期时间: 2024 年 5 月 20 日 8 时 0 分 0 秒
时间戳 1716182400 对应的 UTC 时间元组: time.struct_time(tm_year=2024, tm_mon=5, tm_mday=20, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=0, tm_yday=141, tm_isdst=0)
对应的 UTC 日期时间: 2024 年 5 月 20 日 0 时 0 分 0 秒
```
（解释：对于中国用户，本地时间是 UTC+8，所以 UTC 的 0 点，是北京时间的早上 8 点。）

### 2.3 时间元组的作用

时间元组是时间戳和我们人类可读的日期时间字符串之间的一个重要桥梁。

*   **时间戳 -> 时间元组**：通过 `localtime()` 或 `gmtime()`，我们可以把计算机容易理解的时间戳，转换成包含年月日时分秒等信息的时间元组。
*   **时间元组 -> 格式化字符串**：有了时间元组，我们就可以进一步把它格式化成各种我们想要的字符串形式，比如 `"2024-05-20"` 或者 `"20th May, 2024 08:00:00"`。

---

## Python `time` 模块内置函数

`time` 模块提供了各种与时间相关的函数，用于获取当前时间、时间戳转换、格式化时间等。

### 1. `time.altzone` - 获取夏令时偏移秒数

<details>
<summary><b>点击查看：Python time altzone()方法</b></summary>

**描述**
Python `time.altzone` 函数返回**格林威治西部的夏令时 (DST) 地区的偏移秒数**。如果该地区在格林威治东部，则返回负值（例如西欧，包括英国在夏令时期间）。这个值仅对启用了夏令时的地区有效。

**语法**
`altzone` 语法：
```python
time.altzone
```
（注意：这是一个模块级别的变量，不是一个需要调用的函数，因此没有括号 `()`。）

**参数**
*   NA（无参数）。

**返回值**
*   返回一个整数，表示格林威治西部夏令时的偏移秒数（东为负，西为正）。

**实例**
以下实例展示了 `time.altzone` 的使用方法：
```python
import time

print("time.altzone = %d" % time.altzone)
```
**以上实例可能的输出结果（取决于你的系统时区和是否启用夏令时）：**
例如，在**中国标准时间 (CST，UTC+8，不使用夏令时)** 的系统上，`altzone` 的值通常为 `0` 或者一个与 `time.timezone` 相同的值，因为中国不实行夏令时。
在**美国太平洋夏令时 (PDT，UTC-7)** 的系统上，可能输出：`time.altzone = -25200` (因为 -25200 秒 = -7 小时)。
在**英国夏令时 (BST，UTC+1)** 的系统上，可能输出：`time.altzone = -3600` (因为 -3600 秒 = -1 小时)。

**注意：**
*   `time.altzone` 与 `time.timezone` 的区别：
    *   `time.timezone` 返回的是**标准时间**（非夏令时）下，本地时间与 UTC 的偏移秒数（西为正，东为负）。
    *   `time.altzone` 返回的是**夏令时**下，本地时间与 UTC 的偏移秒数（西为正，东为负）。
*   如果你的系统所在地区不实行夏令时，`time.altzone` 的值可能与 `time.timezone` 相同，或者为 0（具体取决于 Python 实现和系统）。
</details>

### 2. `time.asctime([tupletime])` - 转换时间元组为可读字符串

<details>
<summary><b>点击查看：Python time asctime()方法</b></summary>

**描述**
Python `time.asctime()` 函数用于**接受一个时间元组（struct_time 对象或 9 元素元组），并将其转换为一个人类可读的字符串**。字符串格式为：`"Sun Jun 20 23:21:05 1993"`。

**语法**
`asctime()` 方法语法：
```python
time.asctime([tupletime])
```

**参数**
*   `tupletime` (可选) -- 一个包含 9 个元素的元组或一个 `time.struct_time` 对象，代表一个时间。如果未提供此参数，函数将使用 `time.localtime()` 获取当前的本地时间元组。

**返回值**
*   返回一个 24 个字符的字符串，表示转换后的时间。

**实例**
以下实例展示了 `asctime()` 函数的使用方法：

**实例 1：不提供参数，使用当前本地时间**
```python
import time

# 获取当前时间并转换为可读字符串
current_time_str = time.asctime()
print("当前时间 (asctime):", current_time_str)
# 输出可能为：当前时间 (asctime): Wed Jun 12 10:15:30 2024
```

**实例 2：提供一个时间元组**
```python
import time

# 创建一个时间元组 (年, 月, 日, 时, 分, 秒, 星期几(0=周一, ..., 6=周日), 一年中的第几天, 夏令时标志)
# 注意：星期几和一年中的第几天会被 asctime() 忽略，它会根据日期计算
time_tuple = (2023, 12, 25, 8, 30, 0, 0, 0, 0)  # 2023年12月25日 8:30:00
time_str = time.asctime(time_tuple)
print("指定时间 (asctime):", time_str)
# 输出：指定时间 (asctime): Mon Dec 25 08:30:00 2023
```

**实例 3：与 `gmtime()` 结合使用（UTC 时间）**
```python
import time

# 获取当前 UTC 时间元组，然后转换为字符串
utc_time_str = time.asctime(time.gmtime())
print("当前 UTC 时间 (asctime):", utc_time_str)
```
</details>

### 3. `time.clock()` - 测量 CPU 时间 (Python 3.3+ 已废弃)

<details>
<summary><b>点击查看：Python time clock()方法 (已废弃)</b></summary>

**描述**
**注意：`time.clock()` 函数在 Python 3.3 版本中已被废弃，并在 Python 3.8 版本中被移除**。它原本用于返回当前进程的 CPU 时间（以秒为单位的浮点数），常用于衡量不同程序或代码段的执行耗时。

在 Python 3.3+ 中，推荐使用 `time.perf_counter()` (用于测量短持续时间的性能计数器，包含睡眠耗时) 或 `time.process_time()` (用于测量当前进程的系统和用户 CPU 时间总和，不包含睡眠耗时) 来替代。

**语法 (仅作历史参考)**
```python
time.clock()
```

**参数**
*   NA（无参数）。

**返回值 (仅作历史参考)**
*   返回一个浮点数，表示当前进程的 CPU 时间（秒）。

**实例 (仅作历史参考，请勿在 Python 3.8+ 中使用)**
```python
import time

start = time.clock()
# 模拟一些耗时操作
for i in range(1000000):
    pass
end = time.clock()
print("这段代码的 CPU 耗时为: %f 秒" % (end - start))
```

**替代方案：**
*   **`time.perf_counter()`**: 推荐用于测量短时间间隔，提供最高分辨率的计时器。
    ```python
    import time

    start = time.perf_counter()
    # 模拟一些耗时操作
    time.sleep(1)  # 睡眠 1 秒，会被 perf_counter 计入
    for i in range(1000000):
        pass
    end = time.perf_counter()
    print("这段代码的耗时（包括睡眠）为: %f 秒" % (end - start))  # 大约 1.xxxx 秒
    ```

*   **`time.process_time()`**: 仅测量 CPU 实际运行时间，不包括睡眠或等待时间。
    ```python
    import time

    start = time.process_time()
    # 模拟一些耗时操作
    time.sleep(1)  # 睡眠 1 秒，不会被 process_time 计入
    for i in range(1000000):
        pass
    end = time.process_time()
    print("这段代码的 CPU 耗时（不包括睡眠）为: %f 秒" % (end - start))  # 远小于 1 秒
    ```

**总结：** 请使用 `time.perf_counter()` 或 `time.process_time()` 代替已废弃的 `time.clock()`。
</details>

### 4. `time.ctime([secs])` - 转换时间戳为本地时间字符串

<details>
<summary><b>点击查看：Python time ctime()方法</b></summary>

**描述**
Python `time.ctime()` 函数用于**将一个时间戳（自 epoch 以来的秒数）转换为一个本地时间的可读字符串**。其作用相当于 `time.asctime(time.localtime(secs))`。如果未提供 `secs` 参数，则默认使用当前时间戳 `time.time()`。

**语法**
`ctime()` 方法语法：
```python
time.ctime([secs])
```

**参数**
*   `secs` (可选) -- 一个浮点数，表示自 epoch（1970年1月1日 00:00:00 UTC）以来的秒数。如果未提供，则使用当前时间 `time.time()`。

**返回值**
*   返回一个 24 个字符的字符串，表示本地时间，格式与 `asctime()` 相同：`"Sun Jun 20 23:21:05 1993"`。

**实例**
以下实例展示了 `ctime()` 函数的使用方法：

**实例 1：不提供参数，使用当前时间戳**
```python
import time

current_time_str = time.ctime()
print("当前本地时间 (ctime):", current_time_str)
# 输出可能为：当前本地时间 (ctime): Wed Jun 12 10:30:45 2024
```

**实例 2：提供一个特定的时间戳**
```python
import time

# 一个特定的时间戳 (例如：2023年1月1日 00:00:00 UTC 的时间戳)
timestamp = 1672531200
time_str = time.ctime(timestamp)
print("时间戳 %d 对应的本地时间为:" % timestamp, time_str)
# 输出取决于你的本地时区。例如，在中国时区 (UTC+8)，会输出类似：
# 时间戳 1672531200 对应的本地时间为: Sun Jan  1 08:00:00 2023
```

**实例 3：与 `time.time()` 结合，获取当前时间**
```python
import time

current_timestamp = time.time()
current_time_str = time.ctime(current_timestamp)
print("当前时间戳:", current_timestamp)
print("当前本地时间 (ctime):", current_time_str)
```

**`time.ctime(secs)` 等效于 `time.asctime(time.localtime(secs))`：**
```python
import time

secs = 1672531200
print(time.ctime(secs))
print(time.asctime(time.localtime(secs)))  # 两者输出相同
```
</details>



### 5. `time.gmtime([secs])` - 获取 UTC 时间元组

<details>
<summary><b>点击查看：Python time gmtime()方法</b></summary>

**描述**
Python `time.gmtime()` 函数用于**将一个时间戳（自 1970 年 1 月 1 日 00:00:00 UTC 纪元以来经过的浮点秒数）转换为格林威治标准时间 (GMT/UTC) 下的时间元组 `struct_time`**。这个时间元组中的 `tm_isdst` 字段始终为 0，因为 UTC 不实行夏令时。

**语法**
`gmtime()` 方法语法：
```python
time.gmtime([secs])
```

**参数**
*   `secs` (可选) -- 一个浮点数，表示自 1970 纪元以来的秒数。如果未提供 `secs` 或为 `None`，则使用当前时间戳 `time.time()`。

**返回值**
*   返回一个 `struct_time` 对象（一种命名元组），包含 9 个元素：`tm_year`, `tm_mon`, `tm_mday`, `tm_hour`, `tm_min`, `tm_sec`, `tm_wday`, `tm_yday`, `tm_isdst`。

**`struct_time` 对象的字段说明：**
| 索引 | 属性名     | 描述                                         | 取值范围                     |
| :--- | :--------- | :------------------------------------------- | :--------------------------- |
| 0    | tm_year    | 年份                                         | 例如：2024                   |
| 1    | tm_mon     | 月份                                         | 1-12                         |
| 2    | tm_mday    | 日                                           | 1-31                         |
| 3    | tm_hour    | 小时                                         | 0-23                         |
| 4    | tm_min     | 分钟                                         | 0-59                         |
| 5    | tm_sec     | 秒                                           | 0-61 (60/61 是闰秒)          |
| 6    | tm_wday    | 星期几 (0=星期一, ..., 6=星期日)              | 0-6                          |
| 7    | tm_yday    | 一年中的第几天                               | 1-366                        |
| 8    | tm_isdst   | 是否为夏令时 (1=是, 0=否, -1=未知)           | -1, 0, 1                     |

**实例**
以下实例展示了 `gmtime()` 函数的使用方法：

**实例 1：不提供参数，获取当前 UTC 时间元组**
```python
import time

utc_time = time.gmtime()
print("当前 UTC 时间元组:", utc_time)
print("当前 UTC 年份:", utc_time.tm_year)
print("当前 UTC 小时:", utc_time.tm_hour)
print("tm_isdst (UTC 始终为 0):", utc_time.tm_isdst)
```
**运行结果（示例）：**
```
当前 UTC 时间元组: time.struct_time(tm_year=2024, tm_mon=6, tm_mday=12, tm_hour=6, tm_min=30, tm_sec=45, tm_wday=2, tm_yday=164, tm_isdst=0)
当前 UTC 年份: 2024
当前 UTC 小时: 6
tm_isdst (UTC 始终为 0): 0
```

**实例 2：提供特定时间戳（例如 epoch 时间 0）**
```python
import time

epoch_time = 0  # 1970-01-01 00:00:00 UTC
epoch_struct_time = time.gmtime(epoch_time)
print("Epoch 时间 (UTC) 的 struct_time:", epoch_struct_time)
print("格式化输出 Epoch UTC 时间: %d-%02d-%02d %02d:%02d:%02d" % (
    epoch_struct_time.tm_year, epoch_struct_time.tm_mon, epoch_struct_time.tm_mday,
    epoch_struct_time.tm_hour, epoch_struct_time.tm_min, epoch_struct_time.tm_sec))
```
**运行结果：**
```
Epoch 时间 (UTC) 的 struct_time: time.struct_time(tm_year=1970, tm_mon=1, tm_mday=1, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=3, tm_yday=1, tm_isdst=0)
格式化输出 Epoch UTC 时间: 1970-01-01 00:00:00
```
</details>

### 6. `time.localtime([secs])` - 获取本地时间元组

<details>
<summary><b>点击查看：Python time localtime()方法</b></summary>

**描述**
Python `time.localtime()` 函数用于**将一个时间戳（自 1970 年 1 月 1 日 00:00:00 UTC 纪元以来经过的浮点秒数）转换为当地时间（系统设置的时区）下的时间元组 `struct_time`**。这个时间元组中的 `tm_isdst` 字段会根据当地是否处于夏令时而取值 0（不是）或 1（是），或者 -1（未知，通常不会）。

**语法**
`localtime()` 方法语法：
```python
time.localtime([secs])
```

**参数**
*   `secs` (可选) -- 一个浮点数，表示自 1970 纪元以来的秒数。如果未提供 `secs` 或为 `None`，则使用当前时间戳 `time.time()`。

**返回值**
*   返回一个 `struct_time` 对象（一种命名元组），包含的字段与 `gmtime()` 返回的相同，具体含义参见 `gmtime()` 的说明。其中 `tm_isdst` 可取 0 或 1，取决于当地当时是否是夏令时。

**实例**
以下实例展示了 `localtime()` 函数的使用方法：

**实例 1：不提供参数，获取当前本地时间元组**
```python
import time

local_time = time.localtime()
print("当前本地时间元组:", local_time)
print("当前本地年份:", local_time.tm_year)
print("当前本地小时:", local_time.tm_hour)
print("tm_isdst (是否夏令时):", local_time.tm_isdst)  # 0 表示不是，1 表示是
```
**运行结果（示例，假设在中国时区，非夏令时）：**
```
当前本地时间元组: time.struct_time(tm_year=2024, tm_mon=6, tm_mday=12, tm_hour=14, tm_min=45, tm_sec=30, tm_wday=2, tm_yday=164, tm_isdst=0)
当前本地年份: 2024
当前本地小时: 14
tm_isdst (是否夏令时): 0
```

**实例 2：提供特定时间戳（例如 epoch 时间 0）**
```python
import time

epoch_time = 0  # 1970-01-01 00:00:00 UTC
local_epoch_struct_time = time.localtime(epoch_time)
print("Epoch 时间 (本地时间) 的 struct_time:", local_epoch_struct_time)
print("格式化输出 Epoch 本地时间: %d-%02d-%02d %02d:%02d:%02d" % (
    local_epoch_struct_time.tm_year, local_epoch_struct_time.tm_mon, local_epoch_struct_time.tm_mday,
    local_epoch_struct_time.tm_hour, local_epoch_struct_time.tm_min, local_epoch_struct_time.tm_sec))
```
**运行结果（例如，在中国时区 UTC+8）：**
```
Epoch 时间 (本地时间) 的 struct_time: time.struct_time(tm_year=1970, tm_mon=1, tm_mday=1, tm_hour=8, tm_min=0, tm_sec=0, tm_wday=3, tm_yday=1, tm_isdst=0)
格式化输出 Epoch 本地时间: 1970-01-01 08:00:00
```
（因为 UTC 时间 0 点，对应中国 UTC+8 时间是早上 8 点）
</details>

### 7. `time.mktime(tupletime)` - 将时间元组转换为时间戳

<details>
<summary><b>点击查看：Python time mktime()方法</b></summary>

**描述**
Python `time.mktime()` 函数用于**接受一个表示本地时间的时间元组 `struct_time`（或 9 个元素的元组），并将其转换为自 1970 年 1 月 1 日 00:00:00 UTC 纪元以来经过的浮点秒数（时间戳）**。它可以看作是 `time.localtime()` 的逆函数。

**语法**
`mktime()` 方法语法：
```python
time.mktime(tupletime)
```

**参数**
*   `tupletime` -- 一个 `struct_time` 对象或者一个包含 9 个整数元素的元组，其结构必须与 `localtime()` 返回的一致：`(tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec, tm_wday, tm_yday, tm_isdst)`。其中 `tm_wday` 和 `tm_yday` 会被忽略，因为可以从其他字段计算得出。

**返回值**
*   返回一个浮点数，表示自 1970 纪元以来的秒数（时间戳）。

**实例**
以下实例展示了 `mktime()` 函数的使用方法：

**实例 1：将 `localtime()` 返回的时间元组转换回时间戳**
```python
import time

# 获取当前本地时间元组
local_time = time.localtime()
print("当前本地时间元组:", local_time)

# 将时间元组转换为时间戳
timestamp = time.mktime(local_time)
print("转换回的时间戳:", timestamp)
print("与当前时间戳对比:", time.time())  # 应该非常接近或相同
```
**运行结果（示例）：**
```
当前本地时间元组: time.struct_time(tm_year=2024, tm_mon=6, tm_mday=12, tm_hour=15, tm_min=5, tm_sec=20, tm_wday=2, tm_yday=164, tm_isdst=0)
转换回的时间戳: 1718163920.0
与当前时间戳对比: 1718163920.123456
```

**实例 2：将自定义的本地时间元组转换为时间戳**
```python
import time

# 定义一个本地时间元组 (年, 月, 日, 时, 分, 秒, 星期几(忽略), 一年中第几天(忽略), 是否夏令时)
# 例如：2023年10月1日 10:30:00，非夏令时
local_tuple = (2023, 10, 1, 10, 30, 0, 6, 274, 0)  # tm_wday=6 (周日), tm_yday=274 (10月1日)
timestamp = time.mktime(local_tuple)
print("2023-10-01 10:30:00 的时间戳为:", timestamp)

# 验证：将时间戳转换回本地时间
print("验证转换:", time.localtime(timestamp))
```
**运行结果（示例）：**
```
2023-10-01 10:30:00 的时间戳为: 1696108200.0
验证转换: time.struct_time(tm_year=2023, tm_mon=10, tm_mday=1, tm_hour=10, tm_min=30, tm_sec=0, tm_wday=6, tm_yday=274, tm_isdst=0)
```

**一篇笔记：`mktime()` 与时区**

`mktime()` **输入的时间元组被解释为本地时间（带时区信息）**，它会将这个本地时间转换为对应的 UTC 时间戳（不带时区，是一个绝对值）。

**示例：**
```python
import time

# 在中国时区 (UTC+8)，本地时间 1970-01-01 08:00:00 对应 UTC 时间 1970-01-01 00:00:00
a = (1970, 1, 1, 8, 0, 0, 3, 1, 0)  # tm_isdst=0 (非夏令时)
print(time.mktime(a))  # 输出：0.0  (正确，对应 epoch 时间)

# time.gmtime(0) 返回的是 UTC 时间 1970-01-01 00:00:00 的 struct_time
print(time.gmtime(0))
# 输出：time.struct_time(tm_year=1970, tm_mon=1, tm_mday=1, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=3, tm_yday=1, tm_isdst=0)

# 如果直接将 gmtime(0) 的结果（UTC时间）作为 mktime 的输入，mktime 会把它当成本地时间。
# 在中国时区 (UTC+8)，这相当于本地时间 1970-01-01 00:00:00，对应的 UTC 时间是 1969-12-31 16:00:00，时间戳为 -28800.0 秒
b = time.gmtime(0)
print(time.mktime(b))  # 在中国时区输出：-28800.0 (因为 00:00:00 UTC+8 比 00:00:00 UTC 早 8 小时，即 8*3600=28800 秒)
```

**结论：**
*   `time.mktime(tupletime)` 中的 `tupletime` 必须是**本地时间**的表示。
*   如果有一个 UTC 时间的 `struct_time`（如 `gmtime()` 返回的），想将其转换为时间戳，应该先用 `calendar.timegm(utc_tuple)` (需要导入 `calendar` 模块)，而不是 `time.mktime()`。
    ```python
    import time
    import calendar

    utc_tuple = time.gmtime(0)  # UTC 时间元组
    timestamp = calendar.timegm(utc_tuple)
    print(timestamp)  # 输出：0.0 (正确)
    ```
</details>

### 8. `time.sleep(secs)` - 程序休眠

<details>
<summary><b>点击查看：Python time sleep()方法</b></summary>

**描述**
Python `time.sleep()` 函数用于**暂停当前线程的执行，使其休眠指定的秒数**。这对于需要程序等待一段时间后再继续执行的场景非常有用。

**语法**
`sleep()` 方法语法：
```python
time.sleep(secs)
```

**参数**
*   `secs` -- 一个浮点数，表示要休眠的秒数。可以是小数，例如 `0.5` 表示休眠 500 毫秒。

**返回值**
*   该函数没有返回值（返回 `None`）。

**实例**
以下实例展示了 `sleep()` 函数的使用方法：

**实例 1：基本休眠**
```python
import time

print("程序开始执行...")

# 休眠 2 秒
print("将休眠 2 秒...")
time.sleep(2)

print("休眠结束，程序继续执行！")
```
**运行结果：**
```
程序开始执行...
将休眠 2 秒...
(此处暂停 2 秒)
休眠结束，程序继续执行！
```

**实例 2：休眠小数秒**
```python
import time

start = time.perf_counter()

# 休眠 1.5 秒
time.sleep(1.5)

end = time.perf_counter()
print(f"实际休眠时间: {end - start:.4f} 秒")  # 应该接近 1.5 秒
```
**运行结果（示例）：**
```
实际休眠时间: 1.5012 秒
```

**注意：**
*   `sleep()` 的精度可能受到系统计时器和调度程序的影响，实际休眠时间可能会比请求的时间稍长一些。
*   在休眠期间，线程不会消耗 CPU 时间（或者说消耗很少）。
*   `sleep(0)` 会导致线程放弃当前的时间
</details>


### 9. `time.strftime(fmt[, tupletime])` - 格式化时间元组为字符串

<details>
<summary><b>点击查看：Python time strftime()方法</b></summary>

**描述**
Python `time.strftime()` 函数用于**接收一个时间元组（`struct_time` 对象或 9 元素元组），并根据指定的格式字符串 `fmt`，将其转换为一个可读性强的字符串表示**。如果未提供 `tupletime` 参数，则默认使用当前的本地时间 `time.localtime()`。

**语法**
`strftime()` 方法语法：
```python
time.strftime(fmt[, tupletime])
```

**参数**
*   `fmt` -- 格式字符串，由各种格式化指令组成，用于指定输出字符串的格式。
*   `tupletime` (可选) -- 一个 `struct_time` 对象或者一个 9 元素的时间元组。如果不提供，则使用 `time.localtime()` 的结果。

**常用格式化指令（`fmt` 中可用）：**

| 指令 | 描述                                   | 示例     |
| :--- | :------------------------------------- | :------- |
| `%Y` | 四位数的年份                           | 2024     |
| `%y` | 两位数的年份（00-99）                   | 24       |
| `%m` | 两位数的月份（01-12）                   | 06       |
| `%d` | 两位数的日（01-31）                     | 12       |
| `%H` | 24小时制的小时（00-23）                 | 14       |
| `%I` | 12小时制的小时（01-12）                 | 02       |
| `%M` | 两位数的分钟（00-59）                   | 30       |
| `%S` | 两位数的秒（00-59）                     | 45       |
| `%a` | 本地简化星期名称                       | Wed      |
| `%A` | 本地完整星期名称                       | Wednesday|
| `%b` | 本地简化月份名称                       | Jun      |
| `%B` | 本地完整月份名称                       | June     |
| `%p` | 本地 AM 或 PM 的等价符                 | PM       |
| `%j` | 一年中的第几天（001-366）               | 164      |
| `%U` | 一年中的第几周（00-53），以周日为一周的第一天 | 24       |
| `%W` | 一年中的第几周（00-53），以周一为一周的第一天 | 24       |
| `%c` | 本地相应的日期和时间表示               | Wed Jun 12 14:30:45 2024 |
| `%x` | 本地相应的日期表示                     | 06/12/24 |
| `%X` | 本地相应的时间表示                     | 14:30:45 |
| `%%` | 百分号本身                             | %        |

**返回值**
*   返回一个字符串，它是根据 `fmt` 格式字符串和 `tupletime` 时间元组生成的。

**实例**
以下实例展示了 `strftime()` 函数的使用方法：

**实例 1：使用当前本地时间，格式化输出各种日期时间字符串**
```python
import time

# 获取当前本地时间元组
local_time = time.localtime()

# 格式化输出：年-月-日 时:分:秒
print(time.strftime("%Y-%m-%d %H:%M:%S", local_time))  # 输出：2024-06-12 14:30:45

# 格式化输出：月/日/年 上/下午 时:分
print(time.strftime("%m/%d/%y %p %I:%M", local_time))  # 输出：06/12/24 PM 02:30

# 格式化输出：完整的星期几，完整的月份，日，年
print(time.strftime("%A, %B %d, %Y", local_time))  # 输出：Wednesday, June 12, 2024

# 不提供 tupletime，默认使用当前本地时间
print(time.strftime("今天是今年的第 %j 天"))  # 输出：今天是今年的第 164 天
```

**实例 2：格式化一个指定的时间元组**
```python
import time

# 定义一个时间元组 (2023年10月1日 10:15:30)
custom_time = (2023, 10, 1, 10, 15, 30, 6, 274, 0)  # tm_wday=6 (周日), tm_yday=274, tm_isdst=0

# 格式化输出
print(time.strftime("自定义时间: %Y年%m月%d日 %H时%M分%S秒", custom_time))
# 输出：自定义时间: 2023年10月01日 10时15分30秒
```
</details>

### 10. `time.strptime(str, fmt='%a %b %d %H:%M:%S %Y')` - 解析字符串为时间元组

<details>
<summary><b>点击查看：Python time strptime()方法</b></summary>

**描述**
Python `time.strptime()` 函数用于**根据指定的格式字符串 `fmt`，解析一个时间字符串 `str`，并返回对应的时间元组 `struct_time`**。它是 `time.strftime()` 的逆操作。

**语法**
`strptime()` 方法语法：
```python
time.strptime(str, fmt='%a %b %d %H:%M:%S %Y')
```

**参数**
*   `str` -- 要解析的时间字符串。
*   `fmt` (可选) -- 格式化字符串，用于指定 `str` 的格式。如果未提供，默认格式为 `'%a %b %d %H:%M:%S %Y'`（例如：`'Wed Jun 12 14:30:45 2024'`）。

**返回值**
*   返回一个 `struct_time` 对象。

**常用格式化指令（与 `strftime()` 中的指令对应）：**
同 `strftime()`，例如 `%Y`, `%m`, `%d`, `%H`, `%M`, `%S` 等。

**实例**
以下实例展示了 `strptime()` 函数的使用方法：

**实例 1：使用默认格式解析字符串**
```python
import time

time_str = "Wed Jun 12 14:30:45 2024"
# 使用默认 fmt='%a %b %d %H:%M:%S %Y' 解析
struct_time = time.strptime(time_str)
print("解析结果 struct_time:", struct_time)
print("年份:", struct_time.tm_year)  # 输出：2024
```
**运行结果：**
```
解析结果 struct_time: time.struct_time(tm_year=2024, tm_mon=6, tm_mday=12, tm_hour=14, tm_min=30, tm_sec=45, tm_wday=2, tm_yday=164, tm_isdst=-1)
年份: 2024
```

**实例 2：使用自定义格式解析字符串**
```python
import time

# 日期字符串和对应的格式
date_str1 = "2024-06-12"
fmt1 = "%Y-%m-%d"
struct_time1 = time.strptime(date_str1, fmt1)
print(f"解析 '{date_str1}' 结果:", struct_time1)
print(f"年: {struct_time1.tm_year}, 月: {struct_time1.tm_mon}, 日: {struct_time1.tm_mday}")

date_str2 = "06/12/24 02:30:45 PM"
fmt2 = "%m/%d/%y %I:%M:%S %p"
struct_time2 = time.strptime(date_str2, fmt2)
print(f"\n解析 '{date_str2}' 结果:", struct_time2)
print(f"小时: {struct_time2.tm_hour} (24小时制)")  # 注意 %p 会影响 %I 的解析，转为 24小时制
```
**运行结果：**
```
解析 '2024-06-12' 结果: time.struct_time(tm_year=2024, tm_mon=6, tm_mday=12, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=2, tm_yday=164, tm_isdst=-1)
年: 2024, 月: 6, 日: 12

解析 '06/12/24 02:30:45 PM' 结果: time.struct_time(tm_year=2024, tm_mon=6, tm_mday=12, tm_hour=14, tm_min=30, tm_sec=45, tm_wday=2, tm_yday=164, tm_isdst=-1)
小时: 14 (24小时制)
```

**注意：**
*   `str` 和 `fmt` 的格式必须严格匹配，否则会抛出 `ValueError`。
*   如果解析的字符串中没有包含足够的信息（如只给了日期没有时间），则时间部分会被设为 0。
*   `tm_isdst` 字段在 `strptime()` 解析时通常被设为 `-1`（表示未知），除非 `fmt` 中包含了相关信息（但通常不直接提供）。
</details>

### 11. `time.time()` - 获取当前时间戳

<details>
<summary><b>点击查看：Python time time()方法</b></summary>

**描述**
Python `time.time()` 函数用于**返回当前时间的时间戳，即自 1970 年 1 月 1 日 00:00:00 UTC 纪元以来经过的浮点秒数**。这个时间戳是一个不带时区信息的绝对值，是很多时间函数的基础。

**语法**
`time()` 方法语法：
```python
time.time()
```

**参数**
*   NA（无参数）。

**返回值**
*   返回一个浮点数，表示自 1970 纪元以来的秒数，小数部分表示微秒（精度取决于系统）。

**实例**
以下实例展示了 `time()` 函数的使用方法：

**实例 1：获取当前时间戳**
```python
import time

current_timestamp = time.time()
print("当前时间戳:", current_timestamp)
# 输出示例：当前时间戳: 1718170234.567890
```

**实例 2：计算代码执行时间（使用 `time()`）**
```python
import time

start_time = time.time()

# 模拟一段耗时操作
total = 0
for i in range(1, 1000000):
    total += i

end_time = time.time()

elapsed_time = end_time - start_time
print(f"这段代码执行了 {elapsed_time:.6f} 秒")
print(f"计算结果: {total}")
```
**运行结果（示例）：**
```
这段代码执行了 0.054321 秒
计算结果: 499999500000
```

**实例 3：将时间戳转换为本地时间和 UTC 时间**
```python
import time

timestamp = time.time()
print("当前时间戳:", timestamp)

local_time = time.localtime(timestamp)
print("本地时间:", time.strftime("%Y-%m-%d %H:%M:%S", local_time))

utc_time = time.gmtime(timestamp)
print("UTC 时间:", time.strftime("%Y-%m-%d %H:%M:%S", utc_time))
```
**运行结果（示例，假设在中国时区 UTC+8）：**
```
当前时间戳: 1718170500.123456
本地时间: 2024-06-12 16:15:00
UTC 时间: 2024-06-12 08:15:00
```
</details>

### 12. `time.tzset()` - 根据环境变量 TZ 重新初始化时间设置

<details>
<summary><b>点击查看：Python time tzset()方法</b></summary>

**描述**
Python `time.tzset()` 函数用于**根据环境变量 `TZ` 的值重新初始化 Python 的时间相关设置**。这个函数主要用于 Unix/Linux 系统，Windows 系统对此函数的支持有限或不支持。

环境变量 `TZ` 的设置会影响 `time.localtime()`, `time.strftime()`, `time.mktime()` 等函数的行为，特别是涉及本地时间和时区转换的部分。

**语法**
`tzset()` 方法语法：
```python
time.tzset()
```

**参数**
*   NA（无参数）。但它依赖于环境变量 `TZ` 的设置。

**环境变量 `TZ` 的格式（Unix 系统）：**
通常格式为：`'EST5EDT4,M3.2.0/2:00:00,M11.1.0/2:00:00'`
其中包含时区名称、与 UTC 的偏移、夏令时开始和结束规则等。更简单的格式可以直接指定时区名称（如果系统支持），如 `'UTC'`, `'Asia/Shanghai'`, `'America/New_York'`。

**返回值**
*   该函数没有返回值（返回 `None`）。

**实例（Unix/Linux 系统）**
```python
import time
import os

# 保存原始 TZ 环境变量，以便之后恢复
original_tz = os.environ.get('TZ')

# 1. 设置 TZ 为 UTC
os.environ['TZ'] = 'UTC'
time.tzset()  # 应用新的 TZ 设置
print("设置 TZ=UTC 后:")
print("本地时间 (应与 UTC 相同):", time.strftime("%Y-%m-%d %H:%M:%S"))
print("time.timezone (UTC 无偏移):", time.timezone)  # 输出：0
print("time.altzone (UTC 无夏令时):", time.altzone)    # 输出：0

# 2. 设置 TZ 为 Asia/Shanghai (中国标准时间，UTC+8)
os.environ['TZ'] = 'Asia/Shanghai'
time.tzset()
print("\n设置 TZ=Asia/Shanghai 后:")
print("本地时间 (中国时间):", time.strftime("%Y-%m-%d %H:%M:%S"))
print("time.timezone (UTC+8 表示为 -28800 秒):", time.timezone)  # 输出：-28800 (因为 timezone 是西为正，东为负)

# 3. 恢复原始 TZ 设置
if original_tz is not None:
    os.environ['TZ'] = original_tz
else:
    del os.environ['TZ']
time.tzset()
print("\n恢复原始 TZ 后:")
print("本地时间 (系统默认):", time.strftime("%Y-%m-%d %H:%M:%S"))
```

**注意：**
*   **Windows 兼容性：** `time.tzset()` 在 Windows 系统上通常不可用或效果有限。Python 文档指出此函数主要用于 Unix。
*   **权限：** 修改环境变量可能需要相应的权限。
*   **谨慎使用：** 动态修改 `TZ` 环境变量和调用 `tzset()` 可能会影响程序中其他依赖于本地时间的部分，使用时需谨慎。对于需要处理多个时区的复杂应用，推荐使用 `pytz` 库或 Python 3.9+ 引入的标准库 `zoneinfo`。
</details>

---



##  `time` 模块的时区属性

除了我们前面学过的获取时间戳和时间元组的函数外，`time` 模块还提供了一些有用的**属性 (Attribute)**，帮助我们了解当前系统的时区设置。

###  `time.timezone`

`time.timezone` 是一个**整数属性**，它表示：

**当地时区（在未启用夏令时的情况下）与格林威治标准时间 (GMT，也就是 UTC) 的**偏移秒数**。**

*   如果这个值是 **正数**，表示当地时间比 UTC 时间**晚**（比如美洲的一些时区）。
*   如果这个值是 **负数**，表示当地时间比 UTC 时间**早**（比如大部分欧洲、亚洲、非洲国家和地区）。
*   单位是**秒**。

**例如**：
*   中国标准时间 (CST，UTC+8)，在不考虑夏令时的情况下（中国大部分地区不实行夏令时），`time.timezone` 的值就是 `-28800` 秒。因为 8小时 = 8 * 3600秒 = 28800秒，早于 UTC，所以是负数。

###  `time.tzname`

`time.tzname` 是一个**元组属性**，它包含两个字符串元素，分别表示：

*   **第一个元素**：**不带夏令时**的本地时区名称。
*   **第二个元素**：**带夏令时**的本地时区名称（如果当地实行夏令时的话）。

具体的名称会根据你的操作系统设置和当前是否处于夏令时而有所不同。

**例如**：
*   在中国（不实行夏令时的地区），`time.tzname` 通常可能是 `('CST', 'CST')` 或者 `('Asia/Shanghai', 'Asia/Shanghai')` 等，具体取决于系统配置。
*   在实行夏令时的地区，比如美国纽约，非夏令时可能是 `'EST'` (Eastern Standard Time)，夏令时可能是 `'EDT'` (Eastern Daylight Time)，所以 `time.tzname` 可能是 `('EST', 'EDT')`。

**实例：查看你的时区属性**

```python
import time

print("本地时区与UTC的偏移秒数 (未启用夏令时):", time.timezone)
print("本地时区名称 (不带夏令时) 和 (带夏令时):", time.tzname)
```

**你可能会看到的输出** (以中国上海为例，假设系统时区设置正确)：
```
本地时区与UTC的偏移秒数 (未启用夏令时): -28800
本地时区名称 (不带夏令时) 和 (带夏令时): ('CST', 'CST')
```
或者
```
本地时区与UTC的偏移秒数 (未启用夏令时): -28800
本地时区名称 (不带夏令时) 和 (带夏令时): ('Asia/Shanghai', 'Asia/Shanghai')
```

**解释**：
*   `-28800` 秒 = -8 * 3600 秒，即 UTC+8。
*   `('CST', 'CST')` 表示中国标准时间，因为中国不使用夏令时，所以两个名称一样。`CST` 可以代表 China Standard Time。

这些时区属性对于理解本地时间和 UTC 时间之间的转换非常有帮助，也能让我们的程序在处理时间时更加灵活和准确。

---


## Python `calendar` 模块

`calendar` 模块提供了与日历相关的各种功能，例如生成年度日历、月度日历，判断闰年等。

默认情况下：
*   **星期一**是每周的第一天。
*   **星期天**是每周的最后一天。
*   可以通过调用 `calendar.setfirstweekday()` 函数来更改每周的起始日期。

### `calendar` 模块内置函数

1.  **`calendar.calendar(year, w=2, l=1, c=6)`**
    *   **描述**：返回一个多行字符串格式的 `year` 年的年历。
    *   **参数**：
        *   `year`：要生成日历的年份。
        *   `w` (可选)：每日宽度间隔（字符数），默认值为 2。
        *   `l` (可选)：每星期的行数，默认值为 1。
        *   `c` (可选)：每月之间的间隔距离（字符数），默认值为 6。
    *   **返回值**：一个多行字符串，表示指定年份的年历，3 个月一行。

2.  **`calendar.firstweekday()`**
    *   **描述**：返回当前设置的每周起始日期。
    *   **返回值**：一个整数。默认情况下，首次载入 `calendar` 模块时返回 `0`，即表示星期一（`0`=星期一，`1`=星期二, ..., `6`=星期日）。

3.  **`calendar.isleap(year)`**
    *   **描述**：判断给定的年份 `year` 是否为闰年。
    *   **参数**：`year`：要检查的年份。
    *   **返回值**：如果是闰年则返回 `True`，否则返回 `False`。
    *   **实例**：
        ```python
        import calendar
        print(calendar.isleap(2000))  # 输出：True
        print(calendar.isleap(1900))  # 输出：False
        ```

4.  **`calendar.leapdays(y1, y2)`**
    *   **描述**：返回在年份 `y1` 和 `y2`（不包含 `y2`）之间的闰年总数。
    *   **参数**：
        *   `y1`：起始年份（包含）。
        *   `y2`：结束年份（不包含）。
    *   **返回值**：一个整数，表示 `[y1, y2)` 区间内的闰年个数。



5.  **`calendar.month(year, month, w=2, l=1)`**
    *   **描述**：返回一个多行字符串格式的 `year` 年 `month` 月的月历。
    *   **参数**：
        *   `year`：年份。
        *   `month`：月份（1-12）。
        *   `w` (可选)：每日宽度间隔（字符数），默认值为 2。
        *   `l` (可选)：每星期的行数，默认值为 1。
    *   **返回值**：一个多行字符串，表示指定年月的月历，包含两行标题（月份年份和星期几缩写），一周一行。每行的长度为 `7 * w + 6`。

6.  **`calendar.monthcalendar(year, month)`**
    *   **描述**：返回一个整数的单层嵌套列表（列表的列表）。
    *   **参数**：
        *   `year`：年份。
        *   `month`：月份（1-12）。
    *   **返回值**：每个子列表装载代表一个星期的整数。`year` 年 `month` 月之外的日期都设为 `0`；范围内的日子都由该月第几日表示，从 `1` 开始。

7.  **`calendar.monthrange(year, month)`**
    *   **描述**：返回两个整数组成的元组。
    *   **参数**：
        *   `year`：年份。
        *   `month`：月份（1-12）。
    *   **返回值**：
        *   第一个整数是该月的**第一天是星期几的日期码**（`0` 表示星期一，`1` 表示星期二，...，`6` 表示星期日）。
        *   第二个整数是该月的**天数**（`28` 到 `31` 之间）。

8.  **`calendar.prcal(year, w=2, l=1, c=6)`**
    *   **描述**：相当于 `print(calendar.calendar(year, w=2, l=1, c=6))`。即打印 `year` 年的年历。
    *   **参数**：与 `calendar.calendar()` 相同。
    *   **返回值**：`None`（直接打印输出）。


9.  **`calendar.prmonth(year, month, w=2, l=1)`**
    *   **描述**：相当于 `print(calendar.month(year, month, w=2, l=1))`。即打印 `year` 年 `month` 月的月历。
    *   **参数**：与 `calendar.month()` 相同。
    *   **返回值**：`None`（直接打印输出）。

10. **`calendar.setfirstweekday(weekday)`**
    *   **描述**：设置每周的起始日期码。
    *   **参数**：`weekday`：一个整数，`0` 表示星期一，`1` 表示星期二， ...，`6` 表示星期日。
    *   **返回值**：`None`。

11. **`calendar.timegm(tupletime)`**
    *   **描述**：和 `time.gmtime()` 相反。接受一个 UTC 时间元组形式（`struct_time` 对象或 9 元素元组），返回该时刻的时间戳（自 1970 纪元后经过的浮点秒数）。
    *   **参数**：`tupletime`：一个 `struct_time` 对象或者一个 9 元素的时间元组，代表一个 UTC 时间。
    *   **返回值**：一个浮点数，表示自 1970 年 1 月 1 日 00:00:00 UTC 以来的秒数。

12. **`calendar.weekday(year, month, day)`**
    *   **描述**：返回给定日期（`year` 年 `month` 月 `day` 日）是星期几的日期码。
    *   **参数**：
        *   `year`：年份。
        *   `month`：月份（1 表示一月，12 表示十二月）。
        *   `day`：日（1 到当月的天数）。
    *   **返回值**：一个整数，`0` 表示星期一，`1` 表示星期二， ...，`6` 表示星期日。

---

## 其他相关模块和函数
在Python中，其他处理日期和时间的模块还有：

*   **datetime模块**: <https://docs.python.org/3/library/datetime.html>
*   **pytz模块**: <https://pypi.org/project/pytz/> (PyPI 页面，其官方文档通常链接于此或在项目仓库)
*   **dateutil模块**: <https://dateutil.readthedocs.io/en/stable/> (Read the Docs)



## 练习

### 练习 1：获取当前时间并打印
**任务**：使用 `time` 模块，获取当前的本地时间，并以 `年-月-日 时:分:秒` 的格式打印出来。

<details>
<summary><b>参考答案</b></summary>

```python
import time

# 获取当前本地时间元组
local_time = time.localtime()

# 格式化输出
formatted_time = time.strftime("%Y-%m-%d %H:%M:%S", local_time)
print("当前本地时间:", formatted_time)
```
</details>

---

### 练习 2：判断闰年
**任务**：使用 `calendar` 模块，让用户输入一个年份，然后判断该年份是否是闰年。

<details>
<summary><b>参考答案</b></summary>

```python
import calendar

year = int(input("请输入一个年份: "))
if calendar.isleap(year):
    print(f"{year}年是闰年。")
else:
    print(f"{year}年不是闰年。")
```
</details>

---

### 练习 3：计算两个日期之间的天数差 (基础版)
**任务**：让用户输入两个日期（格式如 `YYYY-MM-DD`），计算并打印这两个日期之间相差的天数。
（提示：可以使用 `time.strptime()` 将字符串转为时间元组，再用 `time.mktime()` 转为时间戳，最后计算差值）

<details>
<summary><b>参考答案</b></summary>

```python
import time

def date_to_timestamp(date_str):
    """将 'YYYY-MM-DD' 格式的字符串转换为时间戳"""
    time_tuple = time.strptime(date_str, "%Y-%m-%d")
    return time.mktime(time_tuple)

date1 = input("请输入第一个日期 (YYYY-MM-DD): ")
date2 = input("请输入第二个日期 (YYYY-MM-DD): ")

try:
    ts1 = date_to_timestamp(date1)
    ts2 = date_to_timestamp(date2)
    delta_seconds = abs(ts1 - ts2)
    delta_days = delta_seconds / (24 * 60 * 60)  # 转换为天
    print(f"两个日期相差 {int(delta_days)} 天。")
except ValueError:
    print("日期格式错误，请确保输入的格式是 YYYY-MM-DD。")
```
</details>

---

### 练习 4：打印指定年份和月份的日历
**任务**：让用户输入一个年份和一个月份，然后使用 `calendar` 模块打印出该月的日历。

<details>
<summary><b>参考答案</b></summary>

```python
import calendar

year = int(input("请输入年份: "))
month = int(input("请输入月份 (1-12): "))

if 1 <= month <= 12:
    print(f"\n{year}年{month}月的日历:")
    calendar.prmonth(year, month)  # prmonth 直接打印
else:
    print("月份输入错误，请输入 1 到 12 之间的数字。")
```
</details>

---

### 练习 5：计算程序执行时间
**任务**：编写一个程序，计算从 1 加到 1000000 所花费的时间，并打印出来（精确到小数点后 4 位）。
（提示：使用 `time.time()` 在循环前后获取时间戳）

<details>
<summary><b>参考答案</b></summary>

```python
import time

start_time = time.time()

total = 0
for i in range(1, 1000001):
    total += i

end_time = time.time()

elapsed_time = end_time - start_time
print(f"从 1 加到 1000000 的结果是: {total}")
print(f"程序执行时间: {elapsed_time:.4f} 秒")
```
</details>

---

### 练习 6：综合应用 - 生日倒计时 (使用 `time` 和 `calendar`)
**任务**：
1.  让用户输入他的生日（格式 `YYYY-MM-DD`）。
2.  获取当前日期。
3.  计算今年的生日过了没有。
4.  如果过了，计算距离明年生日的天数；如果没过，计算距离今年生日的天数。
5.  打印结果。

<details>
<summary><b>参考答案</b></summary>

```python
import time
import calendar

def days_until_birthday(birthday_str):
    # 获取当前时间元组
    today = time.localtime()
    current_year = today.tm_year
    current_month = today.tm_mon
    current_day = today.tm_mday

    # 解析生日
    try:
        birth_tuple = time.strptime(birthday_str, "%Y-%m-%d")
        birth_month = birth_tuple.tm_mon
        birth_day = birth_tuple.tm_mday

        # 计算今年的生日
        this_year_birthday = (current_year, birth_month, birth_day)

        # 将生日转换为时间戳 (注意处理跨年)
        # 先尝试今年的生日
        try:
            birth_timestamp = time.mktime(time.strptime(f"{current_year}-{birth_month}-{birth_day}", "%Y-%m-%d"))
        except ValueError:
            # 处理2月29日的情况，如果今年不是闰年，则视为3月1日？或者直接算365天？
            # 这里简化处理，假设用户输入的生日是有效的（非2月29日或输入年份是闰年）
            # 更严谨的处理可以参考更复杂的日期库
            print("注意：生日为2月29日，在非闰年将视为3月1日计算。")
            birth_timestamp = time.mktime(time.strptime(f"{current_year}-03-01", "%Y-%m-%d"))

        # 当前时间戳
        now_timestamp = time.time()

        if birth_timestamp >= now_timestamp:
            # 今年生日还没过
            days_until = (birth_timestamp - now_timestamp) / (24 * 3600)
        else:
            # 今年生日已过，计算明年的
            next_year = current_year + 1
            try:
                birth_timestamp_next = time.mktime(time.strptime(f"{next_year}-{birth_month}-{birth_day}", "%Y-%m-%d"))
            except ValueError:
                birth_timestamp_next = time.mktime(time.strptime(f"{next_year}-03-01", "%Y-%m-%d"))
            days_until = (birth_timestamp_next - now_timestamp) / (24 * 3600)

        return int(days_until)

    except ValueError:
        print("生日格式错误，请使用 YYYY-MM-DD 格式。")
        return None

# 获取用户生日
birthday = input("请输入你的生日 (YYYY-MM-DD): ")
days = days_until_birthday(birthday)

if days is not None:
    if days == 0:
        print("今天是你的生日！生日快乐！")
    else:
        print(f"距离你的下一个生日还有 {days} 天。")
```
</details>

---

### 练习 7：综合应用 - 日期解析与转换 (使用 `time` 模块)
**任务**：
1.  给定一个日期字符串，例如 `"2023/12/25"`。
2.  将其解析为一个时间元组。
3.  然后将这个时间元组转换为另一种格式的字符串，例如 `"December 25, 2023 (Monday)"`。
4.  再计算并打印出这一天是当年的第几天。

<details>
<summary><b>参考答案</b></summary>

```python
import time

# 给定的日期字符串
date_str = "2023/12/25"

# 1. 解析日期字符串为时间元组 (原格式是 %Y/%m/%d)
try:
    time_tuple = time.strptime(date_str, "%Y/%m/%d")
except ValueError as e:
    print(f"解析日期失败: {e}")
    exit()

# 2. 转换为新的格式字符串 "December 25, 2023 (Monday)"
new_format = time.strftime("%B %d, %Y (%A)", time_tuple)
print("转换后的日期:", new_format)

# 3. 计算这一天是当年的第几天 (tm_yday 属性)
day_of_year = time_tuple.tm_yday
print(f"这一天是 {time_tuple.tm_year} 年的第 {day_of_year} 天。")
```
</details>

---

希望这些练习能帮助你更好地理解和运用 Python 的日期和时间处理功能！慢慢来，动手实践是学习编程的最佳途径。如果遇到困难，可以回顾之前学过的内容，或者查阅官方文档，也欢迎在下方评论区交流