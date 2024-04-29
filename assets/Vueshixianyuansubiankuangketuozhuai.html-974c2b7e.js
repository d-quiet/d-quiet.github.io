import{_ as s,o as n,c as a,e}from"./app-2dc9ef31.js";const i={},t=e(`<h3 id="v-dragresize" tabindex="-1"><a class="header-anchor" href="#v-dragresize" aria-hidden="true">#</a> <code>v-dragresize</code></h3><p>在Vue中，<code>v-dragresize</code>指令会帮助您，便捷的拖动Dom的边来改变元素的大小，同时支持可选联动其他Dom的css属性同时改变</p><h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><p>在拖动元素边框的时候，我们最关心的无非就是元素的哪条边可以拖动，以及拖动之后，修改的是哪一个<code>css</code>属性，以及可能存在联动其他元素的css属性，下图只展示了最基础的拖动。<code>v-dragresize</code>完全可以通过参数配置完成复杂的拖动效果</p><h3 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载" aria-hidden="true">#</a> 1.下载</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>pnpm i v<span class="token operator">-</span>dragresize <span class="token operator">--</span>save
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-es引入" tabindex="-1"><a class="header-anchor" href="#_2-es引入" aria-hidden="true">#</a> 2.ES引入</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> dragresize <span class="token keyword">from</span> <span class="token string">&#39;v-dragresize&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 或者</span>
<span class="token keyword">const</span> dragresize <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;v-dragresize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 然后在Vue中注册为全局指令</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>dragresize<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-简单使用" tabindex="-1"><a class="header-anchor" href="#_3-简单使用" aria-hidden="true">#</a> 3.简单使用</h3><ol><li>指令所在元素的<code>position</code>不为<code>static</code></li><li>传入<code>dragBorder</code> &amp;&amp; <code>setCssProperty</code></li></ol><p>在vue的单文件组件中，通过指令的方式，按照个人喜好，<code>v-dragresize</code>需要传入一个配置，可用计算属性或者函数<code>return</code>出来:</p><ul><li><code>dragBorder</code>用于告诉<code>v-dragresize</code>，这个元素那条边是可拖动的</li><li><code>setCssProperty</code>用于设定在拖动时，<code>v-dragresize</code>需要修改元素的什么css属性</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;div class=&quot;playground&quot; v-dragresize=&quot;dragConfig&quot;&gt;&lt;/div&gt;

...
&lt;style scoped&gt;
.playground {
  ...
  position: relative;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">dragConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">dragBorder</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">setCssProperty</span><span class="token operator">:</span> <span class="token string">&quot;padding-top&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为什么返回的是数组?因为您可以设置元素的四条边都可拖动!</strong></p>`,15),o=[t];function c(d,r){return n(),a("div",null,o)}const l=s(i,[["render",c],["__file","Vueshixianyuansubiankuangketuozhuai.html.vue"]]);export{l as default};
