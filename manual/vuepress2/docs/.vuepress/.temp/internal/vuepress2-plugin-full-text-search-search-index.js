
export const searchIndex = [
  {
    "path": "/background.html",
    "title": "Background",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Background",
        "slug": "background",
        "content": "Reference Image For now there are two options for the viewport background. Method\nDescription Color\nA flat color that you can choose Environment\nShow the image of the current environment"
      },
      {
        "header": "Reference Image",
        "slug": "reference-image",
        "content": "You can add an image of your choice on the background to be used for reference.\nYou can change the position and scale, for example if you want to move it on the screen corner.\nNote that you can also set up the overlay level.\nAt overlay 0, the mesh will entirely occlude the reference image.\nAt overlay 1, the mesh will be occluded entirely by the image.\nIn-between values can be useful if you really want to use the reference image as a guide."
      }
    ]
  },
  {
    "path": "/camera.html",
    "title": "Camera",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Camera",
        "slug": "camera",
        "content": "ViewsInteractionRotationFocus / ResetTranslationZoomingRollingProjection TypeRotation TypePivot"
      },
      {
        "header": "Views",
        "slug": "views",
        "content": "You can save camera view points by using Add View.\nIf you click on the view name, then the camera will restore the view.\nTIP\nA saved view will save the Projection Type settings but also the Reference image.\nIt can be useful if you want to cycle between front/left/back reference views with different backgrounds. Action\nIcon\nDescription Update View Update the saved view with the current view point"
      },
      {
        "header": "Interaction",
        "slug": "interaction",
        "content": ""
      },
      {
        "header": "Rotation",
        "slug": "rotation",
        "content": "You rotate the camera by dragging one finger on the background.\nIf you drag the finger on your model, it will instead start the sculpting operation.\nCan I rotate the camera if I can't access the background?\nYes, you can simply put two fingers on the screen - as if you wanted to start a pan/zoom gesture - and then simply release one finger."
      },
      {
        "header": "Focus / Reset",
        "slug": "focus-reset",
        "content": "Double tap on the model to focus the picked point.\nIf you double tap in the background, the camera will focus on the selected mesh instead."
      },
      {
        "header": "Translation",
        "slug": "translation",
        "content": "By moving two fingers, you can pan the camera."
      },
      {
        "header": "Zooming",
        "slug": "zooming",
        "content": "By using the pinch gesture you can zoom in/out."
      },
      {
        "header": "Rolling",
        "slug": "rolling",
        "content": "You can roll the view by rotating two fingers.\nWARNING\nThis gesture is only available for trackball rotation mode."
      },
      {
        "header": "Projection Type",
        "slug": "projection-type",
        "content": "You can change the Field of View (FOV / focal length) of your camera.\nIt is usually advised to use a low FOV for sculpting purposes, as it can help for proportion.\nYou can also use the Orthographic mode, which is more or less similar to a FOV equal to 0"
      },
      {
        "header": "Rotation Type",
        "slug": "rotation-type",
        "content": "By default the camera is using the Orbit rotation mode.\nIt means you have only two degrees of freedom, it is more intuitive but in some cases you'll want more flexibility.\nYou can switch to Trackball, you'll be able to roll the view by rotating two fingers on the viewport."
      },
      {
        "header": "Pivot",
        "slug": "pivot",
        "content": "When you rotate the camera you can see a small pink dot, this is your camera pivot point.\nIt's very important to understand where your pivot is so that you don't get lost or frustrated by the camera.\nBy default the pivot is update through these operations: double tap on the model\ndouble tap on the background (the new pivot will be on the center of your mesh)\nputting two fingers on screen (pan/zoom/roll) will update the pivot on the center of the two fingers TIP\nWhen you are used to it, you can hide the (hint) pink dot if you go in the Settings menus."
      }
    ]
  },
  {
    "path": "/faq.html",
    "title": "FAQ",
    "pathLocale": "/",
    "contents": [
      {
        "header": "FAQ",
        "slug": "faq",
        "content": "Where are my projects located on my device?It crashes when I save or remesh my model!It crashes when I load my project!It crashes when I start Nomad!Can you do animation?Can you do low-poly modeling?Can you do uv and texturing?Can you do turntable video recording?Can you add [insert-favorite-feature] as a top-level button?What are the next features?Why is there a free trial on Android? But not on iOS?Can it work on multiple devices?How to restore my purchase?Is there a way to beta test?Can you translate in [my-language]?"
      },
      {
        "header": "Where are my projects located on my device?",
        "slug": "where-are-my-projects-located-on-my-device",
        "content": "On iOS, it's simply in Nomad/projects/.\nOn Android, it's in Android/data/com.stephaneginier.nomad/files/projects/.\nOn the recent Android version (10/11), you don't have access to the Android/datafolder anymore.\nYou can access it through a separate app, for example this app."
      },
      {
        "header": "It crashes when I save or remesh my model!",
        "slug": "it-crashes-when-i-save-or-remesh-my-model",
        "content": "Your device is running out of memory (RAM).\nTo reduce memory usage in your scene, you can use some of the Topology options to reduce the number of polygons.\nRAM/Storage\nWhat matters is the amount of RAM, not the storage (which is usually much bigger)."
      },
      {
        "header": "It crashes when I load my project!",
        "slug": "it-crashes-when-i-load-my-project",
        "content": "If the file is relatively small, you can send it to me by email (support@nomadsculpt.com).\nIf the file is big, then the device is probably running out of memory.\nThere are several things that you can do to salvage the file. Make sure you close any other opened apps on your device, to make Nomad use as much memory as possible. If your project is using Layers, you can try enabling Merge Layers (at import) before loading the project.\nThe option can be found in the Settings menu.\nLayers can take a lot of memory, merging them at loading can help reduce the memory usage. Locate your file Decompress your project (.glb.lz4 to .glb).\nOn windows, you need to download LZ4.\nOn MacOS, you can use the command line.\nWith homebrew, simply do brew install lz4 and then lz4 myproject.glb.lz4. Load the .glb file directly into Nomad again. If it still crashes at loading, you can open the file on any 3d desktop software that supports glTF."
      },
      {
        "header": "It crashes when I start Nomad!",
        "slug": "it-crashes-when-i-start-nomad",
        "content": "Rename the projects folder and start Nomad to see if it's working.\nIf it loads correctly, you can move the faulty file (probably the biggest one) outside the projects folder.\nOtherwise try to rename the other folder (matcaps, backgrounds) and start Nomad again."
      },
      {
        "header": "Can you do animation?",
        "slug": "can-you-do-animation",
        "content": "A timeline feature that could animate the layers could be interesting, but not really planned at the moment.\nI'd like to support rigging/skinning in the future, but it poses a few challenges (notably the interaction with sculpting tools...) so nothing sure for now."
      },
      {
        "header": "Can you do low-poly modeling?",
        "slug": "can-you-do-low-poly-modeling",
        "content": "This is not really Nomad Sculpt's scope, but maybe I'll provide a few tools in the future."
      },
      {
        "header": "Can you do uv and texturing?",
        "slug": "can-you-do-uv-and-texturing",
        "content": "Not planned for now."
      },
      {
        "header": "Can you do turntable video recording?",
        "slug": "can-you-do-turntable-video-recording",
        "content": "Not planned for now, iOS has a native video recording feature that is very easy to use."
      },
      {
        "header": "Can you add [insert-favorite-feature] as a top-level button?",
        "slug": "can-you-add-insert-favorite-feature-as-a-top-level-button",
        "content": "If I did that each time I received such a request, Nomad wouldn't be usable.\nCustomization is probably the way to go, but it's not straightforward.\nHandling a small screen is challenging."
      },
      {
        "header": "What are the next features?",
        "slug": "what-are-the-next-features",
        "content": "For the mid/long term roadmap I got a lot of ideas but I don't know yet.\nFor the short term roadmap, what is planned: scene tree/hierarchy, with instancing support\nimproving Trim tool to be more robust Bug fixes and improving existing features will always have higher priority over adding new features."
      },
      {
        "header": "Why is there a free trial on Android? But not on iOS?",
        "slug": "why-is-there-a-free-trial-on-android-but-not-on-ios",
        "content": "Because old Android devices suck (and some recent ones as well...), and I didn't want people to buy the app and be welcomed with a black screen.\nBut the main reason is that I felt like paid Android apps are not really the norm."
      },
      {
        "header": "Can it work on multiple devices?",
        "slug": "can-it-work-on-multiple-devices",
        "content": "Yes, the purchase is tied to the store used.\nHowever if you own both iOS and Android devices, you'll need to purchase the app twice."
      },
      {
        "header": "How to restore my purchase?",
        "slug": "how-to-restore-my-purchase",
        "content": "Google Play handles the synchronization automatically.\nIf it doesn't work: Double check that you are logged on Google Play with the same account.\nGo to the About menu (top left nomad icon), and hit restore purchase.\nWait a few hours, sometimes Google Play takes a bit of time for some reason.\nUninstall and reinstall Nomad, make sure to backup your files if you don't want to lose anything.\nContact me at support@nomadsculpt.com, ideally with a screenshot of the logs after trying to restore a purchase (logs can be enabled in the Debug menu)."
      },
      {
        "header": "Is there a way to beta test?",
        "slug": "is-there-a-way-to-beta-test",
        "content": "There is no Android/iOS beta version.\nHowever you can see the list of bugs/fixes for the pending/incoming release in the Logs.\nThe web demo is usually updated with the pending/incoming release."
      },
      {
        "header": "Can you translate in [my-language]?",
        "slug": "can-you-translate-in-my-language",
        "content": "At the moment I rely on the community for translation, but it's not realistic since I vastly underestimated the number of texts in Nomad!\nMy previous project SculptGL was much smaller.\nAnd I don't really want to have an incomplete version with many of the text entries not translated.\nYou can't really rely on the community to regularly handle the update (although I've been very lucky with the chinese translation, thanks to @CrisprHarrison!).\nMy plan was to use an app translation service but I want to be sure it's not going to be too much work on maintenance (especially since I do updates regularly).\nSo maybe later!"
      }
    ]
  },
  {
    "path": "/files.html",
    "title": "Files",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Files",
        "slug": "files",
        "content": "AutosaveImportExportLayerQuadColorMetaPBR"
      },
      {
        "header": "Autosave",
        "slug": "autosave",
        "content": "If you enable autosave, you can set up a timer so that a popup will appear at regular intervals.\nThe reason why Nomad doesn't save in background is because 3d files can be pretty big so it can induce a significant lag while you are sculpting.\nAdditionally, to avoid out-of-memory issues the scene is typically compressed before the saving operation.\nThis compression/decompression will slow down the save operation as well."
      },
      {
        "header": "Import",
        "slug": "import",
        "content": "When you import an external scene file to Nomad, you can either import or add it.\nAdding a file will simply add the objects into the current scene.\nImporting a file will create a new Nomad project with the new objects in it.\nFor now you can import the following files: glTF (glb format only)\nOBJ\nSTL"
      },
      {
        "header": "Export",
        "slug": "export",
        "content": "GLB\nOBJ\nSTL Layers[layer]\nYes\nNo\nNo Quad\nYes[quad]\nYes\nNo Color\nYes\nYes[color]\nYes[color] PBR Painting\nYes[pbr]\nNo\nNo Multiple objects\nYes\nYes\nNo Metadata[meta]\nYes\nNo\nNo"
      },
      {
        "header": "Layer",
        "slug": "layer",
        "content": "Layers are supported through glTF morph targets. Nomad also exports per-layer colors, roughness and metalness but it will be ignored by other softwares."
      },
      {
        "header": "Quad",
        "slug": "quad",
        "content": "Only in Nomad for now, because glTF doesn't support quad officially yet."
      },
      {
        "header": "Color",
        "slug": "color",
        "content": "OBJ and STL don't support vertex colors officially, so it might not work in some softwares."
      },
      {
        "header": "Meta",
        "slug": "meta",
        "content": "It includes most of Nomad settings: symmetry, primitive config, transforms, etc."
      },
      {
        "header": "PBR",
        "slug": "pbr",
        "content": "PBR vertex colors are exported as secondary vertex colors attributes.\nThe channels are packed in the follow way: Channel Roughness\nR Metalness\nG Masking\nB WARNING\nThe packing might change in future versions, if it happens, this manual will be updated."
      },
      {
        "header": "For blender:",
        "slug": "for-blender",
        "content": ""
      }
    ]
  },
  {
    "path": "/history.html",
    "title": "History",
    "pathLocale": "/",
    "contents": [
      {
        "header": "History",
        "slug": "history",
        "content": "LimitationHistory limit (Mb)Stack limitRange protectionRestore camera Like most content creation tools, you can undo/redo all editing in Nomad.\nThere is a limit to how many operations can be undoable, but you can control this behavior.\nTIP\nYou can use quick gestures to undo/redo: 2 fingers tap to undo\n3 fingers tap to redo"
      },
      {
        "header": "Limitation",
        "slug": "limitation",
        "content": ""
      },
      {
        "header": "History limit (Mb)",
        "slug": "history-limit-mb",
        "content": "If the history stack exceeds this value, the older operations will be removed so that the memory budget fits into this limit."
      },
      {
        "header": "Stack limit",
        "slug": "stack-limit",
        "content": "You can control the maximum number of operations."
      },
      {
        "header": "Range protection",
        "slug": "range-protection",
        "content": "If you enable this option, a prompt will popup and ask you if you really want to undo all the operations.\nYou can still redo the operations but the prompt is mostly there to prevent unwanted errors.\nFor example by sculpting a bit after redoing many operations, you will lose the opportunity to redo."
      },
      {
        "header": "Restore camera",
        "slug": "restore-camera",
        "content": "For each operation, the viewpoint of the camera is saved.\nIf you enable this option, undoing or redoing an operation will reset the camera to the saved viewpoint."
      }
    ]
  },
  {
    "path": "/",
    "title": "Overview",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Overview",
        "slug": "overview",
        "content": "Any questions?\nYou can visit the forum, or contact me at support@nomadsculpt.com."
      },
      {
        "header": "Table of content",
        "slug": "table-of-content",
        "content": "Menu\nIcon\nDescription Camera Camera control and interaction Tools List of every tools/brushes Topology Edit the topology of the model Stroke Edit the current tool settings, stroke, falloff... Vertex Paint Painting settings for painting tools Files Manage your projects, export, import, etc Background Change the background and add a reference image Lighting How to lit your scene Post Process Post Processing (screen-space visual effects) Material Material (object-level) Scene Add new primitive and manage your scene objects Layers Manage your current object layers Pressure Manage the pressure of your pencil Symmetry Manage the mirror plane of your current mesh Settings Customize the 3d viewport Interface Customize the interface History Manage the undo/redo history stack FAQ Frequently Asked Questions"
      },
      {
        "header": "Community tutorial",
        "slug": "community-tutorial",
        "content": ""
      },
      {
        "header": "Glen southern",
        "slug": "glen-southern",
        "content": ""
      },
      {
        "header": "Small Robot Studio",
        "slug": "small-robot-studio",
        "content": ""
      },
      {
        "header": "DM Art classes",
        "slug": "dm-art-classes",
        "content": ""
      }
    ]
  },
  {
    "path": "/interface.html",
    "title": "Interface",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Interface",
        "slug": "interface",
        "content": "Keyboard shortcuts You can customize many interface settings.\nDepending on your screen size, you might want to add or remove quick shortcuts for the lower left and bottom bar.\nNote that if the left shortcuts can't fit on the screen, some of these shortcuts won't be displayed."
      },
      {
        "header": "Keyboard shortcuts",
        "slug": "keyboard-shortcuts",
        "content": "Keyboard is supported on iOS, you can hold ⌘ to display a list of shortcuts.\nFor Android, support is a bit experimental."
      }
    ]
  },
  {
    "path": "/layers.html",
    "title": "Layers",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Layers",
        "slug": "layers",
        "content": "OptionsMore... Layers can record position offsets and painting, it can be useful for non-linear workflow.\nFor example by experimenting with different facial expressions without relying on the history stack to undo the changes.\nFor painting data, layers are sorted in a top-down fashion; so layers on top will mask the lower ones.\nThe order only matters for the painting information, the sculpting part (offset) isn't impacted.\nYou can clear part of this mask by using the Delete Layer tool."
      },
      {
        "header": "Options",
        "slug": "options",
        "content": "Action\nIcon\nDescription Visible Show/hide the layer influence Edit Name Edit the layer name Delete Delete the layer Move Hold to move the layer position in the list Duplicate Duplicate the layer Merge Down Merge the layer with the lower layer (or base mesh) More More... options"
      },
      {
        "header": "More...",
        "slug": "more",
        "content": "If you want more control you can change the intensity of each channel of a layer: offset\ncolor\nroughness\nmetalness WARNING\nAt the moment layers only share a single opacity channel for all 3 channels (color/metalness/roughness).\nIf you merge multiple layers with per-channel intensity that aren't at full intensity, it's possible that the final result will look different.\nMaybe in the future, each channel will have its own alpha channel to remove this limitation."
      },
      {
        "header": "Note",
        "slug": "note",
        "content": "Unlike many sculpting softwares, changing the topology of a mesh will not discard the layers.\nSo you can use the Voxel Remesher, the Multiresolution or the Trim/Split tools.\nHowever for the Voxel Remesher, the quality of the layer will be impacted."
      }
    ]
  },
  {
    "path": "/lighting.html",
    "title": "Lighting",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Lighting",
        "slug": "lighting",
        "content": "PBRLightsDirectionalSpotPointShadowsMatcap You can choose between two rendering modes: Mode\nMeaning\nDescription PBR\nPhysically Based Rendering\nPainting with metalness/roughness Matcap\nMaterial Capture\nMostly be useful for pure sculpting If you want to learn more about what metalness and roughness stands for, see the Vertex Paint section."
      },
      {
        "header": "PBR",
        "slug": "pbr",
        "content": "This manual won't dive into the details about Physically Based Rendering.\nOne important thing to keep in mind is that lighting and material are fully separated.\nIt means you can paint your object color, roughness and metalness while the lighting is handled independently.\nIt allows you to paint your object and then tweak the lighting later, without breaking the overall look of your model."
      },
      {
        "header": "Lights",
        "slug": "lights",
        "content": "Lights are only available with PBR mode.\nFor performance reasons, you are limited to only 3 lights.\nTIP\nYou can load a glTF file with more than 3 lights in it and Nomad will keep all of them.\nHowever it won't necessarily perform well. Here are the type of lights currently supported: Mode\nDescription\nCan cast shadows Directional\nInfinitely far away sun light\nyes Spot\nCone shaped lights\nYes Point\nOmni-directional point of light\nNo"
      },
      {
        "header": "Directional",
        "slug": "directional",
        "content": "It emits light from infinitely far away, with a uniform intensity.\nUnlike the other type of lights, its 3d position in the scene doesn't matter, only its orientation does.\nYou can attach this light to the camera, that way it has consistent lighting.\nFor example you can use it to make a rim light (a strong light that emits from the back of your model, pointing towards the camera) that always lights the back of your model."
      },
      {
        "header": "Spot",
        "slug": "spot",
        "content": "Spot light emits light in a single direction, restricted by a cone shape."
      },
      {
        "header": "Point",
        "slug": "point",
        "content": "Point light will emit light in every direction.\nAt the moment, point light doesn't support shadows."
      },
      {
        "header": "Shadows",
        "slug": "shadows",
        "content": "The option normal bias can be used to reduce common shadow artifacts (acne/peter-panning).\nThe quality of the shadows depends on the size of the objects relative to the entire scene.\nIf you have a big object in your scene that doesn't need to cast shadows (for example a big plane), make sure to disable shadow casting in its material settings."
      },
      {
        "header": "Matcap",
        "slug": "matcap",
        "content": "As the name suggests (MATerial CAPture), a matcap takes care of both the lighting and material information in a single image.\nSince the material itself is already present in the matcap, roughness and metalness painting channel will be ignored.\nThe painting color will be multiplied against the matcap, meaning if you have a black/gray matcap, using white paint won't make it brighter.\nArtists tend to favor this mode for sculpting purposes since they allow them to focus on the shape and geometry itself."
      }
    ]
  },
  {
    "path": "/material.html",
    "title": "Material",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Material",
        "slug": "material",
        "content": "Opacity modeOpaqueBlendingAdditiveDitheringRefractionAlways unlitCasts shadowsTwo sidedSmooth Shading Materials are properties that can change the look of your object.\nFor precise control over the object's painting, see the Vertex Paint options;\nAt the moment, each object has its own material, two objects cannot share the same material."
      },
      {
        "header": "Opacity mode",
        "slug": "opacity-mode",
        "content": ""
      },
      {
        "header": "Opaque",
        "slug": "opaque",
        "content": "The default mode and the fastest."
      },
      {
        "header": "Blending",
        "slug": "blending",
        "content": "You can make your mesh semi-transparent with this slider.\nNote that because of real-time constraints, you can have noticeable visual artifacts in some cases if your object has a complex shape."
      },
      {
        "header": "Additive",
        "slug": "additive",
        "content": "You can make your mesh semi-transparent with this slider.\nYou can set an opacity value higher than 1, which means the object will be brighter.\nIt can be useful if you want to use bloom and the threshold parameter to only make this object glow like an emissive object.\nThis mode tends to have less artifacts than Blending (order independent transparency)."
      },
      {
        "header": "Dithering",
        "slug": "dithering",
        "content": "Make the object semi-transparent by discarding some pixels in a random fashion."
      },
      {
        "header": "Refraction",
        "slug": "refraction",
        "content": "This mode can be used to simulate glass material.\nBecause of real time constraints, self-refraction and multi-layered refraction is somewhat limited.\nThe roughness painting of the model impacts how blurry the refraction is.\nBy default, every object created in Nomad has a roughness slightly around 25%, thus the refraction won't be perfect but a bit blurry.\nYou can use the paint glossy button to repaint your model with a roughness and metalness of 0 (the colors won't be affected).\nThere are 2 different roughness at play, the one driving how blurry the reflection is on the surface, and the other one driving the interior (refraction).\nHowever, since there is only one painting roughness channel in Nomad, both interior and exterior roughness will share the same value.\nIn order to have different values (for example a lollipop with sharp surface but blurry interior) you use the sliders Surface glossiness and Interior roughness to override the painted roughness."
      },
      {
        "header": "Always unlit",
        "slug": "always-unlit",
        "content": "If enabled, the object will ignore PBR and Matcap and simply display its color painting without shading.\nNote that if you use Additive, you can paint transparency directly by using black color."
      },
      {
        "header": "Casts shadows",
        "slug": "casts-shadows",
        "content": "For now Auto is the same as On.\nTransparent objects also cast shadows (in a dithering pattern to emulate blended shadows).\nMake sure to disable shadow casting if you have a big object in your scene that doesn't need to cast shadows (for example a big floor)."
      },
      {
        "header": "Two sided",
        "slug": "two-sided",
        "content": "See the global option.\nAuto value will use the global option."
      },
      {
        "header": "Smooth Shading",
        "slug": "smooth-shading",
        "content": "See the global option.\nAuto value will use the global option."
      }
    ]
  },
  {
    "path": "/paint.html",
    "title": "Vertex Painting",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Vertex Painting",
        "slug": "vertex-painting",
        "content": "Stroke PaintingMaterial"
      },
      {
        "header": "Stroke Painting",
        "slug": "stroke-painting",
        "content": "Most sculpting tools can paint as well, you can select the intensity and the channel you want to paint on.\nTIP\nYou might consider turning on Smooth Shading globally or per-object if you are painting a metallic surface on a low poly object."
      },
      {
        "header": "Material",
        "slug": "material",
        "content": "PBR painting is using 3 channels at the moment. Color As the name suggests it represents the base color\nMetalness It simply tells if the surface is metallic or not. The value should be either 0% or 100% most of the time, in-between values should be exceptional.\nRoughness It tells how \"rough\" or \"smooth\" a surface is. A low value for the roughness means that the reflections will be sharp. You can choose to disable some of these channels (checkbox) so that painting will simply keep the original value.\nWARNING\nChannel masking is currently not available if you have an active layer.\nThis is because layers only share a single opacity channel among all 3 channels (color/roughness/metalness).\nMaybe in the future, each channel will have its own alpha channel to remove this limitation. Metalness 0%\nMetalness 100% Roughness 0% Roughness 50% Roughness 100% WARNING\nMetalness and roughness can't be supported if you are using Matcap rendering, so if you paint you will only see the colors."
      }
    ]
  },
  {
    "path": "/postprocess.html",
    "title": "Post process",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Post process",
        "slug": "post-process",
        "content": "QualityReflection (SSR)Ambient Occlusion (SSAO)Depth of Field (DOF)BloomTone MappingCurvatureChromatic AberrationVignetteGrainSharpnessTemporal Anti-Aliasing (TAA) Using post processing can dramatically improve the final look of your scene.\nPost process can impact the performance by a lot depending on your device.\nThere's a global checkbox to disable all the postprocess, so that you can quickly go back to sculpting/modeling without losing your presets.\nFor PBR rendering, Ambient Occlusion, Reflection and Tone Mapping should be enabled.\nHowever, most of the time you want the post process to be disabled when you are sculpting, to focus on the shape itself of the rendering."
      },
      {
        "header": "Quality",
        "slug": "quality",
        "content": "Simply check the options (Max samples and Full Resolution) if you want to improve the quality of the postprocess.\nFull resolution can makes a big difference with Ambient Occlusion."
      },
      {
        "header": "Reflection (SSR)",
        "slug": "reflection-ssr",
        "content": "With this option, objects can reflect other objects in the scene, as long as the objects are visible on the screen.\nIf you have metallic and shiny objects in your scene, then this option should probably be used.\nThis effect is only effective with PBR mode. SSR off\nSSR off"
      },
      {
        "header": "Ambient Occlusion (SSAO)",
        "slug": "ambient-occlusion-ssao",
        "content": "Ambient occlusion will darken areas where the light has less chance of reaching (corners, etc).\nThe effect only depends on the model geometry. Mode\nDescription Strength\nIntensity of the effect Radius\nHow widespread the effect is Curvature bias\nHow sensitive the effect is relative to the surface variation SSAO off\nSSAO off"
      },
      {
        "header": "Depth of Field (DOF)",
        "slug": "depth-of-field-dof",
        "content": "Add a blur effect on the region that is outside the focus.\nSimply tap on your model to change the focus point. DOF off\nDOF focus on far ring\nDOF focus on close ring"
      },
      {
        "header": "Bloom",
        "slug": "bloom",
        "content": "Blooms will make the bright area of your scene glow. Bloom off\nBloom with radius 0\nBloom with radius 1"
      },
      {
        "header": "Tone Mapping",
        "slug": "tone-mapping",
        "content": "Tone Mapping is an operation that will remap HDR values to the [0, 1] range.\nIf you don't use it (or select none), any color component higher than 1 will be clamped.\nAny color variations above this range will then be lost.\nYou can adjust the overall image with exposure, contrast and saturation.\nNotice that with Tone Mapping disabled, some details disappear because the pixels are too bright. Tone Mapping off\nTone Mapping on"
      },
      {
        "header": "Curvature",
        "slug": "curvature",
        "content": "Sharpen the edges of the model. Curvature off\nCurvature on"
      },
      {
        "header": "Chromatic Aberration",
        "slug": "chromatic-aberration",
        "content": "Simulate the lens artifacts with light being decomposed around the screen edges. Chromatic off\nChromatic on"
      },
      {
        "header": "Vignette",
        "slug": "vignette",
        "content": "Simulate the lens artifacts by darkening the screen edges. Vignette off\nVignette on"
      },
      {
        "header": "Grain",
        "slug": "grain",
        "content": "Add a grain effect, it can help make the image a bit less artificial. Grain off\nGrain on"
      },
      {
        "header": "Sharpness",
        "slug": "sharpness",
        "content": "Sharpen the model edges. Sharpness off\nSharpness on"
      },
      {
        "header": "Temporal Anti-Aliasing (TAA)",
        "slug": "temporal-anti-aliasing-taa",
        "content": "This effect is enabled by default, this is not an artistic effect but a quality one.\nWhen the camera doesn't move, Nomad re-uses the previous frames to improve the quality of the overall image.\nTAA tries to do the same thing when the camera is moving, by reprojecting the previous frames onto the new view point.\nMost of the time it should be ok, but it can introduce some artifacts when the reprojection is a bit off (ghosting artifacts).\nThe effects that benefits the most from the accumulation are Ambient Occlusion, Reflection and Ambient Occlusion, Depth of Field and Bloom."
      }
    ]
  },
  {
    "path": "/pressure.html",
    "title": "Pressure",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Pressure",
        "slug": "pressure",
        "content": "Allow unrecognized pressure This menu lets you customize the behavior of the tablet pencil, such as the Apple Pencil or Samsung S Pen.\nBy default, the pressure of the pencil will impact the Radius and the Intensity of the current brush.\nYou can customize the falloff of this impact."
      },
      {
        "header": "Allow unrecognized pressure",
        "slug": "allow-unrecognized-pressure",
        "content": "For some Android device, finger inputs will return an arbitrary fixed pressure value.\nIt can be annoying if you plan on sculpting with your finger, especially if the value returned is small.\nIn that case, make sure to disable this option.\nBy default, this option is enabled on iOS, but disabled for Android."
      }
    ]
  },
  {
    "path": "/scene.html",
    "title": "Scene",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Scene",
        "slug": "scene",
        "content": "ListMultiselectionSimple MergeVoxel MergeSeparateSubtractionIntersectionPrimitivePrimitive ConfigUV SphereTriplanar This menu lets you manage the different objects that you might have in Nomad."
      },
      {
        "header": "List",
        "slug": "list",
        "content": "Action\nIcon\nDescription Visible Hide the object (or use the object as subtractive mesh by the Voxel Merger) Edit Name Edit the object Delete Delete the object Move Move the object in the list, it doesn't have any effect on the viewport Duplicate Duplicate the object"
      },
      {
        "header": "Multiselection",
        "slug": "multiselection",
        "content": "You can select multiple object, it can help you achieve two things: using the gizmo tool to move several objects at once\nmerging the objects thanks to the Simple Merge or Voxel Merge feature You can do that by using the Multiselection checkbox, and then by clicking on the object in the list.\nQuick multiselection\nYou can also multiselect in the viewport by holding the Smooth shortcut and tapping on another mesh.\nYou can deselect an object by tapping on it again (only if your selection has more than one object). Limited gizmo feature\nWhen using multiselection, the gizmo tool will always ignore masking.\nAlso, X/Y/Z scaling is removed.\nThe reason is that multiselection only allows whole mesh transformation, not per vertex transformation.\nThis might be improved in the future."
      },
      {
        "header": "Simple Merge",
        "slug": "simple-merge",
        "content": "This option will simply make one single object entry from multiple selected objects.\nYou can see an example in video in the Separate section."
      },
      {
        "header": "Voxel Merge",
        "slug": "voxel-merge",
        "content": "Voxel Merge works differently than Simple merging in that the topology is completely recomputed.\nMore importantly, there won't be any separation between the two meshes, so the potential intersections between the two meshes will be gone.\nWhen using the voxel merger you can change the resolution of the voxel by going in the Topology menu."
      },
      {
        "header": "Separate",
        "slug": "separate",
        "content": "If you have a single object based on several disconnected parts, you can split this object into several objects.\nThis can be seen as the opposite of Simple Merging."
      },
      {
        "header": "Subtraction",
        "slug": "subtraction",
        "content": "You can use the remesher to perform boolean operations, for example by subtracting one mesh from another,\nThe objects that are hidden will be subtracted, they will appear with a cross hatching look."
      },
      {
        "header": "Intersection",
        "slug": "intersection",
        "content": "If you use the voxel remesher with all the objects hidden, the boolean intersection will be computed."
      },
      {
        "header": "Primitive",
        "slug": "primitive",
        "content": "If you need to add a new object in your scene, you can add primitive.\nYou can configure the primitive with some parameters.\nHowever, you need to Validate the primitive in order to sculpt or paint it.\nWhen you Validate a primitive you won't be able to edit the primitives settings anymore. Primitive\nIcon\nDescription Box It's a simple cube, you can control the division in X, Y and Z Sphere For convenience this is named a Sphere but it is actually a subdivided box, with the Project on sphere forced Cylinder You can add a center hole for the cylinder primitive, for example to make an hollow pipe Torus The torus can be a good starting point for rings Cone - Icosahedron - UV-sphere You should probably not use this primitive, see Warning below Plane It's a simple plane, note that this is the only primitive that is not closed Triplanar A special primitive, see Triplanar TIP\nIf you wonder what is the base mesh when you launch Nomad: this is a subdivided box as well.\nHowever the base mesh in Nomad doesn't use Project on sphere, meaning it is not perfectly round."
      },
      {
        "header": "Primitive Config",
        "slug": "primitive-config",
        "content": "Here are a some options that you can find in some primitive: Flat subdivision Preserve hard-edges by not smoothing the mesh when subdividing\nOverall subdivision The number of subdivision\nConstant density It means that the topology of the primitive will be kept uniform when you play with the settings\nProject on sphere To get a perfect geometrical sphere but keeping the underlying primitive topology"
      },
      {
        "header": "UV Sphere",
        "slug": "uv-sphere",
        "content": "WARNING\nYou should probably never use it, the topology of the UV Sphere is not well suited for sculpting, especially on the poles.\nPlease prefer the Sphere, Box or Icosahedron primitive, along with the Project on sphere option.\nNote that the topology can be acceptable for sculpting if you use a very low value for the Division sliders.\nYou can then use the Overall Subdivision slider to raise the number of polygons."
      },
      {
        "header": "Triplanar",
        "slug": "triplanar",
        "content": "This primitive is special in that you should use the Masking tool on it to shape the geometry. TIP\nDouble-tap on a plane and the camera will focus on this particular plane.\nThis won't work if you rotate the primitive with the gizmo though. Triplanar is using the mask information from 3 planes to fill a voxel grid that is then polygonized (thanks to the Voxel Remesher).\nEach plane has its own symmetry plane.\nWARNING\nEach time you update the size of the Triplanar primitive, the quality of the mask painting will degrade.\nFor now there is no option to 'lock' the painting on a single plane, but maybe it will come in the future.\nYou can use the Connected Topology to help a little bit, in that if your cursor lies precisely on one plane it won't impact the other planes."
      }
    ]
  },
  {
    "path": "/settings.html",
    "title": "Settings",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Settings",
        "slug": "settings",
        "content": "WireframeSmooth ShadingGridRender ResolutionScene PaintingTwo sidedOutline SelectionDarken UnselectedMax Detail RangeExperimentalPartial DrawingKeep Topology At ImportLoad project GUI settings Most of the options in this section concern the viewport display."
      },
      {
        "header": "Wireframe",
        "slug": "wireframe",
        "content": "Display the topology of the scene.\nNote that showing the Wireframe will lower the performance."
      },
      {
        "header": "Smooth Shading",
        "slug": "smooth-shading",
        "content": "If Smooth Shading is disabled, the faces are shaded independently, so you can see the underlying topology.\nThis is the reason why disabling it is preferred during the sculpting stage.\nHowever for rendering purposes, sometimes you might want to enable it.\nDisabling Smooth Shading improves the performance a little bit."
      },
      {
        "header": "Grid",
        "slug": "grid",
        "content": "Display a planar grid so that you can get a better understanding of how your scene is positioned on the scene."
      },
      {
        "header": "Render Resolution",
        "slug": "render-resolution",
        "content": "You can change the render resolution, it can be useful if you want to increase the performance in case the rendering is the bottleneck."
      },
      {
        "header": "Scene Painting",
        "slug": "scene-painting",
        "content": "You can check this option if you want to ignore the object's painting.\nThe default paint used is a white non-metallic material, at 25% roughness."
      },
      {
        "header": "Two sided",
        "slug": "two-sided",
        "content": "All faces point in a certain direction.\nFaces that are considered backface are the ones that point \"away\" from the camera viewpoint.\nFor example the startup simple sphere will have its faces point towards the outside.\nIf you move the camera inside the sphere you'll then see the backface of these faces.\nMost of the time you shouldn't see the backface part of faces, so coloring them can help you detect potential issues or incorrect topology.\nDisabling two sided rendering can improve rendering performance a bit."
      },
      {
        "header": "Outline Selection",
        "slug": "outline-selection",
        "content": "You can display an outline on your current selection.\nThis is useful to get visual feedback on your current selected meshes in case Darken Unselected is disabled.\nFrom a performance point of view, using Darken Unselected is much better than using the outline solution."
      },
      {
        "header": "Darken Unselected",
        "slug": "darken-unselected",
        "content": "The objects that are not selected will be darkened so that the current selection can stand out."
      },
      {
        "header": "Max Detail Range",
        "slug": "max-detail-range",
        "content": "This slider can let you increase the maximum value of 2 details sliders: the one that drives the Voxel Remesher and the one for Dynamic Topology."
      },
      {
        "header": "Experimental",
        "slug": "experimental",
        "content": ""
      },
      {
        "header": "Partial Drawing",
        "slug": "partial-drawing",
        "content": "If you want to sculpt a very small part of a big mesh or big scene, it can increase performance by a lot!\nHowever you can get noticeable artifacts"
      },
      {
        "header": "Keep Topology At Import",
        "slug": "keep-topology-at-import",
        "content": "When you import or load a mesh, a quick optimization will occur.\nIt can delete unused"
      },
      {
        "header": "Load project GUI settings",
        "slug": "load-project-gui-settings",
        "content": "When you save in .glTF format, all the settings are saved in the file as well.\nHowever when you load a project, some settings are ignored, typically the that concerns the Interface, but also some other \"general purpose global settings\"."
      }
    ]
  },
  {
    "path": "/stroke.html",
    "title": "Stroke",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Stroke",
        "slug": "stroke",
        "content": "AlphaInvert valueAlpha scaleFalloffStroke TypeDot settingsAdvancedAccumulate strokeConnected topologyFront-facing vertex onlyAllow Dynamic Topology You can customize the stroke behavior of most tool brushes.\nThe settings should be fairly similar to the ones present in 2d painting applications.\nHowever some options are specific to the sculpting and 3d field."
      },
      {
        "header": "Alpha",
        "slug": "alpha",
        "content": "The Alpha is a texture that will modulate your brush behavior.\nIt's a grayscale image, where black pixels mean no deformation and white pixels full deformation.\nFor now the texture is never resized, so beware that huge image can slow down the performance a bit."
      },
      {
        "header": "Invert value",
        "slug": "invert-value",
        "content": "Use this option if the pattern is upside-down when you sculpt"
      },
      {
        "header": "Alpha scale",
        "slug": "alpha-scale",
        "content": "Use this option to scale the alpha pattern.\nAt maximum value, the brush radius (circle) is inside the alpha square (left image).\nAt minimum value, the alpha square is inside the tool circle radius (right image)."
      },
      {
        "header": "Falloff",
        "slug": "falloff",
        "content": "This is similar to the Alpha, except that you drive the intensity with a single curve.\nwhen the curve is on the top, this is full deformation, when it's at the bottom the brush has no effect.\nSymmetrical curve\nThe curve is always symmetric, but if you go in the Interface menu, you can choose to only display the left part of the curve.\nIt doesn't change the behavior of the falloff, this is mostly for convenience."
      },
      {
        "header": "Stroke Type",
        "slug": "stroke-type",
        "content": "By default, most brushes are using the Dot stroke type.\nDot means that several instances of the brush will happen at regular intervals when you sculpt.\nYou can customize the Dot behavior. Menu\nDescription Dot\nDefault stroke type Grab - dynamic radius\nStamp-style where you change the radius by dragging Grab - dynamic intensity\nStamp-style where only the intensity can be modulated TIP\nYou can get interesting result by using Grab - dynamic radius along with the Move or Drag tools."
      },
      {
        "header": "Dot settings",
        "slug": "dot-settings",
        "content": ""
      },
      {
        "header": "Adjust spacing intensity",
        "slug": "adjust-spacing-intensity",
        "content": "Adjust the brush intensity to ensure consistent deformation depending on the stroke spacing."
      },
      {
        "header": "Stroke spacing",
        "slug": "stroke-spacing",
        "content": "Spacing between each stroke, relative to the tool radius.\nLower value will allow smoother stroke but overall performance will decrease."
      },
      {
        "header": "Dragging distance",
        "slug": "dragging-distance",
        "content": "The stroke will lag behind the pointer position according to a certain distance.\nThis can be useful if you want to follow precisely a path in a smooth way."
      },
      {
        "header": "Stroke smoothing",
        "slug": "stroke-smoothing",
        "content": "Average multiple pointer position to get a smoother stroke.\nWith high values, the stroke will lag behind the pointer but will eventually catch up.\nIt can also be useful for drawing smooth lines."
      },
      {
        "header": "",
        "slug": "",
        "content": "Snap the stroke if the pointer lies close to the last recorded stroke.\nThis is useful if you want to draw a long continuous line in several strokes."
      },
      {
        "header": "Advanced",
        "slug": "advanced",
        "content": ""
      },
      {
        "header": "Accumulate stroke",
        "slug": "accumulate-stroke",
        "content": "If this option is enabled, there is no limit to how much matter you can add/remove per stroke."
      },
      {
        "header": "Connected topology",
        "slug": "connected-topology",
        "content": "This option will only sculpt the vertices that are linked to the picked surface.\nThis is typically used for the Move tool, for example if you want to exclusively move a part that self-intersects with another part."
      },
      {
        "header": "Front-facing vertex only",
        "slug": "front-facing-vertex-only",
        "content": "This option will ignore back facing vertices.\nIt can be useful if you want to paint part of a thin geometry without impacting the other side.\nIt also works for sculpting but you might experience some artifacts."
      },
      {
        "header": "Allow Dynamic Topology",
        "slug": "allow-dynamic-topology",
        "content": "This option is only available if your mesh is in Dynamic Topology mode.\nYou can disable or enable the refinement for a specific tool."
      }
    ]
  },
  {
    "path": "/symmetry.html",
    "title": "Symmetry",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Symmetry",
        "slug": "symmetry",
        "content": "MirroringWorld vs LocalEditing the symmetry plane You can use symmetry to mirror sculpting operations from one side to the other.\nThe option to enable/disable the symmetry can also be found on the left quick panel (\"Sym\").\nNote that this is a global option, so the state will carry over the different tools.\nThe only exception are the transforms tool (Move, Rotate, Scale and Gizmo) which have their own symmetry state."
      },
      {
        "header": "Mirroring",
        "slug": "mirroring",
        "content": "Because of technical reasons, some brushes will have imperfect symmetry behavior.\nIn that case you can use the Mirror button to apply back the symmetry from one side to the other.\nThis operation only succeeds if the algorithm detects that the mesh is symmetrical.\nIn case the detection fails, you will be asked if you want to force the mirroring.\nThe main difference is that forcing the mirroring will change the topology, thus you might lose the Multiresolution."
      },
      {
        "header": "World vs Local",
        "slug": "world-vs-local",
        "content": "By default the symmetry is in World space, meaning that the symmetry plane is fixed, even if you translate or rotate the plane.\nYou can see in the video below the usage of World/Local space and the behavior of the Mirror feature."
      },
      {
        "header": "Editing the symmetry plane",
        "slug": "editing-the-symmetry-plane",
        "content": "You should probably never use these options but you can reset the symmetry plane origin and orientation, in case you moved them.\nNote that the behavior of these options will change depending on what space (Local/World) you are in.\nSo if it doesn't work as you would expect, make sure to check if you are in the correct space."
      }
    ]
  },
  {
    "path": "/tools.html",
    "title": "Tools",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Tools",
        "slug": "tools",
        "content": "Tables\nIcon Clay Brush Flatten Inflate Layer Crease Pinch Nudge Stamp Delete Layer Smooth Mask Selector Mask Drag Move Paint Smudge Trim Split Project Gizmo Transform Insert Tube Lath View"
      },
      {
        "header": "Clay",
        "slug": "clay",
        "content": "The Clay tool is useful for building up your sculpture."
      },
      {
        "header": "Brush",
        "slug": "brush",
        "content": "The standard brush."
      },
      {
        "header": "Flatten",
        "slug": "flatten",
        "content": "Flatten the area by projecting the points onto the average plane."
      },
      {
        "header": "Inflate",
        "slug": "inflate",
        "content": "Move the vertices along their own normals."
      },
      {
        "header": "Layer",
        "slug": "layer",
        "content": "Sculpt by limiting the maximum height displacement, this tool is more useful when a layer is active."
      },
      {
        "header": "Crease",
        "slug": "crease",
        "content": "Crease tools can be useful to sculpt small cuts or dents."
      },
      {
        "header": "Pinch",
        "slug": "pinch",
        "content": "This tool can be used to sharpen edges."
      },
      {
        "header": "Nudge",
        "slug": "nudge",
        "content": "Move points along the stroke."
      },
      {
        "header": "Stamp",
        "slug": "stamp",
        "content": "This is simply the Brush tool with a stroke type set to Grab - dynamic radius."
      },
      {
        "header": "Delete Layer",
        "slug": "delete-layer",
        "content": "This tool can reset layers locally, you need an active layer otherwise nothing will happen."
      },
      {
        "header": "Smooth",
        "slug": "smooth",
        "content": "Smooth the area by average the point positions. This tool is highly dependent on the polygon density.\nSo if you have many polygons, the smoothing will be less effective.\nThe alternate mode is the Relax mode, which only smooths the wireframe but tries to retain the geometric details."
      },
      {
        "header": "Mask",
        "slug": "mask",
        "content": "This tool lets you mask points.\nMasked vertices can't be sculpted or painted afterwards, this is a way to \"protect\" some area.\nIf you go in the tool settings, you can also perform other operations on the mask. Action\nDescription Sharpen\nEdit the object Blur\nBlur the mask Invert\nInvert the mask Clear\nClear the mask"
      },
      {
        "header": "Extraction",
        "slug": "extraction",
        "content": "You can also create other objects by extracting the mask.\nWhen you use one of these operations, you can specify how to handle the holes. Action\nDescription None\nSimply extract the part and let the extracted part opened Blur\nHole is filled and smoothed. Do not use this option for flat surface Shell\nClose the extracted shape by using the thickness value TIP\nWhen you are using an extraction method that makes use of the thickness, the mask value will also impact the thickness.\nThis can be useful if you have custom made Alphas and you are using the Grab - dynamic radius stroke type."
      },
      {
        "header": "Quick gesture",
        "slug": "quick-gesture",
        "content": "You can perform zbrush-style gestures while holding the quick masking button: Action\nGesture (hold lower-left shortcut) Invert\nTap on the background Clear\nDrag on the background Blur\nTap on masked area Sharpen\nTap on unmasked area"
      },
      {
        "header": "Selector Mask",
        "slug": "selector-mask",
        "content": "This tool is mostly similar to the Masking tool, the main difference is that you don't use stroke to paint mask, but instead use the shape selector."
      },
      {
        "header": "Drag",
        "slug": "drag",
        "content": ""
      },
      {
        "header": "Move",
        "slug": "move",
        "content": ""
      },
      {
        "header": "Paint",
        "slug": "paint",
        "content": "To learn more about material you can visit the Paint & Material section."
      },
      {
        "header": "Smudge",
        "slug": "smudge",
        "content": "The smudge tool is only active on painting."
      },
      {
        "header": "Trim",
        "slug": "trim",
        "content": "The Trim tool works by removing a chunk of your mesh and then filling the hole."
      },
      {
        "header": "Split",
        "slug": "split",
        "content": "Similar to the Trim tool, except that it produces two different objects instead of one."
      },
      {
        "header": "Project",
        "slug": "project",
        "content": "The Project tool will project the points on a shape that you draw, but unlike the Trim tool, the topology is kept intact."
      },
      {
        "header": "Gizmo",
        "slug": "gizmo",
        "content": "This tool lets you translate, rotate and scale your mesh with a single tool."
      },
      {
        "header": "Method",
        "slug": "method",
        "content": "Method\nDescription Auto\nLet Nomad choose between Vertex or Object mode. Typically, object is preferred unless symmetry is enabled or if there is masking on the mesh Vertex\nVertices are transformed individually. Symmetry and mask are taken into account. For primitives that are not validated, Object mode is forced Object\nThe object is transformed as a whole. Symmetry and mask are ignored. If you use non-uniform scaling, Vertex mode will be forced"
      },
      {
        "header": "Action",
        "slug": "action",
        "content": "Action\nDescription Move origin\nMove the mesh to the world origin, vertices are not modified Reset\nReset the mesh transform to identity, vertices are not modified Bake\nApply the matrix transform to the vertices and then reset the matrix, nothing is changing visually WARNING\nThe Gizmo, Translate, Rotate and Scale are using their own symmetry checkbox!\nAnd by default, the symmetry is turned off. On the left you can move the gizmo pivot, you can see the video below in action.\nThis is especially useful for the rotation, as it doesn't change anything for translation."
      },
      {
        "header": "Transform",
        "slug": "transform",
        "content": "Translate, rotate and scale the model by using two fingers.\nThe interaction is more or less similar to the camera movement. Panning will translate the model\nPinching will scale the model\nTwisting will rotate the model You can disable each of these movements separately, for example if you disable Scaling you will only be able to translate and rotate at the same time."
      },
      {
        "header": "Tube",
        "slug": "tube",
        "content": "Create a tube by drawing a curve first.\nYou can then edit its radius."
      },
      {
        "header": "Lathe",
        "slug": "lathe",
        "content": "Create a revolution surface by drawing a curve first."
      },
      {
        "header": "Insert",
        "slug": "insert",
        "content": "Insert an object in the scene.\nWhen the insertion takes place, Nomad switches automatically to the Transform tool for quick adjustment and then switches back the Insert tool when you release your fingers.\nIf an object is using a custom gizmo pivot, then it will be used as an anchor point for the insertion, see video below."
      },
      {
        "header": "View",
        "slug": "view",
        "content": "This \"tool\" does nothing in particular, this is simply a way to view the model without modifying your scene."
      }
    ]
  },
  {
    "path": "/topology.html",
    "title": "Topology",
    "pathLocale": "/",
    "contents": [
      {
        "header": "Topology",
        "slug": "topology",
        "content": "Voxel RemesherBooleanMultiresolutionSubdivisionMultiresolution WorkflowDynamic TopologyBrushGlobalSettingsDecimateUV unwrapOther Nomad is a polygonal software, it uses triangles and quads to handle the geometry.\nBy topology, we refer to both the number of faces but also the way points (vertices) are connected.\nIt's important to keep track of the topology, especially if you want to sculpt or paint fine details.\nHow to keep track of your topology?\nYou can display the Wireframe or simply disable Smooth Shading. For now there is three main way to edit the topology of one object: Method\nDescription Voxel Remesher\nRecompute a new topology with uniform density Multiresolution\nGo back and forth between multiple resolution of your objects Dynamic Topology\nAdd/Remove faces locally in real-time when sculpting or painting Decimation\nRemove faces by retains as much details as possible"
      },
      {
        "header": "Voxel Remesher",
        "slug": "voxel-remesher",
        "content": "When using the Voxel Remesher, the entire mesh will force the topology to have an uniform resolution, meaning all the polygons have more or less the same size.\nThis is very useful when you don't want to think about topology and simply do free-form sculpting.\nA typical sculpting workflow can start by using the Voxel Remesher to block-out a rough shape with a low resolution.\nSimply hit the Remesh button once in a while when you are stretching the mesh too much to avoid too much distortion. Voxel?\nAs stated above, Nomad is a polygonal software, but the Voxel Remesher is one exception where another approach is used (temporarily) to perform the remeshing.\nOne big difference is that the voxel approach won't accept self intersection, so these will be resolved.\nAlso it doesn't support mesh with holes in it.\nBy holes, we don't mean the genus hole (hole of a donus), but instead mesh that are not watertight/closed.\nTypically, what it means is that before applying the remeshing, every holes will be filled, similarly to the Trim tool or Hole filling feature."
      },
      {
        "header": "Boolean",
        "slug": "boolean",
        "content": "Because we are using voxel for the remeshing, it also means you can easily merge two objects into one or subtract one from another.\nYou can learn more in the voxel booleans section."
      },
      {
        "header": "Multiresolution",
        "slug": "multiresolution",
        "content": "The multiresolution feature is useful for mostly two scenario: The smooth subdivision algorithm to increase the polycount of your object\nhandle multiple level of resolution so that you can alternate between small and large scale edits"
      },
      {
        "header": "Subdivision",
        "slug": "subdivision",
        "content": "The Subdivide button will increase the number of polygons by 4, so make sure to keep an eye on the polycount as it can increase very quickly!\nOne important aspect of Subdivision Surface is that they will converge to a Smooth Surface.\nTo understand how it works, you can try the Subdivide button on an object with only a few polygons.\nYou can disable this Smooth behavior by checking the Linear option."
      },
      {
        "header": "Multiresolution Workflow",
        "slug": "multiresolution-workflow",
        "content": "One important aspect of the multiresolution is that you can go back to a lower resolution, make changes on your object and then go back to the highest resolution without losing the high resolution details.\nAll the high resolution details will be projected automatically.\nWARNING\nIf you are using a tool that alters the topology of your object, you will lose all the other resolutions of your object!\nYou should always get a warning in case it should happen, for example when you are using: the Voxel Remesher\nthe Dynamic Topology\nthe Trim tool\nthe Split tool"
      },
      {
        "header": "Dynamic Topology",
        "slug": "dynamic-topology",
        "content": ""
      },
      {
        "header": "Brush",
        "slug": "brush",
        "content": "When you enable Dynamic Topology, most sculpting brushes will have the ability to update the topology under your brushes in real-time.\nSee the video below in action."
      },
      {
        "header": "Level of detail",
        "slug": "level-of-detail",
        "content": "Method\nDescription Zoom Level\nThe level of detail will depend of the camera position Brush Size\nThe level of detail will depend of the brush size The option Use pressure radius is only relevant if Brush Size is activated.\nWhen it is activated, the level of detail will always reflect the brush size, even when the brush size is affected by pencil pressure."
      },
      {
        "header": "Quality/Performance",
        "slug": "quality-performance",
        "content": "Method\nDescription Speed\nFavor performance Quality\nFavor quality When you favor Quality, the 2 main differences are: refinement is applied before sculpting, so you will get less interpolating artifact when painting or sculpting very small details refinement is running until it converges to the correct level of detail, in contrast to an incremental behavior.\nThat way, if you sculpt very small details or do quick strokes, the topology will always be refined as expected"
      },
      {
        "header": "Global",
        "slug": "global",
        "content": "You can remesh the whole mesh by using the same algorithm.\nUsually you should prefer the Voxel Remesher for full remeshing.\nHowever one advantage over the voxels is that the masked area will be protected, so you can have a better control on where to put more or less density."
      },
      {
        "header": "Settings",
        "slug": "settings",
        "content": "Whether you are using Dynamic Topology on your Brush or Globally, you can choose in which mode it operates: Method\nDescription Uniformisation\nIt can add and remove faces, this is the mode used in the video above Subdivision\nAdd new faces only, it cannot remove faces Decimation\nRemove faces only, it cannot add new faces"
      },
      {
        "header": "Decimate",
        "slug": "decimate",
        "content": "Reduce the number of polygons by trying to keep as many details as possible.\nThis feature can be useful if you want to export for 3d printing.\nHowever you should probably not use it if you want to continue sculpting on it, as it can produce uneven triangles.\nNote that the masked area won't be decimated."
      },
      {
        "header": "UV unwrap",
        "slug": "uv-unwrap",
        "content": "Compute texture coordinates (UVs) for the current mesh.\nAt the moment Nomad can't make use of these UVs, but you can export the mesh directly to Procreate or any texturing tool.\nWARNING\nComputing UVs can take some time, it is best to have a mesh with fewer than 100k vertices."
      },
      {
        "header": "Other",
        "slug": "other",
        "content": ""
      },
      {
        "header": "Hole Filling",
        "slug": "hole-filling",
        "content": "Most of the time, your object will probably be watertight, meaning the mesh is 'closed'.\nHowever if you import You can fill the holes in your mesh If your object has holes, you can fill them.\nNote that it only works on 'naive' holes, as such, it cannot 'weld' two separate borders. TIP\nWhen you run the Voxel remesher, all the holes are automatically closed, whether you are using it on 1 or multiple meshes.ul"
      },
      {
        "header": "Triplanar",
        "slug": "triplanar",
        "content": "Converts the mesh into a triplanar primitive.\nYou might lose lot of details in the process."
      }
    ]
  },
  {
    "path": "/404.html",
    "title": "",
    "pathLocale": "/",
    "contents": []
  }
]

export const UPD_NAME = 'update-vuepress2-plugin-full-text-search-search-index'
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__[UPD_NAME]) {
    __VUE_HMR_RUNTIME__[UPD_NAME](searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    if (__VUE_HMR_RUNTIME__[UPD_NAME]) {
      __VUE_HMR_RUNTIME__[UPD_NAME](searchIndex)
    }
  })
}
