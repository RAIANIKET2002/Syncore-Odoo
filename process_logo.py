from PIL import Image

def process_logo():
    # Load image
    img = Image.open('public/logo.jpg').convert('RGBA')
    data = img.getdata()
    
    transparent_data = []
    dark_mode_data = []
    
    # White background threshold
    threshold = 240
    
    # Process pixels
    for item in data:
        r, g, b, a = item
        
        # If it's close to white, make transparent
        if r > threshold and g > threshold and b > threshold:
            transparent_data.append((255, 255, 255, 0))
            dark_mode_data.append((255, 255, 255, 0))
        else:
            transparent_data.append(item)
            
            # For dark mode, if the pixel is dark blue (low red/green, somewhat blue)
            # We want to change the dark blue "C" to white, but keep the gold "P"
            # The "P" is gold (high red/green, low blue) e.g. R=212, G=164, B=55
            # The "C" is dark blue e.g. R=7, G=29, B=73
            
            # If it's a dark pixel (representing the navy 'C'), make it white
            # We check if red and green are relatively low
            if r < 100 and g < 120 and b < 150:
                # Turn the dark blue into white
                # But keep the anti-aliasing by mapping brightness to alpha or keeping it white with original alpha
                dark_mode_data.append((255, 255, 255, a))
            else:
                dark_mode_data.append(item)
                
    # Save standard transparent logo
    img_transparent = Image.new('RGBA', img.size)
    img_transparent.putdata(transparent_data)
    img_transparent.save('public/logo.png', 'PNG')
    
    # Save dark mode transparent logo
    img_dark = Image.new('RGBA', img.size)
    img_dark.putdata(dark_mode_data)
    img_dark.save('public/logo-dark.png', 'PNG')

if __name__ == '__main__':
    process_logo()
