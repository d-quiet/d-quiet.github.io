import{_ as t,r as l,o,c as d,a as e,b as n,d as i,e as s}from"./app-2dc9ef31.js";const r="/assets/高德key-f95c4ac5.png",c={},u=s('<h2 id="说在前面" tabindex="-1"><a class="header-anchor" href="#说在前面" aria-hidden="true">#</a> 说在前面</h2><blockquote><p>采用高德地图的api来获取当前位置的中文描述+区域编码。</p></blockquote><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h4 id="一、获取key" tabindex="-1"><a class="header-anchor" href="#一、获取key" aria-hidden="true">#</a> 一、获取Key</h4>',4),p={href:"https://lbs.amap.com/",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[e("p",null,"没有账号进行注册｜有账号直接登录")],-1),v=e("li",null,[e("p",null,"点击右上角 控制台 -> 应用管理 -> 我的应用 -> 创建应用")],-1),h=e("li",null,[e("p",null,"点击当前创建的应用下的添加按钮"),e("p",null,[e("img",{src:r,alt:"img.png"})])],-1),b=e("li",null,[e("p",null,"提交之后即可得到高德api的key")],-1),x=e("h4",{id:"二、获取并使用高德微信小程序js依赖文件amap-wx-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#二、获取并使用高德微信小程序js依赖文件amap-wx-js","aria-hidden":"true"},"#"),n(" 二、获取并使用高德微信小程序js依赖文件amap-wx.js")],-1),_={href:"https://lbs.amap.com/api/wx/download",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,"将amap-wx.js放在你的项目静态工具文件夹中",-1),q=e("li",null,"在需要使用到api的页面引入，我们当前在uniapp中使用",-1),f=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import amap from &#39;../../static/utils/amap-wx.130.js&#39;

const amapObject = new amap.AMapWX({ key: &#39;your key&#39; })
amapObject.getRegeo({
	success: (res) =&gt; {
	    console.log(res, res[0].regeocodeData.formatted_address)
	},
	fail: (err) =&gt; {
		console.log(err)
	}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：由于当前获取位置是在小程序内部，所以必须添加小程序所需的permission用于小程序获取用户地理位置授权。</p></blockquote><p>原生小程序开发：在appjson中配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;pages&quot;: [&quot;pages/index/index&quot;],
  &quot;permission&quot;: {
    &quot;scope.userLocation&quot;: {
      &quot;desc&quot;: &quot;你的位置信息将用于小程序位置接口的效果展示&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>uniapp开发：在manifest.json下 =&gt; 微信小程序配置 =&gt; 微信小程序权限配置 =&gt; 位置接口 =&gt; 描述：你的位置信息将用于天气信息展示</p><blockquote><p>注意：若是报错https://restapi.amap.com未配置在request合法域名中，则是由于amap api调用了当前域名下接口但是微信公众平台上没有进行配置导致，将当前域名配置在微信小程序request合法域名即可。</p></blockquote><blockquote><p>注意：js文件最后修改</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default {
	AMapWX
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function k(j,w){const a=l("ExternalLinkIcon");return o(),d("div",null,[u,e("ol",null,[e("li",null,[e("p",null,[n("进入"),e("a",p,[n("高德开放平台"),i(a)])])]),m,v,h,b]),x,e("ol",null,[e("li",null,[e("a",_,[n("高德相关下载"),i(a)]),n("：进入官网进行下载解压后即可得到")]),g,q]),f])}const N=t(c,[["render",k],["__file","Uniappweixinxiaochengxuhuoqudangqianweizhixinxi.html.vue"]]);export{N as default};
