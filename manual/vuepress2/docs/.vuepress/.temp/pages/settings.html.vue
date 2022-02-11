<template><h1 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> Settings</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#wireframe">Wireframe</RouterLink></li><li><RouterLink to="#smooth-shading">Smooth Shading</RouterLink></li><li><RouterLink to="#grid">Grid</RouterLink></li><li><RouterLink to="#render-resolution">Render Resolution</RouterLink></li><li><RouterLink to="#scene-painting">Scene Painting</RouterLink></li><li><RouterLink to="#two-sided">Two sided</RouterLink></li><li><RouterLink to="#outline-selection">Outline Selection</RouterLink></li><li><RouterLink to="#darken-unselected">Darken Unselected</RouterLink></li><li><RouterLink to="#max-detail-range">Max Detail Range</RouterLink></li><li><RouterLink to="#experimental">Experimental</RouterLink><ul><li><RouterLink to="#partial-drawing">Partial Drawing</RouterLink></li><li><RouterLink to="#keep-topology-at-import">Keep Topology At Import</RouterLink></li><li><RouterLink to="#load-project-gui-settings">Load project GUI settings</RouterLink></li></ul></li></ul></nav>
<hr>
<p>Most of the options in this section concern the viewport display.</p>
<h2 id="wireframe" tabindex="-1"><a class="header-anchor" href="#wireframe" aria-hidden="true">#</a> Wireframe</h2>
<p>Display the topology of the scene.</p>
<p>Note that showing the Wireframe will lower the performance.</p>
<h2 id="smooth-shading" tabindex="-1"><a class="header-anchor" href="#smooth-shading" aria-hidden="true">#</a> Smooth Shading</h2>
<p>If Smooth Shading is disabled, the faces are shaded independently, so you can see the underlying topology.
This is the reason why disabling it is preferred during the sculpting stage.
However for rendering purposes, sometimes you might want to enable it.</p>
<p>Disabling Smooth Shading improves the performance a little bit.</p>
<h2 id="grid" tabindex="-1"><a class="header-anchor" href="#grid" aria-hidden="true">#</a> Grid</h2>
<p>Display a planar grid so that you can get a better understanding of how your scene is positioned on the scene.</p>
<h2 id="render-resolution" tabindex="-1"><a class="header-anchor" href="#render-resolution" aria-hidden="true">#</a> Render Resolution</h2>
<p>You can change the render resolution, it can be useful if you want to increase the performance in case the rendering is the bottleneck.</p>
<h2 id="scene-painting" tabindex="-1"><a class="header-anchor" href="#scene-painting" aria-hidden="true">#</a> Scene Painting</h2>
<p>You can check this option if you want to ignore the object's painting.
The default paint used is a white non-metallic material, at 25% roughness.</p>
<h2 id="two-sided" tabindex="-1"><a class="header-anchor" href="#two-sided" aria-hidden="true">#</a> Two sided</h2>
<p>All faces point in a certain direction.
Faces that are considered <em>backface</em> are the ones that point &quot;away&quot; from the camera viewpoint.</p>
<p>For example the startup simple sphere will have its faces point towards the outside.
If you move the camera inside the sphere you'll then see the backface of these faces.</p>
<p>Most of the time you shouldn't see the backface part of faces, so coloring them can help you detect potential issues or incorrect topology.</p>
<p>Disabling <code>two sided</code> rendering can improve rendering performance a bit.</p>
<h2 id="outline-selection" tabindex="-1"><a class="header-anchor" href="#outline-selection" aria-hidden="true">#</a> Outline Selection</h2>
<p>You can display an outline on your current selection.</p>
<p>This is useful to get visual feedback on your current selected meshes in case <a href="#darken-unselected">Darken Unselected</a> is disabled.</p>
<p>From a performance point of view, using <a href="#darken-unselected">Darken Unselected</a> is much better than using the outline solution.</p>
<h2 id="darken-unselected" tabindex="-1"><a class="header-anchor" href="#darken-unselected" aria-hidden="true">#</a> Darken Unselected</h2>
<p>The objects that are not selected will be darkened so that the current selection can stand out.</p>
<h2 id="max-detail-range" tabindex="-1"><a class="header-anchor" href="#max-detail-range" aria-hidden="true">#</a> Max Detail Range</h2>
<p>This slider can let you increase the maximum value of 2 details sliders: the one that drives the Voxel Remesher and the one for Dynamic Topology.</p>
<h2 id="experimental" tabindex="-1"><a class="header-anchor" href="#experimental" aria-hidden="true">#</a> Experimental</h2>
<h3 id="partial-drawing" tabindex="-1"><a class="header-anchor" href="#partial-drawing" aria-hidden="true">#</a> Partial Drawing</h3>
<p>If you want to sculpt a very small part of a big mesh or big scene, it can increase performance by a lot!
However you can get noticeable artifacts</p>
<!--
### Sculpt Parallel
You should let this option disabled.
 -->
<h3 id="keep-topology-at-import" tabindex="-1"><a class="header-anchor" href="#keep-topology-at-import" aria-hidden="true">#</a> Keep Topology At Import</h3>
<p>When you import or load a mesh, a quick optimization will occur.
It can delete unused</p>
<h3 id="load-project-gui-settings" tabindex="-1"><a class="header-anchor" href="#load-project-gui-settings" aria-hidden="true">#</a> Load project GUI settings</h3>
<p>When you save in <em>.glTF</em> format, all the settings are saved in the file as well.
However when you load a project, some settings are ignored, typically the that concerns the <a href="#interface">Interface</a>, but also some other &quot;general purpose global settings&quot;.</p>
</template>
