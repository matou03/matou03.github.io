---
title: Python 环境搭建
date: 2025-10-20 16:32:24
tags: 
  - 编程
categories:
  - 编程
  - Python 教程
---

# 前言
Python 作为一款跨平台编程语言，能够在多种主流操作系统及环境中运行。本章将指导您完成本地 Python 开发环境的安装与配置。

目前，Python 已广泛兼容以下系统平台：
- **桌面操作系统**：Windows（7及以上版本）、macOS（所有主流版本）、Linux（Ubuntu、Debian、Fedora、CentOS等）
- **类 Unix 系统**：FreeBSD、OpenBSD 等
- **嵌入式设备**：树莓派等开发板
- **移动平台**：通过 Kivy 等框架支持 iOS 和 Android
- **云服务平台**：AWS、Google Cloud、Azure 等

## 环境检查与准备工作

### 打开终端/命令提示符
在检查 Python 安装前，需要先打开系统终端：

**Windows**
```cmd
# 方法1：按 Win+R，输入 cmd 回车
# 方法2：在开始菜单搜索"命令提示符"或"CMD"
# 方法3：按 Win+X，选择"终端"（或终端管理员）
```

**macOS**
```bash
# 方法1：Cmd+空格，搜索"终端"
# 方法2：应用程序-实用工具-终端
# 方法3：使用 iTerm2 等第三方终端
```

**Linux**
```bash
# 方法1：Ctrl+Alt+T（大多数发行版）
# 方法2：应用程序-系统工具-终端
# 方法3：右键桌面选择"打开终端"
```

### 检查 Python 安装
打开终端后，输入以下命令检查 Python 状态：

```bash
# 检查 Python 是否安装及版本
python --version
# 或
python3 --version

# 在某些系统中可能需要使用特定版本号
python3.9 --version
python3.11 --version
```

如果系统已安装 Python，命令将返回版本号；如果未安装，会显示"未找到命令"或类似提示。

### 各平台安装指引
**Windows**
- 访问 python.org 下载官方安装包
- 安装时勾选"Add Python to PATH"
- 可通过 Microsoft Store 安装

**macOS**
- 使用 Homebrew：`brew install python`
- 下载官方安装包
- 系统可能预装 Python，但建议安装新版

**Linux**
```bash
# Ubuntu/Debian
sudo apt update && sudo apt install python3

# CentOS/RHEL
sudo yum install python3

# 或使用包管理器
sudo dnf install python3
```

完成安装后，重新打开终端并再次运行 `python --version` 确认安装成功。

## Python 下载
Python 的最新源码，二进制文档，新闻资讯都可以在官网查询到，以下是 Python 官网：
https://www.python.org/
你可以在以下链接中下载 Python 的文档，但是考虑到部分人访问官网会很慢，所以这里提供一个国内的网站来供大家下载（Python3.7版的）：
https://repo.huaweicloud.com/python/3.7.9/

进入网站之后，按照下面图示，选择这个版本的安装即可
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021000450.png" alt="图一" style="width:50%;" >
</div>

安装好以后，找到这个文件，双击点击安装
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021123959.png" alt="图二" style="width:50%;" >
  <img src="/img_2/QQ截图20251021130005.png" alt="图三" style="width:50%;" >
</div>

图三中的内容，第一个选项的意思是表示以管理员权限安装 Python
而第二个的意思是表示自动添加Python的环境路径 **（强烈建议勾选上否则你需要单独配置环境变量）
上面的 **Install Now** 可以理解成默认路径安装，也就是在C盘进行安装，同样你可以选择下面的 **Customize installation** 以自定义选择安装的位置。（我的建议是默认即可）。如果还是想要选择自定义安装的话，<a href="https://blog.toumatou.cn/2025/10/20/Python-%E5%9F%BA%E7%A1%80%E7%AF%87/Python%20%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA%E8%A1%A5%E6%A1%A3/">请跳转这里</a>

**如果弹出是否允许之类的弹窗选择是即可**
如果直接点击上面的 **Install Now** 等待片刻后，他就会安装完毕，出现如下画面
<div style="text-align:center">
  <img src="/img_2/F44F4901A067BEF2F27AF28C566E210F.jpg" alt="图四" style="width:50%;" >
</div>

这里的 Diable path length limit 是为了防止文件路径名字过长而取消路径长度限制，建议不要点击，直接点击Close就好。
至此，安装流程已经结束。
**PS** : 以后在安装软件的时候，养成一个好习惯，不要把它安装在由中文命名的文件夹处，否则可能会出现一些莫名其妙的问题，把它放在一个以英文命名的文件夹下，哪怕你用拼音命名也可以。**请养成这个好习惯!!!** ×3（重要的事情说三遍）

## 检测安装
让我们打开命令行（以Windows系统为例）
如果你忘记了怎么的打开，你可以在键盘上按住 **win＋R** （Win键，通常标有Windows徽标（一个四格窗口图标）），然后输入 **cmd** 这个指令，接着回车，得到如下图所示结果：
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021133511.png" alt="图五" style="width:50%;" >
  <img src="/img_2/QQ截图20251021133645.png" alt="图六" style="width:50%;" >
</div>

接着在命令行里输入 **python** ，结果如图类似即可，由于我安装的是Python 3.12.0版本所以出现的就是Python 3.12.0，如果你是其他版本就是对应版本
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021133824.png" alt="图七" style="width:50%;" >
</div>
当然，你也可以输入 python --version （中间有空格，两个减号，别忘了），结果如图所示：
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021134103.png" alt="图八" style="width:50%;" >
</div>
如果你的结果不像上面几张图所示，而是出现的是"...不是外部或内部命令，也不是可运行的程序"，你可能在环境配置中遇到了问题，你可以再次看一遍教程，重做前面的步骤。
至此你已经完成了Python的安装与环境配置。

