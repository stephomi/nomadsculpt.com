<template><h1 id="stroke" tabindex="-1"><a class="header-anchor" href="#stroke" aria-hidden="true">#</a> Stroke</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#alpha">Alpha</RouterLink><ul><li><RouterLink to="#invert-value">Invert value</RouterLink></li><li><RouterLink to="#alpha-scale">Alpha scale</RouterLink></li></ul></li><li><RouterLink to="#falloff">Falloff</RouterLink></li><li><RouterLink to="#stroke-type">Stroke Type</RouterLink><ul><li><RouterLink to="#dot-settings">Dot settings</RouterLink></li></ul></li><li><RouterLink to="#advanced">Advanced</RouterLink><ul><li><RouterLink to="#accumulate-stroke">Accumulate stroke</RouterLink></li><li><RouterLink to="#connected-topology">Connected topology</RouterLink></li><li><RouterLink to="#front-facing-vertex-only">Front-facing vertex only</RouterLink></li><li><RouterLink to="#allow-dynamic-topology">Allow Dynamic Topology</RouterLink></li></ul></li></ul></nav>
<hr>
<p>You can customize the stroke behavior of most tool brushes.
The settings should be fairly similar to the ones present in 2d painting applications.</p>
<p>However some options are specific to the sculpting and 3d field.</p>
<h2 id="alpha" tabindex="-1"><a class="header-anchor" href="#alpha" aria-hidden="true">#</a> Alpha</h2>
<p>The <code>Alpha</code> is a texture that will modulate your brush behavior.
It's a grayscale image, where black pixels mean no deformation and white pixels full deformation.</p>
<p>For now the texture is never resized, so beware that huge image can slow down the performance a bit.</p>
<h3 id="invert-value" tabindex="-1"><a class="header-anchor" href="#invert-value" aria-hidden="true">#</a> Invert value</h3>
<p>Use this option if the pattern is upside-down when you sculpt</p>
<h3 id="alpha-scale" tabindex="-1"><a class="header-anchor" href="#alpha-scale" aria-hidden="true">#</a> Alpha scale</h3>
<p>Use this option to scale the alpha pattern.</p>
<p>At maximum value, the brush radius (circle) is inside the alpha square (left image).</p>
<p>At minimum value, the alpha square is inside the tool circle radius (right image).</p>
<p><img src="@source/images/alpha_scale.jpg" alt="Main"></p>
<h2 id="falloff" tabindex="-1"><a class="header-anchor" href="#falloff" aria-hidden="true">#</a> Falloff</h2>
<p>This is similar to the <a href="#alpha">Alpha</a>, except that you drive the intensity with a single curve.
when the curve is on the top, this is full deformation, when it's at the bottom the brush has no effect.</p>
<div class="custom-container tip"><p class="custom-container-title">Symmetrical curve</p>
<p>The curve is always symmetric, but if you go in the <RouterLink to="/interface.html">Interface</RouterLink> menu, you can choose to only display the left part of the curve.</p>
<p>It doesn't change the behavior of the falloff, this is mostly for convenience.</p>
</div>
<h2 id="stroke-type" tabindex="-1"><a class="header-anchor" href="#stroke-type" aria-hidden="true">#</a> Stroke Type</h2>
<p>By default, most brushes are using the <code>Dot</code> stroke type.
<code>Dot</code> means that several instances of the brush will happen at regular intervals when you sculpt.
You can customize the <a href="#dot-settings">Dot behavior</a>.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Menu</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Dot</td>
<td style="text-align:center">Default stroke type</td>
</tr>
<tr>
<td style="text-align:center">Grab - dynamic radius</td>
<td style="text-align:center">Stamp-style where you change the radius by dragging</td>
</tr>
<tr>
<td style="text-align:center">Grab - dynamic intensity</td>
<td style="text-align:center">Stamp-style where only the intensity can be modulated</td>
</tr>
</tbody>
</table>
<p><video controls preload="metadata" poster="/videos/stroke_type.jpg"><source src="/videos/stroke_type.mp4" type="video/mp4"></video>
</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You can get interesting result by using <code>Grab - dynamic radius</code> along with the <RouterLink to="/tools.html#move">Move</RouterLink> or <RouterLink to="/tools.html#drag">Drag</RouterLink> tools.</p>
</div>
<h3 id="dot-settings" tabindex="-1"><a class="header-anchor" href="#dot-settings" aria-hidden="true">#</a> Dot settings</h3>
<h4 id="adjust-spacing-intensity" tabindex="-1"><a class="header-anchor" href="#adjust-spacing-intensity" aria-hidden="true">#</a> Adjust spacing intensity</h4>
<p>Adjust the brush intensity to ensure consistent deformation depending on the stroke spacing.</p>
<h4 id="stroke-spacing" tabindex="-1"><a class="header-anchor" href="#stroke-spacing" aria-hidden="true">#</a> Stroke spacing</h4>
<p>Spacing between each stroke, relative to the tool radius.
Lower value will allow smoother stroke but overall performance will decrease.</p>
<h4 id="dragging-distance" tabindex="-1"><a class="header-anchor" href="#dragging-distance" aria-hidden="true">#</a> Dragging distance</h4>
<p>The stroke will lag behind the pointer position according to a certain distance.</p>
<p>This can be useful if you want to follow precisely a path in a smooth way.</p>
<h4 id="stroke-smoothing" tabindex="-1"><a class="header-anchor" href="#stroke-smoothing" aria-hidden="true">#</a> Stroke smoothing</h4>
<p>Average multiple pointer position to get a smoother stroke.
With high values, the stroke will lag behind the pointer but will eventually catch up.</p>
<p>It can also be useful for drawing smooth lines.</p>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h4>
<p>Snap the stroke if the pointer lies close to the last recorded stroke.</p>
<p>This is useful if you want to draw a long continuous line in several strokes.</p>
<h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced" aria-hidden="true">#</a> Advanced</h2>
<h3 id="accumulate-stroke" tabindex="-1"><a class="header-anchor" href="#accumulate-stroke" aria-hidden="true">#</a> Accumulate stroke</h3>
<p>If this option is enabled, there is no limit to how much matter you can add/remove per stroke.</p>
<h3 id="connected-topology" tabindex="-1"><a class="header-anchor" href="#connected-topology" aria-hidden="true">#</a> Connected topology</h3>
<p>This option will only sculpt the vertices that are linked to the picked surface.
This is typically used for the Move tool, for example if you want to exclusively move a part that self-intersects with another part.</p>
<p><video controls preload="metadata" poster="/videos/connected_topology.jpg"><source src="/videos/connected_topology.mp4" type="video/mp4"></video>
</p>
<h3 id="front-facing-vertex-only" tabindex="-1"><a class="header-anchor" href="#front-facing-vertex-only" aria-hidden="true">#</a> Front-facing vertex only</h3>
<p>This option will ignore back facing vertices.
It can be useful if you want to paint part of a thin geometry without impacting the other side.
It also works for sculpting but you might experience some artifacts.</p>
<h3 id="allow-dynamic-topology" tabindex="-1"><a class="header-anchor" href="#allow-dynamic-topology" aria-hidden="true">#</a> Allow Dynamic Topology</h3>
<p>This option is only available if your mesh is in <RouterLink to="/topology.html#dynamic-topology">Dynamic Topology</RouterLink> mode.
You can disable or enable the refinement for a specific tool.</p>
</template>
