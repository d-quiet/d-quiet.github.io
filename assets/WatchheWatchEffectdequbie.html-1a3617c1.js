import{_ as n,o as s,c as a,e as t}from"./app-2dc9ef31.js";const p={},e=t(`<h1 id="watch-和-watcheffect-都是监听器-watcheffect-是一个副作用函数。" tabindex="-1"><a class="header-anchor" href="#watch-和-watcheffect-都是监听器-watcheffect-是一个副作用函数。" aria-hidden="true">#</a> watch 和 watchEffect 都是监听器，watchEffect 是一个副作用函数。</h1><h2 id="它们的区别在于" tabindex="-1"><a class="header-anchor" href="#它们的区别在于" aria-hidden="true">#</a> 它们的区别在于:</h2><ul><li>watch ：既要指明监视的数据源，也要指明监视的回调。</li><li>而 watchEffect 可以自动监听数据源作为依赖。不用指明监视哪个数据，监视的回调中用到哪个数据，那就监视哪个数据。</li><li>watch 可以访问改变之前和之后的值，watchEffect 只能获取改变后的值。</li><li>watch 运行的时候不会立即执行，值改变后才会执行，而 watchEffect 运行后可立即执行。这一点可以通过 watch 的配置项 immediate 改变。</li><li>watchEffect有点像 computed: <ul><li>但 computed 注重的计算出来的值（回调函数的返回值）， 所以必须要写返回值。</li><li>而 watcheffect注重的是过程（回调函数的函数体），所以不用写返回值。</li></ul></li></ul><h2 id="watch与-vue2-x中-watch-配置功能一致-但也有两个小坑" tabindex="-1"><a class="header-anchor" href="#watch与-vue2-x中-watch-配置功能一致-但也有两个小坑" aria-hidden="true">#</a> watch与 vue2.x中 watch 配置功能一致，但也有两个小坑</h2><ul><li>监视 reactive 定义的响应式数据时，oldValue 无法正确获取，强制开启了深度监视（deep配置失效）</li><li>监视 reactive 定义的响应式数据中某个属性时，deep配置有效。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;你好啊&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>
	<span class="token literal-property property">job</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token literal-property property">j1</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token literal-property property">salary</span><span class="token operator">:</span><span class="token number">20</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//情况1：监视ref定义的响应式数据</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;sum变化了&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>immediate<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//情况2：监视多个ref定义的响应式数据</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>sum<span class="token punctuation">,</span> msg<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;sum或msg变化了&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>immediate<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//情况3：监视reactive定义的响应式数据</span>
    <span class="token comment">//若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue，且强制开启了深度监视。</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;person变化了&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span>immediate<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">//此处的deep配置不再生效。</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//情况4：监视reactive所定义的一个响应式数据中的某个属性</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>person<span class="token punctuation">.</span>name<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;person.name变化了&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//情况5：监视reactive所定义的一个响应式数据中的某些属性</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>person<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>person<span class="token punctuation">.</span>age<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;person.name或person.age变化了&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//特殊情况：</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>person<span class="token punctuation">.</span>job<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span> oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;person.job变化了&quot;</span><span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> oldValue<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(l,u){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","WatchheWatchEffectdequbie.html.vue"]]);export{k as default};