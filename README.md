## 页面滚动阻尼效果实现

### 功能描述
* 要求

    * 页面分为AB两个区域
    * 当手机可视区的底部接触到 “阻尼带” 的时候，有个上拉弹性过程

        * 当上拉到一定阈值程度就直接把B区顶部弹到手机可视区的顶部，让可视区从B区开始显示
        * 当上拉程度未到阈值，就回弹复原
    * 当手机可视区从B区向上滚动时候，B区顶部接触带“阻尼带”，有个下拉弹性过程

        * 当下拉到一定阈值程度就直接把A区底部弹到手机可视区的底部，让可视区从A区底部向上开始显示
        * 当下拉程度未到阈值，就回弹复原
* 提示

    * 可用jQuery实现

### 使用方法
1. 克隆仓库：`git clone https://github.com/BeckyWang/h5-damping-effect.git`
2. 安装依赖：`npm install `可使用淘宝镜像cnpm
3. 本地测试：`npm run dev` 等模块编译加载完成后，浏览器就会自动打开。
4. 压缩编译：`npm run dist` 用于压缩编译混淆代码
    - `npm run server` 开启node http服务（默认8088端口）。
    - 浏览器访问localhost:8088/index.html，必须先执行（`npm run dist`）。

具体实现思路见[我的博客](https://beckywang.github.io/h5-damping-effect.html#more)。