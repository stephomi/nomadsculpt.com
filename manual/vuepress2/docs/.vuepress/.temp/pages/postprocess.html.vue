<template><h1 id="post-process" tabindex="-1"><a class="header-anchor" href="#post-process" aria-hidden="true">#</a> Post process</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#quality">Quality</RouterLink></li><li><RouterLink to="#reflection-ssr">Reflection (SSR)</RouterLink></li><li><RouterLink to="#ambient-occlusion-ssao">Ambient Occlusion (SSAO)</RouterLink></li><li><RouterLink to="#depth-of-field-dof">Depth of Field (DOF)</RouterLink></li><li><RouterLink to="#bloom">Bloom</RouterLink></li><li><RouterLink to="#tone-mapping">Tone Mapping</RouterLink></li><li><RouterLink to="#curvature">Curvature</RouterLink></li><li><RouterLink to="#chromatic-aberration">Chromatic Aberration</RouterLink></li><li><RouterLink to="#vignette">Vignette</RouterLink></li><li><RouterLink to="#grain">Grain</RouterLink></li><li><RouterLink to="#sharpness">Sharpness</RouterLink></li><li><RouterLink to="#temporal-anti-aliasing-taa">Temporal Anti-Aliasing (TAA)</RouterLink></li></ul></nav>
<hr>
<p>Using post processing can dramatically improve the final look of your scene.</p>
<p>Post process can impact the performance by a lot depending on your device.
There's a global checkbox to disable all the postprocess, so that you can quickly go back to sculpting/modeling without losing your presets.
For PBR rendering, <a href="#ambient-occlusion-ssao">Ambient Occlusion</a>, <a href="#reflection-ssr">Reflection</a> and <a href="#tone-mapping">Tone Mapping</a> should be enabled.</p>
<p>However, most of the time you want the post process to be disabled when you are sculpting, to focus on the shape itself of the rendering.</p>
<h2 id="quality" tabindex="-1"><a class="header-anchor" href="#quality" aria-hidden="true">#</a> Quality</h2>
<p>Simply check the options (<code>Max samples</code> and <code>Full Resolution</code>) if you want to improve the quality of the postprocess.<br>
<code>Full resolution</code> can makes a big difference with <a href="#ambient-occlusion-ssao">Ambient Occlusion</a>.</p>
<h2 id="reflection-ssr" tabindex="-1"><a class="header-anchor" href="#reflection-ssr" aria-hidden="true">#</a> Reflection (SSR)</h2>
<p>With this option, objects can reflect other objects in the scene, as long as the objects are visible on the screen.
If you have metallic and shiny objects in your scene, then this option should probably be used.
This effect is only effective with PBR mode.</p>
<table>
<thead>
<tr>
<th style="text-align:center">SSR off</th>
<th style="text-align:center">SSR off</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="@source/images/ssr-off.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/ssr-on.jpg" alt=""></td>
</tr>
</tbody>
</table>
<h2 id="ambient-occlusion-ssao" tabindex="-1"><a class="header-anchor" href="#ambient-occlusion-ssao" aria-hidden="true">#</a> Ambient Occlusion (SSAO)</h2>
<p>Ambient occlusion will darken areas where the light has less chance of reaching (corners, etc).
The effect only depends on the model geometry.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Mode</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Strength</td>
<td style="text-align:center">Intensity of the effect</td>
</tr>
<tr>
<td style="text-align:center">Radius</td>
<td style="text-align:center">How widespread the effect is</td>
</tr>
<tr>
<td style="text-align:center">Curvature bias</td>
<td style="text-align:center">How sensitive the effect is relative to the surface variation</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th style="text-align:center">SSAO off</th>
<th style="text-align:center">SSAO off</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="@source/images/ssao-off.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/ssao-on.jpg" alt=""></td>
</tr>
</tbody>
</table>
<h2 id="depth-of-field-dof" tabindex="-1"><a class="header-anchor" href="#depth-of-field-dof" aria-hidden="true">#</a> Depth of Field (DOF)</h2>
<p>Add a blur effect on the region that is outside the focus.</p>
<p>Simply tap on your model to change the focus point.</p>
<table>
<thead>
<tr>
<th style="text-align:center">DOF off</th>
<th style="text-align:center">DOF focus on far ring</th>
<th style="text-align:center">DOF focus on close ring</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="@source/images/dof-off.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/dof-near.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/dof-far.jpg" alt=""></td>
</tr>
</tbody>
</table>
<h2 id="bloom" tabindex="-1"><a class="header-anchor" href="#bloom" aria-hidden="true">#</a> Bloom</h2>
<p>Blooms will make the bright area of your scene glow.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Bloom off</th>
<th style="text-align:center">Bloom with radius 0</th>
<th style="text-align:center">Bloom with radius 1</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="@source/images/bloom-off.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/bloom-r0.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/bloom-r1.jpg" alt=""></td>
</tr>
</tbody>
</table>
<h2 id="tone-mapping" tabindex="-1"><a class="header-anchor" href="#tone-mapping" aria-hidden="true">#</a> Tone Mapping</h2>
<p><code>Tone Mapping</code> is an operation that will remap HDR values to the <code>[0, 1]</code> range.
If you don't use it (or select <code>none</code>), any color component higher than 1 will be clamped.
Any color variations above this range will then be lost.</p>
<p>You can adjust the overall image with <code>exposure</code>, <code>contrast</code> and <code>saturation</code>.</p>
<p>Notice that with <code>Tone Mapping</code> disabled, some details disappear because the pixels are too bright.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Tone Mapping off</th>
<th style="text-align:center">Tone Mapping on</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="@source/images/tone-off.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/tone-on.jpg" alt=""></td>
</tr>
</tbody>
</table>
<h2 id="curvature" tabindex="-1"><a class="header-anchor" href="#curvature" aria-hidden="true">#</a> Curvature</h2>
<p>Sharpen the edges of the model.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Curvature off</th>
<th style="text-align:center">Curvature on</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="@source/images/curvature-off.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/curvature-on.jpg" alt=""></td>
</tr>
</tbody>
</table>
<h2 id="chromatic-aberration" tabindex="-1"><a class="header-anchor" href="#chromatic-aberration" aria-hidden="true">#</a> Chromatic Aberration</h2>
<p>Simulate the lens artifacts with light being decomposed around the screen edges.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Chromatic off</th>
<th style="text-align:center">Chromatic on</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="@source/images/chroma-off.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/chroma-on.jpg" alt=""></td>
</tr>
</tbody>
</table>
<h2 id="vignette" tabindex="-1"><a class="header-anchor" href="#vignette" aria-hidden="true">#</a> Vignette</h2>
<p>Simulate the lens artifacts by darkening the screen edges.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Vignette off</th>
<th style="text-align:center">Vignette on</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="@source/images/vignette-off.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/vignette-on.jpg" alt=""></td>
</tr>
</tbody>
</table>
<h2 id="grain" tabindex="-1"><a class="header-anchor" href="#grain" aria-hidden="true">#</a> Grain</h2>
<p>Add a grain effect, it can help make the image a bit less artificial.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Grain off</th>
<th style="text-align:center">Grain on</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="@source/images/grain-off.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/grain-on.jpg" alt=""></td>
</tr>
</tbody>
</table>
<h2 id="sharpness" tabindex="-1"><a class="header-anchor" href="#sharpness" aria-hidden="true">#</a> Sharpness</h2>
<p>Sharpen the model edges.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Sharpness off</th>
<th style="text-align:center">Sharpness on</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><img src="@source/images/sharpen-off.jpg" alt=""></td>
<td style="text-align:center"><img src="@source/images/sharpen-on.jpg" alt=""></td>
</tr>
</tbody>
</table>
<h2 id="temporal-anti-aliasing-taa" tabindex="-1"><a class="header-anchor" href="#temporal-anti-aliasing-taa" aria-hidden="true">#</a> Temporal Anti-Aliasing (TAA)</h2>
<p>This effect is enabled by default, this is not an artistic effect but a quality one.</p>
<p>When the camera doesn't move, Nomad re-uses the previous frames to improve the quality of the overall image.
TAA tries to do the same thing when the camera is moving, by reprojecting the previous frames onto the new view point.
Most of the time it should be ok, but it can introduce some artifacts when the reprojection is a bit off (ghosting artifacts).</p>
<p>The effects that benefits the most from the accumulation are <a href="#ambient-occlusion-ssao">Ambient Occlusion</a>, <a href="#reflection-ssr">Reflection</a> and <a href="#ambient-occlusion-ssao">Ambient Occlusion</a>, <a href="#dof">Depth of Field</a> and <a href="#bloom">Bloom</a>.</p>
</template>
