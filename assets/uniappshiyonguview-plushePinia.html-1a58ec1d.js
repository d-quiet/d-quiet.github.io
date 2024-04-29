import{_ as e,o as i,c as n,e as s}from"./app-2dc9ef31.js";const a={},d=s(`<h2 id="使用uview-plus" tabindex="-1"><a class="header-anchor" href="#使用uview-plus" aria-hidden="true">#</a> 使用uview-plus</h2><h4 id="一、下载插件并导入hbuilderx" tabindex="-1"><a class="header-anchor" href="#一、下载插件并导入hbuilderx" aria-hidden="true">#</a> 一、下载插件并导入HBuilderX</h4><pre><code>在uniapp插件市场搜索\`uview plus\`，选择插件后点击右边的\`下载插件并导入HBuilderX\`选择刚创建的项目进行导入即可
</code></pre><h4 id="二、在项目中引入uview-plus" tabindex="-1"><a class="header-anchor" href="#二、在项目中引入uview-plus" aria-hidden="true">#</a> 二、在项目中引入uview-plus</h4><h5 id="第一步-在项目根目录中的main-js中-引入并使用uview-plus" tabindex="-1"><a class="header-anchor" href="#第一步-在项目根目录中的main-js中-引入并使用uview-plus" aria-hidden="true">#</a> 第一步：在项目根目录中的main.js中，引入并使用uview-plus</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// main.js
import uviewPlus from &#39;@/uni_modules/uview-plus&#39;
 
// #ifdef VUE3
import { createSSRApp } from &#39;vue&#39;
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  return {
    app
  }
}
// #endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第二步-在项目根目录的uni-scss中引入uview-plus的全局scss主题文件" tabindex="-1"><a class="header-anchor" href="#第二步-在项目根目录的uni-scss中引入uview-plus的全局scss主题文件" aria-hidden="true">#</a> 第二步：在项目根目录的uni.scss中引入uview-plus的全局SCSS主题文件</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* uni.scss */
@import &#39;@/uni_modules/uview-plus/theme.scss&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第三步-在app-vue的style中引入uview-plus基础样式" tabindex="-1"><a class="header-anchor" href="#第三步-在app-vue的style中引入uview-plus基础样式" aria-hidden="true">#</a> 第三步：在App.vue的style中引入uview-plus基础样式</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style lang=&quot;scss&quot;&gt;
    /* 需要给style标签加入lang=&quot;scss&quot;属性 */
    @import &quot;@/uni_modules/uview-plus/index.scss&quot;;
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="第四步-在使用的页面中使用uview-plus的组件-效果展示" tabindex="-1"><a class="header-anchor" href="#第四步-在使用的页面中使用uview-plus的组件-效果展示" aria-hidden="true">#</a> 第四步：在使用的页面中使用uview-plus的组件，效果展示</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- index.vue --&gt;
&lt;template&gt;
  &lt;view&gt;
    &lt;u-button type=&quot;primary&quot; :plain=&quot;true&quot; :hairline=&quot;true&quot; text=&quot;细边&quot;&gt;&lt;/u-button&gt;
  &lt;/view&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用pinia" tabindex="-1"><a class="header-anchor" href="#使用pinia" aria-hidden="true">#</a> 使用Pinia</h2><blockquote><p>在 HBuilder X 下不需要安装Pinia，可以直接使用</p></blockquote><h4 id="一、在项目根目录中的main-js中-引入并使用pinia" tabindex="-1"><a class="header-anchor" href="#一、在项目根目录中的main-js中-引入并使用pinia" aria-hidden="true">#</a> 一、在项目根目录中的main.js中，引入并使用Pinia</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//main.js
import App from &#39;./App&#39;
import * as Pinia from &#39;pinia&#39;;
 
// #ifdef VUE3
import { createSSRApp } from &#39;vue&#39;
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia());
  return {
    app,
    Pinia  //此处必须返回Pinia
  }
}
// #endif
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="二、文件中创建store文件夹-store中新建user-js文件-编写共享状态代码" tabindex="-1"><a class="header-anchor" href="#二、文件中创建store文件夹-store中新建user-js文件-编写共享状态代码" aria-hidden="true">#</a> 二、文件中创建store文件夹，store中新建user.js文件，编写共享状态代码</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import { defineStore } from &#39;pinia&#39;
//创建用户小仓库
const useUserStore = defineStore(&#39;User&#39;,{
  state:()=&gt;{
    return {
      count:0
    }
  }
})
 
//暴露用户小仓库
export default useUserStore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="三、在页面中调用共享数据-效果展示" tabindex="-1"><a class="header-anchor" href="#三、在页面中调用共享数据-效果展示" aria-hidden="true">#</a> 三、在页面中调用共享数据，效果展示</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//index.vue
&lt;template&gt;
  &lt;view&gt;
    &lt;u-button type=&quot;primary&quot; :plain=&quot;true&quot; :hairline=&quot;true&quot; text=&quot;细边&quot; @click=&quot;add&quot;&gt;&lt;/u-button&gt;
  &lt;/view&gt;
&lt;/template&gt;
 
&lt;script setup&gt;
//引入用户相关的小仓库
import useUserStore from &#39;@/store/user.js&#39;
const useStore = useUserStore()
//定义button点击事件add
const add = ()=&gt;{
 console.log( useStore.count++);
}
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[d];function u(t,r){return i(),n("div",null,l)}const c=e(a,[["render",u],["__file","uniappshiyonguview-plushePinia.html.vue"]]);export{c as default};
