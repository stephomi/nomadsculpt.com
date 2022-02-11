<template><h1 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> Files</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#autosave">Autosave</RouterLink></li><li><RouterLink to="#import">Import</RouterLink></li><li><RouterLink to="#export">Export</RouterLink><ul><li><RouterLink to="#layer">Layer</RouterLink></li><li><RouterLink to="#quad">Quad</RouterLink></li><li><RouterLink to="#color">Color</RouterLink></li><li><RouterLink to="#meta">Meta</RouterLink></li><li><RouterLink to="#pbr">PBR</RouterLink></li></ul></li></ul></nav>
<hr>
<h2 id="autosave" tabindex="-1"><a class="header-anchor" href="#autosave" aria-hidden="true">#</a> Autosave</h2>
<p>If you enable autosave, you can set up a timer so that a popup will appear at regular intervals.
The reason why Nomad doesn't save in background is because 3d files can be pretty big so it can induce a significant lag while you are sculpting.</p>
<p>Additionally, to avoid out-of-memory issues the scene is typically compressed before the saving operation.
This compression/decompression will slow down the save operation as well.</p>
<h2 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h2>
<p>When you import an external scene file to Nomad, you can either <em>import</em> or <em>add</em> it.</p>
<p>Adding a file will simply add the objects into the current scene.
Importing a file will create a new Nomad project with the new objects in it.</p>
<p>For now you can import the following files:</p>
<ul>
<li>glTF (glb format only)</li>
<li>OBJ</li>
<li>STL</li>
</ul>
<h2 id="export" tabindex="-1"><a class="header-anchor" href="#export" aria-hidden="true">#</a> Export</h2>
<!-- https://www.tablesgenerator.com/markdown_tables# -->
<!-- http://markdowntable.com/ -->
<table>
<thead>
<tr>
<th style="text-align:center"></th>
<th style="text-align:center">GLB</th>
<th style="text-align:center">OBJ</th>
<th style="text-align:center">STL</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Layers<sup><a href="#layer">[layer]</a></sup></td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">No</td>
<td style="text-align:center">No</td>
</tr>
<tr>
<td style="text-align:center">Quad</td>
<td style="text-align:center">Yes<sup><a href="#quad">[quad]</a></sup></td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">No</td>
</tr>
<tr>
<td style="text-align:center">Color</td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">Yes<sup><a href="#color">[color]</a></sup></td>
<td style="text-align:center">Yes<sup><a href="#color">[color]</a></sup></td>
</tr>
<tr>
<td style="text-align:center">PBR Painting</td>
<td style="text-align:center">Yes<sup><a href="#pbr">[pbr]</a></sup></td>
<td style="text-align:center">No</td>
<td style="text-align:center">No</td>
</tr>
<tr>
<td style="text-align:center">Multiple objects</td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">No</td>
</tr>
<tr>
<td style="text-align:center">Metadata<sup><a href="#meta">[meta]</a></sup></td>
<td style="text-align:center">Yes</td>
<td style="text-align:center">No</td>
<td style="text-align:center">No</td>
</tr>
</tbody>
</table>
<h3 id="layer" tabindex="-1"><a class="header-anchor" href="#layer" aria-hidden="true">#</a> Layer</h3>
<p>Layers are supported through glTF morph targets. Nomad also exports per-layer colors, roughness and metalness but it will be ignored by other softwares.</p>
<h3 id="quad" tabindex="-1"><a class="header-anchor" href="#quad" aria-hidden="true">#</a> Quad</h3>
<p>Only in Nomad for now, because glTF doesn't support <a href="https://github.com/KhronosGroup/glTF/pull/1620" target="_blank" rel="noopener noreferrer">quad officially yet<ExternalLinkIcon/></a>.</p>
<!-- https://github.com/zellski/glTF/blob/spec/fb-ngon-encoding/extensions/2.0/Vendor/FB_ngon_encoding/README.md -->
<h3 id="color" tabindex="-1"><a class="header-anchor" href="#color" aria-hidden="true">#</a> Color</h3>
<p>OBJ and STL don't support vertex colors officially, so it might not work in some softwares.</p>
<h3 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> Meta</h3>
<p>It includes most of Nomad settings: symmetry, primitive config, transforms, etc.</p>
<h3 id="pbr" tabindex="-1"><a class="header-anchor" href="#pbr" aria-hidden="true">#</a> PBR</h3>
<p>PBR vertex colors are exported as secondary vertex colors attributes.
The channels are packed in the follow way:</p>
<table>
<thead>
<tr>
<th style="text-align:center"></th>
<th style="text-align:center">Channel</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Roughness</td>
<td style="text-align:center">R</td>
</tr>
<tr>
<td style="text-align:center">Metalness</td>
<td style="text-align:center">G</td>
</tr>
<tr>
<td style="text-align:center">Masking</td>
<td style="text-align:center">B</td>
</tr>
</tbody>
</table>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>The packing might change in future versions, if it happens, this manual will be updated.</p>
</div>
<h4 id="for-blender" tabindex="-1"><a class="header-anchor" href="#for-blender" aria-hidden="true">#</a> For blender:</h4>
<br>
<p><video controls preload="metadata" poster="/videos/blender_pbr.jpg"><source src="/videos/blender_pbr.mp4" type="video/mp4"></video>
</p>
</template>
