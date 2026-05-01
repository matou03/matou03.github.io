---
title: Python 条件语句
date: 2025-10-27 09:50:12
tags: 
  - 编程
categories:
  - 编程
  - Python 教程
---

# Python 条件语句



你可能会好奇：“程序怎么知道什么时候该做什么呢？” 比如，一个游戏程序怎么知道你得分够高了，该进入下一关？或者一个聊天软件怎么知道你输入的密码对不对？这就需要用到**条件语句**

条件语句就像生活中的“如果...就...”。比如：“**如果**明天下雨，**就**带伞。” 程序里的条件语句也是这个道理，它会先判断一个**条件**是不是成立，即，是真的还是假的，然后根据判断结果决定接下来执行哪段代码。

---

## 一、什么是“条件”？真和假是什么意思？

在Python里，条件语句会判断一个“条件”的结果是**真**（True）还是**假**（False）。

*   **什么是“真”（True）？**
    *   数字里，除了0以外的任何数字（比如1, 3.14, -5）都是True。
    *   文字里，除了空字符串（`""` 或 `''`）以外的任何内容，比如"hello", "123"等等都是True。
    *   简单说：**非0、非空的值，都被看作是True。**
*   **什么是“假”（False）？**
    *   数字0（比如0, 0.0）。
    *   空字符串（`""` 或 `''`）。
    *   还有一个专门的关键字 `None`，表示什么都没有
    *   简单说：**0、空值、None，都被看作是False。**

---

## 二、最基本的条件语句：`if` 语句

`if` 语句是最简单的条件语句，它的意思是：“**如果**某个条件成立（是True），**就**执行下面的代码。”

### 1. `if` 语句的基本格式

```python
if 判断条件:
    当条件为 True 时，执行这里的代码
    这行代码也会执行，因为它和上一行对齐了，即缩进相同
# 这行代码不在 if 里面，不管条件真假都会执行，因为它没有缩进
```

*   **重要规则：**
    *   `if` 后面的判断条件**必须**加冒号 `:`。
    *   `if` 条件成立后要执行的代码块，**必须**向右缩进，通常是按一下Tab键，或者4个空格。Python就是通过缩进来区分哪些代码属于这个条件的。

### 2. 举个例子

设想一下，你写了一个简单的程序，想知道变量 `name` 是不是 "python"。

```python
name = 'luren'  # 给变量 name 赋值为 'luren'

if name == 'python':  # 判断 name 的值是不是等于 'python'
    print('welcome boss')  # 如果条件成立，就打印这句话
# 如果条件不成立，上面这行缩进的代码就跳过不执行

print('程序结束了')  # 这行没有缩进，所以不管 if 条件怎么样，都会执行
```

**运行结果是什么呢？**
因为 `name` 是 'luren'，不等于 'python'，所以 `if` 里面的 `print('welcome boss')` 不会执行。最后只会打印：
```
程序结束了
```

如果我们把 `name = 'luren'` 改成 `name = 'python'`，那么 `if` 条件成立，运行结果就是：
```
welcome boss
程序结束了
```

### 3. `if` 语句的执行过程

<div style="text-align:center">
  <img src="/img_2/mermaid-1761619909752.png" alt="程序框图" style="width:50%;">
</div>

## 三、“如果...不满足，就...”：`if-else` 语句

有时候，我们不仅想知道“条件成立时做什么”，还想知道“条件**不**成立时做什么”。这时候就需要 `else` 了。`else` 的意思是“否则”。

### 1. `if-else` 语句的基本格式

```python
if 判断条件:
    当条件为 True 时，执行这里的代码块
else:
    当条件为 False 时，执行这里的代码块
# 这行代码在 if-else 外面，一定会执行
```

*   `else` 后面也要加冒号 `:`。
*   `else` 下面的代码块也要缩进。

### 2. 举个例子

还是上面的 `name` 例子，我们可以加上 `else`：

```python
name = 'luren'

if name == 'python':
    print('welcome boss')  # 条件成立（True），执行这个
else:
    print(name)  # 条件不成立（False），执行这个

print('程序结束了')
```

**运行结果：**
因为 `name` 是 'luren'，`if` 条件不成立，所以执行 `else` 里面的 `print(name)`，输出：
```
luren
程序结束了
```

