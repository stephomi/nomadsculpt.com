#!/bin/bash

# ffmpeg -i input.mp4 -vcodec libx264 -crf 28 output.mp4
# ffmpeg -i input.mov -filter:v scale="1440:trunc(ow/a/2)*2" output.mp4
# ffmpeg -i output.mp4 -filter:v scale=360:-1 -vframes 1 -ss 5 output.jpg

# -n never overwrite
# -y always overwrite
for filename in docs/videos/*.mp4; do
    case "$filename" in
    *stroke_dot.mp4) sec=2 ;;
    *gettingstarted_07.mp4) sec=2 ;;
    *gettingstarted_08.mp4) sec=2 ;;
    *) sec=5 ;;
    esac
    ffmpeg -i $filename -filter:v scale=360:-1 -vframes 1 -ss $sec "${filename%.*}.webp" -n
done
