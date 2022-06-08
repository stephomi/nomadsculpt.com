# FAQ

[[toc]]

---

## Where are my projects located on my device?
The projects are located in the `projects` folder inside the main Nomad folder.

On iOS, you can access the Nomad folder with the iOS Files app.

On Android, the Nomad folder is in `Android/data/com.stephaneginier.nomad/files/`.  
On the recent Android version (10/11), you don't have access to the `Android/data`folder anymore.
You can access it through a separate app, for example [this one](https://play.google.com/store/apps/details?id=com.alphainventor.filemanager).


## It crashes when I save or remesh my model!
Your device is running out of memory (RAM).  
To reduce memory usage in your scene, you can use some of the [Topology](topology.md) options to reduce the number of polygons.

::: tip RAM/Storage
What matters is the amount of RAM, not the storage (which is usually much bigger).
:::


## It crashes when I load my project!
If the file is small, you can send it to me and I'll take a look (by email <support@nomadsculpt.com>).

Otherwise the device is probably running out of RAM memory.

- Make sure you close any other opened apps on your device.
- Start a new project in Nomad instead on having a project currently opened.
- If it still crashes, the only solution is to load [your file project](#where-are-my-projects-located-on-my-device) on a device with more memory.

::: tip
On a desktop browser, you can try loading your file [in this url](https://nomadsculpt.com/demo_save/) and then export it back after simplifying your scene.

Some browsers limit the amount of RAM a single tab can take, so it's possible that this technique won't work.

If your project is using [Layers](layers.md), you might want to squash them to reduce memory usage.
:::

<!-- ::: tip
Additionally, for legacy glb.lz4 file format, you can try the following:

1. If your project is using [Layers](layers.md), enable the `Merge layers` option before loading the project.
The option can be found in the `Files -> Settings` sub menu.  
Layers can take a lot of memory, merging them at loading can help reduce the memory peak usage.

2. Decompress your [project](#where-are-my-projects-located-on-my-device) (`.glb.lz4` to `.glb`).  
On windows, you need to download [LZ4](https://github.com/lz4/lz4/releases).  
On MacOS, you can use the command line.
With homebrew, simply do `brew install lz4` and then `lz4 myproject.glb.lz4`.

3. Try to load the `.glb` file directly into Nomad again.

4. If it still crashes at loading, you can open the file on any 3d desktop software that supports `glTF`.
::: -->

## It crashes when I start Nomad!
If it crashes at loading, it means Nomad struggles with a certain file present in the Nomad folder.

Most of the time, it happens because the project is heavy and it will unfortunately exceed the RAM limit.

Locate the [Nomad folder](#where-are-my-projects-located-on-my-device), and then rename or move some file to find the culprit.

First, try to rename `settings.json`. That way it will stop loading the last project.

If it doesn't work, try to move some recent files outside their respective resource folders (`projects`, `matcaps`, `environments`, etc).

You can also rename the folder themselves so that Nomad completely ignores them.
If you rename or move all the file in the Nomad folder, this will give the same result as a clean install.

::: tip
When Nomad loads a file at startup, it always moves the file in the `can_be_deleted/` folder.
If the operation succeeds, then it is moved back to its original folder.

If it crashes before the loading is finished, then Nomad will launch successfully on the next start, as it ignores the `can_be_deleted/` folder.

You can simply try to load this file again if you think it can succeed.
:::


## Can we animate inside Nomad?
Not for now.
A timeline feature that could animate the layers could be interesting, but not really planned at the moment.  
I'd like to support rigging/skinning in the future, but it poses a few challenges (notably the interaction with sculpting tools...) so nothing sure for now.


## Can we do proper low-poly modeling?
Not for now.
This is not really Nomad *Sculpt*'s scope, but maybe I'll provide a few tools in the future.


## Can we do uv and texturing?
For now texturing inside Nomad is not planned.
However, you can [UV unwrap](topology.md#uv-unwrap) your model and do the texturing inside Procreate.
You can also transfer the vertex colors painted inside Nomad into texture through [the baking option](topology.md#bake-to-texture).

## Can I record a turntable video?
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
Nomad is available on iOS App Store, Google Play and AppGallery.

The purchase is tied to the store account used.
If you want to use Nomad on several devices you need to make sure it's the same account.


## How to restore my purchase?
Google Play and AppGallery both handle the synchronization automatically.

- Double check that you are logged on the exact same account you made the purchase with.
- Go in the About menu (top left nomad icon), and hit `restore purchase`.
- Wait a few hours, sometimes Google Play takes a bit of time for some reason.
- Uninstall and reinstall Nomad, make sure to [backup your files](#where-are-my-projects-located-on-my-device) if you don't want to lose anything.
- Contact me at <support@nomadsculpt.com>, ideally with a screenshot of the logs after trying to restore a purchase (logs can be enabled in the Debug menu).

::: tip
You need to have access to the Google Play services, recent Huawei devices don't have access to Google services.
In that case you’ll need to purchase the app again on AppGallery (Huawei app store).
:::


## Is there a way to beta test?
There is no Android/iOS beta version.  
However you can see the list of bugs/fixes for the pending/incoming release in the [Logs](https://forum.nomadsculpt.com/t/nomad-change-log/139/500).  
The [web demo](https://stephaneginier.com/archive/nomad_demo) is usually updated with the pending/incoming release.


## Can you translate or fix [my-language]?
The translation files can be found [here](https://github.com/stephomi/nomad-translation)!
