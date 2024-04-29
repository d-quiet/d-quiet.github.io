import{_ as n,o as i,c as e,e as s}from"./app-2dc9ef31.js";const l={},d=s(`<h2 id="在setup中使用" tabindex="-1"><a class="header-anchor" href="#在setup中使用" aria-hidden="true">#</a> 在Setup中使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script setup&gt;
    import {
        onShow,
        onHide,
        onReady 
    } from &#39;@dcloudio/uni-app&#39;
    
    onShow(()=&gt;{
        console.log(&#39;setup中的onShow&#39;);
    })
    
    onHide(()=&gt;{
        console.log(&#39;setup中的onHide&#39;);
    })
    
    onReady(()=&gt;{
        console.log(&#39;setup中的onReady&#39;);
})
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一般使用" tabindex="-1"><a class="header-anchor" href="#一般使用" aria-hidden="true">#</a> 一般使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;script&gt;
   // 应用生命周期,只能在app.vue内监听
   export default {
       // 当uni-app 初始化完成时触发（全局只触发一次）
       onLaunch: function() {
           console.log(&#39;App 初始化完成&#39;)
       },
       // 当 uni-app 启动，或从后台进入前台显示
       onShow: function() {
           console.log(&#39;App 显示&#39;)
       },
       // 当 uni-app 从前台进入后台
       onHide: function() {
           console.log(&#39;App 隐藏&#39;)
       },
       // 当 uni-app 报错时触发
       onError: function(errString) {
           console.log(&#39;App 出错&#39; + errString);
       },
       // 页面不存在监听函数
       onPageNotFound: function() {
           console.log(&#39;App 页面不存在&#39;);
       },
       // 监听系统主题变化
       onThemeChange: function() {
           console.log(&#39;App 系统主题变化&#39;);
       }
   }
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[d];function v(c,r){return i(),e("div",null,a)}const o=n(l,[["render",v],["__file","uniappzaisetupzhongshiyongshengmingzhouqihanshu.html.vue"]]);export{o as default};
