import{_ as e,o as i,c as t,e as d}from"./app-2dc9ef31.js";const n={},l=d(`<h3 id="组件中的-v-model-双向数据绑定" tabindex="-1"><a class="header-anchor" href="#组件中的-v-model-双向数据绑定" aria-hidden="true">#</a> 组件中的 v-model 双向数据绑定</h3><p>随着<code>Vue3.4</code>版本的发布，<code>defineModel</code> 也正式转正了。它可以简化父子组件之间的双向绑定，是目前官方推荐的双向绑定实现方式。</p><p>之前在 <code>Vue3.3</code>中，该方法还是实验性方法，使用 <code>defineModel</code> 需在 <code>vite.config.ts</code> 里面配置 <code>defineModel</code> 为 <code>true</code>。</p><h3 id="definemodel简介" tabindex="-1"><a class="header-anchor" href="#definemodel简介" aria-hidden="true">#</a> defineModel简介</h3><blockquote><p><code>defineModel</code> 是一个新的 <code>&lt;script setup&gt;</code> 宏，旨在简化支持<code> v-model</code>的组件的实现, 这个宏用来声明一个双向绑定 <code>prop</code>，通过父组件的 <code>v-model</code>来使用。</p></blockquote><h3 id="definemodel使用" tabindex="-1"><a class="header-anchor" href="#definemodel使用" aria-hidden="true">#</a> defineModel使用</h3><blockquote><p>自定义组件中使用 v-model 来进行数据的双向绑定</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 父组件 --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- 自定义子组件 CustomComponent 使用 v-model 指令绑定 userName --&gt;
    &lt;CustomComponent v-model=&quot;userName&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &quot;vue&quot;;
import CustomComponent from &quot;./CustomComponent.vue&quot;;

const userName = ref(&quot;前端开发爱好者&quot;);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在 <code>Vue3.3</code> 版本之前，我们通常通过 <code>props</code> 接收 modelValue，然后在更新时，我们会将更新后的值传递给 <code>emit</code> 的 <code>update:modelValue</code> 并执行:</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 子组件 CustomComponent  --&gt;
&lt;template&gt;
  &lt;input
    :value=&quot;props.modelValue&quot;
    @input=&quot;emit(&#39;update:modelValue&#39;, $event.target.value)&quot;
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { defineProps, defineEmits } from &quot;vue&quot;;

const props = defineProps([&quot;modelValue&quot;]);

const emit = defineEmits([&quot;update:modelValue&quot;]);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Vue3.4 版本之后，我们将使用 <code>defineModel</code> 替代子组件中的 <code>props</code> 和 <code>emit</code>。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 子组件 CustomComponent  --&gt;
&lt;template&gt;
  &lt;input type=&quot;text&quot; v-model=&quot;modelValue&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const modelValue = defineModel();
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带参数-定义多个-v-model" tabindex="-1"><a class="header-anchor" href="#带参数-定义多个-v-model" aria-hidden="true">#</a> 带参数/定义多个 v-model</h3><blockquote><p>组件中可以支持定义多个 <code>defineModel</code>，可以满足绑定多个双向绑定的属性</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 父组件 --&gt;
&lt;template&gt;
  &lt;div&gt;
    &lt;!-- 自定义子组件 CustomComponent 使用 v-model 指令绑定 userName --&gt;
    &lt;CustomComponent
      v-model=&quot;userName&quot;
      v-model:title=&quot;title&quot;
      v-model:subTitle=&quot;subTitle&quot;
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from &quot;vue&quot;;
import CustomComponent from &quot;./CustomComponent.vue&quot;;

const userName = ref(&quot;前端开发爱好者&quot;);
const title = ref(&quot;前端开发爱好者_title&quot;);
const subTitle = ref(&quot;前端开发爱好者_subTitle&quot;);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!-- 子组件 CustomComponent  --&gt;
&lt;template&gt;
  &lt;input type=&quot;text&quot; v-model=&quot;modelValue&quot; /&gt;
  &lt;input type=&quot;text&quot; v-model=&quot;title&quot; /&gt;
  &lt;input type=&quot;text&quot; v-model=&quot;subTitle&quot; /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const modelValue = defineModel();
const title = defineModel(&quot;title&quot;);
const subTitle = defineModel(&quot;subTitle&quot;);
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="这糖很甜" tabindex="-1"><a class="header-anchor" href="#这糖很甜" aria-hidden="true">#</a> 这糖很甜</h3>`,17),s=[l];function o(u,a){return i(),t("div",null,s)}const v=e(n,[["render",o],["__file","Vue3zhidefineModel.html.vue"]]);export{v as default};
