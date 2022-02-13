# React脚手架学习注意要点

## 一、todoList案例相关知识点

    1. 拆分组件、实现静态组件。盘点：className、Style的写法
    2. 动态初始化列表，如何确定将数据放在哪个组件的state中？
        —— 某个组件使用：放在其自身的state中
        —— 某些组件使用：放在他们共同的父组件state中（官方称此操作为：状态提升）
    3. 关于父子之间通信：
        1.【父组件】给【子组件】传递数据：通过props传递
        2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
    4. 注意defaultCheck 和 chekced的区别，类似的还有defaultValue 和 value
    5. 状态在哪里，操作状态的方法就在哪里 

## 二、github搜索案例相关知识点

    1.设计状态时要考虑全面，例如带有网络请求的组件, 要考虑请求失败怎么办
    2.ES6小知识点：解构赋值+重命名
        
        let obj = {a:{b:1}};
        const {a} = obj; //传统解构赋值
        const {a:{b}} = obj; //连续解构赋值
        const {a:{b:value}} = obj; //连续解构赋值+重命名
        
    3.消息订阅与发布机制
        1.先订阅，再发布（理解：有一种隔空对话的感觉）
        2.适用于任意组件间通信
        3.要在组件的componentWillUnmount中取消订阅
    4.fetch发送请求（关注分离的设计思想）
        
        try{
          const response = await fetch(`http://localhost:3000/search/users2?q=${keyWord}`)
          const data = await response.json()
          console.log(data)
        })
        } catch(error){
          console.log('请求出错', error)
        }

## 三、路由的基本使用

    1. 明确好界面中的导航区、展示区
    2. 导航区的a标签改为Link标签
        <Link to="/xxxxxx">Demo</Link>
    3. 展示区写Route标签进行路径的匹配
        <Routes>
          <Route path="/xxxxxx" element={<Demo/>}/>
        </Routes>
    4. <App/>的最外侧包裹了一个<BrowserRouter>或<HashRouter>

## 四、路由组件与一般组件

      1. 写法不同：
        一般组件：<Demo/>
        路由组件：<Route path="/demo" element={<Demo/>}>
      2. 存放位置不同
        一般组件：components
        路由组件：pages

## 五、NavLink与封装NavLink

      1. NavLink可以实现路由链接的高亮，通过className 三目运算符
      2. 标签体内容是一个特殊的标签属性
      3. 通过this.props,childeren可以获取标签体内容

## 六、解决多缓存路径刷新页面样式丢失的问题

      1. public/index.html 中引入样式时不屑./写/(常用)
      2. public/index.html 中引入样式时不屑./写%PUBLIC_URL%(常用)
      3. 使用HashRouter

## 七、react-router-dom v6 移除Redirect后的解决方案

    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>

