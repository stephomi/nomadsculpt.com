# Settings

[[toc]]

---

Most of the options in this section concern the viewport display.

# Display settings

## Smooth Shading
If Smooth Shading is disabled, the faces are shaded independently, so you can see the underlying topology.
This is the reason why disabling it is preferred during the sculpting stage.
However for rendering purposes, sometimes you might want to enable it.

Disabling Smooth Shading improves the performance a little bit.

## Outline
You can display an outline on your current selection.

This is useful to get visual feedback on your current selected meshes in case [Darken Unselected](#darken-unselected) is disabled.

From a performance point of view, using [Darken Unselected](#darken-unselected) is much better than using the outline solution.

## Grid
Display a planar grid so that you can get a better understanding of how your scene is positioned on the scene.

## Two sided
All faces point in a certain direction.
Faces that are considered *backface* are the ones that point "away" from the camera viewpoint.

For example the startup simple sphere will have its faces point towards the outside.
If you move the camera inside the sphere you'll then see the backface of these faces.

Most of the time you shouldn't see the backface part of faces, so coloring them can help you detect potential issues or incorrect topology.

Disabling `two sided` rendering can improve rendering performance a bit.


## Wireframe
Display the topology of the scene.

Note that showing the Wireframe will lower the performance.

## Snap cube
Display a helper icon in the corner of the scene, useful to quickly switch between front/back/left/right/top/bottom views.

## Show Painting
You can check this option if you want to ignore the object's painting.
The default paint used is a white non-metallic material, at 25% roughness.

## Stats
Display information about your system memory, total scene vertex count, and the current selection vertex count.

## Highlight selection
Temporarily flash object(s) in the hightlight colour (pink by default) when selected by tap or with the select tool.

## Darken Unselected objects
The objects that are not selected will be darkened so that the current selection can stand out.

# Cursor

## Show circle while sculpting
Continue to show the brush radius when sculpting.

## Show small dot
Display a dot at the center of the brush stroke while sculpting, or when the camera pivot is changed.

## Show rope stabilizer
Draw a line to indicate the rope length when lazy rope stablizer is active in stroke settings.

# Indicator
Display visual indicator(s) for tutorials and screen captures.

## Finger
Display a finger icon when finger touch is detected

## Stylus
Display a stylus icon when stylus touch is detected

## Mouse
Display a mouse icon when mouse motion is detected

## Color
The color of the indicator.

## Size Icon Circle sliders
Controls to adjust the size of the indicator and shapes within the indicator.

# Wireframe
Activate the wireframe overlay, and set the wireframe colour and opacity.

# Grid
Acivate the grid, and set the grid color and opacity

# Two sided
<!--
continue from here
 -->

## Render Resolution
You can change the render resolution, it can be useful if you want to increase the performance in case the rendering is the bottleneck.




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
However when you load a project, some settings are ignored, typically the that concerns the [Interface](interface.md), but also some other "general purpose global settings".



