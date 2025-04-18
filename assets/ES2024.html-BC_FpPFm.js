import{_ as s,c as a,a as p,o as t}from"./app-BPEs8aMM.js";const e={};function o(l,n){return t(),a("div",null,n[0]||(n[0]=[p(`<p><code>ECMAScript2024 (ES15)</code> 即将发布，全新的版本带来了许多的新特性，其中有 几个全新的 <code>JS</code> 方法，可以大幅度提升我们的工作效率，从而让我们得到更多的摸鱼时间。</p><h4 id="promise-withresolvers" tabindex="-1"><a class="header-anchor" href="#promise-withresolvers"><span>Promise.withResolvers</span></a></h4><p>这个功能引入了一个新方法来创建一个 <code>promise</code>，直接返回 <code>resolve</code> 和 <code>reject</code> 的回调。使用 <code>Promise.withResolvers</code> ，我们可以创建直接在其执行函数之外 <code>resolve</code> 和 <code>reject</code>。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> <span class="token punctuation">[</span>promise<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">]</span> <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">withResolvers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">它完全等价于<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span> rej</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  resolve <span class="token operator">=</span> res<span class="token punctuation">;</span></span>
<span class="line">  reject <span class="token operator">=</span> rej<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 只是它更简洁，并且不需要使用 let。</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="object-groupby" tabindex="-1"><a class="header-anchor" href="#object-groupby"><span>Object.groupBy()</span></a></h4><p><code>Object.groupBy()</code> 方法是一项新添加的功能，允许我们按照特定属性将数组中的 对象分组，从而使数据处理变得更加容易。当分组名称可以用字符串表示时，应使用此方法。如果你需要使用某个任意值作为键来对元素进行分组，请改用 <code>Map.groupBy()</code> 方法。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> inventory <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;芦笋&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;蔬菜&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;香蕉&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;水果&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;山羊&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;肉&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">23</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;樱桃&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;水果&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;鱼&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;肉&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">22</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">下面的代码根据元素的 type 属性的值对元素进行分组。</span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">groupBy</span><span class="token punctuation">(</span>inventory<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> type <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 结果是：</span>
<span class="line">{</span>
<span class="line">  蔬菜: [</span>
<span class="line">    { name: &quot;芦笋&quot;, type: &quot;蔬菜&quot;, quantity: 5 },</span>
<span class="line">  ],</span>
<span class="line">  水果: [</span>
<span class="line">    { name: &quot;香蕉&quot;, type: &quot;水果&quot;, quantity: 0 },</span>
<span class="line">    { name: &quot;樱桃&quot;, type: &quot;水果&quot;, quantity: 5 }</span>
<span class="line">  ],</span>
<span class="line">  肉: [</span>
<span class="line">    { name: &quot;山羊&quot;, type: &quot;肉&quot;, quantity: 23 },</span>
<span class="line">    { name: &quot;鱼&quot;, type: &quot;肉&quot;, quantity: 22 }</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line">*/</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="temporal" tabindex="-1"><a class="header-anchor" href="#temporal"><span>Temporal</span></a></h4><p><code>Temporal</code> 提案引入了一个新的 API，以更直观和高效的方式 处理日期和时间。例如，<code>Temporal API</code> 提供了新的日期、时间和持续时间的数据类型，以及用于创建、操作和格式化这些值的函数。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> today <span class="token operator">=</span> Temporal<span class="token punctuation">.</span>PlainDate<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2023</span><span class="token punctuation">,</span> <span class="token literal-property property">month</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token literal-property property">day</span><span class="token operator">:</span> <span class="token number">19</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>today<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 2023-11-19</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> duration <span class="token operator">=</span> Temporal<span class="token punctuation">.</span>Duration<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">hours</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">minutes</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> tomorrow <span class="token operator">=</span> today<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>duration<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tomorrow<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: 2023-11-20</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="records-和-tuples" tabindex="-1"><a class="header-anchor" href="#records-和-tuples"><span>Records 和 Tuples</span></a></h4><p><code>Records</code> 和 <code>Tuples</code> 是全新的数据结构，提供了一种更简洁和类型安全的方式来创建对象和数组。</p><ul><li>Records 类似于对象，但具有具体类型的固定属性集。</li><li>Tuples 类似于数组，但具有固定长度，每个元素可以具有不同类型。</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> record <span class="token operator">=</span> #<span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2024</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: JavaScript</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器"><span>装饰器</span></a></h4><p><code>装饰器（Decorators）</code>是一种提议的语法，用于添加元数据或修改类、函数或属性的行为。装饰器可用于实现各种功能，如日志记录、缓存和依赖注入。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">logged</span><span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> descriptor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> original <span class="token operator">=</span> descriptor<span class="token punctuation">.</span>value<span class="token punctuation">;</span></span>
<span class="line">  descriptor<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Calling </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> with</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">original</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> descriptor<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token punctuation">{</span></span>
<span class="line">  @logged</span>
<span class="line">  <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">e<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：[1, 2]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const i=s(e,[["render",o],["__file","ES2024.html.vue"]]),r=JSON.parse('{"path":"/blogs/JavaScript/2025/ES2024.html","title":"ES2024","lang":"en-US","frontmatter":{"title":"ES2024","date":"2024/4/20","tags":["ES2024"],"categories":["JavaScript"]},"headers":[],"git":{},"filePathRelative":"blogs/JavaScript/2025/ES2024.md"}');export{i as comp,r as data};
