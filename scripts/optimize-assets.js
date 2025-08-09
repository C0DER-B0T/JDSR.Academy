const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting asset optimization...');

// Optimize images
async function optimizeImages() {
  const imagesDir = path.join(__dirname, '../public/images');
  
  if (!fs.existsSync(imagesDir)) {
    console.log('📁 Creating images directory...');
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  const imageFiles = fs.readdirSync(imagesDir).filter(file => 
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  console.log(`🖼️  Found ${imageFiles.length} images to optimize`);

  for (const file of imageFiles) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`✅ Optimized ${file} -> ${path.basename(outputPath)}`);
    } catch (error) {
      console.error(`❌ Failed to optimize ${file}:`, error.message);
    }
  }
}

// Optimize SVGs
function optimizeSVGs() {
  try {
    console.log('🎨 Optimizing SVGs...');
    execSync('npx svgo public/**/*.svg --multipass', { stdio: 'inherit' });
    console.log('✅ SVGs optimized');
  } catch (error) {
    console.log('⚠️  SVG optimization skipped (svgo not available)');
  }
}

// Generate PWA icons
async function generatePWAIcons() {
  const iconsDir = path.join(__dirname, '../public/icons');
  
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
  const sourceIcon = path.join(__dirname, '../public/logo.png');

  if (!fs.existsSync(sourceIcon)) {
    console.log('⚠️  Source logo not found, skipping PWA icon generation');
    return;
  }

  console.log('📱 Generating PWA icons...');

  for (const size of sizes) {
    try {
      await sharp(sourceIcon)
        .resize(size, size)
        .png()
        .toFile(path.join(iconsDir, `icon-${size}x${size}.png`));
      
      console.log(`✅ Generated ${size}x${size} icon`);
    } catch (error) {
      console.error(`❌ Failed to generate ${size}x${size} icon:`, error.message);
    }
  }
}

// Main optimization function
async function optimizeAssets() {
  try {
    await optimizeImages();
    optimizeSVGs();
    await generatePWAIcons();
    
    console.log('🎉 Asset optimization completed!');
  } catch (error) {
    console.error('❌ Asset optimization failed:', error);
    process.exit(1);
  }
}

// Run optimization
optimizeAssets();
