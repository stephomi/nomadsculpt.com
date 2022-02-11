<template><h1 id="topology" tabindex="-1"><a class="header-anchor" href="#topology" aria-hidden="true">#</a> Topology</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#voxel-remesher">Voxel Remesher</RouterLink><ul><li><RouterLink to="#boolean">Boolean</RouterLink></li></ul></li><li><RouterLink to="#multiresolution">Multiresolution</RouterLink><ul><li><RouterLink to="#subdivision">Subdivision</RouterLink></li><li><RouterLink to="#multiresolution-workflow">Multiresolution Workflow</RouterLink></li></ul></li><li><RouterLink to="#dynamic-topology">Dynamic Topology</RouterLink><ul><li><RouterLink to="#brush">Brush</RouterLink></li><li><RouterLink to="#global">Global</RouterLink></li><li><RouterLink to="#settings">Settings</RouterLink></li></ul></li><li><RouterLink to="#decimate">Decimate</RouterLink></li><li><RouterLink to="#uv-unwrap">UV unwrap</RouterLink></li><li><RouterLink to="#other">Other</RouterLink></li></ul></nav>
<hr>
<p>Nomad is a polygonal software, it uses triangles and quads to handle the geometry.
By topology, we refer to both the number of faces but also the way points (vertices) are connected.</p>
<p>It's important to keep track of the topology, especially if you want to sculpt or paint fine details.</p>
<div class="custom-container tip"><p class="custom-container-title">How to keep track of your topology?</p>
<p>You can display the <RouterLink to="/settings.html#wireframe">Wireframe</RouterLink> or simply disable <RouterLink to="/settings.html#smooth-shading">Smooth Shading</RouterLink>.</p>
</div>
<p>For now there is three main way to edit the topology of one object:</p>
<table>
<thead>
<tr>
<th style="text-align:center">Method</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><a href="#voxel-remesher">Voxel Remesher</a></td>
<td style="text-align:center">Recompute a new topology with uniform density</td>
</tr>
<tr>
<td style="text-align:center"><a href="#multiresolution">Multiresolution</a></td>
<td style="text-align:center">Go back and forth between multiple resolution of your objects</td>
</tr>
<tr>
<td style="text-align:center"><a href="#dynamic-topology">Dynamic Topology</a></td>
<td style="text-align:center">Add/Remove faces locally in real-time when sculpting or painting</td>
</tr>
<tr>
<td style="text-align:center"><a href="#decimation">Decimation</a></td>
<td style="text-align:center">Remove faces by retains as much details as possible</td>
</tr>
</tbody>
</table>
<h2 id="voxel-remesher" tabindex="-1"><a class="header-anchor" href="#voxel-remesher" aria-hidden="true">#</a> Voxel Remesher</h2>
<p>When using the <code>Voxel Remesher</code>, the entire mesh will force the topology to have an uniform resolution, meaning all the polygons have more or less the same size.<br>
This is very useful when you don't want to think about topology and simply do free-form sculpting.</p>
<p>A typical sculpting workflow can start by using the <code>Voxel Remesher</code> to block-out a rough shape with a low resolution.
Simply hit the <em>Remesh</em> button once in a while when you are stretching the mesh too much to avoid too much distortion.</p>
<p><video controls preload="metadata" poster="/videos/voxel_remesher.jpg"><source src="/videos/voxel_remesher.mp4" type="video/mp4"></video>
</p>
<div class="custom-container tip"><p class="custom-container-title">Voxel?</p>
<p>As stated above, Nomad is a polygonal software, but the <code>Voxel Remesher</code> is one exception where another approach is used (temporarily) to perform the remeshing.</p>
<p>One big difference is that the voxel approach won't accept self intersection, so these will be resolved.
Also it doesn't support mesh with holes in it.</p>
<p>By holes, we don't mean the <code>genus hole</code> (<code>hole</code> of a donus), but instead mesh that are not <code>watertight</code>/<code>closed</code>.
Typically, what it means is that before applying the remeshing, every holes will be filled, similarly to the <RouterLink to="/tools.html#trim">Trim tool</RouterLink> or <RouterLink to="/scene.html#hole-filling">Hole filling feature</RouterLink>.</p>
</div>
<h3 id="boolean" tabindex="-1"><a class="header-anchor" href="#boolean" aria-hidden="true">#</a> Boolean</h3>
<p>Because we are using voxel for the remeshing, it also means you can easily merge two objects into one or subtract one from another.<br>
You can learn more in the <RouterLink to="/scene.html#subtraction">voxel booleans</RouterLink> section.</p>
<h2 id="multiresolution" tabindex="-1"><a class="header-anchor" href="#multiresolution" aria-hidden="true">#</a> Multiresolution</h2>
<p>The multiresolution feature is useful for mostly two scenario:</p>
<ul>
<li>The smooth subdivision algorithm to increase the polycount of your object</li>
<li>handle multiple level of resolution so that you can alternate between small and large scale edits</li>
</ul>
<p><video controls preload="metadata" poster="/videos/multiresolution.jpg"><source src="/videos/multiresolution.mp4" type="video/mp4"></video>
</p>
<h3 id="subdivision" tabindex="-1"><a class="header-anchor" href="#subdivision" aria-hidden="true">#</a> Subdivision</h3>
<p>The <em>Subdivide</em> button will increase the number of polygons by 4, so make sure to keep an eye on the polycount as it can increase very quickly!
One important aspect of <em>Subdivision Surface</em>  is that they will converge to a <em>Smooth Surface</em>.
To understand how it works, you can try the <em>Subdivide</em> button on an object with only a few polygons.</p>
<p>You can disable this <em>Smooth</em> behavior by checking the <code>Linear</code> option.</p>
<h3 id="multiresolution-workflow" tabindex="-1"><a class="header-anchor" href="#multiresolution-workflow" aria-hidden="true">#</a> Multiresolution Workflow</h3>
<p>One important aspect of the multiresolution is that you can go back to a lower resolution, make changes on your object and then go back to the highest resolution without losing the high resolution details.<br>
All the high resolution details will be projected automatically.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>If you are using a tool that alters the topology of your object, you will lose all the other resolutions of your object!
You should always get a warning in case it should happen, for example when you are using:</p>
<ul>
<li>the <a href="#voxel-remesher">Voxel Remesher</a></li>
<li>the <a href="#dynamic-topology">Dynamic Topology</a></li>
<li>the <RouterLink to="/tools.html#trim">Trim tool</RouterLink></li>
<li>the <RouterLink to="/tools.html#split">Split tool</RouterLink></li>
</ul>
</div>
<h2 id="dynamic-topology" tabindex="-1"><a class="header-anchor" href="#dynamic-topology" aria-hidden="true">#</a> Dynamic Topology</h2>
<h3 id="brush" tabindex="-1"><a class="header-anchor" href="#brush" aria-hidden="true">#</a> Brush</h3>
<p>When you enable <code>Dynamic Topology</code>, most sculpting brushes will have the ability to update the topology under your brushes in real-time.</p>
<p>See the video below in action.</p>
<p><video controls preload="metadata" poster="/videos/dynamic.jpg"><source src="/videos/dynamic.mp4" type="video/mp4"></video>
</p>
<h4 id="level-of-detail" tabindex="-1"><a class="header-anchor" href="#level-of-detail" aria-hidden="true">#</a> Level of detail</h4>
<table>
<thead>
<tr>
<th style="text-align:center">Method</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Zoom Level</td>
<td style="text-align:center">The level of detail will depend of the camera position</td>
</tr>
<tr>
<td style="text-align:center">Brush Size</td>
<td style="text-align:center">The level of detail will depend of the brush size</td>
</tr>
</tbody>
</table>
<p>The option <code>Use pressure radius</code> is only relevant if <code>Brush Size</code> is activated.
When it is activated, the level of detail will always reflect the brush size, even when the brush size is affected by pencil pressure.</p>
<h4 id="quality-performance" tabindex="-1"><a class="header-anchor" href="#quality-performance" aria-hidden="true">#</a> Quality/Performance</h4>
<table>
<thead>
<tr>
<th style="text-align:center">Method</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Speed</td>
<td style="text-align:center">Favor performance</td>
</tr>
<tr>
<td style="text-align:center">Quality</td>
<td style="text-align:center">Favor quality</td>
</tr>
</tbody>
</table>
<p>When you favor <code>Quality</code>, the 2 main differences are:</p>
<ul>
<li>
<p>refinement is applied before sculpting, so you will get less interpolating artifact when painting or sculpting very small details</p>
</li>
<li>
<p>refinement is running until it converges to the correct level of detail, in contrast to an incremental behavior.</p>
<p>That way, if you sculpt very small details or do quick strokes, the topology will always be refined as expected</p>
</li>
</ul>
<h3 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> Global</h3>
<p>You can remesh the whole mesh by using the same algorithm.
Usually you should prefer the <a href="#voxel-remesher">Voxel Remesher</a> for full remeshing.</p>
<p>However one advantage over the voxels is that the masked area will be protected, so you can have a better control on where to put more or less density.</p>
<h3 id="settings" tabindex="-1"><a class="header-anchor" href="#settings" aria-hidden="true">#</a> Settings</h3>
<p>Whether you are using <code>Dynamic Topology</code> on your <a href="#brush">Brush</a> or <a href="#global">Globally</a>, you can choose in which mode it operates:</p>
<table>
<thead>
<tr>
<th style="text-align:center">Method</th>
<th style="text-align:center">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Uniformisation</td>
<td style="text-align:center">It can add and remove faces, this is the mode used in the video above</td>
</tr>
<tr>
<td style="text-align:center">Subdivision</td>
<td style="text-align:center">Add new faces only, it cannot remove faces</td>
</tr>
<tr>
<td style="text-align:center">Decimation</td>
<td style="text-align:center">Remove faces only, it cannot add new faces</td>
</tr>
</tbody>
</table>
<h2 id="decimate" tabindex="-1"><a class="header-anchor" href="#decimate" aria-hidden="true">#</a> Decimate</h2>
<p>Reduce the number of polygons by trying to keep as many details as possible.</p>
<p>This feature can be useful if you want to export for 3d printing.
However you should probably not use it if you want to continue sculpting on it, as it can produce uneven triangles.</p>
<p>Note that the masked area won't be decimated.</p>
<p><video controls preload="metadata" poster="/videos/decimate.jpg"><source src="/videos/decimate.mp4" type="video/mp4"></video>
</p>
<h2 id="uv-unwrap" tabindex="-1"><a class="header-anchor" href="#uv-unwrap" aria-hidden="true">#</a> UV unwrap</h2>
<p>Compute texture coordinates (UVs) for the current mesh.</p>
<p>At the moment Nomad can't make use of these UVs, but you can export the mesh directly to <a href="https://procreate.art/" target="_blank" rel="noopener noreferrer">Procreate<ExternalLinkIcon/></a> or any texturing tool.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Computing UVs can take some time, it is best to have a mesh with fewer than 100k vertices.</p>
</div>
<p><video controls preload="metadata" poster="/videos/unwrap.jpg"><source src="/videos/unwrap.mp4" type="video/mp4"></video>
</p>
<h2 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> Other</h2>
<h4 id="hole-filling" tabindex="-1"><a class="header-anchor" href="#hole-filling" aria-hidden="true">#</a> Hole Filling</h4>
<p>Most of the time, your object will probably be watertight, meaning the mesh is 'closed'.</p>
<p>However if you import You can fill the holes in your mesh If your object has holes, you can fill them.
Note that it only works on 'naive' holes, as such, it cannot 'weld' two separate borders.</p>
<p><video controls preload="metadata" poster="/videos/hole_filling.jpg"><source src="/videos/hole_filling.mp4" type="video/mp4"></video>
</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>When you run the Voxel remesher, all the holes are automatically closed, whether you are using it on 1 or multiple meshes.ul</p>
</div>
<h4 id="triplanar" tabindex="-1"><a class="header-anchor" href="#triplanar" aria-hidden="true">#</a> Triplanar</h4>
<p>Converts the mesh into a <RouterLink to="/scene.html#triplanar">triplanar</RouterLink> primitive.
You might lose lot of details in the process.</p>
</template>
