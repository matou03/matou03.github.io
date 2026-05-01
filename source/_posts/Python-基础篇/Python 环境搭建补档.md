---
title: Python 环境搭建补档
date: 2025-10-20 16:32:24
tags: 
  - 编程
categories:
  - 编程
  - Python 教程
---
# 前言
可能有的朋友在安装 Python 的时候还是会选择自定义安装，那么考虑到这部分朋友，就补档这一部分的内容

## 自定义安装步骤
在打开安装包后还是建议勾选下面两项，然后选择 **Customize installation**
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021163545.png" alt="图一" style="width:50%;" >
</div>

后面的这些内容，不需要动，直接点击 **Next** 下一步就好
下面解释一下这些内容是什么意思：
好的，我们来用更通俗的方式解释这些安装选项：

-   **Documentation（文档）**
    就是 Python 的官方说明书和帮助文件。**建议勾选**，这样你可以在没网的时候也能本地查阅，很方便。

-   **pip（包管理工具）**
    这是 Python 的“应用商店”，你以后想用别人写好的现成代码（称为“库”或“包”），比如做数据分析、爬虫等，都需要通过 pip 来下载安装。**这是最关键的工具，必须安装。**

-   **tcl/tk and IDLE**
    -   `tcl/tk` 是两款用来做简单窗口程序（GUI）的底层工具。
    -   `IDLE` 是 Python 自带的一个非常基础的“记事本”式的代码编写和运行环境。
    对于新手，你**可以不勾选**。因为它功能简单，我们后文会推荐更强大、好用的 PyCharm 作为代码编辑器。

-   **Python test suite（测试套件）**
    这是 Python 官方用来自己检查身体（测试解释器和标准库）的一套工具。**不用管它，保持默认勾选即可**，普通用户基本用不上。

-   **py launcher（启动器）**
    这个工具能让你在电脑的命令行里，简单地输入 `py` 命令来启动不同版本的 Python。而 “for all users” 是问你是否为电脑上的所有用户都安装这个功能。
    -   **如果你是个人电脑，勾不勾都行**。勾选需要管理员权限，不勾选就只给你当前这个用户安装。
    -   **建议勾选**，这样更方便。

简单总结一下：
**pip 必选；Documentation 和 py launcher 建议选；IDLE 可以不选；test suite 留着就行。**（但是刚开始建议还是都选上吧）

<div style="text-align:center">
  <img src="/img_2/QQ截图20251021164407.png" alt="图二" style="width:50%;" >
</div>

**Customize install location** 选择的是安装路径，这个可以自选（**建议路径中不要带中文，再次强调**），选择好后点击Install
下面来解释一下这些内容是什么意思：
好的，我们来用通俗易懂的语言解释这些安装选项：

*   **Install Python 3.12 for all users（为所有用户安装）**
    *   **通俗解释**：如果勾选，电脑上所有的用户账户都能使用这个 Python。就像在公共区域安装一个软件，大家都能用。这需要管理员权限。
    *   **建议**：如果你是电脑的唯一用户，**勾不勾都行**。如果在公司或学校的电脑上，想自己用，就别勾。

*   **Associate files with Python（将文件与 Python 关联）**
    *   **通俗解释**：勾选后，当你直接在文件夹里双击一个 `.py` 的 Python 脚本文件时，电脑会自动用 Python 来运行它，非常方便。
    *   **建议**：**建议勾选**，省去手动操作的麻烦。

*   **Create shortcuts for installed applications（创建快捷方式）**
    *   **通俗解释**：就是在开始菜单里放一个 Python 的快捷启动入口，方便你找到它。
    *   **建议**：**建议勾选**，找起来方便。

*   **Add Python to environment variables（添加 Python 到环境变量）**
    *   **通俗解释**：这是**非常重要**的一步！勾选后，你可以在电脑的命令行（那个黑乎乎的窗口）的任何位置，直接输入 `python` 命令来启动 Python。如果不勾选，你就得输入一长串完整的安装路径才行，非常麻烦。
    *   **建议**：**务必确保它勾选着**（安装程序默认通常会勾好），千万别取消！

