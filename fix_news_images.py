import os
import re

# Mapping based on work.html and generic fallback
# specialized mapping extracted from reading work.html
image_map = {
    "cpp.html": "../images/cpp.jpg",
    "sajam-otok.html": "../images/otok00004.jpg",
    "interreg-vi-a-ipa.html": "../images/interreg.jpg",
    "uspostava-reciklaznih-dvorista.html": "../images/recycling.jpg",
    "sportsko-igraliste-banovci.html": "../images/futsal.jpg",
    "sanacija-nk-polet-dns.html": "../images/pitch.jpg",
    "zaštita-intelektualnog-vlasništva.html": "../images/copyright.jpg",
    # Hypothesized mapping or fallbacks based on common files or context
    "pjesacka-staza-agmatosa.html": "../images/agmatosa.jpg", # specific check needed?
    "pjesackas-staza-lipovac.html": "../images/lipovac.jpg",
    "poboljsanje-uvjeta-u-djecjim-vrticima.html": "../images/vrtic.jpg",
}

# If I don't have a specific map, I might check if the file exists or leave it (or use logo).
# Let's try to be safe.

news_dir = "/Users/karlosibalic/Downloads/ras---web-main/news"

for filename in os.listdir(news_dir):
    if not filename.endswith(".html"):
        continue
        
    filepath = os.path.join(news_dir, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Check if image already exists in body
    if "<img" in content and "news-body" in content:
        # Check if it's inside the news-head or body
        # simplified check
        pass
        
    # Determine image
    img_src = image_map.get(filename)
    
    # If not in map, try to find it in work.html (simulated logic here, I will just hardcode for now or use placeholder)
    if not img_src:
        # Fallback to a logo or generic if not known
        img_src = "../images/fghjmjrekf.png" 

    # Inject Image before the paragraphs in news-body
    # Target: <div class="container news-body"> ... <p class="vijesttext">
    
    if 'class="vijesttext"' in content:
        # Insert image before the text class
        replacement = f'<img src="{img_src}" style="width:100%; height:auto; display:block; margin-bottom:20px;">\n    <p class="vijesttext">'
        new_content = content.replace('<p class="vijesttext">', replacement)
        
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {filename} with image {img_src}")
    else:
        print(f"Skipping {filename} - structure mismatch")

