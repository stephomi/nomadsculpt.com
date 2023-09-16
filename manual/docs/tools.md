# Tools

|      |     |     |     |
| ---  | --- | --- | --- |
| ![](./tools/clay.png#tool#left)         [Clay](#clay)                   | ![](./tools/brush.png#tool#left)      [Brush](#brush)               | ![](./tools/flatten.png#tool#left) [Flatten](#flatten) | ![](./tools/inflate.png#tool#left) [Inflate](#inflate) |
| ![](./tools/layer.png#tool#left)        [Layer](#layer)                 | ![](./tools/crease.png#tool#left)     [Crease](#crease)             | ![](./tools/pinch.png#tool#left)   [Pinch](#pinch)     | ![](./tools/nudge.png#tool#left)   [Nudge](#nudge)     |
| ![](./tools/stamp.png#tool#left)        [Stamp](#stamp)                 | ![](./tools/clearLayer.png#tool#left) [Delete Layer](#delete-layer) | ![](./tools/smooth.png#tool#left)  [Smooth](#smooth)   | ![](./tools/mask.png#icon#left)    [Mask](#mask)       |
| ![](./tools/maskSelector.png#tool#left) [Selector Mask](#selector-mask) | ![](./tools/drag.png#tool#left)       [Drag](#drag)                 | ![](./tools/move.png#tool#left)    [Move](#move)       | ![](./tools/paint.png#tool#left)   [Paint](#paint)     |
| ![](./tools/smudge.png#icon#left)       [Smudge](#smudge)               | ![](./tools/trim.png#icon#left)       [Trim](#trim)                 | ![](./tools/split.png#icon#left)   [Split](#split)     | ![](./tools/project.png#icon#left) [Project](#project) |
| ![](./tools/gizmo.png#tool#left)        [Gizmo](#gizmo)                 | ![](./tools/transform.png#icon#left). [Transform](#transform)       | ![](./tools/insert.png#icon#left)  [Insert](#insert)   | ![](./tools/tube.png#icon#left)    [Tube](#tube)       |
| ![](./tools/lathe.png#icon#left)        [Lath](#lathe)                  | ![](./tools/view.png#icon#left)       [View](#view)                 |                                                        |                                                        |

## Clay ![](./tools/clay.png#tool#left)
The Clay tool is useful for building up your sculpture.

![](./videos/tool_clay.mp4)


## Brush ![](./tools/brush.png#tool#left)
The standard brush.

![](./videos/tool_brush.mp4)


## Flatten ![](./tools/flatten.png#tool#left)
Flatten the area by projecting the points onto the average plane.

![](./videos/tool_flatten.mp4)


## Inflate ![](./tools/flatten.png#tool#left)
Move the vertices along their own normals.

![](./videos/tool_inflate.mp4)


## Layer ![](./tools/layer.png#tool#left)
Sculpt by limiting the maximum height displacement, this tool is more useful when a layer is active.

![](./videos/tool_layer.mp4)


## Crease ![](./tools/crease.png#tool#left)
Crease tools can be useful to sculpt small cuts or dents.

![](./videos/tool_crease.mp4)


## Pinch ![](./tools/pinch.png#tool#left)
This tool can be used to sharpen edges.

![](./videos/tool_pinch.mp4)


## Nudge ![](./tools/nudge.png#tool#left)
Move points along the stroke.

![](./videos/tool_nudge.mp4)


## Stamp ![](./tools/stamp.png#tool#left)
This is simply the [Brush tool](#brush) with a stroke type set to `Grab - dynamic radius`.

![](./videos/tool_stamp.mp4)


## Delete Layer ![](./tools/clearLayer.png#tool#left)
This tool can reset layers locally, you need an active layer otherwise nothing will happen.

![](./videos/tool_delete_layer.mp4)


## Smooth ![](./tools/smooth.png#tool#left)
Smooth the area by average the point positions. This tool is highly dependent on the polygon density.
So if you have many polygons, the smoothing will be less effective.

The alternate mode is the `Relax` mode, which only smooths the wireframe but tries to retain the geometric details.

![](./videos/tool_smooth.mp4)


## Mask ![](./tools/mask.png#icon#left)
This tool lets you mask points.
Masked vertices can't be sculpted or painted afterwards, this is a way to "protect" some area.

If you go in the tool settings, you can also perform other operations on the mask.

| Action       | Description     |
| :---:        | :---:           |
| Sharpen      | Edit the object |
| Blur         | Blur the mask   |
| Invert       | Invert the mask |
| Clear        | Clear the mask  |

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

## Selector Mask ![](./tools/maskSelector.png#tool#left)
This tool is mostly similar to the [Masking tool](#mask), the main difference is that you don't use stroke to paint mask, but instead use the shape selector.

![](./videos/tool_selector_mask.mp4)


## Drag ![](./tools/drag.png#tool#left)

![](./videos/tool_drag.mp4)


## Move ![](./tools/move.png#tool#left)

![](./videos/tool_move.mp4)


## Paint ![](./tools/paint.png#tool#left)
To learn more about material you can visit the [Painting](painting.md) section.

![](./videos/tool_paint.mp4)


## Smudge ![](./tools/smudge.png#icon#left)
The smudge tool is only active on painting.

![](./videos/tool_smudge.mp4)


## Trim ![](./tools/trim.png#icon#left)
The Trim tool works by removing a chunk of your mesh and then filling the hole.

![](./videos/tool_trim.mp4)


## Split ![](./tools/split.png#icon#left)
Similar to the [Trim](#trim) tool, except that it produces two different objects instead of one.

![](./videos/tool_split.mp4)


## Project ![](./tools/project.png#icon#left)
The Project tool will project the points on a shape that you draw, but unlike the [Trim](#trim) tool, the topology is kept intact.

![](./videos/tool_project.mp4)


## Gizmo ![](./tools/gizmo.png#tool#left)
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


## Transform ![](./tools/transform.png#icon#left)
Translate, rotate and scale the model by using two fingers.
The interaction is more or less similar to the camera movement.
* Panning will translate the model
* Pinching will scale the model
* Twisting will rotate the model

You can disable each of these movements separately, for example if you disable Scaling you will only be able to translate and rotate at the same time.


## Tube ![](./tools/tube.png#icon#left)
Create a tube by drawing a curve first.  
You can then edit its radius.

![](./videos/tool_tube.mp4)


## Lathe ![](./tools/lathe.png#icon#left)
Create a revolution surface by drawing a curve first.

![](./videos/tool_lathe.mp4)


## Insert ![](./tools/insert.png#icon#left)
Insert an object in the scene.  
When the insertion takes place, Nomad switches automatically to the [Transform tool](#transform) for quick adjustment and then switches back the [Insert](#insert) tool when you release your fingers.

If an object is using a custom gizmo pivot, then it will be used as an anchor point for the insertion, see video below.

![](./videos/tool_insert.mp4)


## View ![](./tools/view.png#icon#left)
This "tool" does nothing in particular, this is simply a way to view the model without modifying your scene.

