# ![](./icons/pencil.webp) Stroke    

---
![](./images/stroke_overview.webp) 

## Overview 

You can customize the stroke behavior of most tool brushes.
The settings should be similar to the ones present in 2d painting applications, however some options are specific to sculpting and 3d.

The options are split across 5 sub-menus:

| Name     | Icon                         | Description                                                        |
| :------: | :--------------------------: | :----------------------------------------------------------------: |
| Stroke   | ![](./icons/stroke_dot.webp) | Control how the stroke gets applied to the model                   |
| Alpha    | ![](./icons/alpha.webp)      | How a grey-scale texture is used for the brush stamp               |
| Falloff  | ![](./icons/falloff.webp)    | Control how the brush strength changes from the center to the edge |
| Filter   | ![](./icons/filter.webp)     | How the brush is affected by the model geometry                    |
| Pressure | ![](./icons/pressure.webp)   | Control stylus pressure response                                   |

::: tip
Not all stroke options apply for all tools. Stroke options that aren't used by the current tool will be disabled or hidden. 
:::


## Stroke

### Radius

![](./images/stroke_radius.webp)

#### Share radius

When enabled, all tools will use the same radius, the default is for each tool to have its own radius.

#### Size

* Screen - the radius is set in screen units. If you make the radius 100 pixels wide, it will stay 100 pixels wide regardless if you zoom in or out.
* Constant (3d) - the radius is set in 3d units. For example if you create a sphere and make the radius the same size as the sphere, the radius stay the same size as the sphere as you zoom in and out.


### Stroke

![](./images/stroke_strokemode.webp)

Strokes can act in multiple modes:

### ![](./icons/stroke_dot.webp) Dot
Drag like a regular paint stroke. 
![](./videos/stroke_dot.mp4) 

### ![](./icons/stroke_roll.webp) Roll
The brush alpha will be rotated to follow the direction of the stroke, useful for making fabric stitches. 
![](./videos/stroke_roll.mp4) 

 ### ![](./icons/radius.webp) Lock + radius
 Stamp a brush stroke with fixed **_height_**. Drag will set the scale and rotation.
![](./videos/stroke_lock_radius.mp4) 

### ![](./icons/falloff.webp) Lock + intensity 
Stamp a brush stroke with fixed **_radius_**. Drag will set height and rotation.
![](./videos/stroke_lock_intensity.mp4) 

![](./images/stroke_strokemodemove.webp)

The `Move` and `Drag` tools have their own 3 options:

### ![](./icons/snake.webp) Drag

Will keep updating what is inside the brush radius during the stroke. A fast stroke will leave the surface behind, while a slow stroke will hold onto material, making longer shapes. This is the default mode for the `Drag` tool. With `Dynamic Topology` this can be used to make snake like extrusions. 
![](./videos/stroke_drag.mp4) 


### ![](./icons/grab.webp) Grab
Will select what is inside the brush radius when the brush is started, and keep that selection. This is useful for more precise move operations, as you can carefully adjust the distance of the move and not accidentally move more than you originally selected. This is the default mode for the `Move` tool.
![](./videos/stroke_grab.mp4) 


### ![](./icons/radius.webp) Lock + radius (drag) 
The user radius is ignored, and is set dynamically based on how far the stroke is dragged away from the starting point. A small distance=small radius, a larger distance = bigger radius. Use the intensity slider to control the shape of the falloff. Useful for blocking in organic rubbery shapes.
![](./videos/stroke_lockradius_drag.mp4) 



### Adjust spacing intensity
![](./images/stroke_space_smooth.webp)

Strokes with a low spacing (lower than 50%) can accumulate quickly, making more intense strokes than higher spacing values. This toggle will compensate for this, so strokes will be of approximately the same intensity regardless of spacing.

### Stroke spacing
How far apart to apply each brush stroke during a drag operation. Values lower than 100% will overlap, giving the appearance of a continuous stroke. Values greater than 100% will start to leave gaps, useful for sculpting detail like stitching or zippers.

### Lazy rope stabilizer
Strokes will lag behind the pointer position by a certain distance. This can be used to draw smooth lines.
![](./videos/stroke_lazy_rope.mp4) 

### Stroke smoothing
Average multiple pointer positions to get a smoother stroke.
With high values, the stroke will lag behind the pointer but will eventually catch up.
This is useful for drawing smooth lines.

### Snap radius
Snap the start of the stroke to the end of the previous stroke. The radius determines how far to look for the end of the previous stroke. This can be useful when drawing long continuous lines, while doing frequent pauses.

