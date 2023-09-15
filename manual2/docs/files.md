# Files

[[toc]]

---

## Autosave

If you enable autosave, you can set up a timer so that a popup will appear at regular intervals.
The reason why Nomad doesn't save in background is because 3d files can be pretty big so it can induce a significant lag while you are sculpting.

Additionally, to avoid out-of-memory issues the scene is typically compressed before the saving operation.
This compression/decompression will slow down the save operation as well.

## Import

When you import an external scene file to Nomad, you can either *import* or *add* it.

Adding a file will simply add the objects into the current scene.
Importing a file will create a new Nomad project with the new objects in it.

For now you can import the following files:
- glTF (glb format only)
- OBJ
- STL

## Export

<!-- https://www.tablesgenerator.com/markdown_tables# -->
<!-- http://markdowntable.com/ -->
|                                    | GLB                             | OBJ                             | STL                             |
|:----------------------------------:|:-------------------------------:|:-------------------------------:|:-------------------------------:|
| Layers<sup>[[layer]](#layer)</sup> | Yes                             | No                              | No                              |
| Quad                               | Yes<sup>[[quad]](#quad)</sup>   | Yes                             | No                              |
| Color                              | Yes                             | Yes<sup>[[color]](#color)</sup> | Yes<sup>[[color]](#color)</sup> |
| PBR Painting                       | Yes<sup>[[pbr]](#pbr)</sup>     | No                              | No                              |
| Multiple objects                   | Yes                             | Yes                             | No                              |
| Metadata<sup>[[meta]](#meta)</sup> | Yes                             | No                              | No                              |

### Layer
Layers are supported through glTF morph targets. Nomad also exports per-layer colors, roughness and metalness but it will be ignored by other softwares.

### Quad
Only in Nomad for now, because glTF doesn't support [quad officially yet](https://github.com/KhronosGroup/glTF/pull/1620).
<!-- https://github.com/zellski/glTF/blob/spec/fb-ngon-encoding/extensions/2.0/Vendor/FB_ngon_encoding/README.md -->

### Color
OBJ and STL don't support vertex colors officially, so it might not work in some softwares.

### Meta
It includes most of Nomad settings: symmetry, primitive config, transforms, etc.

### PBR
PBR vertex colors are exported as secondary vertex colors attributes.
The channels are packed in the follow way:

|           | Channel  |
|:---------:|:--------:|
| Roughness | R        |
| Metalness | G        |
| Masking   | B        |

::: warning
The packing might change in future versions, if it happens, this manual will be updated.
:::

#### For blender:

<br>

![](./videos/blender_pbr.mp4)

