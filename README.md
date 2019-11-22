## 个人网站搭建
技术栈： react + gatsby
### 手把手教你搭建属于自己的在线简历
#### 1. gatsby new gatsby-website
gatsby[https://www.gatsbyjs.org/]是react推荐创建静态网页的生成器。

#### 2. 设计好自己的页面板块((由于是个人在线简历，所以内容和简历格式一样):
如网页必填基本样式:
<br>
加载动画: loader.js 使用animeJs[https://www.animejs.cn/documentation/]的svg
动画绘制
<br>
头部组件: header.js
<br>
导航栏组件：nav.js
<br>
网页内容划分:
<br>
about-page : 姓名 学校 联系方式 求职岗位 个人擅长技术栈
<br>
jobs-page:  实习经历
<br>
projects-page: 项目经验
<br>
hero-page: 在校期间获得的荣誉证书
<br>
result-page: 自我评价
<br>
featured-page: 对未来的职业规划 
<br>
侧边个人联系信息展示
如：email, github, blog, phone等
<br>
尾部个人信息展示
如：email, github, blog, phone等


#### 3. 数据加载
<br>
使用GraphQL加载数据到react中, 组件间的值传递使用prop-components,

###### 为什么要使用GraphQL来加载数据？
GraphQL返回的数据以与你要求的形状完全相同的形式返回，而不必在网络上传输，因为它已在构建时收集， 因此无需担心请求和等待数据，只需使用GraphQL查询查询所需的数据，该数据就会在需要时显示。由于所有数据都在数据层中合并，因此甚至可以同时查询多个源。详情戳[https://www.gatsbyjs.org/docs/graphql-concepts/]

###### 什么是GraphQL？
GraphQL是一种查询语言（其名称的QL部分）。如果熟悉SQL，它的工作方式非常相似。使用特殊的语法，可以在组件中描述所需的数据，然后将这些数据提供给你。

###### 如何使用GraphQL？
Gatsby使用GraphQL启用页面和StaticQuery组件来声明它们及其子组件所需的数据。然后，当组件需要时，Gatsby可使这些数据在浏览器中可用。来自任何数量来源的数据都可以在一个统一的层中进行查询

#### 4.前端小技巧
###### 1.使用styled-components开发css
styled-components 是一个常用的 css in js 类库。和所有同类型的类库一样，通过 js 赋能解决了原生 css 所不具备的能力，比如变量、循环、函数等。诸如 sass&less 等预处理可以解决部分 css 的局限性，但还是要学习新的语法，而且需要对其编译，其复杂的 webpack 配置也总是让开发者抵触。而 styled-components 很好的解决了这些问题，很适合 React 技术栈的项目开发。
<br>
不懂可戳[https://zhuanlan.zhihu.com/p/28876652]

###### 2.使用scrollreveal显示向下滑动时候的动画效果
演示戳[https://scrollrevealjs.org/]

###### 3.

#### 5.样式编写
每个页面采用样式分离的格式 先css,然后使用HTML 数据传入使用propTypes定制数据
这里大家就可以发挥自己的想象啦， 这里给大家推荐一些好看的网站，大家按照自己的审美取其精华去其糟粕，再加以自己的创新便完成了在线个人简历，希望能够对大家有所帮助， 记得给个start哦～ 