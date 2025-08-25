#!/bin/bash

# ffmpeg -i background_overview.png -q:v 2 background_overview.jpg
red='\033[0;31m'
green='\033[0;32m'
off='\033[0m'

# for lossy
# for filename in docs/{images,icons}/*.{png, webp}; do
for filename in docs/{images,icons}/*.{png,webp,jpg}; do
    [ -e "$filename" ] || continue
    #  ------------------------------------------
    tmp_file=${filename}.tmp
    #  ------------------------------------------
    # ffmpeg -y -i "$filename" -q:v 2 "$tmp_file" </dev/null >/dev/null 2>&1
    # cwebp -q 99 -metadata icc "$filename" -o "$tmp_file" >/dev/null 2>&1
    cwebp -lossless -metadata icc "$filename" -o "$tmp_file" >/dev/null 2>&1
    #  ------------------------------------------
    prev_size=$(stat -f%z "$filename")
    new_size=$(stat -f%z "$tmp_file")
    #  ------------------------------------------
    new_file="${filename%.*}.webp"
    cmp_size=$((prev_size * 90 / 100))
    #  ------------------------------------------
    # keep tmp_file new_size < 90% previous size
    if [ $new_size -lt $cmp_size ]; then
        rm "$filename"
        mv "$tmp_file" "$new_file"
        echo "${green}replace file     : $filename $new_size < $cmp_size${off} ${off}"
    else
        rm "$tmp_file"
        echo "${red}keeping original : $filename $new_size >= $cmp_size${off}"
    fi
done
