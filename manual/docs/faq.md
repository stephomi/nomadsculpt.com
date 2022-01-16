# FAQ

[[toc]]

---

## Where are my projects located on my device?
On iOS, it's simply in `Nomad/projects/`.  

On Android, it's in `Android/data/com.stephaneginier.nomad/files/projects/`.  
On the recent Android version (10/11), you don't have access to the `Android/data`folder anymore.
You can access it through a separate app, for example [this app](https://play.google.com/store/apps/details?id=com.alphainventor.filemanager).


## It crashes when I save or remesh my model!
Your device is running out of memory (RAM).  
To reduce memory usage in your scene, you can use some of [Topology](topology.md) tools to reduce the number of polygons.

::: tip RAM/Storage
What matters is the amount of RAM, not the storage (which is usually much bigger).
:::


## It crashes when I load my project!
If the file is relatively small, you can send it to me by email (<support@nomadsculpt.com>).

If the file is big, then the device is probably running out of memory.
There are several things that you can do to salvage the file.

1. Make sure you close any other opened apps on your device, to make Nomad use as much memory as possible.

2. If your project is using [Layers](layers.md), you can try enabling `Merge Layers (at import)` before loading the project.
The option can be found in the [Settings menu](settings.md).  
Layers can take a lot of memory, merging them at loading can help reduce the memory usage.

3. [Locate](#where-are-my-projects-located-on-my-device) your file

4. Decompress your project (`.glb.lz4` to `.glb`).  
On windows, you need to download [LZ4](https://github.com/lz4/lz4/releases).  
On MacOS, you can use the command line.
With homebrew, simply do `brew install lz4` and then `lz4 myproject.glb.lz4`.

5. Load the `.glb` file directly into Nomad again.

6. If it still crashes at loading, you can open the file on any 3d desktop software that supports `glTF`.


## It crashes when I start Nomad!
Rename the [projects folder](#where-are-my-projects-located-on-my-device) and start Nomad to see if it's working.
If it loads correctly, you can move the faulty file (probably the biggest one) outside the `projects` folder.

Otherwise try to rename the other folder (matcaps, backgrounds) and start Nomad again.


## Can you do animation?
A timeline feature that could animate the layers could be interesting, but not really planned at the moment.  
I'd like to support rigging/skinning in the future, but it poses a few challenges (notably the interaction with sculpting tools...) so nothing sure for now.


## Can you do low-poly modeling?
This is not really Nomad *Sculpt*'s scope, but maybe I'll provide a few tools in the future.


## Can you do uv and texturing?
Not planned for now.


## Can you do turntable video recording?
Not planned for now, iOS has a native video recording feature that is very easy to use.


## Can you add [insert-favorite-feature] as a top-level button?
If I did that each time I received such a request, Nomad wouldn't be usable.  
Customization is probably the way to go, but it's not straightforward.
Handling a small screen is challenging.


## What are the next features?
For the mid/long term roadmap I got a lot of ideas but I don't know yet.  
For the short term roadmap, what is planned:
* scene tree/hierarchy, with instancing support
* improving Trim tool to be more robust

Bug fixes and improving existing features will always have higher priority over adding new features.


## Why is there a free trial on Android? But not on iOS?
Because old Android devices suck (and some recent ones as well...), and I didn't want people to buy the app and be welcomed with a black screen.
But the main reason is that I felt like paid Android apps are not really the norm.


## Can it work on multiple devices?
Yes, the purchase is tied to the store used.

However if you own both iOS and Android devices, you'll need to purchase the app twice.

## How to restore my purchase?
Google Play handles the synchronization automatically.

If it doesn't work:

- Double check that you are logged on Google Play with the same account.
- Go to the About menu (top left nomad icon), and hit `restore purchase`.
- Wait a few hours, sometimes Google Play takes a bit of time for some reason.
- Uninstall and reinstall Nomad, make sure to [backup your files](#where-are-my-projects-located-on-my-device) if you don't want to lose anything.
- Contact me at <support@nomadsculpt.com>, ideally with a screenshot of the logs after trying to restore a purchase (logs can be enabled in the Debug menu).


## Is there a way to beta test?
There is no Android/iOS beta version.  
However you can see the list of bugs/fixes for the pending/incoming release in the [Logs](https://forum.nomadsculpt.com/t/nomad-change-log/139/500).  
The [web demo](https://stephaneginier.com/archive/nomad_demo) is usually updated with the pending/incoming release.


## Can you translate in [my-language]?
At the moment I rely on [the community](https://github.com/stephomi/nomad-translation) for translation, but it's not realistic since I vastly underestimated the number of texts in Nomad!
My previous project SculptGL was [much smaller](https://github.com/stephomi/sculptgl/tree/master/src/gui/tr).

And I don't really want to have an incomplete version with many of the text entries not translated.  
You can't really rely on the community to regularly handle the update (although I've been very lucky with the chinese translation, thanks to [@CrisprHarrison!](https://github.com/CrisprHarrison)).

My plan was to use an app translation service but I want to be sure it's not going to be too much work on maintenance (especially since I do updates regularly).
So maybe later!



