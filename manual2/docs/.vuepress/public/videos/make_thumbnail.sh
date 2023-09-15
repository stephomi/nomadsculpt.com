#!/bin/bash

# ffmpeg -i input.mov -filter:v scale="1440:trunc(ow/a/2)*2" output.mp4
# ffmpeg -i output.mp4 -filter:v scale=360:-1 -vframes 1 -ss 5 output.jpg

# -n never overwrite
# -y always overwrite
for filename in *.mp4; do
    ffmpeg -i $filename -filter:v scale=360:-1 -vframes 1 -ss 5 $(basename "$filename" .mp4).jpg -n
done
