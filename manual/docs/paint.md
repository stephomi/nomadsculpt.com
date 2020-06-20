# Vertex Painting

[[toc]]

---

## Stroke Painting
Most sculpting tool can paint as well, you can select the intensity and the channel you want to paint on.

::: tip
You might consider turning on `Smooth Shading` [globally](settings.md#smooth-shading) or [per-object](material.md#smooth-shading) if you are painting metallic surface on a low poly object.
:::

## Material

[PBR](lighting.md#pbr) painting is using 3 channels at the moment.
- `Color` As the name suggests it represents the base color
- `Metalness` It simply tells if the surface is metallic or not. The value should be either 0% or 100% most of the time, in-between values should be exceptional.
- `Roughness` It tells how "rough" or "smooth" a surface is. A low value for the roughness means that the reflections will be sharp.

<!--
| Metalness | Roughness 0%                    | Roughness 50%                    | Roughness 100%                    |
| :---:     | :---:                           |:---:                             |:---:                              |
| 0%        | ![](./images/dielectric_r0.jpg) | ![](./images/dielectric_r50.jpg) | ![](./images/dielectric_r100.jpg) |
| 100%      | ![](./images/metal_r0.jpg)      | ![](./images/metal_r50.jpg)      | ![](./images/metal_r100.jpg)      |
-->
You can choose to disable some of these channels (checkbox) so that painting will simply keep the original value.  

::: warning
Channel masking is currently not available if you have an active [layer](layers.md).
This is because layers only share a single opacity channel among all 3 channels (color/roughness/metalness).

Maybe in the future, each channel will have its own alpha channel to remove this limitation.
:::

|                | Metalness 0%                      | Metalness 100%               |
| :---:          | :---:                             |:---:                         |
| Roughness 0%   | ![](./images/dielectric_r0.jpg)   | ![](./images/metal_r0.jpg)   |
| Roughness 50%  | ![](./images/dielectric_r50.jpg)  | ![](./images/metal_r50.jpg)  |
| Roughness 100% | ![](./images/dielectric_r100.jpg) | ![](./images/metal_r100.jpg) |

::: warning
Metalness and roughness can't be supported if you are using [Matcap rendering](lighting.md#matcap), so if you paint you will only see the colors.
:::
