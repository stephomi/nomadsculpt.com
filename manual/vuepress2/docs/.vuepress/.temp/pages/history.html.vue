<template><h1 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> History</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#limitation">Limitation</RouterLink><ul><li><RouterLink to="#history-limit-mb">History limit (Mb)</RouterLink></li><li><RouterLink to="#stack-limit">Stack limit</RouterLink></li><li><RouterLink to="#range-protection">Range protection</RouterLink></li></ul></li><li><RouterLink to="#restore-camera">Restore camera</RouterLink></li></ul></nav>
<hr>
<p>Like most content creation tools, you can undo/redo all editing in Nomad.
There is a limit to how many operations can be undoable, but you can control this behavior.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You can use quick gestures to undo/redo:</p>
<ul>
<li>2 fingers tap to undo</li>
<li>3 fingers tap to redo</li>
</ul>
</div>
<h2 id="limitation" tabindex="-1"><a class="header-anchor" href="#limitation" aria-hidden="true">#</a> Limitation</h2>
<h3 id="history-limit-mb" tabindex="-1"><a class="header-anchor" href="#history-limit-mb" aria-hidden="true">#</a> History limit (Mb)</h3>
<p>If the history stack exceeds this value, the older operations will be removed so that the memory budget fits into this limit.</p>
<h3 id="stack-limit" tabindex="-1"><a class="header-anchor" href="#stack-limit" aria-hidden="true">#</a> Stack limit</h3>
<p>You can control the maximum number of operations.</p>
<h3 id="range-protection" tabindex="-1"><a class="header-anchor" href="#range-protection" aria-hidden="true">#</a> Range protection</h3>
<p>If you enable this option, a prompt will popup and ask you if you really want to undo all the operations.</p>
<p>You can still redo the operations but the prompt is mostly there to prevent unwanted errors.
For example by sculpting a bit after redoing many operations, you will lose the opportunity to redo.</p>
<h2 id="restore-camera" tabindex="-1"><a class="header-anchor" href="#restore-camera" aria-hidden="true">#</a> Restore camera</h2>
<p>For each operation, the viewpoint of the camera is saved.
If you enable this option, undoing or redoing an operation will reset the camera to the saved viewpoint.</p>
</template>
