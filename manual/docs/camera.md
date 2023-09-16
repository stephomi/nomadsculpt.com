# Camera

## Views
You can save camera view points by using `Add View`.
If you click on the view name, then the camera will restore the view.


::: tip
A saved view will save the [Projection Type](#projection-type) settings but also the [Reference image](background.md).  
It can be useful if you want to cycle between front/left/back reference views with different backgrounds.
:::

| Action      | Icon                             | Description  |
| :---:       | :---:                            | :---:        |
| Update View | ![](./icons/update_view.png#icon) | Update the saved view with the current view point |


## Interaction

### Rotation
You rotate the camera by dragging *one* finger on the background.
If you drag the finger on your model, it will instead start the sculpting operation.

::: tip Can I rotate the camera if I can't access the background?
Yes, you can simply put *two* fingers on the screen - as if you wanted to start a pan/zoom gesture - and then simply release *one* finger.
:::

### Focus / Reset
*Double tap* on the model to focus the picked point.
If you *double tap* in the background, the camera will focus on the selected mesh instead.


### Translation
By moving *two* fingers, you can pan the camera.


### Zooming
By using the pinch gesture you can zoom in/out.


### Rolling
You can *roll* the view by rotating *two* fingers.
::: warning
This gesture is only available for `trackball` rotation mode.
:::

## Projection Type
You can change the `Field of View` (FOV / focal length) of your camera.
It is usually advised to use a low FOV for sculpting purposes, as it can help for proportion.  
You can also use the `Orthographic` mode, which is more or less similar to a FOV equal to 0


## Rotation Type
By default the camera is using the `Orbit` rotation mode.
It means you have only two degrees of freedom, it is more intuitive but in some cases you'll want more flexibility.  
You can switch to `Trackball`, you'll be able to *roll* the view by rotating *two* fingers on the viewport.


## Pivot
When you rotate the camera you can see a small pink dot, this is your camera pivot point.  
It's very important to understand where your pivot is so that you don't get lost or frustrated by the camera.

By default the pivot is update through these operations:
- double tap on the model
- double tap on the background (the new pivot will be on the center of your mesh)
- putting *two* fingers on screen (pan/zoom/roll) will update the pivot on the center of the *two* fingers

::: tip
When you are used to it, you can hide the (hint) pink dot if you go in the [Settings](settings.md) menus.
:::
