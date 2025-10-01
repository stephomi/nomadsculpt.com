# ![](./icons/faq.webp) FAQ

[[toc]]

## Platform 
### Where are my projects located on my device?
The projects are located in the `projects` folder inside the main Nomad folder.

On iOS, you can access the Nomad folder with the iOS Files app.

On Android, the Nomad folder is in `Android/data/com.stephaneginier.nomad/files/`.  
On the recent Android version (10/11), you don't have access to the `Android/data`folder anymore.
You can access it through a separate app, for example [this one](https://play.google.com/store/apps/details?id=com.mi.android.globalFileexplorer).
<!-- [this one](https://play.google.com/store/apps/details?id=com.alphainventor.filemanager) -->
<!-- [this one](https://play.google.com/store/apps/details?id=com.mi.android.globalFileexplorer) -->

### Is there a way to beta test?
For Windows & MacOS, a beta might be available on the [Homepage](https://nomadsculpt.com).
<br>
For iOS there is a private TestFlight, visit the [Discord](https://discord.com/invite/8h7BwpRz29) in the #beta-ios channel.
<br>
The [Web Demo](https://nomadsculpt.com/demo) is usually updated with the latest features.

### Why is there a free trial on Android? But not on iOS?
Because old Android devices suck (and some recent ones as well...), and I didn't want people to buy the app and be welcomed with a black screen.
But the main reason is that I felt like paid Android apps are not really the norm.

### What is the best tablet to run Nomad on?

TLDR: An iPad.

The slightly longer answer is 

> "The newest iPad _you can afford_, unless you really hate Apple, in which case the newest Samsung tablet you can afford. Anything else, test first." 

People always want more information, so here's a summary.

Nomad runs best on newer iPads:

* iPads and iPhones can access the [Quad Remesher](tools#quad-remesher) plugin from [Exoside](https://exoside.com/)
* recent iPads with the latest pencil support [barrel roll](https://www.youtube.com/watch?v=XcDQazDYpo0), you can twist the pencil in certain tools in Nomad. 
* performance of the latest M series chips is very fast. 

The newest most expensive iPad available will be able to render final images very quickly, and let you sculpt a lot of detail.

However, the drop in performance with cheaper and older iPads isn't as bad as people expect. Any iPad that supports an Apple Pencil runs Nomad quite well. For example:

* An iPad Pro from 2023 can handle 5 million poly sculpts and be responsive, a final quality image can render in 5 seconds.
* An iPad Pro from 2015 can handle a 1.2 million poly object with a bit of lag, a final quality image can render in 20 seconds.

That's a big performance difference, but you also have to take into account the price:

* The 2025 iPad Pro is *$2500 USD* brand new with all the options. 
* The 2023 iPad Pro currently costs *$400 USD* on eBay.
* The 2015 iPad Pro costs *$250 USD* on eBay.

Is getting an extra 4 million polys and saving 15 seconds worth $2100? That's up to you.

Non Pro models can be cheaper still and give a wide variety of sizes and performance to choose from. The current iPad Air supports the gen 2 pencil with barrel roll, and is substantially cheaper than the Pro. The second hand and refurbished market has even more options. 

This means whatever your budget, you should be able to find an iPad for you. And remember that most sculpts aren't millions of polys! If you can keep under 500,000 polys, even old iPads will let you sculpt quickly.

`What about Android?`

Android graphics performance is below that of iPads. According to Nomad's developer, "A Samsung Galaxy Tab S9 will run Nomad an order of magnitude slower than an iPad Air". That said a lot of users are very happy with their Samsung tablets, Nomad runs fine for most sculpting. 

For other Android tablets, be careful. Android hardware can vary in performance a lot, it's not easy to predict how Nomad will run.

Please use the free save-disabled version of Nomad to test first. 

`What about memory and storage?`

Most Nomad files tend to be 100mb or less. This means almost any tablet you buy these days, iPad or Android,  will have plenty of room for your Nomad projects.


### I bought Nomad for one device, can I use it on another device?
As long as it uses the same app store and same account, yes.

For example if you bought it on the iOS app store, you can use it on your other iOS devices.

If you bought it for your Android tablet on Google Play, you can use it on your other Android devices.

However if you bought Nomad on Android, then you get an iPad, you will need to buy it again.

This is because Nomad does not have it's own license server or subscription model. There is no agreement between Apple/Google/AppGallery to handle license sharing. 


### How to restore my purchase?
Google Play and AppGallery both handle the synchronization automatically.

- Go in the About menu (top left nomad icon), and hit `restore purchase`
- Double check that you are logged into the same account you used to purchase Nomad (on Google Play).
- Reboot the device
- Sometimes you need to wait a couple of hours
- Make sure that the Google Play application is up-to-date
- Re-install Nomad (make sure to [backup your files](#where-are-my-projects-located-on-my-device) if you don't want to lose anything)
- You can try to purchase again to see what happens (note: you cannot buy twice the same item on the same account)

:::tip
You can contact me at <support@nomadsculpt.com> but the *only* thing I'll be able to do is confirm if an email has a purchase associated with it.

Note that I regularly receive reports concerning licenses not updating correctly after acquiring a new device.
I don't have any control on the payment and account synchronization, it's all handled by Google/AppGallery!

Eventually the purchase is always restored, but the necessary steps to speed up the process is unclear.
:::

::: warning
Recent Huawei devices don't have access to Google services.
In that case you’ll need to purchase the app again on AppGallery (Huawei app store).
:::

### Can you translate or fix [my-language]?
I can relatively easily add another language, but I am relying on AI translation as it's much easier to handle for regular updates.
The translation files can be found [here](https://github.com/stephomi/nomad-translation).

## Features

### Why is the gizmo not moving?
You might have [pin enabled in the left menu toolbar](tools#left-menu-toolbar). 

### Can we animate inside Nomad?
Not for now. A timeline feature that could animate the layers could be interesting, but not really planned at the moment.  

I'd like to support rigging/skinning in the future, but it poses a few challenges (notably the interaction with sculpting tools...) so nothing sure for now.


### Can we do proper low-poly modeling?
Not for now.
This is not really Nomad *Sculpt*'s scope, but maybe I'll provide a few tools in the future.


### Can we do uv and texturing?
Short answer: Yes. Long answer: Not directly, but there are several ways to combine Nomad's excellent vertex paint tools with uv's and textures.

* Nomad allows you to paint color, roughness, material properties directly into the vertices of your sculpt.
* Nomad allows very high vertex counts so that you can paint without worrying about uv's.
* Nomad can load textures to use in brushes, allowing for stamping and painting with textures.
* Nomad can load objects that have textures pre-assigned, for rendering purposes.
* Nomad can [UV unwrap](topology.md#uv-unwrap) lower poly objects.
* Color/roughness/metalness can be transferred from textures to vertices via [the project options](topology.md#reproject-to-vertex).
* Color/roughness/metalness/normals can be baked from vertices to textures via [the baking options](topology.md#bake-to-texture)
* Baking and projecting can be handled between single objects or many objects, or between the highest and lowest subdivision levels of a single object, allowing for a variety of bake and project workflows.
* After baking, exporting an obj will also export textures, which can be taken to an app like Procreate to paint directly on textures.

### Can I record a turntable video?
Not planned for now, iOS has a [video recording feature](https://support.apple.com/en-au/guide/ipad/ipaddf78ce08/ipados) that is very easy to use.

Under iOS, this is done by swiping down from the top left, and tapping the record button. It will give you a 3 second countdown, swipe the menu away to reveal Nomad, and use the turntable feature. When complete, swipe down again from the top right, and tap the record button again. Edit the movie from the photo library to remove excess footage at the start and end of the video.

### Can you add [insert-favorite-feature] as a top-level button?
Yes, the lower toolbar can now be customised from the [interface](interface.md) menu, and floating toolbars can now be created.

### What are the next features?
For the mid/long term roadmap I have a lot of ideas but I don't know yet.  

Bug fixes and improving existing features will always have higher priority over adding new features.


### Can we rig in nomad?
No, but it is planned. For now you can parent shapes together and alter pivot points, allowing for simple posable sculpts.

### Can we use more than 4 lights?
No, this is a limitation of the realtime render engine within Nomad. It is possible to fake this using emissive objects and global illumination in post process, as shown in [this tutorial](https://www.youtube.com/watch?v=QhrUGH7CuUA)

### Can we import Zbrush tools?
No, Zbrush uses a proprietary format. You should be able to extract the alpha maps and use them in Nomad. 

### Why don't the colors match what I painted? Why can't I get white in the render?
Imagine taking a photo of a piece of paper, vs a photo of a desk lamp, vs a photo of the sun. Older cameras and screens will just make them all ‘white’. More modern systems can show a difference between reflected white of paper vs emitted light of a lamp, vs the super bright of the sun.

Modern computer graphics tries to work in a similar way, emulating the physics of light and surfaces. This is called `Physically Based Rendering`, or PBR, and Nomad's PBR renderer is based on this. This looks realistic and balanced, but often brightly painted colors will appear darker.

If you need the render to match closer to the painted colors, you can fix this in both non-physically based and physically based ways:

Non PBR:
* `Use the 'Unlit' mode in the lighting menu`. Colors will be shown exactly as painted, but you also lose all shading. Handy for quick checks, and more graphic output.
* `Use the 'Matcap' mode in the lighting menu`. Choose a brighter matcap that is mostly white, with no color tint.

PBR:
* `Use a neutral environment`. You can [change the environment](shading.md#environment) to a more neutral one. Avoid indoor environment as they tend to be more colored. Prefer a daylight outdoor or studio environment instead.
* `Boost the lighting`. If you were taking a photo of white paper in a dark room, you’d simply add more light. On the environment light, turn up the exposure slider until the colors start to feel right to you, or add more individual lights with more intensity.
* `Boost the camera exposure`. If the dark room didn't have any extra lights, you could have the camera hold the shutter open for longer, or use a more sensitive ISO. In Nomad you can achieve a similar result with post processing. Go to post process, enable, down to tone mapping, enable, and raise the exposure slider until the colors feel right.
* `Use emissive color`. In the material menu, you can enable 'emissive' under textures, which will make an object appear to be a light source. If you turn on global illmination in the post process settings, it will cast light onto other objects in the scene. You can also enable 'unlit' for that material, which will achieve a similar look without a texture.

## Crashes

### It crashes when I save or remesh my model!
Your device is running out of memory (RAM).  
To reduce memory usage in your scene, you can use some of the [Topology](topology.md) options to reduce the number of polygons.

::: tip RAM/Storage
What matters is the amount of RAM, not the storage (which is usually much bigger).
:::


### It crashes when I load my project!
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

### It crashes when I start Nomad!
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
