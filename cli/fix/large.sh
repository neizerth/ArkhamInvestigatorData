#!/bin/sh

find ./dist/images/jpg/full -type f \( -iname "*.jpg" \) | while read file; do
    dimensions=$(identify -format "%w %h" "$file" 2>/dev/null)
    if [ -n "$dimensions" ]; then
        width=$(echo "$dimensions" | awk '{print $1}')
        height=$(echo "$dimensions" | awk '{print $2}')
        if [ "$width" -gt 4000 ] || [ "$height" -gt 4000 ]; then
            echo "$file ($width x $height)"
        fi
    fi
done