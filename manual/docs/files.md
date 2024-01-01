# Files
---
# Project

## Save ![](./icons/save.png#icon#left)
Save the Nomad project.

## Save As... ![](./icons/save_as.png#icon#left)
Display the project browser to allow you to save the Nomad project with a new name.

## Open... ![](./icons/open.png#icon#left)
Display the project browser to open a project.

## Add to scene... ![](./icons/add_file.png#icon#left)
Display the project browser, when a project is selected it's contents will be merged with the current scene.

## Delete... ![](./icons/trash.png#icon#left)
Display the project browser, any selected projects will be deleted from the file system.

## New ![](./icons/new_file.png#icon#left)
Start a new project, if there are unsaved changes you will be asked if you want to save.

## Advanced ![](./icons/cog.png#icon#left)
Display advanced options:

### Project/ glTF / OBJ / STL / FBX
#### Keep topology
Nomad by default will attempt to fix problem geometry on load. Enabling this will stop Nomad from vertex/face reordering, removal of vertex/face duplicates, removal of unused vertices.

#### Skip textures
Skip loading of textures for formats that support it like glTF

### Project /glTF
#### Keep gui settings
Enable savng of the gui and project settings within the Nomad .nom or glTF file.

### OBJ
#### Split OBJ by groups
Enable splitting OBJ groups into separate objects.

#### Color Space
Set the color mode interpreted from the obj as Linear, sRGB, or Auto.

### FBX
#### Color Space
Set the color mode interpreted from the obj as Linear, sRGB, or Auto.

## Import

For importing 3d files that aren't Nomad projects.

When you import an external scene file to Nomad, you can either *import* or *add* it.

Adding a file will simply add the objects into the current scene.
Importing a file will create a new Nomad project with the new objects in it.

For now you can import the following files:
- glTF (glb format only)
- OBJ
- STL


## Autosave

If you enable autosave, you can set up a timer so that a popup will appear at regular intervals.
The reason why Nomad doesn't save in background is because 3d files can be pretty big so it can induce a significant lag while you are sculpting.

Additionally, to avoid out-of-memory issues the scene is typically compressed before the saving operation.
This compression/decompression will slow down the save operation as well.

### Timer pop up
How frequently will the timer popup appear.

### Popup timeout
Enable popup timeout

## Export

Save to a 3d geometry format that can be used in other software. 

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

### Only include selected objects
Enable only exporting the selected objects instead of the entire scene.

### Vertex colors
Export vertex colors if supported by the file format.

### PBR paint
PBR vertex colors are exported as secondary vertex colors attributes.
The channels are packed in the following way:

|           | Channel  |
|:---------:|:--------:|
| Roughness | R        |
| Metalness | G        |
| Masking   | B        |


### Layers
Layers are supported through glTF morph targets. Nomad also exports per-layer colors, roughness and metalness but it will be ignored by other software.

### Layer painting
Export layer painting, usually ignored by other software.

### Normals
Export normal information. Note that Nomad will always compute it own normals when importing other file formats.

### Textures
If textures have been added to the material, they will be exported. Note that this will not bake textures, that is done via the bake options in topology.

### Export button
Click this to export the geometry using the selected settiings.

#### For blender:

<br>

![](./videos/blender_pbr.mp4)

## Render

Export an image that is the combination of all the settings in the project (lights, materials, post processing etc)

### Transparent background
Enable an alpha channel for the render, useful to combine the render with other images in 2d programs. Note that partial transparency is not supported.

### Show interface
Enable including Nomad's UI in the render.

### Render ratio
A multiplier on the image resolution.

### Final size
The resolution to use for the render. When the File menu is active, a dashed overlay will be drawn in the viewport to indicate the render region if it does not match the screen resolution (note that you must be in landscape mode for this to be correct).

### Export button
Click this to start the render process, when complete you can then choose how to save the image.