如果 `name` 是 'python'，则输出：
```
welcome boss
程序结束了
```

### 3. `if-else` 的执行过程

<div style="text-align:center">
  <img src="/img_2/mermaid-1761620133851.png" alt="" style="width:50%;" >
</div>


---

## 四、“如果...就...；否则如果...就...；否则就...”：`if-elif-else` 语句

生活中我们经常会遇到多种选择。比如：“**如果**考试得了90分以上，**就**奖励玩具；**否则如果**得了80分以上，**就**奖励零食；**否则**，就继续努力。”

在Python里，`elif` 就是“**否则如果**”的意思，可以帮我们处理多种条件判断。

### 1. `if-elif-else` 语句的基本格式

```python
if 判断条件1:
    当条件1为 True 时，执行这里的代码块
elif 判断条件2:
    当条件1为 False，但条件2为 True 时，执行这里的代码块
elif 判断条件3:
    当条件1和条件2都为 False，但条件3为 True 时，执行这里的代码块
... (可以有更多的 elif)
else:
    当所有前面的条件都为 False 时，执行这里的代码块
```

*   `elif` 是 `else if` 的缩写。
*   `elif` 后面也要加冒号 `:`，代码块也要缩进。
*   `else` 是可选的，放在最后，表示所有条件都不满足时的情况。

### 2. 举个例子

假设我们根据数字 `num` 的值输出不同的身份：

```python
num = 5  # 我们来看看 num=5 会输出什么

if num == 3:          # 判断 num 的值是不是3
    print('boss')     # 如果是3，打印 'boss'
elif num == 2:        # 如果不是3，再判断是不是2
    print('user')     # 如果是2，打印 'user'
elif num == 1:        # 如果不是2，再判断是不是1
    print('worker')   # 如果是1，打印 'worker'
elif num < 0:         # 如果不是1，再判断是不是小于0
    print('error')    # 如果小于0，打印 'error'
else:                 # 如果上面所有条件都不满足
    print('roadman')  # 就打印 'roadman'
```

**思考一下：** `num` 是5。
*   `num ==3`? 不是（False）。
*   `num ==2`? 不是（False）。
*   `num ==1`? 不是（False）。
*   `num <0`? 不是（False）。
*   所以执行 `else`，输出：`roadman`。



### 3. `if-else-else` 的执行过程

<div style="text-align:center">
  <img src="/img_2/mermaid-1761620291553.png" alt="" style="width:50%;" >
</div>
---

## 五、多个条件一起判断：`and` 和 `or`

有时候，我们的条件不是单一的，可能需要同时满足几个条件，或者满足其中一个条件就可以。这时候就要用到 `and`（表示并且/与）和 `or`（表示或者/或）。

### 1. `and`（并且）：所有条件都为 True，结果才是 True

格式：`条件A and 条件B`
*   只有当 **条件A为True，并且条件B也为True** 时，整个表达式才是True。
*   只要有一个条件是False，整个表达式就是False。

**例子：判断一个数字是否在0到10之间**

```python
num = 9
if num >= 0 and num <= 10:  # num 大于等于0 并且 num 小于等于10
    print('hello')  # 9满足条件，所以会打印 'hello'
```


### 2. `or`（或者）：只要有一个条件为 True，结果就是 True

格式：`条件A or 条件B`
*   只要 **条件A为True，或者条件B为True**，或者两者都为True，整个表达式就是True。
*   只有当所有条件都为False时，整个表达式才是False。

**例子：判断一个数字是否小于0或者大于10**

```python
num = 10
if num < 0 or num > 10:  # num 小于0 或者 num 大于10
    print('hello')
else:
    print('undefine')  # 10不小于0，也不大于10，所以条件是False，执行else，打印 'undefine'
```

### 3. 更复杂的组合：使用括号 `()`

如果条件更复杂，可以用括号 `()` 来改变判断的顺序，就像数学里先算括号里的一样。

**例子：判断一个数字是否在0~5之间，或者在10~15之间**

```python
num = 8
if (num >= 0 and num <= 5) or (num >= 10 and num <= 15):
    print('hello')
else:
    print('undefine')  # 8不在0-5，也不在10-15，所以打印 'undefine'
```

