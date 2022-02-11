<template><h1 id="material" tabindex="-1"><a class="header-anchor" href="#material" aria-hidden="true">#</a> Material</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#opacity-mode">Opacity mode</RouterLink><ul><li><RouterLink to="#opaque">Opaque</RouterLink></li><li><RouterLink to="#blending">Blending</RouterLink></li><li><RouterLink to="#additive">Additive</RouterLink></li><li><RouterLink to="#dithering">Dithering</RouterLink></li><li><RouterLink to="#refraction">Refraction</RouterLink></li></ul></li><li><RouterLink to="#always-unlit">Always unlit</RouterLink></li><li><RouterLink to="#casts-shadows">Casts shadows</RouterLink></li><li><RouterLink to="#two-sided">Two sided</RouterLink></li><li><RouterLink to="#smooth-shading">Smooth Shading</RouterLink></li></ul></nav>
<hr>
<p>Materials are properties that can change the look of your object.
For precise control over the object's painting, see the <RouterLink to="/paint.html">Vertex Paint options</RouterLink>;</p>
<p>At the moment, each object has its own material, two objects cannot share the same material.</p>
<h2 id="opacity-mode" tabindex="-1"><a class="header-anchor" href="#opacity-mode" aria-hidden="true">#</a> Opacity mode</h2>
<h3 id="opaque" tabindex="-1"><a class="header-anchor" href="#opaque" aria-hidden="true">#</a> Opaque</h3>
<p>The default mode and the fastest.</p>
<h3 id="blending" tabindex="-1"><a class="header-anchor" href="#blending" aria-hidden="true">#</a> Blending</h3>
<p>You can make your mesh semi-transparent with this slider.
Note that because of real-time constraints, you can have noticeable visual artifacts in some cases if your object has a complex shape.</p>
<h3 id="additive" tabindex="-1"><a class="header-anchor" href="#additive" aria-hidden="true">#</a> Additive</h3>
<p>You can make your mesh semi-transparent with this slider.</p>
<p>You can set an opacity value higher than 1, which means the object will be brighter.<br>
It can be useful if you want to use <RouterLink to="/postprocess.html#bloom">bloom</RouterLink> and the <code>threshold parameter</code> to only make this object glow like an emissive object.</p>
<p>This mode tends to have less artifacts than <a href="#blending">Blending</a> (order independent transparency).</p>
<h3 id="dithering" tabindex="-1"><a class="header-anchor" href="#dithering" aria-hidden="true">#</a> Dithering</h3>
<p>Make the object semi-transparent by discarding some pixels in a random fashion.</p>
<h3 id="refraction" tabindex="-1"><a class="header-anchor" href="#refraction" aria-hidden="true">#</a> Refraction</h3>
<p>This mode can be used to simulate glass material.
Because of real time constraints, self-refraction and multi-layered refraction is somewhat limited.</p>
<p>The roughness painting of the model impacts how blurry the refraction is.
By default, every object created in Nomad has a roughness slightly around 25%, thus the refraction won't be perfect but a bit blurry.
You can use the <code>paint glossy</code> button to repaint your model with a roughness and metalness of 0 (the colors won't be affected).</p>
<p>There are 2 different roughness at play, the one driving how blurry the reflection is on the surface, and the other one driving the interior (refraction).<br>
However, since there is only one painting roughness channel in Nomad, both interior and exterior roughness will share the same value.<br>
In order to have different values (for example a lollipop with sharp surface but blurry interior) you use the sliders <code>Surface glossiness</code> and <code>Interior roughness</code> to override the painted roughness.</p>
<p><video controls preload="metadata" poster="/videos/refraction.jpg"><source src="/videos/refraction.mp4" type="video/mp4"></video>
</p>
<h2 id="always-unlit" tabindex="-1"><a class="header-anchor" href="#always-unlit" aria-hidden="true">#</a> Always unlit</h2>
<p>If enabled, the object will ignore PBR and Matcap and simply display its color painting without shading.
Note that if you use <a href="#additive">Additive</a>, you can paint transparency directly by using black color.</p>
<h2 id="casts-shadows" tabindex="-1"><a class="header-anchor" href="#casts-shadows" aria-hidden="true">#</a> Casts shadows</h2>
<p>For now <code>Auto</code> is the same as <code>On</code>.
Transparent objects also cast shadows (in a dithering pattern to emulate blended shadows).<br>
Make sure to disable shadow casting if you have a big object in your scene that doesn't need to cast shadows (for example a big floor).</p>
<h2 id="two-sided" tabindex="-1"><a class="header-anchor" href="#two-sided" aria-hidden="true">#</a> Two sided</h2>
<p>See the <RouterLink to="/settings.html#two-sided">global option</RouterLink>.<br>
<code>Auto</code> value will use the global option.</p>
<h2 id="smooth-shading" tabindex="-1"><a class="header-anchor" href="#smooth-shading" aria-hidden="true">#</a> Smooth Shading</h2>
<p>See the <RouterLink to="/settings.html#smooth-shading">global option</RouterLink>.<br>
<code>Auto</code> value will use the global option.</p>
</template>
