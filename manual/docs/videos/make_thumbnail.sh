#!/bin/bash

# ffmpeg -i input.mp4 -vcodec libx264 -crf 28 output.mp4
# ffmpeg -i input.mov -filter:v scale="1440:trunc(ow/a/2)*2" output.mp4
# ffmpeg -i output.mp4 -filter:v scale=360:-1 -vframes 1 -ss 5 output.jpg

ffmpeg -i stroke_dot.mp4 -filter:v scale=360:-1 -vframes 1 -ss 2 stroke_dot.jpg -n
ffmpeg -i gettingstarted_07.mp4 -filter:v scale=360:-1 -vframes 1 -ss 2 gettingstarted_07.jpg -n
ffmpeg -i gettingstarted_08.mp4 -filter:v scale=360:-1 -vframes 1 -ss 2 gettingstarted_08.jpg -n

# -n never overwrite
# -y always overwrite
for filename in *.mp4; do
    ffmpeg -i $filename -filter:v scale=360:-1 -vframes 1 -ss 5 $(basename "$filename" .mp4).jpg -n
done