这里 `(num >= 0 and num <=5)` 是一个整体条件，`(num >=10 and num <=15)` 是另一个整体条件，用 `or` 连接，表示满足其中一个整体条件即可

---

## 六、简单的一行 `if` 语句（了解即可）

如果 `if` 条件成立后要执行的代码非常简单，只有一行，Python允许我们把它和 `if` 写在同一行。

**例子：**

```python
var = 100
if var == 100: print("变量 var 的值为100")  # 如果 var 等于100，就打印这句话
print("Good bye!")  # 这行总会执行
```

**运行结果：**
```
变量 var 的值为100
Good bye!
```

这种写法虽然简洁，但如果代码多了就不推荐了，会影响可读性

---

## 练习

### 一、基础练习

#### 练习1：判断奇偶数
**题目：** 输入一个整数，判断它是奇数还是偶数。
（提示：一个数除以2如果余数为0就是偶数，否则是奇数。用 `%` 运算符求余数。）

<details>
<summary>参考答案</summary>

```python
num = int(input("请输入一个整数: "))  # input()获取用户输入，int()转换为整数
if num % 2 == 0:  # % 是取余运算符，如果除以2余数是0
    print(f"{num} 是偶数")
else:
    print(f"{num} 是奇数")
```

**测试：**
*   输入 4 → 4 是偶数
*   输入 7 → 7 是奇数
</details>

#### 练习2：比较两个数的大小
**题目：** 输入两个整数，比较它们的大小，并输出较大的那个数。如果两个数相等，也提示。

<details>
<summary>参考答案</summary>

```python
a = int(input("请输入第一个整数: "))
b = int(input("请输入第二个整数: "))

if a > b:
    print(f"{a} 大于 {b}")
elif a < b:
    print(f"{b} 大于 {a}")
else:
    print(f"{a} 和 {b} 相等")
```

**测试：**
*   输入 5 和 3 → 5 大于 3
*   输入 2 和 7 → 7 大于 2
*   输入 4 和 4 → 4 和 4 相等
</details>

#### 练习3：判断成绩等级
**题目：** 输入一个学生的分数（0-100），根据分数判断等级：
*   90-100分：A
*   80-89分：B
*   70-79分：C
*   60-69分：D
*   0-59分：F
*   如果分数不在0-100之间，提示“分数输入错误！”

<details>
<summary>参考答案</summary>

```python
score = float(input("请输入学生分数（0-100）: "))

if score < 0 or score > 100:
    print("分数输入错误！")
elif score >= 90:
    print("等级：A")
elif score >= 80:  # 能到这里，说明分数 <90
    print("等级：B")
elif score >= 70:  # 能到这里，说明分数 <80
    print("等级：C")
elif score >= 60:  # 能到这里，说明分数 <70
    print("等级：D")
else:  # 能到这里，说明分数 <60 且 >=0 (因为前面排除了<0的情况)
    print("等级：F")
```

**测试：**
*   输入 95 → 等级：A
*   输入 83 → 等级：B
*   输入 77 → 等级：C
*   输入 62 → 等级：D
*   输入 45 → 等级：F
*   输入 105 → 分数输入错误！
*   输入 -5 → 分数输入错误！
</details>

---

### 二、综合练习

#### 练习4：简单的登录验证
**题目：** 假设系统中有一个预设的用户名 "admin" 和密码 "123456"。
请用户输入用户名和密码，如果两者都正确，打印“登录成功！”；
如果用户名错误，打印“用户名不存在！”；
如果用户名正确但密码错误，打印“密码错误！”。

<details>
<summary>参考答案</summary>

```python
# 预设的正确用户名和密码
correct_username = "admin"
correct_password = "123456"

# 获取用户输入
username = input("请输入用户名: ")
password = input("请输入密码: ")

# 判断
if username != correct_username:
    print("用户名不存在！")
else:
    # 用户名正确了，再判断密码
    if password == correct_password:
        print("登录成功！")
    else:
        print("密码错误！")
```

**或者，使用逻辑运算符合并条件：**
```python
correct_username = "admin"
correct_password = "123456"

username = input("请输入用户名: ")
password = input("请输入密码: ")

if username == correct_username and password == correct_password:
    print("登录成功！")
elif username != correct_username:
    print("用户名不存在！")
else:  # username 正确，但 password 错误
    print("密码错误！")
```

