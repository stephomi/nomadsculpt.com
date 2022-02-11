<template><h1 id="lighting" tabindex="-1"><a class="header-anchor" href="#lighting" aria-hidden="true">#</a> Lighting</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#pbr">PBR</RouterLink></li><li><RouterLink to="#lights">Lights</RouterLink><ul><li><RouterLink to="#directional">Directional</RouterLink></li><li><RouterLink to="#spot">Spot</RouterLink></li><li><RouterLink to="#point">Point</RouterLink></li><li><RouterLink to="#shadows">Shadows</RouterLink></li></ul></li><li><RouterLink to="#matcap">Matcap</RouterLink></li></ul></nav>
<hr>
<p>You can choose between two rendering modes:</p>
<table>
<thead>
<tr>
<th style="text-align:center">Mode</th>
<th style="text-align:center">Meaning</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="#pbr">PBR</a></td>
<td style="text-align:center">Physically Based Rendering</td>
<td style="text-align:center">Painting with metalness/roughness</td>
</tr>
<tr>
<td style="text-align:center"><a href="#matcap">Matcap</a></td>
<td style="text-align:center">Material Capture</td>
<td style="text-align:center">Mostly be useful for pure sculpting</td>
</tr>
</tbody>
</table>
<p>If you want to learn more about what metalness and roughness stands for, see the <RouterLink to="/paint.html">Vertex Paint</RouterLink> section.</p>
<h2 id="pbr" tabindex="-1"><a class="header-anchor" href="#pbr" aria-hidden="true">#</a> PBR</h2>
<p>This manual won't dive into the details about Physically Based Rendering.</p>
<p>One important thing to keep in mind is that lighting and material are fully separated.
It means you can paint your object color, roughness and metalness while the lighting is handled independently.
It allows you to paint your object and then tweak the lighting later, without breaking the overall look of your model.</p>
<h2 id="lights" tabindex="-1"><a class="header-anchor" href="#lights" aria-hidden="true">#</a> Lights</h2>
<p>Lights are only available with <a href="#pbr">PBR mode</a>.
For performance reasons, you are limited to only 3 lights.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You can load a glTF file with more than 3 lights in it and Nomad will keep all of them.
However it won't necessarily perform well.</p>
</div>
<p>Here are the type of lights currently supported:</p>
<table>
<thead>
<tr>
<th style="text-align:center">Mode</th>
<th style="text-align:center">Description</th>
<th style="text-align:center">Can cast shadows</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="#directional">Directional</a></td>
<td style="text-align:center">Infinitely far away sun light</td>
<td style="text-align:center">yes</td>
</tr>
<tr>
<td style="text-align:center"><a href="#spot">Spot</a></td>
<td style="text-align:center">Cone shaped lights</td>
<td style="text-align:center">Yes</td>
</tr>
<tr>
<td style="text-align:center"><a href="#point">Point</a></td>
<td style="text-align:center">Omni-directional point of light</td>
<td style="text-align:center">No</td>
</tr>
</tbody>
</table>
<h3 id="directional" tabindex="-1"><a class="header-anchor" href="#directional" aria-hidden="true">#</a> Directional</h3>
<p>It emits light from infinitely far away, with a uniform intensity.
Unlike the other type of lights, its 3d position in the scene doesn't matter, only its orientation does.</p>
<p>You can attach this light to the camera, that way it has consistent lighting.<br>
For example you can use it to make a rim light (a strong light that emits from the back of your model, pointing towards the camera) that always lights the back of your model.</p>
<h3 id="spot" tabindex="-1"><a class="header-anchor" href="#spot" aria-hidden="true">#</a> Spot</h3>
<p>Spot light emits light in a single direction, restricted by a cone shape.</p>
<h3 id="point" tabindex="-1"><a class="header-anchor" href="#point" aria-hidden="true">#</a> Point</h3>
<p>Point light will emit light in every direction.<br>
At the moment, point light doesn't support shadows.</p>
<h3 id="shadows" tabindex="-1"><a class="header-anchor" href="#shadows" aria-hidden="true">#</a> Shadows</h3>
<p>The option <code>normal bias</code> can be used to reduce common shadow artifacts (acne/peter-panning).</p>
<p>The quality of the shadows depends on the size of the objects relative to the entire scene.<br>
If you have a big object in your scene that doesn't need to cast shadows (for example a big plane), make sure to disable shadow casting in its <RouterLink to="/material.html#cast-shadows">material settings</RouterLink>.</p>
<h2 id="matcap" tabindex="-1"><a class="header-anchor" href="#matcap" aria-hidden="true">#</a> Matcap</h2>
<p>As the name suggests (MATerial CAPture), a matcap takes care of both the lighting and material information in a single image.
Since the material itself is already present in the matcap, roughness and metalness painting channel will be ignored.
The painting color will be multiplied against the matcap, meaning if you have a black/gray matcap, using white paint won't make it brighter.</p>
<p>Artists tend to favor this mode for sculpting purposes since they allow them to focus on the shape and geometry itself.</p>
</template>
