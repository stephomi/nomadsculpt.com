# History

[[toc]]

---

Like most content creation tools, you can undo/redo all editing in Nomad.
There is a limit to how many operations can be undoable, but you can control this behavior.

::: tip
You can use quick gestures to undo/redo:
- 2 fingers tap to undo
- 3 fingers tap to redo
:::

## Limitation

### History limit (Mb)
If the history stack exceeds this value, the older operations will be removed so that the memory budget fits into this limit.


### Stack limit
You can control the maximum number of operations.


### Range protection
If you enable this option, a prompt will popup and ask you if you really want to undo all the operations.

You can still redo the operations but the prompt is mostly there to prevent unwanted errors.
For example by sculpting a bit after redoing many operations, you will lose the opportunity to redo.


## Restore camera
For each operation, the viewpoint of the camera is saved.
If you enable this option, undoing or redoing an operation will reset the camera to the saved viewpoint.