*   **Precompile standard library（预编译标准库）**
    *   **通俗解释**：相当于提前把 Python 自带的“官方工具箱”整理好，这样你以后使用它们的时候，打开速度会快一点点。对电脑没坏处，只是安装时会多花一两分钟。
    *   **建议**：**勾上就行**，对新手没影响，图个以后速度快。

*   **Download debugging symbols / Download debug binaries（下载调试符号/调试文件）**
    *   **通俗解释**：这是给“Python 医生”（高级开发人员）准备的“诊断工具”。当 Python 本身出现极其深奥的崩溃问题时，用来排查定位的。
    *   **建议**：**普通用户完全不需要**，会白白占用磁盘空间，**取消勾选**即可。

<div style="text-align:center">
  <img src="/img_2/QQ截图20251021164639.png" alt="图三" style="width:50%;" >
</div>

安装完毕后，出现如下画面，直接点击 **Close**：
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021164848.png" alt="图四" style="width:50%;" >
</div>

## 环境变量的配置
如果你没有点击 **Add python.exe to PATH** 这一步或者你忘记是否点击这一步，这里建议你可以再次点击安装包，它将出现如下界面，然后点击 **Uninstall** 即可开始卸载
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021165014.png" alt="图五" style="width:50%;" >
</div>

出现如下界面表示卸载成功，然后你可以回到上一步安装 Python 中重新安装 Python ，在 Python 安装的第一页点击 **Add python.exe to PATH**
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021165201.png" alt="图六" style="width:50%;" >
</div>

当然，这个自动环境配置出现于 **Python 3.3** 版本，如果你想安装这个版本之前的 Python 你需要手动进行环境配置，如果你不想进行卸载重新安装这样的操作，而是想自己配置环境的话你也可以继续看下面的步骤
打开**设置**里的**系统信息**然后点击**高级系统设置**，再点击**环境变量**打开到对应环境配置界面
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021165435.png" alt="图七" style="width:50%;" >
</div>

另一种方式是，右击桌面上的**此电脑**或者**文件管理器**中的**此电脑**选择**属性**打开系统信息界面再选择**高级系统设置**打开**环境变量**
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021165546.png" alt="图八" style="width:50%;" >
</div>

**文件管理器**如上图所示，是菜单栏长的这个像文件夹的软件
如果你还是找不到文件管理器，你可以再从刚刚下载的地方选择**在文件夹中显示**，打开文件管理器在左边能找到**此电脑**

或者你还可以通过命令行打开文件管理器，只需要像前文中在键盘上**同时按住 win+R键**，然后输入 **cmd** 按下回车就可以打开命令行
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021133511.png" alt="图九" style="width:50%;" >
</div>

然后输入 **explorer** 这个指令，系统即会弹出文件管理器
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021170031.png" alt="图十" style="width:50%;" >
</div>

打开环境配置后，在下面的**系统变量**中双击 **Path**
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021170154.png" alt="图十一" style="width:50%;" >
</div>

然后点击**新建**，接着**输入 Python 的路径**，再点击**确定**。如果你刚刚选择的是默认安装，那么路径应该是类似于以下的路径：

C:\Users\DCY\AppData\Local\Programs\Python\Python312\

其中Users\后面跟的是你个人的用户名，Python 后跟的应该是你 Python 对应的版本，你可以先在文件管理器中尝试寻找到自己电脑上的 Python 路径。如果你是自定义安装，这里的路径就是自己自定义选择的路径
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021170358.png" alt="图十二" style="width:50%;" >
</div>

如果你是在安装的时候选择自动配置环境的话，你可以双击**用户变量**的 **Path** 中查看到 Python 安装时候自动帮你配置好的环境
<div style="text-align:center">
  <img src="/img_2/QQ截图20251021170535.png" alt="图十三" style="width:50%;" >
</div>

如果你想知道用户变量和系统变量的不同你可以看本文后面的问题环节

你也可以使用命令行来配置环境

如前文在键盘上同时按住 **win+R键**，然后输入 **cmd** ，然后按下回车，打开命令行后输入**path=%path%;C:\Users\DCY\AppData\Local\Programs\Python\Python312** 加粗部分是对应的路径名，可以看前面讲解怎么找到路径名

## 检测安装是否成功
这一步和默认安装的步骤是一样的。让我们打开命令行（以Windows系统为例）
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