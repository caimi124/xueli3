const fs = require('fs');

// 读取原始数据
const content = fs.readFileSync('data/schools.ts', 'utf-8');

// 提取中文和英文数据
const zhMatch = content.match(/"zh":\s*\[([\s\S]*?)\],\s*"en":/);
const enMatch = content.match(/"en":\s*\[([\s\S]*?)\]\s*\}/);

if (!zhMatch || !enMatch) {
  console.log('❌ 无法解析数据');
  process.exit(1);
}

// 解析JSON数据
const zhDataStr = '[' + zhMatch[1] + ']';
const enDataStr = '[' + enMatch[1] + ']';

let zhData, enData;
try {
  zhData = JSON.parse(zhDataStr);
  enData = JSON.parse(enDataStr);
} catch (error) {
  console.log('❌ JSON解析失败:', error.message);
  process.exit(1);
}

console.log('🔍 语言混合问题检测报告:');
console.log('='.repeat(50));

// 检测中文数据中的英文条目
console.log('\n📊 中文数据部分检测:');
const zhProblems = [];
zhData.forEach((school, index) => {
  // 检查是否为英文学校名
  if (/^[A-Za-z\s\-\(\)\.]+$/.test(school.name)) {
    zhProblems.push({
      id: school.id,
      index,
      name: school.name,
      country: school.country,
      issue: '英文学校名在中文数据中'
    });
  }
  
  // 检查国家名是否为英文
  if (/^[A-Za-z\s]+$/.test(school.country)) {
    zhProblems.push({
      id: school.id,
      index,
      name: school.name,
      country: school.country,
      issue: '英文国家名在中文数据中'
    });
  }
});

console.log(`发现 ${zhProblems.length} 个问题条目:`);
zhProblems.slice(0, 10).forEach(problem => {
  console.log(`  ❌ ID ${problem.id}: ${problem.name} (${problem.country}) - ${problem.issue}`);
});

if (zhProblems.length > 10) {
  console.log(`  ... 还有 ${zhProblems.length - 10} 个问题`);
}

// 检测英文数据中的中文条目
console.log('\n📊 英文数据部分检测:');
const enProblems = [];
enData.forEach((school, index) => {
  // 检查是否为中文学校名
  if (/[\u4e00-\u9fff]/.test(school.name)) {
    enProblems.push({
      id: school.id,
      index,
      name: school.name,
      country: school.country,
      issue: '中文学校名在英文数据中'
    });
  }
});

console.log(`发现 ${enProblems.length} 个问题条目:`);
enProblems.slice(0, 10).forEach(problem => {
  console.log(`  ❌ ID ${problem.id}: ${problem.name} (${problem.country}) - ${problem.issue}`);
});

// 统计信息
console.log('\n📈 数据统计:');
console.log(`中文数据总数: ${zhData.length}`);
console.log(`英文数据总数: ${enData.length}`);
console.log(`中文数据问题比例: ${(zhProblems.length/zhData.length*100).toFixed(1)}%`);
console.log(`英文数据问题比例: ${(enProblems.length/enData.length*100).toFixed(1)}%`);

// 提供修复建议
console.log('\n🔧 修复建议:');
console.log('1. 将中文数据中的英文条目移到英文数据部分');
console.log('2. 确保中文数据中所有字段都是中文');
console.log('3. 确保ID对应关系正确');
console.log('4. 验证国家名称一致性');

// 保存问题报告
const report = {
  zhProblems,
  enProblems,
  summary: {
    zhTotal: zhData.length,
    enTotal: enData.length,
    zhProblemCount: zhProblems.length,
    enProblemCount: enProblems.length
  }
};

fs.writeFileSync('language_mix_report.json', JSON.stringify(report, null, 2));
console.log('\n💾 详细报告已保存到 language_mix_report.json'); 