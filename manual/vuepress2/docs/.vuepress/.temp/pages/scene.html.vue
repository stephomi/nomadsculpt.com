<template><h1 id="scene" tabindex="-1"><a class="header-anchor" href="#scene" aria-hidden="true">#</a> Scene</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#list">List</RouterLink></li><li><RouterLink to="#multiselection">Multiselection</RouterLink></li><li><RouterLink to="#simple-merge">Simple Merge</RouterLink></li><li><RouterLink to="#voxel-merge">Voxel Merge</RouterLink></li><li><RouterLink to="#separate">Separate</RouterLink><ul><li><RouterLink to="#subtraction">Subtraction</RouterLink></li><li><RouterLink to="#intersection">Intersection</RouterLink></li></ul></li><li><RouterLink to="#primitive">Primitive</RouterLink><ul><li><RouterLink to="#primitive-config">Primitive Config</RouterLink></li><li><RouterLink to="#uv-sphere">UV Sphere</RouterLink></li><li><RouterLink to="#triplanar">Triplanar</RouterLink></li></ul></li></ul></nav>
<hr>
<p>This menu lets you manage the different objects that you might have in Nomad.</p>
<h2 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> List</h2>
<table>
<thead>
<tr>
<th style="text-align:center">Action</th>
<th style="text-align:center">Icon</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Visible</td>
<td style="text-align:center"><img src="@source/icons/show.png#small" alt=""></td>
<td style="text-align:center">Hide the object (or use the object as subtractive mesh by the <a href="#subtraction">Voxel Merger</a>)</td>
</tr>
<tr>
<td style="text-align:center">Edit Name</td>
<td style="text-align:center"><img src="@source/icons/pencil.png#small" alt=""></td>
<td style="text-align:center">Edit the object</td>
</tr>
<tr>
<td style="text-align:center">Delete</td>
<td style="text-align:center"><img src="@source/icons/trash.png#small" alt=""></td>
<td style="text-align:center">Delete the object</td>
</tr>
<tr>
<td style="text-align:center">Move</td>
<td style="text-align:center"><img src="@source/icons/move.png#small" alt=""></td>
<td style="text-align:center">Move the object in the list, it doesn't have any effect on the viewport</td>
</tr>
<tr>
<td style="text-align:center">Duplicate</td>
<td style="text-align:center"><img src="@source/icons/duplicate.png#small" alt=""></td>
<td style="text-align:center">Duplicate the object</td>
</tr>
</tbody>
</table>
<h2 id="multiselection" tabindex="-1"><a class="header-anchor" href="#multiselection" aria-hidden="true">#</a> Multiselection</h2>
<p>You can select multiple object, it can help you achieve two things:</p>
<ul>
<li>using the gizmo tool to move several objects at once</li>
<li>merging the objects thanks to the <a href="#simple-merge">Simple Merge</a> or <a href="#voxel-merge">Voxel Merge</a> feature</li>
</ul>
<p>You can do that by using the <code>Multiselection</code> checkbox, and then by clicking on the object in the list.</p>
<div class="custom-container tip"><p class="custom-container-title">Quick multiselection</p>
<p>You can also multiselect in the viewport by holding the <code>Smooth</code> shortcut and tapping on another mesh.</p>
<p>You can deselect an object by tapping on it again (only if your selection has more than one object).</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">Limited gizmo feature</p>
<p>When using multiselection, the gizmo tool will always ignore masking.
Also, X/Y/Z scaling is removed.</p>
<p>The reason is that multiselection only allows whole mesh transformation, not per vertex transformation.
This might be improved in the future.</p>
</div>
<h2 id="simple-merge" tabindex="-1"><a class="header-anchor" href="#simple-merge" aria-hidden="true">#</a> Simple Merge</h2>
<p>This option will simply make one single object entry from multiple selected objects.</p>
<p>You can see an example in video in the <a href="#separate">Separate</a> section.</p>
<h2 id="voxel-merge" tabindex="-1"><a class="header-anchor" href="#voxel-merge" aria-hidden="true">#</a> Voxel Merge</h2>
<p>Voxel Merge works differently than <a href="#simple-merge">Simple merging</a> in that the topology is completely recomputed.
More importantly, there won't be any separation between the two meshes, so the potential intersections between the two meshes will be gone.</p>
<p>When using the voxel merger you can change the resolution of the voxel by going in the <RouterLink to="/topology.html">Topology</RouterLink> menu.</p>
<p><video controls preload="metadata" poster="/videos/merge_add.jpg"><source src="/videos/merge_add.mp4" type="video/mp4"></video>
</p>
<h2 id="separate" tabindex="-1"><a class="header-anchor" href="#separate" aria-hidden="true">#</a> Separate</h2>
<p>If you have a single object based on several disconnected parts, you can split this object into several objects.
This can be seen as the opposite of <a href="#simple-merge">Simple Merging</a>.</p>
<p><video controls preload="metadata" poster="/videos/merge_separate.jpg"><source src="/videos/merge_separate.mp4" type="video/mp4"></video>
</p>
<h3 id="subtraction" tabindex="-1"><a class="header-anchor" href="#subtraction" aria-hidden="true">#</a> Subtraction</h3>
<p>You can use the remesher to perform boolean operations, for example by subtracting one mesh from another,
The objects that are hidden will be subtracted, they will appear with a cross hatching look.</p>
<p><video controls preload="metadata" poster="/videos/merge_sub.jpg"><source src="/videos/merge_sub.mp4" type="video/mp4"></video>
</p>
<h3 id="intersection" tabindex="-1"><a class="header-anchor" href="#intersection" aria-hidden="true">#</a> Intersection</h3>
<p>If you use the voxel remesher with all the objects hidden, the boolean intersection will be computed.</p>
<p><video controls preload="metadata" poster="/videos/merge_inter.jpg"><source src="/videos/merge_inter.mp4" type="video/mp4"></video>
</p>
<h2 id="primitive" tabindex="-1"><a class="header-anchor" href="#primitive" aria-hidden="true">#</a> Primitive</h2>
<p>If you need to add a new object in your scene, you can add primitive.
You can configure the primitive with some parameters.</p>
<p>However, you need to <code>Validate</code> the primitive in order to sculpt or paint it.
When you <code>Validate</code> a primitive you won't be able to edit the primitives settings anymore.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Primitive</th>
<th style="text-align:center">Icon</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Box</td>
<td style="text-align:center"><img src="@source/icons/cube.png#small" alt=""></td>
<td style="text-align:center">It's a simple cube, you can control the division in X, Y and Z</td>
</tr>
<tr>
<td style="text-align:center">Sphere</td>
<td style="text-align:center"><img src="@source/icons/sphere.png#small" alt=""></td>
<td style="text-align:center">For convenience this is named a Sphere but it is actually a subdivided box, with the <code>Project on sphere</code> forced</td>
</tr>
<tr>
<td style="text-align:center">Cylinder</td>
<td style="text-align:center"><img src="@source/icons/cylinder.png#small" alt=""></td>
<td style="text-align:center">You can add a center hole for the cylinder primitive, for example to make an hollow pipe</td>
</tr>
<tr>
<td style="text-align:center">Torus</td>
<td style="text-align:center"><img src="@source/icons/torus.png#small" alt=""></td>
<td style="text-align:center">The torus can be a good starting point for rings</td>
</tr>
<tr>
<td style="text-align:center">Cone</td>
<td style="text-align:center"><img src="@source/icons/cone.png#small" alt=""></td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">Icosahedron</td>
<td style="text-align:center"><img src="@source/icons/icosahedron.png#small" alt=""></td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">UV-sphere</td>
<td style="text-align:center"><img src="@source/icons/sphere.png#small" alt=""></td>
<td style="text-align:center">You should probably not use this primitive, see <a href="#sphere-warning">Warning below</a></td>
</tr>
<tr>
<td style="text-align:center">Plane</td>
<td style="text-align:center"><img src="@source/icons/rectangle.png#small" alt=""></td>
<td style="text-align:center">It's a simple plane, note that this is the only primitive that is not closed</td>
</tr>
<tr>
<td style="text-align:center">Triplanar</td>
<td style="text-align:center"><img src="@source/icons/sphere.png#small" alt=""></td>
<td style="text-align:center">A special primitive, see <a href="triplanar">Triplanar</a></td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>If you wonder what is the base mesh when you launch Nomad: this is a subdivided box as well.
However the base mesh in Nomad doesn't use <code>Project on sphere</code>, meaning it is not perfectly round.</p>
</div>
<h3 id="primitive-config" tabindex="-1"><a class="header-anchor" href="#primitive-config" aria-hidden="true">#</a> Primitive Config</h3>
<p>Here are a some options that you can find in some primitive:</p>
<ul>
<li><code>Flat subdivision</code> Preserve hard-edges by not smoothing the mesh when subdividing</li>
<li><code>Overall subdivision</code> The number of subdivision</li>
<li><code>Constant density</code> It means that the topology of the primitive will be kept uniform when you play with the settings</li>
<li><code>Project on sphere</code> To get a perfect geometrical sphere but keeping the underlying primitive topology</li>
</ul>
<h3 id="uv-sphere" tabindex="-1"><a class="header-anchor" href="#uv-sphere" aria-hidden="true">#</a> UV Sphere</h3>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>You should probably never use it, the topology of the UV Sphere is not well suited for sculpting, especially on the poles.</p>
<p>Please prefer the <a href="#sphere">Sphere</a>, <a href="#box">Box</a> or <a href="#icosahedron">Icosahedron</a> primitive, along with the <code>Project on sphere</code> option.</p>
<p>Note that the topology can be acceptable for sculpting if you use a very low value for the <code>Division</code> sliders.
You can then use the <code>Overall Subdivision</code> slider to raise the number of polygons.</p>
</div>
<h3 id="triplanar" tabindex="-1"><a class="header-anchor" href="#triplanar" aria-hidden="true">#</a> Triplanar</h3>
<p>This primitive is special in that you should use the <RouterLink to="/tools.html#mask">Masking tool</RouterLink> on it to shape the geometry.</p>
<p><video controls preload="metadata" poster="/videos/triplanar.jpg"><source src="/videos/triplanar.mp4" type="video/mp4"></video>
</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Double-tap on a plane and the camera will focus on this particular plane.
This won't work if you rotate the primitive with the gizmo though.</p>
</div>
<p>Triplanar is using the mask information from 3 planes to fill a voxel grid that is then polygonized (thanks to the <RouterLink to="/topology.html#voxel-remeshere">Voxel Remesher</RouterLink>).</p>
<p>Each plane has its own symmetry plane.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Each time you update the size of the Triplanar primitive, the quality of the mask painting will degrade.</p>
<p>For now there is no option to 'lock' the painting on a single plane, but maybe it will come in the future.
You can use the <RouterLink to="/stroke.html#connected-topology">Connected Topology</RouterLink> to help a little bit, in that if your cursor lies precisely on one plane it won't impact the other planes.</p>
</div>
</template>
