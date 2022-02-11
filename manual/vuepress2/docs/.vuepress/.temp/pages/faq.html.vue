<template><h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h1>
<nav class="table-of-contents"><ul><li><RouterLink to="#where-are-my-projects-located-on-my-device">Where are my projects located on my device?</RouterLink></li><li><RouterLink to="#it-crashes-when-i-save-or-remesh-my-model">It crashes when I save or remesh my model!</RouterLink></li><li><RouterLink to="#it-crashes-when-i-load-my-project">It crashes when I load my project!</RouterLink></li><li><RouterLink to="#it-crashes-when-i-start-nomad">It crashes when I start Nomad!</RouterLink></li><li><RouterLink to="#can-you-do-animation">Can you do animation?</RouterLink></li><li><RouterLink to="#can-you-do-low-poly-modeling">Can you do low-poly modeling?</RouterLink></li><li><RouterLink to="#can-you-do-uv-and-texturing">Can you do uv and texturing?</RouterLink></li><li><RouterLink to="#can-you-do-turntable-video-recording">Can you do turntable video recording?</RouterLink></li><li><RouterLink to="#can-you-add-insert-favorite-feature-as-a-top-level-button">Can you add [insert-favorite-feature] as a top-level button?</RouterLink></li><li><RouterLink to="#what-are-the-next-features">What are the next features?</RouterLink></li><li><RouterLink to="#why-is-there-a-free-trial-on-android-but-not-on-ios">Why is there a free trial on Android? But not on iOS?</RouterLink></li><li><RouterLink to="#can-it-work-on-multiple-devices">Can it work on multiple devices?</RouterLink></li><li><RouterLink to="#how-to-restore-my-purchase">How to restore my purchase?</RouterLink></li><li><RouterLink to="#is-there-a-way-to-beta-test">Is there a way to beta test?</RouterLink></li><li><RouterLink to="#can-you-translate-in-my-language">Can you translate in [my-language]?</RouterLink></li></ul></nav>
<hr>
<h2 id="where-are-my-projects-located-on-my-device" tabindex="-1"><a class="header-anchor" href="#where-are-my-projects-located-on-my-device" aria-hidden="true">#</a> Where are my projects located on my device?</h2>
<p>On iOS, it's simply in <code>Nomad/projects/</code>.</p>
<p>On Android, it's in <code>Android/data/com.stephaneginier.nomad/files/projects/</code>.<br>
On the recent Android version (10/11), you don't have access to the <code>Android/data</code>folder anymore.
You can access it through a separate app, for example <a href="https://play.google.com/store/apps/details?id=com.alphainventor.filemanager" target="_blank" rel="noopener noreferrer">this app<ExternalLinkIcon/></a>.</p>
<h2 id="it-crashes-when-i-save-or-remesh-my-model" tabindex="-1"><a class="header-anchor" href="#it-crashes-when-i-save-or-remesh-my-model" aria-hidden="true">#</a> It crashes when I save or remesh my model!</h2>
<p>Your device is running out of memory (RAM).<br>
To reduce memory usage in your scene, you can use some of the <RouterLink to="/topology.html">Topology</RouterLink> options to reduce the number of polygons.</p>
<div class="custom-container tip"><p class="custom-container-title">RAM/Storage</p>
<p>What matters is the amount of RAM, not the storage (which is usually much bigger).</p>
</div>
<h2 id="it-crashes-when-i-load-my-project" tabindex="-1"><a class="header-anchor" href="#it-crashes-when-i-load-my-project" aria-hidden="true">#</a> It crashes when I load my project!</h2>
<p>If the file is relatively small, you can send it to me by email (<a href="mailto:support@nomadsculpt.com">support@nomadsculpt.com</a>).</p>
<p>If the file is big, then the device is probably running out of memory.
There are several things that you can do to salvage the file.</p>
<ol>
<li>
<p>Make sure you close any other opened apps on your device, to make Nomad use as much memory as possible.</p>
</li>
<li>
<p>If your project is using <RouterLink to="/layers.html">Layers</RouterLink>, you can try enabling <code>Merge Layers (at import)</code> before loading the project.
The option can be found in the <RouterLink to="/settings.html">Settings menu</RouterLink>.<br>
Layers can take a lot of memory, merging them at loading can help reduce the memory usage.</p>
</li>
<li>
<p><a href="#where-are-my-projects-located-on-my-device">Locate</a> your file</p>
</li>
<li>
<p>Decompress your project (<code>.glb.lz4</code> to <code>.glb</code>).<br>
On windows, you need to download <a href="https://github.com/lz4/lz4/releases" target="_blank" rel="noopener noreferrer">LZ4<ExternalLinkIcon/></a>.<br>
On MacOS, you can use the command line.
With homebrew, simply do <code>brew install lz4</code> and then <code>lz4 myproject.glb.lz4</code>.</p>
</li>
<li>
<p>Load the <code>.glb</code> file directly into Nomad again.</p>
</li>
<li>
<p>If it still crashes at loading, you can open the file on any 3d desktop software that supports <code>glTF</code>.</p>
</li>
</ol>
<h2 id="it-crashes-when-i-start-nomad" tabindex="-1"><a class="header-anchor" href="#it-crashes-when-i-start-nomad" aria-hidden="true">#</a> It crashes when I start Nomad!</h2>
<p>Rename the <a href="#where-are-my-projects-located-on-my-device">projects folder</a> and start Nomad to see if it's working.
If it loads correctly, you can move the faulty file (probably the biggest one) outside the <code>projects</code> folder.</p>
<p>Otherwise try to rename the other folder (matcaps, backgrounds) and start Nomad again.</p>
<h2 id="can-you-do-animation" tabindex="-1"><a class="header-anchor" href="#can-you-do-animation" aria-hidden="true">#</a> Can you do animation?</h2>
<p>A timeline feature that could animate the layers could be interesting, but not really planned at the moment.<br>
I'd like to support rigging/skinning in the future, but it poses a few challenges (notably the interaction with sculpting tools...) so nothing sure for now.</p>
<h2 id="can-you-do-low-poly-modeling" tabindex="-1"><a class="header-anchor" href="#can-you-do-low-poly-modeling" aria-hidden="true">#</a> Can you do low-poly modeling?</h2>
<p>This is not really Nomad <em>Sculpt</em>'s scope, but maybe I'll provide a few tools in the future.</p>
<h2 id="can-you-do-uv-and-texturing" tabindex="-1"><a class="header-anchor" href="#can-you-do-uv-and-texturing" aria-hidden="true">#</a> Can you do uv and texturing?</h2>
<p>Not planned for now.</p>
<h2 id="can-you-do-turntable-video-recording" tabindex="-1"><a class="header-anchor" href="#can-you-do-turntable-video-recording" aria-hidden="true">#</a> Can you do turntable video recording?</h2>
<p>Not planned for now, iOS has a native video recording feature that is very easy to use.</p>
<h2 id="can-you-add-insert-favorite-feature-as-a-top-level-button" tabindex="-1"><a class="header-anchor" href="#can-you-add-insert-favorite-feature-as-a-top-level-button" aria-hidden="true">#</a> Can you add [insert-favorite-feature] as a top-level button?</h2>
<p>If I did that each time I received such a request, Nomad wouldn't be usable.<br>
Customization is probably the way to go, but it's not straightforward.
Handling a small screen is challenging.</p>
<h2 id="what-are-the-next-features" tabindex="-1"><a class="header-anchor" href="#what-are-the-next-features" aria-hidden="true">#</a> What are the next features?</h2>
<p>For the mid/long term roadmap I got a lot of ideas but I don't know yet.<br>
For the short term roadmap, what is planned:</p>
<ul>
<li>scene tree/hierarchy, with instancing support</li>
<li>improving Trim tool to be more robust</li>
</ul>
<p>Bug fixes and improving existing features will always have higher priority over adding new features.</p>
<h2 id="why-is-there-a-free-trial-on-android-but-not-on-ios" tabindex="-1"><a class="header-anchor" href="#why-is-there-a-free-trial-on-android-but-not-on-ios" aria-hidden="true">#</a> Why is there a free trial on Android? But not on iOS?</h2>
<p>Because old Android devices suck (and some recent ones as well...), and I didn't want people to buy the app and be welcomed with a black screen.
But the main reason is that I felt like paid Android apps are not really the norm.</p>
<h2 id="can-it-work-on-multiple-devices" tabindex="-1"><a class="header-anchor" href="#can-it-work-on-multiple-devices" aria-hidden="true">#</a> Can it work on multiple devices?</h2>
<p>Yes, the purchase is tied to the store used.</p>
<p>However if you own both iOS and Android devices, you'll need to purchase the app twice.</p>
<h2 id="how-to-restore-my-purchase" tabindex="-1"><a class="header-anchor" href="#how-to-restore-my-purchase" aria-hidden="true">#</a> How to restore my purchase?</h2>
<p>Google Play handles the synchronization automatically.</p>
<p>If it doesn't work:</p>
<ul>
<li>Double check that you are logged on Google Play with the same account.</li>
<li>Go to the About menu (top left nomad icon), and hit <code>restore purchase</code>.</li>
<li>Wait a few hours, sometimes Google Play takes a bit of time for some reason.</li>
<li>Uninstall and reinstall Nomad, make sure to <a href="#where-are-my-projects-located-on-my-device">backup your files</a> if you don't want to lose anything.</li>
<li>Contact me at <a href="mailto:support@nomadsculpt.com">support@nomadsculpt.com</a>, ideally with a screenshot of the logs after trying to restore a purchase (logs can be enabled in the Debug menu).</li>
</ul>
<h2 id="is-there-a-way-to-beta-test" tabindex="-1"><a class="header-anchor" href="#is-there-a-way-to-beta-test" aria-hidden="true">#</a> Is there a way to beta test?</h2>
<p>There is no Android/iOS beta version.<br>
However you can see the list of bugs/fixes for the pending/incoming release in the <a href="https://forum.nomadsculpt.com/t/nomad-change-log/139/500" target="_blank" rel="noopener noreferrer">Logs<ExternalLinkIcon/></a>.<br>
The <a href="https://stephaneginier.com/archive/nomad_demo" target="_blank" rel="noopener noreferrer">web demo<ExternalLinkIcon/></a> is usually updated with the pending/incoming release.</p>
<h2 id="can-you-translate-in-my-language" tabindex="-1"><a class="header-anchor" href="#can-you-translate-in-my-language" aria-hidden="true">#</a> Can you translate in [my-language]?</h2>
<p>At the moment I rely on <a href="https://github.com/stephomi/nomad-translation" target="_blank" rel="noopener noreferrer">the community<ExternalLinkIcon/></a> for translation, but it's not realistic since I vastly underestimated the number of texts in Nomad!
My previous project SculptGL was <a href="https://github.com/stephomi/sculptgl/tree/master/src/gui/tr" target="_blank" rel="noopener noreferrer">much smaller<ExternalLinkIcon/></a>.</p>
<p>And I don't really want to have an incomplete version with many of the text entries not translated.<br>
You can't really rely on the community to regularly handle the update (although I've been very lucky with the chinese translation, thanks to <a href="https://github.com/CrisprHarrison" target="_blank" rel="noopener noreferrer">@CrisprHarrison!<ExternalLinkIcon/></a>).</p>
<p>My plan was to use an app translation service but I want to be sure it's not going to be too much work on maintenance (especially since I do updates regularly).
So maybe later!</p>
</template>
