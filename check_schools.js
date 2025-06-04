const fs = require('fs');

// 读取学校数据文件
const content = fs.readFileSync('data/schools.ts', 'utf-8');

// 提取中文和英文数据
const zhMatch = content.match(/"zh":\s*\[([\s\S]*?)\],\s*"en"/);
const enMatch = content.match(/"en":\s*\[([\s\S]*?)\]\s*\}/);

if (zhMatch && enMatch) {
  // 计算中文学校数量
  const zhSchools = zhMatch[1].match(/{\s*"id":/g);
  const enSchools = enMatch[1].match(/{\s*"id":/g);
  
  console.log('📊 学校数据统计报告:');
  console.log('='.repeat(40));
  console.log(`中文学校数量: ${zhSchools ? zhSchools.length : 0}`);
  console.log(`英文学校数量: ${enSchools ? enSchools.length : 0}`);
  
  // 按国家统计
  const zhContent = zhMatch[1];
  const countries = {
    '美国': (zhContent.match(/"country":\s*"美国"/g) || []).length,
    '英国': (zhContent.match(/"country":\s*"英国"/g) || []).length,
    '新加坡': (zhContent.match(/"country":\s*"新加坡"/g) || []).length,
    '日本': (zhContent.match(/"country":\s*"日本"/g) || []).length,
    '加拿大': (zhContent.match(/"country":\s*"加拿大"/g) || []).length,
    '澳大利亚': (zhContent.match(/"country":\s*"澳大利亚"/g) || []).length,
    '香港': (zhContent.match(/"country":\s*"香港"/g) || []).length,
    '澳门': (zhContent.match(/"country":\s*"澳门"/g) || []).length,
    '新西兰': (zhContent.match(/"country":\s*"新西兰"/g) || []).length,
    '荷兰': (zhContent.match(/"country":\s*"荷兰"/g) || []).length,
    '西班牙': (zhContent.match(/"country":\s*"西班牙"/g) || []).length
  };
  
  console.log('\n🌍 按国家分布:');
  console.log('-'.repeat(30));
  Object.entries(countries).forEach(([country, count]) => {
    console.log(`${country}: ${count}所`);
  });
  
  const totalByCountry = Object.values(countries).reduce((a, b) => a + b, 0);
  console.log(`\n总计: ${totalByCountry}所学校`);
  
} else {
  console.log('❌ 无法解析学校数据');
} 