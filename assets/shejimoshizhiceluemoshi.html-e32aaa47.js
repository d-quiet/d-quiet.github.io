import{_ as n,o as s,c as a,e}from"./app-2dc9ef31.js";const p={},t=e(`<h3 id="if-else的缺点😑" tabindex="-1"><a class="header-anchor" href="#if-else的缺点😑" aria-hidden="true">#</a> <code>if-else</code>的缺点😑:</h3><ul><li>虽然能跑，但是维护起来确实很难受，每次都要在一个方法里面增加逻辑，生怕搞错，要是涉及到支付功能，分分钟炸锅</li><li>不知道之前写的逻辑在哪里，一个方法几百行逻辑，而且是不同功能点冗余在一起！这可能让我牺牲大量时间在这查找调试中</li><li>当你交接给新同事的时候，这个要做好新同事的白眼和嘲讽，这代码简直是个易碎的玻璃，一碰就碎！这代码简直是个世界十大奇迹！</li></ul><h3 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h3><blockquote><p>大致可以分三大类：<code>创建型</code>，<code>结构型</code>，<code>行为型</code> 创建型：工厂模式 ，单例模式，原型模式 结构型：装饰器模式，适配器模式，代理模式 行为型：策略模式，状态模式，观察者模式</p></blockquote><p>浅学一哈<code>策略模式</code></p><p>场景：水果打折</p><ul><li>当购物类型为“苹果”时，满 100 - 20，不满 100 打 9 折</li><li>当购物类型为“香蕉”时，满 100 - 30，不满 100 打 8 折</li><li>当购物类型为“葡萄”时，满 200 - 50，不叠加</li><li>当购物类型为“梨”时，直接打 5 折</li></ul><p>然后你根据传入的类型和金额，写一个通用逻辑出来, 当我是<code>if-else侠</code>的时候，我估计会这样写：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>funcion <span class="token function">getPrice</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span>money<span class="token punctuation">)</span>
    <span class="token comment">//处理苹果</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&#39;apple&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>money <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> money <span class="token operator">-</span> <span class="token number">20</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> money <span class="token operator">*</span> <span class="token number">0.9</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//处理香蕉</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&#39;banana&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>money <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> money <span class="token operator">-</span> <span class="token number">30</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> money <span class="token operator">*</span> <span class="token number">0.8</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//处理葡萄</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&#39;grape&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>money <span class="token operator">&gt;=</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> money <span class="token operator">-</span> <span class="token number">50</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> money
    <span class="token punctuation">}</span>
    <span class="token comment">//处理梨</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&#39;pear&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> money <span class="token operator">*</span> <span class="token number">0.5</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题所在:</p><ol><li>一个方法里面处理了四个逻辑，要是里面的哪个代码块出事了，调试起来也麻烦</li><li>假如我们要增加多一种水果的逻辑，就又要在这个方法中修改，然后你修改完这个方法，就跟测试说，我在这个方法增加了多一个种水果，可能要重新回归这个方法，那你看测试增加了多少工作量</li></ol><blockquote><p>消灭if-else, 支持扩展但是不影响原本功能！</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fruitsPrice <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">apple</span><span class="token punctuation">(</span><span class="token parameter">money</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>money <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> money <span class="token operator">-</span> <span class="token number">20</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> money <span class="token operator">*</span> <span class="token number">0.9</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">banana</span><span class="token punctuation">(</span><span class="token parameter">money</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>money <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> money <span class="token operator">-</span> <span class="token number">30</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> money <span class="token operator">*</span> <span class="token number">0.8</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">grape</span><span class="token punctuation">(</span><span class="token parameter">money</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>money <span class="token operator">&gt;=</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> money <span class="token operator">-</span> <span class="token number">50</span>
     <span class="token punctuation">}</span>
     <span class="token keyword">return</span> money
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">pear</span><span class="token punctuation">(</span><span class="token parameter">money</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span> money <span class="token operator">*</span> <span class="token number">0.5</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先定义一个fruitPrice对象,里面都是各种水果价格的映射关系 然后我们调用的时候可以这样</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span>money</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> fruitsPrice<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们要扩展新水果的时候</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>fruitsPrice<span class="token punctuation">.</span><span class="token function-variable function">orange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">money</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span> money<span class="token operator">*</span><span class="token number">0.4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>综上所述： 用策略模式重构这个原本的逻辑，方便扩展，调试，清晰简明，当然这只是一个模式重构的情况，可能还有更优的情况</p></blockquote>`,18),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","shejimoshizhiceluemoshi.html.vue"]]);export{r as default};
