import{_ as n,o as a,c as s,e}from"./app-2dc9ef31.js";const t={},p=e(`<h2 id="需求描述" tabindex="-1"><a class="header-anchor" href="#需求描述" aria-hidden="true">#</a> 需求描述</h2><p>在使用<code>vue-router</code>的同时使用<code>keep-alive</code>是一个很常见需求。用户可能会希望某些页面进行<code>keep-alive</code>缓存，以方便在路由之间跳转时保留之前操作的信息。 但是在<code>keep-alive</code>的同时某些情况下我们又不希望它进行缓存，我们希望某些页面是缓存的，而某些页面不进行缓存。</p><h2 id="项目搭建" tabindex="-1"><a class="header-anchor" href="#项目搭建" aria-hidden="true">#</a> 项目搭建</h2><p>先搭建一个简单的项目</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>import { createRouter, createWebHistory} from &quot;vue-router&quot;;

export const routes = [
    {
        path: &#39;/&#39;,
        name: &quot;home&quot;,
        component: () =&gt; import(&quot;@/pages/home.vue&quot;),
        meta: {
            keepAlive: true,
            title: &#39;首页&#39;,
        }
    },
    {
        path: &#39;/about&#39;,
        name: &quot;about&quot;,
        component: () =&gt; import(&quot;@/pages/about.vue&quot;),
        meta: {
            keepAlive: false,
            title: &quot;关于&quot;
        }
    },
    {
        path: &quot;/config&quot;,
        name: &quot;config&quot;,
        component: () =&gt; import(&quot;@/pages/config.vue&quot;),
        meta: {
            keepAlive: true,
            title: &quot;配置&quot;
        },
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes,
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个页面只放个input</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      Home
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App.vue初始状态</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>route in routes<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>route.name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>route.path<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin-left</span><span class="token punctuation">:</span> 16px</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>{{ route.meta.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><p>简单解决方案：使用两个<code>router-view</code>分别显示不同的路由</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$route.meta.keepAlive<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- 这里是会被缓存的视图组件，比如 Home！ --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!$route.meta.keepAlive<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 这里是不被缓存的视图组件，比如 Edit！ --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>智慧解决方案</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{Component, route}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Component<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>route.path + (route.meta.keepAlive ? &#39;&#39; : Math.random())<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code> router-view</code> 的<code>v-slot</code>中，我们通过对象解构的方式获取了两个属性：<code>Component</code> 和 <code>route</code>。<code>Component</code> 表示当前匹配到的视图组件，而 <code>route</code> 则表示当前的路由对象。 然后，使用 <code>keep-alive</code> 包裹了一个动态的 <code>component</code> 元素。<code>component</code> 元素通过动态绑定的方式将 <code>Component</code> 绑定到 <code>:is</code> 属性上，就能动态地渲染不同的视图组件。 在 <code>component</code> 元素的 <code>:key </code>属性中，生成一个唯一的 <code>key</code> 值。这里的 <code>key</code> 值由当前路由的路径和一个随机数构成。如果当前路由的 <code>meta</code> 中有<code>keepalive</code>，就用一段空字符作为<code>key</code>,保证缓存生效。否则，使用随机数作为 <code>key</code> 的一部分，以强制重新渲染视图组件。</p><p>注： 在渲染列表的时候，通常需要指定<code>key</code>参数，有时候不指定<code>key</code>参数的代码，<code>lint</code>插件还会报错，浏览器控制台也会显示警告。 <code>key</code>参数不仅可以提高渲染速度，在<code>vue</code>进行<code>diff</code>算法时提供<code>key</code>可以加快<code>diff</code>运算，还可以强制重新渲染组件。 正是因为<code>diff</code>算法中<code>key</code>的比较属于第一优先级的位置，只要组件的<code>key</code>变化了，<code>vue</code>会认为这个组件已经变化，这时将不再判断组件的其他成分，直接构建一个新的组件覆盖原组件。</p><p>这个智慧解决方案就利用了<code>key</code>的这一特性！</p>`,17),o=[p];function c(l,i){return a(),s("div",null,o)}const d=n(t,[["render",c],["__file","Vue3yemianhuancun.html.vue"]]);export{d as default};
