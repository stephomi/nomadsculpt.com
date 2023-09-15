# Symmetry

[[toc]]

---

You can use symmetry to mirror sculpting operations from one side to the other.

The option to enable/disable the symmetry can also be found on the left quick panel (*"Sym"*).

Note that this is a global option, so the state will carry over the different tools.
The only exception are the transforms tool ([Move](#translate), [Rotate](#rotate), [Scale](#scale) and [Gizmo](#gizmo)) which have their own symmetry state.


## Mirroring
Because of technical reasons, some brushes will have imperfect symmetry behavior.

In that case you can use the *Mirror* button to apply back the symmetry from one side to the other.

This operation only succeeds if the algorithm detects that the mesh is symmetrical.
In case the detection fails, you will be asked if you want to force the mirroring.

The main difference is that forcing the mirroring will change the topology, thus you might lose the [Multiresolution](topology.md#multiresolution).


## World vs Local

By default the symmetry is in *World* space, meaning that the symmetry plane is fixed, even if you translate or rotate the plane.

You can see in the video below the usage of *World/Local* space and the behavior of the *Mirror* feature.

![](./videos/symmetry.mp4)


## Editing the symmetry plane

You should probably never use these options but you can reset the symmetry plane origin and orientation, in case you moved them.

Note that the behavior of these options will change depending on what space (*Local/World*) you are in.
So if it doesn't work as you would expect, make sure to check if you are in the correct space.



