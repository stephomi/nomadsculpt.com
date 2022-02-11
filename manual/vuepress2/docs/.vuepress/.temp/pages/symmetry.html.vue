<template><h1 id="symmetry" tabindex="-1"><a class="header-anchor" href="#symmetry" aria-hidden="true">#</a> Symmetry</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#mirroring">Mirroring</RouterLink></li><li><RouterLink to="#world-vs-local">World vs Local</RouterLink></li><li><RouterLink to="#editing-the-symmetry-plane">Editing the symmetry plane</RouterLink></li></ul></nav>
<hr>
<p>You can use symmetry to mirror sculpting operations from one side to the other.</p>
<p>The option to enable/disable the symmetry can also be found on the left quick panel (<em>&quot;Sym&quot;</em>).</p>
<p>Note that this is a global option, so the state will carry over the different tools.
The only exception are the transforms tool (<a href="#translate">Move</a>, <a href="#rotate">Rotate</a>, <a href="#scale">Scale</a> and <a href="#gizmo">Gizmo</a>) which have their own symmetry state.</p>
<h2 id="mirroring" tabindex="-1"><a class="header-anchor" href="#mirroring" aria-hidden="true">#</a> Mirroring</h2>
<p>Because of technical reasons, some brushes will have imperfect symmetry behavior.</p>
<p>In that case you can use the <em>Mirror</em> button to apply back the symmetry from one side to the other.</p>
<p>This operation only succeeds if the algorithm detects that the mesh is symmetrical.
In case the detection fails, you will be asked if you want to force the mirroring.</p>
<p>The main difference is that forcing the mirroring will change the topology, thus you might lose the <RouterLink to="/topology.html#multiresolution">Multiresolution</RouterLink>.</p>
<h2 id="world-vs-local" tabindex="-1"><a class="header-anchor" href="#world-vs-local" aria-hidden="true">#</a> World vs Local</h2>
<p>By default the symmetry is in <em>World</em> space, meaning that the symmetry plane is fixed, even if you translate or rotate the plane.</p>
<p>You can see in the video below the usage of <em>World/Local</em> space and the behavior of the <em>Mirror</em> feature.</p>
<p><video controls preload="metadata" poster="/videos/symmetry.jpg"><source src="/videos/symmetry.mp4" type="video/mp4"></video>
</p>
<h2 id="editing-the-symmetry-plane" tabindex="-1"><a class="header-anchor" href="#editing-the-symmetry-plane" aria-hidden="true">#</a> Editing the symmetry plane</h2>
<p>You should probably never use these options but you can reset the symmetry plane origin and orientation, in case you moved them.</p>
<p>Note that the behavior of these options will change depending on what space (<em>Local/World</em>) you are in.
So if it doesn't work as you would expect, make sure to check if you are in the correct space.</p>
</template>
