import{_ as e,o as i,c as n,e as s}from"./app-2dc9ef31.js";const d={},l=s(`<p><code>ECMAScript2024 (ES15)</code> 即将发布，全新的版本带来了许多的新特性，其中有 几个全新的 JS 方法，可以大幅度提升我们的工作效率，从而让我们得到更多的摸鱼时间。</p><h3 id="promise-withresolvers" tabindex="-1"><a class="header-anchor" href="#promise-withresolvers" aria-hidden="true">#</a> Promise.withResolvers</h3><p>这个功能引入了一个新方法来创建一个 <code>promise</code>，直接返回 resolve 和 reject 的回调。使用 <code>Promise.withResolvers </code>，我们可以创建直接在其执行函数之外 resolve 和 reject。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const [promise, resolve, reject] = Promise.withResolvers();

它完全等价于

let resolve, reject;
const promise = new Promise((res, rej) =&gt; {
  resolve = res;
  reject = rej;
});

只是它更简洁，并且不需要使用 let。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="object-groupby" tabindex="-1"><a class="header-anchor" href="#object-groupby" aria-hidden="true">#</a> Object.groupBy()</h3><p>Object.groupBy() 方法是一项新添加的功能，允许我们按照特定属性将数组中的 对象分组，从而使数据处理变得更加容易。当分组名称可以用字符串表示时，应使用此方法。如果你需要使用某个任意值作为键来对元素进行分组，请改用 Map.groupBy() 方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const inventory = [
  { name: &quot;芦笋&quot;, type: &quot;蔬菜&quot;, quantity: 5 },
  { name: &quot;香蕉&quot;, type: &quot;水果&quot;, quantity: 0 },
  { name: &quot;山羊&quot;, type: &quot;肉&quot;, quantity: 23 },
  { name: &quot;樱桃&quot;, type: &quot;水果&quot;, quantity: 5 },
  { name: &quot;鱼&quot;, type: &quot;肉&quot;, quantity: 22 },
];


下面的代码根据元素的 type 属性的值对元素进行分组。

const result = Object.groupBy(inventory, ({ type }) =&gt; type);

/* 结果是：
{
  蔬菜: [
    { name: &quot;芦笋&quot;, type: &quot;蔬菜&quot;, quantity: 5 },
  ],
  水果: [
    { name: &quot;香蕉&quot;, type: &quot;水果&quot;, quantity: 0 },
    { name: &quot;樱桃&quot;, type: &quot;水果&quot;, quantity: 5 }
  ],
  肉: [
    { name: &quot;山羊&quot;, type: &quot;肉&quot;, quantity: 23 },
    { name: &quot;鱼&quot;, type: &quot;肉&quot;, quantity: 22 }
  ]
}
*/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="temporal" tabindex="-1"><a class="header-anchor" href="#temporal" aria-hidden="true">#</a> Temporal</h3><p>Temporal提案引入了一个新的API，以更直观和高效的方式 <code>处理日期和时间</code>。例如，Temporal API提供了新的日期、时间和持续时间的数据类型，以及用于创建、操作和格式化这些值的函数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const today = Temporal.PlainDate.from({ year: 2023, month: 11, day: 19 });
console.log(today.toString()); // 输出: 2023-11-19

const duration = Temporal.Duration.from({ hours: 3, minutes: 30 });
const tomorrow = today.add(duration);
console.log(tomorrow.toString()); // 输出: 2023-11-20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="records-和-tuples" tabindex="-1"><a class="header-anchor" href="#records-和-tuples" aria-hidden="true">#</a> Records 和 Tuples</h3><p>Records 和 Tuples 是全新的数据结构，提供了一种更简洁和类型安全的方式来创建对象和数组。</p><ul><li>Records 类似于对象，但具有具体类型的固定属性集。</li><li>Tuples 类似于数组，但具有固定长度，每个元素可以具有不同类型。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let record = #{
  id: 1,
  name: &quot;JavaScript&quot;,
  year: 2024
};
console.log(record.name); // 输出: JavaScript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h3><p>装饰器（Decorators）是一种提议的语法，用于添加元数据或修改类、函数或属性的行为。装饰器可用于实现各种功能，如日志记录、缓存和依赖注入。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function logged(target, key, descriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args) {
    console.log(\`Calling \${key} with\`, args);
    return original.apply(this, args);
  };
  return descriptor;
}

class Example {
  @logged
  sum(a, b) {
    return a + b;
  }
}

const e = new Example();
e.sum(1, 2); // 输出：[1, 2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),a=[l];function r(t,u){return i(),n("div",null,a)}const v=e(d,[["render",r],["__file","ES2024.html.vue"]]);export{v as default};
