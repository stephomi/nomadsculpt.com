# Tools

![](./images/tools_menu.jpg)

## Overview
Nomad has many tools that can be broadly categorized as follows:

* Brush tools that directly affect the surface of an object, eg [Clay](#Clay)
* Mask tools that will protect the surface from changes, eg [Mask](#Mask)
* Selection based tools where a 2d mask is drawn first, then an operation happens, eg [Trim](#Trim)
* Special tools with their own interaction methods, eg [Tube](#Tube)

Many of these tools can be customized with different brush behavior, pressure, textures etc via the [Stroke](stroke.md) menu. 

### Tool controls

![](./images/tool_left_panel.jpg)

The panel on the left side of the screen controls the tool radius and intensity, and hotkeys specific to certain tools, explained in each tool's help section below.

::: tip
The intensity slider for many tools can go above 100%, worth experimenting with!
:::

### Shape selector

![](./images/tools_shape_selector_panel.jpg)

The [Trim](#trim), [Split](#split) and [Project](#project) all use similar tools for selecting areas of the mesh, and are chosen with the shape selector panel on the left of the screen. 

* `Lasso` - A freehand drawn shape
* `Polygon` - An enclosed shape defined by a combination of curves and/or straight lines. See [Shape editing](#shape-editing) below for more info.
* `Curve` - (Project only) - A freehand curve for the projection
* `Path` - (Project only) - A curve defined by points. See [Shape editing](#shape-editing) below for more info.
* `Line` - Drag a line to define a planar segment. By default it will operate on the mesh immediately, turn off auto validate if you don't want this (long press or swipe on the line icon)
* `Rect` -  Drag a diagonal line, this will define the corners of a rectangle shape. Long press or swipe to reveal options for auto validate, force to a square shape, and for the first click to be the center of the rectangle.
* `Ellipse` - Drag a diagonal line, this will define the size of an ellipse. Long press or swipe to reveal options for auto validate, force to a circle shape, and for the the first click to be the center of the ellipse.
* `Flip` - invert the shape mask, or the direction of the project tool.

Most tools have an option to auto validate, meaning the operation will happen as soon as you have finished drawing the shape. When auto validate is off, A green button will be drawn next to the shape which will execute the operation. This allows you to edit the shape, adjust the view, when you're ready to use the shape, press the green button.

### Shape editing
Polygon editing and curve editing behave in similar ways:

* To start, drag a line to define 2 points, then drag out from the middle of the line to define a polygon or curve.
* Click on the points to toggle between smooth and sharp. 
* Click and drag on the curve or line sections to create new points.
* To delete a point, drag a point into its neighbor until it turns red.
* The trash icon in the corner of the polygon or path icon will delete the shape.

## Tool context menu

![](./images/tools_context_menu.jpg)

A right click or long press on a tool will bring up a context menu. This menu has the following options:

* `Save` - save any changes you made to the tool
* `Clone` - duplicate the tool into a new tool shortcut
* `Last save` - revert to the previously saved version of the tool
* `Icon` - change the icon for the tool
* `Reset` - reset the tool to its defaults



## Tools

|      |     |     |     |
| ---  | --- | --- | --- |
| ![](./tools/clay.png#tool#left)       [Clay](#clay)                 | ![](./tools/brush.png#tool#left)      [Brush](#brush)     | ![](./tools/move.png#tool#left)         [Move](#move)                   | ![](./tools/drag.png#tool#left)    [Drag](#drag)       |
| ![](./tools/smooth.png#tool#left)     [Smooth](#smooth)             | ![](./tools/mask.png#icon#left)       [Mask](#mask)       | ![](./tools/maskSelector.png#tool#left) [Selector Mask](#selector-mask) | ![](./tools/paint.png#tool#left)   [Paint](#paint)     |
| ![](./tools/smudge.png#icon#left)     [Smudge](#smudge)             | ![](./tools/flatten.png#tool#left)    [Flatten](#flatten) | ![](./tools/planar.png#tool#left)       [Planar](#planar)               | ![](./tools/layer.png#tool#left)   [Layer](#layer)     |
| ![](./tools/crease.png#tool#left)     [Crease](#crease)             | ![](./tools/trim.png#icon#left)       [Trim](#trim)       | ![](./tools/split.png#icon#left)        [Split](#split)                 | ![](./tools/project.png#icon#left) [Project](#project) |
| ![](./tools/inflate.png#tool#left)    [Inflate](#inflate)           | ![](./tools/pinch.png#tool#left)      [Pinch](#pinch)     | ![](./tools/nudge.png#tool#left)        [Nudge](#nudge)                 | ![](./tools/stamp.png#tool#left)   [Stamp](#stamp)     |
| ![](./tools/clearLayer.png#tool#left) [Delete Layer](#delete-layer) | ![](./tools/tube.png#icon#left)       [Tube](#tube)       | ![](./tools/lathe.png#icon#left)        [Lathe](#lathe)                 | ![](./tools/insert.png#icon#left)  [Insert](#insert)   |
| ![](./tools/transform.png#icon#left)  [Transform](#transform)       | ![](./tools/gizmo.png#tool#left)      [Gizmo](#gizmo)     | ![](./tools/measure.png#tool#left)      [Measure](#measure)             | ![](./tools/view.png#icon#left)    [View](#view)       |
| ![](./tools/select.png#icon#left)     [Select](#select)             |                                                           |                                                                         |                                                        |


### Clay ![](./tools/clay.png#tool#left)
The Clay tool is useful for building up your sculpture. `Sub` will remove material from your sculpture.

![](./videos/tool_clay.mp4)

### Brush ![](./tools/brush.png#tool#left)
The standard brush. `Sub` will remove material.

![](./videos/tool_brush.mp4)

### Move ![](./tools/move.png#tool#left)
The area under the brush will stick to the brush, allowing for elastic deformation. The selection is maintained during the move, so if you move the brush away, then move it back where you started, you will see no deformation.
`Normal` will move the area under the brush along the surface normal.

This brush is good for both large scale deformation and careful small deformation.

![](./videos/tool_move.mp4)

### Drag ![](./tools/drag.png#tool#left)
The area under the brush will stick to the brush, allowing for elastic deformation. Unlike the move brush, the selection is continuously updated during the stroke, so it is possible to make longer, snake like objects, especially when Dynamic Topology is activated.
`Normal` will move the area under the brush along the surface normal.

This brush is good for more loose, gestural shape changes.

![](./videos/tool_drag.mp4)

### Smooth ![](./tools/smooth.png#tool#left)
Smooth the area by average the point positions. This tool is highly dependent on the polygon density.
So if you have many polygons, the smoothing will be less effective.

The alternate mode is the `Relax` mode, which only smooths the wireframe but tries to retain the geometric details.

::: tip
Higher polygon densities can require raising the intensity above 100%. Very high values (300%, 500%) can also work well as a sculpting tool, forcing areas to go flat and smooth quickly under the brush, like hitting clay with a mallet!
:::

![](./videos/tool_smooth.mp4)

### Mask ![](./tools/mask.png#icon#left)
This tool lets you mask points.
Masked vertices can't be sculpted or painted afterwards, this is a way to "protect" areas. `Unmask` will erase where the mask has been painted.

If you go in the tool settings, you can also perform other operations on the mask.

| Action       | Description     |
| :---:        | :---:           |
| Clear        | Clear the mask  |
| Invert       | Invert the mask |
| Blur         | Blur the mask   |
| Sharpen      | Edit the object |


![](./videos/tool_mask1.mp4)


#### Extraction

You can also create other objects by extracting the mask.
When you use one of these operations, you can specify how to handle the holes.

| Action    | Description     |
| :---:     | :---:           |
| None      | Simply extract the part and let the extracted part opened |
| Blur      | Hole is filled and smoothed. Do not use this option for flat surface |
| Shell     | Close the extracted shape by using the thickness value |

::: tip
When you are using an extraction method that makes use of the thickness, the mask value will also impact the thickness.

This can be useful if you have custom made [Alphas](stroke.md#alpha) and you are using the `Grab - dynamic radius` [stroke type](stroke.md#stroke-type). 
:::

![](./videos/tool_mask2.mp4)


#### Quick gesture
You can perform zbrush-style gestures while holding the quick masking button:
| Action   | Gesture (hold lower-left shortcut) |
| :---:    | :---: |
| Invert   | Tap on the background |
| Clear    | Drag on the background |
| Blur     | Tap on masked area |
| Sharpen  | Tap on unmasked area |

### Selector Mask ![](./tools/maskSelector.png#tool#left)
This tool is mostly similar to the [Masking tool](#mask), the main difference is that you don't use stroke to paint mask, but instead use the shape selector.

![](./videos/tool_selector_mask.mp4)

### Paint ![](./tools/paint.png#tool#left)
To learn more about material you can visit the [Painting](painting.md) section. `Erase` will remove paint.

![](./videos/tool_paint.mp4)

### Smudge ![](./tools/smudge.png#icon#left)
The smudge tool is only active on painting.

![](./videos/tool_smudge.mp4)


### Flatten ![](./tools/flatten.png#tool#left)
Flatten the area by projecting the points onto the average plane. `Fill` will define a plane set by the highest point, and tend to pull points up.

![](./videos/tool_flatten.mp4)


### Planar ![](./tools/planar.png#tool#left)
Make points planar by projecting onto the average plane, but with less buildup than the flatten brush. This creates cleaner hard-edge surfaces. Quick strokes will push and pull on the surface more, slower strokes that start from already planar areas and work out will maintain the plane more. `Fill` will define a plane set by the highest point, and tend to pull points up.

![](./videos/tool_planar.mp4)

### Layer ![](./tools/layer.png#tool#left)
Sculpt by limiting the maximum height displacement, this tool is more useful when a layer is active. `Sub` will use a minimum depth displacement, creating grooves.

![](./videos/tool_layer.mp4)

### Crease ![](./tools/crease.png#tool#left)
Crease tools can be useful to sculpt small cuts or dents. `Sub` will create a raised crease.

![](./videos/tool_crease.mp4)

### Trim ![](./tools/trim.png#icon#left)
The Trim tool works by removing a chunk of your mesh and then filling the hole.

![](./videos/tool_trim.mp4)

### Split ![](./tools/split.png#icon#left)
Similar to the [Trim](#trim) tool, except that it produces two different objects instead of one.

![](./videos/tool_split.mp4)


### Project ![](./tools/project.png#icon#left)
The Project tool will project the points on a shape that you draw, but unlike the [Trim](#trim) tool, the topology is kept intact.

![](./videos/tool_project.mp4)


### Inflate ![](./tools/flatten.png#tool#left)
Move the vertices along their own normals. `Sub` will move vertices along their inverted normal.

![](./videos/tool_inflate.mp4)


### Pinch ![](./tools/pinch.png#tool#left)
This tool can be used to sharpen edges. `Sub` will spread vertices apart.

![](./videos/tool_pinch.mp4)


### Nudge ![](./tools/nudge.png#tool#left)
Move points along the stroke.

![](./videos/tool_nudge.mp4)


### Stamp ![](./tools/stamp.png#tool#left)
This is simply the [Brush tool](#brush) with a stroke type set to `Grab - dynamic radius`. `Sub` will push the stamp in rather than pull it out from the surface.

![](./videos/tool_stamp.mp4)


### Delete Layer ![](./tools/clearLayer.png#tool#left)
This tool can reset layers locally, you need an active layer otherwise nothing will happen.

![](./videos/tool_delete_layer.mp4)



### Tube ![](./tools/tube.png#icon#left)
Create a tube by drawing a curve. 
![](./images/tool_tube_new.jpg)

Once the tube is created, the path can be edited in 3d space using similar controls to the standard [Polygon editing](#polygon-editing) and curve editing tools. It has extra controls that appear at the top of the viewport:

* `Validate` - bake the curve into regular polygons so it can be sculpted.
* `Edit` - display the curve points so they can be manipulated
* `Mirror` - add a mirror repeater as a parent of this curve
* `Snap` - snap curve points to nearby surfaces
* `Closed` - Join the start and end of the curve to form a loop
* `Radius` - Cycle between a uniform radius, a radius at the start and end, or a radius per curve point. These are edited with orange handles on the curve.
* `Twist` - Cycle between no twist, a uniform twist, a twist at the start and end, or a twist per curve point. These are editing with pink handles on the curve.
* `Profile` - Cycle between no profile (so a circle profile), a uniform profile, a profile at the start end end, or a profile per point.
* `Profile edit` - Display a profile editor. This functions similar to the [Shape editing](#shape-editing) tools, can save and load profile presets, and has a toggle to allow you to edit the profile in 3d space.
* `B-spline` - Toggle between Catmull-rom and B-spline interpolation.
* `...` - Advanced options for the tube polygon density, spiral controls, if the snap should be offset from nearby surfaces, and to clone the tube's curve as a repeater curve.

![](./videos/tool_tube.mp4)


### Lathe ![](./tools/lathe.png#icon#left)
Create a revolution surface by drawing a curve.

![](./videos/tool_lathe.mp4)


### Insert ![](./tools/insert.png#icon#left)
Insert an object in the scene.  
When the insertion takes place, Nomad switches automatically to the [Transform tool](#transform) for quick adjustment and then switches back the [Insert](#insert) tool when you release your fingers.

If an object is using a custom gizmo pivot, then it will be used as an anchor point for the insertion, see video below.

![](./videos/tool_insert.mp4)


### Transform ![](./tools/transform.png#icon#left)
Translate, rotate and scale the model by using two fingers.
The interaction is more or less similar to the camera movement.
* Panning will translate the model
* Pinching will scale the model
* Twisting will rotate the model

You can disable each of these movements separately, for example if you disable Scaling you will only be able to translate and rotate at the same time.


### Gizmo ![](./tools/gizmo.png#tool#left)
This tool lets you translate, rotate and scale your mesh with a single tool.

#### Method
| Method  | Description |
| :---:   | :---: |
| Auto    | Let Nomad choose between Vertex or Object mode. Typically, object is preferred unless symmetry is enabled or if there is masking on the mesh |
| Vertex  | Vertices are transformed individually. Symmetry and mask are taken into account. For primitives that are not validated, Object mode is forced |
| Object  | The object is transformed as a whole. Symmetry and mask are ignored. If you use non-uniform scaling, Vertex mode will be forced |

#### Action
| Action       | Description |
| :---:        | :---: |
| Move origin  | Move the mesh to the world origin, vertices are not modified |
| Reset        | Reset the mesh transform to identity, vertices are not modified |
| Bake         | Apply the matrix transform to the vertices and then reset the matrix, nothing is changing visually |

::: warning
The [Gizmo](#gizmo), [Translate](#translate), [Rotate](#rotate) and [Scale](#scale) are using their own symmetry checkbox!

And by default, the symmetry is turned off.
:::

On the left you can move the gizmo pivot, you can see the video below in action.
This is especially useful for the rotation, as it doesn't change anything for translation.

![](./videos/tool_gizmo.mp4)

### Measure ![](./tools/measure.png#icon#left)
Drag to meaure the distance between 2 points.

### View ![](./tools/view.png#icon#left)
This "tool" does nothing in particular, this is simply a way to view the model without modifying your scene.

### Select ![](./tools/select.png#icon#left)
Use the shape modes to select objects in the scene. `Unselect` will remove objects from the selection.