**测试：**
*   用户名：admin，密码：123456 → 登录成功！
*   用户名：user，密码：123456 → 用户名不存在！
*   用户名：admin，密码：wrong → 密码错误！
</details>

#### 练习5：电影票价计算
**题目：** 某电影院根据观众的年龄和是否为会员来决定票价：
*   会员：
    *   年龄 < 18岁：票价 30元
    *   年龄 >= 18岁：票价 40元
*   非会员：
    *   年龄 < 18岁：票价 45元
    *   年龄 >= 18岁：票价 55元
请用户输入年龄和是否为会员（输入 "y" 或 "Y" 表示会员，其他表示非会员），计算并输出票价。

<details>
<summary>参考答案</summary>

```python
age = int(input("请输入您的年龄: "))
is_member_input = input("您是会员吗？(y/Y 表示是，其他表示否): ")

# 判断是否为会员
is_member = is_member_input.lower() == 'y'  # lower() 把输入转为小写，再比较是否是 'y'

if is_member:
    # 会员逻辑
    if age < 18:
        price = 30
    else:
        price = 40
else:
    # 非会员逻辑
    if age < 18:
        price = 45
    else:
        price = 55

print(f"您的电影票价是：{price}元")
```

**测试：**
*   年龄15，输入y → 30元
*   年龄20，输入Y → 40元
*   年龄12，输入n → 45元
*   年龄30，输入m → 55元
</details>

---

### 三、挑战练习（选做）

#### 练习6：石头剪刀布
**题目：** 简单实现石头剪刀布游戏。
1.  程序随机选择石头、剪刀或布（用数字1代表石头，2代表剪刀，3代表布）。
2.  用户输入自己的选择（1/2/3）。
3.  判断胜负规则：
    *   石头(1) 胜 剪刀(2)
    *   剪刀(2) 胜 布(3)
    *   布(3) 胜 石头(1)
    *   双方选择相同则平局。
4.  输出电脑的选择和比赛结果

（提示：可以使用 `random.randint(1,3)` 来生成电脑的随机选择，需要先导入 random 模块：`import random`）

<details>
<summary>参考答案</summary>

```python
import random

# 电脑随机选择 (1:石头, 2:剪刀, 3:布)
computer_choice = random.randint(1, 3)

# 用户输入选择
user_choice = int(input("请输入你的选择 (1:石头, 2:剪刀, 3:布): "))

# 确保用户输入有效 (这一步可以省略，作为挑战可以先不考虑输入错误的情况)
if user_choice not in [1, 2, 3]:
    print("输入错误！请输入1、2或3。")
else:
    # 显示双方选择
    choice_names = {1: '石头', 2: '剪刀', 3: '布'}
    print(f"电脑选择：{choice_names[computer_choice]}")
    print(f"你的选择：{choice_names[user_choice]}")

    # 判断胜负
    if user_choice == computer_choice:
        print("平局！")
    elif (user_choice == 1 and computer_choice == 2) or \
         (user_choice == 2 and computer_choice == 3) or \
         (user_choice == 3 and computer_choice == 1):
        print("你赢了！")
    else:
        print("你输了！")
```

**游戏逻辑解释：**
当 `user_choice != computer_choice` 时，只有三种情况用户会赢：
(user_choice=1 且 computer_choice=2) OR (user_choice=2 且 computer_choice=3) OR (user_choice=3 且 computer_choice=1)。其他情况就是用户输了。

**测试（注意：每次运行结果可能不同，因为电脑是随机的）：**
*   电脑选1，用户选1 → 平局
*   电脑选2，用户选1 → 你赢了
*   电脑选3，用户选1 → 你输了 (因为布赢石头)
*   电脑选1，用户选2 → 你输了 (因为石头赢剪刀)
*   电脑选2，用户选2 → 平局
*   电脑选3，用户选2 → 你赢了 (因为剪刀赢布)
*   电脑选1，用户选3 → 你赢了 (因为布赢石头)
*   电脑选2，用户选3 → 你输了 (因为剪刀赢布)
*   电脑选3，用户选3 → 平局
</details>

---

希望这些练习能帮助你更好地理解和掌握 Python 条件语句！**一定要自己动手敲代码，不要只是看答案哦！** 遇到问题多思考，多尝试修改代码，这样才能真正学会。加油！