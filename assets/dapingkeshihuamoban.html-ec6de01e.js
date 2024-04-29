import{_ as e,r as o,o as l,c,a as n,b as s,d as t,e as p}from"./app-2dc9ef31.js";const i="/assets/img-9a04241d.png",r={},u=p('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>这是一个基于<code>Vue3</code>、<code>Echarts</code>、<code>高德地</code>图和<code>Pinia</code>开发的大屏可视化项目，提供了如下功能</p><ul><li>大屏适配</li><li>图表组件(Echarts)封装</li><li>高德地图组件封装</li><li>拖拽布局</li><li>入场动画</li><li>无缝滚动</li></ul>',3),d={href:"https://github.com/d-quiet/easy-big-screen",target:"_blank",rel:"noopener noreferrer"},k={href:"https://d-quiet.github.io/easy-big-screen/#/screen",target:"_blank",rel:"noopener noreferrer"},v=p(`<h3 id="大屏适配" tabindex="-1"><a class="header-anchor" href="#大屏适配" aria-hidden="true">#</a> 大屏适配</h3><p>大屏适配常用的方案有 <code>rem + vw/vh</code> 和 <code>scale</code> 两种方案</p><ol><li><code>rem + vw/vh</code> 方案是一种结合使用<code>rem</code>（相对于根元素字体大小的单位）和<code>vw/vh</code>（视窗宽度/高度的单位）来实现大屏的适配。</li><li><code>scale</code> 方案通过改变页面根元素的缩放比例来实现大屏适配。</li></ol><p>这个项目采用的是<code>scale</code>的方案来实现大屏适配</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/utiles/useResize.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onBeforeUnmount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token comment">// 默认适配宽高</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> width <span class="token operator">=</span> <span class="token number">1920</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> height <span class="token operator">=</span> <span class="token number">1080</span>

<span class="token keyword">type</span> <span class="token class-name">ResizeType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
	w<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
	h<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
	fullScreen<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
	delay<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useResize</span> <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> ResizeType <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token punctuation">{</span>
		w <span class="token operator">=</span> width<span class="token punctuation">,</span>
		h <span class="token operator">=</span> height<span class="token punctuation">,</span>
		fullScreen <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
		delay <span class="token operator">=</span> <span class="token number">100</span>
	<span class="token punctuation">}</span> <span class="token operator">=</span> options
	<span class="token comment">// 缩放元素</span>
	<span class="token keyword">const</span> screenRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> scale <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">function</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 浏览器宽高</span>
    <span class="token keyword">const</span> clientWidth <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth
    <span class="token keyword">const</span> clientHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientHeight

    <span class="token comment">// 计算宽高缩放比例</span>
		<span class="token keyword">const</span> scaleW <span class="token operator">=</span> clientWidth <span class="token operator">/</span> w
		<span class="token keyword">const</span> scaleH <span class="token operator">=</span> clientHeight <span class="token operator">/</span> h

    <span class="token keyword">if</span> <span class="token punctuation">(</span>clientWidth <span class="token operator">/</span> clientHeight <span class="token operator">&gt;</span> w <span class="token operator">/</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果浏览器的宽高比大于设计稿的宽高比，就取浏览器高度和设计稿高度之比</span>
      scale<span class="token punctuation">.</span>value <span class="token operator">=</span> scaleH
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果浏览器的宽高比小于设计稿的宽高比，就取浏览器宽度和设计稿宽度之比</span>
      scale<span class="token punctuation">.</span>value <span class="token operator">=</span> scaleW
    <span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>fullScreen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果不在乎缩放失真的情况，可以设置全屏</span>
			screenRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">scale(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>scaleW<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>scaleH<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 否则选择适配比例缩放</span>
			screenRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;scale(&#39;</span> <span class="token operator">+</span> scale<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&#39;)&#39;</span>
		<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

	<span class="token keyword">const</span> resizeDelay <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>resize<span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>screenRef<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    	window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> resizeDelay<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> resizeDelay<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    scale<span class="token punctuation">,</span>
		screenRef
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>核心代码在resize函数中</p><ul><li>首先要确定我们的设计稿尺寸，默认是 <code>1920 x 1080</code></li><li>分别计算浏览器和设计图宽高比</li><li>如果浏览器的宽高比大于设计稿的宽高比，就取浏览器高度:设计稿高度，否则取浏览器宽度:设计稿宽度</li><li>如果想全屏缩放，就分别使用宽高比进行缩放</li><li>出于对性能的考虑，useResize中使用了防抖，实现如下</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> timerId
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果上次事件还没有真正处理, 清除</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>timerId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timerId<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 发事件发生指定事件后才调用处理事件的回调函数</span>
		<span class="token comment">// 启动定时器, 只是准备真正处理</span>
		timerId <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token comment">// 正在处理事件</span>
			<span class="token function">callback</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span>
			<span class="token comment">// 删除准备处理的标记</span>
			timerId <span class="token operator">=</span> <span class="token keyword">null</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4><p>将 <code>useResize</code> 返回的 <code>screenRef</code> 赋值需要缩放的元素即可</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>screenRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useResize <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/useResize&#39;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> screenRef <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图表组件封装" tabindex="-1"><a class="header-anchor" href="#图表组件封装" aria-hidden="true">#</a> 图表组件封装</h3><h4 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn add echarts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="封装char组件" tabindex="-1"><a class="header-anchor" href="#封装char组件" aria-hidden="true">#</a> 封装Char组件</h4><ul><li>按需引入<code> src/components/chart/index.ts</code></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> Chart <span class="token keyword">from</span> <span class="token string">&#39;./Chart.vue&#39;</span>
<span class="token comment">// Import the echarts core module, which provides the necessary interfaces for using echarts.</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts/core&#39;</span>

<span class="token comment">// Import bar charts, all suffixed with Chart</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
	BarChart<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/charts&#39;</span>

<span class="token comment">// Import the tooltip, title, rectangular coordinate system, dataset and transform components</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  TitleComponent<span class="token punctuation">,</span>
  TooltipComponent<span class="token punctuation">,</span>
  GridComponent<span class="token punctuation">,</span>
  DatasetComponent<span class="token punctuation">,</span>
  TransformComponent
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/components&#39;</span>

<span class="token comment">// Features like Universal Transition and Label Layout</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LabelLayout<span class="token punctuation">,</span> UniversalTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/features&#39;</span>

<span class="token comment">// Import the Canvas renderer</span>
<span class="token comment">// Note that including the CanvasRenderer or SVGRenderer is a required step</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CanvasRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts/renderers&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;v-chart&#39;</span><span class="token punctuation">,</span> Chart<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// Register the required components</span>
echarts<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	BarChart<span class="token punctuation">,</span>
	TitleComponent<span class="token punctuation">,</span>
	TooltipComponent<span class="token punctuation">,</span>
	GridComponent<span class="token punctuation">,</span>
	DatasetComponent<span class="token punctuation">,</span>
	TransformComponent<span class="token punctuation">,</span>
	LabelLayout<span class="token punctuation">,</span>
	UniversalTransition<span class="token punctuation">,</span>
	CanvasRenderer
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	install
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>Chart</code> 组件 <code>src/components/chart/Chart.vue</code></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>es-chart<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> PropType<span class="token punctuation">,</span> shallowRef<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ECharts<span class="token punctuation">,</span> EChartsCoreOption <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;echarts&#39;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>EChartsCoreOption<span class="token operator">&gt;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">loading</span><span class="token operator">:</span> Boolean
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> chartRef <span class="token operator">=</span> shallowRef<span class="token operator">&lt;</span>HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> chart <span class="token operator">=</span> shallowRef<span class="token operator">&lt;</span>ECharts <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>option<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		chart<span class="token punctuation">.</span>value <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartRef<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">)</span>
		<span class="token function">setOption</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>option<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">setOption</span><span class="token punctuation">(</span><span class="token parameter">option<span class="token punctuation">,</span> notMerge<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">,</span> lazyUpdate<span class="token operator">?</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	chart<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span> notMerge<span class="token punctuation">,</span> lazyUpdate<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	chart<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>option<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token function">setOption</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>option<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// show loading</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> props<span class="token punctuation">.</span>loading<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>chart<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token keyword">return</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		chart<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		chart<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	chart<span class="token punctuation">,</span>
	setOption<span class="token punctuation">,</span>
	resize
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>scss<span class="token punctuation">&#39;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.es-chart</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注册组件-src-main-ts" tabindex="-1"><a class="header-anchor" href="#注册组件-src-main-ts" aria-hidden="true">#</a> 注册组件 <code>src/main.ts</code></h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> chart <span class="token keyword">from</span> <span class="token string">&#39;./components/chart&#39;</span>
<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>chart<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-chart</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>chartRef<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> chartRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;category&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Mon&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Wed&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Thu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fri&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sat&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Sun&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;value&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">showBackground</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">backgroundStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;rgba(180, 180, 180, 0.2)&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+i+'" alt="img.png"></p><h3 id="高德地图组件封装" tabindex="-1"><a class="header-anchor" href="#高德地图组件封装" aria-hidden="true">#</a> 高德地图组件封装</h3>',24),m={href:"https://lbs.amap.com/api/javascript-api-v2/summary",target:"_blank",rel:"noopener noreferrer"},b=p(`<p>在开发大屏项目时可能也会遇到地图相关的需求，这就需要使用原生的地图，这里使用的是高德地图</p><p>使用前需要注册开发者账号，申请API Key，服务平台选择 <code>Web端(JS API)</code></p><h4 id="安装依赖-1" tabindex="-1"><a class="header-anchor" href="#安装依赖-1" aria-hidden="true">#</a> 安装依赖</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn add @amap<span class="token operator">/</span>amap<span class="token operator">-</span>jsapi<span class="token operator">-</span>loader
yarn add @amap<span class="token operator">/</span>amap<span class="token operator">-</span>jsapi<span class="token operator">-</span>types <span class="token operator">-</span><span class="token constant">D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue组件" tabindex="-1"><a class="header-anchor" href="#vue组件" aria-hidden="true">#</a> vue组件</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;mapContainer&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> shallowRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token keyword">import</span> <span class="token string">&#39;@amap/amap-jsapi-types&#39;</span>
    <span class="token keyword">import</span> AMapLoader <span class="token keyword">from</span> <span class="token string">&#39;@amap/amap-jsapi-loader&#39;</span>

    <span class="token keyword">const</span> map <span class="token operator">=</span> shallowRef<span class="token operator">&lt;</span>AMap<span class="token punctuation">.</span>Map <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">initMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    AMapLoader<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 申请好的Web端开发者Key，首次调用 load 时必填</span>
        <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">&#39;2.0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 需要使用的的插件列表，如比例尺&#39;AMap.Scale&#39;等</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">MyAMap</span><span class="token operator">:</span> <span class="token keyword">typeof</span> AMap</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        map<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyAMap<span class="token punctuation">.</span>Map</span><span class="token punctuation">(</span><span class="token string">&#39;mapContainer&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
            <span class="token literal-property property">mapStyle</span><span class="token operator">:</span> <span class="token string">&#39;amap://styles/darkblue&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">initMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">defineExpose</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    map
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&#39;scss&#39;</span><span class="token operator">&gt;</span>
    #mapContainer <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    <span class="token punctuation">.</span>amap<span class="token operator">-</span>logo<span class="token punctuation">,</span> <span class="token punctuation">.</span>amap<span class="token operator">-</span>copyright <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="拖拽布局" tabindex="-1"><a class="header-anchor" href="#拖拽布局" aria-hidden="true">#</a> 拖拽布局</h3><p>这里使用了 SortableJS 来实现拖拽</p><p>SortableJS是一个强大的JavaScript库，用于创建可排序、可拖放和可交互的列表。它提供了一种简单的方法来实现拖放排序功能，使用户可以通过拖动列表项来重新排序它们。</p><h4 id="安装依赖-2" tabindex="-1"><a class="header-anchor" href="#安装依赖-2" aria-hidden="true">#</a> 安装依赖</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn add sortablejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="封装usesortable" tabindex="-1"><a class="header-anchor" href="#封装usesortable" aria-hidden="true">#</a> 封装useSortable</h4><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/utils/useSortable.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> Ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Sortable <span class="token keyword">from</span> <span class="token string">&#39;sortablejs&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useSortable</span> <span class="token operator">=</span> <span class="token punctuation">(</span>listRef<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

	<span class="token comment">// 容器元素</span>
	<span class="token keyword">const</span> containerRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		Sortable<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>containerRef<span class="token punctuation">.</span>value<span class="token operator">!</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
			swapThreshold<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
			animation<span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
			<span class="token function">onUpdate</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> item <span class="token operator">=</span> listRef<span class="token punctuation">.</span>value<span class="token punctuation">[</span>e<span class="token punctuation">.</span>oldIndex<span class="token punctuation">]</span>
				listRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>oldIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
				listRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>newIndex<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> <span class="token punctuation">{</span>
		containerRef
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string">&quot;containerRef&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>component
			v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in components&quot;</span>
			<span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;item.name&quot;</span>
			<span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">&quot;item.component&quot;</span>
			<span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;es-screen-right-item&quot;</span>
		<span class="token operator">&gt;</span>
			<span class="token punctuation">{</span><span class="token punctuation">{</span> item<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">}</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> shallowRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSortable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/useSortable&#39;</span>
<span class="token keyword">import</span> Right1 <span class="token keyword">from</span> <span class="token string">&#39;./Right1.vue&#39;</span>
<span class="token keyword">import</span> Right2 <span class="token keyword">from</span> <span class="token string">&#39;./Right2.vue&#39;</span>
<span class="token keyword">import</span> Right3 <span class="token keyword">from</span> <span class="token string">&#39;./Right3.vue&#39;</span>
<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;right1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Right1 <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;right2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Right2 <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;right3&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Right3 <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> containerRef <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSortable</span><span class="token punctuation">(</span>components<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&#39;scss&#39;</span> scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>es<span class="token operator">-</span>screen<span class="token operator">-</span>right<span class="token operator">-</span>item <span class="token punctuation">{</span>
	<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
	background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>es<span class="token operator">-</span>block<span class="token operator">-</span>bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token literal-property property">padding</span><span class="token operator">:</span> 16px<span class="token punctuation">;</span>
	<span class="token operator">&amp;</span> <span class="token operator">+</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
		margin<span class="token operator">-</span>top<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useSortable 会返回父元素的ref将其挂载到列表标签上即可，如果希望列表数据也交换需要将列表传入到函数中</p><h3 id="入场动画" tabindex="-1"><a class="header-anchor" href="#入场动画" aria-hidden="true">#</a> 入场动画</h3><p>主要使用了<code>CSS3</code>动画来实现</p><h4 id="header-动画" tabindex="-1"><a class="header-anchor" href="#header-动画" aria-hidden="true">#</a> Header 动画</h4><p>一个简单的淡入动画</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.es-screen-header</span> <span class="token punctuation">{</span>
	<span class="token property">animation</span><span class="token punctuation">:</span> fade 3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> fade</span> <span class="token punctuation">{</span>
	<span class="token selector">from</span> <span class="token punctuation">{</span>
		<span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">to</span> <span class="token punctuation">{</span>
		<span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="left-左侧动画" tabindex="-1"><a class="header-anchor" href="#left-左侧动画" aria-hidden="true">#</a> Left 左侧动画</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.es-screen-left-item</span> <span class="token punctuation">{</span>
	<span class="token comment">/* ... */</span>
	<span class="token selector">&amp;:nth-child(1)</span> <span class="token punctuation">{</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 550px<span class="token punctuation">;</span>
		<span class="token property">animation-duration</span><span class="token punctuation">:</span> .8s<span class="token punctuation">;</span> // 新增
	<span class="token punctuation">}</span>
	<span class="token selector">&amp;:nth-child(2)</span> <span class="token punctuation">{</span>
		<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1.5s<span class="token punctuation">;</span> // 新增
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> slide</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">80%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>左侧定义一个滑入动画，从左侧-100%进入到20px最后回到0原来的位置，这样定义会有一个弹的效果</p><h4 id="right-右侧动画" tabindex="-1"><a class="header-anchor" href="#right-右侧动画" aria-hidden="true">#</a> Right 右侧动画</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.es-screen-right-item</span> <span class="token punctuation">{</span>
	<span class="token comment">/* ... */</span>
	<span class="token property">animation-name</span><span class="token punctuation">:</span> slide<span class="token punctuation">;</span>
	<span class="token selector">&amp;:nth-child(1)</span> <span class="token punctuation">{</span>
		<span class="token property">animation-duration</span><span class="token punctuation">:</span> 0.5s<span class="token punctuation">;</span> // 新增
	<span class="token punctuation">}</span>
	<span class="token selector">&amp;:nth-child(2)</span> <span class="token punctuation">{</span>
		<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span> // 新增
	<span class="token punctuation">}</span>
	<span class="token selector">&amp;:nth-child(3)</span> <span class="token punctuation">{</span>
		<span class="token property">animation-duration</span><span class="token punctuation">:</span> 1.5s<span class="token punctuation">;</span> // 新增
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> slide</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>100%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">80%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>-20px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与左侧类似，只是方向变了</p><h4 id="center-中间地图入场动画" tabindex="-1"><a class="header-anchor" href="#center-中间地图入场动画" aria-hidden="true">#</a> Center 中间地图入场动画</h4><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.es-center</span> <span class="token punctuation">{</span>
	<span class="token property">animation</span><span class="token punctuation">:</span> slideAndFade 1.5s<span class="token punctuation">;</span> // 新增
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> slideAndFade</span> <span class="token punctuation">{</span>
  <span class="token selector">0%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>218px<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从下往上移动，移动的同时淡入显示</p><h3 id="无缝滚动封装" tabindex="-1"><a class="header-anchor" href="#无缝滚动封装" aria-hidden="true">#</a> 无缝滚动封装</h3><p>无缝滚动在大屏可视化项目中非常常见，本小节使用<code>animejs</code>实现了一个支持横纵无缝滚动的自定义钩子</p><p>先安装一下 animejs 的依赖</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>yarn add animejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> shallowRef<span class="token punctuation">,</span> Ref <span class="token punctuation">}</span> <span class="token selector">from &#39;vue&#39;
import anime from &#39;animejs/lib/anime.es.js&#39;

export type OptionsType =</span> <span class="token punctuation">{</span>
	direction?<span class="token punctuation">:</span> <span class="token string">&#39;horizontal&#39;</span> | <span class="token string">&#39;vertical&#39;</span>
	gap?<span class="token punctuation">:</span> number
	duration?<span class="token punctuation">:</span> number
<span class="token punctuation">}</span>

<span class="token selector">export function useSeamlessScroll(listRef: Ref&lt;HTMLElement | null&gt;, options: OptionsType =</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token selector">)</span> <span class="token punctuation">{</span>
	<span class="token selector">const</span> <span class="token punctuation">{</span>
		direction = <span class="token string">&#39;horizontal&#39;</span><span class="token punctuation">,</span>
		gap = 10<span class="token punctuation">,</span>
		duration = 10000
	<span class="token punctuation">}</span> <span class="token selector">= options
	const animation = shallowRef&lt;ReturnType&lt;typeof anime&gt;&gt;(null)

	function init()</span> <span class="token punctuation">{</span>
		<span class="token selector">const isHorizontal = direction === &#39;horizontal&#39;

		const translateKey = isHorizontal ? &#39;translateX&#39; : &#39;translateY&#39;

		const transKey = isHorizontal ? &#39;x&#39; : &#39;y&#39;

		// items
		const children = listRef.value?.children || []
		if (!children.length) return

		// 第一个元素
		const firstEl =  children[0] as HTMLElement
		const firstDiff = (isHorizontal ? firstEl.offsetWidth : firstEl.offsetHeight ) + gap

		// 默认将list元素向左或向上移动一个item的距离
		listRef.value!.style.transform = \`$</span><span class="token punctuation">{</span>translateKey<span class="token punctuation">}</span><span class="token selector">(-$</span><span class="token punctuation">{</span>firstDiff<span class="token punctuation">}</span><span class="token selector">px)\`

		const transList: any = []
		let total = 0 // 总宽/高
		// 设置初始位置
		anime.set(children,</span> <span class="token punctuation">{</span>
			<span class="token selector">[translateKey]: (el: HTMLElement, i) =&gt;</span> <span class="token punctuation">{</span>

				<span class="token selector">const distance = (isHorizontal ? el.offsetWidth : el.offsetHeight ) + gap
				total += distance

				const diff = (i - 1) * distance
				transList[i] =</span> <span class="token punctuation">{</span> [transKey]<span class="token punctuation">:</span> diff <span class="token punctuation">}</span>
				return diff
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token selector">)
		// 设置list容器的宽或高
		listRef.value!.style[isHorizontal ? &#39;width&#39; : &#39;height&#39;] = total + &#39;px&#39;

		// 添加动画
		animation.value = anime(</span><span class="token punctuation">{</span>
			<span class="token selector">targets: transList,
			duration,
			easing: &#39;linear&#39;,
			direction: isHorizontal ? undefined : &#39;reverse&#39;,
			[transKey]: \`+=$</span><span class="token punctuation">{</span>total<span class="token punctuation">}</span><span class="token selector">\`,
			loop: true,
			update: () =&gt;</span> <span class="token punctuation">{</span>
				<span class="token selector">anime.set(children,</span> <span class="token punctuation">{</span>
					<span class="token selector">[translateKey]: (el, i) =&gt;</span> <span class="token punctuation">{</span>
						return transList[i][transKey] % total
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token selector">// 暂停
	function pause()</span> <span class="token punctuation">{</span>
		animation.value!.<span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	<span class="token selector">// 停止
	function play()</span> <span class="token punctuation">{</span>
		animation.value!.<span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token selector">onMounted(() =&gt;</span> <span class="token punctuation">{</span>
		<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span><span class="token selector">)

	return</span> <span class="token punctuation">{</span>
		listRef<span class="token punctuation">,</span>
		pause<span class="token punctuation">,</span>
		play<span class="token punctuation">,</span>
		animation
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>useSeamlessScroll</code> 接受两个参数：<code>listRef</code> 和 <code>options</code>。<code>listRef</code> 是一个 <code>Ref</code> 对象，用于引用滚动列表的 <code>DOM</code> 元素。<code>options</code> 是一个配置对象，可以设置滚动的方向、间隙和持续时间。 实现步骤：</p><ol><li>根据传入的滚动方向，确定 <code>translateKey</code> 和 <code>transKey</code>，<code>translateKey</code> 表示 <code>CSS</code> 中的移动方向，<code>transKey</code> 表示<code>animejs</code>中的<code>x/y</code>轴方向。</li><li>获取滚动列表的子元素，并计算第一个元素的偏移量。因为默认从从第二个元素开始，这样初始移动是才不会出现空白。</li><li>初始化滚动列表的位置，将其向左（横向滚动）或向上（纵向滚动）移动一个元素的距离。</li><li>遍历子元素，计算每个元素的偏移量，并将其设置为初始位置。</li><li>根据滚动方向，设置滚动列表容器的宽度或高度。</li><li>使用 <code>animejs</code> 库实现无缝滚动效果，在动画更新时，根据计算出的偏移量更新子元素的位置</li></ol><h4 id="使用-useseamlessscroll" tabindex="-1"><a class="header-anchor" href="#使用-useseamlessscroll" aria-hidden="true">#</a> 使用 <code>useSeamlessScroll</code></h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;es-center-bottom&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string">&quot;listRef&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;es-bottom-list&quot;</span><span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in 10&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;es-bottom-item&quot;</span><span class="token operator">&gt;</span>
				<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span>
			<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSeamlessScroll <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/useSeamlessScroll&#39;</span>

<span class="token keyword">const</span> listRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">useSeamlessScroll</span><span class="token punctuation">(</span>listRef<span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&#39;scss&#39;</span> scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>es<span class="token operator">-</span>center<span class="token operator">-</span>bottom <span class="token punctuation">{</span>
	<span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
	<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
	<span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> 150px<span class="token punctuation">;</span>
	<span class="token punctuation">.</span>es<span class="token operator">-</span>bottom<span class="token operator">-</span>item <span class="token punctuation">{</span>
		<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
		<span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> 170px<span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 150px<span class="token punctuation">;</span>
		<span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>es<span class="token operator">-</span>block<span class="token operator">-</span>bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
		font<span class="token operator">-</span>size<span class="token operator">:</span> 22px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span>
		<span class="token punctuation">.</span>es<span class="token operator">-</span>item<span class="token operator">-</span>text <span class="token punctuation">{</span>
      margin<span class="token operator">-</span>top<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到用了两层包裹列表，最外面一层的作用是防止溢出，第二层才是偏移的列表元素</p><h4 id="抽离成组件简化使用方式" tabindex="-1"><a class="header-anchor" href="#抽离成组件简化使用方式" aria-hidden="true">#</a> 抽离成组件简化使用方式</h4><p>新建 src/components/SeamlessScroll.vue</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;es-seamless-scroll&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string">&quot;listRef&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;es-seamless-scroll-list&quot;</span><span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span>slot <span class="token operator">/</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSeamlessScroll<span class="token punctuation">,</span> OptionsType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/useSeamlessScroll&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PropType<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span> Number<span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">option</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">type</span><span class="token operator">:</span> Object <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span>OptionsType<span class="token operator">&gt;</span><span class="token punctuation">,</span>
		<span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> listRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">useSeamlessScroll</span><span class="token punctuation">(</span>listRef<span class="token punctuation">,</span> props<span class="token punctuation">.</span>option<span class="token punctuation">)</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&#39;scss&#39;</span> scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>es<span class="token operator">-</span>seamless<span class="token operator">-</span>scroll <span class="token punctuation">{</span>
	<span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
	<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用组件" tabindex="-1"><a class="header-anchor" href="#使用组件" aria-hidden="true">#</a> 使用组件</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>SeamlessScroll <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;es-center-bottom&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in 10&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;es-bottom-item&quot;</span><span class="token operator">&gt;</span>
			<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>SeamlessScroll<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> SeamlessScroll <span class="token keyword">from</span> <span class="token string">&#39;@/components/SeamlessScroll.vue&#39;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&#39;scss&#39;</span> scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>es<span class="token operator">-</span>center<span class="token operator">-</span>bottom <span class="token punctuation">{</span>
	<span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
	<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
	<span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> 150px<span class="token punctuation">;</span>
	<span class="token punctuation">.</span>es<span class="token operator">-</span>bottom<span class="token operator">-</span>item <span class="token punctuation">{</span>
		<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
		<span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> 170px<span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 150px<span class="token punctuation">;</span>
		<span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>es<span class="token operator">-</span>block<span class="token operator">-</span>bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
		font<span class="token operator">-</span>size<span class="token operator">:</span> 22px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span>
		<span class="token punctuation">.</span>es<span class="token operator">-</span>item<span class="token operator">-</span>text <span class="token punctuation">{</span>
      margin<span class="token operator">-</span>top<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件使用起来还是要简单一点 组件默认是横向滚动，如果想纵向滚动传入direction为vertical即可</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span>SeamlessScroll <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;es-list&quot;</span> <span class="token operator">:</span>option<span class="token operator">=</span><span class="token string">&quot;{ direction: &#39;vertical&#39; }&quot;</span><span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in 15&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;es-item&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string">&#39;热销商品的占比 &#39;</span> <span class="token operator">+</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>SeamlessScroll<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">&#39;ts&#39;</span><span class="token operator">&gt;</span>
<span class="token keyword">import</span> SeamlessScroll <span class="token keyword">from</span> <span class="token string">&#39;@/components/SeamlessScroll.vue&#39;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&#39;scss&#39;</span> scoped<span class="token operator">&gt;</span>
<span class="token punctuation">.</span>es<span class="token operator">-</span>list <span class="token punctuation">{</span>
	<span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
	<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
	<span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
	<span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
	<span class="token punctuation">.</span>es<span class="token operator">-</span>item <span class="token punctuation">{</span>
		<span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47);function g(y,h){const a=o("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[n("a",d,[s("源码地址"),t(a)]),s(" --> "),n("a",k,[s("在线示例"),t(a)])]),v,n("p",null,[n("a",m,[s("高德地图 JS API"),t(a)])]),b])}const w=e(r,[["render",g],["__file","dapingkeshihuamoban.html.vue"]]);export{w as default};
