# Settings

[[toc]]

---

Most of the options in this section concern the viewport display.


## Wireframe
Display the topology of the scene.

Note that showing the Wireframe will lower the performance.


## Smooth Shading
If Smooth Shading is disabled, the faces are shaded independently, so you can see the underlying topology.
This is the reason why disabling it is preferred during the sculpting stage.
However for rendering purposes, sometimes you might want to enable it.

Disabling Smooth Shading improves the performance a little bit.


## Grid
Display a planar grid so that you can get a better understanding of how your scene is positioned on the scene.


## Render Resolution
You can change the render resolution, it can be useful if you want to increase the performance in case the rendering is the bottleneck.


## Scene Painting
You can check this option if you want to ignore the object's painting.
The default paint used is a white non-metallic material, at 25% roughness.


## Two sided
All faces point in a certain direction.
Faces that are considered *backface* are the ones that point "away" from the camera viewpoint.

For example the startup simple sphere will have its faces point towards the outside.
If you move the camera inside the sphere you'll then see the backface of these faces.

Most of the time you shouldn't see the backface part of faces, so coloring them can help you detect potential issues or incorrect topology.

Disabling `two sided` rendering can improve rendering performance a bit.


## Outline Selection
You can display an outline on your current selection.

This is useful to get visual feedback on your current selected meshes in case [Darken Unselected](#darken-unselected) is disabled.

From a performance point of view, using [Darken Unselected](#darken-unselected) is much better than using the outline solution.


## Darken Unselected
The objects that are not selected will be darkened so that the current selection can stand out.


## Max Detail Range
This slider can let you increase the maximum value of 2 details sliders: the one that drives the Voxel Remesher and the one for Dynamic Topology.


## Experimental
### Partial Drawing
If you want to sculpt a very small part of a big mesh or big scene, it can increase performance by a lot!
However you can get noticeable artifacts

<!--
### Sculpt Parallel
You should let this option disabled.
 -->

### Keep Topology At Import
When you import or load a mesh, a quick optimization will occur.
It can delete unused

### Load project GUI settings
When you save in *.glTF* format, all the settings are saved in the file as well.
However when you load a project, some settings are ignored, typically the that concerns the [Interface](#interface), but also some other "general purpose global settings".



