import{_ as s,o as n,c as a,e}from"./app-2dc9ef31.js";const p={},t=e(`<h1 id="说在前面" tabindex="-1"><a class="header-anchor" href="#说在前面" aria-hidden="true">#</a> 说在前面</h1><p>学一哈下TypeScript官方的内置类型，让俺们的开发效率再上一层楼</p><h2 id="partial-部分的" tabindex="-1"><a class="header-anchor" href="#partial-部分的" aria-hidden="true">#</a> Partial（部分的）</h2><p>作用是让传入类型中的所有属性变成都是可选的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> Student <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>   
    
    <span class="token keyword">const</span> <span class="token literal-property property">student2</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Student<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量student1的类型是Student，Student默认所有的属性都是不能为空的，所有会报错，student2就不会</p><h2 id="required-必须的" tabindex="-1"><a class="header-anchor" href="#required-必须的" aria-hidden="true">#</a> Required（必须的）</h2><p>跟Partial的作用是相反的，是让传入类型中的所有属性变成都是必填的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
        name<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        age<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> Student <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> 
    
    <span class="token keyword">const</span> <span class="token literal-property property">student2</span><span class="token operator">:</span> Required<span class="token operator">&lt;</span>Student<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量student1的类型是Student，Student默认所有的属性都是可以为空的，所有不会报错，student2会报错</p><h2 id="readonly-只读的" tabindex="-1"><a class="header-anchor" href="#readonly-只读的" aria-hidden="true">#</a> Readonly（只读的）</h2><p>作用是让传入类型中的所有属性变成都是只读的（不能修改属性）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> Student <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span>
    student1<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student2</span><span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>Student<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span>
    student2<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>给student1的属性age重新赋值不会报错，给student2的属性age重新赋值就会报错，因为student2所有的属性都是只读的</p><h2 id="pick-选择" tabindex="-1"><a class="header-anchor" href="#pick-选择" aria-hidden="true">#</a> Pick（选择）</h2><p>作用是选择传入类型中的部分属性组成新类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> Student <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student2</span><span class="token operator">:</span> Pick<span class="token operator">&lt;</span>Student<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;李四&#39;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student3</span><span class="token operator">:</span> Pick<span class="token operator">&lt;</span>Student<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;王五&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量student1可以有所有属性name和age，变量student2就只能有属性name，变量student3加上属性age就会报错</p><h2 id="record-记录" tabindex="-1"><a class="header-anchor" href="#record-记录" aria-hidden="true">#</a> Record（记录）</h2><p>作用是构建一个类型，这个类型用来描述一个对象，这个对象的属性都具有相同的类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Record应该是日常使用频率较高的内置类型了，主要用来描述对象，一般建议是不用Object来描述对象，而是用Record代替，Record&lt;string, any&gt;几乎可以说是万金油了</p><h2 id="exclude-排除" tabindex="-1"><a class="header-anchor" href="#exclude-排除" aria-hidden="true">#</a> Exclude（排除）</h2><p>针对联合类型（interface这种没用），用人话说，排除相同的，留下不同的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> type PersonAttr <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;age&#39;</span>
    
    <span class="token keyword">export</span> type StudentAttr <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;age&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;class&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;school&#39;</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> Exclude<span class="token operator">&lt;</span>StudentAttr<span class="token punctuation">,</span> PersonAttr<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>student1就只能被赋值为&#39;class&#39; 或者&#39;school&#39;</p><h2 id="extract-取出" tabindex="-1"><a class="header-anchor" href="#extract-取出" aria-hidden="true">#</a> Extract（取出）</h2><p>与Exclude相反，针对联合类型，排除不同的的，取出相同的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> type PersonAttr <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;age&#39;</span>
    
    <span class="token keyword">export</span> type StudentAttr <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;age&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;class&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;school&#39;</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> Extract<span class="token operator">&lt;</span>StudentAttr<span class="token punctuation">,</span> PersonAttr<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>student1就只能被赋值为&#39;name&#39;或者&#39;age&#39;</p><h2 id="omit-省略" tabindex="-1"><a class="header-anchor" href="#omit-省略" aria-hidden="true">#</a> Omit（省略）</h2><p>传入一个类型，和这个类型的几个属性，把传入的属性省略掉，组成一个新类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
        <span class="token keyword">class</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        <span class="token literal-property property">school</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">export</span> type PersonAttr <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;age&#39;</span>
    
    <span class="token keyword">export</span> type StudentAttr <span class="token operator">=</span> <span class="token string">&#39;name&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;age&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;class&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;school&#39;</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>Student<span class="token punctuation">,</span> PersonAttr<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>student1报错，提示没有属性&#39;name&#39;、&#39;age&#39;</p><h2 id="nonnullable-不能为null" tabindex="-1"><a class="header-anchor" href="#nonnullable-不能为null" aria-hidden="true">#</a> NonNullable（不能为null）</h2><p>字面意思，不能为空</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> NonNullable<span class="token operator">&lt;</span>Student <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>student1赋值为null会报错（在tsconfig.json配置文件中开启类型检查，&quot;skipLibCheck&quot;: false）</p><h2 id="parameters-参数" tabindex="-1"><a class="header-anchor" href="#parameters-参数" aria-hidden="true">#</a> Parameters（参数）</h2><p>获取传入函数的参数组成的类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">StudentFunc</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> Student
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> Parameters<span class="token operator">&lt;</span>StudentFunc<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>student1的类型为[name: string, age: number]</p><h2 id="constructorparameters-构造参数" tabindex="-1"><a class="header-anchor" href="#constructorparameters-构造参数" aria-hidden="true">#</a> ConstructorParameters（构造参数）</h2><p>获取传入构造函数的参数组成的类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">StudentConstructor</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> Student
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> ConstructorParameters<span class="token operator">&lt;</span>StudentConstructor<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>student1的类型为[name: string, age: number]</p><h2 id="returntype-返回类型" tabindex="-1"><a class="header-anchor" href="#returntype-返回类型" aria-hidden="true">#</a> ReturnType（返回类型）</h2><p>获取传入函数的返回类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">StudentFunc</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span>name<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> Student
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span>StudentFunc<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>student1的类型为Student</p><h2 id="instancetype-构造返回类型、实例类型" tabindex="-1"><a class="header-anchor" href="#instancetype-构造返回类型、实例类型" aria-hidden="true">#</a> InstanceType（构造返回类型、实例类型）</h2><p>获取传入构造函数的返回类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">const</span> Student <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
        <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
        <span class="token punctuation">}</span>
        <span class="token function">showInfo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;name: &#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&#39;age: &#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">student1</span><span class="token operator">:</span> InstanceType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Student<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token string">&#39;张三&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>个人认为这是一个非常好用的内置类型，目前在前端项目中，class是用的越来越多了，在TS中，class其实也是可以用作类型声明空间的，用来描述对象类型，但是一般来说好像很少这样用的，一般用interface或者type居多</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以一般就是直接把class用作变量声明空间，但是对于 class new 出的实例，怎么描述它的类型呢，就如上文的，直接const student1: Student那是铁定会报错的，因为Student用作变量声明空间，没有用作类型声明空间（听起来好绕），这时候就可以用到InstanceType，完美解决问题</p><h2 id="uppercase-大写" tabindex="-1"><a class="header-anchor" href="#uppercase-大写" aria-hidden="true">#</a> Uppercase（大写）</h2><p>变大写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> type StudentSexType <span class="token operator">=</span> <span class="token string">&#39;male&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;female&#39;</span>

    <span class="token keyword">const</span> <span class="token literal-property property">studentSex</span><span class="token operator">:</span> Uppercase<span class="token operator">&lt;</span>StudentSexType<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token string">&#39;MALE&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lowercase-小写" tabindex="-1"><a class="header-anchor" href="#lowercase-小写" aria-hidden="true">#</a> Lowercase（小写）</h2><p>变小写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> type StudentSexType <span class="token operator">=</span> <span class="token string">&#39;MALE&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;FEMALE&#39;</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">studentSex</span><span class="token operator">:</span> Lowercase<span class="token operator">&lt;</span>StudentSexType<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="capitalize-首字母大写" tabindex="-1"><a class="header-anchor" href="#capitalize-首字母大写" aria-hidden="true">#</a> Capitalize（首字母大写）</h2><p>首字母变大写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> type StudentSexType <span class="token operator">=</span> <span class="token string">&#39;male&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;female&#39;</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">studentSex</span><span class="token operator">:</span> Capitalize<span class="token operator">&lt;</span>StudentSexType<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uncapitalize-首字母小写" tabindex="-1"><a class="header-anchor" href="#uncapitalize-首字母小写" aria-hidden="true">#</a> Uncapitalize（首字母小写）</h2><p>首字母变小写</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">export</span> type StudentSexType <span class="token operator">=</span> <span class="token string">&#39;MALE&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;FEMALE&#39;</span>
    
    <span class="token keyword">const</span> <span class="token literal-property property">studentSex</span><span class="token operator">:</span> Uncapitalize<span class="token operator">&lt;</span>StudentSexType<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,68),o=[t];function r(l,c){return n(),a("div",null,o)}const d=s(p,[["render",r],["__file","TypeScriptchangyongnazhileixing.html.vue"]]);export{d as default};