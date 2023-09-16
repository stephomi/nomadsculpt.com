# Lighting

---

You can choose between two rendering modes:

| Mode              | Meaning                    | Description                         |
| :---:             | :---:                      | :---:                               |
| [PBR](#pbr)       | Physically Based Rendering | Painting with metalness/roughness   |
| [Matcap](#matcap) | Material Capture           | Mostly be useful for pure sculpting |

If you want to learn more about what metalness and roughness stands for, see the [Vertex Paint](painting.md) section.


## PBR
This manual won't dive into the details about Physically Based Rendering.

One important thing to keep in mind is that lighting and material are fully separated.
It means you can paint your object color, roughness and metalness while the lighting is handled independently.
It allows you to paint your object and then tweak the lighting later, without breaking the overall look of your model.


## Lights
Lights are only available with [PBR mode](#pbr).
For performance reasons, you are limited to only 3 lights.

::: tip
You can load a glTF file with more than 3 lights in it and Nomad will keep all of them.
However it won't necessarily perform well.
:::

Here are the type of lights currently supported:

| Mode                        | Description                      | Can cast shadows |
| :---:                       | :---:                            | :---: |
| [Directional](#directional) | Infinitely far away sun light    | yes   |
| [Spot](#spot)               | Cone shaped lights				 | Yes   |
| [Point](#point)             | Omni-directional point of light  | No    |

### Directional
It emits light from infinitely far away, with a uniform intensity.
Unlike the other type of lights, its 3d position in the scene doesn't matter, only its orientation does.

You can attach this light to the camera, that way it has consistent lighting.  
For example you can use it to make a rim light (a strong light that emits from the back of your model, pointing towards the camera) that always lights the back of your model.

### Spot
Spot light emits light in a single direction, restricted by a cone shape.

### Point
Point light will emit light in every direction.  
At the moment, point light doesn't support shadows.

### Shadows
The option `normal bias` can be used to reduce common shadow artifacts (acne/peter-panning).

The quality of the shadows depends on the size of the objects relative to the entire scene.  
If you have a big object in your scene that doesn't need to cast shadows (for example a big plane), make sure to disable shadow casting in its [material settings](material.md#cast-shadows).


## Matcap
As the name suggests (MATerial CAPture), a matcap takes care of both the lighting and material information in a single image.
Since the material itself is already present in the matcap, roughness and metalness painting channel will be ignored.
The painting color will be multiplied against the matcap, meaning if you have a black/gray matcap, using white paint won't make it brighter.

Artists tend to favor this mode for sculpting purposes since they allow them to focus on the shape and geometry itself.



