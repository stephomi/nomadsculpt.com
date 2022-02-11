<template><h1 id="layers" tabindex="-1"><a class="header-anchor" href="#layers" aria-hidden="true">#</a> Layers</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#options">Options</RouterLink><ul><li><RouterLink to="#more">More...</RouterLink></li></ul></li></ul></nav>
<hr>
<p>Layers can record position offsets and painting, it can be useful for non-linear workflow.
For example by experimenting with different facial expressions without relying on the history stack to undo the changes.</p>
<p>For painting data, layers are sorted in a top-down fashion; so layers on top will mask the lower ones.
The order only matters for the painting information, the sculpting part (offset) isn't impacted.</p>
<p>You can clear part of this mask by using the <a href="#delete-layer">Delete Layer</a> tool.</p>
<p><video controls preload="metadata" poster="/videos/layer.jpg"><source src="/videos/layer.mp4" type="video/mp4"></video>
</p>
<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>
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
<td style="text-align:center">Show/hide the layer influence</td>
</tr>
<tr>
<td style="text-align:center">Edit Name</td>
<td style="text-align:center"><img src="@source/icons/pencil.png#small" alt=""></td>
<td style="text-align:center">Edit the layer name</td>
</tr>
<tr>
<td style="text-align:center">Delete</td>
<td style="text-align:center"><img src="@source/icons/trash.png#small" alt=""></td>
<td style="text-align:center">Delete the layer</td>
</tr>
<tr>
<td style="text-align:center">Move</td>
<td style="text-align:center"><img src="@source/icons/move.png#small" alt=""></td>
<td style="text-align:center">Hold to move the layer position in the list</td>
</tr>
<tr>
<td style="text-align:center">Duplicate</td>
<td style="text-align:center"><img src="@source/icons/duplicate.png#small" alt=""></td>
<td style="text-align:center">Duplicate the layer</td>
</tr>
<tr>
<td style="text-align:center">Merge Down</td>
<td style="text-align:center"><img src="@source/icons/merge_down.png#small" alt=""></td>
<td style="text-align:center">Merge the layer with the lower layer (or base mesh)</td>
</tr>
<tr>
<td style="text-align:center">More</td>
<td style="text-align:center"><img src="@source/icons/more.png#small" alt=""></td>
<td style="text-align:center"><a href="#more">More...</a> options</td>
</tr>
</tbody>
</table>
<h3 id="more" tabindex="-1"><a class="header-anchor" href="#more" aria-hidden="true">#</a> More...</h3>
<p>If you want more control you can change the intensity of each channel of a layer:</p>
<ul>
<li>offset</li>
<li>color</li>
<li>roughness</li>
<li>metalness</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>At the moment layers only share a single opacity channel for all 3 channels (color/metalness/roughness).
If you merge multiple layers with per-channel intensity that aren't at full intensity, it's possible that the final result will look different.</p>
<p>Maybe in the future, each channel will have its own alpha channel to remove this limitation.</p>
</div>
<h1 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h1>
<p>Unlike many sculpting softwares, changing the topology of a mesh will not discard the layers.</p>
<p>So you can use the <RouterLink to="/topology.html#voxel-remesher">Voxel Remesher</RouterLink>, the <RouterLink to="/topology.html#multiresolution">Multiresolution</RouterLink> or the <RouterLink to="/tools.html#trim">Trim</RouterLink>/<RouterLink to="/tools.html#split">Split</RouterLink> tools.</p>
<p>However for the <RouterLink to="/topology.html#voxel-remesher">Voxel Remesher</RouterLink>, the quality of the layer will be impacted.</p>
</template>
