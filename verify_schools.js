const fs = require('fs');

try {
  // 读取文件
  const content = fs.readFileSync('data/schools.ts', 'utf8');
  
  // 提取中文学校数据
  const zhMatch = content.match(/"zh":\s*\[([\s\S]*?)\]\s*,\s*"en":/);
  if (!zhMatch) {
    console.log('❌ 无法找到中文学校数据');
    process.exit(1);
  }
  
  // 提取英文学校数据
  const enMatch = content.match(/"en":\s*\[([\s\S]*?)\]\s*\}\s*;?\s*$/);
  if (!enMatch) {
    console.log('❌ 无法找到英文学校数据');
    process.exit(1);
  }

  // 计算学校数量
  const zhCount = (zhMatch[1].match(/"id":\s*\d+/g) || []).length;
  const enCount = (enMatch[1].match(/"id":\s*\d+/g) || []).length;
  
  console.log('📊 学校数据验证报告:');
  console.log('========================================');
  console.log(`中文学校数量: ${zhCount}`);
  console.log(`英文学校数量: ${enCount}`);
  
  if (zhCount === 90 && enCount === 90) {
    console.log('✅ 成功！已达到90所学校的目标！');
  } else {
    console.log(`⚠️  还需要 ${90 - zhCount} 所中文学校和 ${90 - enCount} 所英文学校`);
  }
  
  // 统计国家分布
  const countries = {
    '美国': (zhMatch[1].match(/"country":\s*"美国"/g) || []).length,
    '英国': (zhMatch[1].match(/"country":\s*"英国"/g) || []).length,
    '新加坡': (zhMatch[1].match(/"country":\s*"新加坡"/g) || []).length,
    '日本': (zhMatch[1].match(/"country":\s*"日本"/g) || []).length,
    '加拿大': (zhMatch[1].match(/"country":\s*"加拿大"/g) || []).length,
    '澳大利亚': (zhMatch[1].match(/"country":\s*"澳大利亚"/g) || []).length,
    '香港': (zhMatch[1].match(/"country":\s*"香港"/g) || []).length,
    '澳门': (zhMatch[1].match(/"country":\s*"澳门"/g) || []).length,
    '新西兰': (zhMatch[1].match(/"country":\s*"新西兰"/g) || []).length,
    '荷兰': (zhMatch[1].match(/"country":\s*"荷兰"/g) || []).length,
    '西班牙': (zhMatch[1].match(/"country":\s*"西班牙"/g) || []).length
  };
  
  console.log('\n🌍 按国家分布:');
  console.log('------------------------------');
  let total = 0;
  for (const [country, count] of Object.entries(countries)) {
    if (count > 0) {
      console.log(`${country}: ${count}所`);
      total += count;
    }
  }
  console.log(`\n总计: ${total}所学校`);
  
} catch (error) {
  console.log('❌ 验证过程中出错:', error.message);
  process.exit(1);
} 