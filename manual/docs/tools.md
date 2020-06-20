# Tools

| Tables                          | Icon                                                            |
| :---:                           | :---:                                                           |
| [Clay](#clay)                   | <img src='./images/tools/clay.png'         class='icon-tool'/>  |
| [Brush](#brush)                 | <img src='./images/tools/brush.png'        class='icon-tool'/>  |
| [Flatten](#flatten)             | <img src='./images/tools/flatten.png'      class='icon-tool'/>  |
| [Inflate](#inflate)             | <img src='./images/tools/inflate.png'      class='icon-tool'/>  |
| [Layer](#layer)                 | <img src='./images/tools/layer.png'        class='icon-tool'/>  |
| [Crease](#crease)               | <img src='./images/tools/crease.png'       class='icon-tool'/>  |
| [Pinch](#pinch)                 | <img src='./images/tools/pinch.png'        class='icon-tool'/>  |
| [Nudge](#nudge)                 | <img src='./images/tools/nudge.png'        class='icon-tool'/>  |
| [Stamp](#stamp)                 | <img src='./images/tools/stamp.png'        class='icon-tool'/>  |
| [Delete Layer](#delete-Layer)   | <img src='./images/tools/clearLayer.png'   class='icon-tool'/>  |
| [Smooth](#smooth)               | <img src='./images/tools/smooth.png'       class='icon-tool'/>  |
| [Mask](#mask)                   | <img src='./images/tools/mask.png'         class='icon-tool'/>  |
| [Selector Mask](#selector-mask) | <img src='./images/tools/maskSelector.png' class='icon-tool'/>  |
| [Drag](#drag)                   | <img src='./images/tools/drag.png'         class='icon-tool'/>  |
| [Move](#move)                   | <img src='./images/tools/move.png'         class='icon-tool'/>  |
| [Paint](#paint)                 | <img src='./images/tools/paint.png'        class='icon-tool'/>  |
| [Smudge](#smudge)               | <img src='./images/tools/smudge.png'       class='icon-image'/> |
| [Trim](#trim)                   | <img src='./images/tools/trim.png'         class='icon-image'/> |
| [Split](#split)                 | <img src='./images/tools/split.png'        class='icon-image'/> |
| [Project](#project)             | <img src='./images/tools/project.png'      class='icon-image'/> |
| [Gizmo](#gizmo)                 | <img src='./images/tools/gizmo.png'        class='icon-image'/> |
| [Transform](#transform)         | <img src='./images/tools/transform.png'    class='icon-image'/> |
| [Insert](#insert)               | <img src='./images/tools/insert.png'       class='icon-image'/> |
| [Tube](#tube)                   | <img src='./images/tools/tube.png'         class='icon-image'/> |
| [Lath](#lathe)                  | <img src='./images/tools/lathe.png'        class='icon-image'/> |
| [View](#view)                   | <img src='./images/tools/view.png'         class='icon-image'/> |

## Clay
The Clay tool is useful for building up your sculpture.

<video width='360' preload='metadata' poster='./videos/tool_clay.jpg' controls>
    <source src='./videos/tool_clay.mp4' type='video/mp4'>
</video>

## Brush
The standard brush.

<video width='360' preload='metadata' poster='./videos/tool_brush.jpg' controls>
    <source src='./videos/tool_brush.mp4' type='video/mp4'>
</video>


## Flatten
Flatten the area by projecting the points onto the average plane.

<video width='360' preload='metadata' poster='./videos/tool_flatten.jpg' controls>
    <source src='./videos/tool_flatten.mp4' type='video/mp4'>
</video>


## Inflate
Move the vertices along their own normals.

<video width='360' preload='metadata' poster='./videos/tool_inflate.jpg' controls>
    <source src='./videos/tool_inflate.mp4' type='video/mp4'>
</video>


## Layer
Sculpt by limiting the maximum height displacement, this tool is more useful when a layer is active.

<video width='360' preload='metadata' poster='./videos/tool_layer.jpg' controls>
    <source src='./videos/tool_layer.mp4' type='video/mp4'>
</video>


## Crease
Crease tool can be useful to sculpt small cut or dents.

<video width='360' preload='metadata' poster='./videos/tool_crease.jpg' controls>
    <source src='./videos/tool_crease.mp4' type='video/mp4'>
</video>


## Pinch
This tool can be used to sharpen edges.

<video width='360' preload='metadata' poster='./videos/tool_pinch.jpg' controls>
    <source src='./videos/tool_pinch.mp4' type='video/mp4'>
</video>


## Nudge
Move points along the stroke.

<video width='360' preload='metadata' poster='./videos/tool_nudge.jpg' controls>
    <source src='./videos/tool_nudge.mp4' type='video/mp4'>
</video>


## Stamp
This is simply the [Brush tool](#brush) with a stroke type set to `Grab - dynamic radius`.

<video width='360' preload='metadata' poster='./videos/tool_stamp.jpg' controls>
    <source src='./videos/tool_stamp.mp4' type='video/mp4'>
</video>


## Delete Layer
This tool can reset layers locally, you need an active layer otherwise nothing will happen.

<video width='360' preload='metadata' poster='./videos/tool_delete_layer.jpg' controls>
    <source src='./videos/tool_delete_layer.mp4' type='video/mp4'>
</video>


## Smooth
Smooth the area by average the point positions. This tool is highly dependent of the polygon density.
So if you have lot of polygons the smoothing will be less effective.

The alternate mode is the `Relax` mode, which only smooth the wireframe but try to retain the geometric details.

<video width='360' preload='metadata' poster='./videos/tool_smooth.jpg' controls>
    <source src='./videos/tool_smooth.mp4' type='video/mp4'>
</video>


## Mask
This tool let you mask points.
Masked vertices can't be sculpted or painted afterwards, this is a way to "protect" some area.

If you go in the tool settings, you can also perform other operations on the mask.

| Action       | Description     |
| :---:        | :---:           |
| Sharpen      | Edit the object |
| Blur         | Blur the mask   |
| Invert       | Invert the mask |
| Clear        | Clear the mask  |

<video width='360' preload='metadata' poster='./videos/tool_mask1.jpg' controls>
    <source src='./videos/tool_mask1.mp4' type='video/mp4'>
</video>

#### Extraction

You can also create other objects by extracting the mask.
When you use one of these operation, you can specify how to handle the holes.

| Action    | Description     |
| :---:     | :---:           |
| None      | Simply extract the part and let the extracted part opened |
| Blur      | Hole is filled and smoothed. Do not use this option for flat surface |
| Shell     | Close the extracted shape by using the thickness value |

::: tip
When you are using an extraction method that make use of the the thickness, the mask value will also impact the thickness.

This can be useful if you have custom made [Alphas](stroke.md#alpha) and you are using the `Grab - dynamic radius` [stroke type](stroke.md#stroke-type). 
:::

<video width='360' preload='metadata' poster='./videos/tool_mask2.jpg' controls>
    <source src='./videos/tool_mask2.mp4' type='video/mp4'>
</video>

#### Quick gesture
You can perform zbrush-style gestures while holding the quick masking button:
| Action   | Gesture (hold lower-left shortcut) |
| :---:    | :---: |
| Invert   | Tap on the background |
| Clear    | Drag on the background |
| Blur     | Tap on masked area |
| Sharpen  | Tap on unmasked area |

## Selector Mask
This tool is mostly similar to the [Masking tool](#mask), the main difference is that you don't use stroke to paint mask, but instead use the shape selector.

<video width='360' preload='metadata' poster='./videos/tool_selector_mask.jpg' controls>
    <source src='./videos/tool_selector_mask.mp4' type='video/mp4'>
</video>

## Drag

<video width='360' preload='metadata' poster='./videos/tool_drag.jpg' controls>
    <source src='./videos/tool_drag.mp4' type='video/mp4'>
</video>


## Move

<video width='360' preload='metadata' poster='./videos/tool_move.jpg' controls>
    <source src='./videos/tool_move.mp4' type='video/mp4'>
</video>


## Paint
To learn more about materail you can visit the [Paint & Material](#paint) section.

<video width='360' preload='metadata' poster='./videos/tool_paint.jpg' controls>
    <source src='./videos/tool_paint.mp4' type='video/mp4'>
</video>


## Smudge
The smudge tool is only active on painting.

<video width='360' preload='metadata' poster='./videos/tool_smudge.jpg' controls>
    <source src='./videos/tool_smudge.mp4' type='video/mp4'>
</video>


## Trim
The Trim tool works by removing chunk of your mesh and then filling the hole.

<video width='360' preload='metadata' poster='./videos/tool_trim.jpg' controls>
    <source src='./videos/tool_trim.mp4' type='video/mp4'>
</video>


## Split
Similar to the [Trim](#trim) tool, except that it produces two different objects instead of one.

<video width='360' preload='metadata' poster='./videos/tool_split.jpg' controls>
    <source src='./videos/tool_split.mp4' type='video/mp4'>
</video>

## Project
The Project tool will project the points on a shape that you draw, but unlike the [Trim](#trim) tool, the topology is kept intact.

<video width='360' preload='metadata' poster='./videos/tool_project.jpg' controls>
    <source src='./videos/tool_project.mp4' type='video/mp4'>
</video>

## Gizmo
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

<video width='360' preload='metadata' poster='./videos/tool_gizmo.jpg' controls>
    <source src='./videos/tool_gizmo.mp4' type='video/mp4'>
</video>


## Transform
Translate, rotate and scale the model by using two fingers.
The interaction is more or less similar to the camera movement.
* Panning will translate the model
* Pinching will scale the model
* Twisting will rotate the model

You can disable each of these movement separately, for example if you disable Scaling you will only be able to translate and rotate at the same time.


## Tube
Create a tube by drawing a curve first.  
You can then edit its radius.

<video width='360' preload='metadata' poster='./videos/tool_tube.jpg' controls>
    <source src='./videos/tool_tube.mp4' type='video/mp4'>
</video>


## Lathe
Create a revolution surface by drawing a curve first.

<video width='360' preload='metadata' poster='./videos/tool_lathe.jpg' controls>
    <source src='./videos/tool_lathe.mp4' type='video/mp4'>
</video>


## Insert
Insert an object in the scene.  
When the insertion takes place, Nomad switches automatically to the [Transform tool](#transform) for quick adjustment and then switches back the [Insert](#insert) tool when you release your fingers.

If an object is using a custom gizmo pivot, then it will be used as an anchor point for the insertion, see vide below.

<video width='360' preload='metadata' poster='./videos/tool_insert.jpg' controls>
    <source src='./videos/tool_insert.mp4' type='video/mp4'>
</video>


## View
This "tool" do nothing in particular, this is simply a way to view the model without modifying your scene.
