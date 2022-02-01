# Post process

[[toc]]

---

Using post processing can dramatically improve the final look of your scene.

Post process can impact the performance by a lot depending on your device.
There's a global checkbox to disable all the postprocess, so that you can quickly go back to sculpting/modeling without losing your presets.
For PBR rendering, [Ambient Occlusion](#ambient-occlusion-ssao), [Reflection](#reflection-ssr) and [Tone Mapping](#tone-mapping) should be enabled.

However, most of the time you want the post process to be disabled when you are sculpting, to focus on the shape itself of the rendering.


## Quality
Simply check the options (`Max samples` and `Full Resolution`) if you want to improve the quality of the postprocess.  
`Full resolution` can makes a big difference with [Ambient Occlusion](#ambient-occlusion-ssao).


## Reflection (SSR)
With this option, objects can reflect other objects in the scene, as long as the objects are visible on the screen.
If you have metallic and shiny objects in your scene, then this option should probably be used.
This effect is only effective with PBR mode.


| SSR off                    | SSR off |
| :---:                      |:---:                    |
|![](./images/ssr-off.jpg)  | ![](./images/ssr-on.jpg) |


## Ambient Occlusion (SSAO)
Ambient occlusion will darken areas where the light has less chance of reaching (corners, etc).
The effect only depends on the model geometry.

| Mode           | Description            |
| :---:          | :---:                  |
| Strength       | Intensity of the effect         |
| Radius         | How widespread the effect is    |
| Curvature bias | How sensitive the effect is relative to the surface variation |


| SSAO off                   | SSAO off |
| :---:                      |:---:                      |
|![](./images/ssao-off.jpg)  | ![](./images/ssao-on.jpg) |


## Depth of Field (DOF)
Add a blur effect on the region that is outside the focus.

Simply tap on your model to change the focus point.

| DOF off                   | DOF focus on far ring     | DOF focus on close ring  |
| :---:                     |:---:                      |:---:                     |
|![](./images/dof-off.jpg)  |![](./images/dof-near.jpg) |![](./images/dof-far.jpg) |


## Bloom
Blooms will make the bright area of your scene glow.

| Bloom off                  | Bloom with radius 0       | Bloom with radius 1  |
| :---:                      |:---:                      |:---:                     |
|![](./images/bloom-off.jpg) |![](./images/bloom-r0.jpg) |![](./images/bloom-r1.jpg) |


## Tone Mapping
A `Tone Mapping` operator is an operation that will remap HDR values to the `[0, 1]` range (what can be displayed on your screen).
If you don't use `Tone Mapping` or leave it to none, then any values higher than 1 will be clamped to 1.

You can adjust the overall image with `exposure`, `contrast` and `saturation`.

| Tone Mapping off                  | Tone Mapping on   |
| :---:                      |:---:                    |
|![](./images/tone-off.jpg) |![](./images/tone-on.jpg) |

Notice that with Tone Mapping disabled, some details disappeared because some pixels are too much exposed.


## Curvature
Accentuates edges of the model.

| Curvature off              | Curvature on   |
| :---:                      |:---:                    |
|![](./images/curvature-off.jpg)  |![](./images/curvature-on.jpg) |


## Chromatic Aberration
Simulate the lens artifacts with light being decomposed around the screen edges.

| Chromatic off              | Chromatic on   |
| :---:                      |:---:                    |
|![](./images/chroma-off.jpg)  |![](./images/chroma-on.jpg) |


## Vignette
Simulate the lens artifacts by darkening the screen edges.

| Vignette off              | Vignette on   |
| :---:                      |:---:                    |
|![](./images/vignette-off.jpg)  |![](./images/vignette-on.jpg) |

## Grain
Add a grain effect, it will help reduce the artificial look of the image.

| Grain off                  | Grain on   |
| :---:                      |:---:                    |
|![](./images/grain-off.jpg)  |![](./images/grain-on.jpg) |


## Sharpness
Sharpen the model edges.

| Sharpness off                  | Sharpness on   |
| :---:                      |:---:                    |
|![](./images/sharpen-off.jpg)  |![](./images/sharpen-on.jpg) |


## Temporal Anti-Aliasing (TAA)
This effect is enabled by default, this is not an artistic effect but a quality one.

When the camera doesn't move, Nomad re-uses the previous frames to improve the quality of the overall image.
TAA tries to do the same thing when the camera is moving, by reprojecting the previous frames onto the new view point.
Most of the time it should be ok, but it can introduce some artifacts when the reprojection is a bit off (ghosting artifacts).

The effects that benefits the most from the accumulation are [Ambient Occlusion](#ambient-occlusion-ssao), [Reflection](#reflection-ssr) and [Ambient Occlusion](#ambient-occlusion-ssao), [Depth of Field](#dof) and [Bloom](#bloom).

