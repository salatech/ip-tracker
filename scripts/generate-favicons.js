const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

async function generateFavicons() {
  try {
    // Create the output directory if it doesn't exist
    const outputDir = path.join(__dirname, '../public/assets/images');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Load the SVG file
    const svgPath = path.join(__dirname, '../public/assets/images/favicon.svg');
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Convert SVG to PNG for different sizes
    const sizes = [16, 32, 48, 64, 128, 192, 512];
    
    for (const size of sizes) {
      const canvas = createCanvas(size, size);
      const ctx = canvas.getContext('2d');
      
      // Create a data URL from the SVG
      const svgDataUrl = `data:image/svg+xml;base64,${svgBuffer.toString('base64')}`;
      
      // Load the image
      const img = await loadImage(svgDataUrl);
      
      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0, size, size);
      
      // Save the PNG file
      const pngBuffer = canvas.toBuffer('image/png');
      const outputPath = path.join(outputDir, `favicon-${size}x${size}.png`);
      fs.writeFileSync(outputPath, pngBuffer);
      
      console.log(`Generated favicon-${size}x${size}.png`);
    }
    
    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons(); 