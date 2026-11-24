# Gallery photos

To add a photo: drop the image file (jpg, png or webp, any size) in this folder, then add an entry to `gallery.json`:

    "my-photo.jpg": { "alt": "What the photo shows", "caption": "Short caption", "credit": "Photo: Your name" }

For a photo that is not your own, also add `"license"` (for example "CC BY 4.0") and `"source"` (the page URL). The site resizes photos automatically and loads them lazily. Photos appear in the order they are listed in `gallery.json`; a file with no entry is ignored.
