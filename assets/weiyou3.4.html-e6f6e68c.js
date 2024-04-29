import{_ as e,o as d,c as i,e as n}from"./app-2dc9ef31.js";const a={},t=n(`<h3 id="解析器速度提高-2-倍-优化-sfc-的构建性能" tabindex="-1"><a class="header-anchor" href="#解析器速度提高-2-倍-优化-sfc-的构建性能" aria-hidden="true">#</a> 解析器速度提高 2 倍，优化 SFC 的构建性能</h3><pre><code>在 Vue 3.4 中，我们完全重写了模板解析器。之前，Vue 使用递归下降解析器，该解析器依赖一大坨正则表达式和前向搜索。新的解析器使用基于 htmlparser2 的状态机 tokenizer（分词器），它有且仅有迭代整个模板字符串一次。结果是对于所有尺寸的模板而言，解析器始终优化 2 倍。多亏了我们广泛的测试用例和 ecosystem-ci，它也 100% 向后兼容 Vue 终端用户。
</code></pre><h3 id="更高效的响应性系统" tabindex="-1"><a class="header-anchor" href="#更高效的响应性系统" aria-hidden="true">#</a> 更高效的响应性系统</h3><blockquote><p>Vue 3.4 还对响应性系统进行了重大重构，旨在优化计算属性重新计算的效率。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const count = ref(0)
const isEven = computed(() =&gt; count.value % 2 === 0)

watchEffect(() =&gt; console.log(isEven.value)) // 打印 true

count.value = 2 // 再次打印 true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>在 Vue 3.4 之前，每当 count.value 变更时，即使计算结果不变，也会触发 watchEffect 的回调。通过 Vue 3.4 优化之后，现在当且仅当仅计算结果实际变更时，才会触发回调。
</code></pre><h3 id="definemodel-现已稳定" tabindex="-1"><a class="header-anchor" href="#definemodel-现已稳定" aria-hidden="true">#</a> <code>defineModel</code> 现已稳定</h3><pre><code>defineModel 是一个新的 &lt;script setup&gt; 宏，旨在简化支持 v-model 的组件的实现。它之前作为实验性功能在 Vue 3.3 中发布，并在 Vue 3.4 中尘埃落定。现在，它还为 v-model 修饰符的使用提供了更好的支持。
</code></pre><h3 id="v-bind-同名简写" tabindex="-1"><a class="header-anchor" href="#v-bind-同名简写" aria-hidden="true">#</a> v-bind 同名简写</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;img :id=&quot;id&quot; :src=&quot;src&quot; :alt=&quot;alt&quot; /&gt;

&lt;!-- 优雅简写为： --&gt;
&lt;img :id :src :alt /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[t];function s(r,l){return d(),i("div",null,c)}const u=e(a,[["render",s],["__file","weiyou3.4.html.vue"]]);export{u as default};
