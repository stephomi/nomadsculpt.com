#!/bin/bash

# ffmpeg -i background_overview.png -q:v 2 background_overview.jpg

for filename in *.png; do
    # Generate JPG filename
    jpgfile="${filename%.png}.jpg"

    # Convert PNG to JPG with quality 2 (high)
    ffmpeg -y -i "$filename" -q:v 2 "$jpgfile" </dev/null >/dev/null 2>&1

    # Get file sizes in bytes
    pngsize=$(stat -f%z "$filename") # macOS `stat`
    jpgsize=$(stat -f%z "$jpgfile")

    # Compare sizes
    if [ "$jpgsize" -lt $((pngsize * 30 / 100)) ]; then
        # JPG is smaller than 30% of original PNG → keep JPG, delete PNG
        rm "$filename"
        echo "Using jpg: $filename"
    else
        # JPG too large → remove JPG, keep PNG
        rm "$jpgfile"
    fi
done
