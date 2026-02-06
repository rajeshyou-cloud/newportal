# Exporting `logo-2` to PNG and favicon

These are commands you can run locally to generate PNG and ICO files from the SVGs added (`logo-2.svg`, `logo-2-mono-dark.svg`, `logo-2-mono-light.svg`, `logo-2-favicon.svg`). They assume you have either ImageMagick (`magick`/`convert`) or `rsvg-convert` installed.

Windows (ImageMagick):

```powershell
# generate PNGs
magick convert public/logo-2.svg -background none -resize 256x256 public/logo-2-256.png
magick convert public/logo-2.svg -background none -resize 128x128 public/logo-2-128.png
magick convert public/logo-2.svg -background none -resize 48x48 public/logo-2-48.png
magick convert public/logo-2.svg -background none -resize 32x32 public/logo-2-32.png
magick convert public/logo-2.svg -background none -resize 16x16 public/logo-2-16.png

# create multi-size favicon.ico (ImageMagick supports multiple sizes)
magick convert public/logo-2-16.png public/logo-2-32.png public/logo-2-48.png public/logo-2-128.png public/favicon.ico
```

Linux / macOS (rsvg + ImageMagick alternative):

```bash
# using rsvg-convert
rsvg-convert -w 256 -h 256 public/logo-2.svg -o public/logo-2-256.png
rsvg-convert -w 128 -h 128 public/logo-2.svg -o public/logo-2-128.png
rsvg-convert -w 48 -h 48 public/logo-2.svg -o public/logo-2-48.png
rsvg-convert -w 32 -h 32 public/logo-2.svg -o public/logo-2-32.png
rsvg-convert -w 16 -h 16 public/logo-2.svg -o public/logo-2-16.png

# create favicon.ico with ImageMagick
convert public/logo-2-16.png public/logo-2-32.png public/logo-2-48.png public/logo-2-128.png public/favicon.ico
```

If you want, I can attempt these conversions here — say `go ahead` and I will try to run them. If ImageMagick is not available, I'll report back and provide the generated SVGs for you to convert locally.
