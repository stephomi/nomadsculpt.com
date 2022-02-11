<template><h1 id="vertex-painting" tabindex="-1"><a class="header-anchor" href="#vertex-painting" aria-hidden="true">#</a> Vertex Painting</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#stroke-painting">Stroke Painting</RouterLink></li><li><RouterLink to="#material">Material</RouterLink></li></ul></nav>
<hr>
<h2 id="stroke-painting" tabindex="-1"><a class="header-anchor" href="#stroke-painting" aria-hidden="true">#</a> Stroke Painting</h2>
<p>Most sculpting tools can paint as well, you can select the intensity and the channel you want to paint on.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You might consider turning on <code>Smooth Shading</code> <RouterLink to="/settings.html#smooth-shading">globally</RouterLink> or <RouterLink to="/material.html#smooth-shading">per-object</RouterLink> if you are painting a metallic surface on a low poly object.</p>
</div>
<h2 id="material" tabindex="-1"><a class="header-anchor" href="#material" aria-hidden="true">#</a> Material</h2>
<p><RouterLink to="/lighting.html#pbr">PBR</RouterLink> painting is using 3 channels at the moment.</p>
<ul>
<li><code>Color</code> As the name suggests it represents the base color</li>
<li><code>Metalness</code> It simply tells if the surface is metallic or not. The value should be either 0% or 100% most of the time, in-between values should be exceptional.</li>
<li><code>Roughness</code> It tells how &quot;rough&quot; or &quot;smooth&quot; a surface is. A low value for the roughness means that the reflections will be sharp.</li>
</ul>
<!--
| Metalness | Roughness 0%                    | Roughness 50%                    | Roughness 100%                    |
| :---:     | :---:                           |:---:                             |:---:                              |
| 0%        | ![](./images/dielectric_r0.jpg) | ![](./images/dielectric_r50.jpg) | ![](./images/dielectric_r100.jpg) |
| 100%      | ![](./images/metal_r0.jpg)      | ![](./images/metal_r50.jpg)      | ![](./images/metal_r100.jpg)      |
-->
<p>You can choose to disable some of these channels (checkbox) so that painting will simply keep the original value.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Channel masking is currently not available if you have an active <RouterLink to="/layers.html">layer</RouterLink>.
This is because layers only share a single opacity channel among all 3 channels (color/roughness/metalness).</p>
<p>Maybe in the future, each channel will have its own alpha channel to remove this limitation.</p>
</div>
<table>
<thead>
<tr>
<th style="text-align:center"></th>
<th style="text-align:center">Metalness 0%</th>
<th style="text-align:center">Metalness 100%</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Roughness 0%</td>
<td style="text-align:center"><img src="@source/images/dielectric_r0.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/metal_r0.jpg" alt=""></td>
</tr>
<tr>
<td style="text-align:center">Roughness 50%</td>
<td style="text-align:center"><img src="@source/images/dielectric_r50.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/metal_r50.jpg" alt=""></td>
</tr>
<tr>
<td style="text-align:center">Roughness 100%</td>
<td style="text-align:center"><img src="@source/images/dielectric_r100.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/metal_r100.jpg" alt=""></td>
</tr>
</tbody>
</table>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Metalness and roughness can't be supported if you are using <RouterLink to="/lighting.html#matcap">Matcap rendering</RouterLink>, so if you paint you will only see the colors.</p>
</div>
</template>
