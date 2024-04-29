import{_ as e,o as i,c as n,e as s}from"./app-2dc9ef31.js";const t={},d=s(`<h2 id="云对象" tabindex="-1"><a class="header-anchor" href="#云对象" aria-hidden="true">#</a> 云对象</h2><blockquote><p>云对象，服务器编写API，客户端调用API，不再开发传输json的接口。思路更清晰、代码更精简。</p></blockquote><p>比如服务端编写一个云对象todo，该对象有add、get、remove、update等方法。客户端的js则可以直接import这个todo云对象，直接调用add等方法。</p><h2 id="新建云对象" tabindex="-1"><a class="header-anchor" href="#新建云对象" aria-hidden="true">#</a> 新建云对象</h2><p>将项目与云空间关联后，在uniCloud/cloudfunctions目录新建云函数，选择类型为云对象。打开云对象入口index.obj.js，在这里可以写我们获取OpenId的方法以及发送订阅消息的方法。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const dcloudAppid = &#39;__UNI__*******&#39;
// 引入uni-subscribemsg公共模块
const UniSubscribemsg = require(&#39;uni-subscribemsg&#39;);
let timer = null;
module.exports = {
	_before: function() {},

	/**
	 * 获取openid
	 * @param {Object} code
	 */
	async getOpenid(code) {
		// 初始化实例
		let uniSubscribemsg = new UniSubscribemsg({
			dcloudAppid: dcloudAppid,
			provider: &quot;weixin-mp&quot;,
		});
		return await uniSubscribemsg.getOpenid({
			code: code
		})
	},

	/**
	 * 发送订阅消息
	 * @param {Object} obj
	 */
	async sendSubscribeMessage(obj) {
		if (timer) {
			clearTimeout(timer);
		}
		let {
			subTime,
			touser, // 接收者（用户）的 openid
			template_id, // 所需下发的订阅模板id
			page, // 点击模板卡片后的跳转页面，仅限本小程序内的页面。
			data, // 模板内容
			miniprogram_state, // 跳转小程序类型，默认为正式版
		} = obj;
		const [hours, minutes] = obj.subTime.split(&#39;:&#39;).map(Number);
		const milliseconds = (hours * 60 * 60 + minutes * 60) * 1000;
		timer = setTimeout(async () =&gt; {
			// 初始化实例
			let uniSubscribemsg = new UniSubscribemsg({
				dcloudAppid: dcloudAppid,
				provider: &quot;weixin-mp&quot;,
			});
			// 发送订阅消息
			let res = await uniSubscribemsg.sendSubscribeMessage({
				touser: touser,
				template_id: template_id,
				page: page, // 小程序页面地址
				miniprogram_state: miniprogram_state, 
				lang: &quot;zh_CN&quot;,
				data: data
			});
			return res;
		}, milliseconds
	},
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端调用" tabindex="-1"><a class="header-anchor" href="#客户端调用" aria-hidden="true">#</a> 客户端调用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 引入刚才定义的云对象
const msgPush = uniCloud.importObject(&#39;go-work-sub&#39;)

// 在需要用的地方直接调用即可
const sendSubscribeMessage = async () =&gt; {
	msgPush.sendSubscribeMessage(form).then(res =&gt; {
		console.log(&quot;res&quot;, res);
	}).catch(err =&gt; {
		console.log(err);
	})
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[d];function a(r,u){return i(),n("div",null,l)}const c=e(t,[["render",a],["__file","yunhanshu.html.vue"]]);export{c as default};
