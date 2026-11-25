# Gallery photos

To add a photo: drop the image file (jpg, png or webp, any size) in this folder, then add an entry to `gallery.json`:

    "my-photo.jpg": { "alt": "What the photo shows", "caption": "Location" }

For a photo that is not your own, also add `"license"` (for example "CC BY 4.0") and `"source"` (the page URL). The site resizes photos automatically and loads them lazily. Photos appear in the order they are listed in `gallery.json`; a file with no entry is ignored.

## Caption rule (set by Todd)

Captions are a short place name only, taken from the photo's location EXIF/GPS data (read it from the original file, before resizing). A photo with no GPS gets an empty caption unless Todd supplies the location. Never publish raw coordinates, and strip EXIF from the web copies. Credit is not per photo: the page shows one "All photos by Todd" line at the bottom.

## GPS audit (25 Nov 2026)
Captions for 17 photos were checked against the GPS data in the originals and match. Seven captions have no GPS in the file they came from (Bom Jesus do Monte x2, Douro Valley x2, Cascais murals x3) and rest on Todd's word. See the audit report.
