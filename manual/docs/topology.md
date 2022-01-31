# Topology

[[toc]]

---

Nomad is a polygonal software, it uses triangles and quads to handle the geometry.
By topology, we refer to both the number of faces but also the way points (vertices) are connected.

It's important to keep track of the topology, especially if you want to sculpt or paint fine details.

::: tip How to keep track of your topology?
You can display the [Wireframe](settings.md#wireframe) or simply disable [Smooth Shading](settings.md#smooth-shading).
:::

For now there is three main way to edit the topology of one object:

| Method                                | Description  |
| :---:                                 | :---:        |
| [Voxel Remesher](#voxel-remesher)     | Recompute a new topology with uniform density |
| [Multiresolution](#multiresolution)   | Go back and forth between multiple resolution of your objects  |
| [Dynamic Topology](#dynamic-topology) | Add/Remove faces locally in real-time when sculpting or painting |


## Voxel Remesher
When using the `Voxel Remesher`, the entire mesh will force the topology to have an uniform resolution, meaning all the polygons have more or less the same size.  
This is very useful when you don't want to think about topology and simply do free-form sculpting.

A typical sculpting workflow can start by using the `Voxel Remesher` to block-out a rough shape with a low resolution.
Simply hit the *Remesh* button once in a while when you are stretching the mesh too much to avoid too much distortion.

![](./videos/voxel_remesher.mp4)


::: tip Voxel?
As stated above, Nomad is a polygonal software, but the `Voxel Remesher` is one exception where another approach is used (temporarily) to perform the remeshing.

One big difference is that the voxel approach won't accept self intersection, so these will be resolved.
Also it doesn't support mesh with holes in it.

By holes, we don't mean the `genus hole` (`hole` of a donus), but instead mesh that are not `watertight`/`closed`.
Typically, what it means is that before applying the remeshing, every holes will be filled, similarly to the [Trim tool](tools.md#trim) or [Hole filling feature](scene.md#hole-filling).
:::


### Boolean
Because we are using voxel for the remeshing, it also means you can easily merge two objects into one or subtract one from another.  
You can learn more in the [voxel booleans](scene.md#subtraction) section.


## Multiresolution
The multiresolution feature is useful for mostly two scenario:
- The smooth subdivision algorithm to increase the polycount of your object
- handle multiple level of resolution so that you can alternate between small and large scale edits

![](./videos/multiresolution.mp4)


### Subdivision
The *Subdivide* button will increase the number of polygons by 4, so make sure to keep an eye on the polycount as it can increase very quickly!
One important aspect of *Subdivision Surface*  is that they will converge to a *Smooth Surface*.
To understand how it works, you can try the *Subdivide* button on an object with only a few polygons.

You can disable this *Smooth* behavior by checking the `Linear` option.


### Multiresolution Workflow
One important aspect of the multiresolution is that you can go back to a lower resolution, make changes on your object and then go back to the highest resolution without losing the high resolution details.  
All the high resolution details will be projected automatically.

::: warning
If you are using a tool that alters the topology of your object, you will lose all the other resolutions of your object!
You should always get a warning in case it should happen, for example when you are using:
- the [Voxel Remesher](#voxel-remesher)
- the [Dynamic Topology](#dynamic-topology)
- the [Trim tool](tools.md#trim)
- the [Split tool](tools.md#split)
:::


## Dynamic Topology

### Brush
When you enable `Dynamic Topology`, most sculpting brushes will have the ability to update the topology under your brushes in real-time.

See the video below in action.

![](./videos/dynamic.mp4)


#### Level of detail
| Method              | Description  |
| :---:               | :---:        |
| Zoom Level          | The level of detail will depend of the camera position |
| Brush Size          | The level of detail will depend of the brush size |

The option `Use pressure radius` is only relevant if `Brush Size` is activated.
When it is activated, the level of detail will always reflect the brush size, even when the brush size is affected by pencil pressure.

#### Quality/Performance

| Method              | Description  |
| :---:               | :---:        |
| Speed               | Favor performance |
| Quality             | Favor quality |

When you favor `Quality`, the 2 main differences are:
- refinement is applied before sculpting, so you will get less interpolating artifact when painting or sculpting very small details
- refinement is running until it converges to the correct level of detail, in contrast to an incremental behavior.
  
  That way, if you sculpt very small details or do quick strokes, the topology will always be refined as expected


### Global
You can remesh the whole mesh by using the same algorithm.
Usually you should prefer the [Voxel Remesher](#voxel-remesher) for full remeshing.

However one advantage over the voxels is that the masked area will be protected, so you can have a better control on where to put more or less density.

### Settings

Whether you are using `Dynamic Topology` on your [Brush](#brush) or [Globally](#global), you can choose in which mode it operates:

| Method              | Description  |
| :---:               | :---:        |
| Uniformisation      | It can add and remove faces, this is the mode used in the video above |
| Subdivision         | Add new faces only, it cannot remove faces  |
| Decimation          | Remove faces only, it cannot add new faces |


#### Separate
If you have a single object based on several disconnected parts, you can split this object into several objects. 
This can be seen as the opposite of [Simple Merging](scene.md#simple-merge).

![](./videos/merge_separate.mp4)


#### Hole Filling
Most of the time, your object will probably be watertight, meaning the mesh is 'closed'.

However if you import You can fill the holes in your mesh If your object has holes, you can fill them.
Note that it only works on 'naive' holes, as such, it cannot 'weld' two separate borders.

![](./videos/hole_filling.mp4)


::: tip
When you run the Voxel remesher, all the holes are automatically closed, whether you are using it on 1 or multiple meshes.ul
:::


