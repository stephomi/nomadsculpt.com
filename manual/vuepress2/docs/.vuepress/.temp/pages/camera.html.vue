<template><h1 id="camera" tabindex="-1"><a class="header-anchor" href="#camera" aria-hidden="true">#</a> Camera</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#views">Views</RouterLink></li><li><RouterLink to="#interaction">Interaction</RouterLink><ul><li><RouterLink to="#rotation">Rotation</RouterLink></li><li><RouterLink to="#focus-reset">Focus / Reset</RouterLink></li><li><RouterLink to="#translation">Translation</RouterLink></li><li><RouterLink to="#zooming">Zooming</RouterLink></li><li><RouterLink to="#rolling">Rolling</RouterLink></li></ul></li><li><RouterLink to="#projection-type">Projection Type</RouterLink></li><li><RouterLink to="#rotation-type">Rotation Type</RouterLink></li><li><RouterLink to="#pivot">Pivot</RouterLink></li></ul></nav>
<hr>
<!-- ![Camera](./overview/menu_camera.jpg) -->
<h2 id="views" tabindex="-1"><a class="header-anchor" href="#views" aria-hidden="true">#</a> Views</h2>
<p>You can save camera view points by using <code>Add View</code>.
If you click on the view name, then the camera will restore the view.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>A saved view will save the <a href="#projection-type">Projection Type</a> settings but also the <RouterLink to="/background.html">Reference image</RouterLink>.<br>
It can be useful if you want to cycle between front/left/back reference views with different backgrounds.</p>
</div>
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
<td style="text-align:center">Update View</td>
<td style="text-align:center"><img src="@source/icons/update_view.png#small" alt=""></td>
<td style="text-align:center">Update the saved view with the current view point</td>
</tr>
</tbody>
</table>
<h2 id="interaction" tabindex="-1"><a class="header-anchor" href="#interaction" aria-hidden="true">#</a> Interaction</h2>
<h3 id="rotation" tabindex="-1"><a class="header-anchor" href="#rotation" aria-hidden="true">#</a> Rotation</h3>
<p>You rotate the camera by dragging <em>one</em> finger on the background.
If you drag the finger on your model, it will instead start the sculpting operation.</p>
<div class="custom-container tip"><p class="custom-container-title">Can I rotate the camera if I can't access the background?</p>
<p>Yes, you can simply put <em>two</em> fingers on the screen - as if you wanted to start a pan/zoom gesture - and then simply release <em>one</em> finger.</p>
</div>
<h3 id="focus-reset" tabindex="-1"><a class="header-anchor" href="#focus-reset" aria-hidden="true">#</a> Focus / Reset</h3>
<p><em>Double tap</em> on the model to focus the picked point.
If you <em>double tap</em> in the background, the camera will focus on the selected mesh instead.</p>
<h3 id="translation" tabindex="-1"><a class="header-anchor" href="#translation" aria-hidden="true">#</a> Translation</h3>
<p>By moving <em>two</em> fingers, you can pan the camera.</p>
<h3 id="zooming" tabindex="-1"><a class="header-anchor" href="#zooming" aria-hidden="true">#</a> Zooming</h3>
<p>By using the pinch gesture you can zoom in/out.</p>
<h3 id="rolling" tabindex="-1"><a class="header-anchor" href="#rolling" aria-hidden="true">#</a> Rolling</h3>
<p>You can <em>roll</em> the view by rotating <em>two</em> fingers.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This gesture is only available for <code>trackball</code> rotation mode.</p>
</div>
<h2 id="projection-type" tabindex="-1"><a class="header-anchor" href="#projection-type" aria-hidden="true">#</a> Projection Type</h2>
<p>You can change the <code>Field of View</code> (FOV / focal length) of your camera.
It is usually advised to use a low FOV for sculpting purposes, as it can help for proportion.<br>
You can also use the <code>Orthographic</code> mode, which is more or less similar to a FOV equal to 0</p>
<h2 id="rotation-type" tabindex="-1"><a class="header-anchor" href="#rotation-type" aria-hidden="true">#</a> Rotation Type</h2>
<p>By default the camera is using the <code>Orbit</code> rotation mode.
It means you have only two degrees of freedom, it is more intuitive but in some cases you'll want more flexibility.<br>
You can switch to <code>Trackball</code>, you'll be able to <em>roll</em> the view by rotating <em>two</em> fingers on the viewport.</p>
<h2 id="pivot" tabindex="-1"><a class="header-anchor" href="#pivot" aria-hidden="true">#</a> Pivot</h2>
<p>When you rotate the camera you can see a small pink dot, this is your camera pivot point.<br>
It's very important to understand where your pivot is so that you don't get lost or frustrated by the camera.</p>
<p>By default the pivot is update through these operations:</p>
<ul>
<li>double tap on the model</li>
<li>double tap on the background (the new pivot will be on the center of your mesh)</li>
<li>putting <em>two</em> fingers on screen (pan/zoom/roll) will update the pivot on the center of the <em>two</em> fingers</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>When you are used to it, you can hide the (hint) pink dot if you go in the <RouterLink to="/settings.html">Settings</RouterLink> menus.</p>
</div>
</template>
