import{_ as e,o as n,c as i,e as l}from"./app-2dc9ef31.js";const s={},r=l(`<h4 id="three-js" tabindex="-1"><a class="header-anchor" href="#three-js" aria-hidden="true">#</a> Three.js</h4><p>Three.js 是一个开源的应用级 3D JavaScript 库，可以让开发者在网页上创建 3D 体验。Three.js 屏蔽了 WebGL的底层调用细节，让开发者能更快速的进行3D场景效果的开发。</p><h4 id="three-js的一些重要概念" tabindex="-1"><a class="header-anchor" href="#three-js的一些重要概念" aria-hidden="true">#</a> Three.js的一些重要概念</h4><ul><li>scence 场景</li></ul><blockquote><p>场景像一个容器（container），可以将物体(模型，粒子，光源，相机等)加入其中。</p></blockquote><ul><li>objects 物体</li></ul><blockquote><p>物体可以有很多种，比如原始的几何体，导入的模型 ，粒子，光源等。</p></blockquote><ul><li>camera 相机</li></ul><blockquote><p>理论上的视角，虽然相机也被加入了场景中，但是相机是看不见的。</p></blockquote><ul><li>renderer 渲染器</li></ul><blockquote><p>从相机的角度渲染场景，结果将被绘制到 canvas 中。</p></blockquote><h5 id="透视相机" tabindex="-1"><a class="header-anchor" href="#透视相机" aria-hidden="true">#</a> 透视相机</h5><p>Three.js最常使用的是透视相机，它是模拟人的观察视角：物体近大远小。</p><p>透视相机有四个构造参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>constructor(fov?: number, aspect?: number, near?: number, far?: number);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>视野(The field of view)</li></ul><ol><li>视野（fov）以度为单位表示，表示视觉角度的大小。</li><li>角度越大看到的范围越大，但是太大就会造成场景中物体变形。</li><li>一般45～75会比较合适。</li></ol><ul><li>宽高比(Aspect) 纵横比需要设置为画布的宽度除以其高度，否则会造成场景中物体变形。</li><li>近平面距离(Near) 比近平面距离近的物体将不会被渲染，也就是说不能被看见。</li><li>远平面距离(Far) 比远平面距离远的物体将不会被渲染，也不能被看见。</li></ul><h4 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;template&gt;
  &lt;div class=&quot;container&quot; ref=&quot;container&quot;&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, onMounted, onBeforeUnmount } from &#39;vue&#39;;
import * as THREE from &#39;three&#39;;
import { OrbitControls } from &#39;three/examples/jsm/controls/OrbitControls&#39;;

const container = ref(null);
let renderer, scene, camera, cube,controls, axes;

onMounted(() =&gt; {
  // 创建场景
  scene = new THREE.Scene();

  // 创建相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth /	window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // 创建渲染器
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value.appendChild(renderer.domElement);

  // 向场景中添加坐标轴
  //100是自定义的坐标系显示的长度
  axes = new THREE.AxesHelper(100);
  scene.add(axes);

  // 创建控制器
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;

  // 创建一个方块(cube)对象
  const geometry = new THREE.BoxGeometry(1,1,1);
  const material = new THREE.MeshBasicMaterial(
      {
        color: 0x1e80ff, //颜色
        transparent: true, //开启材质透明
        opacity: 0.6 //透明度，范围0-1 效果同css opacity
        // wireframe: true //以线框展示
      }
  );
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // 渲染场景
  const animate = () =&gt; {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };
  animate();
});

onBeforeUnmount(() =&gt; {
  if (renderer) {
    renderer.dispose();
  }
});
&lt;/script&gt;

&lt;style lang=&quot;scss&quot; scoped&gt;
.container {
  //width: 100%;
  height: calc(100vh - 76px);
  overflow: hidden;
}
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),d=[r];function a(c,v){return n(),i("div",null,d)}const u=e(s,[["render",a],["__file","threejsrumen.html.vue"]]);export{u as default};
