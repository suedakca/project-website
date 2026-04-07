#!/bin/bash
# Find all images in images/project subdirectories (interior, exterior, product)
# Skip existing thumb directories
find images/project -maxdepth 2 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | while read img; do
    dir=$(dirname "$img")
    base=$(basename "$img")
    
    # Check if the file is in a base project directory (not already in a thumb folder)
    if [[ "$dir" != *"thumb"* ]]; then
        # Ensure thumb directory exists
        mkdir -p "$dir/thumb"
        # Generate 400px thumbnail using sips
        # -Z maintains aspect ratio while setting the max dimension
        if [ ! -f "$dir/thumb/$base" ]; then
            sips -Z 400 "$img" --out "$dir/thumb/$base" > /dev/null 2>&1
        fi
    fi
done
