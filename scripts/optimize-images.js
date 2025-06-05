const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');
const glob = require('glob');

// 配置
const QUALITY_SETTINGS = {
  jpeg: 80,
  webp: 85,
  avif: 75,
  png: 90
};

const SIZES = [
  { width: 400, suffix: '-sm' },
  { width: 800, suffix: '-md' },
  { width: 1200, suffix: '-lg' },
  { width: 1920, suffix: '-xl' }
];

/**
 * 优化单个图片文件
 */
async function optimizeImage(inputPath, outputDir) {
  try {
    const filename = path.basename(inputPath, path.extname(inputPath));
    const ext = path.extname(inputPath).toLowerCase();
    
    console.log(`🔄 优化图片: ${inputPath}`);
    
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // 创建输出目录
    await fs.mkdir(outputDir, { recursive: true });
    
    // 为每个尺寸生成优化版本
    for (const size of SIZES) {
      if (metadata.width <= size.width) continue;
      
      const baseOutput = path.join(outputDir, `${filename}${size.suffix}`);
      
      // 生成WebP版本（现代浏览器）
      await image
        .resize(size.width)
        .webp({ quality: QUALITY_SETTINGS.webp, effort: 6 })
        .toFile(`${baseOutput}.webp`);
      
      // 生成AVIF版本（最新浏览器）
      try {
        await image
          .resize(size.width)
          .avif({ quality: QUALITY_SETTINGS.avif, effort: 9 })
          .toFile(`${baseOutput}.avif`);
      } catch (e) {
        console.warn('⚠️ AVIF不支持，跳过:', e.message);
      }
      
      // 生成优化的原格式作为fallback
      if (ext === '.jpg' || ext === '.jpeg') {
        await image
          .resize(size.width)
          .jpeg({ quality: QUALITY_SETTINGS.jpeg, mozjpeg: true })
          .toFile(`${baseOutput}.jpg`);
      } else if (ext === '.png') {
        await image
          .resize(size.width)
          .png({ quality: QUALITY_SETTINGS.png, compressionLevel: 9 })
          .toFile(`${baseOutput}.png`);
      }
    }
    
    // 生成原尺寸的优化版本
    const originalOutput = path.join(outputDir, filename);
    
    // WebP版本
    await image
      .webp({ quality: QUALITY_SETTINGS.webp, effort: 6 })
      .toFile(`${originalOutput}.webp`);
    
    // AVIF版本
    try {
      await image
        .avif({ quality: QUALITY_SETTINGS.avif, effort: 9 })
        .toFile(`${originalOutput}.avif`);
    } catch (e) {
      console.warn('⚠️ AVIF不支持，跳过');
    }
    
    // 优化的原格式
    if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .jpeg({ quality: QUALITY_SETTINGS.jpeg, mozjpeg: true })
        .toFile(`${originalOutput}-optimized.jpg`);
    } else if (ext === '.png') {
      await image
        .png({ quality: QUALITY_SETTINGS.png, compressionLevel: 9 })
        .toFile(`${originalOutput}-optimized.png`);
    }
    
    console.log(`✅ 完成: ${filename}`);
    
  } catch (error) {
    console.error(`❌ 优化失败 ${inputPath}:`, error.message);
  }
}

/**
 * 批量优化图片
 */
async function optimizeImages() {
  const imagePatterns = [
    'public/images/**/*.jpg',
    'public/images/**/*.jpeg',
    'public/images/**/*.png'
  ];
  
  console.log('🚀 开始批量优化图片...\n');
  
  for (const pattern of imagePatterns) {
    const files = glob.sync(pattern);
    
    for (const file of files) {
      const relativePath = path.relative('public/images', file);
      const outputDir = path.join('public/images/optimized', path.dirname(relativePath));
      
      await optimizeImage(file, outputDir);
    }
  }
  
  console.log('\n🎉 所有图片优化完成！');
  console.log('\n📊 优化建议:');
  console.log('1. 使用优化后的图片替换原图片');
  console.log('2. 在代码中优先使用WebP和AVIF格式');
  console.log('3. 考虑使用CDN加速图片加载');
}

/**
 * 生成图片使用统计
 */
async function generateImageStats() {
  const files = glob.sync('public/images/**/*.{jpg,jpeg,png,webp,avif}');
  const stats = [];
  
  for (const file of files) {
    try {
      const stat = await fs.stat(file);
      const image = sharp(file);
      const metadata = await image.metadata();
      
      stats.push({
        file: path.relative('public', file),
        size: Math.round(stat.size / 1024),
        width: metadata.width,
        height: metadata.height,
        format: metadata.format
      });
    } catch (error) {
      console.warn(`无法分析文件: ${file}`);
    }
  }
  
  // 按文件大小排序
  stats.sort((a, b) => b.size - a.size);
  
  console.log('\n📈 图片使用统计:');
  console.log('文件路径\t\t大小(KB)\t尺寸\t\t格式');
  console.log('='.repeat(80));
  
  stats.forEach(stat => {
    const path = stat.file.padEnd(30);
    const size = stat.size.toString().padStart(8);
    const dimensions = `${stat.width}×${stat.height}`.padEnd(12);
    console.log(`${path}\t${size}\t${dimensions}\t${stat.format}`);
  });
  
  const totalSize = stats.reduce((sum, stat) => sum + stat.size, 0);
  console.log('\n' + '='.repeat(80));
  console.log(`总计: ${stats.length} 个文件，${Math.round(totalSize / 1024)} MB`);
}

// 主程序
async function main() {
  const args = process.argv.slice(2);
  
  if (args.includes('--stats')) {
    await generateImageStats();
  } else {
    await optimizeImages();
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = {
  optimizeImage,
  optimizeImages,
  generateImageStats
}; 