## Python的使用（通过IDE来使用）
有不少人都喜欢用 **Pycharm** 来编写 Python ，我也是。所以这部分教程将使用 Pycharm 来作为使用 Python 的工具

### IDE工具的下载
以下是 Pycharm 的官网地址：
https://www.jetbrains.com/pycharm

但是，考虑到有些朋友访问的比较慢，下载的也慢，**最最重要的是**，官方正版的是要花钱的，成本还不少，仅仅只是为了学习，没必要花那么多钱，等你以后有了收入再去支持正版也不迟，所以接下来我提供一个链接，里面包含了 Pycharm 的激活步骤。
**声明** ：**以下内容仅供参考学习，不得商用！！！违背的必将追究！！！**
**链接**：
链接一：**https://wwrr.lanzoul.com/iZzaL38yy06b**
链接二：通过百度网盘分享的文件：pycharm-professional-2024.1.exe
**https://pan.baidu.com/s/1mIYrIZ-0ECFI4wICZbomLA?pwd=cxgu** 
提取码: cxgu 
连接三：我用夸克网盘给你分享了「pycharm-professional-2024.1.exe」，点击链接或复制整段内容，打开「夸克APP」即可获取。
**/~164a38mHUb~:/**
**https://pan.quark.cn/s/27f5a93eaef2?pwd=txV8**
提取码：txV8
其中，链接一是激活工具，链接二和链接三分别是百度网盘和夸克网盘分享的 Pycharm 软件的链接。想要使用 Pycharm，除了需要有软件以外，还要有激活工具。如果你是通过官网下载的，那么请下载 Pycharm 2024.1版本的，否则可能会激活失败。补充一下，怎么找到除了最新版的其它版本？
当你进入 [PyCharm官网的时候](https://www.jetbrains.com/pycharm/download/?section=windows)，点击 **Other versions**（其它版本）就可以直接跳转到其它版本的页面,鼠标滚轮向下滑动并找到2024.1版本。如下图所示：
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021144719.png" alt="图九" style="width:50%;" >
  <img src="/img_2/QQ截图20251021145523.png" alt="图十" style="width:50%;" >
  <img src="/img_2/QQ截图20251021145703.png" alt="图十一" style="width:50%;" >
  <img src="/img_2/QQ截图20251021145847.png" alt="图十二" style="width:50%;" >
</div>
下载好以后在你的文件资源管理器里面找到它，如图：
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021150048.png" alt="图十三" style="width:50%;" >
</div>

双击唤起，会弹出以下提示，点击 **下一步** 
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021150251.png" alt="图十四" style="width:50%;" >
</div>

下一步是选择安装的位置，可以选择默认（即装在C盘），但是我不推荐装在C盘，所以强烈建议手动修改一下安装位置，装在其它盘，我这里装在了D盘，你也可以选择装在其它盘，完成之后再点击 **下一步**
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021150738.png" alt="图十五" style="width:50%;" >
</div>

**创建桌面快捷方式**的这个地方和**更新PATH变量**的地方可以打上勾，当然你也可以不打勾直接 **下一步**
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021150936.png" alt="图十六" style="width:50%;" >
</div>

到这里直接点击安装
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021151039.png" alt="图十七" style="width:50%;" >
</div>

等待一段时间，直至
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021151154.png" alt="图十八" style="width:50%;" >
</div>

接着点击完成，至此你的 Pycharm 便安装完成了

### Pycharm的激活
进入 Pycharm ，引入眼帘的是一个协议，直接点击 **Continue** 即可
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021151613.png" alt="图十九" style="width:50%;" >
</div>

接下来这个是关于数据共享的，同意后他会将一些数据以匿名的形式返回给阿帕奇，可选可不选
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021151903.png" alt="图二十" style="width:50%;" >
</div>

好了，到这一步，先关闭 Pycharm ，然后打开我提供的那个激活工具，找到这个部分
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021152228.png" alt="图二十一" style="width:50%;" >
</div>

接着双击它，等待一会儿，当弹出 **success** 的时候，则表示激活成功。之后进入 Pycahrm，就会弹出这个界面
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021152836.png" alt="图二十二" style="width:50%;" >
</div>

点击 **Plugins** ，在上方的搜索搜索栏搜索 **Chinese** ，找到这个图标对应插件，点击旁边的 **Install** ，等待其安装成功后就会弹出一个 **Restart IDE** ,意思就是安装完这个插件以后需要重启一下 Pycharm ，点击即可
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021152836.png" alt="图二十三" style="width:50%;" >
  <img src="/img_2/QQ截图20251021153420.png" alt="图二十四" style="width:50%;" >
  <img src="/img_2/QQ截图20251021153805.png" alt="图二十五" style="width:50%;" >
  <img src="/img_2/QQ截图20251021154118.png" alt="图二十六" style="width:50%;" >
  <img src="/img_2/QQ截图20251021154343.png" alt="图二十七" style="width:50%;" >
</div>

重启 Pycharm 以后，你就会看界面以及变成中文了
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021154455.png" alt="图二十八" style="width:50%;" >
</div>

至此， **Python** 的环境搭建已全部完成。下一部分的内容则正式进入到 Python 的学习中