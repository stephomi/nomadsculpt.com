#!/bin/bash

# -n never overwrite
# -y always overwrite
for filename in *.mp4; do
    ffmpeg -i $filename -filter:v scale=360:-1 -vframes 1 -ss 5 $(basename "$filename" .mp4).jpg -n
done
