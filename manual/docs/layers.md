# Layers

[[toc]]

---

Layers can record position offsets and painting, it can be useful for non-linear workflow.
For example by experimenting with different facial expressions without relying on the history stack to undo the changes.

For painting data, layers are sorted in a top-down fashion; so layers on top will mask the lower ones.
The order only matters for the painting information, the sculpting part (offset) isn't impacted.

You can clear part of this mask by using the [Delete Layer](#delete-layer) tool.

![](./videos/layer.mp4)


## Options

| Action       | Icon                                      | Description  |
| :---:        | :---:                                     | :---:        |
| Visible      | ![](./icons/show.png#small)       | Show/hide the layer influence |
| Edit Name    | ![](./icons/pencil.png#small)     | Edit the layer name |
| Delete       | ![](./icons/trash.png#small)      | Delete the layer |
| Move         | ![](./icons/move.png#small)       | Hold to move the layer position in the list |
| Duplicate    | ![](./icons/duplicate.png#small)  | Duplicate the layer |
| Merge Down   | ![](./icons/merge_down.png#small) | Merge the layer with the lower layer (or base mesh) |
| More         | ![](./icons/more.png#small)       | [More...](#more) options |

### More...
If you want more control you can change the intensity of each channel of a layer:
- offset
- color
- roughness
- metalness

::: warning
At the moment layers only share a single opacity channel for all 3 channels (color/metalness/roughness).
If you merge multiple layers with per-channel intensity that aren't at full intensity, it's possible that the final result will look different.

Maybe in the future, each channel will have its own alpha channel to remove this limitation.
:::

# Note
Unlike many sculpting softwares, changing the topology of a mesh will not discard the layers.

So you can use the [Voxel Remesher](topology.md#voxel-remesher), the [Multiresolution](topology.md#multiresolution) or the [Trim](tools.md#trim)/[Split](tools.md#split) tools.

However for the [Voxel Remesher](topology.md#voxel-remesher), the quality of the layer will be impacted.