### ![](./icons/silhouette.webp) Silhouette
![](./images/stroke_silhouette.webp)
By default strokes will only affect the model surface within the brush radius. When silhouette is enabled, the stroke will be projected through the entire model. This can be very useful when doing the initial blocking out of a model, or for shapes that require the sides to remain perpendicular.

The projection direction can be set explicitly, the default 'Closest' method will detect the best angle relative to the view. 

![](./videos/stroke_silhouette.mp4) 

### ![](./icons/dice.webp)Randomize

![](./images/stroke_randomize.webp)

The intensity, translation, rotation and scale of the stroke can each be randomized. This can be used to create a range of effects, eg randomize with the paint tool can create mottled color, or randomize with the crease tool can be used to create skin detail.

![](./videos/stroke_randomize.mp4) 

### Stroke Offset

Apply a constant offset on the stroke. This is useful for small screens where your finger would cover the stroke. 


## ![](./icons/alpha.webp) Alpha
![](./images/stroke_alpha.webp) 

The `Alpha` is a texture that will modulate your brush behavior.
It's a grayscale image, where black pixels mean no deformation and white pixels full deformation.

Click on the alpha image to change it.

Click on the material preview to load an alpha from a material preset. You can also save material presets here, and choose to embed textures with the tool.

::: tip
The texture is never resized, so large textures can slow down performance.
:::

### Invert pixels
This will reverse the values of the image, so black pixels will become white, and white pixels will become black.

::: tip

The built in alphas that ship with Nomad cannot be inverted.

:::

### Scaling

The brush size in Nomad is a circle with a user defined radius. Textures are often square or rectangular, the `Scaling` parameters let you decide how the texture should fit within the circle. For a square texture, a value of 0.7 will fit within the circle. A value of 1 will scale the texture larger so that the circle fits inside, clipping the edges.

![](./images/alpha_scaling.webp) 

Enabling `Scaling - Y` will allow you to stretch the alpha vertically.

![](./images/alpha_scaling_y.webp) 

### Rotation

The alpha texture will be rotated to follow the direction of the stroke. You can add a rotation offset, and if the lock icon is enabled, the texture will stay locked to this rotation relative to the screen.

### Tiling
![](./images/stroke_tiling.webp) 

How often the texture repeats within the brush profile. The tiling modes allow you to limit to a single texture within the stroke, or repeated textures, or mirrored where every second texture is flipped to create patterns or help make seamless textures.

![](./videos/alpha_tiling.mp4) 



### Mid value

By default black pixels will mean no deformation, and white pixels will mean full positive deformation, so for example, a clay brush with a alpha texture of rocks will only pull the surface out where the alpha is not black.

If you want the brush to push the surface in, or both push in AND pull out, you can modify the mid value. So if you set the value to 0.5, a middle gray in the alpha will do nothing, a black value will push in, white will pull out.




## Falloff

![](./images/falloff_menu.webp) 

