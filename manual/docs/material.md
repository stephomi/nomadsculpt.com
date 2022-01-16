# Material

[[toc]]

---

Materials are properties that can change the look of your object.
For precise control over the object's painting, see the [Vertex Paint options](paint.md);

At the moment, each object has its own material, two objects cannot share the same material.


## Opacity mode

### Opaque
The default mode and the fastest.

### Blending
You can make your mesh semi-transparent with this slider.
Note that because of real-time constraints, you can have noticeable visual artifacts in some cases if your object has a complex shape.

### Additive
You can make your mesh semi-transparent with this slider.

You can set an opacity value higher than 1, which means the object will be brighter.  
It can be useful if you want to use [bloom](postprocess.md#bloom) and the `threshold parameter` to only make this object glow like an emissive object.

This mode tends to have less artifacts than [Blending](#blending) (order independent transparency).

### Dithering
Make the object semi-transparent by discarding some pixels in a random fashion.

### Refraction
This mode can be used to simulate glass material.
Because of real time constraints, self-refraction and multi-layered refraction is somewhat limited.

The roughness painting of the model impacts how blurry the refraction is.
By default, every object created in Nomad has a roughness slightly around 25%, thus the refraction won't be perfect but a bit blurry.
You can use the `paint glossy` button to repaint your model with a roughness and metalness of 0 (the colors won't be affected).

There are 2 different roughness at play, the one driving how blurry the reflection is on the surface, and the other one driving the interior (refraction).  
However, since there is only one painting roughness channel in Nomad, both interior and exterior roughness will share the same value.  
In order to have different values (for example a lollipop with sharp surface but blurry interior) you use the sliders `Surface glossiness` and `Interior roughness` to override the painted roughness.

<video width='360' preload='metadata' poster='./videos/refraction.jpg' controls>
    <source src='./videos/refraction.mp4' type='video/mp4'>
</video>


## Always unlit
If enabled, the object will ignore PBR and Matcap and simply display its color painting without shading.
Note that if you use [Additive](#additive), you can paint transparency directly by using black color.


## Casts shadows
For now `Auto` is the same as `On`.
Transparent objects also cast shadows (in a dithering pattern to emulate blended shadows).  
Make sure to disable shadow casting if you have a big object in your scene that doesn't need to cast shadows (for example a big floor).

## Two sided
See the [global option](settings.md#two-sided).  
`Auto` value will use the global option.

## Smooth Shading
See the [global option](settings.md#smooth-shading).  
`Auto` value will use the global option.


