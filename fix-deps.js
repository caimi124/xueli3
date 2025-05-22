// fix-deps.js - 修复依赖版本问题的脚本
const fs = require('fs');
const path = require('path');

console.log('开始修复依赖版本...');

// 读取package.json文件
const packageJsonPath = path.join(__dirname, 'package.json');
let packageJson;

try {
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  packageJson = JSON.parse(packageJsonContent);
  console.log('成功读取package.json文件');
} catch (error) {
  console.error('读取package.json文件失败:', error);
  process.exit(1);
}

// 确保@notionhq/client版本正确
const currentVersion = packageJson.dependencies['@notionhq/client'];
const targetVersion = '^3.1.1';

if (currentVersion !== targetVersion) {
  console.log(`更新@notionhq/client版本: ${currentVersion} -> ${targetVersion}`);
  packageJson.dependencies['@notionhq/client'] = targetVersion;
  
  // 写入修改后的package.json
  try {
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('成功更新package.json文件');
  } catch (error) {
    console.error('写入package.json文件失败:', error);
    process.exit(1);
  }
} else {
  console.log('@notionhq/client版本已经是最新的');
}

// 删除package-lock.json (如果存在)
const packageLockPath = path.join(__dirname, 'package-lock.json');
if (fs.existsSync(packageLockPath)) {
  try {
    fs.unlinkSync(packageLockPath);
    console.log('成功删除package-lock.json文件');
  } catch (error) {
    console.error('删除package-lock.json文件失败:', error);
  }
}

// 删除node_modules (如果存在)
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  console.log('node_modules文件夹存在，但我们不会自动删除它。如果需要，请手动执行 rm -rf node_modules');
}

console.log('依赖版本修复完成，请重新运行npm install'); 