This is similar to the [Alpha](#alpha), except that you drive the intensity with a single curve. This is combined with the alpha so that you can use a texture for detail, and falloff to control the edge fading and intensity at the center of the tool.

When the curve is on the top, this is full deformation, when it's at the bottom the brush has no effect.

You can think of the curve as a cross section through the tip of the brush. The bottom section gives a preview of a what a single 'stamp' of the brush would look like on the model surface, and if there is an alpha texture for the brush, this will be shown too to preview how the falloff and alpha will interact.

### Preset
With this selected, clicking on the curve graph will bring up a menu of presets. Rounded curves will give softer results, angular curves will have sharper results. The `Sub` button in the left toolbar will effectively reverse the falloff, so the top of the curve will push into the surface instead of pulling out, or vice versa.

### Catmull-Rom
When selected, the user can draw their own falloff curves. The curve editor works the same as curves in the rest of Nomad:

* Click on the curve to create a new point
* Drag a point to reposition it
* Click on a point to toggle between sharp and smooth
* Drag a point into a neighbor point to remove it

### B-spline
When selected, the user can draw their own falloff curves. The editor works the same as Catmull-Rom, but curve points influence the curve instead of being directly on the curve, which can help in creating smoother curve shapes.

The curve editor has 3 buttons:

| Item     | Icon                        | Description                                  |
| :------: | :-------------------------: | :------------------------------------------: |
| Maximize | ![](./icons/maximize.webp)  | Expand the curve editor                      |
| Reset    | ![](./icons/reset.webp)     | Revert the curve to the default state        |
| Symmetry | ![](./icons/symmetric.webp) | Display the curve as a symmetric 'brush tip' |


### Influence

* Sphere (3d) - Influence is computed by taking the distance from the vertex to the brush's center.
* Circle (2d) - The vertex is first projected on the area plane, before taking its distance to the brush's center. This is similar to how alphas are sampled. 
* Cylinder - The influence is projected through the area as a cylinder, used by the Silhouette mode below.

### Silhouette
By default strokes will only affect the model surface within the brush radius. When silhouette is enabled, the stroke will be projected through the entire model. This can be very useful when doing the initial blocking out of a model, or for shapes that require the sides to remain perpendicular.



## Filter

![](./images/filter_menu.webp) 

### Accumulate stroke
Enable no limit to how much matter can be added/removed per stroke. Eg the `Clay` tool has this enabled, so material can keep building up, while the `Brush` tool has this disabled, so strokes will stop adding material if you keep moving the same stroke over the same region of the mesh. 

### Front-facing vertex only
This option will ignore back facing vertices.
It can be useful if you want to paint part of a thin geometry without impacting the other side.
It also works for sculpting but you might experience some artifacts.

### Allow dynamic topology
This option is only available if your mesh is in [Dynamic Topology](topology.md#dynamic-topology) mode. You can disable or enable dynamic topology per tool.

### Connected topology
Enable only sculpting the vertices that are linked to the surface you touch with the tool. For example when used with the `Move` tool, this will allow you to move a part even if it intersects with another part.
![](./videos/connected_topology.mp4)

### Protect Area
![](./images/filter_protect_area.webp) 

These options will stop tools affecting parts of your mesh under various conditions. 

The 'Auto' option means if you have hide, or mask, or facegroup visible in the [Shading](shading) menu, they will be protected, but if they are turned off in that menu, protection is disabled.

* `All` - Toggle to set if the protect filters are global, or per tool.
* `Hide` - If parts of the mesh are hidden with the hide tool, set if they should be protected.
* `Mask` - If parts of the mesh are masked, set if they should be protected.
* `Facegroup` - Set if you can only use a tool within the first touched facegroup.


### Keep sharp edges
Exclude points whose normals differ too much from the surface normal.

It will change how the plane area is computed (Area sampling).

This option can be useful for flatten-based tools, or if you want to color a mostly flat surface without over-spill.

![](./videos/filter_keep_sharp_edges.mp4)

### Area sampling
Some brushes or stroke options require a plane normal and a plane position to the surface in order to work.

You can control how to compute this average plane by setting the sampling area as a ratio of the tool radius.

At 100%, every point inside the selection circle is taken into account.

At 0%, only the nearest vertex or triangle is taken into account. These values can be linked for both `Normal radius` and `Position radius`, or unlocked and set independently.


### Depth masking
![](./images/stroke_depthmask.webp)

Exclude points that are above or below a certain distance of the computed plane (Area sampling).

This can be used to paint only on bumpy regions, or only on cavity regions.

The graph represents a cross section of the surface; the horizontal line is where the surface is, the circle represents the paint falloff radius relative above and below the surface. `Height offset` is a percentage above or below the surface to start the masking calculation. `Top area` and `Bottom area` allow you to scale the falloff above and below the offset point.

#### Example: Paint in cavities
To paint only cavity regions, set the height offset to -100%, and adjust the top area slider so that it is away from the horizontal line. This means the first click sets the 'zero' depth, and then only areas below this depth will get affected.

![](./videos/stroke_depth_cavity.mp4)

#### Example: Paint on bumps
To only paint in high regions, set the height offset to +90%, so that the bottom of the circle intersects the horizontal line by a small amount.  When you click on the top of a 'high' zone, this will set the depth, so that anything at that depth, plus a little below it, and anything higher than it, will be painted. Deep cavities will be skipped.
![](./videos/stroke_depth_bump.mp4)


## Pressure 
![](./images/pressure_menu.webp) 

Control how the stylus/pen pressure affects the brushes.

By default `Use global settings` is enabled, meaning all brushes will share the same pressure values.

### Pressure - Radius

This curve controls how the brush radius is affected by pressure. The default is a linear relationship, so if your stylus has a smooth response, then the radius change should also feel smooth. That said, many stylii have a non-linear response, which you can compensate for with this curve. For example, if the radius doesn't feel like it gets to its maximum value at high pressure, use a curve preset like 'out-pow3', with a bend that aims up, to increase radius earlier.

This dialog is similar to the falloff curve display, you can use a preset by tapping on the curve window, or draw your own curves with the Catmull-Rom and B-Spline modes.

If you want constant radius, disable this section.

### Pressure - Intensity

Similar to the radius slider, but for controlling intensity. If you want constant intensity, disable this section.

### Pressure smoothing

Average the stylus pressure events for smoother results.